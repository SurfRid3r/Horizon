---
layout: default
title: "Horizon Summary: 2026-07-13 (ZH)"
date: 2026-07-13
lang: zh
---

> 从 46 条内容中筛选出 9 条重要资讯。

---

1. [JDK 21 虚拟线程模型下的 Web 应用会话上下文串扰漏洞](#item-1) ⭐️ 9.0/10
2. [洛杉矶警察局终止与监控巨头 Flock 的合同](#item-2) ⭐️ 8.0/10
3. [Ghostcommit 攻击将恶意提示隐藏于图片中以窃取机密](#item-3) ⭐️ 8.0/10
4. [微软 Entra ID 将通行密钥设为默认身份验证方法](#item-4) ⭐️ 8.0/10
5. [Cursor 暗中开发通用 AI 代理“Sand”挑战 Claude 和 OpenAI](#item-5) ⭐️ 8.0/10
6. [欧盟拟禁止 13 岁以下儿童使用社交媒体](#item-6) ⭐️ 8.0/10
7. [白宫召集电力公司与数据中心，承诺 AI 用电不转嫁消费者](#item-7) ⭐️ 8.0/10
8. [韩国启动“全民 AI”项目 推出免费国产聊天机器人](#item-8) ⭐️ 8.0/10
9. [xAI 紧急关闭 Grok Build CLI 代码上传功能](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [JDK 21 虚拟线程模型下的 Web 应用会话上下文串扰漏洞](https://xz.aliyun.com/news/92509) ⭐️ 9.0/10

文章揭示了 JDK 21 虚拟线程（JEP 444）引入的一类隐蔽的会话越权漏洞：虚拟线程默认名称为空字符串，当业务代码在未显式命名的虚拟线程中读写以线程名为键的隔离表（如 MDC、APM 链路追踪、多租户上下文）时，所有虚拟线程会退化为共享同一条目，导致并发请求间发生身份串扰。 此漏洞对 Java 生态系统影响深远，因为虚拟线程是 JDK 21 最受期待的特性之一，而大量现有框架和库隐式依赖基于线程名的上下文隔离。迁移到虚拟线程的应用程序如果不审查其上下文隔离机制，可能在不知情的情况下将用户暴露于跨请求身份泄露和越权访问的风险之中。 根本原因在于，未显式命名的虚拟线程默认名称为空字符串（""），而传统平台线程通常携带唯一名称如 'pool-1-thread-3'。任何以 Thread.currentThread().getName() 为键的隔离表都会将所有未命名的虚拟线程折叠到同一个共享槽位中，从而打破传统"每请求一线程"模型下成立的假设。

rss · 先知安全技术社区 · 7月13日 01:51

**背景**: 虚拟线程通过 JDK 21 的 JEP 444 引入，是由 JVM 而非操作系统管理的轻量级用户模式线程，旨在大幅简化高吞吐并发编程。MDC（映射诊断上下文）是一种日志机制，利用线程标识作为隐式键来存储每线程上下文数据（如用户 ID 或请求 ID）。在传统的"每请求一线程"模型下，每个请求运行在一个具有唯一名称的平台线程上，因此基于线程名的隔离是安全的；虚拟线程打破了这一假设，因为它们可以以海量数量被创建，且默认名称为空。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openjdk.org/jeps/444">JEP 444 : Virtual Threads</a></li>
<li><a href="https://www.baeldung.com/mdc-in-log4j-2-logback">Java Logging with Mapped Diagnostic Context ( MDC ) | Baeldung</a></li>
<li><a href="https://logback.qos.ch/manual/mdc.html">Chapter 8: Mapped Diagnostic Context</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">JDK 21</span> <span class="tag-badge">Virtual Threads</span> <span class="tag-badge">Web Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Concurrency</span></p>

---

<a id="item-2"></a>

## [洛杉矶警察局终止与监控巨头 Flock 的合同](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/) ⭐️ 8.0/10

洛杉矶警察局（LAPD）让其与自动车牌读取器（ALPR）制造商 Flock Safety 的合同到期，理由是对公民自由和隐私存在严重担忧。虽然这似乎是远离该技术的果断举措，但 Flock 仍保留对物理摄像头和立柱的所有权，这意味着监控操作可能会独立继续。 这标志着市政监控辩论中的一个重要时刻，美国最大的警察局之一公开表明立场，反对无限制的数据收集。然而，Flock 的商业模式——即公司保留硬件所有权并可以向任何机构出售数据——暴露了一个关键漏洞，可能使此类合同终止在很大程度上只是象征性的。 Flock Safety 拥有其合同下部署的摄像头、立杆和基础设施，这意味着即使某个部门的合同到期，设备仍会继续运行并记录数据。该公司随后可以将收集的车牌和车辆数据出售给其他执法机构，例如加州公路巡警（CHP）、洛杉矶治安部门（LASD）、FBI，甚至 Palantir 等私营公司，而不论签约部门的决定如何。

hackernews · forks · 7月13日 15:11 · [社区讨论](https://news.ycombinator.com/item?id=48893947)

**背景**: Flock Safety 是一家私营监控公司，向警察局、业主协会（HOA）、学校和企业销售自动车牌读取器（ALPR）和实时视频摄像头。ALPR 技术使用安装在立杆或巡逻车上的摄像头自动捕获和读取车牌，随时间推移创建详细的车辆移动数据库。这些系统引发了重大的公民自由担忧，因为它们能够在没有搜查令、没有个人化怀疑或缺乏有效监督的情况下对公民位置进行系统性追踪。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.contrary.com/company/flock-safety">Report: Flock Safety Business Breakdown & Founding Story</a></li>
<li><a href="https://sls.eff.org/technologies/automated-license-plate-readers-alprs">Automated License Plate Readers</a></li>
<li><a href="https://newrepublic.com/article/202565/flock-safety-police-surveillance-dystopia">The Tech Company Bringing Surveillance ... | The New Republic</a></li>

</ul>
</details>

**社区讨论**: 评论者对 LAPD 合同到期是否会切实遏制监控表示深切怀疑，指出 Flock 对硬件的所有权使其能够持续收集数据并出售给其他机构。一些用户呼吁立法，使政府购买其自身无权合法收集的数据或情报成为非法行为。其他人则就此类监控在高犯罪率地区的实际效用展开辩论，一位评论者分享了 Flock 摄像头帮助侦破一系列社区抢劫案的第一手经历。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Surveillance</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Civil Liberties</span> <span class="tag-badge">Law Enforcement</span> <span class="tag-badge">Data Brokerage</span></p>

---

<a id="item-3"></a>

## [Ghostcommit 攻击将恶意提示隐藏于图片中以窃取机密](https://mp.weixin.qq.com/s?__biz=MzkyMTI0NjA3OA==&mid=2247495300&idx=1&sn=a495dbb43bc4e710231bd9e6bc2e2b21) ⭐️ 8.0/10

密苏里大学堪萨斯城分校的研究人员公开了 Ghostcommit 攻击，这是一种将提示注入指令隐藏在 PNG 图片中的新型技术。该方法通过一个看似无害的图片和配置文件，隐蔽地欺骗 AI 编程助手在代码审查期间泄露敏感的`.env`文件。 这种攻击暴露了现代 AI 辅助开发流程中的严重漏洞，即 AI 助手会盲目信任嵌入的指令。它凸显了一种危险的新型供应链攻击媒介，可能导致 API 密钥和数据库凭证的大规模泄露。 该攻击通过提交一个包含看似无害的图片和配置文件的 Pull Request 来实施，该配置文件会指示 AI 助手信任图片内容。由于恶意负载是图片而非文本，它能轻松绕过传统的 AI 代码审查工具和基于文本的安全过滤器。

rss · M01NTeam · 7月13日 10:00

**背景**: 提示注入是一种网络安全漏洞，攻击者通过构造恶意输入来覆盖大语言模型的预期指令，迫使其执行意外操作。在软件开发中，`.env`文件是一种纯文本配置文件，通常用于存储 API 密钥和数据库密码等敏感环境变量。AI 编程助手越来越多地集成到开发流程中以自动化处理 Pull Request 审查等任务，使其成为此类供应链攻击的主要目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.malwarebytes.com/blog/ai/2026/07/ghostcommit-attack-hides-malicious-ai-instructions-in-images">Ghostcommit attack hides malicious AI instructions in... | Malwarebytes</a></li>
<li><a href="https://cybersecuritynews.com/ghostcommit-attack-hides-prompts/">New Ghostcommit Attack Hides Malicious Prompts in Images to...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI安全</span> <span class="tag-badge">提示注入</span> <span class="tag-badge">数据窃取</span> <span class="tag-badge">漏洞分析</span> <span class="tag-badge">Ghostcommit</span></p>

---

<a id="item-4"></a>

## [微软 Entra ID 将通行密钥设为默认身份验证方法](https://www.microsoft.com/en-us/security/blog/2026/07/13/microsoft-entra-id-security-updates-passkeys-are-the-default-authentication-method-in-entra-id/) ⭐️ 8.0/10

微软正正式将通行密钥设为 Microsoft Entra ID 的默认身份验证体验。此外，该公司还宣布了针对短信和语音身份验证的新运营模型，以进一步保障平台安全。 由于 Entra ID 是数百万企业用户的基础身份服务，将通行密钥设为默认选项显著加速了行业向防钓鱼无密码身份验证的过渡。这一更新促使各组织实现安全协议的现代化，减少了对极易被攻破的密码的依赖。 通行密钥使用公钥加密技术（通过 WebAuthn 标准）以及设备生物识别或 PIN 码，在不传输敏感共享凭证的情况下安全地对用户进行身份验证。IT 管理员需要为其基础设施做好应对这一过渡的准备，特别是关于全新更新的短信和语音身份验证框架。

rss · Microsoft Security · 7月13日 17:00

**背景**: Microsoft Entra ID（前身为 Azure Active Directory）是一款广泛使用的基于云的身份和访问管理服务，服务于 Microsoft 365、Azure 和第三方应用程序。通行密钥代表了现代的无密码身份验证标准，它依赖于安全存储在用户设备上的加密密钥。这种方法消除了在网络中发送密码的需要，使其在防范网络钓鱼活动和凭证盗窃方面极为有效。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Microsoft_Entra_ID">Microsoft Entra ID</a></li>
<li><a href="https://en.wikipedia.org/wiki/Passkey_(authentication)">Passkey (authentication)</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Authentication</span> <span class="tag-badge">Passkeys</span> <span class="tag-badge">Entra ID</span> <span class="tag-badge">Microsoft</span></p>

---

<a id="item-5"></a>

## [Cursor 暗中开发通用 AI 代理“Sand”挑战 Claude 和 OpenAI](https://www.theinformation.com/articles/cursor-developing-ai-agent-compete-claude-cowork) ⭐️ 8.0/10

Cursor 正在秘密开发一款代号为“Sand”的通用 AI 代理，该代理能够处理回复电子邮件、整理电子表格以及完成工程任务等多步骤工作。该产品目前尚未正式发布，旨在与 Anthropic 的 Claude Cowork 和 OpenAI 的 ChatGPT Work 竞争。 这标志着 Cursor 从构建 AI 代码编辑器向更广泛的企业级 AI 助手市场进行战略性扩张。通过瞄准开发者之外的用户群体，Cursor 将自己定位为与 OpenAI 和 Anthropic 等巨头直接竞争的对手。 据悉，“Sand”代理将 Cursor 的自然语言处理能力从代码库操作扩展到了常规企业任务，能够自动执行多步骤工作流程。目前该产品尚未正式发布，关于其技术架构或集成能力的细节仍处于保密状态。

telegram · zaihuapd · 7月13日 01:34

**背景**: Cursor 是一款受欢迎的 AI 辅助集成开发环境（IDE），基于 Visual Studio Code 开发，允许用户使用自然语言指令执行编程任务。与此同时，像 Anthropic 的 Claude Cowork 和 OpenAI 的 ChatGPT Work 等竞争对手是通用的企业级 AI 代理，旨在通过整合上下文，将分散的团队笔记转化为最终成果，从而自动化跨应用程序（如演示文稿、文档和电子表格）的各种工作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>
<li><a href="https://claude.com/product/cowork">Claude Cowork | Claude by Anthropic</a></li>
<li><a href="https://openai.com/chatgpt-work/">ChatGPT Work with GPT-5.6 | OpenAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cursor</span> <span class="tag-badge">AI Agent</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Enterprise Software</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-6"></a>

## [欧盟拟禁止 13 岁以下儿童使用社交媒体](https://www.nytimes.com/2026/07/13/technology/europe-teen-social-media.html) ⭐️ 8.0/10

欧盟正计划在 9 月份提出一项法案，禁止 13 岁以下儿童在没有家长或教师监督的情况下使用社交媒体。专家报告还建议，3 岁以下幼儿应完全禁止看屏幕，且 13 至 18 岁的青少年只能使用设有安全功能的平台。 如果法案获得通过，这将成为全球最大规模的数字年龄限制措施，深刻影响占欧盟总人口约 18%的未成年人群体。此举将迫使社交媒体平台彻底改革其年龄验证和未成年人安全系统，并为全球其他市场树立强大的监管先例。 拟议的框架概述了一种基于年龄段的数字访问分级管理方案，对平台提出了严格要求，以验证用户身份并确保合规的安全环境。这将带来重大的技术和隐私挑战，因为平台必须在不违反《通用数据保护条例》（GDPR）等现有数据保护法的前提下准确验证年龄。

telegram · zaihuapd · 7月13日 10:20

**背景**: 世界各国政府越来越担心社交媒体对青少年心理健康和发展的负面影响。澳大利亚、丹麦和法国等国家已经实施或正在考虑类似的基于年龄的数字限制措施。欧盟在科技监管方面一直走在前列，此前曾通过《通用数据保护条例》（GDPR）制定了严格的数据隐私规则，并通过《数字服务法》（DSA）设立了在线安全标准。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Tech Policy</span> <span class="tag-badge">Social Media</span> <span class="tag-badge">EU Regulation</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Child Safety</span></p>

---

<a id="item-7"></a>

## [白宫召集电力公司与数据中心，承诺 AI 用电不转嫁消费者](https://www.reuters.com/legal/litigation/white-house-rally-utilities-data-centers-over-ai-power-costs-2026-07-13/) ⭐️ 8.0/10

白宫计划在未来几周召集电力公司、数据中心开发商以及州长，扩大一项自愿承诺倡议，确保 AI 电力需求的激增不会推高居民和企业电费。此前，Google、Meta 和 OpenAI 等公司已签署相关承诺，同意自行承担发电和电网升级成本，而非转嫁给现有用户。 AI 基础设施扩张与实体电网容量之间的冲突已成为关键的宏观挑战，AI 数据中心抢占区域电网容量已导致内华达州太浩湖等多地居民电费飙升。虽然该倡议表明联邦政府已意识到这一矛盾，但承诺并无强制约束力，执行力仍存疑。 美国工业用电因用量大、电压高而具有规模经济效应，价格长期显著低于居民电价；然而，AI 数据中心正在消耗区域电网资源中不成比例的份额。所谓"自愿承诺"并无强制约束力，执行完全依赖企业的自觉性。

telegram · zaihuapd · 7月13日 11:17

**背景**: AI 训练和推理需要海量算力，推动数据中心对电力的需求达到前所未有的水平。Google、Meta、OpenAI 等科技巨头正快速扩张数据中心规模，给本未为如此集中负载设计的区域电网带来巨大压力。在美国，电力市场受到监管，基础设施成本可能分摊到所有用户身上——这意味着当电力公司为服务数据中心而新建产能时，居民消费者可能通过更高电费承担部分成本。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Energy Policy</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">AI Economics</span> <span class="tag-badge">Power Grid</span></p>

---

<a id="item-8"></a>

## [韩国启动“全民 AI”项目 推出免费国产聊天机器人](https://www.yna.co.kr/view/AKR20260713108901017) ⭐️ 8.0/10

韩国政府宣布启动“全民 AI”项目，计划在年内推出免费且无使用量限制的国产 AI 聊天机器人和公共 AI 代理服务。该项目将由 2 至 3 家民间企业主导，使用政府提供的英伟达 B200 GPU 以及如 Kakao 的 Kanana 等国产基础模型。 这是一项重要的政府战略举措，旨在让所有公民都能免费使用国产 AI 技术。此举加强了韩国的技术主权，并在全球竞争激烈的 AI 领域中提升了如 Kakao 和 Naver 等本土科技巨头的竞争力。 该项目要求必须使用 50% 以上的韩国国产独立基础模型，初期将由政府拥有的 512 张英伟达 B200 GPU 提供支持。服务商将于 8 月中旬选定，目标 9 月进行 Beta 测试，而 Kakao 已确认将使用其自研的“Kanana”模型参与该项目。

telegram · zaihuapd · 7月13日 15:10

**背景**: 韩国一直积极投资于 AI 基础设施，以保持其技术优势并减少对外国 AI 模型的依赖。英伟达的 B200 基于 Blackwell 架构，是一款专为处理要求严苛的企业级 AI 工作负载（包括训练和推理）而设计的高性能 GPU。Kakao 的“Kanana”是一个针对韩语和英语优化的双语大语言模型系列，能够支持各种个人和生活化的 AI 服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet">NVIDIA DGX B200 Datasheet</a></li>
<li><a href="https://www.kakaocorp.com/page/detail/11333">Introducing Kakao ’s AI model , Kanana Model Family | Kakao | 카카오</a></li>
<li><a href="https://github.com/kakao/kanana">kakao / kanana : Kanana : Compute-efficient Bilingual Language Models ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Policy</span> <span class="tag-badge">South Korea</span> <span class="tag-badge">Public AI</span> <span class="tag-badge">Chatbot</span> <span class="tag-badge">National Strategy</span></p>

---

<a id="item-9"></a>

## [xAI 紧急关闭 Grok Build CLI 代码上传功能](https://t.me/zaihuapd/42539) ⭐️ 8.0/10

7 月 13 日凌晨，xAI 在服务器端紧急新增了 `disable_codebase_upload` 字段并返回 true，从而关闭了自动上传功能。此前，一位安全研究员披露 Grok Build CLI 默认悄悄上传用户的整个代码库和密钥文件，引发了广泛关注。 这一事件对于一款处理源代码和 API 密钥等高度敏感数据的开发者工具来说，构成了严重的隐私和安全问题。它削弱了开发者对 AI 编程助手的信任，也凸显了在竞争日益激烈的 AI 工具市场中，数据处理的透明度至关重要。 此次修复在服务器端完成，用户无需更新本地 CLI 安装；xAI 的服务器通过返回 `disable_codebase_upload` 字段来全局强制执行新行为。原先的上传功能默认开启，这引发了人们对静默上传持续了多长时间以及已上传数据是否已被处理或存储的担忧。

telegram · zaihuapd · 7月13日 16:39

**背景**: Grok Build 是 xAI 推出的终端原生 AI 编程代理和命令行界面（CLI），配备交互式终端 UI，于 2026 年 5 月以测试版形式发布。该工具由 Grok 4.5 驱动，面向 SuperGrok 和 X Premium Plus 订阅用户开放。与其他 AI 编程工具类似，它会深度集成到开发者的本地环境中，这使得自动上传代码库和密钥的行为尤为危险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://x.ai/news/grok-build-cli">Introducing Grok Build | SpaceXAI</a></li>
<li><a href="https://www.verdent.ai/guides/grok-build-install">Grok Build Install Guide: CLI , Windows, and Setup - Verdent Guides</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Grok</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Developer Tools</span></p>

---