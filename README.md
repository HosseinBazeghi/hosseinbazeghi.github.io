# Hossein Bazeghi Kisomi — academic website

A lightweight Jekyll website published with GitHub Pages. Markdown and YAML hold the content; reusable HTML templates and one CSS/JavaScript pair handle presentation. No frontend framework or npm build is required.

## Where to edit

| Content | Location |
| --- | --- |
| Name, affiliation, short bio, email, social links | `_config.yml` |
| Introduction, current work, education, experience, awards, teaching, talks, service | `_data/profile.yml` |
| Homepage research interests | `_data/research.yml` |
| Full biography and research narrative | `about.md`, `research.md` |
| Publications and citations | `_data/publications.yml` |
| Projects | One Markdown file per project in `_projects/` |
| News | `_data/news.yml` |
| Research notes | Dated Markdown files in `_posts/` |
| Navigation | `_data/navigation.yml` |
| PDFs and slides | `assets/documents/` |
| Figures and photographs | `assets/figures/`, `assets/images/` |
| Colors, typography, layout | `assets/css/main.css` |

Education is shared by About and the CV. Empty optional CV sections and news are hidden. The homepage displays up to three featured publications and projects. Publication types and year filters update automatically.

## Add a publication

Append to `_data/publications.yml`. Use a unique ID, integer year, and consistent type. Keep submitted manuscripts labeled accurately. Omit unavailable links.

```yaml
- id: surname-2027-short-title
  type: Journal Articles
  title: "Full article title"
  authors: "Hossein Bazeghi Kisomi, Coauthor Name"
  venue: "Journal name"
  year: 2027
  featured: true
  doi: "https://doi.org/your-doi"
  pdf: "/assets/documents/paper.pdf"
  citation: "The complete citation."
  bibtex: |
    @article{surname2027short,
      title = {Full article title},
      author = {Bazeghi Kisomi, Hossein and Name, Coauthor},
      journal = {Journal name},
      year = {2027}
    }
```

Optional fields: `link`, `code`, `dataset`, `project`, `slides`, `video`, `volume`, `issue`, `pages`. Set `featured: false` to omit an entry from the homepage while retaining it in the full list.

## Add a project

Create `_projects/descriptive-name.md`:

```markdown
---
title: "Project title"
description: "A concise research question and approach."
status: Ongoing
featured: true
order: 3
toc: false
---

## Research question

Explain the problem, your contribution, methods, and available findings.
```

Optional fields: `date_range`, `image`, `image_alt`, `tools` (YAML list), `github`, `publication`, `video`, `math: true`. Images are optional. The filename sets the URL; avoid renaming published files without a redirect.

## Add news

Replace `[]` in `_data/news.yml` with entries:

```yaml
- date: 2026-09-06
  text: "A confirmed research update."
  url: /publications/
```

The URL is optional. The latest five updates appear on the homepage, sorted by date. Add only news ready to be public.

## Academic information and CV

Edit `_data/profile.yml`. Entries use `title`, `institution`, optional `location` and `date`, and `description` (Markdown supported). Replace the empty lists for awards, teaching, talks, and service when appropriate. These sections appear automatically in the web CV.

Upload your actual PDF to `assets/documents/cv.pdf`, then set `cv_path: "/assets/documents/cv.pdf"` in `_config.yml`. The download button stays hidden while the path is null. The web CV also has browser print styling. No placeholder CV is published.

## Research notes

Create `_posts/YYYY-MM-DD-descriptive-title.md`:

```markdown
---
title: "Research note title"
description: "Short summary."
date: 2026-09-06 09:00:00 +0000
category: Methods
tags: [earthquake-engineering, modeling]
toc: true
math: false
---

Write your note in Markdown.
```

Set `published: false` for drafts. Posts appear at `/blog/` and in RSS. The footer gains a Research notes link when posts exist; add `/blog/` to navigation if desired. Blog search covers the current page, with six posts per page.

## Figures and media

Use descriptive alt text and compressed images. Reusable includes:

```liquid
{% include figure.html src="/assets/figures/results.png" alt="Description of result" caption="Figure caption." %}
{% include youtube.html url="https://www.youtube.com/watch?v=VIDEO_ID" title="Talk title" %}
{% include google-drive.html url="https://drive.google.com/file/d/FILE_ID/view" title="Supplement" mode="link" %}
```

YouTube and Drive previews load on demand. Drive files must be publicly shared. Set `math: true` only on pages that need MathJax, with `$...$` inline or `$$...$$` display equations. For internal links, use `[Slides]({{ '/assets/documents/talk.pdf' | relative_url }})`.

## Preview and publish

Install Ruby 3.3 and Bundler, then:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. Restart after changing `_config.yml`. Production checks:

```sh
bundle exec jekyll build
ruby scripts/check_site.rb
```

Commit and push to `main`. `.github/workflows/pages.yml` builds, checks, and deploys to GitHub Pages. The repository's Pages source must be GitHub Actions. Review the workflow result after each push.

## Implementation

- `_layouts/`: shared site, page, post, project, and homepage templates.
- `_includes/`: cards, academic entries, profile links, figures, and embeds.
- System fonts, restrained teal accents, light/dark themes, responsive layouts, print styles.
- JavaScript enhances navigation, filters, copying, and media; content and citations remain readable without it.
- Demo posts, sample project, placeholder PDFs, and demo images were removed. New project summaries use the original biography; no credentials, dates, or achievements were invented.

Future content priorities: upload a real PDF CV, add education dates, and enrich research projects with your own figures and public materials. No additional framework is necessary.
