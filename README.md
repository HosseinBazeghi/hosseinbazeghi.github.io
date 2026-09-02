# Academic Portfolio + Research Blog

A modern, responsive personal website for researchers, engineers, scientists, developers, and academics. It combines a homepage, research portfolio, project pages, structured publications, web CV, downloadable PDF CV, and a technical Markdown blog.

The site is intentionally simple to maintain:

- **Jekyll** turns Markdown and YAML into a static website.
- **GitHub Actions** builds and deploys it to GitHub Pages for free.
- **No database, CMS, server, or paid backend** is required.
- Most updates involve only Markdown, YAML, images, or PDFs.

All names, links, research, publications, and posts currently in the repository are clearly marked demo content.

## What is included

- Responsive academic/professional design for desktop, tablet, and mobile
- Sticky navigation with an accessible mobile menu and active-page state
- Light/dark theme with saved visitor preference
- Central identity and social configuration in `_config.yml`
- Markdown pages for About, Research, CV, and Contact
- Markdown project collection with automatic homepage features
- YAML-driven publications with type/year/search filters, citation drawers, and copyable BibTeX
- Markdown blog with pagination, category/tag filters, search, reading time, table of contents, related posts, and previous/next links
- Rouge syntax highlighting and copy buttons for code
- MathJax equations using normal LaTeX
- Responsive figure, gallery, YouTube, and Google Drive includes
- Click-to-enlarge figure lightbox
- SEO metadata, Open Graph/X cards, sitemap, robots.txt, RSS, favicon, and 404 page
- GitHub Pages deployment workflow
- Working placeholder CV and publication PDFs

## Repository structure

```text
.
├── _config.yml                  # Your name, bio, links, URL, and site settings
├── _data/
│   ├── navigation.yml           # Main navigation
│   ├── news.yml                 # Homepage updates
│   └── publications.yml         # Publication records and BibTeX
├── _includes/                   # Reusable cards, figures, and video/file embeds
├── _layouts/                    # Shared page, post, project, and site templates
├── _posts/                      # Blog articles in Markdown
├── _projects/                   # One Markdown file per project
├── assets/
│   ├── css/main.css             # Colors, typography, layout, responsive styling
│   ├── documents/               # CV, papers, slides, and other downloads
│   ├── figures/                 # Research figures, plots, diagrams, and GIFs
│   ├── images/                  # Profile, project, social, and general images
│   ├── js/main.js               # Theme, menu, filters, ToC, embeds, lightbox
│   └── videos/                  # Optional small self-hosted video files
├── blog/index.html              # Blog listing, search, filters, pagination
├── .github/workflows/pages.yml  # Automatic GitHub Pages deployment
├── index.md                     # Homepage
├── about.md                     # Biography
├── research.md                  # Detailed research/work page
├── projects.md                  # Project listing
├── publications.md              # Publication listing
├── cv.md                        # Web CV
└── contact.md                   # Contact details
```

## 1. Create the GitHub repository

1. On GitHub, choose **New repository**.
2. For a personal root website, name it `YOUR-USERNAME.github.io`.
3. For a normal project website, use any repository name, such as `academic-website`.
4. Do not initialize the repository with another README if you are pushing this complete folder.
5. From this folder, commit the files and push them to the `main` branch.

Example commands:

```bash
git init
git add .
git commit -m "Create academic website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## 2. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and watch the “Deploy Jekyll site to GitHub Pages” workflow.
5. After the green check appears, the Pages screen shows the public URL.

Every later push to `main` rebuilds and deploys the website automatically.

## 3. Set your identity and site URL

Open `_config.yml` and replace the values in the first section:

```yaml
title: "Your Name"
tagline: "Researcher · Engineer · Scientist"
description: "Your concise site description."
url: "https://YOUR-USERNAME.github.io"
baseurl: ""
repository: "YOUR-USERNAME/YOUR-REPOSITORY"

author:
  name: "Your Name"
  title: "Your Professional Title"
  institution: "Your Institution or Company"
  email: "you@example.com"
  location: "City, Country"
  bio: "A short biography used on the homepage."
  profile_image: "/assets/images/profile.jpg"
  profile_image_alt: "Portrait of Your Name"

social:
  github: "https://github.com/YOUR-USERNAME"
  linkedin: "https://www.linkedin.com/in/YOUR-PROFILE"
  google_scholar: "https://scholar.google.com/citations?user=YOUR-ID"
  orcid: "https://orcid.org/YOUR-ORCID"
