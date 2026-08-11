---
layout: default
title: "Horizon Summary: 2026-08-11 (ZH)"
date: 2026-08-11
lang: zh
---

> 从 53 条内容中筛选出 16 条重要资讯。

---

1. [严重 SharePoint RCE 漏洞（CVE-2026-63520）已披露并修复](#item-1) ⭐️ 9.0/10
2. [Rapid7 发布 Microsoft SharePoint 身份验证绕过漏洞 (CVE-2026-55040) 的 PoC 脚本](#item-2) ⭐️ 9.0/10
3. [Google AMIE 医疗 AI 系统展示实时视频问诊能力](#item-3) ⭐️ 9.0/10
4. [Anthropic 发布 Claude Opus 5：性能接近旗舰版 Fable 5，价格减半](#item-4) ⭐️ 9.0/10
5. [从专有 LLM API 中提取隐藏的推理轨迹](#item-5) ⭐️ 8.0/10
6. [AI 生成内容正在抹除互联网的集体记忆](#item-6) ⭐️ 8.0/10
7. [antirez 发布 Apple Silicon 原生 MiniMax-H3 推理引擎](#item-7) ⭐️ 8.0/10
8. [Cloudflare 报告称 2026 年上半年超 1 Tbps DDoS 攻击激增 519%](#item-8) ⭐️ 8.0/10
9. [Check Point 曝光针对航空航天的“梦幻工作”零日攻击](#item-9) ⭐️ 8.0/10
10. [Aeternum 僵尸网络利用 Polygon 区块链构建去中心化 C2 基础设施](#item-10) ⭐️ 8.0/10
11. [Hugging Face Agent 入侵复盘：AI 如何将局部缺陷串成系统性入侵](#item-11) ⭐️ 8.0/10
12. [CVE-2026-2273：Spring Boot Actuator additional-path 配置冲突导致身份认证绕过](#item-12) ⭐️ 8.0/10
13. [iOS 27 Beta 5 代码揭示 Apple Intelligence 中国版即将上线](#item-13) ⭐️ 8.0/10
14. [安靠科技据称考虑出售估值 15 亿美元的中国业务股份](#item-14) ⭐️ 8.0/10
15. [Meta 切断与 Manus 数据联系，推进 20 亿美元收购案拆分](#item-15) ⭐️ 8.0/10
16. [英伟达宣布创纪录的 5000 亿美元表外 SPV 交易以资助 AI 基建](#item-16) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [严重 SharePoint RCE 漏洞（CVE-2026-63520）已披露并修复](https://www.rapid7.com/blog/post/etr-cve-2026-63520-microsoft-sharepoint-remote-code-execution-fixed) ⭐️ 9.0/10

Rapid7 Labs 和微软披露了 CVE-2026-63520，这是一个由 SharePoint Business Connectivity Services 中不安全的 .NET 类型实例化引起的高危远程代码执行漏洞（CVSS 8.1），已在微软 8 月 11 日的安全更新中修复。这是漏洞利用链的第二部分，第一部分是上月披露的 JWT 身份验证绕过漏洞 CVE-2026-55040，两者组合可实现无需身份验证的 RCE 和完整的服务器控制。 SharePoint Server 是被广泛部署的本地企业平台，无需身份验证即可实现完整服务器接管的 RCE 漏洞链代表了企业 IT 环境中最严重的威胁场景之一。这项研究还显著证明了公开可用的 AI 模型能够大幅加速针对专有目标的漏洞发现，标志着攻击性安全领域的重大转变。 CVE-2026-63520 的 CVSSv3.1 评分为 8.1（高危），CWE 编号为 CWE-20（输入验证不当），影响所有受支持的 Microsoft SharePoint Server 版本、某些 Microsoft Project Server 和 Microsoft Office Web Apps Server 版本——但不影响 SharePoint Online 或 Microsoft 365。漏洞利用以 SharePoint 站点背后的 Windows 服务账户权限执行攻击者代码；当与 CVE-2026-55040 组合使用时，完全不需要任何凭据。

rss · Rapid7 Cybersecurity Blog · 8月11日 13:00

**背景**: Microsoft SharePoint Server 是客户自行管理的本地企业协作和文档管理平台，与基于云的 SharePoint Online 不同。Business Connectivity Services（BCS）是 SharePoint 的一项功能，用于将外部数据源集成到 SharePoint 站点中。JWT（JSON Web Token）身份验证绕过漏洞（如 CVE-2026-55040）允许攻击者在无需凭据的情况下冒充合法用户，而 RCE 漏洞则允许执行任意代码。两者组合后形成'无需身份验证的 RCE'链——这是最危险的服务器漏洞类型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rapid7.com/blog/post/etr-cve-2026-63520-microsoft-sharepoint-remote-code-execution-fixed/">Rapid7 and Microsoft disclose CVE-2026-63520, a new ...</a></li>
<li><a href="https://thehackernews.com/2026/08/researchers-disclose-ai-assisted.html">Researchers Disclose AI-Assisted SharePoint Exploit Chain ...</a></li>
<li><a href="https://windowsforum.com/security-alerts.84/cve-2026-63520-patch-sharepoint-server-rce-now.442485/">CVE-2026-63520: Patch SharePoint Server RCE Now</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Zero-Day</span></p>

---

<a id="item-2"></a>

## [Rapid7 发布 Microsoft SharePoint 身份验证绕过漏洞 (CVE-2026-55040) 的 PoC 脚本](https://www.rapid7.com/blog/post/ra-microsoft-sharepoint-jwt-token-authentication-bypass-cve-2026-55040) ⭐️ 9.0/10

Rapid7 发布了关于 Microsoft SharePoint 严重漏洞 CVE-2026-55040 的详细技术分析及概念验证脚本。该漏洞允许远程未经身份验证的攻击者通过利用 JWT 令牌验证管道中的四个独立弱点链来绕过身份验证，并以管理员身份执行操作。 由于 Microsoft SharePoint 被企业广泛用于协作和敏感数据存储，这种无需身份验证的远程绕过漏洞构成了严重的安全威胁。概念验证脚本的公开大幅增加了漏洞被积极利用的风险，需要 IT 管理员立即采取修补和防御措施。 该漏洞具体影响 SharePoint Server 订阅版（版本 16.0.19725.20210），存在于负责解析 Bearer 服务到服务令牌的 SPJsonWebSecurityTokenHandlerV2 类中。攻击者可以通过操纵嵌套的 JWT 结构（包含外部令牌和嵌入的、带有加密签名的“actor token”）来伪造有效的 JSON Web 令牌。

rss · Rapid7 Cybersecurity Blog · 8月11日 13:00

**背景**: JSON Web 令牌 (JWT) 是 Web 应用程序中使用的一种标准方法，用于在各方之间安全地传输信息以进行身份验证和授权。Microsoft SharePoint 使用涉及嵌套 JWT 的特定服务到服务 (S2S) 身份验证管道，允许应用程序代表用户进行通信和访问受保护的资源。CWE-1390 表示一种安全弱点，即核心身份验证机制存在根本性缺陷，使恶意行为者能够冒充合法用户。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed/">CVE - 2026 - 55040 : Microsoft SharePoint JWT Token Authentication...</a></li>
<li><a href="https://cvereports.com/reports/CVE-2026-55040">CVE - 2026 - 55040 : CVE - 2026 - 55040 : Microsoft SharePoint Server...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">Authentication Bypass</span> <span class="tag-badge">Exploit</span></p>

---

<a id="item-3"></a>

## [Google AMIE 医疗 AI 系统展示实时视频问诊能力](https://blog.google/innovation-and-ai/models-and-research/google-research/amie-video-consultations/) ⭐️ 9.0/10

Google Research 的 AMIE（Articulate Medical Intelligence Explorer）是一个基于大语言模型的对话式诊断 AI 系统，在一项开创性研究中首次展示了实时临床视频问诊能力。这标志着该系统从基于文本的诊断推理进化到了融合实时视频的多模态交互。 这一突破代表了远程医疗领域的潜在范式转变，一家主要科技巨头展示了 AI 能够进行实时多模态临床问诊，而不仅仅是辅助基于文本的诊断。它可能大幅扩大医疗专业知识的可及性，并重塑全球远程医疗服务的交付方式。 AMIE 接受了包含医学推理、医学摘要和真实临床对话的现实数据集训练，使其能够在多种疾病状况、专科和场景中提供诊断结果。该系统现在利用多模态 AI 能力，同时整合文本、音频、图像和视频，以在问诊过程中实现更全面的理解。

rss · AI · 8月11日 17:00

**背景**: AMIE（Articulate Medical Intelligence Explorer）是 Google 设计的一套基于大语言模型的智能体，旨在为临床工作流程提供安全、可靠且高准确度的诊断和管理推理。多模态 AI 是一种深度学习类型，能够整合和处理多种数据类型——如文本、音频、图像或视频——从而更全面地理解复杂数据。自 2023 年以来，大型多模态模型日益普及，使 AI 能够在包括医疗在内的各个领域更广泛地理解现实世界现象。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.google/blog/amie-a-research-ai-system-for-diagnostic-medical-reasoning-and-conversations/">AMIE : A research AI system for diagnostic medical reasoning and...</a></li>
<li><a href="https://www.emergentmind.com/topics/articulate-medical-intelligence-explorer-amie">AMIE : Medical Intelligence Explorer</a></li>
<li><a href="https://en.wikipedia.org/wiki/Multimodal_AI">Multimodal AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Medical AI</span> <span class="tag-badge">Multimodal AI</span> <span class="tag-badge">Healthcare</span> <span class="tag-badge">Google Research</span> <span class="tag-badge">Telemedicine</span></p>

---

<a id="item-4"></a>

## [Anthropic 发布 Claude Opus 5：性能接近旗舰版 Fable 5，价格减半](https://t.me/zaihuapd/43109) ⭐️ 9.0/10

Anthropic 正式发布了 Claude Opus 5，该模型在智能水平上接近其旗舰版 Claude Fable 5。它即日起成为 Claude Max 的默认模型，也是 Claude Pro 上最强的模型，而使用成本仅为旗舰版的一半。 此次发布将 Opus 5 的定价与上一代 Opus 4.8 持平，从而普及了接近旗舰级的 AI 能力。它为深度工作提供了顶级的智能体验，显著提升了 Claude 消费者订阅计划的价值。 尽管成本较低，Claude Opus 5 仍在包括 Frontier-Bench、ARC-AGI 3 和 Zapier AutomationBench 在内的多项严格基准测试中进行了评估。其中，ARC-AGI 3 专门测试交互式推理和适应性世界建模能力，而 Zapier AutomationBench 则评估 AI 处理现实多步骤商业工作流的能力。

telegram · zaihuapd · 8月11日 03:39

**背景**: Anthropic 通过不同的订阅层级提供模型服务，其中 Claude Max 为高强度工作负载提供的单次会话使用量最高可达 Pro 计划的 20 倍。为了衡量技术进展，AI 行业依赖于复杂的基准测试，例如要求模型在新环境中持续学习的 ARC-AGI 3，以及测试跨销售、营销和人力资源等实际自动化任务的 Zapier AutomationBench。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arcprize.org/arc-agi/3">ARC - AGI - 3</a></li>
<li><a href="https://github.com/zapier/AutomationBench">GitHub - zapier / AutomationBench : A benchmark for evaluating AI...</a></li>
<li><a href="https://www.claude.com/pricing/max">Max plan | Claude</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">模型发布</span></p>

---

<a id="item-5"></a>

## [从专有 LLM API 中提取隐藏的推理轨迹](https://stolen-thoughts.com/) ⭐️ 8.0/10

最近的一篇文章详细介绍了一种新技术，用于从专有的大型语言模型（LLM）API 中提取通常对用户隐藏的内部“思维链”推理轨迹。该方法涉及操纵或回放这些隐藏的推理轨迹，甚至将其从前沿模型转移到较弱的“同级”模型中以绕过安全过滤器。 这一突破引发了关于 AI 安全和模型蒸馏伦理的重大担忧，因为它允许竞争对手或恶意行为者利用高级模型的私有推理过程来训练自己的开源替代品。此外，它还暴露了安全漏洞，隐藏的推理过程可能包含敏感信息或揭示模型的真实能力，而 API 提供商将无法再对此提供完全的保护。 该技术探索了将前沿模型生成的推理轨迹回放到较弱的模型中，从而有效地对较弱的模型进行“越狱”以提取其内部逻辑。评论者还指出了一种极其简单的提取方法：在提供自定义的“深度思考”工具的同时禁用内置的思考模式，这会促使模型直接通过工具调用格式输出其推理过程。

hackernews · quantumgarbage · 8月11日 13:22 · [社区讨论](https://news.ycombinator.com/item?id=49257876)

**背景**: 现代“推理”型大型语言模型在向用户展示最终答案之前，会生成一个内部的逐步逻辑，即思维链。API 提供商通常会隐藏这些原始的推理轨迹，以保护其知识产权并防止用户将这些输出用于模型蒸馏——这是一种机器学习技术，即训练一个较小、能力较弱的模型来模仿一个更大、更复杂的模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://groundy.com/articles/llm-reasoning-traces-leak-the-private-data-theyre-told-to-hide/">LLM Reasoning Traces Leak the Private Data They're Told to Hide...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区对于将这种提取行为定性为“窃取”提出强烈质疑，认为用户只是在恢复他们已经付费的 Token，而 API 提供商隐瞒这些信息才是真正的不道德。成员们还讨论了跨模型回放的有效性，并强调了一种简单得多的替代方案，即使用自定义工具调用直接强制模型输出其推理过程。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Chain-of-Thought</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">API</span></p>

---

<a id="item-6"></a>

## [AI 生成内容正在抹除互联网的集体记忆](https://thewalrus.ca/google-search-is-dying/) ⭐️ 8.0/10

《海象》杂志的一篇文章指出，AI 生成内容的激增加上搜索引擎算法的退化，正在侵蚀互联网作为历史信息和集体知识存储库的可靠性。文章认为，随着 AI 生成的材料充斥网络，通过传统搜索引擎找到真实的人类创作内容变得越来越困难。 这对互联网作为民主化信息资源的角色构成了存在性威胁，可能逆转数十年来在知识普及方面取得的进展。这种退化影响着从普通用户到记者和研究员的每一个人，他们依赖搜索引擎来查找一手资料、政府记录和经过验证的信息。 文章特别指出 Google 不断变化的优先事项和算法调整，将互动参与度和 AI 生成的摘要置于真实内容发现之上。评论者指出，虽然 AI 聊天机器人在许多查询中很有用，但传统搜索引擎在定位特定的深网内容（如扫描的政府文件和公共记录）方面仍然不可或缺。

hackernews · awnird · 8月10日 22:36 · [社区讨论](https://news.ycombinator.com/item?id=49250836)

**背景**: 互联网作为'集体记忆'的概念指的是它作为一个共享存储库的功能，人类的知识、经验和历史记录可以被保存并被普遍访问。像 Google 这样的搜索引擎最初实现了信息的民主化获取，但生成式 AI 的兴起创造了大量合成内容，这些内容通常难以与人类创作的材料区分开来。这种现象有时被称为'AI 垃圾内容'，威胁着要在搜索结果中淹没真实内容，使得验证来源和信任在线信息变得更加困难。

**社区讨论**: 社区成员对在线信息退化表达了强烈的不满，一位评论者因 AI 对内容可读性的影响将其称为'人类历史上最糟糕的发明'。其他人指出'氛围编程'应用复制现有功能的烦人现象，而一位记者强调传统搜索对于查找 AI 聊天机器人无法访问的特定政府文件和公共记录仍然至关重要。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Search</span> <span class="tag-badge">Information Integrity</span> <span class="tag-badge">Google</span> <span class="tag-badge">Internet Culture</span></p>

---

<a id="item-7"></a>

## [antirez 发布 Apple Silicon 原生 MiniMax-H3 推理引擎](https://github.com/antirez/h3.c) ⭐️ 8.0/10

antirez 发布了 h3.c，这是一个基于 C 语言的原生推理引擎，使用 Apple 的 Metal 计算框架直接在 Apple Silicon Mac 上运行 MiniMax-H3 视频生成模型。该项目正在逐步构建中，功能涵盖模型元数据处理、Metal 块对等实现、提示词编码以及从提示词生成视频/音频。 这使得 Mac 用户能够完全在本地运行最先进的开源视频生成模型，无需依赖云 API 或 NVIDIA GPU，填补了本地优先 AI 生态系统中的一个重要空白。Apple Silicon 的统一内存架构为加载大型模型提供了独特优势，否则这些模型需要昂贵的多 GPU 配置才能运行。 目前生成速度较慢——在 M5 Pro 64GB 上生成一段 9 秒 480x864 视频片段大约需要一个小时，在 M4 Max 128GB Mac Studio 上生成 15 秒 480p 视频约需一个半小时。作者正在积极测试 --sparse-attention 优化模式，用户报告称可以使用 GGUF 量化（Q5_K_M、Q8_0）将模型适配到 64GB 统一内存中。

hackernews · swyx · 8月11日 01:22 · [社区讨论](https://news.ycombinator.com/item?id=49252179)

**背景**: MiniMax-H3 是一个开源的通用多模态视频生成模型，能够根据文本、图像、视频和音频输入生成最长 15 秒、带有原生立体声音频的 2K 分辨率视频。Apple 的 Metal 框架提供底层 GPU 计算加速，并已通过 llama.cpp 等项目越来越多地用于 AI 推理。GGUF（GPT-Generated Unified Format）是一种量化格式，通过以较低精度表示权重来减小模型文件大小和内存需求，使大型模型能够在消费级硬件上运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/ggml-org/llama.cpp">GitHub - ggml-org/llama.cpp: LLM inference in C/C++ · GitHub</a></li>
<li><a href="https://www.minimax.io/blog/minimax-h3">MiniMax H 3 : An Open Model Breaking the Boundaries Between Tasks...</a></li>
<li><a href="https://news.ycombinator.com/item?id=49252179">H 3 - metal – Native MiniMax- H 3 inference for Apple Silicon</a></li>

</ul>
</details>

**社区讨论**: 社区成员分享了实际性能基准测试，确认生成功能可用但速度较慢，即使在高端 Mac 上，9-15 秒的视频片段也需要 1 到 1.5 小时。作者 antirez 透露他正在测试稀疏注意力模式，这可能带来显著的加速效果，MiniMax 在 AMA 中曾提及这一特性。多位用户指出内存要求很高——使用量化时 64GB 是实际最低配置，即使拥有 96GB 内存的用户也感到被排除在外——而其他用户则指出 NVIDIA 的 DGX Spark 和 CUDA 生态系统在扩散模型工作负载方面仍然更具优势。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple Silicon</span> <span class="tag-badge">MiniMax-H3</span> <span class="tag-badge">本地AI</span> <span class="tag-badge">Metal</span> <span class="tag-badge">视频生成</span></p>

---

<a id="item-8"></a>

## [Cloudflare 报告称 2026 年上半年超 1 Tbps DDoS 攻击激增 519%](https://blog.cloudflare.com/ddos-threat-report-2026-h1/) ⭐️ 8.0/10

Cloudflare 发布的 2026 年上半年 DDoS 威胁报告显示，共缓解了 935 起超过 1 Tbps 的网络层攻击，仅第二季度就达到 805 起，较第一季度增长 519%。DNS Flood 攻击环比激增 580%，成为第三大攻击类型，DNS 类攻击占全部网络层攻击的 34.3%。 超大规模攻击的急剧升级标志着 DDoS 威胁进入新时代，能够压垮传统防御基础设施，对全球各行业构成严重风险。政府行业受攻击排名的大幅上升（从第 29 位升至第 9 位）也表明这些攻击背后日益增强的地缘政治动机。 报告显示，2026 年上半年网络层 DDoS 攻击总量达 2320 万次，HTTP DDoS 请求量达 29.64 万亿次。这些攻击主要由 DNS 和 CLDAP 反射攻击向量驱动，后者的放大因子可达 70 倍，是最常被滥用的 UDP 协议之一。

telegram · The Cloudflare Blog · 8月11日 13:20

**背景**: 超大规模 DDoS 攻击是指超过 1-2 Tbps 或每秒 10 亿数据包（Bpps）的攻击，能够压垮即使配置完善的网络基础设施。CLDAP（无连接轻量级目录访问协议）反射攻击通过向存在漏洞的服务器发送伪造请求来利用基于 UDP 的目录服务，服务器随后将放大的响应发送给受害者。DNS Flood 攻击则通过海量请求淹没 DNS 服务器，破坏对网站可访问性至关重要的域名解析服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.techtarget.com/searchsecurity/answer/How-can-a-DDoS-reflection-attack-abuse-CLDAP">How can a DDoS reflection attack abuse CLDAP ? | TechTarget</a></li>
<li><a href="https://www.cloudflare.com/learning/ddos/dns-flood-ddos-attack/">DNS flood DDoS attack | Learning Center</a></li>
<li><a href="https://blog.cloudflare.com/ddos-threat-report-for-2025-q1/">Targeted by 20.5 million DDoS attacks , up 358% year-over-year...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">DDoS</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Network Security</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-9"></a>

## [Check Point 曝光针对航空航天的“梦幻工作”零日攻击](https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/) ⭐️ 8.0/10

自 2026 年初以来，Check Point Research 追踪到新一轮“梦幻工作”行动，该行动主要针对全球国防、航空航天和航空业。威胁行为者分发了一个名为“SecurityPDF”的木马化 PDF 查看器，以执行嵌入在特制文档中的恶意载荷，并部署名为“Troy”的新型后门。 该行动突显了社会工程学与零日漏洞利用的复杂结合，对高度敏感行业的国家安全和知识产权构成了严重威胁。它强调了国防承包商迫切需要加强安全意识培训，因为攻击者正在积极利用员工的职业抱负。 该攻击链诱骗受害者下载并使用木马化的“SecurityPDF”应用程序来打开特制的、看似无害的 PDF 文档。一旦打开，有效载荷就会执行并安装 Troy 后门，使攻击者能够建立持久性并在受感染的主机上执行任意命令。

rss · Check Point Research · 8月11日 17:30

**背景**: “梦幻工作”是一场持续的网络间谍行动，历史上通常归因于朝鲜的威胁行为者，尤其是 Lazarus Group。攻击者通常冒充知名国防和航空航天公司的招聘人员，诱骗目标打开恶意文件。通过将招聘流程武器化，这些威胁行为者通过利用人类的脆弱性，成功绕过了传统的边界防御。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/">Shattering the Dream - When a Job Offer Becomes a Zero-Day Attack...</a></li>
<li><a href="https://www.clearskysec.com/operation-dream-job/">Operation ‘ Dream Job ’ Widespread North Korean Espionage...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Zero-Day</span> <span class="tag-badge">APT</span> <span class="tag-badge">Social Engineering</span></p>

---

<a id="item-10"></a>

## [Aeternum 僵尸网络利用 Polygon 区块链构建去中心化 C2 基础设施](https://unit42.paloaltonetworks.com/aeternum-blockchain-c2-analysis/) ⭐️ 8.0/10

Unit 42 发布了对 Aeternum 僵尸网络加载器的详细技术分析，该恶意软件采用 C++ 编写，将其整个命令与控制（C2）基础设施完全迁移至公开的 Polygon 区块链上。该加载器通过调用合约方法 0xb68d1809 查询不可变的智能合约地址来获取加密的 C2 指令，使得该基础设施实质上具备永久性和抗篡改能力。 这标志着恶意软件韧性的一次重大升级，基于区块链的 C2 基础设施无法通过查封服务器或封锁 IP 地址来轻松摧毁，从根本上挑战了传统的威胁缓解策略。这一趋势表明攻击者正在越来越多地利用公共去中心化平台创建几乎无法摧毁的命令通道，迫使防御者重新思考检测与响应模式。 Aeternum 将加密指令存储在 Polygon 智能合约中，智能合约是区块链上在特定条件满足时自动执行的自执行程序。该恶意软件专门使用合约方法 0xb68d1809 来获取这些加密载荷，由于区块链数据具有不可变性且可公开访问，C2 通道可以无限期存在而无需依赖传统的服务器基础设施。

rss · Unit 42 · 8月10日 22:00

**背景**: 命令与控制（C2）基础设施是指攻击者在初始入侵后用于维持与受控设备通信的工具和技术，传统上依赖于可被识别和干扰的中心化服务器。智能合约是存储在区块链上的自执行程序，当预定义条件满足时会自动执行，而 Polygon 是以太坊的 Layer-2 扩展方案，提供低交易成本和快速确认时间。通过将 C2 指令嵌入到公共区块链上的不可变智能合约中，攻击者创造了一种执法机构和安全团队无法简单关闭的通信通道，因为没有任何单一实体能够控制整个区块链。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unit42.paloaltonetworks.com/aeternum-blockchain-c2-analysis/">The Permanent Threat: Analyzing Aeternum’s Blockchain -Based...</a></li>
<li><a href="https://thehackernews.com/2026/02/aeternum-c2-botnet-stores-encrypted.html">Aeternum C2 Botnet Stores Encrypted Commands on Polygon...</a></li>
<li><a href="https://www.varonis.com/blog/what-is-c2">What is C2? Command and Control Infrastructure Explained</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Blockchain</span> <span class="tag-badge">Malware Analysis</span> <span class="tag-badge">Botnet</span></p>

---

<a id="item-11"></a>

## [Hugging Face Agent 入侵复盘：AI 如何将局部缺陷串成系统性入侵](https://xz.aliyun.com/news/92671) ⭐️ 8.0/10

一篇针对近期 Hugging Face Agent 入侵事件的详细技术复盘已发布，深入剖析了 Agent 生态中的孤立安全缺陷是如何被串联起来，形成系统性攻击路径的。该分析揭示了 AI Agent 将轻微漏洞组合为大规模入侵的具体机制。 这一事件凸显了一类新型风险：AI Agent 充当了漏洞链式利用的放大器，将单独看来严重性较低的缺陷转化为关键性入侵——这类威胁是传统安全扫描工具无法检测到的。随着 AI Agent 在整个机器学习生态中的加速普及，理解这些攻击模式对开发者、安全团队和平台运营者都至关重要。 该复盘审视了 Hugging Face 的 Agent 基础设施——包括通过 Docker、E2B 或 Modal 在沙箱环境中执行代码的 smolagents 等工具——在沙箱逃逸或工具层面弱点被组合利用时是如何被攻击的。分析强调，即使每个单独组件看似安全，Agent 工具、模型输出和执行环境之间的交互面也会产生全新的攻击向量。

rss · 先知安全技术社区 · 8月11日 05:59

**背景**: Hugging Face Agents 是连接到 HF Hub 的 AI Agent，使用 MCP（Model Context Protocol）、Skills 以及 smolagents 等开源框架来搜索模型、浏览数据集和运行 Spaces。LLM Agent 的安全威胁分为两类：从底层 LLM 继承的漏洞（如提示注入）和因工具使用、代码执行及多步推理而产生的 Agent 特有威胁。AI 漏洞链式利用是一种新兴的攻击范式，将多个低严重性漏洞链接为一条复杂的攻击路径，其复杂程度往往超出人工测试或自动化扫描器的检测能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/docs/hub/agents">Agents · Hugging Face</a></li>
<li><a href="https://github.com/huggingface/smolagents">GitHub - huggingface/smolagents: smolagents: a barebones ...</a></li>
<li><a href="https://arxiv.org/html/2407.19354v1">The Emerged Security and Privacy of LLM Agent : A Survey with Case...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Vulnerability Analysis</span> <span class="tag-badge">LLM Agents</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">System Security</span></p>

---

<a id="item-12"></a>

## [CVE-2026-2273：Spring Boot Actuator additional-path 配置冲突导致身份认证绕过](https://forum.butian.net/share/4957) ⭐️ 8.0/10

编号为 CVE-2026-2273 的漏洞披露于 Spring Boot Actuator，根源在于 Health Groups 的 `additional-path` 映射逻辑存在缺陷。当健康组的自定义 `additional-path` 与同一路径层级下其他需要认证的应用端点发生冲突时，安全拦截器无法正确执行身份认证检查。 Spring Boot 是部署最广泛的 Java 企业级框架之一，Actuator 端点经常暴露敏感的运维数据和管理功能。该身份认证绕过漏洞可能使攻击者无需凭据即可访问受保护的业务或管理端点，在生产环境中可能导致数据泄露、配置信息暴露甚至系统被完全控制。 该漏洞在健康组被分配的 `additional-path` 与其他受保护端点共享路径前缀时触发，导致框架的路径匹配安全过滤器将受保护端点误判为健康检查路径从而跳过认证。利用该漏洞需要特定错误配置，即自定义路径与应用受保护端点的命名空间发生重叠。

rss · 奇安信攻防社区 · 8月11日 09:00

**背景**: Spring Boot Actuator 是一个生产级模块，为运行中的应用提供监控和管理端点，包括健康检查、指标和环境信息。Health Groups 允许开发者定义在专用端点暴露的健康指标子集，适用于 Kubernetes 存活探针与内部监控仪表盘等不同场景。`additional-path` 功能可将健康组映射到默认 `/actuator/health` 位置之外的自定义 URL 路径。当 Actuator 端点被暴露时，通常使用 Spring Security 进行保护，以防止未经授权访问敏感运维数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.spring.io/spring-boot/reference/actuator/endpoints.html">Endpoints :: Spring Boot</a></li>
<li><a href="https://www.baeldung.com/spring-boot-actuators">Spring Boot Actuator | Baeldung</a></li>
<li><a href="https://oneuptime.com/blog/post/2026-01-26-spring-boot-actuator-health/view">How to Configure Spring Boot Actuator for Health Checks</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Spring Boot</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability Analysis</span> <span class="tag-badge">Authentication Bypass</span> <span class="tag-badge">Web Security</span></p>

---

<a id="item-13"></a>

## [iOS 27 Beta 5 代码揭示 Apple Intelligence 中国版即将上线](https://ai.privacy/) ⭐️ 8.0/10

在 iOS 27 beta 5 中发现的内部代码字符串显示，Apple Intelligence 正在为中国市场进行适配，将使用由本地公司提供的安全机制以遵守中国法律法规。代码明确指出，所有用户请求将在设备端处理，不会发送给 Apple 或安全机制提供商。 这一发现表明，Apple Intelligence 在经历了近两年的监管等待后，正进入全球最大智能手机市场——中国的最终适配阶段。设备端处理与本地安全机制相结合的混合方案，代表了一种全新的工程与合规策略，可能成为其他外国 AI 产品进入严格监管市场的蓝本。 按照法律要求，Apple 将收集经过匿名化处理的安全结果，并以汇总形式共享，安全机制也会自动下载和更新。代码包含用于启用和停用 Apple Intelligence 的专用 UI 元素，以及针对中国大陆的专属隐私页脚文案，与其他地区有所不同。

telegram · zaihuapd · 8月11日 04:49

**背景**: Apple Intelligence 于 2024 年 WWDC 首次发布时，针对中国市场附带了"需经监管部门批准"的声明，因为在中国，所有 AI 产品都必须通过国家互联网信息办公室（CAC）的安全评估和备案。据近期报道，中国监管部门现已批准 Apple Intelligence，阿里巴巴的 Qwen 模型被确认为 AI 核心，百度也承担辅助角色。设备端 AI 处理将用户数据保留在硬件本地，而非发送到云服务器，相比云端 AI 系统，它能提供更快的响应速度和更强的隐私保护。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/2026/07/15/apple-intelligence-cleared-to-launch-in-china/">Apple Intelligence Finally Cleared to Launch in China</a></li>
<li><a href="https://www.digitalapplied.com/blog/apple-intelligence-china-approval-alibaba-qwen-2026">Apple Intelligence Clears China With Alibaba's Qwen</a></li>
<li><a href="https://www.digitaltrends.com/phones/china-approves-apple-intelligence-for-iphones-with-alibaba-baidu-emerging-as-partners/">China approves Apple Intelligence for iPhones, with Alibaba ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple Intelligence</span> <span class="tag-badge">Apple</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">AI Regulation</span> <span class="tag-badge">China</span></p>

---

<a id="item-14"></a>

## [安靠科技据称考虑出售估值 15 亿美元的中国业务股份](https://www.bloomberg.com/news/articles/2026-08-11/amkor-is-said-to-explore-stake-sale-in-1-5-billion-china-unit) ⭐️ 8.0/10

Amkor Technology 已聘请顾问探索出售其中国业务的部分股份，估值可能在 10 亿至 15 亿美元之间。该公司可能保留少数股权，并加入了一长串重新评估其在华业务的跨国公司行列。 这一潜在的资产剥离计划突显了半导体行业内部持续的地缘政治紧张局势和供应链重组。作为全球第二大 OSAT 供应商，Amkor 在战略上逐步淡出中国市场的举动，发生在其刚刚与英伟达（Nvidia）达成 15 亿美元美国 AI 封装合作协议的几周后。 Amkor 于 2001 年在上海设立了封装厂，目前正面临着来自中国本土 OSAT 供应商的激烈价格竞争。与此同时，公司正在亚利桑那州扩建其先进封装产能，以履行与英伟达达成的、用于下一代 AI 基础设施的多年期预付款协议。

telegram · zaihuapd · 8月11日 07:21

**背景**: OSAT 即外包半导体封装和测试，是芯片供应链中的关键环节，主要负责将制造好的晶圆进行封装保护和功能测试。安靠（Amkor）是全球第二大 OSAT 市场参与者，仅次于日月光科技（ASE Technology）。先进封装对于 AI 芯片的战略意义日益凸显，因为它能够实现组件间更紧密的集成，从而提升性能和能源效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://2743.com/baike/osat">OSAT - 外 包 半 导 体 封 装 和 测 试 ，Foundry公司IC产品 封 装 和 测 试</a></li>
<li><a href="https://ir.amkor.com/news-releases/news-release-details/amkor-technology-announces-strategic-partnership-nvidia-expand">Amkor Technology Announces Strategic Partnership with NVIDIA to Expand Advanced Packaging and Test for Next-Generation AI Infrastructure | Amkor Technology</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Mergers & Acquisitions</span> <span class="tag-badge">OSAT</span></p>

---

<a id="item-15"></a>

## [Meta 切断与 Manus 数据联系，推进 20 亿美元收购案拆分](https://t.me/zaihuapd/43122) ⭐️ 8.0/10

Meta 已从本月起切断与中国 AI 公司 Manus 的数据联系，禁止后者访问其内部系统，Meta 员工也不得再使用 Manus 工具。公司内部备忘录要求将现有 Manus 项目迁移到 Meta 平台，不再启动新的合作项目。 这标志着 Meta 史上第三大并购案正在实质性拆解，此前中国国家发改委外商投资安全审查办公室于 2026 年 4 月以国家安全为由否决了这笔 20 亿美元的交易。此事凸显地缘政治监管壁垒正对跨境 AI 并购产生决定性影响，中国明确封堵了'境内研发→境外换壳→外资收购'的路径。 据报道，Manus 创始人肖弘正在寻求约 10 亿美元的融资以从 Meta 手中回购公司。此次分离涉及全面技术脱钩——不得再启动任何基于 Manus 的新项目，所有在研工作须迁移至 Meta 自有基础设施。

telegram · zaihuapd · 8月11日 14:14

**背景**: Manus AI 是由蝴蝶效应公司（即北京红色蝴蝶科技有限公司）开发的自主 AI 智能体产品，创始人为 1992 年出生、毕业于华中科技大学的肖弘。该公司因定位为可独立执行复杂任务的完全自主智能体而声名鹊起，在第 1 级基础问题解决能力测试中得分 86.5%，超越了 OpenAI 的 Deep Research 模型。这笔由 Meta CEO 扎克伯格亲自推动、估值超 20 亿美元的收购案，于 2026 年 4 月被中国监管机构否决。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/2035770677135938356">被监管否决收购后，Manus及核心团队现状 - 知乎</a></li>
<li><a href="https://news.qq.com/rain/a/20260428A05ZUL00">20亿美元白花了？Meta收购Manus被中方叫停，拆解AI收购“反转”全过程</a></li>
<li><a href="https://www.guancha.cn/economy/2026_01_07_803031.shtml">违反技术出口管制？Meta收购Manus案或生变数</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Manus</span> <span class="tag-badge">收购案</span> <span class="tag-badge">AI监管</span> <span class="tag-badge">行业动态</span></p>

---

<a id="item-16"></a>

## [英伟达宣布创纪录的 5000 亿美元表外 SPV 交易以资助 AI 基建](https://www.zerohedge.com/markets/nvidia-set-reveal-record-500-billion-balance-sheet-spv-deal-fund-worlds-biggest-circle-jerk) ⭐️ 8.0/10

英伟达已确认与华尔街大型金融机构合作，完成了一笔创纪录的 5000 亿美元表外特殊目的载体（SPV）交易，用于为全球 AI 基础设施项目提供资金。这种表外结构确保了用于 AI 基础设施和算力采购的巨额债务和杠杆不会体现在英伟达自身的财务报表上。 这一前所未有的金融操作引发了市场争议，因为该模式被批评为“循环融资”——资金流转后助推英伟达自家芯片销量并放大营收，同时将杠杆和风险转移到表外。这引发了市场对 AI 赛道隐藏债务泡沫的严重担忧，给更广泛的科技和金融市场带来了潜在的系统风险。 通过利用 SPV 结构，债务义务在法律上与英伟达的主要资产负债表保持隔离，从而合法地优化了其财务报表。然而，批评者认为这掩盖了真实的财务风险，因为资本最终通过客户购买芯片回流到英伟达，形成了一个高杠杆的反馈循环。

telegram · Marcoview666 · 8月11日 00:49

**背景**: 表外融资是一种会计操作，通过对特定资产或负债进行结构化处理，使其不显示在公司的主要资产负债表上，通常使用特殊目的实体（SPV）来隔离债务。在 AI 行业中，出现了一种“循环融资”模式，即像英伟达这样的主要供应商向 AI 公司大量投资，而这些公司随后使用这笔资金购买供应商的产品。这种合法但备受争议的做法优化了供应商的财务报表，同时推动了基础设施的快速扩张，让人联想到互联网泡沫时期过度的金融工程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tmtpost.com/7778536.html">AI巨头们 的 万亿美元债务去哪了？ -钛媒 体 官方网站</a></li>
<li><a href="https://m.nbd.com.cn/articles/2025-10-11/4087026.html">OpenAI万亿美元“豪赌”算力，巨头“ 循 环 融 资 ”拉响预警， AI ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Finance</span> <span class="tag-badge">SPV</span> <span class="tag-badge">Market Risk</span></p>

---