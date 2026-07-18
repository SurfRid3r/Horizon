---
layout: default
title: "Horizon Summary: 2026-07-18 (ZH)"
date: 2026-07-18
lang: zh
---

> 从 33 条内容中筛选出 9 条重要资讯。

---

1. [据报道 GPT-5.6 通过提示词解决了凸优化领域 30 年悬而未决的问题](#item-1) ⭐️ 9.0/10
2. [朝鲜黑客在虚假编程面试中利用 SVG 图片隐藏恶意软件](#item-2) ⭐️ 9.0/10
3. [WordPress Core 中发现严重的“wp2shell”RCE 漏洞](#item-3) ⭐️ 9.0/10
4. [月之暗面发布 Kimi K3：开源 2.8T 模型登顶前端编程 Arena](#item-4) ⭐️ 9.0/10
5. [OpenRouter 被传收到数十亿美元收购意向](#item-5) ⭐️ 9.0/10
6. [LG 显示器通过 Windows Update 静默安装软件](#item-6) ⭐️ 8.0/10
7. [Sebastian Raschka 解释 LLM 如何学习可调节的推理努力模式](#item-7) ⭐️ 8.0/10
8. [Meta 拟向 Anthropic 出租百亿美元 AI 算力](#item-8) ⭐️ 8.0/10
9. [特朗普政府拟设类似 FINRA 的机构审查顶尖 AI 模型](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [据报道 GPT-5.6 通过提示词解决了凸优化领域 30 年悬而未决的问题](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ⭐️ 9.0/10

据报道，一位研究人员使用 GPT-5.6（具体为 ChatGPT Pro 版本）解决了凸优化理论中一个悬而未决 30 年的难题，该问题与非光滑凸利普希茨函数的高效处理有关。这一成果仅通过一条提示词便达成，而非漫长的迭代研究过程。 这代表了数学研究的潜在范式转变——AI 现在能够解决困扰人类数十年的问题，表明 AI 可能成为理论计算机科学和数学研究的主要工具。这也引发了紧迫的问题：当 AI 能够快速解决"低悬"乃至"中悬"的难题时，研究界应如何调整其工作重心。 该问题涉及为凸利普希茨函数的优化建立时间复杂度的上界，其中对球形域的限制并非真正的约束，因为通过变量替换可以将任意有界域映射过来。社区成员指出，此成果是使用 ChatGPT Pro（一种多智能体系统）而非 Ultra 版本完成的，并且虽然意义重大，但该猜想比 OpenAI 最近证明的循环双重覆盖猜想略显小众。

hackernews · mbustamanter · 7月18日 13:00 · [社区讨论](https://news.ycombinator.com/item?id=48957779)

**背景**: 凸优化是数学优化的一个子领域，专注于在凸集上最小化凸函数，它是机器学习、工程学和运筹学等诸多领域的基础。虽然许多凸优化问题存在多项式时间算法，但关于特定问题类别——尤其是非光滑凸函数——的精确复杂度界限问题已经悬而未决数十年。确定优化问题求解速度的能力（时间复杂度的上下界）对理论计算机科学至关重要，因为它界定了计算可达性的极限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Convex_optimization">Convex optimization - Wikipedia</a></li>
<li><a href="https://asibiont.com/en/blog/kak-gpt-5-6-zakryl-30-letniy-probel-v-vypukloy-optimizatsii-razbor-keysa">GPT-5.6 Used a Prompt to Close a 30 - Year Gap in Convex ...</a></li>
<li><a href="https://haltmal.com/learning-knowledge-work/gpt-5-6-used-a-prompt-to-close-a-30-year-gap-in-convex-optimization/">GPT-5.6 Used A Prompt To Close A 30 - Year Gap In Convex ...</a></li>

</ul>
</details>

**社区讨论**: 具备领域专业知识的社区成员确认该成果是一项真正的贡献，但与 OpenAI 最近的循环双重覆盖证明相比略显小众。关于数学和理论计算机科学研究的未来引发了激烈讨论，有人认为初级研究人员将失去通过解决简单问题来获得训练的机会，这与软件开发领域的担忧类似。技术讨论还聚焦于 ChatGPT Pro 的多智能体方法与 Ultra 版本动态工作流编排之间的区别。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Convex Optimization</span> <span class="tag-badge">Research</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-2"></a>

## [朝鲜黑客在虚假编程面试中利用 SVG 图片隐藏恶意软件](https://www.elastic.co/security-labs/contagious-interview-malware-svg-steganography) ⭐️ 9.0/10

代号为'Contagious Interview'的朝鲜关联威胁行为者正在利用 SVG 隐写术，在虚假的开发者求职面试中将恶意软件隐藏在看似无害的旗帜图片中。嵌入的恶意软件成功绕过了所有主要杀毒厂商的检测，使攻击者能够后门入侵开发者机器并窃取凭证。 该活动标志着针对软件开发者的社会工程战术的重大升级，而开发者是拥有源代码、基础设施和企业系统访问权限的高价值目标群体。完全规避传统杀毒解决方案这一事实表明，具备文件类型感知能力的威胁检测现在已不可或缺，开发者必须像对待任何不受信任的输入一样谨慎处理编程面试文件。 攻击者将可缩放矢量图形（SVG）文件——一种支持嵌入 JavaScript 的基于 XML 的格式——武器化，利用隐写技术在其中隐藏恶意载荷。在虚假面试中，应聘者被要求解决涉及这些 SVG 旗帜图片的编程挑战，当打开或处理这些图片时，隐藏的恶意软件就会执行，建立后门访问并收集凭证。

rss · Elastic Security Labs · 7月18日 00:00

**背景**: 隐写术是网络安全中使用的一种技术，用于将恶意代码或敏感数据隐藏在普通数字文件（如图像、音频或文本）中，使传统安全工具极难检测到这些载荷。SVG 文件对攻击者尤其具有吸引力，因为与光栅图像格式（如 PNG、JPEG）不同，它们是 XML 文档，能够原生包含可执行的 JavaScript 和任意代码。'Contagious Interview'活动与朝鲜网络行动的更广泛模式一致，这些行动以科技行业为目标，通过伪装成招聘人员或雇主的精心策划的社会工程方案来获取经济利益和情报。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cloudflare.com/cloudforce-one/research/svgs-the-hackers-canvas/">SVGs: the hacker's canvas | Cloudflare</a></li>
<li><a href="https://cybersecuritynews.com/threat-actors-using-weaponized-svg-files/">Threat Actors Using Weaponized SVG Files to Redirect Users to Malicious ...</a></li>
<li><a href="https://www.kaspersky.com/resource-center/definitions/what-is-steganography">What Is Steganography & How Does It Work?</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Steganography</span> <span class="tag-badge">Social Engineering</span> <span class="tag-badge">Software Development</span></p>

---

<a id="item-3"></a>

## [WordPress Core 中发现严重的“wp2shell”RCE 漏洞](https://www.rapid7.com/blog/post/etr-cve-2026-63030-wp2shell-a-critical-remote-code-execution-vulnerability-in-wordpress-core) ⭐️ 9.0/10

Rapid7 披露了 CVE-2026-63030（也称为“wp2shell”），这是 2026 年 7 月 17 日报告的 WordPress Core 中一个严重的未经身份验证的远程代码执行漏洞。该漏洞影响 WordPress 6.9.0 至 7.0.1 版本，并已在 6.9.5 和 7.0.2 版本中得到修复。 由于 WordPress 是全球部署最广泛的内容管理系统之一，该漏洞允许在不需要任何有效凭据的情况下完全破坏系统，从而危及数百万个网站。由于该攻击无需身份验证，管理员必须将其视为紧急优先事项，以防止被大规模利用。 攻击者通过 WordPress REST API 批处理端点进行远程利用，专门针对缺乏持久对象缓存的默认安装。虽然目前尚未公开技术利用细节，但研究人员警告说，由于 WordPress 的开源性质，AI 模型可能很快就会生成公开的概念验证。

rss · Rapid7 Cybersecurity Blog · 7月17日 22:23

**背景**: 远程代码执行（RCE）是一类严重的漏洞，攻击者可以在主机系统上运行任意命令。“wp2shell”漏洞涉及与 REST API 批处理路由混淆相关的两个严重漏洞的复杂链，而不是单一孤立的缺陷。WordPress REST API 是一个允许应用程序与网站数据交互的接口，但在这种情况下，对批处理请求的处理不当为漏洞利用打开了大门。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://privacyneedle.com/tech-security/wordpress-wp2shell-vulnerability/">WordPress wp 2 shell Vulnerability : Critical Security Update</a></li>
<li><a href="https://tufztech.com/critical-wp2shell-vulnerability-exposes-hundreds-of-millions-of-wordpress-sites-to-unauthenticated-remote-code-execution/">Critical ' wp 2 shell ' Vulnerability Exposes Hundreds of Millions of...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">WordPress</span> <span class="tag-badge">RCE</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-4"></a>

## [月之暗面发布 Kimi K3：开源 2.8T 模型登顶前端编程 Arena](https://t.me/zaihuapd/42637) ⭐️ 9.0/10

月之暗面发布了全球首个开源的 2.8 万亿参数模型 Kimi K3，采用了新颖的 Delta Attention 和 Attention Residuals 架构。在 Frontend Code Arena 基准测试中，它从上一代 K2.6 的第 18 名飙升至第一名，以 1679 分的成绩击败了 Fable 5。 这项发布为开源 AI 能力树立了新的标杆，证明了开源模型在复杂编程任务中能够超越顶尖的闭源系统。其在编程能力和原生多模态上的巨大飞跃标志着一次潜在的范式转变，将对开发者和更广泛的开源生态产生深远影响。 Kimi K3 基于混合 MoE 架构构建，每 1 层 Full Attention (MLA) 交替穿插 3 层 Kimi Delta Attention (KDA)，在吞吐量和验证损失之间实现了最佳平衡。它还利用 Attention Residuals 用对前层输出的 softmax 注意力机制替代了固定加法，解决了 Transformer PreNorm 设置中长期存在的表征稀释问题，同时支持 100 万个 token 的上下文窗口。

telegram · zaihuapd · 7月18日 02:29

**背景**: Delta Attention (KDA) 是一种表达力强的线性注意力模块，构成了混合架构的一部分，在不牺牲性能的情况下提供了比传统完全注意力更高的效率。Attention Residuals (AttnRes) 是近期的一种架构改进，修复了 Transformer 残差连接信息聚合方式长达十年的缺陷，防止深层网络中早期表征被稀释。Frontend Code Arena 是一个第三方基准测试，开发者通过盲测对模型的前端编程能力进行评估和排名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2510.26692">Kimi Linear: An Expressive, Efficient Attention Architecture</a></li>
<li><a href="https://toknow.ai/posts/attention-residuals-moonshot-ai-kimi-drop-in-fix-prenorm-dilution/">Attention Residuals : A Drop-In Fix for How Every LLM Stacks Its...</a></li>
<li><a href="https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/">Kimi K3 Benchmarks vs Fable 5, GPT-5.6 & Opus</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">large-language-models</span> <span class="tag-badge">open-source</span> <span class="tag-badge">MoE</span> <span class="tag-badge">code-generation</span> <span class="tag-badge">Moonshot-AI</span></p>

---

<a id="item-5"></a>

## [OpenRouter 被传收到数十亿美元收购意向](https://www.theinformation.com/articles/startup-openrouter-fields-multi-billion-dollar-takeover-interest) ⭐️ 9.0/10

AI 模型路由平台 OpenRouter 已被多家大型科技公司接洽，探讨潜在收购可能，意向估值或高于其 2025 年 5 月 B 轮融资后约 13 亿美元的投后估值。 OpenRouter 是 AI 基础设施的关键组成部分，服务约 800 万用户并路由超过 400 个模型，任何收购都将构成 AI 生态系统中一次重大的行业整合。若被大型科技公司收购，可能重塑开发者访问和切换不同 AI 模型的方式，并可能影响平台的供应商中立性和定价策略。 OpenRouter 在由 Alphabet 旗下 CapitalG 领投的 B 轮融资中筹集了 1.13 亿美元，投后估值约 13 亿美元，较 2024 年 6 月 A 轮的 5.47 亿美元翻倍有余。平台每月处理约 100 万亿 token，截至 2026 年初年化收入已达约 5000 万美元。

telegram · zaihuapd · 7月18日 03:45

**背景**: OpenRouter 是一个 AI 模型路由平台，为开发者提供统一 API，可访问来自 OpenAI、Anthropic、Google 以及开源替代方案等多个供应商的 400 多个 AI 模型。开发者无需分别对接每个模型供应商，只需通过 OpenRouter 作为统一网关即可在不同模型间切换、比较输出结果，并根据成本和性能进行优化。随着 AI 领域日益碎片化为众多专业模型，每个模型各有不同的优势、定价和可用性，"模型路由"的概念变得愈发重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>
<li><a href="https://aipure.ai/cn/products/openrouter-ai">OpenRouter ：评论、功能、价格、指南和替代方案</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenRouter</span> <span class="tag-badge">AI</span> <span class="tag-badge">Acquisition</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Startups</span></p>

---

<a id="item-6"></a>

## [LG 显示器通过 Windows Update 静默安装软件](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent) ⭐️ 8.0/10

据报道，LG 显示器在通过 HDMI 连接时，会通过 Windows Update 在未经用户同意的情况下静默安装不受沙箱限制的软件。此问题不仅影响新购买 LG 显示器的用户，也影响那些已经使用较旧型号的用户。 这凸显了一个严重的安全和隐私漏洞，即硬件外设可能会绕过用户同意，安装具有完全系统和互联网访问权限的持久性软件。它暴露了 Windows 设备元数据处理机制中一个更广泛的缺陷，可能会被恶意外设滥用。 安装的软件会在启动时运行，拥有完全的操作系统权限且未受沙箱限制，只需插入显示器即会执行。用户可以通过组策略编辑器（`gpedit.msc`）禁用与设备元数据关联的应用程序自动下载，或者通过 `sysdm.cpl` 修改设备安装设置来阻止这种情况。

hackernews · baranul · 7月18日 10:21 · [社区讨论](https://news.ycombinator.com/item?id=48956688)

**背景**: 当显示器等显示设备通过 HDMI 或 DisplayPort 等接口连接时，Windows 会自动查询 Windows Update 目录以获取兼容的驱动程序和制造商应用程序。虽然这种机制旨在通过自动安装适当的驱动程序来简化用户体验，但硬件制造商可以利用它来推送可能不需要的软件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://asibiont.com/en/blog/monitory-lg-tayno-ustanavlivayut-po-cherez-windows-update-bez-vashego-soglasiya-chto-proiskhodit-i-kak-zashchititsya">LG Monitors Silently Install Software Through Windows Update ...</a></li>

</ul>
</details>

**社区讨论**: 社区成员强调，实际情况比听起来更糟，因为静默安装的软件获得了完全、未受沙箱限制的系统访问权限，并随每次启动而运行。许多评论者将责任归咎于微软存在缺陷的驱动程序同意模型，而不仅仅是 LG，并将其比作以前的 USB“AutoRun”恶意软件问题；此外，还提供了通过组策略阻止自动安装的实用变通方案。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Windows</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">System Administration</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-7"></a>

## [Sebastian Raschka 解释 LLM 如何学习可调节的推理努力模式](https://magazine.sebastianraschka.com/p/controlling-reasoning-effort-in-llms) ⭐️ 8.0/10

Sebastian Raschka 发表了一篇详细文章，解释了如何训练大型语言模型以支持低、中、高三种推理努力模式，其中学习到的努力模式决定了模型如何分配其推理 token。文章还介绍了能够让模型在推理时动态切换推理深度的训练方法，这些方法有可能将 token 使用量降低 30–50%。 控制推理努力是使推理模型更高效、更实用的关键能力，因为它可以避免高级模型在简单问题上浪费算力的"过度思考"问题。这种方法直接影响部署成本、延迟，以及推理型 LLM 在不同应用场景中的可及性。 努力模式与 token 预算之间的区别是核心所在：学习到的努力模式决定模型如何策略性地使用推理 token，而预算则对推理链的持续长度施加硬性约束。OpenAI 的 o3-mini 已经实现了类似的方法，内置了推理努力设置，可改变模型在回答前的思考强度。

rss · Ahead of AI · 7月18日 11:16

**背景**: 测试时算力已成为提升 LLM 推理能力的一个关键维度，研究表明，优化测试时算力的扩展可以使较小的模型在某些问题上超越 14 倍大的模型。研究者已开发出难度自适应推理方法，可根据输入的估计难度来分配推理努力、采样预算和探索深度。然而研究也发现，在简单问题上，高级推理模型由于一种被称为"过度思考"的现象，反而可能表现得不如更简单的模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://magazine.sebastianraschka.com/p/controlling-reasoning-effort-in-llms">How LLMs Learn Low -, Medium -, and High - Effort Reasoning Modes</a></li>
<li><a href="https://gentic.news/article/llms-learn-to-switch-reasoning">LLMs Learn to Switch Reasoning Effort at… | gentic.news</a></li>
<li><a href="https://arxiv.org/abs/2408.03314">[2408.03314] Scaling LLM Test - Time Compute Optimally can be More...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Reasoning</span> <span class="tag-badge">Deep Learning</span></p>

---

<a id="item-8"></a>

## [Meta 拟向 Anthropic 出租百亿美元 AI 算力](https://www.nytimes.com/2026/07/17/technology/meta-anthropic-ai-computing-power.html) ⭐️ 8.0/10

Meta 正与 AI 初创公司 Anthropic 进行早期谈判，拟将其 AI 数据中心算力出租给后者，潜在交易规模为两年 100 亿美元。该方案由 Anthropic 于今年 6 月提出，根据讨论中的条款，Anthropic 将按月付款，双方均可提前退出协议。 如此规模的交易凸显了 AI 算力的极度稀缺性，同时也表明拥有大量基础设施的科技巨头可以通过出租闲置算力来变现。对 Meta 而言，这笔交易不仅能开辟新的收入来源以对冲今年高达 1450 亿美元的支出计划——其中大量用于 AI 和数据中心建设——还有助于缓解投资者对其巨额资本开支的质疑。 据知情人士透露，目前谈判尚处于早期阶段，未必能最终达成协议。根据拟议条款，Anthropic 将按月付款，双方均可提前退出，这一结构设计显然是为了应对 AI 算力需求的不确定性。

telegram · zaihuapd · 7月18日 01:14

**背景**: AI 算力——主要由 NVIDIA H100 等 GPU 驱动——随着各大公司竞相训练和部署大语言模型，已成为关键且稀缺的资源。Meta 是全球最大的 AI 芯片采购商之一，今年承诺投入高达 1450 亿美元，其中相当一部分用于 AI 基础设施和数据中心建设。Anthropic 由前 OpenAI 研究人员创立，并获得亚马逊支持，是 Claude AI 助手的开发商，需要海量算力资源才能与 OpenAI 的 GPT 系列等竞争对手抗衡。从 Meta 租赁算力将是一种替代自建或购买专用基础设施的方案，在 AI 芯片市场供应紧张的背景下，这种选择变得越来越有吸引力。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">算力</span> <span class="tag-badge">商业新闻</span></p>

---

<a id="item-9"></a>

## [特朗普政府拟设类似 FINRA 的机构审查顶尖 AI 模型](https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models) ⭐️ 8.0/10

特朗普政府正在审阅一项提案，拟设立一个类似于美国金融业监管局（FINRA）的独立机构，以审查高级人工智能模型的安全性。该框架由财政部长斯科特·贝森特牵头，旨在回应华尔街对网络安全的担忧以及硅谷对政府临时性管控措施的不满。 该提案标志着美国 AI 监管向行业自律模式迈出了重要的政策转变，有望用结构化的框架取代临时性干预措施。它将通过为 OpenAI 和 Anthropic 等公司顶尖模型提供更具可预测性的合规途径，从而对其产生直接影响。 拟议的机构将向证券交易委员会（SEC）汇报，目前正由白宫幕僚长苏茜·威尔斯审阅。该计划与 Google DeepMind 首席执行官德米斯·哈萨比斯近期关于设立行业资助的独立监管机构的建议方向一致，尽管总统特朗普尚未审阅该方案，且具体细节可能有所调整。

telegram · zaihuapd · 7月18日 05:45

**背景**: FINRA 是一家经美国国会授权的非营利性自律组织（SRO），负责监管美国的经纪自营商，以保护投资者并确保市场诚信。近期，科技公司在 AI 安全问题上与政府监管机构发生冲突，Anthropic 和 OpenAI 均因政府要求修改或限制其最新模型的发布而提出过异议。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://baike.baidu.com/item/美国金融业监管局/9213493">美国金融业监管局_百度百科</a></li>
<li><a href="https://www.winzheng.com/article/anthropic-ai-safety-warning-backfires-government-recall">安 全 警告反噬？ Anthropic 最强 AI 遭 政 府 强制下架 | 赢 政 天下</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Regulation</span> <span class="tag-badge">US Policy</span> <span class="tag-badge">Government</span> <span class="tag-badge">Artificial Intelligence</span></p>

---