```

For `YOUR-USERNAME.github.io`, keep `baseurl: ""`. For a project repository, the included GitHub Action supplies the correct repository base path while building, so internal links remain portable.

After changing `_config.yml`, restart a local Jekyll server if one is running; configuration changes are not always hot-reloaded.

## 4. Change your name and biography

- Site-wide name, title, institution, email, short bio, and social links: `_config.yml`
- Homepage statement and current work: `index.md`
- Long biography, education, experience, and philosophy: `about.md`
- Contact copy: `contact.md`
- Web CV: `cv.md`

Search the repository for `Your`, `YOUR-`, and `Demo` before publishing to find placeholders.

## 5. Change the profile photo

1. Add a portrait to `assets/images/`, for example `profile.jpg`.
2. A portrait crop around 1000 × 1200 pixels works well.
3. In `_config.yml`, change:

   ```yaml
   profile_image: "/assets/images/profile.jpg"
   ```

4. In `_config.yml`, update `profile_image_alt` with a concise portrait description.

Use compressed JPG, WebP, or AVIF for photographs. Keep the original image elsewhere; commit an optimized web copy here.

## 6. Add a project

Copy `_projects/example-research-project.md` to a new, lowercase filename such as:

```text
_projects/my-new-instrument.md
```

Edit the front matter:

```yaml
---
title: "My New Instrument"
description: "One or two sentences used on the project card."
date_range: "2025–present"
status: "Active"
featured: true
order: 2
image: "/assets/images/projects/my-instrument.jpg"
image_alt: "The instrument installed in the laboratory"
tools:
  - Python
  - C++
  - CAD
github: "https://github.com/USERNAME/REPOSITORY"
demo: "https://example.com"
publication: "/publications/"
video: "https://www.youtube.com/watch?v=VIDEO_ID"
math: true
---

Write the full project description in Markdown here.
```

Set `featured: true` to include the project automatically on the homepage. Omit unused links. The filename becomes the project URL.

## 7. Add a publication

Open `_data/publications.yml` and add a record:

```yaml
- id: surname-2026-short-name
  type: Journal Articles
  title: "Your article title"
  authors: "Your Name, Coauthor Name"
  venue: "Journal Name"
  year: 2026
  doi: "https://doi.org/..."
  pdf: "/assets/documents/paper-name.pdf"
  code: "https://github.com/..."
  dataset: "https://doi.org/..."
  project: "/projects/project-name/"
  featured: true
  citation: "A plain-text citation."
  bibtex: |
    @article{surname2026short,
      title   = {Your article title},
      author  = {Surname, Name and Coauthor, Name},
      journal = {Journal Name},
      year    = {2026}
    }
```

Supported types include `Journal Articles`, `Conference Papers`, `Preprints`, `Book Chapters`, and `Presentations`. New types display automatically; add a matching filter button to `publications.md` only if you want a one-click filter for that type.

Optional fields include `volume`, `issue`, `pages`, `doi`, `pdf`, `code`, `dataset`, `project`, `slides`, and `video`.

## 8. Upload or replace your CV

Replace this file:

```text
assets/documents/cv.pdf
```

Keep the same filename and every Download CV button updates automatically. If you prefer a different filename, change `cv_path` once in `_config.yml`.

The included PDF is intentionally labeled as a demo placeholder.

## 9. Create a blog post

Create a Markdown file in `_posts/`. The required filename format is:

```text
YYYY-MM-DD-short-post-title.md
```

Example front matter:

```yaml
---
title: "My First Research Post"
date: 2026-09-01 09:00:00 +0000
author: "My Name"
description: "A concise summary used on cards and in search results."
tags:
  - research
  - machine-learning
  - engineering
category: Research
image: "/assets/figures/example.png"
image_alt: "A clear description of the featured figure"
math: true
toc: true
---

Write the article in normal Markdown here.
```

Use `toc: false` to hide the generated table of contents. Reading time, syntax highlighting, copy buttons, related posts, previous/next navigation, RSS, sitemap entries, and metadata are automatic.

The blog paginates after six posts. Change `pagination.per_page` in `_config.yml` to use a different page size. Search and filters operate instantly on the currently displayed page without an external search service.

## 10. Upload and reference figures

Put research figures in `assets/figures/`. PNG, JPG, WebP, SVG, and GIF files all work.

### Standard Markdown image

```markdown
![Experimental results across five conditions]({{ '/assets/figures/results.png' | relative_url }})
```

### Figure with caption and lightbox

```liquid
{% include figure.html
   src="/assets/figures/results.png"
   alt="Validation score for three methods across five sample sizes"
   number="1"
   caption="Experimental results for the proposed method and two baselines."
   class="centered" %}
