(function () {
  'use strict';

  function copyText(text, button, label) {
    if (!navigator.clipboard) { button.textContent = 'Select text to copy'; return; }
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = 'Copied';
      window.setTimeout(function () { button.textContent = label; }, 1600);
    }).catch(function () { button.textContent = 'Select text to copy'; });
  }

  var root = document.documentElement;
  var body = document.body;
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  var header = document.querySelector('[data-site-header]');
  var themeToggle = document.querySelector('[data-theme-toggle]');
  var themeColor = document.querySelector('[data-theme-color]');
  var hasManualTheme = false;

  function closeNav(returnFocus) {
    if (!navToggle || !nav) return;
    var wasOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    if (returnFocus && wasOpen) navToggle.focus();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { closeNav(false); }); });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1072) closeNav(false);
    });
  }

  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });

  function syncTheme(theme) {
    var isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';
    if (themeColor) themeColor.setAttribute('content', isDark ? '#0e1820' : '#fafaf7');
    if (themeToggle) {
      var action = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggle.setAttribute('aria-label', action);
      themeToggle.setAttribute('title', action);
    }
  }

  syncTheme(root.dataset.theme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      hasManualTheme = true;
      syncTheme(next);
      try { localStorage.setItem('theme', next); } catch (error) { /* The current-page choice still works. */ }
    });
  }

  if (window.matchMedia) {
    var colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
    var hasSavedTheme = false;
    try { hasSavedTheme = localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === 'dark'; } catch (error) { /* Use OS preference. */ }
    var followSystemTheme = function (event) {
      if (!hasSavedTheme && !hasManualTheme) syncTheme(event.matches ? 'dark' : 'light');
    };
    if (colorPreference.addEventListener) colorPreference.addEventListener('change', followSystemTheme);
    else if (colorPreference.addListener) colorPreference.addListener(followSystemTheme);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeNav(true);
      closeLightbox();
    }
  });

  // Automatic table of contents for posts and project pages.
  document.querySelectorAll('[data-toc]').forEach(function (toc) {
    var source = document.querySelector(toc.dataset.tocSource || '.prose');
    if (!source) return;
    var headings = Array.from(source.querySelectorAll('h2, h3'));
    if (!headings.length) {
      toc.parentElement.hidden = true;
      return;
    }
    var list = document.createElement('ol');
    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') || 'section-' + (index + 1);
      }
      var item = document.createElement('li');
      item.dataset.level = heading.tagName.slice(1);
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });
    toc.appendChild(list);

    if ('IntersectionObserver' in window) {
      var links = Array.from(toc.querySelectorAll('a'));
      var tocObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) { link.classList.toggle('is-active', link.hash === '#' + entry.target.id); });
        });
      }, { rootMargin: '-18% 0px -70% 0px' });
      headings.forEach(function (heading) { tocObserver.observe(heading); });
    }
  });

  // Copy buttons for fenced code blocks.
  document.querySelectorAll('.prose pre').forEach(function (pre) {
    if (pre.closest('.citation-panel')) return;
    var code = pre.querySelector('code');
    if (!code) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.addEventListener('click', function () {
      copyText(code.textContent, button, 'Copy');
    });
    pre.appendChild(button);
  });

  // Native details elements provide citations without JavaScript.
  document.querySelectorAll('[data-copy-target]').forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = document.getElementById(button.dataset.copyTarget);
      var code = panel && panel.querySelector('code');
      if (!code) return;
      copyText(code.textContent, button, 'Copy BibTeX');
    });
  });

  // YouTube loads only after interaction, preserving initial page speed.
  function youtubeId(url) {
    var match = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
    return match ? match[1] : '';
  }
  document.querySelectorAll('[data-youtube-url]').forEach(function (container) {
    var link = container.querySelector('a');
    if (!link) return;
    link.addEventListener('click', function (event) {
      var id = youtubeId(container.dataset.youtubeUrl);
      if (!id) return;
      event.preventDefault();
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1';
      iframe.title = container.dataset.title || 'YouTube video';
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      container.replaceChildren(iframe);
    });
  });

  function driveId(url) {
    var match = String(url).match(/\/d\/([A-Za-z0-9_-]+)/) || String(url).match(/[?&]id=([A-Za-z0-9_-]+)/);
    return match ? match[1] : '';
  }
  document.querySelectorAll('[data-drive-url]').forEach(function (container) {
    var link = container.querySelector('a');
    if (!link) return;
    link.addEventListener('click', function (event) {
      var id = driveId(container.dataset.driveUrl);
      if (!id) return;
      event.preventDefault();
      var iframe = document.createElement('iframe');
      iframe.src = 'https://drive.google.com/file/d/' + encodeURIComponent(id) + '/preview';
      iframe.title = container.dataset.title || 'Google Drive preview';
      iframe.loading = 'lazy';
      iframe.allow = 'autoplay';
      container.replaceChildren(iframe);
    });
  });

  // Image lightbox.
  var lightbox = document.querySelector('[data-lightbox]');
  var lightboxImage = lightbox && lightbox.querySelector('[data-lightbox-image]');
  var lightboxCaption = lightbox && lightbox.querySelector('[data-lightbox-caption]');
  var lastFocused = null;
  function openLightbox(trigger) {
    if (!lightbox || !lightboxImage) return;
    lastFocused = trigger;
    lightboxImage.src = trigger.dataset.src;
    lightboxImage.alt = trigger.dataset.alt || '';
    lightboxCaption.textContent = trigger.dataset.caption || '';
    document.querySelectorAll('body > header, body > main, body > footer').forEach(function (element) { element.inert = true; });
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    body.classList.add('is-locked');
    lightbox.querySelector('[data-lightbox-close]').focus();
  }
  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    document.querySelectorAll('body > header, body > main, body > footer').forEach(function (element) { element.inert = false; });
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    body.classList.remove('is-locked');
    lightboxImage.removeAttribute('src');
    if (lastFocused) lastFocused.focus();
  }
  document.querySelectorAll('[data-lightbox-trigger]').forEach(function (trigger) {
    trigger.addEventListener('click', function () { openLightbox(trigger); });
  });
  if (lightbox) {
    lightbox.addEventListener('keydown', function (event) { if (event.key === 'Tab') { event.preventDefault(); lightbox.querySelector('[data-lightbox-close]').focus(); } });
    lightbox.querySelector('[data-lightbox-close]').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) { if (event.target === lightbox) closeLightbox(); });
  }

  // Generic client-side filtering for blog posts and publications.
  function setupFiltering(rootSelector, itemSelector) {
    var filterRoot = document.querySelector(rootSelector);
    if (!filterRoot) return;
    var items = Array.from(document.querySelectorAll(itemSelector));
    var search = filterRoot.querySelector('[data-filter-search]');
    var select = filterRoot.querySelector('[data-filter-select]');
    var buttons = Array.from(filterRoot.querySelectorAll('[data-filter-button]'));
    var empty = document.querySelector('[data-filter-empty]');
    var activeButton = 'all';
    function apply() {
      var query = search ? search.value.trim().toLowerCase() : '';
      var selected = select ? select.value : 'all';
      var visible = 0;
      items.forEach(function (item) {
        var haystack = (item.dataset.title || '') + ' ' + (item.dataset.description || '') + ' ' + (item.dataset.tags || '') + ' ' + item.textContent.toLowerCase();
        var type = item.dataset.category || item.dataset.type || '';
        var year = item.dataset.year || '';
        var matchesQuery = !query || haystack.indexOf(query) !== -1;
        var matchesButton = activeButton === 'all' || type === activeButton || (item.dataset.tags || '').split(' ').indexOf(activeButton) !== -1;
        var matchesSelect = selected === 'all' || type === selected || year === selected;
        var show = matchesQuery && matchesButton && matchesSelect;
        item.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
      var status = document.querySelector('[data-filter-status]');
      if (status) status.textContent = visible + ' of ' + items.length + ' publications';
    }
    apply();
    if (search) search.addEventListener('input', apply);
    if (select) select.addEventListener('change', apply);
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeButton = button.dataset.filterButton;
        buttons.forEach(function (candidate) { candidate.classList.toggle('is-active', candidate === button); candidate.setAttribute('aria-pressed', String(candidate === button)); });
        apply();
      });
    });
  }
  setupFiltering('[data-blog-filters]', '[data-post-card]');
  setupFiltering('[data-publication-filters]', '[data-publication]');

  document.querySelectorAll('[data-copy-url]').forEach(function (button) {
    button.addEventListener('click', function () {
      copyText(window.location.href, button, 'Copy link');
    });
  });
}());
