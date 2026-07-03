---
layout: default
title: "Horizon Summary: 2026-07-03 (ZH)"
date: 2026-07-03
lang: zh
---

> 从 62 条内容中筛选出 14 条重要资讯。

---

1. [用 Claude Code 仅凭一句话三小时内全自动逆向加密验证码系统](#item-1) ⭐️ 9.0/10
2. [Anthropic 指控阿里巴巴发动大规模蒸馏攻击窃取 Claude 能力](#item-2) ⭐️ 9.0/10
3. [华为发布搭载昇腾 950PR 的 Atlas 350 加速卡，算力达 H20 近三倍](#item-3) ⭐️ 9.0/10
4. [ProseMirror 作者推出全新浏览器富文本编辑器 Wordgard](#item-4) ⭐️ 8.0/10
5. [WebKit 推出 Safari MCP 服务器，支持 AI 驱动的浏览器自动化](#item-5) ⭐️ 8.0/10
6. [crustc：整个 Rust 编译器被翻译为 C 语言](#item-6) ⭐️ 8.0/10
7. [Unit 42 率先在浏览器端 RDP 客户端中实现 WebAuthn 支持](#item-7) ⭐️ 8.0/10
8. [Armored Likho APT 部署 AI 生成的加载器和 BusySnake 窃密器](#item-8) ⭐️ 8.0/10
9. [Google Gemini Omni Flash 登顶 Video Arena 排行榜](#item-9) ⭐️ 8.0/10
10. [OPPO 整合一加与真我系统，全球统一启用 ColorOS](#item-10) ⭐️ 8.0/10
11. [NASA 发射私人 LINK 航天器救援"雨燕"望远镜](#item-11) ⭐️ 8.0/10
12. [腾讯阿图因 AI 在 CyberGym 测试中超越 Anthropic Mythos](#item-12) ⭐️ 8.0/10
13. [黑石集团意外撤资，全球最大数据中心项目濒临崩溃](#item-13) ⭐️ 8.0/10
14. [Erin Catto 发布 Box3D：用 C 语言编写的新型 3D 物理引擎](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [用 Claude Code 仅凭一句话三小时内全自动逆向加密验证码系统](https://xz.aliyun.com/news/92420) ⭐️ 9.0/10

作者仅凭一句话提示词，利用 Claude Code 对目标网站自主执行了多阶段的渗透测试。在三个多小时的时间里，该 AI 成功逆向了 ECDH 密钥交换，还原了 AES-GCM 加密，破解了 NCC 图像识别算法，并开发出一个能够批量注册账号的完整 API 绕过脚本。 这标志着 AI 作为自主网络安全代理的范式转变，能够处理复杂的多步骤逆向工程任务，且无需持续的人工干预。它凸显了 AI 驱动的渗透测试的变革性影响，大幅降低了执行高级攻击的门槛，并能大规模暴露敏感漏洞。 该自动化过程专门针对并破解了用于密钥交换的 ECDH、用于数据加密的 AES-GCM，以及用于验证码的 NCC 图像识别算法等加密实现。整个操作作为一个自动化循环执行，最终产出了一个完全通过 API 请求绕过传统 Web 安全措施的功能性漏洞利用脚本。

rss · 先知安全技术社区 · 7月3日 03:41

**背景**: ECDH（椭圆曲线 Diffie-Hellman）是一种密钥协商协议，允许双方在不安全的信道上建立共享密钥，广泛应用于现代安全通信中。AES-GCM（高级加密标准 - 伽罗瓦/计数器模式）是一种 authenticated encryption algorithm（认证加密算法），旨在同时提供数据的机密性和完整性。在本次事件中，Claude Code 充当了一个自动化代理，通过迭代信息收集、代码分析和漏洞开发，成功破坏了这些加密机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.webkt.com/article/8610">深入浅出 ECDH 密钥交换：原理、实现与 Python、C++ 代码示例 - WEBKT</a></li>
<li><a href="https://blog.csdn.net/openHiTLS/article/details/151231316">一文读懂 Ecdh：从 "密钥交换难题" 到 源码实践落地-csdn博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Reverse Engineering</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Automation</span></p>

---

<a id="item-2"></a>

## [Anthropic 指控阿里巴巴发动大规模蒸馏攻击窃取 Claude 能力](https://t.me/zaihuapd/42327) ⭐️ 9.0/10

Anthropic 致信美国参议院银行委员会，指控阿里巴巴通过约 2.5 万个欺诈账户，在 2026 年 4 月 22 日至 6 月 5 日期间与 Claude 进行了超过 2880 万次交互，非法提取其 AI 模型能力。 这一事态升级将企业间的 AI 纠纷提升到了国际政治层面，直接引入了美国立法者的介入。这凸显了在竞争激烈的全球 AI 格局中，围绕专有模型训练的知识产权风险和地缘政治紧张局势日益加剧。 涉案方包括阿里巴巴及其 AI 实验室 Qwen，他们涉嫌利用自动化欺诈账户系统性查询 Claude 的输出。这一过程被称为模型提取或蒸馏，允许较弱的模型在未经授权的情况下复制更强大的专有模型的性能。

telegram · zaihuapd · 7月3日 06:21

**背景**: 在 AI 行业中，“蒸馏”或模型提取是指让较小的模型学习更强大、更成熟的大型模型的输出，从而复制其能力，该技术的理论基础由先驱 Geoffrey Hinton 提出。虽然它作为一种标准的训练优化方法被广泛使用，但在未经许可的情况下用于克隆专有模型时，存在极大争议。行业观察家指出，模型蒸馏在全球范围内都是常见做法，此前 Anthropic 对其他中国 AI 公司的类似指控曾引发过关于该技术伦理边界的激烈讨论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://m.21jingji.com/article/20260626/herald/4191618349373fe9453230e50e2cacf6.html">美国AI巨头，再次炒作中国大模型“蒸馏”话题 - 21财经</a></li>
<li><a href="https://www.ofweek.com/ai/2026-02/ART-201700-8420-30681798.html">“蒸馏”博弈：深度学习这个领域，大概永远不会有绝对的清白者 - OFweek 人工智能网</a></li>
<li><a href="https://www.ctfiot.com/299416.html">【科普】关于模型提取攻击（蒸馏攻击） | CTF导航</a></li>

</ul>
</details>

**社区讨论**: 公众对这些指控的反应褒贬不一，许多业内内人士指出，即使在美国科技公司之间，模型蒸馏也是一种普遍做法。评论者经常认为，AI 社区缺乏明确的边界，没有“绝对清白”的参与者，这削弱了 Anthropic 在知识产权上采取强硬立场的道德制高点。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">阿里巴巴</span> <span class="tag-badge">知识产权</span> <span class="tag-badge">蒸馏攻击</span></p>

---

<a id="item-3"></a>

## [华为发布搭载昇腾 950PR 的 Atlas 350 加速卡，算力达 H20 近三倍](https://t.me/zaihuapd/42329) ⭐️ 9.0/10

在华为中国合作伙伴大会 2026 上，华为正式发布并上市搭载全新昇腾 950PR 处理器的 Atlas 350 加速卡。该卡单卡算力达到英伟达 H20 的 2.87 倍，是国内首个支持 FP4 低精度推理的加速卡，配备 112GB HBM 内存。 此次发布对英伟达在 AI 加速卡市场的主导地位构成了重大竞争挑战，尤其是在出口限制制约高端 GPU 供应的中国市场。FP4 支持、大容量 HBM 以及单卡加载 70B 参数模型的能力，有望显著重塑国内 AI 基础设施格局，降低对外国芯片厂商的依赖。 Atlas 350 在向量算力、互联带宽及自研 HBM 等方面较前代大幅提升，支持单卡加载 70B 参数模型，显著降低了推理延迟与投资成本。FP4/FP8 混合精度已被证实可大幅降低运行超大规模 MoE 模型的硬件门槛。

telegram · zaihuapd · 7月3日 08:35

**背景**: FP4（4 位浮点）是一种低精度数值格式，可在保持模型精度可接受的前提下，减少 AI 推理过程中的内存使用和计算成本，对大模型的高效部署愈发重要。英伟达 H20 是为符合美国出口管制限制而专门面向中国市场推出的 GPU 产品。华为昇腾系列已成为中国最具代表性的国产 AI 芯片产品线，Atlas 产品线则涵盖华为面向训练和推理工作负载的 AI 计算硬件解决方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://core.dpangzi.com/article/read/69beb2cc452176f8ed934563.html">华 为 Atlas 350 加 速 卡 上市，搭载全新昇腾 950PR 处理器 - 叫我阿胖</a></li>
<li><a href="https://money.udn.com/money/story/5603/9395364">華為 Atlas 350 加 速 卡 亮相：單 卡 算力超H20... | 經濟日報</a></li>
<li><a href="https://www.aimodeling.com/news/98312e5c-0687-41f5-a5b3-596a45563e67">DeepSeek V4训练内幕：Muon优化器与 FP 4 混合 精 度 重塑大模型效率</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">华为</span> <span class="tag-badge">昇腾950PR</span> <span class="tag-badge">AI加速卡</span> <span class="tag-badge">英伟达竞争</span> <span class="tag-badge">国产芯片</span></p>

---

<a id="item-4"></a>

## [ProseMirror 作者推出全新浏览器富文本编辑器 Wordgard](https://wordgard.net/) ⭐️ 8.0/10

ProseMirror 的作者 Marijn Haverbeke 发布了 Wordgard，一个采用与 ProseMirror 不同架构的开源 JavaScript 富文本编辑器框架。它提供了一套构建语义化内容编辑器的工具，让开发者能够精确控制所支持的内容类型。 ProseMirror 是被无数项目使用的基础库，包括 Tiptap、GitLab 和《纽约时报》等，因此同一作者推出全新编辑器可能预示着富文本编辑生态的重大变化。对于那些已经超越基础文本框、需要对文档结构进行严格控制的团队来说，现在有了一个新的架构选择，但从基于 ProseMirror 的方案迁移的路径尚不明确。 Wordgard 不是自由格式的 HTML 编辑器，而是强制执行精确的内容模型，让你可以完全控制支持哪些内容类型。目前没有从 ProseMirror 升级的路径——虽然许多概念是共享的，但切换需要大量的重写工作，部分概念也存在显著差异。

hackernews · indy · 7月3日 08:50 · [社区讨论](https://news.ycombinator.com/item?id=48772573)

**背景**: ProseMirror 是一个被广泛使用的浏览器端富文本编辑器工具包，它将文档视为结构化树而非扁平字符串，从而避免了浏览器 contentEditable 属性的诸多缺陷。其作者 Marijn Haverbeke 还创建了 CodeMirror（被 Obsidian 使用），是 Web 文本编辑领域最有影响力的人物之一。许多现代编辑器框架（如 Tiptap）都是基于 ProseMirror 构建的，因此其作者的任何新项目都值得整个生态关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wordgard.net/">Wordgard</a></li>
<li><a href="https://news.lavx.hu/article/wordgard-brings-structured-editing-to-javascript-apps">Wordgard brings structured editing to JavaScript apps | LavX News</a></li>

</ul>
</details>

**社区讨论**: 社区成员对该项目的美术方向和视觉设计给予了高度评价，认为非常雅致；曾构建过类似系统的开发者则对架构思路表示强烈认同。一个被广泛关注的担忧是缺乏从 ProseMirror 的清晰迁移路径，用户指出切换需要大量工作，也有人好奇这对 Tiptap 等框架意味着什么。一位用户报告了 iOS 上的 bug——键盘纠错时文字会消失。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">rich-text-editor</span> <span class="tag-badge">prosemirror</span> <span class="tag-badge">web-development</span> <span class="tag-badge">content-editing</span> <span class="tag-badge">javascript</span></p>

---

<a id="item-5"></a>

## [WebKit 推出 Safari MCP 服务器，支持 AI 驱动的浏览器自动化](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/) ⭐️ 8.0/10

WebKit 正式发布了全新的 Safari MCP 服务器，使 AI 代理能够直接与 Safari 浏览器交互，用于 Web 开发、测试和个性化自动化任务。该版本为苹果浏览器生态系统带来了模型上下文协议（MCP）支持，允许 AI 驱动的工具检查页面、执行命令并以编程方式执行浏览器操作。 这一发布意义重大，因为它允许 AI 代理在用户已登录的浏览器中操作，使得人与代理之间的自动化交接比使用隔离的浏览器实例更加无缝。它还扩展了开发者的跨浏览器测试能力，使 Safari 与 Chrome 和 Firefox 一起加入了支持 MCP 的浏览器阵营。 Safari MCP 服务器与现有的浏览器 MCP 解决方案（如 Chrome DevTools MCP 和 Firefox DevTools MCP）形成互补，并与苹果此前提供的实现了 W3C WebDriver 标准的 safaridriver 工具共存。社区成员指出，虽然 MCP 方式提供了更丰富的 AI 集成，但在某些自动化工作流中，Playwright-CLI 等替代方案的性能可能仍然更快。

hackernews · coloneltcb · 7月3日 01:37 · [社区讨论](https://news.ycombinator.com/item?id=48769639)

**背景**: 模型上下文协议（MCP）是一种新兴标准，使 AI 模型和代理能够以结构化方式与外部工具和服务交互，从而执行超越文本生成的现实世界操作。浏览器自动化传统上依赖于 W3C WebDriver 标准（如 safaridriver 所使用的）或 Playwright 和 Puppeteer 等框架，这些框架通过编程方式控制浏览器进行测试和抓取。MCP 服务器代表了一种更新的方法，专为 AI 代理集成而设计，使大语言模型能够更轻松地理解和操作浏览器状态，作为其推理和任务执行循环的一部分。

**社区讨论**: 社区情绪总体积极，用户特别兴奋的是能够在自己已登录的主浏览器会话中运行自动化，而不是使用单独的实例。多位评论者将 Safari MCP 服务器与现有方案进行了比较，指出 Chrome DevTools MCP 和 Firefox DevTools MCP 已经可用，而另一些人则建议 Playwright-CLI 在纯自动化工作流中可能更快。一位用户还指出，苹果的 safaridriver 已支持 W3C WebDriver 自动化多年，引发了关于 MCP 方式在更紧密的 AI 集成之外还能带来多少附加价值的讨论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">MCP</span> <span class="tag-badge">Safari</span> <span class="tag-badge">Web Development</span> <span class="tag-badge">Browser Automation</span> <span class="tag-badge">AI Agents</span></p>

---

<a id="item-6"></a>

## [crustc：整个 Rust 编译器被翻译为 C 语言](https://github.com/FractalFir/crustc) ⭐️ 8.0/10

经过三年的努力，一位开发者将整个 Rust 编译器（rustc）翻译成了 C 语言，创建了名为 crustc 的项目。这是已知的第 14 次尝试将 Rust 编译为 C，旨在支持缺乏 LLVM 或 GCC 后端支持的旧型号或冷门硬件。 该项目解决了 Rust 长期存在的引导问题，即从源码构建编译器需要一个已有的 Rust 编译器。通过提供 C 语言翻译版本，crustc 可以让 Rust 支持目前不兼容的平台，大幅扩展该语言的可及性，并解决编译工具链中已知的信任问题。 开发者指出，转译为 C 并让 GCC 处理优化比直接针对 LLVM IR 更具可行性。该项目还可用于多样化双重编译（DDC），通过逐位比对输出结果来验证官方 rustc 二进制文件的完整性。

hackernews · Philpax · 7月2日 22:57 · [社区讨论](https://news.ycombinator.com/item?id=48768464)

**背景**: 编译器引导是生成自编译编译器的技术，即编译器用其所编译的语言编写。Rust 的编译器 rustc 是自托管的，用 Rust 语言编写，这意味着每个新版本都是使用上一个稳定版本构建的。这造成了先有鸡还是先有蛋的问题：要从源码构建 rustc，你需要一个可用的 Rust 编译器，这对于需要可重现构建或目标平台缺乏 LLVM/GCC 支持的项目来说，产生了依赖和信任方面的顾虑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Compiler_bootstrapping">Compiler bootstrapping</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rust_compiler">Rust compiler</a></li>

</ul>
</details>

**社区讨论**: 社区称赞该项目是一件令人印象深刻的原创作品，而非 LLM 生成的演示。评论者强调了其通过多样化双重编译验证编译器完整性的潜力，并讨论了转译为 C 与 LLVM IR 的相对优劣。一位用户还指出 LLVM 先前废弃的 C 后端现在可能重新可用了，这可能与该项目相关。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Rust</span> <span class="tag-badge">Compilers</span> <span class="tag-badge">C</span> <span class="tag-badge">Bootstrapping</span> <span class="tag-badge">Systems Programming</span></p>

---

<a id="item-7"></a>

## [Unit 42 率先在浏览器端 RDP 客户端中实现 WebAuthn 支持](https://unit42.paloaltonetworks.com/webauthn-added-to-browser-based-rdp/) ⭐️ 8.0/10

Palo Alto Networks 旗下的 Unit 42 详细介绍了逆向工程过程，成功构建了首个非 Windows 平台的浏览器端 RDP 客户端，支持 WebAuthn 无密码认证重定向。这一突破使用户能够通过网页浏览器直接使用通行密钥或安全密钥对远程 Windows 桌面会话进行身份验证。 这一成果弥补了远程访问安全领域的重要空白，因为此前浏览器端 RDP 客户端无法支持现代无密码认证，不得不依赖安全性较弱的凭据方式。它证明了 Windows 特有的复杂认证重定向协议可以在跨平台环境中成功复现，为跨操作系统的更安全远程访问解决方案打开了大门。 该实现需要对微软专有的 RDP 协议进行逆向工程，以理解 WebAuthn 认证请求如何从远程服务器重定向回客户端。技术挑战在于正确复现重定向通道，确保在 RDP 会话期间认证器响应能够安全地传输回服务器。

rss · Unit 42 · 7月2日 22:00

**背景**: RDP（远程桌面协议）是微软专有的远程桌面访问协议，在企业环境中被广泛使用。WebAuthn 是一种网页认证标准，利用公钥密码学实现无密码登录，通常由安全密钥等硬件认证器或 Windows Hello 等平台认证器提供支持。在 RDP 场景中，认证重定向是指当远程服务器需要验证用户身份时，将认证请求重定向回客户端设备，用户可以在本地与认证器进行交互。此前，这种 WebAuthn 重定向功能仅限于原生 Windows RDP 客户端使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reddit.com/r/sysadmin/comments/1m6aoh6/access_rdp_with_a_browser/">Access RDP with a browser : r/sysadmin - Reddit</a></li>
<li><a href="https://tsplus.me/html5-remote-desktop/">HTML5 Remote Desktop - Browser-Based RDP Access Guide</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">WebAuthn</span> <span class="tag-badge">RDP</span> <span class="tag-badge">Reverse Engineering</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Authentication</span></p>

---

<a id="item-8"></a>

## [Armored Likho APT 部署 AI 生成的加载器和 BusySnake 窃密器](https://securelist.com/tr/armored-likho-apt-with-busysnake-stealer/120292/) ⭐️ 8.0/10

卡巴斯基揭示了一个名为 Armored Likho 的活跃高级持续性威胁（APT）活动，该活动利用鱼叉式网络钓鱼、AI 生成的加载器以及一种名为 BusySnake Stealer 的新型基于 Python 的数据窃取工具。该活动一直积极针对位于俄罗斯、哈萨克斯坦和巴西的组织。 该活动中集成 AI 生成的加载器凸显了一个令人担忧的趋势，即威胁行为者利用人工智能来简化恶意软件的开发和部署。这种演变降低了发起复杂攻击的门槛，迫使网络安全行业调整其防御策略，以应对日益自动化和适应性强的威胁。 BusySnake Stealer 是一种新发现的用 Python 编写的恶意软件载荷，专门用于从受破坏的系统中窃取敏感数据。攻击者通过有针对性的鱼叉式网络钓鱼发起入侵，利用 AI 辅助的加载器隐蔽地传递载荷。

rss · Kaspersky  - Information about Viruses， Hackers and Spam · 7月3日 10:00

**背景**: 高级持续性威胁（APT）是指一种长期且有针对性的网络攻击，入侵者在网络中建立未被检测到的存在，以便随着时间的推移窃取敏感数据。鱼叉式网络钓鱼是一种有针对性的攻击方式，通过为特定个人或组织量身定制的欺骗性电子邮件来窃取敏感信息或安装恶意软件。网络安全中的“加载器”是一种充当初始载荷的恶意软件，通常用于在被攻破的系统上建立立足点并下载额外的恶意软件。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">APT</span> <span class="tag-badge">malware-analysis</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">python</span></p>

---

<a id="item-9"></a>

## [Google Gemini Omni Flash 登顶 Video Arena 排行榜](https://x.com/Designarena/status/2072759122366509130) ⭐️ 8.0/10

Google DeepMind 公测视频生成模型 Gemini Omni Flash 以 1404 分登顶 Video Arena 盲测榜，领先第二名字节跳动 Seedance 2.0 Mini 达 101 分。 这标志着 AI 视频生成领域的重大竞争格局变化，展示了 Google 在多模态能力上的快速进步，并重新夺回了此前由字节跳动 Seedance 系列占据的榜首位置。这也表明主要科技公司在生成式视频领域的竞争正在加剧。 Video Arena 的排名基于用户盲测投票生成，是一种众包评测基准。Google 的视频模型排名较 Veo 系列时期提升了 7 位，表明用户感知质量有显著飞跃。

telegram · zaihuapd · 7月3日 05:51

**背景**: Video Arena 是一个通过用户盲测投票对 AI 视频生成模型进行排名的评测平台，其概念类似于语言模型领域 LMSYS 的 Chatbot Arena。字节跳动的 Seedance 系列，尤其是 Seedance 2.0 Mini，此前以 1303 分长期占据榜单前列。Google 的 Veo 系列是该公司早期的视频生成工具，现已被 Gemini Omni Flash 模型超越。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">Video Generation</span> <span class="tag-badge">Gemini</span> <span class="tag-badge">Leaderboard</span> <span class="tag-badge">AI Models</span></p>

---

<a id="item-10"></a>

## [OPPO 整合一加与真我系统，全球统一启用 ColorOS](https://www.donews.com/news/detail/8/6620374.html) ⭐️ 8.0/10

2026 年 7 月，OPPO 宣布全面整合其智能手机操作系统，正式停止开发一加 OxygenOS 与真我 realme UI。今后，这些品牌的所有全球新机将统一搭载 ColorOS 系统，以优化研发资源。 这一重大战略调整直接影响了 OPPO、一加和真我设备上的数百万用户，从根本上改变了这些主要品牌的安卓生态系统格局。它标志着旨在加强品牌协同效应和简化全球市场战略的大规模资源整合。 整合重点针对中国和印度等核心市场，一加将聚焦这两地，并将售后网络并入 OPPO 体系。真我则收缩中国业务、专注海外市场，其服务账号已于 7 月 1 日迁移至 OPPO 服务体系，且真我商城已于 4 月关停。

telegram · zaihuapd · 7月3日 10:45

**背景**: ColorOS 是 OPPO 基于 Android 开源项目（AOSP）开发的定制用户界面。历史上，一加在海外市场使用 OxygenOS，在中国市场使用氢 OS；而真我在 2020 年推出独立的 realme UI 之前，也一直使用 ColorOS。此次整合结束了这些品牌多年来独立的软件身份，将三大品牌统一纳入单一的软件生态系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ColorOS">ColorOS</a></li>
<li><a href="https://en.wikipedia.org/wiki/OxygenOS">OxygenOS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Realme_UI">Realme UI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OPPO</span> <span class="tag-badge">OnePlus</span> <span class="tag-badge">ColorOS</span> <span class="tag-badge">智能手机</span> <span class="tag-badge">行业整合</span></p>

---

<a id="item-11"></a>

## [NASA 发射私人 LINK 航天器救援"雨燕"望远镜](https://apnews.com/article/swift-nasa-satellite-rescue-katalyst-a7ddd740ca099587c58865f583c7245a) ⭐️ 8.0/10

NASA 于 7 月 3 日发射了私人建造的 LINK 航天器，准备在太空中与已运行超过 20 年的尼尔·格雷尔斯"雨燕"天文台会合，用机械臂将其固定，并抬升约 240 公里至更安全的轨道。这是私人航天器首次尝试抓取并维护美国政府卫星。 此次任务标志着商业在轨服务的一个重大里程碑，证明私人航天器能够延长老旧政府卫星的运行寿命。如果成功，将为卫星延寿开辟新模式，减少太空碎片，并验证商业在轨服务市场在政府和私人太空资产领域的可行性。 日益增强的太阳活动使地球高层大气膨胀，增加了"雨燕"所受的大气阻力，导致其轨道快速下降；若不干预，"雨燕"最快可能在 10 月坠入大气层烧毁。LINK 将利用机械臂物理抓取望远镜，并点燃推进器缓慢抬升轨道，若任务成功，"雨燕"最快可在 9 月恢复观测。

telegram · zaihuapd · 7月3日 15:43

**背景**: 尼尔·格雷尔斯"雨燕"天文台于 2004 年 11 月 20 日发射，是 NASA 中型探索者任务，主要用于在 X 射线、紫外/可见光和伽马射线波段研究伽马射线暴（GRB）。"雨燕"原计划运行两年，但已大幅超出设计寿命，现已成为通用型多波长天文台，平均每天观测约 70 个目标。该任务由宾夕法尼亚州立大学与 NASA 戈达德太空飞行中心及来自英国和意大利的国际合作伙伴共同运营。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Swift_space_telescope">Swift space telescope</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">NASA</span> <span class="tag-badge">Space Exploration</span> <span class="tag-badge">In-Orbit Servicing</span> <span class="tag-badge">Satellite Technology</span> <span class="tag-badge">Commercial Space</span></p>

---

<a id="item-12"></a>

## [腾讯阿图因 AI 在 CyberGym 测试中超越 Anthropic Mythos](https://mp.weixin.qq.com/s/BzU7g-2iG7d6h4ViwMhxyg) ⭐️ 8.0/10

腾讯玄武实验室的阿图因 AI 在加州大学伯克利分校的 CyberGym 网络安全基准测试中获得 84.0% 的得分，超越了 Anthropic 的 Claude Mythos Preview，且消耗的预算不到 Mythos「玻璃翼计划」的 0.1%。阿图因还在 curl、gnark、OpenSSL、Python cryptography、Java bc-java 等关键项目中发现多个 Mythos 未检出的高危逻辑漏洞。 这一结果表明，基于开源模型构建、可本地部署的 AI 安全工具能够与资金雄厚的前沿 AI 实验室商业系统竞争，并在关键领域实现超越。它标志着高级漏洞发现能力可能正在走向普及化，资源高效的方案有望在关键基础设施保护方面挑战成熟的行业领导者。 阿图因 AI 基于开源的 GLM-5.1 模型构建，专为本地部署设计，无需依赖云端商业 API 即可使用。在伯克利 BVI 真实世界漏洞排行榜中，阿图因按漏洞严重程度排名第一（CVSS 评分最高达 9.3），按发现漏洞总数排名第五。

telegram · zaihuapd · 7月3日 16:12

**背景**: CyberGym 是由加州大学伯克利分校开发的网络安全基准测试，用于评估 AI 系统发现真实世界软件漏洞的能力。Anthropic 的 Project Glasswing 是一项协作安全计划，已扩展至 15 个以上国家的约 200 个组织，合作伙伴共同使用 Claude Mythos 模型在不到两个月内发现了超过 10,000 个高危漏洞。腾讯玄武实验室是国内知名网络安全研究团队，以发现广泛使用的软件产品中的零日漏洞而著称。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing : Securing critical software for the AI era \ Anthropic</a></li>
<li><a href="https://www.digitalapplied.com/blog/anthropic-project-glasswing-mythos-security-expansion-2026">Anthropic Expands Glasswing : Frontier AI as Cyber Defense</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI</span> <span class="tag-badge">Vulnerability Detection</span> <span class="tag-badge">Tencent</span> <span class="tag-badge">Benchmark</span></p>

---

<a id="item-13"></a>

## [黑石集团意外撤资，全球最大数据中心项目濒临崩溃](https://www.zerohedge.com/technology/worlds-largest-data-center-campus-verge-collapse-after-blackstone-unexpectedly-pulls-out) ⭐️ 8.0/10

黑石集团意外撤回了资金支持，使得原计划成为全球最大的数据中心园区项目面临随时可能崩溃的风险。 这一超大型项目的崩溃可能会严重限制未来数据中心的可用容量，为快速扩张的云计算和人工智能基础设施领域造成潜在瓶颈。这也突显了大型科技基础设施项目日益增长的财务波动性和投资风险。 大型私募股权公司突然撤回资金，突显了为需要数十亿美元前期投入的庞大基础设施项目提供资金的高风险性质。这一事件可能会推迟或永久停止该园区的建设时间表。

telegram · Marcoview666 · 7月3日 06:18

**背景**: 数据中心是互联网的物理骨干，容纳了运行云服务、数字应用和人工智能工作负载所需的关键服务器与网络设备。随着全球对计算能力的需求激增（尤其是受人工智能发展的推动），科技公司和投资者一直在竞相建设超大型新设施，以应对前所未有的数据处理规模。然而，这些超大规模项目属于极端资本密集型，使其对宏观经济环境的变化以及大型机构投资者的战略调整极为敏感。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Data Center</span> <span class="tag-badge">Infrastructure</span> <span class="tag-badge">Private Equity</span> <span class="tag-badge">Cloud Computing</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-14"></a>

## [Erin Catto 发布 Box3D：用 C 语言编写的新型 3D 物理引擎](https://github.com/erincatto/box3d) ⭐️ 8.0/10

知名物理引擎 Box2D 的作者 Erin Catto 发布了一个名为 Box3D 的全新 GitHub 仓库，这是一个用 C 语言编写的游戏 3D 物理引擎。该仓库在过去 24 小时内获得了 16 颗新星，显示出社区日益增长的关注。 Erin Catto 是 Box2D 的作者，Box2D 已成为事实上的业界标准 2D 物理引擎，被全球无数游戏和模拟软件所采用。出自同一作者的 3D 物理引擎具有巨大潜力，有望重塑游戏开发乃至更广泛领域中实时 3D 物理模拟的格局。 Box3D 项目目前处于早期阶段，参与度指标较低（16 颗星，1 个 fork）。它使用 C 语言编写，与 Catto 在 Box2D 上的做法一致，注重可移植性、性能以及与各种游戏引擎和平台的易集成性。

ossinsight · erincatto · 7月3日 20:00

**背景**: Erin Catto 是一位著名的计算物理学家和软件工程师，以创建 Box2D 而闻名——Box2D 是一个开源的 2D 刚体物理引擎，驱动了《愤怒的小鸟》等众多热门游戏。Box2D 因其求解器稳定性、性能和清晰的 C++ 代码库而备受赞誉，已被移植到多种语言和平台。物理引擎负责处理关键的模拟任务，包括碰撞检测、刚体动力学和约束求解，是游戏引擎中的基础组件。从 2D 到 3D 物理的过渡会引入显著更大的数学和计算复杂性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---