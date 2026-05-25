---
layout: default
title: "Horizon Summary: 2026-05-24 (ZH)"
date: 2026-05-24
lang: zh
---

> From 23 items, 5 important content pieces were selected

---

1. [内存成本现占 AI 芯片组件费用的近三分之二](#item-1) ⭐️ 8.0/10
2. [微软开源从纸质打印件恢复的最早 DOS 源代码](#item-2) ⭐️ 8.0/10
3. [16 字节视听演示 'Wake up! 16b' 发布](#item-3) ⭐️ 8.0/10
4. [Armin Ronacher 倡导人工撰写 Issue 报告而非 AI 生成](#item-4) ⭐️ 8.0/10
5. [APKPure 上的 Telegram 12.6.5 被植入间谍后门](#item-5) ⭐️ 8.0/10

---

## [内存成本现占 AI 芯片组件费用的近三分之二](https://epoch.ai/data-insights/ai-chip-component-cost-shares) {: #item-1 } ⭐️ 8.0/10

近期分析显示，内存费用现占 AI 芯片总组件成本的近三分之二。这一转变凸显了 AI 硬件制造经济结构的重大变化。 这种成本主导地位影响了整个行业的路线图和供应链，高昂的价格可能会减缓 AI 的部署。这也强调了内存制造商的关键作用，并暗示了供需平衡后未来成本降低的潜力。 成本的增加是由对高带宽内存（HBM）的需求驱动的，HBM 是一种 3D 堆叠内存架构，对于现代加速器向数千个 GPU 内核提供数据至关重要。专家认为，一旦 DRAM 供应赶上当前的需求激增，硬件成本可能会大幅下降。

hackernews · intelkishan · May 24, 16:31 · [社区讨论](https://news.ycombinator.com/item?id=48258684)

**背景**: 与通用芯片不同，AI 加速器需要专门的内存架构来高效处理海量数据吞吐量。高带宽内存（HBM）通过垂直堆叠内存芯片来解决带宽瓶颈。随着 AI 模型复杂度的增加，对更快、更丰富内存的需求激增，从而提高了其在总物料清单中的份额。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://medium.com/@loomy.sjyoo/bandwidth-is-not-coordination-why-hbm-still-isnt-a-brain-87371964be99">Bandwidth Is Not Coordination: Why HBM Still Isn’t a Brain | Medium</a></li>
<li><a href="https://www.ibm.com/think/topics/ai-accelerator">What is an AI accelerator? - IBM</a></li>

</ul>
</details>

**社区讨论**: 评论者们讨论了新内存制造商面临的巨大进入壁垒，这归因于广泛的 IP 专利战和许可成本。人们推测随着供应稳定，成本可能会降低，也就超大规模企业是否应该通过建立自己的晶圆厂进行垂直整合展开了辩论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Economics</span> <span class="tag-badge">Memory</span> <span class="tag-badge">Supply Chain</span></p>

---

## [微软开源从纸质打印件恢复的最早 DOS 源代码](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/) {: #item-2 } ⭐️ 8.0/10

微软发布了已知最早版本的 DOS（即 86-DOS）源代码，这些代码是由历史学家从纸质打印件中费力恢复的。该代码最初由 Seattle Computer Products 的 Tim Paterson 开发，现已可供公众查看。 此次发布保存了计算机历史上至关重要的一环，使开发者和历史学家能够研究 IBM PC 时代的基础。它突显了早期系统的技术简洁性以及微软在软件行业占据主导地位的起源。 恢复过程非常困难，因为现代 OCR 软件难以识别数十年前的打印件，需要“DOS Disassembly Group”进行人工转录。此次发布还包括 BASIC 解释器，这是微软在操作系统之前的主要产品重点。

hackernews · DamnInteresting · May 24, 01:21 · [社区讨论](https://news.ycombinator.com/item?id=48253386)

**背景**: 86-DOS（内部称为 QDOS，即 Quick and Dirty Operating System）是由 Seattle Computer Products 为基于 Intel 8086 的计算机开发的。它的设计旨在与 CP/M 相似，以便于移植现有软件，后来被微软授权并购买，演变为 MS-DOS。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/86-DOS">86-DOS</a></li>

</ul>
</details>

**社区讨论**: 评论者感谢微软保存了历史，并指出随附的 BASIC 解释器具有重要意义。大家还对那个时代的技术效率表示惊叹，当时几千行汇编代码就能成就一家公司。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">History</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">DOS</span> <span class="tag-badge">Systems Programming</span></p>

---

## [16 字节视听演示 'Wake up! 16b' 发布](https://hellmood.111mb.de/wake_up_16b_writeup.html) {: #item-3 } ⭐️ 8.0/10

一篇技术详解文章详细介绍了 'Wake up! 16b' 的创作过程，这是一个压缩到仅 16 字节机器码的视听演示。该发布突破了 size-coding 的界限，成功在比以往 32 字节限制更小的空间内实现了声音和图形。 这一成就被视为极端优化的杰作，激励 demoscene 社区探索底层编程的极限。它展示了富有创造力的汇编编码如何能从几乎不存在的资源中产生复杂的多媒体体验。 该演示依赖精确的汇编指令直接操作硬件寄存器，无需外部资源即可生成音频和视觉效果。它针对支持此类极简代码执行的特定架构，展示了对底层硬件的深刻理解。

hackernews · MaximilianEmel · May 24, 00:30 · [社区讨论](https://news.ycombinator.com/item?id=48253060)

**背景**: Demoscene 是一个专注于制作演示的计算机艺术亚文化，这些演示是自包含的程序，用于生成视听展示以炫耀编程、视觉艺术和音乐技能。Size-coding 是该场景中的一个特定学科，开发者竞争在极其严格的文件大小限制内创建最令人印象深刻的效果。这些程序的操作码字节总数被用来衡量其大小，通常以可执行二进制文件的形式呈现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Demoscene">Demoscene</a></li>
<li><a href="http://www.sizecoding.org/wiki/Main_Page">SizeCoding</a></li>

</ul>
</details>

**社区讨论**: 社区成员对这一技术壮举表示高度赞赏，指出它超越了以往没有声音的 32 字节演示。一些用户最初将标题与 160 亿参数的语言模型混淆，而其他人则分享了相关的数学可视化和 size-coding 项目链接。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">demoscene</span> <span class="tag-badge">assembly</span> <span class="tag-badge">optimization</span> <span class="tag-badge">size-coding</span> <span class="tag-badge">graphics</span></p>

---

## [Armin Ronacher 倡导人工撰写 Issue 报告而非 AI 生成](https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything) {: #item-4 } ⭐️ 8.0/10

Armin Ronacher 批评了用户提交 AI 生成 Issue 报告的趋势，认为这些报告常以自信的不准确性和伪造的最小可复现示例掩盖了真正的问题。他明确要求将 Issue 报告浓缩为简单、基于事实的人工观察，包括运行的命令、预期的结果、实际发生的情况以及确切的错误日志。 这一观点凸显了由于 indiscriminate 使用 LLM 导致的开源沟通渠道质量显著下降，这浪费了维护者调试 AI 幻觉的时间。这为开发者社区在 Bug 报告工作流中保持效率和准确性提供了重要的指导原则。 Ronacher 指出，AI 生成的报告通常包含错误的根本原因分析、基于错误类比的建议实现策略以及一长串不相关的错误类别。他认为，剥离 AI 的解读，仅展示原始的人工观察，是帮助维护者诊断和修复 Bug 的最有效方式。

rss · Simon Willison · May 24, 18:46

**背景**: 在软件开发中，特别是在开源项目内，“最小可复现示例”（MRE）是一小段独立的代码，用于演示 Bug，使维护者能够高效地验证和修复问题。最近，用户开始使用大型语言模型（LLM）来起草这些报告，但 AI 经常添加不必要的复杂性或产生与用户实际体验不符的幻觉细节。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Minimal_reproducible_example">Minimal reproducible example</a></li>
<li><a href="https://stackoverflow.com/help/minimal-reproducible-example">How to create a Minimal, Reproducible Example - Help Center</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">AI Impact</span> <span class="tag-badge">Software Maintenance</span> <span class="tag-badge">Debugging</span> <span class="tag-badge">Developer Experience</span></p>

---

## [APKPure 上的 Telegram 12.6.5 被植入间谍后门](https://x.com/EricParker/status/2058411298195661221) {: #item-5 } ⭐️ 8.0/10

APKPure 上分发的 Telegram 12.6.5 恶意版本包含名为 DataCollector 的间谍后门，可窃取敏感用户数据。该恶意应用在加密后将聊天记录、通讯录和位置信息上传至特定的 C2 服务器。 这起供应链攻击通过广泛使用的第三方商店针对热门消息应用的用户，使其隐私和安全面临严重风险。这突显了从非官方来源下载应用的危险性，因为那里的验证流程比官方渠道更薄弱。 该恶意软件被注入为一个名为 classes3.dex 的 3000 多行 DEX 文件，并使用 AES-GCM 加密将数据发送至 IP 38.190.225.166。它危及广泛的数据，包括完整的聊天记录、相册、文档、GPS 定位和 SIM 卡信息。

telegram · zaihuapd · May 24, 11:38

**背景**: 攻击者可以通过反编译原始 APK、注入恶意代码并使用新密钥重新签名来重新打包 Android 应用。这一过程允许通过第三方商店分发木马化应用，而这些商店可能不会验证原始签名。一旦安装，恶意软件会与命令与控制（C2）服务器通信以接收指令并上传被盗数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mas.owasp.org/MASTG/techniques/android/MASTG-TECH-0039.html">MASTG-TECH-0039: Repackaging & Re - Signing - OWASP Mobile...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Botnet">Botnet - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Android</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Supply Chain</span></p>

---