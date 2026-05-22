---
layout: default
title: "Horizon Summary: 2026-05-22 (EN)"
date: 2026-05-22
lang: en
---

> From 48 items, 11 important content pieces were selected

---

1. [Eli Lilly's Retatrutide Achieves 28.3% Weight Loss in Phase 3](#item-1) ⭐️ 9.0/10
2. [Freenet Redesign: Decentralized P2P Platform with WebAssembly Contracts](#item-2) ⭐️ 8.0/10
3. [Google Antigravity IDE criticized for forced data consent](#item-3) ⭐️ 8.0/10
4. [Google tests AI-powered search ads with Gemini](#item-4) ⭐️ 8.0/10
5. [FTC fines firms nearly $1 million over fake 'active listening' AI ads](#item-5) ⭐️ 8.0/10
6. [Simon Willison releases Datasette Agent for conversational data querying](#item-6) ⭐️ 8.0/10
7. [ik_llama.cpp achieves 110 tok/s on Qwen3.6 35B with 12GB VRAM](#item-7) ⭐️ 8.0/10
8. [Tencent Releases Hy-MT2 Multilingual Translation Models](#item-8) ⭐️ 8.0/10
9. [AMD Launches Ryzen AI Max 400 Series with 192GB Memory](#item-9) ⭐️ 8.0/10
10. [Tencent Launches OS-Level AI Assistant Marvis](#item-10) ⭐️ 8.0/10
11. [ByteDance Open-Sources 3B Unified Multimodal Model Lance](#item-11) ⭐️ 8.0/10

---

## [Eli Lilly's Retatrutide Achieves 28.3% Weight Loss in Phase 3](https://www.prnewswire.com/news-releases/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss-in-pivotal-phase-3-obesity-trial-302778859.html) {: #"item-1" } ⭐️ 9.0/10

Eli Lilly announced Phase 3 TRIUMPH-1 trial results showing that retatrutide achieved an average weight loss of 28.3% at the highest 12 mg dose over 80 weeks. The trial met all primary and key secondary endpoints in adults with obesity or overweight who had at least one weight-related comorbidity. This efficacy significantly surpasses current market leaders like semaglutide and tirzepatide, potentially setting a new benchmark for obesity treatment efficacy. It offers a powerful non-surgical option that reaches weight loss levels comparable to bariatric surgery. The trial involved approximately 2,500 patients, with the 4 mg dose showing a 19.0% average weight loss and a discontinuation rate of 4.1% due to adverse events, which was lower than the placebo group. Side effects were primarily gastrointestinal, and no heart or liver safety issues were observed.

telegram · zaihuapd · May 22, 02:18

**Background**: Retatrutide is an experimental drug developed by Eli Lilly that acts as a triple agonist, targeting the GLP-1, GIP, and glucagon (GCGR) receptors. Current popular weight loss drugs like Wegovy (semaglutide) target only GLP-1, while Mounjaro (tirzepatide) targets both GLP-1 and GIP. The addition of glucagon receptor agonism is believed to further enhance energy expenditure and weight loss potential.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Retatrutide">Retatrutide</a></li>
<li><a href="https://www.ajmc.com/view/retatrutide-achieves-up-to-30-3-average-weight-loss-in-phase-3-triumph-1-trial">Retatrutide Achieves Up to 30.3% Average Weight Loss in Phase 3 TRIUMPH-1 Trial | AJMC</a></li>
<li><a href="https://www.empr.com/news/retatrutide-weight-loss-obesity-triumph-1-trial/">TRIUMPH-1: Triple Agonist Retatrutide Yields Significant Weight Loss - MPR</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Biotech</span> <span class="tag-badge">Healthcare</span> <span class="tag-badge">Obesity Treatment</span> <span class="tag-badge">Clinical Trials</span> <span class="tag-badge">Eli Lilly</span></p>

---

## [Freenet Redesign: Decentralized P2P Platform with WebAssembly Contracts](https://freenet.org/) {: #"item-2" } ⭐️ 8.0/10

Ian Clarke has released a ground-up redesign of Freenet, now called Hyphanet, which functions as a global decentralized key-value store. The platform uses WebAssembly contracts to define state validity and employs a unique commutative merge operation to achieve global consistency in seconds. This redesign addresses the long-standing challenge of state consistency in peer-to-peer networks without relying on centralized servers. By enabling applications to run entirely in a browser connected to a local peer, it offers a scalable path towards a truly decentralized web. The system requires every contract to define a "merge" operation that is commutative, allowing state updates to propagate efficiently like a virus. While desktop installers are available for Windows, macOS, and Linux, mobile support is not yet available.

hackernews · sanity · May 21, 14:34 · [Discussion](https://news.ycombinator.com/item?id=48223362)

**Background**: Freenet is a classic peer-to-peer platform originally created in 1999 to allow censorship-resistant communication. The project was renamed to Hyphanet in 2023 to distinguish the original version from this new iteration. WebAssembly is a binary instruction format that allows code written in languages like Rust to run efficiently in web browsers.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hyphanet">Hyphanet - Wikipedia</a></li>
<li><a href="https://protonvpn.com/blog/freenet-hyphanet">What is Freenet (now called Hyphanet )? | Proton VPN</a></li>

</ul>
</details>

**Discussion**: Discussions highlighted concerns about the project's governance history, specifically the decision to rewrite the codebase without the original team's input. Technical debates focused on the difficulty of implementing commutative merge functions for complex application logic and comparisons with similar technologies like Braid.org.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">peer-to-peer</span> <span class="tag-badge">decentralization</span> <span class="tag-badge">webassembly</span> <span class="tag-badge">distributed-systems</span> <span class="tag-badge">hyphanet</span></p>

---

## [Google Antigravity IDE criticized for forced data consent](https://www.0xsid.com/blog/antigravity-bait-n-switch) {: #"item-3" } ⭐️ 8.0/10

Users reported that Google's Antigravity IDE now requires mandatory consent to data collection terms to complete the installation or update process. This unexpected requirement has led to accusations of a 'bait and switch' tactic regarding user privacy. This situation raises significant concerns about corporate trust and vendor lock-in within the developer tools ecosystem. It serves as a reminder of the risks associated with proprietary software and the value of open-source alternatives for maintaining data sovereignty. In response to the changes, a developer created a zero-dependency Python script for Mac users to restore settings and chat history by merging SQLite databases. The technical workaround highlights the complexity of migrating data out of the platform's proprietary format.

hackernews · ssiddharth · May 21, 13:50 · [Discussion](https://news.ycombinator.com/item?id=48222529)

**Background**: Google Antigravity is an AI-powered integrated development environment (IDE) designed to facilitate software development using AI agents and models like Gemini 3 Pro. It offers features such as autonomous coding and visual reasoning to assist developers. The current controversy stems from a perception that Google is resetting the product's terms, forcing existing users to accept new data collection policies.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Google_Antigravity">Google Antigravity - Wikipedia</a></li>
<li><a href="https://antigravity.google/product/antigravity-ide?ref=producthunt">Google Antigravity - Antigravity IDE</a></li>
<li><a href="https://www.googleantigravity.org/">Google Antigravity - AI IDE with Gemini 3 Pro | Agentic Software...</a></li>

</ul>
</details>

**Discussion**: Community members expressed strong disapproval of the forced consent, with many advocating for free and open-source software as a solution to corporate distrust. Discussions also included technical solutions for data recovery, such as scripts to migrate settings and chat history away from the IDE.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Google</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">Vendor Lock-in</span> <span class="tag-badge">Data Portability</span></p>

---

## [Google tests AI-powered search ads with Gemini](https://blog.google/products/ads-commerce/google-marketing-live-search-ads/) {: #"item-4" } ⭐️ 8.0/10

Google is testing new ad formats in Search that utilize the Gemini AI model to generate custom product explainers for users. Additionally, the company is expanding its Direct Offers pilot, which surfaces promotional deals within AI Mode. This integration marks a significant shift in search monetization by using generative AI to create personalized ad copy, potentially changing how users interact with search results. It raises ethical concerns regarding AI-driven persuasion and the potential degradation of organic search utility. The Direct Offers pilot utilizes existing deals from Shopping or Performance Max campaigns to surface relevant offers inside AI Mode. The new ad formats allow Gemini to instantly write custom explainers highlighting why a specific product is the right choice for the searcher.

hackernews · sofumel · May 21, 09:49 · [Discussion](https://news.ycombinator.com/item?id=48220105)

**Background**: Gemini is a family of multimodal large language models developed by Google DeepMind, serving as the successor to models like LaMDA and PaLM 2. Direct Offers is a program that allows Google's systems to display promotional content, such as discounts or special pricing, directly within the search interface's AI-generated responses.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/products/ads-commerce/google-marketing-live-search-ads/">New ad formats built with Gemini coming to Google Search</a></li>
<li><a href="https://www.accelerateddigitalmedia.com/insights/agentic-commerce-googles-direct-offers-pilot-is-bringing-paid-ads-to-ai-mode/">Agentic Commerce: Google ’s “ Direct Offers ” Pilot is Bringing Paid...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_(language_model)">Gemini (language model ) - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Users expressed strong concern over the ethical implications of AI learning to influence people effectively, with some calling it the essence of the evil of AI ads. Many commenters threatened to block Google bots or switch services, fearing that search results will become useless due to overwhelming advertising.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Search Engines</span> <span class="tag-badge">Advertising</span> <span class="tag-badge">Ethics</span> <span class="tag-badge">Google</span></p>

---

## [FTC fines firms nearly $1 million over fake 'active listening' AI ads](https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything) {: #"item-5" } ⭐️ 8.0/10

The FTC ordered Cox Media Group and two other firms to pay nearly $1 million to settle charges that they deceived customers about an 'Active Listening' service. The companies claimed to use smart device microphones to target ads but actually just resold email lists without using any voice data. This enforcement action sets a critical precedent against deceptive AI marketing practices and clarifies that burying consent in Terms of Service is unacceptable for invasive surveillance. It directly addresses public anxiety about privacy by confirming that this specific type of audio surveillance for ads was not actually taking place. The FTC found that the service did not listen to conversations or use voice data, instead marking up and reselling email lists from other data brokers. The agency emphasized that clicking through mandatory Terms of Service does not constitute valid opt-in consent for collecting voice data inside consumers' homes.

rss · Simon Willison · May 22, 04:48

**Background**: 'Active Listening' is a marketing concept that claims to use AI to analyze real-time conversations captured by smart device microphones to serve targeted ads. While conspiracy theories about phones listening for ads are widespread, experts often cite technical and privacy barriers that make such mass surveillance impractical. This case reveals that companies exploited these fears to market basic data brokerage services under a high-tech guise.

<details><summary>References</summary>
<ul>
<li><a href="https://www.business-standard.com/technology/tech-news/is-your-phone-listening-marketing-firm-confirms-tech-behind-targeted-ads-124090400592_1.html">Is your phone listening ? Marketing firm confirms tech behind targeted...</a></li>
<li><a href="https://www.404media.co/mindsift-brags-about-using-smart-device-microphone-audio-to-target-ads-on-their-podcast/">Company Brags About Using Smart Device Microphone Audio to...</a></li>
<li><a href="https://www.emarketer.com/content/cox-media-active-listening-pitch-deck-ad-targeting-privacy">‘Active Listening’ pitch deck prompts questions about ad targeting and...</a></li>

</ul>
</details>

**Discussion**: The author notes that debunking the conspiracy theory that phones listen for ads has been difficult, but this FTC ruling provides strong validation that the technology was not actually being used as claimed. The community views this as a significant win for privacy, highlighting that the companies were essentially selling a fantasy to exploit advertiser demand.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">AI Ethics</span> <span class="tag-badge">Regulation</span> <span class="tag-badge">FTC</span> <span class="tag-badge">Surveillance</span></p>

---

## [Simon Willison releases Datasette Agent for conversational data querying](https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything) {: #"item-6" } ⭐️ 8.0/10

Simon Willison announced the first release of Datasette Agent, an extensible AI assistant that integrates his LLM library with Datasette. This tool enables users to query data and generate charts through a conversational interface. This integration bridges the gap between complex SQL queries and natural language, making data analysis more accessible to non-technical users. It demonstrates a practical application of LLMs in enhancing open-source data tools. The system runs on Gemini 3.1 Flash-Lite in the demo and supports plugins like `datasette-agent-charts` for visualization using Observable Plot. It automatically generates SQL queries to answer natural language questions against SQLite databases.

rss · Simon Willison · May 21, 19:52

**Background**: Datasette is an open-source tool designed to explore and publish data as interactive websites and APIs. Simon Willison's LLM library is a Python utility that allows developers to interact with various large language models via command line or code.

<details><summary>References</summary>
<ul>
<li><a href="https://datasette.io/">Datasette: An open source multi-tool for exploring and publishing data</a></li>
<li><a href="https://github.com/simonw/llm">GitHub - simonw/ llm : Access large language models from the...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Python</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Data Analysis</span> <span class="tag-badge">Datasette</span> <span class="tag-badge">Open Source</span></p>

---

## [ik_llama.cpp achieves 110 tok/s on Qwen3.6 35B with 12GB VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1tjh7az/110_toks_with_12gb_vram_on_qwen36_35b_a3b_and_ik/) {: #"item-7" } ⭐️ 8.0/10

A user reported achieving 110 tokens per second inference speed for the Qwen3.6 35B A3B model on a 12GB VRAM GPU using the ik_llama.cpp fork. This performance significantly surpasses the standard llama.cpp implementation, which saw performance degradation after merging Multi-Token Prediction (MTP) support. This demonstrates that substantial performance optimizations are possible for running large 35B parameter models on consumer-grade hardware with limited memory. It highlights the value of community forks like ik_llama.cpp in pushing the boundaries of local LLM efficiency beyond the mainline project. The benchmark utilized the IQ4_XS quantization format, which offers similar accuracy to Q4_K_XL but with a 4GB smaller file size. Users noted that ik_llama.cpp maintains a much higher draft acceptance rate compared to llama.cpp, which contributes to the significant speedup.

reddit · r/LocalLLaMA · janvitos · May 21, 11:09

**Background**: llama.cpp is a popular open-source software library designed to run Large Language Models (LLMs) efficiently on consumer hardware. Multi-Token Prediction (MTP), also known as speculative decoding, is a technique where a smaller "draft" model predicts multiple tokens that a larger "target" model verifies in parallel to speed up generation. ik_llama.cpp is a fork of the original project that focuses on state-of-the-art quantizations and improved CPU performance.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/ikawrakow/ik_llama.cpp">GitHub - ikawrakow/ ik _ llama . cpp : llama . cpp fork with additional SOTA...</a></li>
<li><a href="https://startupfortune.com/llamacpp-now-supports-multi-token-prediction-in-beta-and-the-implications-for-local-ai-tooling-are-bigger-than-the-pr-suggests/">llama.cpp Now Supports Multi-Token Prediction in Beta and the Implications for Local AI Tooling Are Bigger Than the PR Suggests - Startup Fortune</a></li>
<li><a href="https://github.com/ggml-org/llama.cpp/issues/22747">Feature Request: support 'Multi-Token Prediction (MTP) drafters' · Issue #22747 · ggml-org/llama.cpp</a></li>

</ul>
</details>

**Discussion**: Community members expressed admiration for the speed but raised concerns about the fragmentation between llama.cpp forks, wishing for the improvements to be merged back. Discussions also focused on the technical reasons for the speedup, specifically the higher acceptance rates in ik_llama.cpp, and shared tips for optimizing the operating system environment.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Local LLMs</span> <span class="tag-badge">Inference Optimization</span> <span class="tag-badge">llama.cpp</span> <span class="tag-badge">GPU Computing</span> <span class="tag-badge">Quantization</span></p>

---

## [Tencent Releases Hy-MT2 Multilingual Translation Models](https://www.reddit.com/r/LocalLLaMA/comments/1tjien7/tencent_hy_30b7b18b/) {: #"item-8" } ⭐️ 8.0/10

Tencent released the Hy-MT2 family of multilingual translation models, available in 1.8B, 7B, and 30B-A3B sizes, supporting 33 languages. The models feature extreme 1.25-bit quantization via AngelSlim, reducing the 1.8B model size to just 440MB while outperforming competitors like DeepSeek-V4-Pro and Kimi K2.6. This release significantly advances on-device translation capabilities by offering high-quality multilingual support with extremely low resource requirements. It provides a powerful open-source alternative to commercial APIs and sets a new benchmark for efficiency in translation models. The 30B-A3B model utilizes a Mixture of Experts (MoE) architecture, while the 1.8B model achieves a 1.5x inference speed improvement through quantization. Tencent also open-sourced IFMTBench for evaluating instruction-following capabilities and released the Hy-MT2-Translator Skill for easy integration.

reddit · r/LocalLLaMA · jacek2023 · May 21, 12:03

**Background**: Hy-MT2 builds upon Tencent's previous Hunyuan Translation Model (Hy-MT) version 1.5, which already demonstrated that high-quality translation does not require massive model sizes. The new 'fast-thinking' models are designed for complex real-world scenarios and utilize the Sherry framework for hardware-efficient ternary quantization.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/tencent/Hy-MT1.5-1.8B-1.25bit">tencent/Hy-MT1.5-1.8B- 1 . 25 bit · Hugging Face</a></li>
<li><a href="https://github.com/Tencent-Hunyuan/Hy-MT2">GitHub - Tencent-Hunyuan/Hy-MT2 · GitHub</a></li>
<li><a href="https://news.aibase.com/news/28224">Tencent Open-Sources Multilingual Translation Tool...</a></li>

</ul>
</details>

**Discussion**: Users are impressed by the translation quality and stability, noting improvements over the 1.5 series and comparisons to Gemma 3, though some believe Gemma 4 remains superior. However, there are significant concerns regarding the licensing terms and the current absence of GGUF format support for local deployment.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">NLP</span> <span class="tag-badge">Translation</span> <span class="tag-badge">Tencent</span> <span class="tag-badge">Quantization</span> <span class="tag-badge">MoE</span></p>

---

## [AMD Launches Ryzen AI Max 400 Series with 192GB Memory](https://www.techpowerup.com/349218/amd-launches-the-ryzen-ai-max-400-series-processors-strix-halo-gets-a-memory-upgrade) {: #"item-9" } ⭐️ 8.0/10

AMD launched the Ryzen AI Max 400 series processors, upgrading the Strix Halo platform with unified memory support up to 192 GB. This allows the integrated GPU to access up to 160 GB of memory, enabling local execution of large language models with over 30 billion parameters. This significant increase in unified memory addresses a critical bottleneck for local AI development by allowing powerful LLMs to run on mobile workstations without relying on cloud services. It positions AMD competitively in the AI PC market by offering edge devices capable of handling complex generative AI tasks. The initial launch includes three PRO models: the flagship 495 with 16 CPU cores and 40 CUs, alongside the 490 and 485 with 12 and 8 cores respectively. The processors feature boost clocks up to 5.2 GHz for the CPU, 3.0 GHz for the GPU, and an NPU performance of up to 55 TOPS.

telegram · zaihuapd · May 21, 08:15

**Background**: Unified memory architecture allows the CPU and GPU to share a single memory pool, eliminating the need to copy data between separate system RAM and video memory. An NPU, or Neural Processing Unit, is a specialized accelerator designed to efficiently handle the matrix calculations required for AI and machine learning tasks. TOPS stands for Tera Operations Per Second, a metric used to quantify the computational performance of AI hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://www.hardware-corner.net/computers-with-unified-memory/">Best Unified Memory Computers for Local LLMs (2025 ...</a></li>
<li><a href="https://www.ibm.com/think/topics/neural-processing-unit">What is a neural processing unit (NPU)? - IBM</a></li>
<li><a href="https://www.qualcomm.com/news/onq/2024/04/a-guide-to-ai-tops-and-npu-performance-metrics">A guide to AI TOPS and NPU performance metrics | Qualcomm</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AMD</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Processors</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span></p>

---

## [Tencent Launches OS-Level AI Assistant Marvis](https://finance.sina.com.cn/jjxw/2026-05-21/doc-inhyrmmu5949795.shtml) {: #"item-10" } ⭐️ 8.0/10

Tencent has officially released Marvis, an OS-level AI assistant that integrates system resources into a unified AI middle layer. It features a multi-agent architecture with six agents and offers a privacy mode using a local LLM for offline, secure task execution. This launch signifies a major trend towards deep AI integration at the operating system level, moving beyond simple chatbots to system-wide orchestration. The emphasis on local LLM processing addresses critical privacy concerns for sensitive sectors like finance and law. Marvis utilizes a main agent to coordinate five specialized agents for parallel task execution and provides 10 million free tokens daily. Its privacy mode ensures all data processing happens locally without cloud transmission, allowing functionality even without an internet connection.

telegram · zaihuapd · May 21, 10:00

**Background**: OS-level AI assistants integrate deeply with the operating system to manage files and applications directly, unlike standalone apps. Multi-agent architecture involves using multiple AI agents, each with specific roles, to collaborate on complex tasks. On-device LLMs, often lightweight models, allow AI to run locally on hardware without needing internet connectivity, enhancing privacy.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Lightweight_large_language_model">Lightweight large language model</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI/ML</span> <span class="tag-badge">Operating Systems</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Multi-Agent Systems</span> <span class="tag-badge">Tencent</span></p>

---

## [ByteDance Open-Sources 3B Unified Multimodal Model Lance](https://mp.weixin.qq.com/s/Xbfq72cr1796RZxJIs3L1A) {: #"item-11" } ⭐️ 8.0/10

ByteDance has released Lance, a 3B parameter model that natively unifies image and video understanding, generation, and editing under an Apache 2.0 license. The model achieves state-of-the-art performance on benchmarks like GenEval and VBench despite its compact size. This release provides a powerful, open-source alternative for multimodal tasks that typically require much larger models, democratizing access to advanced AI capabilities. Its unified architecture simplifies deployment by allowing a single model to handle diverse tasks across different media types. Lance utilizes a shared context and dual-stream expert architecture, employing Qwen2.5-VL for understanding tasks and Wan2.2 for generation tasks. It also incorporates modality-aware positional encoding to resolve sequence boundary confusion during processing.

telegram · zaihuapd · May 22, 06:40

**Background**: Multimodal models typically specialize in either understanding content, like describing an image, or generating new content, like creating an image from text, but rarely both efficiently in one package. Qwen2.5-VL is a vision-language model by Alibaba known for strong visual recognition and document parsing capabilities. Wan2.2 is an advanced video generation family that uses Mixture-of-Experts architecture to improve quality and efficiency.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/bytedance/Lance/tree/main/">GitHub - bytedance/Lance: A 3B-active-parameter native ...</a></li>
<li><a href="https://arxiv.org/abs/2605.18678">Lance: Unified Multimodal Modeling by Multi-Task Synergy</a></li>
<li><a href="https://lance-project.github.io/">Lance: Unified Multimodal Modeling by Multi-Task Synergy</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI/ML</span> <span class="tag-badge">Multimodal Model</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Computer Vision</span> <span class="tag-badge">ByteDance</span></p>

---