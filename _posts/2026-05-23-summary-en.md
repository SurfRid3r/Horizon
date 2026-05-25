---
layout: default
title: "Horizon Summary: 2026-05-23 (EN)"
date: 2026-05-23
lang: en
---

> From 14 items, 6 important content pieces were selected

---

1. [Anthropic's Project Glasswing Finds 10,000+ Critical Vulnerabilities](#item-1) ⭐️ 9.0/10
2. [Apple Open-Sources Corecrypto with Verified Post-Quantum Algorithms](#item-2) ⭐️ 9.0/10
3. [Microsoft Internally Deploys Anthropic's Claude Code](#item-3) ⭐️ 9.0/10
4. [AI demand drives memory shortage and higher consumer electronics prices](#item-4) ⭐️ 8.0/10
5. [Microsoft Report Reveals OpenAI's $11.5B Quarterly Loss](#item-5) ⭐️ 8.0/10
6. [China's Daily Token Usage Surges 1000-Fold to 140 Trillion](#item-6) ⭐️ 8.0/10

---

## [Anthropic's Project Glasswing Finds 10,000+ Critical Vulnerabilities](https://www.anthropic.com/research/glasswing-initial-update) {: #"item-1" } ⭐️ 9.0/10

Anthropic's Project Glasswing used the Claude Mythos Preview model to identify over 10,000 critical vulnerabilities in software within one month. The project achieved a 90.6% true positive rate on reviewed vulnerabilities, with partners like Cloudflare reporting a tenfold increase in discovery speed. This development shifts the cybersecurity bottleneck from discovering flaws to the human capacity for verification and patching. It highlights a critical challenge where AI-driven vulnerability discovery now outpaces the industry's ability to remediate them. The initiative scanned thousands of open-source projects and found 6,202 high-severity flaws, collaborating with approximately 50 partners. Anthropic has partnered with the Open Source Security Foundation and released the Claude Security tool to help enterprises manage this influx of vulnerabilities.

telegram · zaihuapd · May 23, 03:16

**Background**: Project Glasswing is a defensive cybersecurity initiative built around the Claude Mythos Preview, a general-purpose frontier model currently restricted to critical industry partners. The Open Source Security Foundation (OpenSSF) is a cross-industry initiative under the Linux Foundation dedicated to improving the security of open-source software.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing : Securing critical software for the AI era \ Anthropic</a></li>
<li><a href="https://hivesecurity.gitlab.io/blog/project-glasswing-anthropic-claude-mythos-cybersecurity/">Project Glasswing : Anthropic 's AI That Finds... — Hive Security</a></li>
<li><a href="https://thenewstack.io/openssf-open-source-security-members/">"Morally repugnant shortsightedness": Why open source security ...</a></li>

</ul>
</details>

**Discussion**: Partners reported significantly accelerated discovery rates, while open-source maintainers raised concerns about being overwhelmed, requesting that vulnerability reports be slowed down to allow time for patching.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability Detection</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Open Source</span></p>

---

## [Apple Open-Sources Corecrypto with Verified Post-Quantum Algorithms](https://security.apple.com/blog/formal-verification-corecrypto/) {: #"item-2" } ⭐️ 9.0/10

On May 22, Apple open-sourced its corecrypto library, featuring implementations of the post-quantum ML-KEM and ML-DSA algorithms. The release includes end-to-end formal verification proofs ensuring that both C code and optimized ARM64 assembly strictly adhere to NIST standards. This move sets a new industry standard for software assurance by applying rigorous mathematical proofs to cryptographic code running on over 2.5 billion active devices. It accelerates the adoption of quantum-resistant security by providing the community with verified, production-ready implementations and tools. Apple released custom verification tools and an Isabelle theorem prover library to allow independent experts to evaluate the proofs. The library currently secures services like iMessage and VPNs, addressing the threat of future quantum computers capable of breaking current encryption.

telegram · zaihuapd · May 23, 04:49

**Background**: Post-quantum cryptography refers to cryptographic algorithms that are thought to be secure against an attack by a quantum computer. ML-KEM (FIPS 203) is used for key encapsulation, while ML-DSA (FIPS 204) is used for digital signatures, replacing vulnerable standards like RSA and ECDSA. Formal verification involves using mathematical methods to prove that a system's implementation matches its specification, ensuring correctness even in complex, low-level code like Assembly.

<details><summary>References</summary>
<ul>
<li><a href="https://billatnapier.medium.com/get-used-to-three-boring-acronyms-ml-kem-ml-dsa-and-slh-dsa-0156b6ab82c5">Get Used to Three Boring Acronyms: ML - KEM , ML - DSA and... | Medium</a></li>
<li><a href="https://www.wolfssl.com/ml-kem-versus-ml-dsa/">ML - KEM Versus ML - DSA - wolfSSL</a></li>
<li><a href="https://en.wikipedia.org/wiki/Isabelle_(proof_assistant)">Isabelle (proof assistant) - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Post-Quantum Cryptography</span> <span class="tag-badge">Formal Verification</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Apple Security</span></p>

---

## [Microsoft Internally Deploys Anthropic's Claude Code](https://t.me/zaihuapd/41535) {: #"item-3" } ⭐️ 9.0/10

Microsoft is rolling out Anthropic's Claude Code to its CoreAI team and major product groups like Windows and Microsoft 365. Engineers are required to compare it against GitHub Copilot, while non-technical staff are encouraged to use it for prototyping. This move is significant because Microsoft is a primary investor in OpenAI, yet it is aggressively adopting a competitor's tool for internal use. It highlights the intense competition in the AI coding space and suggests Microsoft is benchmarking Claude Code to potentially improve or supplement its own GitHub Copilot. The directive specifically targets the CoreAI team and departments responsible for Windows, Microsoft 365, and Outlook experiences. Employees are mandated to provide feedback comparing Claude Code's capabilities directly with GitHub Copilot.

telegram · zaihuapd · May 23, 06:05

**Background**: Claude Code is an agentic coding tool developed by Anthropic that operates within the terminal to understand codebases and execute engineering tasks. Microsoft's CoreAI is a new engineering group led by Jay Parikh, formed to drive AI innovation across the company's developer and platform tools. GitHub Copilot is Microsoft's existing AI-powered code completion tool, powered by OpenAI's models.

<details><summary>References</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://www.anthropic.com/news/claude-3-7-sonnet">Claude 3.7 Sonnet and Claude Code \ Anthropic</a></li>
<li><a href="https://www.linkedin.com/posts/businessinsider_microsoft-ai-orgchart-activity-7336807067569025024-tonJ">Microsoft 's CoreAI team led by Jay Parikh | Business... | LinkedIn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">AI Coding</span> <span class="tag-badge">Claude</span> <span class="tag-badge">GitHub Copilot</span></p>

---

## [AI demand drives memory shortage and higher consumer electronics prices](https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything) {: #"item-4" } ⭐️ 8.0/10

The massive demand for HBM memory in AI data centers is diverting limited manufacturing capacity from consumer memory. This shift is expected to cause significant price increases for consumer electronics like smartphones and laptops over the next few years. This supply chain bottleneck means consumers will face higher costs for essential hardware, potentially making affordable devices like cheap smartphones scarce. It highlights how the AI boom is directly impacting the broader electronics market beyond just data centers. HBM allocation is projected to rise from 2% to 20% of total wafer capacity by the end of 2026. Crucially, producing one gigabyte of HBM consumes more than three times the wafer capacity required for a gigabyte of DDR or LPDDR.

rss · Simon Willison · May 22, 22:01

**Background**: The global memory manufacturing industry is dominated by only three major companies, which operate with a fixed limit on wafer processing capacity. HBM (High Bandwidth Memory) is a high-performance 3D-stacked memory type essential for AI GPUs, whereas DDR and LPDDR are standard memories used in computers and smartphones. Since HBM production consumes significantly more wafer area per gigabyte than standard memory, increasing HBM output directly reduces the supply available for consumer devices.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://www.rambus.com/blogs/hbm3-everything-you-need-to-know/">High Bandwidth Memory ( HBM ): Everything You Need to... - Rambus</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">AI</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Economics</span></p>

---

## [Microsoft Report Reveals OpenAI's $11.5B Quarterly Loss](https://t.me/zaihuapd/41537) {: #"item-5" } ⭐️ 8.0/10

Microsoft's latest financial report disclosed that OpenAI incurred a quarterly loss of approximately $11.5 billion, based on Microsoft's 27% stake and a $3.1 billion hit to its own net income. This loss figure is nearly three times OpenAI's revenue for the first half of the year. This massive loss highlights the extreme capital intensity required to train and run advanced AI models, raising questions about the long-term sustainability of the current AI boom. It signals that even leading AI companies face significant financial pressure despite high revenue growth. The calculation is based on Microsoft's equity method investment, where a $3.1 billion reduction in Microsoft's net income corresponds to OpenAI's losses. Microsoft has already invested $11.6 billion of its committed $13 billion into the AI startup.

telegram · zaihuapd · May 23, 07:40

**Background**: Microsoft has invested heavily in OpenAI, integrating its technology into products like Copilot and Bing, and holds a significant but non-controlling stake. Under the equity method of accounting, an investor records its share of the investee's profits or losses in its own financial statements, which explains the direct impact on Microsoft's earnings.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">AI Economics</span> <span class="tag-badge">Financial Report</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

## [China's Daily Token Usage Surges 1000-Fold to 140 Trillion](https://t.me/zaihuapd/41542) {: #"item-6" } ⭐️ 8.0/10

The National Data Bureau revealed that China's daily token usage exceeded 140 trillion this March. This figure represents a staggering increase of over 1000-fold compared to the levels seen two years ago. This explosive growth highlights the rapid adoption and commercialization of large language models across China. It signals the formation of a new value system where tokens serve as a measurable and tradable unit for the AI economy. Tokens act as the smallest unit of information processed by large models, possessing characteristics that allow them to be measured, priced, and traded. The surge reflects ongoing reforms in market-oriented data allocation and the establishment of a high-quality data supply system.

telegram · zaihuapd · May 23, 14:36

**Background**: In the context of artificial intelligence, tokens are the basic building blocks that models use to process language and data, derived from breaking down larger chunks of text. As AI agents perform complex tasks like reasoning and planning, they consume vast amounts of tokens, making them a critical metric for measuring computational work and economic value in the AI industry.

<details><summary>References</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/ai-tokens-explained/">What Are AI Tokens ? The Language and Currency... | NVIDIA Blog</a></li>
<li><a href="https://www.horivista.com/post/beyond-power-why-tokens-are-becoming-the-new-currency-of-ai">Beyond Power: Why Tokens Are Becoming the New Currency of AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI/ML</span> <span class="tag-badge">Industry Statistics</span> <span class="tag-badge">China AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Token Economy</span></p>

---