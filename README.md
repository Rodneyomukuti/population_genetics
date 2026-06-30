# Population Genetics for Conservation

A general-purpose, interactive training resource on conservation genomics.

"Nothing in evolution makes sense except in light of population genetics." -- Michael Lynch (2007)

This repository hosts an interactive tutorial covering the full conservation genomics workflow, from choosing a sequencing strategy through to selection scans, grounded in the theory of Hedrick's *Genetics of Populations* and illustrated with example case studies.

## Live Site

[View the tutorial](https://Rodneyomukuti.github.io/population_genetics)

## Modules

| # | Module | Topics |
|---|--------|--------|
| 0 | Why Genomics | The conservation case for genomic data |
| 1 | Sequencing Strategies | Depth and coverage; WGS, lcWGS, RAD-Seq, amplicon sequencing; Illumina vs Oxford Nanopore |
| 2 | The Shell and FASTQ Files | Directory structures, the command line, FASTQ anatomy, quality scores |
| 3 | Quality Control | FastQC, Trim Galore |
| 4 | Read Mapping | BWA-MEM, SAM/BAM format |
| 5 | Variant Calling and Filtering | bcftools, VCF format, filtering criteria |
| 6 | Population Structure | Hardy-Weinberg equilibrium, PCA, ADMIXTURE, Fst, translocation interpretation |
| 7 | Genetic Diversity | Ho, He, pi -- what each measures and when each is preferred |
| 8 | Demographic History | PSMC, GONE |
| 9 | Selection and Genetic Load | Purifying, positive, and balancing selection; Tajima's D; mutational load |

A dedicated Bibliography section follows the Glossary, listing full citation details for every documented case study referenced in the modules above.

## Interactive Features

- 12 discussion questions, each with a clickable "Show brainstorm" panel revealing key ideas
- Documented case studies clearly labelled and cited; illustrative scenarios explicitly marked as hypothetical
- 11 original figures generated from underlying scientific models, including a real Kenya boundary map for geographic orientation
- Conservation application notes in every module connecting theory to management decisions

## A Note on Citations

Case studies in this guide are labelled either "Documented case study" (citing real, identifiable published research) or "Hypothetical Example" (an illustrative scenario constructed to demonstrate a principle, not based on a specific dataset). Readers should independently verify all citations, including DOIs, before relying on them, since this guide was prepared without live web access for citation verification at the time of writing.

## Repository Structure

```
population_genetics/
├── index.html
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── 01_depth_coverage.png
│       ├── 02_kenya_parks_map.png
│       ├── 03_shell_directory.png
│       ├── 04_fastq_explainer.png
│       ├── 05_hardy_weinberg.png
│       ├── 06_population_structure.png
│       ├── 07_diversity_ho_he_pi.png
│       ├── 08_fst_structure.png
│       ├── 09_selection_types.png
│       ├── 10_pipeline_workflow.png
│       └── 11_tajimas_d.png
```

## Setup

```bash
git clone https://github.com/Rodneyomukuti/population_genetics.git
cd population_genetics
```

The site is static HTML with no build step. Open index.html directly in a browser to preview locally.

To host on GitHub Pages: Settings -> Pages -> Source: Deploy from branch -> Branch: main -> / (root).

## Core Reference

Hedrick, P.W. (2010). *Genetics of Populations*, 4th edition. Jones and Bartlett Publishers.

## Contact

omukutirodney@gmail.com

## Licence

Educational content released under CC BY 4.0. Code under MIT.
