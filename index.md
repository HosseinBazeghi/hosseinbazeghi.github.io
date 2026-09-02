---
layout: home
title: Home
description: "Academic homepage of Hossein Bazeghi Kisomi, a PhD candidate in earthquake engineering at Tianjin University."
---

<section class="hero shell">
  <div class="hero__portrait-wrap reveal">
    <img class="hero__portrait" src="{{ site.author.profile_image | relative_url }}" alt="{{ site.author.profile_image_alt }}" width="1122" height="1402">
    <div class="hero__availability"><span aria-hidden="true"></span> PhD candidate at Tianjin University</div>
  </div>
  <div class="hero__content reveal reveal--delay">
    <p class="eyebrow">{{ site.author.institution }}</p>
    <h1>{{ site.author.name }}</h1>
    <p class="hero__role">{{ site.author.title }}</p>
    <p class="hero__statement">Investigating how <em>soil, structures, and seismic waves</em> interact during earthquakes.</p>
    <p class="hero__bio">{{ site.author.bio }}</p>
    <div class="button-row">
      <a class="button button--primary" href="{{ '/research/' | relative_url }}">Explore my research <span aria-hidden="true">→</span></a>
      <a class="button button--secondary" href="{{ '/publications/' | relative_url }}">View publications</a>
    </div>
    <div class="social-row" aria-label="Professional profiles">
      <a href="{{ site.social.google_scholar }}">Google Scholar</a>
      <a href="{{ site.social.researchgate }}">ResearchGate</a>
      <a href="mailto:{{ site.author.email }}">Email</a>
    </div>
  </div>
</section>

<section class="signal-strip" aria-label="Professional snapshot">
  <div class="shell signal-grid">
    <div><strong>05</strong><span>Research focus areas</span></div>
    <div><strong>{{ site.data.publications | size }}</strong><span>Publications listed</span></div>
    <div><strong>02</strong><span>Universities</span></div>
    <div><strong>01</strong><span>Research laboratory</span></div>
  </div>
</section>

<section class="section shell split-intro reveal">
  <div>
    <p class="eyebrow">Now</p>
    <h2>Current work</h2>
  </div>
  <div class="prose prose--lead">
    <p>At Tianjin University's Strong Motion Observation and Simulation Laboratory, I study the response of soil–foundation–structure systems to earthquake excitation. My work combines wave-propagation theory, strong-motion analysis, and numerical modeling to better understand how seismic waves interact with foundations and structures.</p>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Read about my current research <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="section section--tint">
  <div class="shell">
    <div class="section-heading reveal">
      <div><p class="eyebrow">Focus</p><h2>Research interests</h2></div>
      <p>My work connects earthquake ground motion with the numerical analysis of soil and structural response.</p>
    </div>
    <div class="interest-grid">
      <article class="interest-card reveal"><span>01</span><h3>Soil–structure interaction</h3><p>Understanding how foundations, surrounding soil, and structural systems respond together during earthquakes.</p></article>
      <article class="interest-card reveal reveal--delay"><span>02</span><h3>Wave propagation & strong motion</h3><p>Studying how seismic waves travel through soil and influence recorded ground motion and structural response.</p></article>
      <article class="interest-card reveal reveal--delay-2"><span>03</span><h3>Earthquake engineering & modeling</h3><p>Using numerical models to investigate seismic behavior and support more reliable engineering analysis.</p></article>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="shell">
    <div class="section-heading reveal">
      <div><p class="eyebrow">Selected output</p><h2>Recent publications</h2></div>
      <a class="text-link" href="{{ '/publications/' | relative_url }}">View all publications <span aria-hidden="true">→</span></a>
    </div>
    <div class="publication-list publication-list--home">
      {% assign sorted_publications = site.data.publications | sort: 'year' | reverse %}
      {% for publication in sorted_publications limit: 3 %}{% include publication-card.html publication=publication compact=true %}{% endfor %}
    </div>
  </div>
</section>
