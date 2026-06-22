---
layout: default
title: "Horizon Summary: 2026-06-22 (ZH)"
date: 2026-06-22
lang: zh
---

> 从 54 条内容中筛选出 6 条重要资讯。

---

1. [Valve 宣布推出搭载未锁定操作系统的新版 Steam Machine](#item-1) ⭐️ 9.0/10
2. [Deno 正式宣布支持原生桌面应用开发](#item-2) ⭐️ 8.0/10
3. [Codex 日志 Bug 导致向本地 SSD 写入 TB 级数据](#item-3) ⭐️ 8.0/10
4. [Mitchell Hashimoto 再次向 Zig 软件基金会承诺捐赠 40 万美元](#item-4) ⭐️ 8.0/10
5. [Claude Code 的 Extended Thinking 输出并非模型原始推理过程](#item-5) ⭐️ 8.0/10
6. [黄仁勋警告轻视华为极其天真，承诺英伟达将全力向华为学习](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Valve 宣布推出搭载未锁定操作系统的新版 Steam Machine](https://store.steampowered.com/hardware/steammachine) ⭐️ 9.0/10

Valve 正式宣布推出全新的 Steam Machine，这是一款专为客厅优化的游戏 PC，搭载了开放且未锁定的操作系统。为了确保购买的公平性，该设备将通过随机抽选的预约系统进行销售，以积极对抗抢购机器人。 此次发布代表了 Valve 在硬件领域的重大回归，通过允许用户在购买的设备上安装任何软件或替代操作系统，进一步彰显了对消费者权益的重视。此外，独特的随机预约系统消除了机器人和高速网络连接的优势，可能为公平的硬件首发设定新的行业标准。 该设备运行在 SteamOS 上，这是一个基于 Arch Linux 的操作系统，其所有基础组件均是开源且可免费修改的。Valve 明确鼓励买家将此硬件视为标准 PC，这意味着用户可以轻松安装第三方应用程序，甚至完全替换操作系统。

hackernews · theschwa · 6月22日 17:09 · [社区讨论](https://news.ycombinator.com/item?id=48632884)

**背景**: SteamOS 是 Valve 围绕 Steam 客户端构建的专用游戏操作系统，旨在提供类似主机的无缝体验，同时保留传统 PC 的灵活性。它基于 Arch Linux 构建，这意味着基础操作系统组件完全是开源的，并且可以被用户修改或替换。早期的 Steam Machine 是 Valve 将 PC 游戏带入客厅的初步尝试，而此次全新的硬件发布则代表了这一愿景的现代且更加开放的延续。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SteamOS">SteamOS - Wikipedia</a></li>
<li><a href="https://store.steampowered.com/steamos/buildyourown">SteamOS</a></li>

</ul>
</details>

**社区讨论**: 社区的反响非常热烈，用户特别赞扬了 Valve 对未锁定硬件的承诺，并强调了支持 Linux 作为日常游戏平台的重要性。随机预约系统也被广泛誉为一种公平的防机器人方案，替代了充满压力且传统的“先到先得”首发模式。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Valve</span> <span class="tag-badge">Gaming</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Steam Machine</span> <span class="tag-badge">PC</span></p>

---

<a id="item-2"></a>

## [Deno 正式宣布支持原生桌面应用开发](https://docs.deno.com/runtime/desktop/) ⭐️ 8.0/10

Deno 正式宣布支持构建原生桌面应用，为现有的 Electron 等解决方案提供了一个全新的替代框架。该框架目前支持多种 UI 后端，包括 CEF（Chromium Embedded Framework）、Webview 以及原生后端。 这一功能极大地扩展了 Deno 的生态系统，使开发者能够利用其默认安全的权限系统来构建跨平台桌面应用。它通过提供灵活的 UI 后端选择并保持原生性能，为桌面开发领域带来了一种创新的方法。 该框架允许开发者选择通过 CEF 嵌入完整的 Chromium 引擎，或者通过 Webview 使用操作系统的原生浏览器组件，其路线图功能旨在提供共享的 CEF 运行时，从而大幅减小二进制文件体积。一个值得注意的技术细节是，Deno 的权限系统目前在编译时会被固化在二进制文件中，这引发了关于是否应允许用户级别动态权限控制的讨论。

hackernews · GeneralMaximus · 6月22日 05:38 · [社区讨论](https://news.ycombinator.com/item?id=48626137)

**背景**: Deno 是一个现代且安全的 JavaScript 和 TypeScript 运行时，可作为 Node.js 的替代方案，它具有用于文件系统和网络访问的强大权限系统。为了使用 Web 技术构建桌面应用程序，开发者通常使用像 Electron 这样的框架（捆绑了完整的浏览器引擎），或者使用依赖于操作系统原生浏览器功能的 Webview。而 CEF（Chromium Embedded Framework）是一个独立的开源框架，允许开发者将 Chromium 浏览器引擎直接嵌入到独立的应用程序中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chromium_Embedded_Framework">Chromium Embedded Framework - Wikipedia</a></li>
<li><a href="https://www.kirupa.com/apps/webview.htm">Understanding WebViews</a></li>
<li><a href="https://oneuptime.com/blog/post/2026-01-31-deno-getting-started/view">How to Get Started with Deno Runtime</a></li>

</ul>
</details>

**社区讨论**: 社区对此次发布充满热情，称赞了 Deno 的持续创新和生态系统的成熟。具备技术背景的用户积极讨论了 CEF 和 Webview 后端之间的权衡，质疑共享的 CEF 运行时将如何处理版本控制，并建议权限系统应该在运行时动态地呈现给最终用户，而不是在编译时被严格固化。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Deno</span> <span class="tag-badge">Desktop Apps</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">CEF</span> <span class="tag-badge">Webview</span></p>

---

<a id="item-3"></a>

## [Codex 日志 Bug 导致向本地 SSD 写入 TB 级数据](https://github.com/openai/codex/issues/28224) ⭐️ 8.0/10

OpenAI 的 Codex CLI 工具中被发现存在严重的日志记录 Bug，该 Bug 会不受控制地向本地 SQLite 文件写入数 TB 的数据，从而快速消耗 SSD 的使用寿命。社区成员发现了一个利用 SQLite 触发器阻止写入的临时解决方案，并指出该问题的修复程序已经提交至代码库。 不受控制的写入操作会严重降低固态硬盘的性能和寿命，对使用该工具的开发者的硬件构成了严重风险。这一事件也凸显了自主 AI 编码代理在本地系统上执行破坏性后台操作的潜在隐患。 该问题源于 Codex CLI 的日志机制不断向本地 SQLite 数据库写入数据，导致部分用户的文件膨胀至巨大体积。在官方补丁于下一个版本中发布之前，用户可以执行 SQL 命令创建一个触发器来静默丢弃新的日志写入，而运行 VACUUM FULL 命令则可以大幅缩小现有文件的体积。

hackernews · vantareed · 6月22日 07:30 · [社区讨论](https://news.ycombinator.com/item?id=48626930)

**背景**: Codex CLI 是由 OpenAI 开发的一款开源 AI 编码代理，可在本地终端中运行以协助软件开发人员。与许多开发工具一样，它依赖本地 SQLite 数据库来存储日志和运行遥测数据。如果这些日志记录过程没有得到适当的限制或管理，它们会迅速产生大量的写入循环，从而损坏固态硬盘（SSD）中的闪存单元。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.openai.com/codex/cli">CLI – Codex | OpenAI Developers</a></li>
<li><a href="https://grokipedia.com/page/Codex_CLI">Codex CLI</a></li>

</ul>
</details>

**社区讨论**: 社区对 OpenAI 针对这一严重影响硬件的问题响应缓慢表达了强烈的不满，部分评论者讽刺地嘲笑 AI 工具竟然无法自动修复其自身的 GitHub 问题。尽管抱怨不断，用户之间仍保持了高度的合作，他们分享了有效的 SQL 临时解决方案来阻止过度写入，并确认了官方补丁已经在推出中。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Codex</span> <span class="tag-badge">SQLite</span> <span class="tag-badge">Bug</span> <span class="tag-badge">Developer Tools</span></p>

---

<a id="item-4"></a>

## [Mitchell Hashimoto 再次向 Zig 软件基金会承诺捐赠 40 万美元](https://mitchellh.com/writing/zig-donation-2026) ⭐️ 8.0/10

Mitchell Hashimoto 宣布向 Zig 软件基金会（ZSF）额外捐赠 40 万美元，用于 2026 年的发展。这延续了他对 Zig 编程语言及其开发生态系统的大力财务支持。 一位知名行业领袖的巨额捐赠凸显了 Zig 作为现代系统编程中 C 语言替代方案的日益重要性。这确保了该非营利基金会能够维持持续的开发，并坚持其构建高质量开源语言的原则。 此次捐赠旨在资助维护和支持 ZSF 高质量软件所需的持续劳动力。值得注意的是，Zig 项目坚持拒绝接受 AI 或 LLM 生成的代码贡献，以确保谨慎、连贯的语言设计。

hackernews · tosh · 6月22日 13:43 · [社区讨论](https://news.ycombinator.com/item?id=48630020)

**背景**: Zig 是一种通用的系统编程语言，被设计为对 C 语言的现代改良，具有手动内存管理和无隐藏控制流的编译时泛型等特性。Zig 软件基金会是由 Andrew Kelley 于 2020 年创立的非营利性公司，旨在资助和支持该语言的发展。Mitchell Hashimoto 是 HashiCorp 的联合创始人，也是 Zig 的著名倡导者和使用者，他尤其使用该语言开发了终端模拟器“Ghostty”。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Zig_(programming_language)">Zig (programming language) - Wikipedia</a></li>
<li><a href="https://ziglang.org/zsf/">Zig Software Foundation Zig Programming Language</a></li>

</ul>
</details>

**社区讨论**: 评论者赞扬了 Hashimoto 关于互联网应该是一个“允许与众不同”的地方的观点，并将其与主流社交媒体的敌意进行了对比。社区还讨论了与高估值的商业收购相比，评估开源贡献价值的困难，一些人认为像 Ghostty 这样的工具提供了更多的实用价值。此外，用户对 Zig 拒绝 LLM 生成代码的政策表示强烈支持，认为语言设计需要深思熟虑的连贯性，而不仅仅是大量生产代码。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">zig</span> <span class="tag-badge">open-source</span> <span class="tag-badge">funding</span> <span class="tag-badge">programming-languages</span> <span class="tag-badge">systems-programming</span></p>

---

<a id="item-5"></a>

## [Claude Code 的 Extended Thinking 输出并非模型原始推理过程](https://patrickmccanna.net/the-text-in-claude-codes-extended-thinking-output-is-not-authentic/) ⭐️ 8.0/10

Patrick McCanna 的文章揭示，Claude Code 中显示的 'Extended Thinking' 文本并非模型真实的内部推理链条，而是对其进行了有损摘要后的表示。这意味着使用 Claude Code 的开发者无法获取模型在会话中实际驱动其行为的完整推理逻辑。 这一发现暴露了广泛使用的 AI 编程智能体在透明度方面的重大缺陷，削弱了开发者对 AI 辅助开发流程可观测性的信任。随着 AI 智能体越来越多地做出影响代码库和生产系统的自主决策，无法审计完整推理链条引发了对调试、问责和安全性的严重担忧，尤其是在隐藏推理过程中提示词注入攻击可能无法被检测到的风险。 Anthropic 自己的文档证实，摘要行为用于在最小化额外延迟的同时保留思维过程的关键想法，从而实现流式用户体验。然而，这种摘要引入了数据丢失——类似于将无损图像压缩为有损格式——这意味着显示的思维块可能会遗漏影响模型最终输出的关键中间步骤。

hackernews · 0o_MrPatrick_o0 · 6月22日 14:22 · [社区讨论](https://news.ycombinator.com/item?id=48630535)

**背景**: Claude Code 是 Anthropic 的智能体编程工具，可在终端和 IDE 中运行，能够理解代码库、编辑文件和执行命令。其 'Extended Thinking' 功能提供了一个可见的推理草稿区，模型在给出最终答案之前逐步思考问题，表面上使推理过程不再是黑箱。包括 OpenAI、Google 和 Anthropic 在内的主要 AI 公司越来越倾向于限制对模型原始推理的访问，理由是公开通过大量研发投入开发的专有思维机制会带来竞争劣势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking">Building with extended thinking - Anthropic</a></li>
<li><a href="https://www.anthropic.com/product/claude-code">Claude Code | Anthropic 's agentic coding system \ Anthropic</a></li>

</ul>
</details>

**社区讨论**: 社区对透明度的缺失表达了强烈担忧，一位用户因隐藏推理阶段中模型可以调用函数、存在提示词注入风险而拒绝使用或推荐具有隐藏推理功能的模型。多位评论者指出这是整个行业的问题，所有主要 AI 公司都在掩盖原始推理以保护商业机密。一些用户还指出，对于不在本地运行的云端智能体，用户缺乏监管或法律手段来要求获取完整的推理日志。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Claude</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">Transparency</span></p>

---

<a id="item-6"></a>

## [黄仁勋警告轻视华为极其天真，承诺英伟达将全力向华为学习](https://t.me/zaihuapd/42107) ⭐️ 8.0/10

7 月 16 日在北京的媒体会上，英伟达 CEO 黄仁勋表示，任何轻视华为或中国制造能力的人都"极其天真"，并强调英伟达将全力向华为学习。他称赞华为是一家实力强劲的公司，其芯片设计能力"极为优秀"，并在系统工程、网络工程和云服务等领域表现出色。 黄仁勋罕见的坦诚赞扬表明，西方科技界对中国竞争对手——尤其是华为——在先进半导体设计和通信领域缩小差距的认识正在加深。这一表态出现在中美科技紧张局势和先进芯片出口管制不断加强的背景下，使华为昇腾 AI 生态系统成为中国 AI 开发者日益可信的国产替代方案。 黄仁勋反问媒体，世界上哪家手机公司制造的手机比华为更先进，哪家公司的蜂窝通信技术能和华为媲美甚至超越华为。但他同时也承认，许多 AI 开发者在切换到华为平台时遇到困难，因为华为的生态系统尚未准备好取代英伟达，这表明 CUDA 在 AI 软件栈中的深厚护城河仍是华为目前的关键短板。

telegram · zaihuapd · 6月22日 09:05

**背景**: 英伟达的 CUDA（统一计算设备架构）于 2007 年推出，是一个并行计算平台，已成为 GPU 加速 AI 工作负载的主导软件生态系统，支持 PyTorch 和 TensorFlow 等主流框架。华为的昇腾 AI 芯片生态系统围绕达芬奇 NPU 架构和昇腾 910C 等芯片构建，随着中国推进半导体自主可控而快速扩张，但在性能和开发工具成熟度方面仍落后于英伟达。随着美国出口限制阻碍英伟达在中国销售最先进的 GPU，双方竞争正在加剧，为国产替代方案创造了市场机会。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/huaweis-ascend-ai-chip-ecosystem-scales">Huawei's Ascend AI chip ecosystem scales up as China pushes for semiconductor independence — however, firm lags behind on efficiency and performance | Tom's Hardware</a></li>
<li><a href="https://www.huawei.com/en/news/2025/9/hc-shengten-opensource">Ascend: Open for All to Build a Vibrant Ecosystem - Huawei</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Tech Industry</span></p>

---