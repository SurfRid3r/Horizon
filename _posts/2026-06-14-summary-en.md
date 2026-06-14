---
layout: default
title: "Horizon Summary: 2026-06-14 (EN)"
date: 2026-06-14
lang: en
---

> From 57 items, 5 important content pieces were selected

---

1. [The Birth and Death of JavaScript: A Prophetic 2014 Talk Revisited](#item-1) ⭐️ 8.0/10
2. [Paul Graham's Essay on Earning a Billion Sparks Intense Ethics Debate](#item-2) ⭐️ 8.0/10
3. [75 US Data Center Projects Worth $130B Blocked in Q1 2026](#item-3) ⭐️ 8.0/10
4. [Huawei Releases Open-Source Pangu 2.0 Models at HDC 2026](#item-4) ⭐️ 8.0/10
5. [First Global Map of Earth's Massive Underground Fungal Networks Created](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [The Birth and Death of JavaScript: A Prophetic 2014 Talk Revisited](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) ⭐️ 8.0/10

Gary Bernhardt's legendary 2014 talk, set fictitiously in the year 2035, is being revisited for its remarkably accurate predictions about JavaScript's trajectory. The talk foresaw JavaScript becoming a compilation target for other languages, which materialized through TypeScript, asm.js, and ultimately WebAssembly, as well as the rise of web technologies on the desktop via frameworks like Electron. This talk demonstrates the rare value of insightful technical forecasting in software engineering, where most predictions fail but Bernhardt's materialized within years rather than decades. It provides a unifying narrative for understanding the major shifts in the web ecosystem — from JavaScript's dominance to the rise of WebAssembly and the blurring boundary between web and desktop applications. At the time of the talk in 2014, Google had just released PNaCl for cross-compiling and sandboxing native code in Chrome, while Mozilla counter-proposed asm.js as a subset of JavaScript that could achieve near-native performance. Although asm.js has since been deprecated, WebAssembly emerged as the true successor, providing a portable binary code format that serves as a compilation target for C/C++, Rust, and other languages. However, WebAssembly still lacks direct DOM manipulation capabilities, meaning JavaScript remains necessary as glue code for web applications.

hackernews · subset · Jun 14, 12:38 · [Discussion](https://news.ycombinator.com/item?id=48526661)

**Background**: JavaScript was created by Brendan Eich in 1995 at Netscape in just ten days, initially designed as a simple scripting language for web pages but eventually becoming the only programming language natively supported in all web browsers. For years, developers who wanted to use other languages on the web had to compile them to JavaScript. Technologies like asm.js (a strict subset of JavaScript designed for performance) and PNaCl (Google's Portable Native Client) were early attempts to enable near-native code execution in browsers, paving the way for WebAssembly, which was officially released in 2017 as a standardized binary instruction format. TypeScript, released by Microsoft in 2012, also contributed to this trend by compiling to plain JavaScript while adding static typing.

<details><summary>References</summary>
<ul>
<li><a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript">The Birth & Death of JavaScript - Destroy All Software</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">WebAssembly - MDN</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebAssembly">WebAssembly - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters broadly agree that Bernhardt's predictions were remarkably accurate, particularly regarding JavaScript becoming a compilation target (TypeScript) and web technologies entering desktop applications (Electron). One commenter humorously notes the talk predicted a global disaster for 2020-2025 but got the wrong type. A notable counterpoint highlights that WebAssembly has not progressed as fast as expected — lacking DOM manipulation means JavaScript is still needed as glue code, and some frameworks like Flutter bypass HTML/CSS entirely by rendering on a canvas, which sacrifices the native feature set of the web.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">WebAssembly</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">Tech History</span> <span class="tag-badge">Future Predictions</span></p>

---

<a id="item-2"></a>

## [Paul Graham's Essay on Earning a Billion Sparks Intense Ethics Debate](https://paulgraham.com/earn.html) ⭐️ 8.0/10

Paul Graham published a new essay titled "How to earn a billion dollars" in which he argues that the most common path to extreme wealth is founding a successful startup, and that the key driver is user empathy rather than exploitation. The essay quickly drew 867 comments on Hacker News, making it one of the most debated pieces in recent memory. This essay strikes at the heart of an ongoing cultural debate about the morality of billionaire wealth, the role of tech companies in society, and whether massive wealth creation is inherently tied to exploitation. Graham's influence in the startup world means his framing can shape how founders think about their mission and responsibility. Graham draws a distinction between getting rich through exploitation versus through creating something genuinely valuable, arguing that startups demand empathy — understanding what users truly want — as the primary success factor. Critics countered that his examples (like Airbnb and crypto exchanges) may themselves involve negative societal externalities, and that the "creative destruction" model morally entangles creation with destruction.

hackernews · kingstoned · Jun 14, 11:50 · [Discussion](https://news.ycombinator.com/item?id=48526360)

**Background**: Paul Graham is the co-founder of Y Combinator, one of the world's most influential startup accelerators, and his essays are considered essential reading in the tech and startup communities. The concept of "creative destruction," popularized by economist Joseph Schumpeter, describes how innovation displaces established industries — a process generally seen as net positive but with real human costs. The debate over whether billionaires "deserve" their wealth has intensified in recent years amid growing wealth inequality and scrutiny of big tech companies.

**Discussion**: The community was deeply divided: critics argued that billion-dollar enterprises are virtually impossible without exploiting employees, customers, or the environment, and that Graham's framing ignores the moral entanglement between creation and destruction in creative destruction. Defenders felt the negativity was ideologically driven and that Graham's core message — that building valuable things through empathy is virtuous — was being deliberately misread.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Paul Graham</span> <span class="tag-badge">Startups</span> <span class="tag-badge">Economics</span> <span class="tag-badge">Tech Ethics</span> <span class="tag-badge">Hacker News</span></p>

---

<a id="item-3"></a>

## [75 US Data Center Projects Worth $130B Blocked in Q1 2026](https://www.tomshardware.com/tech-industry/artificial-intelligence/more-than-75-data-center-build-outs-worth-usd130-billion-have-been-successfully-blocked-in-the-first-four-months-of-2026-bipartisan-opposition-mounts-nationwide-over-fears-of-soaring-power-and-water-costs) ⭐️ 8.0/10

In the first quarter of 2026, at least 75 U.S. data center construction projects—collectively valued at approximately $130 billion—were blocked or delayed, matching the total number blocked in all of 2025. Active grassroots opposition organizations surged from 396 to 833 across 49 states within just three months, while state legislatures and some federal lawmakers pushed regulatory and moratorium bills. This wave of opposition creates a significant bottleneck for the AI and cloud infrastructure buildout that major tech companies depend on for growth. The bipartisan and grassroots nature of the resistance signals that energy consumption, water usage, and environmental impact have become mainstream political issues that could fundamentally reshape the data center industry's expansion strategy. The opposition is notably bipartisan, uniting communities and politicians across the political spectrum around concerns about soaring power and water costs. The sheer scale—$130 billion in just one quarter—suggests the pace of blocking is accelerating dramatically compared to previous years.

telegram · zaihuapd · Jun 14, 03:03

**Background**: Data centers are the physical backbone of AI training, cloud computing, and digital services, but they consume enormous amounts of electricity and water for server cooling. As AI adoption has surged, tech giants have invested hundreds of billions of dollars in rapid data center expansion, often targeting rural areas with cheaper land and power. However, local communities increasingly worry that these facilities strain power grids, deplete water resources, and raise utility bills for residents.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">Infrastructure</span> <span class="tag-badge">AI</span> <span class="tag-badge">Energy Consumption</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-4"></a>

## [Huawei Releases Open-Source Pangu 2.0 Models at HDC 2026](https://t.me/zaihuapd/41948) ⭐️ 8.0/10

Huawei announced the openPangu 2.0 family at its Developer Conference 2026, featuring a massive 505B-parameter Pro version and a 92B-parameter Flash version. The models support a 512K context window and Huawei will progressively open-source seven major components, starting with pre-training code on June 30. This release represents a major open-source challenge to the global AI industry, deeply integrating Huawei's proprietary Ascend computing power and HarmonyOS ecosystem. It positions Huawei as a key driver in China's push for AI self-sufficiency and global technological leadership, despite severe domestic computing resource constraints. The openPangu 2.0 models are highly optimized for Huawei's Ascend AI architecture and seamlessly adapted for the HarmonyOS ecosystem. Richard Yu noted during his keynote that Huawei has allocated a significant portion of its computing resources to support other domestic enterprises, leaving limited capacity for its own operations.

telegram · zaihuapd · Jun 14, 08:05

**Background**: Huawei's Ascend computing is a full-scenario AI infrastructure solution built on the Ascend series AI processors, covering everything from modules to clusters for deep learning training and inference. The Ascend AI chips follow an aggressive iteration logic of doubling computing power annually, which is crucial for handling massive models like Pangu. The Pangu models have been in development for years, with Richard Yu emphasizing that Huawei pioneered the large model space before the current global AI trend began.

<details><summary>References</summary>
<ul>
<li><a href="https://e.huawei.com/cn/products/computing/ascend">昇腾计算-华为Ascend-AI计算-华为企业业务 - Huawei Enterprise</a></li>
<li><a href="https://finance.sina.com.cn/wm/2026-04-09/doc-inhtwaii5996062.shtml">华为昇腾系列ai芯片详细参数对比（2025-2028） - 新浪财经</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">开源AI</span> <span class="tag-badge">华为盘古</span> <span class="tag-badge">昇腾算力</span> <span class="tag-badge">鸿蒙生态</span></p>

---

<a id="item-5"></a>

## [First Global Map of Earth's Massive Underground Fungal Networks Created](https://insideclimatenews.org/news/11062026/earths-massive-underground-fungal-networks/) ⭐️ 8.0/10

A project led by the Society for the Protection of Underground Networks (SPUN) has, for the first time, mapped the global distribution of underground arbuscular mycorrhizal fungi networks. The research reveals that these underground fungal threads span approximately 110 quadrillion kilometers in total length, possessing a collective mass about five times that of all humans on Earth. This major scientific breakthrough provides a crucial baseline for understanding ecosystems and the vital role these fungi play in climate change mitigation by sequestering roughly 13 billion tons of carbon annually. Furthermore, it highlights an urgent ecological threat by demonstrating how rapid agricultural expansion is degrading these massive carbon-capturing networks. The mapping project utilized machine learning, laboratory testing, and global soil sampling to model the fungi, which symbiotically partner with about 80% of the world's plants. Notably, the study found that fungal density in agricultural lands is only half that of wild ecosystems, and wild grasslands containing 40% of the fungal biomass are being converted to farmland at four times the rate of forest deforestation.

telegram · zaihuapd · Jun 14, 14:58

**Background**: Arbuscular mycorrhizal fungi are a type of soil microorganism that forms a symbiotic relationship with the roots of most terrestrial plants. Through an extensive underground network of fine filaments called hyphae, these fungi help plants absorb water and nutrients while receiving carbon-rich sugars in return. To map these microscopic and globally distributed networks at a macro scale, scientists rely on modern computational tools like machine learning to extrapolate data from localized soil samples and literature reviews.

<details><summary>References</summary>
<ul>
<li><a href="https://madechango.com/study-guide/view/2108">Threads of underground fungal networks are long enough to reach...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">生态学</span> <span class="tag-badge">气候变化</span> <span class="tag-badge">科学突破</span> <span class="tag-badge">真菌网络</span> <span class="tag-badge">碳封存</span></p>

---