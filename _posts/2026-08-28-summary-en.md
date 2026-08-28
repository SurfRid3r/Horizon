---
layout: default
title: "Horizon Summary: 2026-08-28 (EN)"
date: 2026-08-28
lang: en
---

> From 43 items, 4 important content pieces were selected

---

1. [PaperCut NG/MF Zero-Day Chain Actively Exploited; Emergency Patches Released](#item-1) ⭐️ 9.0/10
2. [Anthropic Previews Model Hardware Standard for AI-Controlled Lab Equipment](#item-2) ⭐️ 8.0/10
3. [Tencent Hunyuan Releases Hy4 Preview, Edging Out GLM-5.3 and Kimi K3 in Blind Tests](#item-3) ⭐️ 8.0/10
4. [CXMT Swings to Huge Profit as AI Demand Drives 10-Fold Revenue Surge](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [PaperCut NG/MF Zero-Day Chain Actively Exploited; Emergency Patches Released](https://www.rapid7.com/blog/post/etr-papercut-ng-mf-critical-zero-day-exploited-in-the-wild) ⭐️ 9.0/10

On August 27, 2026, PaperCut Software published an urgent advisory confirming active exploitation of PaperCut NG/MF, and on August 28 assigned CVE-2026-81578 (authentication bypass, CVSSv4 8.8) and CVE-2026-82078 (unsafe dynamic class loading in the database connector, CVSSv4 9.4) for the two-vulnerability exploit chain. Emergency patches for versions 25 and 26 were released at 02:10 AEST that day, with version 24 patches following later, after a university customer's security and DFIR teams helped PaperCut reproduce the flaws. This is a critical, actively exploited zero-day chain affecting print management software that is widely deployed in enterprise and education environments, so unpatched internet-exposed Application Servers face immediate risk of compromise. With the vendor confirming customer incidents and treating the issue as a security emergency, organizations must patch or restrict access without delay. The chain pairs an unauthenticated authentication bypass (CWE-306) with unsafe dynamic class loading via externally-controlled input (CWE-470, "unsafe reflection"), where the 9.4-rated second bug assumes high privileges that the first bug supplies. Servers exposing the PaperCut Application Server's web-accessible admin interface to the public internet should be prioritized for remediation, and PaperCut was previously targeted in 2023 via CVE-2023-27350.

rss · Rapid7 Cybersecurity Blog · Aug 28, 10:09

**Background**: PaperCut NG and PaperCut MF are print management platforms used by enterprises, schools, and other organizations to track, control, and secure printing, and their Application Server component provides web-accessible administrative and application functionality that becomes a high-value target when internet-facing. A zero-day vulnerability is a flaw that is unknown to the vendor or lacks an available fix at the time it is exploited, leaving defenders zero days to prepare. CVSS (Common Vulnerability Scoring System, currently version 4.0) is an industry-standard 0-10 severity scale maintained to help organizations prioritize patching effort.

<details><summary>References</summary>
<ul>
<li><a href="https://www.papercut.com/help/manuals/ng-mf/common/example/">Implementation by example | PaperCut</a></li>
<li><a href="https://en.wikipedia.org/wiki/Zero-day_vulnerability">Zero-day vulnerability - Wikipedia</a></li>
<li><a href="https://nvd.nist.gov/vuln-metrics/cvss">NVD - Vulnerability Metrics</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">zero-day</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">PaperCut</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-2"></a>

## [Anthropic Previews Model Hardware Standard for AI-Controlled Lab Equipment](https://www.anthropic.com/news/model-hardware-standard-research-preview) ⭐️ 8.0/10

Anthropic opened a research preview of its Model Hardware Standard (MHS), a shared specification that lets AI agents like Claude safely discover and operate physical devices such as microscopes, liquid handlers, robotic arms, and laser systems through standardized "read" and "write" drivers. First partners include Genentech, Carnegie Mellon University, and quantum computing firm QuEra, with device integration time cut from weeks or months down to hours or even minutes. This replaces slow, bespoke device-by-device integration with a common interface, marking a major step toward AI-driven automation of scientific instruments, advanced manufacturing, and robotics. If adopted and open-sourced as planned, it could accelerate the rise of self-driving laboratories and extend AI agents' capabilities from software into the physical world. QuEra reported that its MHS-connected AI controller can recover laser lock on its neutral-atom quantum computer without human intervention in 99.3% of cases. The standard originated as a project between Anthropic and HHMI Janelia Research Campus, and Anthropic plans to open-source it after completing safety evaluations — it is still a research preview rather than a finalized, widely-adopted standard.

telegram · zaihuapd · Aug 28, 01:38

**Background**: Traditionally, connecting AI or automation software to laboratory equipment requires custom integration work for each individual device, often taking weeks or months of engineering effort. MHS addresses this by providing a shared specification with standard "read" and "write" drivers, so an AI agent can operate any compliant device without bespoke code. This fits into the broader "self-driving laboratory" trend, where robots handle synthesis and characterization while AI models decide which experiments to run next. QuEra, one of the first partners, is a Boston-based company building fault-tolerant neutral-atom quantum computers whose laser systems require continuous stabilization.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/news/model-hardware-standard-research-preview">Previewing the Model Hardware Standard \ Anthropic</a></li>
<li><a href="https://www.modelhardwarestandard.com/">Model Hardware Standard</a></li>
<li><a href="https://en.wikipedia.org/wiki/QuEra_Computing_Inc.">QuEra Computing Inc. - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">hardware integration</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">robotics</span> <span class="tag-badge">quantum computing</span></p>

---

<a id="item-3"></a>

## [Tencent Hunyuan Releases Hy4 Preview, Edging Out GLM-5.3 and Kimi K3 in Blind Tests](https://mp.weixin.qq.com/s/ymr3X878B8oa2XP15CH8TQ) ⭐️ 8.0/10

On August 28, 2026, Tencent Hunyuan released Hy4 preview, its strongest open-source model to date, featuring 770B total parameters with 49B active (MoE) and a 1M token context window. In a blind evaluation of 203 engineering tasks, it scored 2.99, narrowly beating GLM-5.3 (2.92) and Kimi K3 (2.94), and it is now available on Tencent Cloud, GitHub, HuggingFace, ModelScope, AtomGit, and OpenRouter. This release intensifies the race at the open-source frontier among leading Chinese AI labs, with Tencent claiming the largest generation-over-generation capability gain it has ever measured. The model targets long-horizon software engineering, document/office work, and scientific research — domains where million-token context and strong agentic coding ability are increasingly decisive for developers and enterprises. Architecturally, the 78-layer backbone uses a standard dense FFN in the first layer and MoE in the remaining 77 layers, each containing 256 routed experts plus 1 shared expert. API pricing is $0.834 per 1M input tokens and $2.501 per 1M output tokens, and the blind-test margins over competitors are narrow (2.99 vs 2.92/2.94), so real-world superiority remains to be independently validated.

telegram · zaihuapd · Aug 28, 06:11

**Background**: Mixture-of-Experts (MoE) models keep a huge total parameter count but activate only a small fraction per token, trading memory for far cheaper inference — Hy4 preview activates 49B of its 770B parameters. Competitors follow the same philosophy: Kimi K3 activates roughly 3.7% of its ~2.8T parameters, and GLM-5.3 carries ~753B, which makes active parameters a better proxy for inference cost than total size. A 1M-token context window lets a model ingest entire codebases or long documents at once, which is critical for real-world engineering tasks. Blind evaluation, where human raters score outputs without knowing which model produced them, is generally considered more trustworthy than self-reported benchmarks.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Tencent-Hunyuan/Hy4-preview">GitHub - Tencent-Hunyuan/Hy4-preview</a></li>
<li><a href="https://hy.tencent.ai/research/hy4-preview?langVersion=en">Introducing Hy4 preview - Tencent Hy</a></li>
<li><a href="https://tech.bixoto.com/glm-5-3-vs-kimi-k3-753b-vs-2-8t-the-older-weights-just-won-on-points/">GLM - 5 . 3 vs Kimi K 3 : 753B vs 2.8T. The Older... - Bixoto Tech Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Tencent Hunyuan</span> <span class="tag-badge">open-source models</span> <span class="tag-badge">model release</span> <span class="tag-badge">benchmarks</span></p>

---

<a id="item-4"></a>

## [CXMT Swings to Huge Profit as AI Demand Drives 10-Fold Revenue Surge](https://www.bloomberg.com/news/articles/2026-08-28/chinese-chipmaker-cxmt-s-sales-jump-10-fold-as-ai-demand-soars) ⭐️ 8.0/10

Chinese DRAM maker CXMT reported first-half revenue of 150.3 billion RMB and net profit of 77.6 billion RMB, a dramatic swing from a loss a year earlier, with sales jumping roughly ten-fold on surging AI demand. The company said constrained global DRAM supply will persist into the second half and that its next-generation LPDDR6 memory is on track for mass production. The results mark a major shift in the global memory chip landscape, as a Chinese DRAM supplier captures the windfall from the AI-driven memory shortage and CXMT's market value has surpassed Tencent to become China's most valuable company. It also signals real progress in China's push for semiconductor self-sufficiency, reducing reliance on foreign memory giants like Samsung, SK Hynix and Micron. Management attributed the surge to constrained global DRAM supply and expects tightness to continue through the second half, while LPDDR6 — the next-generation low-power DRAM standard aimed at mobile and AI devices — is on schedule for mass production. The company's shares have risen continuously since listing, driving its market capitalization above Tencent Holdings.

telegram · Marcoview666 · Aug 28, 15:01

**Background**: CXMT (ChangXin Memory Technologies, 长鑫存储) was founded in Hefei in 2016 and has grown into China's largest DRAM manufacturer, roughly the world's fourth-largest by production capacity. It designs and produces DDR5, LPDDR5X, DDR4 and LPDDR4X memory chips used in phones, PCs, tablets and servers. DRAM is the workhorse memory in computers and data centers, and the boom in AI training and inference has sharply increased demand for memory while incumbent suppliers have been slow to add capacity, tightening supply. LPDDR6 is the next generation of the low-power DRAM standard defined by JEDEC, used mainly in smartphones and other power-sensitive devices.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cxmt.com/en/">About cxmt - cxmt</a></li>
<li><a href="https://aiwiki.ai/wiki/cxmt">CXMT ( ChangXin Memory Technologies ) | AI Wiki</a></li>
<li><a href="https://chinaidb.com/companies/cxmt/">CXMT ( ChangXin Memory ) — China AI Index</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">semiconductors</span> <span class="tag-badge">DRAM</span> <span class="tag-badge">CXMT</span> <span class="tag-badge">AI hardware</span> <span class="tag-badge">China tech</span></p>

---