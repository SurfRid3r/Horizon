---
layout: default
title: "Horizon Summary: 2026-06-14 (ZH)"
date: 2026-06-14
lang: zh
---

> 从 57 条内容中筛选出 5 条重要资讯。

---

1. [JavaScript 的诞生与消亡：重温 2014 年的预言性演讲](#item-1) ⭐️ 8.0/10
2. [保罗·格雷厄姆论赚取十亿美元的文文章引发激烈伦理辩论](#item-2) ⭐️ 8.0/10
3. [2026 年第一季度美国 75 个数据中心项目受阻，价值约 1300 亿美元](#item-3) ⭐️ 8.0/10
4. [华为在 HDC 2026 发布开源盘古 2.0 大模型](#item-4) ⭐️ 8.0/10
5. [科学家首次绘制出全球巨大的地下真菌网络图](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [JavaScript 的诞生与消亡：重温 2014 年的预言性演讲](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) ⭐️ 8.0/10

Gary Bernhardt 在 2014 年的经典演讲（虚构设定在 2035 年）正因极其准确的预言而被重新审视。该演讲预见 JavaScript 将成为其他语言的编译目标，这一预言通过 TypeScript、asm.js 以及最终的 WebAssembly 得以实现，同时还预言了以 Electron 为代表的 Web 技术进军桌面端。 这场演讲展示了软件工程领域中前瞻性技术预见的罕见价值——大多数预言都会落空，但 Bernhardt 的预言在短短几年内便成为现实。它为理解 Web 生态系统的主要变革提供了统一的叙事线索——从 JavaScript 的主导地位到 WebAssembly 的崛起，再到 Web 与桌面应用之间日益模糊的边界。 在 2014 年演讲之时，Google 刚刚发布 PNaCl 用于在 Chrome 中交叉编译和沙箱化原生代码，而 Mozilla 则提出了 asm.js 作为回应——它是 JavaScript 的一个子集，能够实现接近原生的性能。虽然 asm.js 后来被弃用，但 WebAssembly 作为真正的继承者出现了，提供了一种可移植的二进制代码格式，作为 C/C++、Rust 等语言的编译目标。然而，WebAssembly 目前仍缺乏直接的 DOM 操作能力，这意味着 Web 应用仍然需要 JavaScript 作为胶水代码。

hackernews · subset · 6月14日 12:38 · [社区讨论](https://news.ycombinator.com/item?id=48526661)

**背景**: JavaScript 由 Brendan Eich 于 1995 年在 Netscape 仅用十天时间创建，最初被设计为网页的简单脚本语言，但最终成为所有 Web 浏览器原生支持的唯一编程语言。多年来，想要在 Web 上使用其他语言的开发者不得不将它们编译为 JavaScript。asm.js（为性能而设计的 JavaScript 严格子集）和 PNaCl（Google 的可移植原生客户端）是在浏览器中实现接近原生代码执行的早期尝试，为 WebAssembly 铺平了道路——后者于 2017 年正式发布，成为一种标准化的二进制指令格式。微软于 2012 年发布的 TypeScript 也推动了这一趋势，它在添加静态类型的同时编译为纯 JavaScript。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript">The Birth & Death of JavaScript - Destroy All Software</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">WebAssembly - MDN</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebAssembly">WebAssembly - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为 Bernhardt 的预言极其准确，尤其是关于 JavaScript 成为编译目标（TypeScript）以及 Web 技术进入桌面应用（Electron）的预测。一位评论者幽默地指出，演讲预言了 2020 至 2025 年的全球灾难，只是猜错了灾难的类型。一个值得关注的反对意见指出，WebAssembly 的进展并未如预期般迅速——由于缺乏 DOM 操作能力，JavaScript 仍需作为胶水代码存在，而像 Flutter 这样的框架则完全绕过 HTML/CSS，在 canvas 上渲染所有内容，这牺牲了 Web 原生的功能特性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">WebAssembly</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">Tech History</span> <span class="tag-badge">Future Predictions</span></p>

---

<a id="item-2"></a>

## [保罗·格雷厄姆论赚取十亿美元的文文章引发激烈伦理辩论](https://paulgraham.com/earn.html) ⭐️ 8.0/10

保罗·格雷厄姆发表了题为《如何赚取十亿美元》的新文章，主张通向巨额财富最常见的路径是创办成功的创业公司，而核心驱动力是对用户的共情而非剥削。该文章在 Hacker News 上迅速引发 867 条评论，成为近期讨论最激烈的文章之一。 这篇文章触及了当下关于亿万富翁财富的道德性、科技公司在社会中的角色，以及巨额财富的创造是否本质上与剥削相关的持续文化辩论。格雷厄姆在创业界的巨大影响力意味着，他的论述可能会影响创始人如何看待自己的使命与责任。 格雷厄姆区分了通过剥削致富与通过创造真正有价值的东西致富，认为创业公司需要的是共情——理解用户真正想要什么——作为成功的主要因素。批评者反驳称，他列举的例子（如 Airbnb 和加密货币交易所）本身就可能涉及负面的社会外部性，而"创造性破坏"模型在道德上将创造与破坏纠缠在一起。

hackernews · kingstoned · 6月14日 11:50 · [社区讨论](https://news.ycombinator.com/item?id=48526360)

**背景**: 保罗·格雷厄姆是全球最具影响力的创业孵化器之一 Y Combinator 的联合创始人，他的文章被视为科技和创业界的必读内容。"创造性破坏"这一概念由经济学家约瑟夫·熊彼特推广，描述了创新如何取代既有产业——这一过程通常被视为净正面的，但确实存在真实的人力代价。近年来，随着财富不平等的加剧和对大型科技公司的审视，关于亿万富翁是否"应得"其财富的争论日益激烈。

**社区讨论**: 社区内部意见严重分化：批评者认为，十亿美元级别的企业在不剥削员工、客户或环境的情况下几乎不可能实现，而格雷厄姆的论述忽视了创造性破坏中创造与破坏之间的道德纠葛。支持者则认为这些负面反应是出于意识形态动机，格雷厄姆的核心信息——通过共情创造有价值的东西是值得赞赏的——被故意误读了。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Paul Graham</span> <span class="tag-badge">Startups</span> <span class="tag-badge">Economics</span> <span class="tag-badge">Tech Ethics</span> <span class="tag-badge">Hacker News</span></p>

---

<a id="item-3"></a>

## [2026 年第一季度美国 75 个数据中心项目受阻，价值约 1300 亿美元](https://www.tomshardware.com/tech-industry/artificial-intelligence/more-than-75-data-center-build-outs-worth-usd130-billion-have-been-successfully-blocked-in-the-first-four-months-of-2026-bipartisan-opposition-mounts-nationwide-over-fears-of-soaring-power-and-water-costs) ⭐️ 8.0/10

2026 年第一季度，美国至少有 75 个、总值约 1300 亿美元的数据中心建设项目被阻止或推迟，数量已与 2025 年全年持平。全国活跃的草根反对组织在三个月内从 396 个激增至 833 个，遍布 49 个州，各州议会和部分联邦议员也在推动监管法案和暂停建设的立法提案。 这波反对浪潮为大型科技公司赖以增长的 AI 和云基础设施扩建造成了重大瓶颈。反对声浪的跨党派和草根性质表明，能源消耗、用水量和环境影响已成为主流政治议题，可能从根本上重塑数据中心行业的扩张战略。 反对声浪具有显著的跨党派特征，不同政治立场的社区和政客因电费和水费飙升的担忧而团结一致。仅一个季度就涉及 1300 亿美元的规模，表明阻止项目推进的速度相比往年正在急剧加速。

telegram · zaihuapd · 6月14日 03:03

**背景**: 数据中心是 AI 训练、云计算和数字服务的物理基础设施，但其运行需要消耗大量电力和冷却用水。随着 AI 应用的激增，科技巨头已投入数千亿美元快速扩建数据中心，通常选址于土地和电力成本较低的乡村地区。然而，当地社区日益担忧这些设施会加重电网负荷、消耗水资源，并推高居民的公用事业费用。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">Infrastructure</span> <span class="tag-badge">AI</span> <span class="tag-badge">Energy Consumption</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-4"></a>

## [华为在 HDC 2026 发布开源盘古 2.0 大模型](https://t.me/zaihuapd/41948) ⭐️ 8.0/10

华为在 2026 年开发者大会上发布了 openPangu 2.0 系列模型，包含拥有 505B 参数的 Pro 版本和 92B 参数的 Flash 版本。该模型支持 512K 上下文窗口，华为计划从 6 月 30 日起逐步开源包括预训练代码在内的七大核心组件。 此次发布标志着华为对全球 AI 行业发起了重大的开源挑战，并深度整合了其专有的昇腾算力和鸿蒙生态。尽管面临国内算力资源的严重限制，此举仍将华为定位为中国推动 AI 自主可控和全球技术领导地位的核心驱动力。 openPangu 2.0 模型专门针对华为昇腾 AI 架构进行了深度优化，并与鸿蒙生态实现了无缝适配。余承东在主题演讲中指出，华为已将大量算力分配用于支持其他国内企业，自身留下的数量十分有限。

telegram · zaihuapd · 6月14日 08:05

**背景**: 华为昇腾计算是基于昇腾系列 AI 处理器构建的全场景 AI 基础设施方案，涵盖了从模块到集群的多种产品形态，旨在支持深度学习的训练与推理。昇腾 AI 芯片遵循每年算力翻倍的激进迭代逻辑，这对于处理像盘古这样的大规模模型至关重要。盘古大模型已开发多年，余承东强调华为在当前全球 AI 热潮开始之前就已经开创了这一大模型领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://e.huawei.com/cn/products/computing/ascend">昇腾计算-华为Ascend-AI计算-华为企业业务 - Huawei Enterprise</a></li>
<li><a href="https://finance.sina.com.cn/wm/2026-04-09/doc-inhtwaii5996062.shtml">华为昇腾系列ai芯片详细参数对比（2025-2028） - 新浪财经</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">开源AI</span> <span class="tag-badge">华为盘古</span> <span class="tag-badge">昇腾算力</span> <span class="tag-badge">鸿蒙生态</span></p>

---

<a id="item-5"></a>

## [科学家首次绘制出全球巨大的地下真菌网络图](https://insideclimatenews.org/news/11062026/earths-massive-underground-fungal-networks/) ⭐️ 8.0/10

由地下网络保护协会（SPUN）领导的研究项目首次绘制出全球地下丛枝菌根真菌网络的分布图。研究揭示，这些地下菌丝的总长度达到了惊人的 110 千万亿公里，总质量约为全球全人类总体重的 5 倍。 这一重大的科学突破为了解生态系统提供了关键基础，并揭示了这些真菌每年可封存约 10 亿吨碳，在缓解气候变化方面发挥着至关重要的作用。此外，研究还强调了一个紧迫的生态威胁，指出农业的快速扩张正在严重破坏这些庞大的碳封存网络。 该项目利用机器学习、实验室测试和全球土壤采样对这些真菌进行了建模，发现它们与全球约 80% 的植物形成了共生关系。值得注意的是，研究发现农田中的真菌密度仅为野生生态系统的一半，而含有约 40% 该类真菌生物量的野生草原，正以森林砍伐速度的 4 倍被迅速转变为农田。

telegram · zaihuapd · 6月14日 14:58

**背景**: 丛枝菌根真菌是一种土壤微生物，与大多数陆地植物的根系形成共生关系。通过被称为菌丝的广泛地下细丝网络，这些真菌帮助植物吸收水分和养分，作为回报则获取富含碳的糖分。为了在宏观尺度上绘制这些微观且遍布全球的网络，科学家们利用机器学习等现代计算工具，从局部土壤样本和文献综述中推断（外推）出整体数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://madechango.com/study-guide/view/2108">Threads of underground fungal networks are long enough to reach...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">生态学</span> <span class="tag-badge">气候变化</span> <span class="tag-badge">科学突破</span> <span class="tag-badge">真菌网络</span> <span class="tag-badge">碳封存</span></p>

---