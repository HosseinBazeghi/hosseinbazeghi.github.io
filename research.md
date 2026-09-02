---
title: Research / Work
eyebrow: Research agenda
description: "Problems I study, methods I develop, and the evidence I use to connect ideas with practice."
math: true
gallery:
  - src: /assets/figures/example-results.svg
    alt: "Example performance curves comparing three methods"
    caption: "Performance across increasing data availability."
  - src: /assets/figures/research-pipeline.svg
    alt: "Diagram of a reproducible research pipeline"
    caption: "A traceable path from question to evidence."
---

> **Demo research page:** Replace the topic names, text, links, and figures with your own work. Equations, reusable figures, galleries, videos, repositories, and downloads are already supported.

## Theme 1 — Reliable learning from limited observations

Many real systems provide fewer clean observations than our models would like. This theme studies how assumptions, priors, constraints, and uncertainty estimates can be combined without hiding what the data cannot tell us.

One simple expression for the balance is a regularized objective:

$$
\hat{\theta} = \arg\min_{\theta}\; \mathcal{L}(y, f_{\theta}(x)) + \lambda\,\Omega(\theta).
$$

The first term rewards agreement with observations; the second encodes a preference for solutions that remain plausible or interpretable. My work asks how the choice of $\Omega$ affects reliability outside the training distribution.

{% include figure.html src="/assets/figures/example-results.svg" alt="Example plot showing three performance curves across sample sizes" number="1" caption="Demo results comparing a proposed method with two baselines. Replace this SVG with your own PNG, JPG, GIF, WebP, or SVG figure." class="full" width="1200" height="700" %}

**Example outputs:** [code repository](https://github.com/YOUR-USERNAME/example-project) · [download sample data]({{ '/assets/documents/demo-paper.pdf' | relative_url }}) · [related publication]({{ '/publications/' | relative_url }})

## Theme 2 — Reproducible scientific workflows

Research results are easier to trust when the path from raw data to final figure is explicit. I build small, testable stages for ingestion, validation, modeling, evaluation, and communication.

{% include figure.html src="/assets/figures/research-pipeline.svg" alt="Five-stage workflow from research question through data, model, validation, and communication" number="2" caption="A reproducible workflow keeps every transformation visible and testable." class="centered" width="1200" height="620" %}

The [featured project]({{ '/projects/example-research-project/' | relative_url }}) shows how a topic can combine a narrative, equations, figures, code, a repository, and downloadable material.

## Theme 3 — Communicating uncertainty

The final interface is part of the scientific method. I study how visual encodings, language, and interaction shape whether readers understand a model's limits as well as its headline result.

{% include gallery.html images=page.gallery label="Example research figure gallery" %}

### Talks and demonstrations

The reusable includes below load external media only after a visitor chooses to open it, which keeps initial page loads fast.

{% include youtube.html url="https://www.youtube.com/watch?v=VIDEO_ID" title="Demo research talk — replace VIDEO_ID" %}

{% include google-drive.html url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" title="Demo Google Drive research video" mode="preview" %}

Google Drive previews work only when the file is shared with **Anyone with the link**. For a simple file button instead of an inline preview, use the `mode="link"` option described in the README.

