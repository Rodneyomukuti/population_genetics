# Population Genetics for Conservation 🧬

**An interactive tutorial on conservation genomics — grounded in Kenyan wildlife**

> *"Nothing in evolution makes sense except in light of population genetics."* — Michael Lynch (2007)

This repository hosts a complete, interactive teaching resource for the **Wildlife Genomics 3 Workshop** (Pwani University × IISc, Kilifi, Kenya). It covers everything from Linux basics and FASTQ files to selection scans and genetic load — using lions, elephants, rhinos, and wild dogs from Kenya's national parks as case studies.

## 🌍 Live Site
**[View the tutorial →](https://Rodneyomukuti.github.io/population_genetics)**

---

## 📚 Modules

| # | Module | Topics |
|---|--------|--------|
| 0 | **Why Genomics?** | The conservation case; invisible threats |
| 1 | **Sequencing Strategies** | WGS, lcWGS, RAD-Seq, Amplicon-Seq; Illumina vs ONT |
| 2 | **Linux Basics** | Essential commands; FASTQ anatomy; Q scores |
| 3 | **Quality Control** | FastQC; Trim Galore; what bad data looks like |
| 4 | **Read Mapping** | BWA-MEM; SAM/BAM format; IGV visualisation |
| 5 | **Variant Calling & Filtering** | bcftools; VCF format; 6 critical filters explained |
| 6 | **Population Structure** | HWE; PCA; Admixture; Wahlund effect |
| 7 | **Genetic Diversity** | H_e, π, allelic richness, F_ROH, Fst |
| 8 | **Demographic History** | PSMC; GONE; ROH length distribution |
| 9 | **Selection & Genetic Load** | Purifying/positive/balancing selection; Tajima's D; dN/dS; mutational meltdown |

---

## 🧠 Interactive Features

- **12 Discussion Questions** — each with a clickable "Show brainstorm" revealing key ideas and model answers
- **Kenya Case Studies** — Maasai Mara lions, Amboseli elephants, Laikipia black rhino, Grevy's zebra, African wild dogs, and more
- **10 Original Figures** — generated from scientific principles, not stock images
- **Code Blocks** — syntax-highlighted bash commands for every pipeline step

---

## 🗂️ Repository Structure

```
population_genetics/
├── index.html              # Main tutorial site (GitHub Pages)
├── README.md               # This file
├── assets/
│   ├── css/
│   │   └── style.css       # Dark-theme stylesheet
│   ├── js/
│   │   └── main.js         # Interactive features (tabs, Q&A toggles)
│   └── images/             # Generated scientific figures
│       ├── 01_marker_evolution.png
│       ├── 02_kenya_parks_map.png
│       ├── 03_fastq_explainer.png
│       ├── 04_hardy_weinberg.png
│       ├── 05_population_structure.png
│       ├── 06_diversity_metrics.png
│       ├── 07_selection_types.png
│       ├── 08_psmc_demographic.png
│       ├── 09_pipeline_workflow.png
│       └── 10_tajimas_d.png
└── modules/                # (Future: individual module markdown files)
```

---

## 🚀 Quick Setup (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/Rodneyomukuti/population_genetics.git
cd population_genetics

# 2. The site runs as static HTML — no build step needed
# Open index.html in any browser to view locally

# 3. To host on GitHub Pages:
# Settings → Pages → Source: "Deploy from branch" → Branch: main → / (root)
```

---

## 📖 Core Reference

**Hedrick, P.W. (2010).** *Genetics of Populations*, 4th edition. Jones and Bartlett Publishers.

Additional references:
- Allendorf, F.W. et al. (2022). *Conservation and the Genomics of Populations*, 3rd ed.
- Frankham, R. et al. (2010). *Introduction to Conservation Genetics*, 2nd ed.
- Nielsen, R. & Slatkin, M. (2013). *An Introduction to Population Genetics*.

---

## 🔬 Kenya Case Studies Used

| Species | Location | Genomic Question |
|---------|----------|-----------------|
| African lion (*Panthera leo*) | Maasai Mara, Amboseli, Tsavo, Samburu | Population structure, Fst between parks |
| African elephant (*Loxodonta africana*) | Amboseli | HWE testing, diversity monitoring |
| Black rhinoceros (*Diceros bicornis*) | Ol Pejeta, Laikipia, Tsavo | Inbreeding (ROH), metapopulation management |
| Grevy's zebra (*Equus grevyi*) | Lewa, Samburu | N_e decline (GONE), conservation units |
| African wild dog (*Lycaon pictus*) | Samburu | lcWGS population structure, corridor detection |
| Rothschild giraffe (*G. c. rothschildi*) | Laikipia, Nakuru, Ol Pejeta | Admixture, translocation decisions |
| Hirola (*Beatragus hunteri*) | Northern Kenya | Founder effect, mutational meltdown risk |
| Cheetah (*Acinonyx jubatus*) | Pan-African | PSMC demographic history, extreme low diversity |

---

## 🎓 Workshop Information

- **Dates:** July 22 – August 4, 2025
- **Location:** Pwani University, Kilifi, Kenya
- **Organized by:** Pwani University & Indian Institute of Science (IISc)
- **Contact:** [s.wambua@pu.ac.ke](mailto:s.wambua@pu.ac.ke) | [anubhabkhan@gmail.com](mailto:anubhabkhan@gmail.com)
- **Workshop site:** [poodl-ces.github.io/Wildlife_Genomics_3.io](https://poodl-ces.github.io/Wildlife_Genomics_3.io/)

---

## 📄 Licence

Educational content released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code under MIT. Please cite appropriately when reusing.