```

Use `class="full"`, `class="centered"`, or `class="narrow"`. Always write meaningful alt text. Captions and images scale automatically on phones.

### Side-by-side gallery

Add images to the post front matter:

```yaml
gallery:
  - src: /assets/figures/result-a.png
    alt: "Result under the first condition"
    caption: "Condition A"
  - src: /assets/figures/result-b.png
    alt: "Result under the second condition"
    caption: "Condition B"
```

Then place this where the gallery should appear:

```liquid
{% include gallery.html images=page.gallery label="Two experimental conditions" %}
```

## 11. Write equations

Set `math: true` in page front matter. Inline LaTeX uses single dollar signs:

```markdown
The parameter $\lambda$ controls regularization.
```

Display equations use double dollar signs:

```markdown
$$
E = mc^2
$$
```

Blog posts load MathJax automatically. Regular pages load it when `math: true` is present.

## 12. Embed YouTube videos

Copy the public YouTube URL and add:

```liquid
{% include youtube.html
   url="https://www.youtube.com/watch?v=VIDEO_ID"
   title="Descriptive title for the video" %}
```

The lightweight preview becomes a responsive privacy-enhanced player only after it is clicked.

## 13. Embed or link Google Drive content

First, open the file in Google Drive and set its sharing permission to **Anyone with the link**. Visitors cannot see private or organization-restricted files.

Responsive preview for a video, PDF, presentation, or supported file:

```liquid
{% include google-drive.html
   url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
   title="Supplementary research video"
   mode="preview" %}
```

Professional open/download button:

```liquid
{% include google-drive.html
   url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
   title="Open supplementary dataset"
   mode="link" %}
```

Large videos are better on YouTube or Google Drive than committed directly to Git. GitHub also limits individual file size.

## 14. Customize navigation

Edit `_data/navigation.yml`. Each item has a label and site-relative URL:

```yaml
- label: Teaching
  url: /teaching/
```

Then create `teaching.md` with front matter:

```yaml
---
title: Teaching
description: "Courses, materials, and teaching philosophy."
---

Write the page in Markdown.
```

The desktop navigation, mobile menu, active state, and accessibility labels use the same YAML list automatically.

## 15. Change fonts, colors, and visual styling

Open `assets/css/main.css`. The first `:root` block contains the light-theme design tokens; the next block contains dark-theme values.

```css
:root {
  --paper: #f4f1e9;
  --ink: #17242f;
  --teal: #08776f;
  --copper: #ad5b36;
  --sans: Inter, ui-sans-serif, sans-serif;
  --serif: Iowan Old Style, Baskerville, serif;
}
```

The default stacks use system fonts, so the site avoids an extra font download. You can add a responsibly hosted web font and update `--sans` or `--serif` if desired.

Replace `assets/images/academic-og.png` to change the default social sharing card. Keep a landscape image around 1200 × 630 pixels. Individual posts use their `image` value as the social preview when supplied.

## 16. Configure a custom domain later

1. Add a file named `CNAME` at the repository root containing only your domain, for example `www.yourname.com`.
2. In your domain registrar, create the DNS records shown in GitHub's Pages documentation.
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** after DNS is active.
4. Change `url` in `_config.yml` to the final `https://` address and keep `baseurl: ""`.

Do not commit a `CNAME` file until you control the domain, or the default Pages URL may redirect incorrectly.

## Local preview (optional)

GitHub builds the site for you, so local Ruby is not required for normal publishing. To preview before pushing, install Ruby 3.2 or newer, then run:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000` in a browser. For a project page with a base path, you can preview with:

```bash
bundle exec jekyll serve --baseurl "/YOUR-REPOSITORY"
```

## Very simple publishing workflow

1. Create `_posts/YYYY-MM-DD-my-article.md`.
2. Add the title, date, description, tags, and category in front matter.
3. Write the article in Markdown.
4. Put figures in `assets/figures/`.
5. Reference them with Markdown or the `figure.html` include.
6. Commit and push to `main`.
7. GitHub Actions rebuilds and publishes the website automatically.

That is the normal maintenance loop—no HTML editing, database, CMS, or manual deployment step is needed.

## Before making the site public

- Replace all `Your Name`, `YOUR-...`, `Demo`, and example identifiers.
- Replace the profile image and the default social image.
- Replace the placeholder `assets/documents/cv.pdf` and demo paper.
- Confirm that publication PDFs may legally be shared.
- Replace all example YouTube and Google Drive IDs.
- Update `url` and `repository` in `_config.yml`.
- Test every external profile and download link.
- Add descriptive alt text for every meaningful image.

## License

The website code is available under the MIT License. Your personal text, research, figures, photographs, papers, and CV remain yours; choose and document the licensing terms for your content before publishing.
