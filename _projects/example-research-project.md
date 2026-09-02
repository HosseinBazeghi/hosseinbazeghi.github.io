---
title: "Demo: Transparent Models for Complex Decisions"
description: "An example research project showing how to present a question, method, results, tools, links, and media in one maintainable page."
date_range: "2025–2026"
status: "Demo"
featured: true
order: 1
image: "/assets/images/project-placeholder.svg"
image_alt: "Abstract technical diagram representing the demo project workflow"
tools:
  - Python
  - Jupyter
  - scikit-learn
  - D3.js
github: "https://github.com/YOUR-USERNAME/example-project"
demo: "https://example.com"
publication: "/publications/"
video: "https://www.youtube.com/watch?v=VIDEO_ID"
math: true
---

> **Demo project:** Replace this file with your own work. The front matter above controls the card, links, dates, status, image, and whether the project appears on the homepage.

## The question

How can a predictive system remain useful when its observations are incomplete and the people using it need to understand *why* a result changed?

This example project treats interpretability as a design constraint from the beginning rather than a report added at the end.

## Approach

The workflow has four stages:

1. Define observable evidence and decision constraints.
2. Fit a constrained model with uncertainty estimates.
3. Test the model under distribution shifts and missing inputs.
4. Build explanations around the decisions people actually make.

{% include figure.html src="/assets/figures/research-pipeline.svg" alt="Reproducible project workflow diagram" number="1" caption="The project structure keeps inputs, assumptions, validation, and communication traceable." class="full" %}

## Method

For an input $x$, the model returns both an estimate and an uncertainty interval:

$$
p(y \mid x, \mathcal{D}) = \int p(y \mid x, \theta)\,p(\theta \mid \mathcal{D})\,d\theta.
$$

The evaluation compares accuracy, calibration, stability, and explanation consistency. These criteria are versioned alongside the implementation.

## Example result

{% include figure.html src="/assets/figures/example-results.svg" alt="Example method comparison plot" number="2" caption="Demo result: the proposed method improves as more observations become available while maintaining stable calibration." class="centered" %}

## Media and files

{% include youtube.html url="https://www.youtube.com/watch?v=VIDEO_ID" title="Demo project walkthrough — replace VIDEO_ID" %}

{% include google-drive.html url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" title="Open demo supplementary material" mode="link" %}

## Reproducibility

The project repository should contain an environment file, tests for important transformations, scripts that rebuild each figure, and a short data statement. Add those links using the front matter at the top of this page.
