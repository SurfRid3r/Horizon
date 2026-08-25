---
layout: default
title: "Horizon Summary: 2026-08-25 (EN)"
date: 2026-08-25
lang: en
---

> From 55 items, 3 important content pieces were selected

---

1. [Apple Unveils M6 and M5 Ultra: First 2nm Chip and Quad-Die Powerhouse](#item-1) ⭐️ 9.0/10
2. [OpenAI's First Custom Chip Jalapeño Beats NVIDIA GB300 in Efficiency and Latency](#item-2) ⭐️ 9.0/10
3. [SpaceX Aims to Put NVIDIA Vera Rubin NVL72 Rack in Orbit by 2027](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Apple Unveils M6 and M5 Ultra: First 2nm Chip and Quad-Die Powerhouse](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/) ⭐️ 9.0/10

Apple introduced two new chips: the M6, its first 2-nanometer chip debuting in the new Mac mini with a 12-core CPU, 12-core GPU, and Dual 16-core Neural Engine, and the M5 Ultra, its most powerful M-series chip ever, which uses UltraFusion to connect two dual-die M5 Max chips into Apple's first quad-die architecture. The M5 Ultra offers up to 36 CPU cores, an 80-core GPU, up to 512GB of unified memory, and 1.2TB/s of memory bandwidth. This marks a major generational leap for Apple Silicon, simultaneously advancing cutting-edge 2nm manufacturing and multi-die packaging, with direct implications for on-device AI workloads where large unified memory and high bandwidth are critical. It also intensifies competition with x86 rivals Intel and AMD, as well as ARM competitors like Qualcomm and Xiaomi, in the premium CPU market. The M5 Ultra's UltraFusion boosts inter-die bandwidth to over 4.4TB/s with over 6x higher connection density, and its 1.2TB/s unified memory bandwidth is 50% higher than the M3 Ultra, while the 512GB RAM configuration arrives in October. Pricing is steep: a maxed Mac Studio with M5 Ultra, 256GB RAM, and 16TB storage costs $18,299, RAM upgrades run roughly $25/GB, and a fully loaded 512GB Studio is projected to approach $24,699.

hackernews · interpol_p · Aug 25, 13:01 · [Discussion](https://news.ycombinator.com/item?id=49433292)

**Background**: Apple Silicon is Apple's custom ARM-based chip family introduced in 2020 with the M1, which replaced Intel processors in Macs and pioneered a unified memory architecture where the CPU, GPU, and Neural Engine share a single memory pool. "Ultra" chips are created by fusing two "Max" chips together via UltraFusion, Apple's silicon packaging technology that makes the combined dies behave as one chip. Large unified memory capacities are especially valuable for running large AI models locally, since the model must fit entirely in memory. The M6's 2nm process refers to the newest semiconductor manufacturing node, packing more transistors and delivering better power efficiency than the 3nm node used in earlier M-series generations.

<details><summary>References</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/">Apple introduces M 6 and M5 Ultra for a big leap in performance and AI ...</a></li>
<li><a href="https://www.theverge.com/tech/984118/apple-m6-m5-ultra-chip-mac-mini-studio">Apple ’s new M 6 chip gets more cores and more AI compute</a></li>
<li><a href="https://9to5mac.com/2026/08/25/apple-launches-next-gen-apple-silicon-chips-m6-and-m5-ultra/">Apple launches next-gen Apple Silicon chips : M6 and M 5 Ultra</a></li>

</ul>
</details>

**Discussion**: Commenters praised the tangible real-world speed gains of M5 Pro and M6, but many flagged the steep upgrade pricing, with one detailed breakdown showing a maxed 512GB Mac Studio approaching $24,699 and RAM costing roughly $25 per GB. Others joked about competitive dynamics (Xiaomi claiming CPU parity with Apple drawing "Meep Meep" Roadrunner quips reminiscent of the late 90s), while some offered historical perspective that inflation-adjusted prices now match a vintage Mac SE/30 for vastly more capability, and several celebrated the $450 M4 Mac Mini as the best computing bargain in recent memory.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">apple-silicon</span> <span class="tag-badge">hardware</span> <span class="tag-badge">ai-compute</span> <span class="tag-badge">semiconductors</span> <span class="tag-badge">apple</span></p>

---

<a id="item-2"></a>

## [OpenAI's First Custom Chip Jalapeño Beats NVIDIA GB300 in Efficiency and Latency](https://openai.com/index/jalapeno-first-results/) ⭐️ 9.0/10

OpenAI published the first benchmark results for Jalapeño, its first in-house inference chip co-developed with Broadcom. Across GPT-OSS 120B, DeepSeek R1 670B, and Kimi K2.5 1T, it delivered 1.5-1.9x the performance-per-watt of NVIDIA's GB300 at peak throughput, 1.7-3.6x lower end-to-end latency, and 2.1-4.1x higher performance in high-interactivity scenarios. This marks OpenAI's entry into custom silicon, following Google, AWS, and Microsoft, and could reshape the AI hardware landscape while challenging NVIDIA's dominance in the inference market. Since inference is becoming the dominant cost of running large models, a chip that cuts energy consumption and latency directly reduces OpenAI's operating costs and lessens its dependence on NVIDIA GPUs. The chip is rated at 700W but sustains under 550W in practice, and it is inference-only — not designed for model training. Notably, the benchmarks compare against GB300 rather than NVIDIA's newer Vera Rubin platform that has just begun shipping, so the advantage over NVIDIA's latest generation remains unproven; OpenAI plans to deploy the chip in its own compute facilities by year's end, with a second generation already in deep development and a third in design.

telegram · zaihuapd · Aug 25, 16:08

**Background**: Jalapeño was co-developed with Broadcom and unveiled on June 24 in San Francisco, with results based on SemiAnalysis InferenceX benchmarks. The GB300 (Blackwell Ultra) it was compared against is NVIDIA's current flagship AI superchip, offering up to 20 petaFLOPS of FP4 performance and 748GB of unified memory. Building custom AI chips has become a trend among hyperscalers — Google (TPU), AWS (Trainium), and Microsoft (Maia) all develop their own accelerators to control costs and optimize for their specific workloads. NVIDIA's next-generation Vera Rubin platform, which integrates the Vera CPU with Rubin GPUs via NVLink-C2C and supports up to 144 GPUs per rack with direct liquid cooling, has only just started shipping and was not included in the comparison.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ithome.com.tw/news/176868">OpenAI 聯手 博 通 發表首款 自 研 推 論晶 片 Jalapeño | iThome</a></li>
<li><a href="https://k.sina.com.cn/article_7879923015_1d5ae154701901gfbu.html">OpenAI 亮出底牌：首枚 自 研 芯 片 Jalapeño 来了-云开发者社区-云 | 新浪网</a></li>
<li><a href="https://m.ithome.com/html/929707.htm">戴尔宣布率先出货 NVIDIA GB 300 Grace Blackwell Ultra ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">英伟达</span> <span class="tag-badge">推理硬件</span> <span class="tag-badge">博通</span></p>

---

<a id="item-3"></a>

## [SpaceX Aims to Put NVIDIA Vera Rubin NVL72 Rack in Orbit by 2027](https://www.theregister.com/off-prem/2026/08/25/spacex-claims-it-will-put-a-vera-rubin-nvl72-rack-scale-system-into-orbit-next-year/5292067) ⭐️ 8.0/10

SpaceX has announced plans to launch an NVIDIA Vera Rubin NVL72 rack-scale AI system—containing 72 Rubin GPUs and 36 Vera CPUs with power consumption exceeding 100 kW—into orbit in 2027 to test orbital data center technology. However, SpaceX has not yet disclosed the specific launch date, orbital altitude, or its solutions for powering, cooling, and communicating with the system in space. If realized, this would be the first deployment of a full rack-scale frontier AI system in space, potentially opening a paradigm where abundant space-based solar power supports massive orbital AI compute clusters beyond terrestrial grid constraints. It places SpaceX at the intersection of the two biggest infrastructure races of the decade—AI data centers and commercial space—and could reshape where and how AI training and inference are performed. The Vera Rubin NVL72 is a liquid-cooled chassis purpose-built for terrestrial data centers, so adapting it for orbit requires solving 100+ kW power delivery, heat rejection in vacuum (radiative cooling only, no convection), radiation protection for the chips, and high-bandwidth ground communication. The Rubin platform itself is manufactured on TSMC's 3 nm process with HBM4 memory and is scheduled for terrestrial release around Q3 2026, leaving a very tight timeline for an orbital variant by 2027.

telegram · zaihuapd · Aug 25, 08:03

**Background**: NVIDIA's Vera Rubin platform, announced by CEO Jensen Huang at Computex 2024 and named after astrophysicist Vera Rubin, combines Arm-based Vera CPUs with Rubin GPUs in a single rack where 72 GPUs are interconnected via NVLink. Orbital data centers are a proposed concept to place AI infrastructure in orbits such as sun-synchronous orbit and power it with continuous space-based solar energy; startup Starcloud has already trained the first LLM in space using an NVIDIA H100. SpaceX has reportedly envisioned far larger deployments—constellations of orbital data centers potentially reaching a million satellites generating 120 GW to power tens of millions of frontier-class GPUs in low-Earth orbit.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Rubin_(microarchitecture)">Rubin (microarchitecture) - Wikipedia</a></li>
<li><a href="https://win.ai/resources/blog/27-vera-rubin-nvl72-what-next-gen-training-infra-means">Vera Rubin NVL 72 cost and operational trade offs</a></li>
<li><a href="https://introl.com/blog/orbital-data-centers-space-ai-infrastructure-guide-2025">Orbital Data Centers | Introl Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">NVIDIA</span> <span class="tag-badge">orbital data center</span> <span class="tag-badge">AI compute</span> <span class="tag-badge">space technology</span></p>

---