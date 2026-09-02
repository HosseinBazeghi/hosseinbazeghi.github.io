---
layout: home
title: Home
description: "Personal homepage, research portfolio, publications, projects, CV, and technical writing."
---

<section class="hero shell">
  <div class="hero__portrait-wrap reveal">
    <img class="hero__portrait" src="{{ site.author.profile_image | relative_url }}" alt="{{ site.author.profile_image_alt }}" width="520" height="620">
    <div class="hero__availability"><span aria-hidden="true"></span> Open to collaboration</div>
  </div>
  <div class="hero__content reveal reveal--delay">
    <p class="eyebrow">{{ site.author.institution }}</p>
    <h1>{{ site.author.name }}</h1>
    <p class="hero__role">{{ site.author.title }}</p>
    <p class="hero__statement">“I work on <em>[research area]</em>, with a particular focus on <em>[topic]</em>.”</p>
    <p class="hero__bio">{{ site.author.bio }}</p>
    <div class="button-row">
      <a class="button button--primary" href="{{ site.cv_path | relative_url }}">Download CV <span aria-hidden="true">↓</span></a>
      <a class="button button--secondary" href="{{ '/research/' | relative_url }}">Explore my work <span aria-hidden="true">→</span></a>
    </div>
    <div class="social-row" aria-label="Professional profiles">
      <a href="{{ site.social.github }}">GitHub</a>
      <a href="{{ site.social.google_scholar }}">Google Scholar</a>
      <a href="{{ site.social.linkedin }}">LinkedIn</a>
      <a href="{{ site.social.orcid }}">ORCID</a>
      <a href="mailto:{{ site.author.email }}">Email</a>
    </div>
  </div>
</section>

<section class="signal-strip" aria-label="Professional snapshot">
  <div class="shell signal-grid">
    <div><strong>03</strong><span>Core research themes</span></div>
    <div><strong>{{ site.data.publications | size }}</strong><span>Publications listed</span></div>
    <div><strong>{{ site.projects | size }}</strong><span>Projects documented</span></div>
    <div><strong>{{ site.posts | size }}</strong><span>Articles published</span></div>
  </div>
</section>

<section class="section shell split-intro reveal">
  <div>
    <p class="eyebrow">Now</p>
    <h2>Current work</h2>
  </div>
  <div class="prose prose--lead">
    <p><strong>Demo content:</strong> I am currently developing methods that connect trustworthy analysis, computational tools, and domain knowledge. My work asks how we can make complex systems easier to understand—and the resulting decisions more reliable.</p>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Read about my current research <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="section section--tint">
  <div class="shell">
    <div class="section-heading reveal">
      <div><p class="eyebrow">Focus</p><h2>Research interests</h2></div>
      <p>Three example themes show how concise research areas can be presented. Replace them with your own.</p>
    </div>
    <div class="interest-grid">
      <article class="interest-card reveal"><span>01</span><h3>Data-informed systems</h3><p>Methods for learning from incomplete, noisy, and high-dimensional observations.</p></article>
      <article class="interest-card reveal reveal--delay"><span>02</span><h3>Scientific computing</h3><p>Reproducible computational workflows that turn models into reliable evidence.</p></article>
      <article class="interest-card reveal reveal--delay-2"><span>03</span><h3>Human-centered tools</h3><p>Interfaces and explanations that make technical results useful to real people.</p></article>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-heading reveal">
    <div><p class="eyebrow">Selected work</p><h2>Featured projects</h2></div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
  </div>
  <div class="project-grid">
    {% assign featured_projects = site.projects | where: 'featured', true %}
    {% for project in featured_projects limit: 3 %}{% include project-card.html project=project %}{% endfor %}
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

<section class="section shell">
  <div class="section-heading reveal">
    <div><p class="eyebrow">Notes & essays</p><h2>Recent writing</h2></div>
    <a class="text-link" href="{{ '/blog/' | relative_url }}">Browse the blog <span aria-hidden="true">→</span></a>
  </div>
  <div class="post-grid">
    {% for post in site.posts limit: 3 %}{% include post-card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section shell updates-section">
  <div><p class="eyebrow">Notebook</p><h2>Latest updates</h2></div>
  <ol class="timeline">
    {% for item in site.data.news limit: 4 %}
      <li><time datetime="{{ item.date }}">{{ item.date | date: '%b %Y' }}</time><p>{{ item.text }}</p></li>
    {% endfor %}
  </ol>
</section>
