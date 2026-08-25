---
layout: default
title: "Horizon Summary: 2026-08-25 (ZH)"
date: 2026-08-25
lang: zh
---

> 从 55 条内容中筛选出 3 条重要资讯。

---

1. [苹果发布 M6 与 M5 Ultra：首款 2 纳米芯片与四芯片架构旗舰](#item-1) ⭐️ 9.0/10
2. [OpenAI 首款自研芯片 Jalapeño 能效与延迟领先英伟达 GB300](#item-2) ⭐️ 9.0/10
3. [SpaceX 计划 2027 年前将英伟达 Vera Rubin NVL72 机架系统送入轨道](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [苹果发布 M6 与 M5 Ultra：首款 2 纳米芯片与四芯片架构旗舰](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/) ⭐️ 9.0/10

苹果发布了两款新芯片：M6 是其首款 2 纳米制程芯片，首发于新 Mac mini，配备 12 核 CPU、12 核 GPU 和双 16 核神经网络引擎；M5 Ultra 则是迄今最强的 M 系列芯片，首次采用 UltraFusion 技术将两颗双芯片 M5 Max 连接为四芯片架构。M5 Ultra 最高提供 36 核 CPU、80 核 GPU、512GB 统一内存和 1.2TB/s 内存带宽。 这是 Apple Silicon 的重大代际飞跃，同时推进了尖端的 2 纳米工艺和多芯片封装技术，对依赖大容量统一内存和高带宽的端侧 AI 工作负载意义重大。它也加剧了苹果与 x86 阵营（Intel、AMD）以及高通、小米等 ARM 竞争对手在高端 CPU 市场的竞争。 M5 Ultra 的 UltraFusion 将芯片间带宽提升至超过 4.4TB/s，连接密度提高 6 倍以上，其 1.2TB/s 统一内存带宽比 M3 Ultra 高 50%，512GB 内存版本将于 10 月推出。定价十分高昂：搭载 M5 Ultra、256GB 内存和 16TB 存储的顶配 Mac Studio 售价 18,299 美元，内存升级约为每 GB 25 美元，512GB 完全顶配版本预计接近 24,699 美元。

hackernews · interpol_p · 8月25日 13:01 · [社区讨论](https://news.ycombinator.com/item?id=49433292)

**背景**: Apple Silicon 是苹果自 2020 年 M1 起推出的自研 ARM 架构芯片系列，取代了 Mac 中的 Intel 处理器，并开创了 CPU、GPU 和神经网络引擎共享同一内存池的统一内存架构。"Ultra" 芯片通过 UltraFusion 技术（苹果的芯片封装工艺）将两颗 "Max" 芯片融合在一起，使组合后的芯片像单一芯片一样工作。大容量统一内存对本地运行大型 AI 模型尤其重要，因为模型必须完整装入内存。M6 的 2 纳米制程指最新的半导体制程节点，比此前 M 系列使用的 3 纳米节点集成更多晶体管、功耗效率更高。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/">Apple introduces M 6 and M5 Ultra for a big leap in performance and AI ...</a></li>
<li><a href="https://www.theverge.com/tech/984118/apple-m6-m5-ultra-chip-mac-mini-studio">Apple ’s new M 6 chip gets more cores and more AI compute</a></li>
<li><a href="https://9to5mac.com/2026/08/25/apple-launches-next-gen-apple-silicon-chips-m6-and-m5-ultra/">Apple launches next-gen Apple Silicon chips : M6 and M 5 Ultra</a></li>

</ul>
</details>

**社区讨论**: 评论者称赞 M5 Pro 和 M6 在实际使用中速度提升明显，但不少人批评升级定价过高，有详细分析指出 512GB 完全顶配 Mac Studio 接近 24,699 美元，内存约为每 GB 25 美元。还有人调侃竞争格局（小米宣称 CPU 性能追平苹果，让人想起 90 年代末并引来 "Meep Meep" 的卡通飞毛腿梗），也有评论从历史角度指出经通胀调整后现在的价格已回到当年 Mac SE/30 的水平但性能强大得多，另有用户认为 450 美元的 M4 Mac Mini 是近年来最划算的计算设备。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">apple-silicon</span> <span class="tag-badge">hardware</span> <span class="tag-badge">ai-compute</span> <span class="tag-badge">semiconductors</span> <span class="tag-badge">apple</span></p>

---

<a id="item-2"></a>

## [OpenAI 首款自研芯片 Jalapeño 能效与延迟领先英伟达 GB300](https://openai.com/index/jalapeno-first-results/) ⭐️ 9.0/10

OpenAI 公布了与博通合作开发的首款自研推理芯片 Jalapeño 的首批基准测试数据：在 GPT-OSS 120B、DeepSeek R1 670B 和 Kimi K2.5 1T 三款模型上，其单位功耗产出的 AI 工作量为英伟达 GB300 的 1.5 至 1.9 倍，端到端延迟低 1.7 至 3.6 倍，高交互场景性能高 2.1 至 4.1 倍。 这标志着 OpenAI 正式加入自研 AI 芯片行列（此前 Google、AWS 和微软已有布局），可能重塑 AI 硬件格局并冲击英伟达在推理市场的主导地位。推理正成为运行大模型的主要成本来源，能效与延迟的提升将直接降低 OpenAI 的运营成本并减少对英伟达 GPU 的依赖。 该芯片额定功耗 700 瓦，实测持续功耗不超过 550 瓦，且仅用于推理而非模型训练。值得注意的是，基准测试对标的是 GB300 而非刚开始出货的英伟达新一代 Vera Rubin 平台，因此相对英伟达最新一代的优势尚未验证；OpenAI 计划年底前在自有算力设施中部署该芯片，第二代已在深入开发，第三代正在设计中。

telegram · zaihuapd · 8月25日 16:08

**背景**: Jalapeño 由 OpenAI 与博通联合开发，于 6 月 24 日在旧金山亮相，成绩基于 SemiAnalysis InferenceX 基准测试。作为对比基准的 GB300（Blackwell Ultra）是英伟达当前的旗舰 AI 超级芯片，提供高达 20 petaFLOPS 的 FP4 算力和 748GB 统一内存。自研 AI 芯片已成为超大规模厂商的趋势——Google（TPU）、AWS（Trainium）和微软都已推出自研加速器，以控制成本并针对自身负载优化。英伟达新一代 Vera Rubin 平台通过 NVLink-C2C 将 Vera CPU 与 Rubin GPU 集成，单机架最多支持 144 块 GPU 并采用直接液冷设计，目前刚开始出货，未纳入本次对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ithome.com.tw/news/176868">OpenAI 聯手 博 通 發表首款 自 研 推 論晶 片 Jalapeño | iThome</a></li>
<li><a href="https://k.sina.com.cn/article_7879923015_1d5ae154701901gfbu.html">OpenAI 亮出底牌：首枚 自 研 芯 片 Jalapeño 来了-云开发者社区-云 | 新浪网</a></li>
<li><a href="https://m.ithome.com/html/929707.htm">戴尔宣布率先出货 NVIDIA GB 300 Grace Blackwell Ultra ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">英伟达</span> <span class="tag-badge">推理硬件</span> <span class="tag-badge">博通</span></p>

---

<a id="item-3"></a>

## [SpaceX 计划 2027 年前将英伟达 Vera Rubin NVL72 机架系统送入轨道](https://www.theregister.com/off-prem/2026/08/25/spacex-claims-it-will-put-a-vera-rubin-nvl72-rack-scale-system-into-orbit-next-year/5292067) ⭐️ 8.0/10

SpaceX 宣布计划在 2027 年将一套英伟达 Vera Rubin NVL72 机架级 AI 系统（包含 72 颗 Rubin GPU 和 36 颗 Vera CPU，整机功耗超过 100 千瓦）送入轨道，用于验证轨道数据中心技术。但 SpaceX 尚未公布具体的发射时间、轨道高度，以及该系统在太空中的供电、散热和通信解决方案。 如果实现，这将是首个部署在太空的完整机架级前沿 AI 系统，有望开启一个新范式：利用取之不尽的太空太阳能，构建不受地面电网约束的大规模轨道 AI 算力集群。此举将 SpaceX 置于本十年两大基础设施竞赛——AI 数据中心与商业航天——的交汇点，可能改变 AI 训练与推理的地点和方式。 Vera Rubin NVL72 是专为地面数据中心设计的液冷整机架系统，要将其送入轨道，需要解决 100 千瓦以上的电力输送、真空环境下的散热（只有辐射散热、没有对流）、芯片的抗辐射防护以及与地面的高带宽通信等难题。Rubin 平台本身采用台积电 3 纳米工艺制造、搭载 HBM4 内存，计划约在 2026 年第三季度才上市，要在 2027 年前完成轨道版本，时间相当紧迫。

telegram · zaihuapd · 8月25日 08:03

**背景**: 英伟达的 Vera Rubin 平台由 CEO 黄仁勋在 2024 年 Computex 大会上发布，以天体物理学家 Vera Rubin 命名，将基于 Arm 架构的 Vera CPU 与 Rubin GPU 组合在单个机架中，通过 NVLink 互连 72 颗 GPU。轨道数据中心是一种设想中的概念，即把 AI 基础设施部署在太阳同步轨道等轨道上，利用持续的太空太阳能供电；初创公司 Starcloud 已经用一颗英伟达 H100 在太空完成了首次 LLM 训练。据报道，SpaceX 的设想更为宏大——建立由轨道数据中心组成的庞大星座，卫星数量可能高达百万颗、发电 120 吉瓦，为低地球轨道上的数千万颗前沿级 GPU 供电。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Rubin_(microarchitecture)">Rubin (microarchitecture) - Wikipedia</a></li>
<li><a href="https://win.ai/resources/blog/27-vera-rubin-nvl72-what-next-gen-training-infra-means">Vera Rubin NVL 72 cost and operational trade offs</a></li>
<li><a href="https://introl.com/blog/orbital-data-centers-space-ai-infrastructure-guide-2025">Orbital Data Centers | Introl Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">NVIDIA</span> <span class="tag-badge">orbital data center</span> <span class="tag-badge">AI compute</span> <span class="tag-badge">space technology</span></p>

---