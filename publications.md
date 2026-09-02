---
layout: default
title: Publications
description: "Peer-reviewed articles and conference papers by Hossein Bazeghi Kisomi."
---
<section class="page-shell shell">
  <header class="page-heading">
    <p class="eyebrow">Research output</p>
    <h1>{{ page.title }}</h1>
    <p class="page-deck">{{ page.description }} For the most current citation information, visit my <a href="{{ site.social.google_scholar }}">Google Scholar profile</a>.</p>
  </header>

  <div class="filter-bar" data-publication-filters aria-label="Publication filters">
    <label class="search-field">
      <span class="sr-only">Search publications</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>
      <input type="search" placeholder="Search titles, authors, venues…" data-filter-search>
    </label>
    <select data-filter-select aria-label="Filter publications by year">
      <option value="all">All years</option>
      {% assign years = site.data.publications | map: 'year' | uniq | sort | reverse %}
      {% for year in years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}
    </select>
    <button class="filter-button is-active" type="button" data-filter-button="all">All</button>
    <button class="filter-button" type="button" data-filter-button="journal-articles">Journals</button>
    <button class="filter-button" type="button" data-filter-button="conference-papers">Conferences</button>
    <button class="filter-button" type="button" data-filter-button="preprints">Preprints</button>
  </div>

  <div class="publication-list">
    {% assign publications = site.data.publications | sort: 'year' | reverse %}
    {% for publication in publications %}{% include publication-card.html publication=publication %}{% endfor %}
  </div>
  <p class="empty-state" data-filter-empty hidden>No publications match those filters.</p>
</section>
