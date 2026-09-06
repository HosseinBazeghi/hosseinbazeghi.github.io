---
title: Academic CV
eyebrow: Academic record
description: "Education, research experience, and scholarly work of Hossein Bazeghi Kisomi."
---
{% if site.cv_path %}<p><a class="button button--primary" href="{{ site.cv_path | relative_url }}">Download CV (PDF)</a></p>{% endif %}

## Education

{% include academic-entries.html entries=site.data.profile.education %}

## Research experience

{% include academic-entries.html entries=site.data.profile.experience %}

## Publications

See the [complete publication record]({{ '/publications/' | relative_url }}), including journal articles, conference papers, and submitted manuscripts, with citations and links.

{% assign optional_sections = 'awards,teaching,talks,service' | split: ',' %}
{% for key in optional_sections %}
{% assign entries = site.data.profile[key] %}
{% if entries.size > 0 %}
<h2>{{ key | capitalize }}</h2>
{% include academic-entries.html entries=entries %}
{% endif %}
{% endfor %}

## Contact

[{{ site.author.email }}](mailto:{{ site.author.email }}) · {{ site.author.institution }}, {{ site.author.location }}
