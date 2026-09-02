---
layout: default
title: Projects
description: "Research studies, software, experiments, and collaborations."
published: false
---
<section class="page-shell shell">
  <header class="page-heading">
    <p class="eyebrow">Portfolio</p>
    <h1>{{ page.title }}</h1>
    <p class="page-deck">{{ page.description }} Each project is a Markdown file, so adding new work is as simple as copying one example.</p>
  </header>
  <div class="project-grid">
    {% assign sorted_projects = site.projects | sort: 'order' %}
    {% for project in sorted_projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
</section>
