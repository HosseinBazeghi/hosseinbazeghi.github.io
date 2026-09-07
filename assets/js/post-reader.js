(function () {
  'use strict';

  var controls = document.querySelector('[data-post-reader]');
  var article = document.querySelector('.post-content');
  if (!controls || !article || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;

  var synth = window.speechSynthesis;
  var play = controls.querySelector('[data-reader-play]');
  var stop = controls.querySelector('[data-reader-stop]');
  var rate = controls.querySelector('[data-reader-rate]');
  var status = controls.querySelector('[data-reader-status]');
  var state = 'idle';
  var index = 0;
  var generation = 0;
  var utterance = null; // Retain the active utterance until its events finish.
  var chunks = [];

  function collectText() {
    var copy = article.cloneNode(true);
    copy.querySelectorAll('pre, code, button, script, style, iframe, [aria-hidden="true"]').forEach(function (element) { element.remove(); });
    var selector = 'p, h2, h3, h4, li, figcaption';
    var blocks = Array.from(copy.querySelectorAll(selector)).filter(function (element) {
      return !element.parentElement.closest(selector);
    });
    var result = [];
    blocks.forEach(function (block) {
      var words = block.textContent.trim().split(/\s+/);
      var chunk = '';
      words.forEach(function (word) {
        if (chunk && chunk.length + word.length > 220) {
          result.push(chunk);
          chunk = '';
        }
        chunk += (chunk ? ' ' : '') + word;
        if (chunk.length > 80 && /[.!?]["'”’)]?$/.test(word)) {
          result.push(chunk);
          chunk = '';
        }
      });
      if (chunk) result.push(chunk);
    });
    return result;
  }

  function update(message) {
    play.textContent = state === 'reading' ? 'Pause' : state === 'paused' ? 'Resume' : 'Listen to this post';
    stop.disabled = state === 'idle';
    rate.disabled = state !== 'idle';
    status.textContent = message;
  }

  function reset(message) {
    generation += 1; // Ignore delayed end/error callbacks after cancellation.
    state = 'idle';
    utterance = null;
    synth.cancel();
    index = 0;
    update(message);
  }

  function speakNext() {
    if (state !== 'reading') return;
    if (index >= chunks.length) {
      state = 'idle';
      utterance = null;
      index = 0;
      update('Finished reading.');
      return;
    }
    var run = generation;
    utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = document.documentElement.lang || 'en';
    utterance.rate = Number(rate.value);
    utterance.onend = function () {
      if (run !== generation) return;
      utterance = null;
      index += 1;
      speakNext();
    };
    utterance.onerror = function () {
      if (run !== generation) return;
      reset('Reading is unavailable right now. Please try again or use another browser.');
    };
    try { synth.speak(utterance); }
    catch (error) { reset('Reading is unavailable right now. Please try another browser.'); }
  }

  play.addEventListener('click', function () {
    if (state === 'reading') {
      state = 'paused';
      synth.pause();
      update('Paused.');
    } else if (state === 'paused') {
      state = 'reading';
      synth.resume();
      update('Reading the post.');
      if (!utterance) speakNext();
    } else {
      chunks = collectText();
      if (!chunks.length) { update('There is no text to read in this post.'); return; }
      generation += 1;
      synth.cancel();
      synth.resume(); // Cancellation alone can leave the browser paused.
      state = 'reading';
      index = 0;
      update('Reading the post.');
      speakNext();
    }
  });
  stop.addEventListener('click', function () { reset('Stopped. Press Listen to start again.'); });
  window.addEventListener('pagehide', function () { reset('Read aloud using your browser’s voice.'); });
  controls.hidden = false;
}());
