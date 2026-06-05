---
layout: default
title: "Horizon Summary: 2026-06-04 (ZH)"
date: 2026-06-04
lang: zh
---

> 从 66 条内容中筛选出 12 条重要资讯。

---

1. [风能与太阳能全球发电量首次超越天然气](#item-1) ⭐️ 9.0/10
2. [Node-gyp 供应链攻击：隐藏在 binding.gyp 中的自传播 npm 蠕虫](#item-2) ⭐️ 9.0/10
3. [Cloudflare 报告：AI 智能体网络流量首次超越人类](#item-3) ⭐️ 9.0/10
4. [Cloudflare 收购 VoidZero，Vite 背后的公司](#item-4) ⭐️ 8.0/10
5. [加州大学伯克利分校文章称 AI 导致不及格率激增](#item-5) ⭐️ 8.0/10
6. [花费 1500 美元评估 LLM 自主攻击脆弱应用的能力](#item-6) ⭐️ 8.0/10
7. [Google 发布适用于笔记本电脑的 Gemma 4 12B 模型](#item-7) ⭐️ 8.0/10
8. [微信与手机厂商合作推出 A2A 助手能力](#item-8) ⭐️ 8.0/10
9. [美企因成本考虑转向中国 AI，DeepSeek 登顶企业软件热门榜](#item-9) ⭐️ 8.0/10
10. [苹果新版 Siri 将采用谷歌与 Nvidia 芯片处理云端请求](#item-10) ⭐️ 8.0/10
11. [ChatGPT 记忆系统升级：采用“dreaming”技术自动学习偏好](#item-11) ⭐️ 8.0/10
12. [面向 AI 代理的 754 项结构化网络安全技能发布](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [风能与太阳能全球发电量首次超越天然气](https://electrek.co/2026/05/20/in-a-first-wind-solar-generated-more-power-than-gas-globally-april-2026/) ⭐️ 9.0/10

2026 年 4 月，全球风能和太阳能发电量有史以来首次超越了天然气。这标志着全球能源转型的一个重大里程碑，可再生能源在电力领域占据了领先地位。 这一转变展示了可再生能源日益加快的部署速度和成本竞争力，直接挑战了化石燃料在电力领域的历史主导地位。它标志着一个巨大的范式转变，将深刻影响未来的能源投资、电网基础设施建设和气候变化缓解策略。 尽管这一里程碑涵盖了发电量，但必须注意的是，电力仅占全球总能源消耗的 20%至 25%左右，天然气仍广泛用于交通、供暖和建筑等领域。此外，天然气在灵活性方面仍保持优势，这对于应对峰值负载和人工智能（AI）数据中心等要求高的应用依然至关重要。

hackernews · speckx · 6月4日 14:36 · [社区讨论](https://news.ycombinator.com/item?id=48399332)

**背景**: 全球能源系统在历史上一直依赖煤炭和天然气等化石燃料来提供可靠的基础电力。近年来，太阳能电池板、风力发电机和电池储能技术的显著成本降低和技术进步，加速了可再生能源的普及。追踪这一转型通常专门针对电力行业进行比较，因为电力代表了经济中高度电气化的部分，而更广泛的能源行业则包括液体燃料和燃气供暖。

**社区讨论**: 社区对此感到兴奋，但也提供了重要的技术和经济背景，例如指出了发电量与总能源消耗之间的关键区别。一些用户分享了安装家庭太阳能和电池储能系统的成功经验，强调了 8 到 10 年的投资回报率，以及使用 Raspberry Pi 和 Grafana 进行的 DIY 监控项目，而另一些人则讨论了天然气在应对灵活负载方面的持续需求。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">renewable-energy</span> <span class="tag-badge">sustainability</span> <span class="tag-badge">energy-transition</span> <span class="tag-badge">solar-power</span> <span class="tag-badge">electricity</span></p>

---

<a id="item-2"></a>

## [Node-gyp 供应链攻击：隐藏在 binding.gyp 中的自传播 npm 蠕虫](https://snyk.io/blog/node-gyp-supply-chain-compromise-self-propagating-npm-worm-binding-gyp/) ⭐️ 9.0/10

安全研究人员发现了一种新型的 npm 蠕虫病毒，该病毒通过将恶意代码隐藏在 binding.gyp 文件中来利用 node-gyp 构建系统。这种技术完全绕过了传统的 npm 生命周期脚本限制，允许有效载荷在包安装期间执行，从而窃取凭证并无声地在维护者的代码库中自我传播。 这一漏洞构成了重大的供应链安全威胁，因为它颠覆了一个随 Node.js 捆绑提供且被普遍信任的基础构建工具。由于它有效地规避了标准的生命周期脚本防御机制，这种自传播蠕虫可能会迅速破坏无数的开发者环境和下游项目。 该攻击操纵了通常用于定义 C++插件构建过程的 binding.gyp 配置文件，以便在 npm install 期间触发 node-gyp 时执行任意命令。除了执行代码外，该恶意软件还会建立持久性，收集开发者凭证，并自动修改受害者的其他项目以进一步传播感染。

rss · Blog RSS Feed | Snyk · 6月4日 00:00

**背景**: Node.js 依赖一个名为 node-gyp 的构建工具来编译原生 C++插件，该工具会从一个名为 binding.gyp 的文件中读取构建配置。通常，npm 包使用生命周期脚本（如 postinstall）在安装期间运行代码，而这些脚本往往受到安全工具的严密监控和限制。然而，由于 node-gyp 是原生模块所需的受信任系统组件，恶意行为者可以滥用 binding.gyp 文件注入命令，从而完全绕过那些标准的生命周期脚本防御机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/nodejs/node-gyp/blob/main/README.md">node - gyp /README.md at main · nodejs/ node - gyp · GitHub</a></li>
<li><a href="https://docs.npmjs.com/cli/v8/using-npm/scripts/">How npm handles the " scripts " field</a></li>
<li><a href="https://ducmanhphan.github.io/2018-09-19-Configure-Binding.gyp-file-in-C++-Addon-Node.js/">Configure binding . gyp file in C++ Addon - Node.js</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Supply Chain Attack</span> <span class="tag-badge">npm</span> <span class="tag-badge">Node.js</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-3"></a>

## [Cloudflare 报告：AI 智能体网络流量首次超越人类](https://www.tomshardware.com/tech-industry/artificial-intelligence/bots-have-now-passed-human-traffic-online-cloudflare-boss-laments-says-agentic-traffic-wasnt-expected-to-eclipse-real-people-until-next-year) ⭐️ 9.0/10

Cloudflare 报告指出，AI 智能体产生的网络流量已正式超过人类流量，目前占所有页面请求的约 57.5%。这一转折点比公司首席执行官 Matthew Prince 此前预测的 2027 年大幅提前。 这一范式转变标志着互联网使用方式的根本性改变，迫使业界重新思考网络基础设施、安全协议和 SEO 策略。它凸显了自主 AI 系统的快速激增，这些系统现在正以前所未有的规模与网络进行交互。 与传统的网络爬虫不同，这些现代 AI 智能体会执行比价、内容检索和客户服务等复杂的多步骤任务。然而，如果按总使用时长计算，人类仍是互联网的主要使用者，因为流媒体和社交媒体等活动产生的单独页面请求数量远低于自动化程序。

telegram · zaihuapd · 6月4日 16:49

**背景**: 传统上，网络流量由浏览网站的人类用户和自动化机器人组成，后者在历史上大多是简单的抓取器或搜索引擎索引程序。先进人工智能的兴起引入了“AI 智能体”，这些程序能够在互联网上自主执行复杂的目标任务。作为全球主要的基础设施和安全提供商，Cloudflare 处理着全球大量的网络流量，这使其拥有非常可靠的视角来观察这些宏观层面的互联网趋势。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Web Traffic</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Internet Infrastructure</span> <span class="tag-badge">AI Milestone</span></p>

---

<a id="item-4"></a>

## [Cloudflare 收购 VoidZero，Vite 背后的公司](https://blog.cloudflare.com/voidzero-joins-cloudflare/) ⭐️ 8.0/10

Cloudflare 官方宣布收购由尤雨溪创立的开源公司 VoidZero，该公司负责维护 Vite、Vitest 和 Rolldown 等关键的 Web 开发工具。这项战略性收购将现代 JavaScript 生态系统的核心架构师直接纳入了 Cloudflare 的旗下。 此次收购意义重大，因为它使 Cloudflare 处于现代前端构建过程的核心位置，可能会影响 AI 编程智能体默认使用 Cloudflare 的部署平台。这也凸显了开源项目在可持续性方面面临的持续困境，即使是极其受欢迎的工具也很难产生独立收入，最终只能走向被收购的命运。 VoidZero 的产品矩阵包括 Vite，这是一款以惊人速度和灵活插件系统著称的下一代前端构建工具，支持 Vue 和 React 等主要框架。收购完成后，该团队声称项目路线图将保持不变，尽管社区成员对这一承诺仍持高度怀疑态度。

hackernews · The Cloudflare Blog · 6月4日 13:00 · [社区讨论](https://news.ycombinator.com/item?id=48398055)

**背景**: Vite 是一款现代开源构建工具，它通过利用原生 ES 模块提供即时服务器启动和极快的热模块替换，彻底改变了前端开发。VoidZero 由 Vue.js 框架的创建者尤雨溪创立，旨在为 Vite 生态系统以及 Rolldown 和 Oxc 等相关基于 Rust 的工具提供可持续的资金和开发支持。尽管这些工具被 Web 开发社区广泛采用，但事实证明，围绕开源基础设施建立一个盈利的独立商业模式是极其困难的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://voidzero.dev/?ref=siteinspire">VoidZero | Next Generation Tooling for the Web</a></li>
<li><a href="https://vite.dev/">Vite | Next Generation Frontend Tooling</a></li>

</ul>
</details>

**社区讨论**: 社区讨论呈现出严重的两极分化，既表达了对尤雨溪历史贡献的深深赞赏，也表现出对开源“为了被收购而建立”商业模式的极度愤世嫉俗。一些评论者猜测，Cloudflare 的主要动机是操纵 AI 编程智能体推荐他们的托管平台而不是 Vercel 等竞争对手，这相当于“针对 AI 的 SEO”。与此同时，其他人对这次收购表示不安，怀疑项目路线图不变的承诺，并批评了 Cloudflare 现有的用户体验。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">javascript</span> <span class="tag-badge">cloudflare</span> <span class="tag-badge">open-source</span> <span class="tag-badge">web-development</span> <span class="tag-badge">acquisitions</span></p>

---

<a id="item-5"></a>

## [加州大学伯克利分校文章称 AI 导致不及格率激增](https://www.dailycal.org/news/campus/academics/failing-grades-soar-as-professors-see-greater-ai-usage-dwindling-math-skills-in-uc-berkeley/article_16fad0bf-02cb-4b8c-8d88-888ffd9f8608.html) ⭐️ 8.0/10

一篇最近的文章声称，加州大学伯克利分校计算机科学系不及格率的激增与学生数学技能下降以及过度依赖人工智能直接相关。然而，社区成员迅速分析了历史成绩数据以挑战该文章的核心前提，暗示这种叙事可能是在挑选数据，以支持恢复标准化考试的政治推动。 这一发展凸显了学术界在整合大语言模型到教育中以及对解决问题能力的潜在认知影响方面日益紧张的关系。它也强调了教育统计数据可能如何被武器化以推动特定的政策议程，例如改变大学录取标准。 社区成员对 Berkeleytime 成绩数据的分析显示，与历史趋势相比，最近几个学期的不及格率并没有大幅增加。此外，一位计算机科学教授指出，有学生提交了 AI 生成的项目，但在实际讨论过程中却无法理解底层的架构选择。

hackernews · littlexsparkee · 6月4日 00:18 · [社区讨论](https://news.ycombinator.com/item?id=48392004)

**背景**: 原文将学术困境归结为像 ChatGPT 这样的工具的快速普及，以及自疫情以来基础数学技能的明显下降。评论中揭示的一个关键背景是，接受采访的教授正在积极推动一项有超过 1300 名加州大学教职员工签名的请愿书，要求恢复 STEM 专业录取的 SAT 和 ACT 要求，此前加州大学系统决定取消这些考试。

**社区讨论**: 社区讨论对该文章持高度批评态度，一位用户提供了数据可视化，揭穿了不及格率激增的说法是经过刻意挑选的。同时，其他评论者对大语言模型过度依赖导致的认知能力下降表示了真正的担忧，指出即使是顶尖的博士现在也越来越难以在没有 AI 辅助的情况下进行头脑风暴、编写代码或写作。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI in Education</span> <span class="tag-badge">LLM Impact</span> <span class="tag-badge">Cognitive Skills</span> <span class="tag-badge">Computer Science</span> <span class="tag-badge">Academia</span></p>

---

<a id="item-6"></a>

## [花费 1500 美元评估 LLM 自主攻击脆弱应用的能力](https://kasra.blog/blog/i-spent-1500-seeing-if-llms-could-hack-my-app/) ⭐️ 8.0/10

作者特意构建了一个存在漏洞的应用程序，并花费 1500 美元进行实证基准测试，评估各类 LLM 能否自主对其进行攻击。结果显示，安全护栏（尤其是 Anthropic 的）对模型表现的阻碍往往超过了技术能力本身的限制。 该基准测试提供了关于当前前沿 LLM 在进攻安全能力方面的罕见实证数据，揭示了行业中 AI 安全护栏与合法安全测试实用性之间的关键矛盾。随着网络安全和 AI 行业在如何平衡防御性用例与防止恶意使用之间不断博弈，这些发现具有高度的相关性。 该测试采用完全自主的评估方法，要求 LLM 在没有人类指导的情况下自行发现并利用漏洞。部分模型（尤其是 Claude 和 Gemini）因安全过滤器拒绝执行任务，使得它们的低分从纯能力角度来看并无定论。作者指出 GPT 模型似乎被明确列入了白名单，这可能使其在比较中获得了不公平的优势。

hackernews · jc4p · 6月4日 00:56 · [社区讨论](https://news.ycombinator.com/item?id=48392343)

**背景**: 渗透测试是一种经过授权的对计算机系统进行的模拟网络攻击，旨在评估系统的安全性。基于 LLM 的智能体正越来越多地被探索用于自动化或辅助安全测试，利用其分析代码、理解漏洞模式和生成攻击策略的能力。AI 安全护栏与模型能力之间的紧张关系是目前持续讨论的重要议题，因为像 Anthropic 这样的公司实施了更严格的拒绝策略，可能影响安全研究等合法用例。

**社区讨论**: Hacker News 社区强调 Anthropic 的低分源于过度的安全护栏而非能力不足，多名评论者指出 Claude 拒绝执行合法安全工作的倾向随每次发布不断增加。多位评论者批评完全自主的测试方法不够现实，认为人机协作的方法（用户引导模型方向）能产生显著更好的效果，并举例说明模型在少量引导下成功修补二进制文件和绕过反调试技术。还有人提出了公平性问题：GPT 模型似乎被加入了白名单而其他模型没有，这使得直接分数比较具有误导性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Benchmarks</span></p>

---

<a id="item-7"></a>

## [Google 发布适用于笔记本电脑的 Gemma 4 12B 模型](https://arstechnica.com/google/2026/06/googles-new-gemma-4-open-ai-model-is-sized-for-your-laptop/) ⭐️ 8.0/10

Google 发布了 Gemma 4 12B 开源模型，这款全新的 AI 模型仅需 16 GB 系统内存或显存即可在普通消费级笔记本电脑上本地运行。此次发布填补了移动端轻量模型与大型专业模型之间的空白，在内存占用仅为 26B MoE 模型一半的情况下，依然达到了接近后者的基准测试性能。 此次发布对于硬件受限的开发者和用户具有重要意义，因为它极大地推动了高性能本地 AI 部署和边缘计算的普及。Google 提供了一款无需昂贵硬件即可媲美更大型架构的模型，使得更广泛的应用场景能够在本地或离线环境中高效运行。 Gemma 4 12B 模型仅需 16 GB 内存或显存即可运行，完美适配标准的消费级硬件。该模型属于已采用 Apache 2.0 许可证的 Gemma 4 系列的一部分，该系列已于今年 4 月发布了四款模型。

telegram · zaihuapd · 6月4日 01:46

**背景**: Gemma 是由 Google DeepMind 开发的一系列轻量级开放模型，其采用的核心技术与 Google 更大型的 Gemini 模型相似。今年 4 月发布的 Gemma 4 系列包含多款架构，并采用了 Apache 2.0 开源许可证，其中就包括混合专家模型。MoE 架构通过在推理时仅激活特定的参数来提升效率，但通常会占用较大内存，因此推出经过高度优化的 12B 密集模型对资源受限的环境极具吸引力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Google_Gemma">Google Gemma</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/31145348325">一文带你详细了解：大模型MoE架构（含DeepSeek MoE详解）</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Local AI</span> <span class="tag-badge">Open Source Models</span> <span class="tag-badge">Google Gemma</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Edge Computing</span></p>

---

<a id="item-8"></a>

## [微信与手机厂商合作推出 A2A 助手能力](https://36kr.com/newsflashes/3838138218662404) ⭐️ 8.0/10

微信正在与华为、荣耀、小米、OPPO 和 vivo 等主要手机厂商合作，推出 A2A（Agent-to-Agent）助手能力。该功能目前已支持荣耀部分机型，允许用户通过手机原生的语音助理直接发送微信消息或拨打音视频通话。 这次合作标志着 AI 智能体在大规模实际部署方面迈出了重要一步，打通了第三方超级应用与手机原生系统之间的壁垒。这不仅为日常应用如何与设备端 AI 生态无缝交互设定了重要先例，还将从根本上改变用户的交互习惯。 目前，该功能已在荣耀部分机型上线，用户只需将 YOYO 智能体和微信更新至最新版本，即可唤醒 YOYO 执行微信指令。其底层技术依赖于 A2A（Agent-to-Agent）架构，这使得手机原生系统助手能够与微信应用进行有效通信和任务协商。

telegram · zaihuapd · 6月4日 04:53

**背景**: Agent-to-Agent (A2A) 是一种专为多智能体系统设计的开放通信协议，旨在实现不同提供商或框架构建的 AI 智能体之间的互操作与任务协商。各大科技公司一直在推动标准化的 A2A 协议，以无缝连接部署在外部系统中的 AI 智能体。在移动生态系统中，像荣耀这样的手机厂商已经开发出先进的设备端 AI 助手（如 YOYO 智能体），它们现在利用这种跨智能体的通信能力来直接控制第三方应用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zedyer.com/iot-knowledge/a2a-agent-to-agent/">A2A协议（Agent‑to‑Agent）：多 Agent 协作新时代，通信标准与落地指南 | 星野云联</a></li>
<li><a href="https://post.smzdm.com/p/avg8krzn/">荣 耀 YOYO ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">WeChat</span> <span class="tag-badge">Mobile OS</span> <span class="tag-badge">Agent-to-Agent</span> <span class="tag-badge">Smart Assistants</span></p>

---

<a id="item-9"></a>

## [美企因成本考虑转向中国 AI，DeepSeek 登顶企业软件热门榜](https://www.scmp.com/tech/tech-trends/article/3355927/more-us-firms-turn-chinas-deepseek-over-pricey-silicon-valley-ai) ⭐️ 8.0/10

受显著的成本优势驱动，越来越多的美国企业开始采用中国 AI 模型 DeepSeek，推动其在 6 月份登顶企业支出管理平台 Ramp 的“热门软件供应商”榜首。同时，DeepSeek 宣布对其旗舰模型 V4 Pro 进行永久降价，并正在推进首轮融资，估值接近 600 亿美元。 这一转变表明，成本效益正成为全球 AI 市场的主要驱动力，直接挑战了昂贵的硅谷 AI 服务商的主导地位。这也凸显了中国开源 AI 模型在全球范围内不断增强的竞争力和商业可行性。 DeepSeek V4 Pro 是一个大规模混合专家模型，总参数量达 1.6 万亿，激活参数量为 490 亿，能够处理高达 100 万个 token 的上下文窗口。它提供了极具竞争力的 API 价格，每百万输入 token 仅售 0.435 美元，每百万输出 token 为 0.87 美元。

telegram · zaihuapd · 6月4日 10:26

**背景**: DeepSeek 是一家知名的中国人工智能公司，以开发能与西方顶尖技术相抗衡的强大开源大型语言模型而闻名。通过利用如混合专家架构等高效设计，他们成功地大幅降低了训练和推理成本。这一策略使他们获得了全球的高度关注，并吸引了腾讯和宁德时代等主要投资方。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-pro">DeepSeek V 4 Pro - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://build.nvidia.com/deepseek-ai/deepseek-v4-pro">deepseek - v 4 - pro Model by Deepseek - ai | NVIDIA NIM</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Industry</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Enterprise Software</span> <span class="tag-badge">Market Trends</span> <span class="tag-badge">Open Source Models</span></p>

---

<a id="item-10"></a>

## [苹果新版 Siri 将采用谷歌与 Nvidia 芯片处理云端请求](https://www.macrumors.com/2026/06/04/apple-siri-rely-on-google-nvidia-chips/) ⭐️ 8.0/10

苹果预计于今年 9 月推出的新版 Siri，将把复杂的 AI 云端查询请求交由配备 Nvidia Blackwell B200 芯片的 Google 数据中心处理。这标志着苹果打破了依赖自研服务器的传统策略，据称其内部服务器在运行模型时效率不佳。 这一战略转变凸显了苹果在激烈的 AI 硬件竞争中所面临的巨大压力，迫使其不得不依赖竞争对手的技术来支持自家的旗舰 AI 产品。这也反映了更广泛的行业现实，即构建具有竞争力的 AI 基础设施极具挑战性，即使对全球最大的科技巨头而言也不例外。 据报道，在这些 Google 数据中心处理的用户数据将使用 Nvidia 硬件加密进行保护，以维持苹果严格的隐私标准。在下周的 WWDC 上，苹果计划重点强调设备端 AI 能力，并重新介绍多次延迟的高度个性化的 Siri 功能。

telegram · zaihuapd · 6月4日 11:37

**背景**: Apple Intelligence 是苹果公司开发的生成式人工智能系统，于 2024 年 6 月发布，它依赖于设备端和服务器端处理的结合。包含 B200 Tensor Core GPU 在内的 Nvidia Blackwell 架构是 Hopper 架构的继任者，可为 AI 工作负载提供巨大的加速能力。自最初发布以来，Apple Intelligence 的市场反响平淡，这使得即将到来的全球开发者大会（WWDC）成为该公司重塑 AI 叙事的关键机会。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Apple_Intelligence">Apple Intelligence</a></li>
<li><a href="https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)">Blackwell (microarchitecture) - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">Siri</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Cloud Computing</span></p>

---

<a id="item-11"></a>

## [ChatGPT 记忆系统升级：采用“dreaming”技术自动学习偏好](https://openai.com/index/chatgpt-memory-dreaming/) ⭐️ 8.0/10

OpenAI 正在向美国 Plus 和 Pro 用户推出全新的 ChatGPT 内存系统，该系统利用名为“dreaming”的后台整理技术自动抓取用户偏好和上下文，无需用户输入“请记住”等明确指令。此外，该系统会随时间推移动态更新记忆，例如在旅行结束后自动停止推荐当地餐厅。 这一更新标志着 AI 个性化交互迈出了重要一步，彻底免除了用户手动管理上下文的负担。它确保了 AI 的记忆能够长期保持相关性和准确性，从根本上提升了用户体验和工作效率。 目前，这项新功能仅面向美国的 ChatGPT Plus 和 Pro 用户推出，预计将在未来几周内逐步扩展至更多国家和免费用户。此次更新有效解决了以往手动记忆系统容易积累过时数据且不够灵活的痛点。

telegram · zaihuapd · 6月4日 16:22

**背景**: 此前，ChatGPT 的记忆功能主要依赖用户的明确指令来保存信息供未来对话使用，这些信息往往会随着时间推移变得陈旧或失去相关性。在这里，“dreaming”技术是指一种自动化的后台处理过程，系统会不断提炼和整理过去的交互数据，从而在不需用户实时干预的情况下，动态构建出最新的用户画像。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">ChatGPT</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI Memory</span> <span class="tag-badge">Product Update</span> <span class="tag-badge">Personalization</span></p>

---

<a id="item-12"></a>

## [面向 AI 代理的 754 项结构化网络安全技能发布](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) ⭐️ 8.0/10

一个名为“mukul975/Anthropic-Cybersecurity-Skills”的全新 GitHub 仓库发布，提供了 754 项专门为 AI 编程代理设计的结构化网络安全技能。这些技能映射到包括 MITRE ATT&CK 和 NIST CSF 2.0 在内的五大主要行业框架，涵盖了 26 个安全领域。 该仓库具有高度重要性，因为它在高级 AI 编程助手与标准化网络安全实践之间架起了桥梁。通过提供全面的、与行业框架对齐的数据集，它使开发者能够构建更安全、更合规的 AI 代理，从而有效地理解和执行防御性安全任务。 该数据集遵循 agentskills.io 标准，兼容 Claude Code、GitHub Copilot、Codex CLI 和 Gemini CLI 等 20 多个主流 AI 平台。它在 Apache 2.0 许可下开源，并映射到 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND 和 NIST AI RMF。

ossinsight · mukul975 · 6月4日 20:00

**背景**: 该仓库依赖于成熟的行业框架来对威胁和防御进行分类：MITRE ATT&CK 编录了传统的 IT 网络威胁，而 MITRE ATLAS 则专门针对与 AI 相关的威胁和攻击进行建模。MITRE D3FEND 是一个将防御性反制措施与对手技术相关联的知识图谱，而 NIST AI 风险管理框架（AI RMF）则通过政策和技术实施提供了管理企业 AI 风险的灵活指南。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.crowdstrike.com/en-us/cybersecurity-101/artificial-intelligence/mitre-atlas/">What is MITRE ATLAS ? | CrowdStrike</a></li>
<li><a href="https://d3fend.mitre.org/">D3FEND Matrix | MITRE D3FEND™</a></li>
<li><a href="https://nhimg.org/community/agentic-ai-and-nhis/iso-42001-vs-nist-ai-rmf-choosing-the-right-framework-for-ai-governance/">ISO 42001 vs. NIST AI RMF: Choosing the Right Framework for AI Governance</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">LLM tools</span> <span class="tag-badge">NIST</span> <span class="tag-badge">MITRE ATT&CK</span></p>

---