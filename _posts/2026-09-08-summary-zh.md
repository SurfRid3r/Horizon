---
layout: default
title: "Horizon Summary: 2026-09-08 (ZH)"
date: 2026-09-08
lang: zh
---

> 从 53 条内容中筛选出 8 条重要资讯。

---

1. [OpenAI 宣称用 AI 解决纳维–斯托克斯千禧年难题并引发争议](#item-1) ⭐️ 9.0/10
2. [数学家宣布纳维-斯托克斯爆破问题突破，指控 OpenAI 窃取研究成果](#item-2) ⭐️ 9.0/10
3. [LG 电视被发现在离线或待机状态下仍监视用户](#item-3) ⭐️ 8.0/10
4. [OpenAI 发布 ChatGPT Images 2.5，速度与质量大幅提升](#item-4) ⭐️ 8.0/10
5. [隐秘的 DHS 预测性警务部门正在分析美国人的金融习惯](#item-5) ⭐️ 8.0/10
6. [Google Project Zero：用内存访问追踪与基于栈的延迟注入测试竞态条件](#item-6) ⭐️ 8.0/10
7. [Google GTIG：对抗性 AI 从提示词演进为自主智能体攻击](#item-7) ⭐️ 8.0/10
8. [OpenAI 发布 ChatGPT Images 2.0：引入推理与联网搜索，强化文字渲染](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [OpenAI 宣称用 AI 解决纳维–斯托克斯千禧年难题并引发争议](https://openai.com/index/navier-stokes-solution/) ⭐️ 9.0/10

OpenAI 宣布其内部 AI 系统生成了纳维–斯托克斯（Navier–Stokes）存在性与光滑性这一千禧年大奖难题的解答，声称证明了描述流体运动的 Navier–Stokes 方程的动力学会在有限时间内发展出奇点，并同时发布了书面证明和 Lean 形式化版本。该声明随即引发激烈争议：纽约大学数学家 Tristan Buckmaster 发布声明暗示这项工作可能建立在外部研究者的先前工作和提示词之上，Terence Tao 也对此公开发表了评论。 如果这一 AI 生成的证明经得起验证，将对数学和 AI 研究产生范式级别的冲击，并有望角逐克雷数学研究所（Clay Mathematics Institute）的百万美元大奖。除数学本身之外，成果来源的争议使其成为 AI 研究伦理以及 AI 辅助科学发现归属问题上的标志性案例。 该证明声称展示 Navier–Stokes 方程的解会在有限时间内出现爆破（奇点），OpenAI 同时放出了书面证明和 Lean 证明辅助工具的形式化版本。此外据称，OpenAI 表示这个内部模型训练时间不足两周，但数学能力却超过一周前才公开发布的 Astra 的两倍以上，而据称该成果所依赖的先前工作来自与 OpenAI 无关的数学家。

hackernews · OpenAI Research News · 9月8日 17:13 · [社区讨论](https://news.ycombinator.com/item?id=49613262)

**背景**: 纳维–斯托克斯方程诞生于 19 世纪，用于描述流体运动；克雷数学研究所设立的“存在性与光滑性”问题问的是：在三维情形下，该方程是否总存在光滑解，还是解会在有限时间内发展出奇点（爆破）。2000 年，克雷数学研究所指定了七个千禧年大奖难题，每个悬赏一百万美元，至今仅有庞加莱猜想被解决。解决 Navier–Stokes 问题被认为是理解湍流这一物理学重大未解现象的第一步。Lean 是一种定理证明辅助工具，可以让计算机以完全的逻辑严格性来检验数学证明。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_existence_and_smoothness">Navier–Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems">Millennium Prize Problems - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区观点严重分化：有评论者重点转发了 Tristan Buckmaster 的声明和 Terence Tao 的帖子，质疑该成果的原创性和来源，指出与 OpenAI 无关的数学家可能更早或几乎同时得到了类似结果；另一些人则惊叹于被争议掩盖的事实——一个训练不足两周的内部模型在数学能力上据称是刚发布一周的 Astra 的两倍以上。还有更宏观的反思，包括希望此类突破由公共机构而非私人公司完成，以及提醒自然科学并非单纯的计算问题。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Navier-Stokes</span> <span class="tag-badge">Millennium Prize Problems</span> <span class="tag-badge">AI research</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">mathematics</span></p>

---

<a id="item-2"></a>

## [数学家宣布纳维-斯托克斯爆破问题突破，指控 OpenAI 窃取研究成果](https://cims.nyu.edu/~tristanb/statement.pdf) ⭐️ 9.0/10

数学家 Tristan Buckmaster 和 Levent Alpöge 于 8 月 15 日宣布，他们在带光滑外力的不可压多孔介质方程、Boussinesq 方程以及三维不可压欧拉方程的有限时间爆破问题上取得进展——这与百万美元的克雷千禧年纳维-斯托克斯问题密切相关，但并非对该问题本身的完整解答。与此同时，Buckmaster 发表声明指控 OpenAI 通过用户数据获取他们未发表的研究成果，并试图威胁他们保持沉默；此前 OpenAI 刚刚宣布其内部模型生成了纳维-斯托克斯有限时间爆破的证明（Fefferman 官方表述中的 C 和 D 命题）。 这是一次双重冲击：一方面是数十年来久攻不下的千禧年大奖问题取得了实质性数学进展，另一方面是对顶尖 AI 实验室前所未有的指控——涉嫌采集研究者的私密对话数据，并利用企业压力压制其发表。如果指控被证实，可能会从根本上动摇研究者对用 AI 助手处理敏感工作的信任，并重塑 AI 时代关于数据隐私和学术优先权的行业规范。 据两位研究者的声明，OpenAI 曾提出公开称他们理应获得克雷奖、是"最接近该问题的人类"；当 Buckmaster 表示要公开此事时，对方反问"你为什么要毁掉自己的职业生涯？"。OpenAI 自己的证明尚未经数学界独立验证，该公司表示将拒绝领取克雷奖，而 OpenAI 研究员 Sebastian Bubeck 已在推特上公开否认相关指控。

hackernews · procedurecall · 9月8日 05:42 · [社区讨论](https://news.ycombinator.com/item?id=49605915)

**背景**: 纳维-斯托克斯方程由 19 世纪的 Navier 和 Stokes 发展而来，描述粘性流体的运动，是飞机设计、血液流动和污染分析等建模工作的基础。其中一个核心的悬而未决问题是：三维光滑解是否永远保持光滑，还是会在有限时间内发展出奇点（即"爆破"）——这是克雷数学研究所七大千禧年大奖问题之一，悬赏一百万美元。Buckmaster 和 Alpöge 的结果涉及密切相关体系（多孔介质方程、Boussinesq 方程和欧拉方程）的爆破，专家视其为通向完整纳维-斯托克斯问题的关键垫脚石。值得注意的是，Alpöge 任职于 OpenAI 的直接竞争对手 Anthropic，这为这场优先权之争又添了一层公司竞争的背景。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier-Stokes_equations">Navier-Stokes equations</a></li>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_existence_and_smoothness">Navier – Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://www.claymath.org/lectures/navier-stokes-existence-and-smoothness/">Navier - Stokes existence and smoothness - Clay Mathematics Institute</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论（696 分、346 条评论）大多同情两位数学家并对 OpenAI 表示愤怒，网友详细重建了事件时间线，并引用声明中关于威胁手段的原话。有评论者痛斥：花十年心血攻克难题，成果却 allegedly 从私密数据中被窃取，还要遭受企业威胁。也有网友指出，被指控的 OpenAI 研究员 Sebastian Bubeck 已否认指控，且部分 OpenAI 员工似乎在嘲讽公开支持 Alpöge 的 Anthropic 员工，许多人认为局势正变得愈发混乱。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">mathematics</span> <span class="tag-badge">navier-stokes</span> <span class="tag-badge">openai</span> <span class="tag-badge">research-ethics</span> <span class="tag-badge">data-privacy</span></p>

---

<a id="item-3"></a>

## [LG 电视被发现在离线或待机状态下仍监视用户](https://www.theverge.com/tech/991190/lg-tv-spying-standby-recording-wi-fi-scanning-gamers-nexus) ⭐️ 8.0/10

YouTube 频道 Gamers Nexus 的技术调查发现，LG 智能电视即使在离线或待机状态下，仍持续记录并上传有关用户及其家庭的数据。调查发现，这些电视会扫描本地 Wi-Fi 网络以清点附近设备、在待机模式下录音，甚至在未经用户同意的情况下连接 Xfinity Wi-Fi 热点。 这将智能设备的隐私侵权从被动收集数据升级为绕过用户控制的主动监视，使"不给电视联网"这一最常见的消费者对策彻底失效。它影响数百万 LG 电视用户，并可能推动监管变革，因为设备偷偷连接公共热点暴露了消费者隐私法律的严重缺口。 据报道，这些电视会扫描家庭网络以枚举附近设备，并在待机模式下出现麦克风活动。这项调查是继 Gamers Nexus 今年 7 月发现部分 LG 显示器自动安装收集设备数据、并推送宣传 LG 自家应用弹窗广告的程序之后的又一发现。

hackernews · sbulaev · 9月8日 16:07 · [社区讨论](https://news.ycombinator.com/item?id=49612329)

**背景**: 智能电视普遍使用自动内容识别（ACR）技术，实时识别屏幕上的内容，以实现收视率测量和定向广告——此前的学术审计已确认 LG 和三星电视都存在第二方 ACR 追踪。长期以来，标准的隐私建议是让电视保持离线或不登录账户，理由是未联网的电视无法回传数据。而这项调查推翻了这一假设；同时，Xfinity 公共热点网络部署广泛且设计为首次连接后自动加入，这进一步放大了自动连接的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theverge.com/tech/991190/lg-tv-spying-standby-recording-wi-fi-scanning-gamers-nexus">LG TVs caught spying even when offline or on standby | The Verge</a></li>
<li><a href="https://www.linkedin.com/posts/derekalldritt_automatic-content-recognition-tracking-in-activity-7245104268377042944-hJUP">How ACR tracking affects smart TVs | Derek A. posted on... | LinkedIn</a></li>
<li><a href="https://www.xfinity.com/support/articles/about-xfinity-wifi-internet">Xfinity WiFi hotspots overview - Xfinity Support</a></li>

</ul>
</details>

**社区讨论**: 评论者对电视未经同意就自动连接 Xfinity 热点表示震惊，认为这需要立法解决——包括强制提供"哑模式"——并指出未来若集成 GSM 蜂窝功能，拆除 Wi-Fi 天线等物理规避手段将彻底失效。一些人认为 LG 和三星正在挥霍数十年积累的信任，可能将市场份额拱手让给 TCL 等中国竞争对手；还有人呼吁对固件进行逆向工程，以查明背后涉及的第三方监视工具包，并探索向其数据端点发送垃圾数据的可行性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">smart-tv</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">consumer-rights</span> <span class="tag-badge">security</span></p>

---

<a id="item-4"></a>

## [OpenAI 发布 ChatGPT Images 2.5，速度与质量大幅提升](https://openai.com/index/introducing-chatgpt-images-2-5/) ⭐️ 8.0/10

OpenAI 发布了 ChatGPT Images 2.5（GPT-Image 2.5），这是其图像生成模型的新版本，带来了显著的速度提升和质量增强。新版本包含面向高端视觉工作流、需要跨编辑精细控制的 Sunburst 变体，以及面向延迟敏感场景的 Flare 变体，而该系统目前每周已生成超过 30 亿张图像。 该系统每周生成超过 30 亿张图像，是世界上使用最广泛的 AI 图像生成系统之一，因此即使是渐进式改进也能对创作者、开发者和企业产生巨大影响。真实 API 基准测试显示延迟从约 104 秒降至 35-40 秒，这一变化使 UI 设计和广告创意制作等快速迭代工作流更加实用。 一位通过 API 生成了约 5 万张图像的开发者报告，使用 GPT-Image-2 时平均延迟约为 104 秒，而在 2.5 版本中降至 35-40 秒——在快速迭代时这一差异非常明显。Sunburst 变体面向可直接用于生产的广告创意和精修产品图像，而 Flare 变体则让开发者可以检验在降低延迟的同时能否保持可接受的质量。

hackernews · vertigoruntime · 9月8日 18:37 · [社区讨论](https://news.ycombinator.com/item?id=49614720)

**背景**: GPT-Image 是 OpenAI 的原生图像生成模型系列，直接集成到 ChatGPT 中并可通过 API 使用，能够生成照片级真实感的图像、近乎完美的文本渲染，并理解复杂的提示词。与独立的图像工具不同，它支持统一的文本到图像生成，并可在 ChatGPT 对话中进行自然语言的后续编辑，例如添加文字、添加细节或使背景透明。自 ChatGPT 推出图像生成功能以来，它已成为使用量最大的消费级 AI 功能之一，与 Midjourney、谷歌的相关产品以及 Adobe Firefly 展开竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-chatgpt-images-2-5/">Introducing ChatGPT Images 2 . 5 | OpenAI</a></li>
<li><a href="https://developers.openai.com/api/docs/guides/image-prompting">Image prompting | OpenAI API</a></li>
<li><a href="https://help.openai.com/en/articles/11084440">Images in ChatGPT | OpenAI Help Center</a></li>

</ul>
</details>

**社区讨论**: 社区评论褒贬不一：一位通过 API 生成约 5 万张图像的开发者称赞延迟从约 104 秒降至 35-40 秒，认为这对快速迭代是非常明显的改进；而另一位评论者则称每周 30 亿张图像的统计数据是'今天读到的最令人沮丧的事'。多位用户强调该工具可以轻易伪造照片（伪造参加聚会、整理床铺、重制童年照片），引发对真实性的担忧，此外还有关于烤肉店招牌的玩笑，以及用 AI 重现心爱书籍系列场景的正面分享。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">image-generation</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">ChatGPT</span> <span class="tag-badge">generative-models</span></p>

---

<a id="item-5"></a>

## [隐秘的 DHS 预测性警务部门正在分析美国人的金融习惯](https://www.404media.co/a-secretive-dhs-predictive-policing-unit-is-analyzing-americans-financial-habits-and-pulling-them-over/) ⭐️ 8.0/10

404 Media 获取的一份 DHS 内部文件显示，一个名为“预测情报定位小组”（PITT）的隐秘边境巡逻队部门正在分析美国人的金融活动，以标记并拦截旅客。美联社的调查发现，该项目还大量使用自动车牌识别器（ALPR）来追踪潜在目标的行踪。 该项目将预测性警务应用于普通美国人的国内出行，且依据是金融行为，这颠倒了传统上以实际犯罪嫌疑为起点的调查模式。这引发了关于大规模监控、政府从数据经纪商处购买消费者金融数据，以及 AI 级数据分析如何让以往不可行的警务手段变为可能的第四修正案和公民自由方面的严重担忧。 PITT 小组的存在得到了运营细节的佐证，例如一名参与者的 WhatsApp 头像上可见的“Laredo Sector Tech Ops PITT”执法徽章。批评者还指出了职权错位：拦截州际毒品贩运是司法部下属缉毒局（DEA）的职责，而非国土安全部的既定使命。

hackernews · abraham · 9月8日 14:40 · [社区讨论](https://news.ycombinator.com/item?id=49610988)

**背景**: 预测性警务是指利用算法分析海量数据集，在潜在犯罪发生之前进行预测和干预，而不是对已经发生的犯罪做出响应。一个关键的促成因素是数据经纪商行业：这些公司从应用程序、浏览器和金融交易中汇总消费者信息，包括 ICE 和 DHS 在内的政府机构可以购买这些数据，从而有效绕过直接索取数据时适用的搜查令要求。部署在公路沿线的自动车牌识别器会随时间累积车辆位置数据，能够对个人行踪进行回溯性追踪。布伦南司法中心等公民自由组织长期以来一直警告，这些技术缺乏透明度、问责机制和适当的法律保障。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.404media.co/a-secretive-dhs-predictive-policing-unit-is-analyzing-americans-financial-habits-and-pulling-them-over/">A Secretive DHS ‘ Predictive Policing’ Unit is Analyzing Americans...</a></li>
<li><a href="https://www.brennancenter.org/our-work/research-reports/predictive-policing-explained">Predictive Policing Explained | Brennan Center for Justice</a></li>
<li><a href="https://www.npr.org/2026/03/25/nx-s1-5752369/ice-surveillance-data-brokers-congress-anthropic">Your data is everywhere. The government is buying it up : NPR</a></li>

</ul>
</details>

**社区讨论**: Hacker News 评论者普遍表示担忧，有人认为大规模国家监控才是驱动 LLM、摄像头系统和越来越大数据中心的真实用例。另一些人质疑为什么是 DHS 而非 DEA 在执行州际毒品拦截行动，并推测其流程是先用 ALPR 识别司机再倒推寻找犯罪——一位评论者称这相当于“把宪法扔出窗外”；还有人引用讽刺性的“Torment Nexus”梗，嘲讽科技公司正在把反乌托邦科幻小说变成现实。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">privacy</span> <span class="tag-badge">civil-liberties</span> <span class="tag-badge">predictive-policing</span> <span class="tag-badge">government-overreach</span></p>

---

<a id="item-6"></a>

## [Google Project Zero：用内存访问追踪与基于栈的延迟注入测试竞态条件](https://projectzero.google/2026/09/maccconc-race-condition.html) ⭐️ 8.0/10

Google Project Zero 研究员 Jann Horn 发表了一种新技术，通过将内存访问追踪与基于栈的延迟注入相结合，在测试中可靠地触发竞态条件。该方法针对他指出的三个长期痛点：确认通过人工分析或静态分析发现的漏洞候选、编写能够可靠复现已修复竞态条件漏洞的回归测试，以及让模糊测试工具触达只有在操作相互竞争执行时才会运行的代码路径。 竞态条件是一类常见的安全漏洞，但由于其危害只有在多线程以恰好正确的方式交错执行时才会显现，因此出了名地难以复现。一种能够按需强制产生这类交错执行的方法，将大幅提升漏洞确认的可靠性，防止已修复的并发漏洞在测试套件中悄然回归，并把自动化模糊测试扩展到当前 fuzzer 基本无法探索的漏洞类别。 其核心思路是对内存访问进行插桩追踪，再根据调用栈注入延迟，从而引导线程调度走向期望的竞争性交错执行，而不是依赖反复运行和运气。由于该技术会刻意扰动执行时序，它面向的是受控的测试场景——漏洞确认、回归测试套件和模糊测试——其目标是在这些场景中确定性地触发特定的交错执行。

rss · Project Zero · 9月8日 07:00

**背景**: 竞态条件出现在多线程程序中：当多个线程访问共享数据时，程序结果取决于调度器交错执行各线程步骤的确切顺序，因此错误行为可能很少出现，或仅在特定时序下出现。内存访问追踪是一种成熟的技术，它在程序每次内存访问时执行额外的插桩代码，长期以来被用于调试、污点分析和数据流追踪。模糊测试（fuzzing）是一种自动化的漏洞发现方法，它向软件投喂畸形或随机的输入以触发崩溃，但对 fuzzer 而言，覆盖并发操作中有价值的交错执行方式远比覆盖顺序执行的代码路径困难。Jann Horn 是 Google Project Zero 备受尊敬的安全研究员，曾发现众多备受瞩目的漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.usenix.org/system/files/conference/atc13/atc13-payer.pdf">Lightweight Memory Tracing - USENIX</a></li>
<li><a href="https://en.wikipedia.org/wiki/Fuzzing">Fuzzing - Wikipedia</a></li>
<li><a href="https://plv.colorado.edu/dmoon/assets/docs/poster.pdf">Optimizing Dynamic Race Detection With Hash Consing</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">race-conditions</span> <span class="tag-badge">fuzzing</span> <span class="tag-badge">concurrency</span> <span class="tag-badge">testing</span></p>

---

<a id="item-7"></a>

## [Google GTIG：对抗性 AI 从提示词演进为自主智能体攻击](https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai/) ⭐️ 8.0/10

Google 威胁情报小组（GTIG）报告称，攻击者已从基础的 AI 提示词使用进阶到自主的智能体 AI 工作流，大幅缩短了人在回路的延迟。2026 年第二季度，GTIG 观察到威胁行为者在攻陷一处云资源后，在不到六小时内完成规划、构建并执行了由智能体驱动的大规模凭据收割行动，同时追踪到 UNC6780 利用多种手段诱骗 AI 编码助手和 LLM 安全扫描器实施开源软件供应链攻击。 这一演变大幅压缩了防御者可用的传统响应窗口，迫使安全团队应对机器速度级别的攻击，而非人类节奏的操作。这还表明，企业 AI 资产——从模型权重、源代码到 API 凭据和云计算配额——已成为间谍活动、勒索和资源窃取的高价值目标。 报告识别出 2026 年第二季度的五大趋势：不断扩大的软件供应链风险（针对开发者、AI 编码助手和 LLM 安全扫描器）、对专有 AI 模型、代码、提示词和研究成果的窃取、可自主管理扫描管道并解决运行错误的智能体多智能体框架、AI 作为从侦察到后渗透全攻击生命周期中的力量倍增器（包括扩展信息行动），以及通过窃取开发者凭据、购买被盗账户和劫持云基础设施实施的 LLMjacking。这些发现基于 Mandiant 一线事件响应的遥测数据。

rss · Google Threat Intelligence · 9月8日 14:00

**背景**: GTIG 是 Google 的威胁情报团队，依托 Google 于 2022 年收购的事件响应公司 Mandiant 的遥测数据，定期发布关于对抗性 AI 应用的追踪报告。"智能体 AI"指能够自主规划、串联工具并以最少人工干预执行多步任务的 AI 系统，与由人类逐步指导的提示词交互模式不同。凭据收割指大规模收集有效用户凭据，攻击者随后将其用于未授权访问或出售。"LLMjacking"则指窃取或滥用 LLM API 凭据和账户，在受害者不知情的情况下让其承担费用来运行未授权的高性能 AI 工作负载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use">GTIG AI Threat Tracker: Distillation, Experimentation, and (Continued) Integration of AI for Adversarial Use | Google Cloud Blog</a></li>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence">Threat Intelligence | Google Cloud Blog</a></li>
<li><a href="https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/credential-harvesting/">What Is Credential Harvesting? | CrowdStrike</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">threat intelligence</span> <span class="tag-badge">agentic AI</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">Google GTIG</span></p>

---

<a id="item-8"></a>

## [OpenAI 发布 ChatGPT Images 2.0：引入推理与联网搜索，强化文字渲染](https://t.me/zaihuapd/43693) ⭐️ 8.0/10

OpenAI 发布了基于 GPT Image 2 模型的全新图像生成功能 ChatGPT Images 2.0，将思考（推理）能力与联网搜索引入图像生成流程。该模型可根据单一提示词生成最多 8 张视觉一致的连续图像，分辨率最高可达 2K，并显著提升了中文、日语、韩语等非拉丁语系的文字渲染效果。 准确的文字渲染（尤其是非拉丁语系）一直是 AI 图像生成器的长期短板，此次发布直接解决了制约设计、漫画和营销等东亚市场实际应用的痛点。将推理与联网搜索能力结合到图像生成中，也提高了行业竞争门槛，使模型能够生成更复杂、信息更充分的构图，例如 UI 界面原型、多格漫画和营销素材。 除核心新特性外，GPT Image 2 被描述为质量优先、推理驱动的模型，会在生成前先规划构图，支持多参考图的图像到图像编辑（单次请求最多可输入 16 张参考图），最高可输出 4K 分辨率。值得注意的是，ChatGPT Images 2.0 中 2K 的输出上限低于底层模型宣称的 4K 最高分辨率。

telegram · zaihuapd · 9月8日 18:45

**背景**: AI 图像生成中的文字渲染指模型在生成图像时准确绘制清晰、拼写正确的文字的能力——由于扩散模型是整体生成像素而非逐笔书写字符，这历来是个难题。此前的 GPT Image 1.5 等模型在文字渲染基准测试中已名列前茅（得分 4.88/5.00），但像中文、日语这样字符数以千计的文字体系仍然错误频发。在多张生成图像之间保持视觉一致性（例如同一角色出现在多个漫画分格中）是生成式模型的另一经典挑战，而 GPT Image 2 以推理驱动的方法正是为了解决这些问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://astorie.ai/models/image/gpt-image-2">GPT Image 2 AI Image - OpenAI | Astorie</a></li>
<li><a href="https://vibedex.ai/blog/best-ai-text-rendering-2026">Top 5 AI Image Generators for Text Rendering (2026) | VibeDex</a></li>
<li><a href="https://www.imagine.art/blogs/text-rendering-ai">What is Text Rendering in AI Image Generation?</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">image-generation</span> <span class="tag-badge">GPT-Image-2</span> <span class="tag-badge">multimodal-AI</span> <span class="tag-badge">product-release</span></p>

---