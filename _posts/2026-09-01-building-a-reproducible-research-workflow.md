---
title: "Demo: Building a Reproducible Research Workflow"
published: false
date: 2026-09-01 09:00:00 +0000
author: "Your Name"
description: "A complete example technical article with equations, figures, code, tables, citations, YouTube, and Google Drive content."
tags:
  - research
  - reproducibility
  - python
category: Methods
image: "/assets/figures/example-results.svg"
image_alt: "Example research plot comparing three methods"
math: true
toc: true
gallery:
  - src: /assets/figures/research-pipeline.svg
    alt: "Reproducible research pipeline"
    caption: "The end-to-end workflow."
  - src: /assets/figures/example-results.svg
    alt: "Example performance curves"
    caption: "The resulting comparison."
---

> **Demo article:** This single post demonstrates the technical-blog features built into the site. Copy it when creating your first real article, then remove the sections you do not need.

Reproducibility is less about one perfect tool and more about making the path from a question to a result inspectable. In this example, every figure is treated as an output of a documented pipeline rather than a manually edited endpoint.

## Begin with a traceable question

A useful research question identifies an observable quantity, a boundary, and a decision it should inform. Suppose we want to estimate a response $y$ from measured inputs $x$ while acknowledging parameter uncertainty.

Using a Bayesian framing, the posterior is

$$
p(\theta \mid \mathcal{D}) = \frac{p(\mathcal{D} \mid \theta)p(\theta)}{p(\mathcal{D})}.
$$

The equation is not merely decorative: it tells us which assumptions must be recorded—the likelihood, prior, evidence, and observed dataset.[^assumptions]

## Make the workflow explicit

{% include figure.html src="/assets/figures/research-pipeline.svg" alt="Pipeline moving from question to data, model, validation, and communication" number="1" caption="A compact research pipeline. Click any figure built with this include to enlarge it." class="full" width="1200" height="620" %}

The stages can be simple, but each should have a clear input and output:

| Stage | Input | Output | Primary check |
|---|---|---|---|
| Ingest | Raw observations | Versioned dataset | Schema and range |
| Transform | Versioned dataset | Analysis table | Unit tests |
| Model | Analysis table | Fitted parameters | Diagnostics |
| Evaluate | Model + holdout | Metrics and figures | Robustness |
| Communicate | Evidence | Paper, post, or tool | Reproducibility |

## Generate figures from code

Jekyll uses Rouge for syntax highlighting. Add a language after the opening fence—such as `python`, `cpp`, `javascript`, `matlab`, `bash`, `html`, `css`, `json`, or `yaml`—and the site also adds a copy button automatically.

```python
from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd


def build_figure(data_path: Path, output_path: Path) -> None:
    """Create the result figure from a versioned table."""
    frame = pd.read_csv(data_path)
    ax = frame.plot(x="sample_size", y=["baseline", "proposed"])
    ax.set(xlabel="Number of observations", ylabel="Validation score")
    plt.tight_layout()
    plt.savefig(output_path, dpi=180, bbox_inches="tight")


build_figure(Path("data/results.csv"), Path("assets/figures/results.png"))
```

The rendered result can be inserted with one reusable include:

{% raw %}
```liquid
{% include figure.html
   src="/assets/figures/example-results.svg"
   alt="Three methods compared across sample sizes"
   number="2"
   caption="Validation performance across five sample sizes."
   class="centered" %}
```
{% endraw %}

{% include figure.html src="/assets/figures/example-results.svg" alt="Line plot comparing a proposed method with two baselines" number="2" caption="Demo data show how a featured figure scales responsively. Replace the file while keeping the include unchanged." class="centered" width="1200" height="700" %}

## Use galleries for related views

Define a `gallery` list in the post front matter, then render it with one include. On small screens, the two-column layout becomes a readable single column.

{% include gallery.html images=page.gallery label="Workflow and result gallery" %}

Animated GIFs work like other images: place the file in `assets/figures/`, then use the figure include with a helpful alt description.

## Embed external media carefully

YouTube players are loaded only after a visitor clicks the preview, reducing initial page weight and third-party requests.

{% include youtube.html url="https://www.youtube.com/watch?v=VIDEO_ID" title="Demo workflow walkthrough — replace VIDEO_ID" %}

For a publicly shared Google Drive video or file, paste its share link into the Drive include. The component extracts the file ID and opens the preview on demand.

{% include google-drive.html url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" title="Demo supplementary video on Google Drive" mode="preview" %}

Use a professional file button when embedding is not useful:

{% include google-drive.html url="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" title="Open supplementary dataset" mode="link" %}

The Drive file must be shared with **Anyone with the link** or visitors will see a permission request.

## Close the loop

Before publishing, rebuild every generated figure from a clean checkout, record the environment, and verify that the post explains limitations alongside results.

> A useful technical article does not merely show what worked. It gives the reader enough context to understand where the result may stop working.

That habit makes the post more valuable, and it makes the underlying research easier to revisit months later.

[^assumptions]: Kramdown automatically renders Markdown footnotes like this one and links readers back to the reference point.
