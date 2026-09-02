---
title: Contact
eyebrow: Get in touch
description: "For research conversations, collaborations, speaking, and thoughtful questions."
wide: true
---

<div class="contact-grid">
  <section class="contact-card contact-card--primary">
    <div>
      <p class="eyebrow">Email</p>
      <h2>Start a conversation.</h2>
      <p>The simplest way to reach me is by email. A short note with context helps me respond usefully.</p>
    </div>
    <a href="mailto:{{ site.author.email }}">{{ site.author.email }} →</a>
  </section>
  <section class="contact-card">
    <p class="eyebrow">Affiliation</p>
    <h3>{{ site.author.institution }}</h3>
    <p>{{ site.author.location }}</p>
  </section>
  <section class="contact-card">
    <p class="eyebrow">Profiles</p>
    <p><a href="{{ site.social.github }}">GitHub</a><br><a href="{{ site.social.linkedin }}">LinkedIn</a><br><a href="{{ site.social.google_scholar }}">Google Scholar</a><br><a href="{{ site.social.orcid }}">ORCID</a></p>
  </section>
</div>

This site intentionally uses direct contact links instead of a server-side form, so it needs no database, form service, or paid backend.
