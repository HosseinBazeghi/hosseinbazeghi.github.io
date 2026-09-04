---
layout: home
title: Home
description: "Academic homepage of Hossein Bazeghi Kisomi, a PhD candidate in Civil Engineering at Tianjin University specializing in earthquake engineering."
---

<section class="hero shell">
  <div class="hero__portrait-wrap reveal">
    <img
      class="hero__portrait"
      src="{{ site.author.profile_image | relative_url }}"
      alt="{{ site.author.profile_image_alt }}"
      width="1122"
      height="1402"
    >
    <div class="hero__availability">
      <span aria-hidden="true"></span>
      PhD candidate at Tianjin University
    </div>
  </div>

  <div class="hero__content reveal reveal--delay">
    <p class="eyebrow">{{ site.author.institution }}</p>

    <h1>{{ site.author.name }}</h1>

    <p class="hero__role">{{ site.author.title }}</p>

    <p class="hero__statement">
      My research focuses on <em>soil–structure interaction, seismic wave propagation,
      strong ground motion, earthquake engineering, and numerical modeling</em>.
    </p>

    <p class="hero__bio">{{ site.author.bio }}</p>

    <div class="button-row">
      <a class="button button--primary" href="{{ '/research/' | relative_url }}">
        Explore my research <span aria-hidden="true">→</span>
      </a>

      <a class="button button--secondary" href="{{ '/publications/' | relative_url }}">
        View publications
      </a>
    </div>

    <div class="social-row" aria-label="Professional profiles">
      <a href="{{ site.social.github }}" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="{{ site.social.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="{{ site.social.google_scholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <a href="{{ site.social.researchgate }}" target="_blank" rel="noopener noreferrer">ResearchGate</a>
      <a href="{{ site.social.orcid }}" target="_blank" rel="noopener noreferrer">ORCID</a>
      <a href="mailto:{{ site.author.email }}">Email</a>
    </div>
  </div>
</section>

<section class="signal-strip" aria-label="Professional snapshot">
  <div class="shell signal-grid signal-grid--compact">
    <div>
      <strong>{{ site.data.publications | size }}</strong>
      <span>Publications listed</span>
    </div>

    <div>
      <strong>{{ site.projects | size }}</strong>
      <span>Projects listed</span>
    </div>

  </div>
</section>

<section class="section shell split-intro reveal">
  <div>
    <p class="eyebrow">Now</p>
    <h2>Current work</h2>
  </div>

  <div class="prose prose--lead">
    <p>
      My current work focuses on nonlinear soil–foundation–structure interaction
      under near-fault pulse-like ground motions. I use finite-element and
      finite-difference methods to investigate the response of soil, foundations,
      and structures under earthquake loading.
    </p>

    <p>
      I also work with strong-motion data from the Yunnan region of China and Iran,
      with a focus on ground-motion characteristics, analysis, and prediction.
    </p>

    <a class="text-link" href="{{ '/research/' | relative_url }}">
      Read about my current research <span aria-hidden="true">→</span>
    </a>
  </div>
</section>

<section class="section section--tint">
  <div class="shell">
    <div class="section-heading reveal">
      <div>
        <p class="eyebrow">Focus</p>
        <h2>Research interests</h2>
      </div>

      <p>
        My research combines earthquake ground motion, soil–structure interaction,
        and computational modeling.
      </p>
    </div>

    <div class="interest-grid">
      <article class="interest-card reveal">
        <span>01</span>
        <h3>Soil–structure interaction</h3>
        <p>
          Studying the coupled response of soil, foundations, and structures
          during earthquakes.
        </p>
      </article>

      <article class="interest-card reveal reveal--delay">
        <span>02</span>
        <h3>Seismic wave propagation &amp; strong ground motion</h3>
        <p>
          Investigating seismic wave propagation and the characteristics of
          earthquake ground motion.
        </p>
      </article>

      <article class="interest-card reveal reveal--delay-2">
        <span>03</span>
        <h3>Earthquake engineering &amp; numerical modeling</h3>
        <p>
          Applying computational methods to study the seismic response of
          soil and structural systems.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="shell">
    <div class="section-heading reveal">
      <div>
        <p class="eyebrow">Selected output</p>
        <h2>Recent publications</h2>
      </div>

      <a class="text-link" href="{{ '/publications/' | relative_url }}">
        View all publications <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="publication-list publication-list--home">
      {% assign sorted_publications = site.data.publications | sort: 'year' | reverse %}
      {% for publication in sorted_publications limit: 3 %}
        {% include publication-card.html publication=publication compact=true %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-heading reveal">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2>Projects</h2>
    </div>

    <a class="text-link" href="{{ '/projects/' | relative_url }}">
      View all projects <span aria-hidden="true">→</span>
    </a>
  </div>

  <div class="project-grid project-grid--featured">
    {% assign sorted_projects = site.projects | sort: 'order' %}
    {% for project in sorted_projects limit: 1 %}
      {% include project-card.html project=project heading_level=3 %}
    {% endfor %}
  </div>
</section>
