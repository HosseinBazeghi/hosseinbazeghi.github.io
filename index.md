---
layout: home
title: Home
description: "Hossein Bazeghi Kisomi — PhD candidate at Tianjin University studying earthquake engineering, soil–structure interaction, and strong ground motion."
---
<section class="hero shell" aria-labelledby="intro-title">
  <div class="hero__content">
    <p class="eyebrow">Earthquake engineering · {{ site.author.institution }}</p>
    <h1 id="intro-title">{{ site.author.name }}</h1>
    <p class="hero__role">{{ site.author.title }}</p>
    <p class="hero__statement">{{ site.data.profile.introduction }}</p>
    <p class="hero__bio">{{ site.author.bio }}</p>
    <div class="button-row">
      <a class="button button--primary" href="{{ '/publications/' | relative_url }}">Publications <span aria-hidden="true">→</span></a>
      <a class="button button--secondary" href="{{ '/cv/' | relative_url }}">Academic CV</a>
    </div>
    <nav class="social-row" aria-label="Academic and professional profiles">{% include social-links.html %}</nav>
  </div>
  <figure class="hero__portrait-wrap">
    <img class="hero__portrait" src="{{ site.author.profile_image | relative_url }}" alt="{{ site.author.profile_image_alt | escape }}" width="560" height="700" fetchpriority="high">
    <figcaption>{{ site.author.institution }}<br>{{ site.author.location }}</figcaption>
  </figure>
</section>

<section class="section shell home-research" aria-labelledby="research-title">
  <div class="section-heading">
    <div><p class="eyebrow">Research</p><h2 id="research-title">Understanding seismic response</h2></div>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Research overview <span aria-hidden="true">→</span></a>
  </div>
  <p class="research-summary">{{ site.data.profile.current_work }}</p>
  <div class="interest-grid">
    {% for interest in site.data.research %}
    <article class="interest-card"><span aria-hidden="true">0{{ forloop.index }}</span><h3>{{ interest.title }}</h3><p>{{ interest.description }}</p></article>
    {% endfor %}
  </div>
</section>

{% assign selected_publications = site.data.publications | where: 'featured', true | sort: 'year' | reverse %}
{% if selected_publications.size > 0 %}
<section class="section section--tint" aria-labelledby="publications-title">
  <div class="shell">
    <div class="section-heading">
      <div><p class="eyebrow">Research output</p><h2 id="publications-title">Selected publications</h2></div>
      <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications & manuscripts <span aria-hidden="true">→</span></a>
    </div>
    <div class="publication-list">{% for publication in selected_publications limit: 3 %}{% include publication-card.html publication=publication compact=true %}{% endfor %}</div>
  </div>
</section>
{% endif %}

{% assign featured_projects = site.projects | where: 'featured', true | sort: 'order' %}
{% if featured_projects.size > 0 %}
<section class="section shell" aria-labelledby="projects-title">
  <div class="section-heading">
    <div><p class="eyebrow">Current work</p><h2 id="projects-title">Research projects</h2></div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">→</span></a>
  </div>
  <div class="project-grid">{% for project in featured_projects limit: 3 %}{% include project-card.html project=project heading_level=3 %}{% endfor %}</div>
</section>
{% endif %}

{% if site.data.news.size > 0 %}
<section class="section shell updates-section" aria-labelledby="news-title">
  <div><p class="eyebrow">Updates</p><h2 id="news-title">News</h2></div>
  <ul class="timeline">
    {% assign news = site.data.news | sort: 'date' | reverse %}
    {% for item in news limit: 5 %}<li><time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%b %Y' }}</time><div>{{ item.text | markdownify }}{% if item.url %}<a href="{{ item.url | relative_url }}">Read more</a>{% endif %}</div></li>{% endfor %}
  </ul>
</section>
{% endif %}
