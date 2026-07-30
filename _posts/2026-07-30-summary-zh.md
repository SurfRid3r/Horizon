---
layout: default
title: "Horizon Summary: 2026-07-30 (ZH)"
date: 2026-07-30
lang: zh
---

> 从 64 条内容中筛选出 14 条重要资讯。

---

1. [VMware vCenter 曝两个严重漏洞，可绕过认证并远程执行代码](#item-1) ⭐️ 10.0/10
2. [CVE-2026-66066：Rails Active Storage 严重预认证 RCE 漏洞](#item-2) ⭐️ 9.5/10
3. [谷歌 DeepMind 推出 Gemini Robotics 2，实现机器人全身智能](#item-3) ⭐️ 9.0/10
4. [OpenAI GPT-5.6 Luna 模型成本降低 80%](#item-4) ⭐️ 9.0/10
5. [GitHub 堆叠式拉取请求现已进入公开预览阶段](#item-5) ⭐️ 9.0/10
6. [CosmosEscape 漏洞可使 Azure Cosmos DB 遭到全面接管](#item-6) ⭐️ 9.0/10
7. [俄罗斯指控 Telegram 创始人杜罗夫协助恐怖活动并发出通缉令](#item-7) ⭐️ 9.0/10
8. [Anthropic AI 发现 NIST 后量子候选算法 HAWK 严重弱点](#item-8) ⭐️ 9.0/10
9. [Google DeepMind 解散 AlphaFold 团队，核心成员转投 Anthropic](#item-9) ⭐️ 9.0/10
10. [Mandiant 与 GTIG 发布供应链攻击缓解指南](#item-10) ⭐️ 8.0/10
11. [Cloudflare 将 cdnjs 大规模迁移至其开发者平台](#item-11) ⭐️ 8.0/10
12. [Metasploit Framework 6.5 发布，新增 Malleable C2 与 MCP Server](#item-12) ⭐️ 8.0/10
13. [中文威胁行为者利用 AI 模型进行自主网络攻击](#item-13) ⭐️ 8.0/10
14. [欧盟启动 AI 超级工厂招标 拟撬动约 300 亿欧元投资](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [VMware vCenter 曝两个严重漏洞，可绕过认证并远程执行代码](https://www.rapid7.com/blog/post/etr-critical-vmware-vcenter-vulnerabilities-allow-authentication-bypass-and-remote-code-execution-cve-2026-59309-cve-2026-59310) ⭐️ 10.0/10

2026 年 7 月 29 日，Broadcom 发布了安全公告 VMSA-2026-0006，披露了 VMware vCenter Server 中的两个严重漏洞：CVE-2026-59309（VMware Directory Service 的认证绕过漏洞）和 CVE-2026-59310（Syslog 服务器的目录遍历漏洞，可导致远程代码执行），两者的 CVSSv3.1 评分均为 9.8。 这些漏洞影响 VMware vCenter Server——企业虚拟化基础架构的集中管理平台，一旦被成功利用，攻击者可控制包括 ESXi 主机和虚拟机在内的整个虚拟化环境。由于两个漏洞均可被拥有 vCenter 服务网络访问权限的未认证攻击者利用，它们对全球企业数据中心构成了严重威胁。 CVE-2026-59309 针对 VMware Directory Service 的认证机制，而 CVE-2026-59310 则利用 vCenter Syslog 服务器的目录遍历漏洞实现任意代码执行。截至发布时，尚无已知的公开概念验证代码或野外主动利用证据，但 vCenter Server 此前已多次出现在 CISA 的已知被利用漏洞（KEV）列表中。

rss · Rapid7 Cybersecurity Blog · 7月30日 10:35

**背景**: VMware vCenter Server 是 VMware vSphere 环境的集中管理工具，使管理员能够从单一控制平面管理 ESXi 主机、虚拟机、资源分配和可用性。CVSS（通用漏洞评分系统）v3.1 是评估软件漏洞严重程度的行业标准，分数范围为 0 至 10；9.8 分被归类为"严重"，代表最高级别的威胁。Broadcom 于 2023 年收购了 VMware，此后负责发布 VMware 产品安全公告（VMSA）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/VCenter">vCenter - Wikipedia</a></li>
<li><a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator">NVD - CVSS v3 Calculator</a></li>
<li><a href="https://blogs.vmware.com/cloud-foundation/2024/09/17/vmsa-2024-0019-questions-answers/">VMSA -2024-0019: Questions & Answers - VMware Cloud Foundation...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">vmware</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-2"></a>

## [CVE-2026-66066：Rails Active Storage 严重预认证 RCE 漏洞](https://www.akamai.com/blog/security-research/2026/jul/rails-active-storage-rce-cve-2026-66066) ⭐️ 9.5/10

2026 年 7 月 29 日，Ruby on Rails 披露了 CVE-2026-66066（CVSSv4 评分 9.5），这是 Active Storage 使用 libvips 库进行图像处理时存在的一个严重预认证漏洞，允许未经认证的攻击者读取任意文件并可能实现远程代码执行。Ethiack 和 GMO Flatt Security 独立报告了该漏洞，概念验证代码的详细信息将推迟至 2026 年 8 月 28 日披露。 Ruby on Rails 是最广泛部署的 Web 框架之一，而自 Rails 7.0 起 libvips 已成为 Active Storage 的默认变体处理器，这意味着大量接受图像上传的生产环境应用都可能受到影响。由于该漏洞无需认证即可利用，且可能升级为完整的远程代码执行，整个 Rails 生态系统需要在常规补丁周期之外进行紧急修复。 根本原因是 Active Storage 未禁用 libvips 中标记为"未模糊测试"或"不受信任"的不安全操作，这些操作不适用于处理不受信任的内容；值得注意的是，甚至不需要生成图像变体，应用程序就可能受到影响。使用 ImageMagick 而非 libvips 的应用程序不受此攻击向量的影响，截至 2026 年 7 月 30 日尚未观察到野外利用。

rss · akamai Blog · 7月30日 08:00

**背景**: Active Storage 是 Rails 内置的文件上传框架，支持将文件上传至 Amazon S3 和 Google Cloud Storage 等云存储服务。它可以使用 libvips 或 ImageMagick 作为后端处理器，将上传的图像转换为变体（例如缩放后的缩略图）。从 Rails 7.0 开始，libvips 凭借其卓越的处理速度和更低的内存占用成为默认变体处理器。预认证 RCE 漏洞尤其严重，因为攻击者无需任何有效的登录凭据即可在服务器上执行任意代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://guides.rubyonrails.org/active_storage_overview.html">Active Storage Overview — Ruby on Rails Guides</a></li>
<li><a href="https://www.libvips.org/">A fast image processing library with low memory needs.</a></li>
<li><a href="https://medium.com/@instatunnel/the-beyondtrust-breakout-why-pre-auth-rce-remains-2025s-ransomware-holy-grail-16c67f35d5bf">The BeyondTrust Breakout: Why Pre - Auth RCE Remains... | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Ruby on Rails</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-3"></a>

## [谷歌 DeepMind 推出 Gemini Robotics 2，实现机器人全身智能](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/) ⭐️ 9.0/10

谷歌 DeepMind 推出了 Gemini Robotics 2，这是一个旨在提供适应性强的全身控制、高级灵巧性和多机器人协作的全新智能层。该系统作为基于 Gemini 大语言模型的高级大脑，使物理机器人能够更好地感知环境并规划复杂的多步骤任务。 这一发展标志着基础模型从数字环境向物理机器人领域扩展迈出了重要一步，可能会加速真正自主机器的开发。如果其进步速度能与基于文本的模型相媲美，这种全身智能将解锁跨多个行业的大规模现实应用。 Gemini Robotics 模型是专为机器人技术定制的视觉-语言-动作（VLA）系统，允许各种形状和大小的机器与人类互动并使用工具。目前对这些模型的访问权限仅限于受信任的测试人员，包括 Boston Dynamics 和 Agility Robotics 等主要行业参与者。

hackernews · ai2027 · 7月30日 15:15 · [社区讨论](https://news.ycombinator.com/item?id=49111237)

**背景**: Gemini Robotics 是由谷歌 DeepMind 开发的高级视觉-语言-动作模型，旨在作为物理机器人的具身推理（ER）系统。它基于 Gemini 2.0 大语言模型构建，能够处理视觉和语言输入以生成物理动作。在此次公告之前，DeepMind 已经发布了早期版本，如 Gemini Robotics-ER 以及针对机器人硬件本地执行进行优化的端侧变体。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/">Gemini Robotics 2 brings whole body intelligence to robots</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_Robotics">Gemini Robotics</a></li>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/">Gemini Robotics ER 2</a></li>

</ul>
</details>

**社区讨论**: 社区对谷歌广泛的 AI 研究范围印象深刻，但仍对当前的硬件限制持高度怀疑态度，指出机器人动作缓慢且缺乏流畅性。评论者就该技术在日常任务中的实际就绪程度进行了辩论，一些人将其与早期基于文本的 LLM 令人惊讶的快速改进相提并论，而另一些人则认为执行器创新的缓慢仍是一个巨大的瓶颈。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Robotics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">DeepMind</span> <span class="tag-badge">Gemini</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-4"></a>

## [OpenAI GPT-5.6 Luna 模型成本降低 80%](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) ⭐️ 9.0/10

OpenAI 发布了 GPT-5.6，其中 Luna 模型的成本降低了 80%，价格降至原来的五分之一。此次降本主要得益于内核级优化，使端到端服务成本下降 20%，同时 token 生成效率提升超过 15%。 生产级模型降价 80% 从根本上改变了 AI 应用开发的经济模型，使得大规模并行代理工作流等此前因成本过高而不可行的用例成为现实。这也标志着行业近期价格上涨趋势的逆转，对竞争模型供应商形成了巨大的竞争压力。 GPT-5.6 Luna 专为成本敏感型、高吞吐量工作负载设计，拥有 105 万 token 的上下文窗口，大致对应早期 GPT-5 系列中的 nano 层级模型。如此大幅度的成本降低似乎源于服务基础设施层面的复合工程优化，而非模型架构的根本性变化，这意味着类似的优化可能适用于更广泛的 GPT-5.6 产品线。

hackernews · tedsanders · 7月30日 17:15 · [社区讨论](https://news.ycombinator.com/item?id=49112867)

**背景**: GPT-5.6 是 OpenAI 分层模型产品线的一部分，包括 Luna（最快且最便宜，类似于 nano 层级）、Sol（中端）和 Terra（最强大）。在此公告之前，AI 行业经历了一段模型服务成本持续上升的时期，许多观察者预计随着模型能力趋于平台期，只能实现 5-10% 的渐进式改进。内核优化是指对执行张量运算的底层 GPU 计算函数进行改进——通过融合操作、减少内存瓶颈和提高吞吐量，这些优化可以在不改变模型本身的情况下显著降低每次推理的计算开销。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.openai.com/api/docs/models/gpt-5.6-luna">GPT-5.6 Luna Model | OpenAI API</a></li>
<li><a href="https://www.datacamp.com/blog/gpt-5-6-sol-luna-terra">GPT-5.6 Sol, Terra, and Luna : OpenAI 's Next-Gen Model ... | DataCamp</a></li>
<li><a href="https://www.aatrax.com/llm-latency-explained-inference-bottlenecks-and-speed-optimization/">LLM Latency Explained: Inference Bottlenecks and Speed Optimization</a></li>

</ul>
</details>

**社区讨论**: 评论者对此次降本幅度普遍表示震惊，许多人指出这远超他们对渐进式改进的预期。simonw 提出了一个引人注目的观点：即使服务成本仅降低 20%，也可能意味着整个行业每月节省数十亿美元；其他评论者则强调了实际影响——将这一变化比作拨号上网到宽带的飞跃，并指出运行 50 个并行代理在经济上已变得可行。部分评论者还将此置于包括 Kimi K3 和 GLM 5.2 在内的更广泛竞争格局中进行分析，认为行业可能正重新进入激烈的价格竞争阶段。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Cost Optimization</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-5"></a>

## [GitHub 堆叠式拉取请求现已进入公开预览阶段](https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/) ⭐️ 9.0/10

GitHub 已正式推出堆叠式拉取请求的公开预览版，允许开发者将相互依赖的代码更改层层堆叠。这引入了一种重大的工作流范式转变，用户可以通过平台界面和新的命令行工具来使用该功能。 对堆叠式 PR 的原生支持是 GitHub 历史上规模最大的平台级变更之一，从根本上改变了开发者协作开发复杂功能的方式。它将这一呼声极高且高效的工作流推广给全球庞大的用户群体，通过使代码审查更快、更易管理，从而有望提升软件质量。 此次发布的规模极其庞大，几乎涵盖了从 Actions 到安全在内的所有 GitHub 服务。然而，早期用户报告称在预览阶段存在重大限制，值得注意的是，在许多情况下合并整个堆叠的功能目前是损坏的，尤其是在结合使用 squash and merge 和强制审查时。

hackernews · tomzorz · 7月30日 16:26 · [社区讨论](https://news.ycombinator.com/item?id=49112232)

**背景**: 堆叠式拉取请求是指将一个大型功能拆分成一系列小的、相互依赖的更改并层层堆叠，而不是提交一个庞大的拉取请求。这种工作流允许开发者保持开发节奏，并对小而连续的更改获得快速反馈，从而帮助解决代码审查的瓶颈问题。它通过避免让审查者被庞大的单一差异所淹没，区别于传统的“功能分支工作流”。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.graphite.com/guides/stacked-diffs">Stacked diffs</a></li>
<li><a href="https://awesomecodereviews.netlify.app/best-practices/stacked-prs/">Stacked Pull Requests - The Complete Guide for Developers</a></li>
<li><a href="https://www.git-tower.com/blog/stacked-prs">Understanding the Stacked Pull Requests Workflow | Tower Blog</a></li>

</ul>
</details>

**社区讨论**: 社区普遍认为这是该平台的一项具有里程碑意义的积极转变，知名开发者指出它将向无数新用户展示更优越的工作流。然而，用户对当前的错误（例如堆叠合并功能损坏）表示了强烈的不满。此外，一些开发者质疑堆叠式 PR 是否真的优于精心整理的提交集，尤其是在行业正努力适应对大型 AI 生成代码进行审查的背景下。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">github</span> <span class="tag-badge">developer-tools</span> <span class="tag-badge">workflow</span> <span class="tag-badge">pull-requests</span> <span class="tag-badge">devops</span></p>

---

<a id="item-6"></a>

## [CosmosEscape 漏洞可使 Azure Cosmos DB 遭到全面接管](https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db) ⭐️ 9.0/10

Wiz 的安全研究人员发现了名为“CosmosEscape”的严重漏洞链，该漏洞存在于微软的 Azure Cosmos DB 中，允许攻击者对所有客户数据库进行未经授权的完全读写访问。 这一漏洞对企业云安全构成了巨大威胁，因为 Cosmos DB 被广泛用于存储敏感的全球分布式数据。如果被恶意利用，攻击者可以跨多个租户访问、修改或删除关键业务数据，从而导致毁灭性的数据泄露。 该漏洞链专门针对 Azure Cosmos DB 中 Gremlin API 的实现。此缺陷可能引发跨租户攻击，使攻击者能够绕过隔离边界，进而破坏托管在该服务上的几乎所有数据库。

rss · Wiz Blog | RSS feed · 7月30日 12:00

**背景**: Azure Cosmos DB 是微软提供的全球分布式、多模型 NoSQL 和向量数据库服务，旨在提供高可用性和低延迟访问。它支持多种 API，包括用于图形数据库功能的 Gremlin API，允许开发人员使用不同的范式与数据进行交互。由于它是一项托管云服务，在不同客户（租户）的数据之间保持严格的隔离对于整体安全性至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db">CosmosEscape : Taking Over Every Azure Cosmos DB | Wiz Blog</a></li>
<li><a href="https://en.wikipedia.org/wiki/Azure_Cosmos_DB">Azure Cosmos DB</a></li>
<li><a href="https://cybersecuritynews.com/cosmosescape-vulnerability/">New CosmosEscape Vulnerability Allowed Attackers to Take Over...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cloud-security</span> <span class="tag-badge">azure</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">cosmos-db</span> <span class="tag-badge">data-breach</span></p>

---

<a id="item-7"></a>

## [俄罗斯指控 Telegram 创始人杜罗夫协助恐怖活动并发出通缉令](https://t.me/zaihuapd/42859) ⭐️ 9.0/10

7 月 29 日，俄罗斯联邦安全局（FSB）根据《俄罗斯刑法典》第 205.1 条第 1.1 款（协助恐怖活动）对 Telegram 创始人帕维尔·杜罗夫提起刑事指控，并将其列入国际通缉名单。 这一行动凸显了科技平台在内容审核和配合政府请求方面面临的巨大压力，尤其是在政治敏感地区。Telegram 是全球数百万用户的重要通讯工具，这使得杜罗夫的法律地位成为数字隐私、言论自由以及平台未来的关键问题。 FSB 声称，Telegram 管理层拒绝删除被乌克兰情报机构及恐怖和极端主义组织用于在俄境内协调破坏、恐怖袭击和网络诈骗的频道、群组和机器人。该机构称，这种拒绝导致了包括妇女儿童在内的多人伤亡以及数十亿卢布的损失。

telegram · zaihuapd · 7月30日 03:45

**背景**: Telegram 是一款广泛使用的即时通讯应用，以其速度、安全功能以及对大型公开频道和机器人的支持而闻名。其创始人帕维尔·杜罗夫此前曾创立俄罗斯社交网络 VKontakte（VK），后因在审查和用户数据问题上与政府发生冲突而于 2014 年离开俄罗斯。此后，杜罗夫一直在海外运营 Telegram，将其定位为言论自由和隐私的捍卫者，这导致其与要求删除内容或获取加密数据的各国当局不断发生冲突。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Pavel Durov</span> <span class="tag-badge">Censorship</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Tech News</span></p>

---

<a id="item-8"></a>

## [Anthropic AI 发现 NIST 后量子候选算法 HAWK 严重弱点](https://startupfortune.com/claude-mythos-broke-hawk-and-the-nist-post-quantum-timeline-may-not-survive-it/) ⭐️ 9.0/10

Anthropic 的 Claude Mythos Preview 模型在约 60 小时内发现了 NIST 后量子密码候选算法 HAWK 的严重弱点，而人类专家此前两年未能发现。该攻击将 HAWK-256 的有效密钥强度从 2^64 降至 2^38，耗费约 10 万美元 API 费用。 这展示了 AI 作为密码分析的强大新工具，能够远超人类密码学家的速度发现漏洞，可能重塑后量子算法的评估和标准化方式。这也为 NIST 后量子标准化进程和联邦机构 2030 年前迁移至抗量子密码体系的要求增添了紧迫性。 该攻击并非在多项式时间内运行，意味着更大的密钥尺寸仍能抵抗此方法，HAWK 也尚未被公开撤回。研究还包括对 7 轮 AES-128 的改进攻击，但完整标准为 10 轮，因此生产系统不受影响。

telegram · zaihuapd · 7月30日 05:47

**背景**: 后量子密码（PQC）是指旨在抵御量子计算机攻击的密码算法，量子计算机可利用 Shor 算法破解当今许多公钥密码系统。NIST 一直在举办多年竞赛以标准化 PQC 算法，HAWK 已通过两轮评估。2026 年 6 月的白宫行政令（EO 14409）要求美国联邦机构在 2030 年前完成加密迁移，2031 年前完成数字签名迁移。密码敏捷性——即快速切换不同密码原语的能力——被认为是应对这一过渡的关键。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arstechnica.com/security/2026/07/mythos-uncovers-crypto-weaknesses-that-went-unknown-for-years/">Mythos attack on 3rd-round PQC algorithm candidate... - Ars Technica</a></li>
<li><a href="https://www.techtimes.com/articles/321876/20260728/ai-cracks-post-quantum-cipher-60-hours-after-two-years-human-review-failed.htm">AI Cracks Post - Quantum Cipher in 60 Hours After Two Years of...</a></li>
<li><a href="https://www.techtimes.com/articles/319080/20260625/post-quantum-encryption-cloudflare-moves-2029-federal-2030-mandate-reaches-every-vendor.htm">Post - Quantum Encryption: Cloudflare Moves to 2029 as Federal 2030 ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Post-Quantum Cryptography</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">NIST</span></p>

---

<a id="item-9"></a>

## [Google DeepMind 解散 AlphaFold 团队，核心成员转投 Anthropic](https://www.ft.com/content/61b2953d-ee0d-45de-af6e-a9c1cf524b33?syn-25a6b1a6=1) ⭐️ 9.0/10

Google DeepMind 已解散曾获诺贝尔奖的 AlphaFold 团队，这是其全面调整研究战略的一部分。过去一年中，AlphaFold 论文的多数原作者已被调离原岗位，近四分之一作者已完全离开公司，其中核心成员 John Jumper、Jonas Adler 和 Alexander Pritzel 跳槽至竞争对手 Anthropic。 解散 AI 领域最负盛名的科学团队之一，标志着 DeepMind 的战略重心从专业化科学 AI 转向 Gemini 大语言模型等更具商业价值的项目。核心人才流失至 Anthropic 也凸显了前沿实验室之间对顶尖 AI 研究人员的激烈争夺，OpenAI 研究主管 Mark Chen 此前评论称，AI 研究人员希望在前沿实验室工作，而非疲于追赶。 剩余的 AlphaFold 团队成员已被内部转岗至 Gemini 大语言模型、酶设计、核聚变及基因组学等项目，部分人转入 Alphabet 旗下专注于 AI 驱动药物研发的 Isomorphic Labs。值得注意的是，尽管团队解散，AlphaFold 的技术和基础设施仍在使用，该项目的遗产通过 Isomorphic Labs 的药物研发工作得以延续。

telegram · zaihuapd · 7月30日 07:45

**背景**: AlphaFold 是由 Google DeepMind 开发的 AI 系统，能够高精度预测蛋白质的三维结构，这一突破性成果为团队赢得了诺贝尔奖，并彻底改变了计算生物学领域。Isomorphic Labs 于 2021 年从 DeepMind 剥离，隶属于 Alphabet，利用 AlphaFold 技术重新构想药物发现过程。Anthropic 是一家领先的 AI 安全公司，在构建前沿 AI 模型的竞争中与 DeepMind 和 OpenAI 直接竞争，因此招揽 AlphaFold 核心研究人员是一次引人注目的人才收获。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/science/alphafold/">AlphaFold — Google DeepMind</a></li>
<li><a href="https://en.wikipedia.org/wiki/Isomorphic_Labs">Isomorphic Labs</a></li>
<li><a href="https://www.isomorphiclabs.com/">Reimagining Drug Discovery Process with AI - Isomorphic Labs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">AlphaFold</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-10"></a>

## [Mandiant 与 GTIG 发布供应链攻击缓解指南](https://cloud.google.com/blog/topics/threat-intelligence/mitigation-guidance-for-supply-chain-compromise/) ⭐️ 8.0/10

Google 威胁情报小组（GTIG）与 Mandiant 发布了针对软件供应链攻击的全新缓解与加固建议，特别关注 2025 年至 2026 年初期间观察到的开源代码库攻击日益增长的趋势。该指南融合了在支持客户应对近期涉及篡改开源软件包、蠕虫和迭代入侵的大规模攻击活动中所获得的直接经验。 开源供应链攻击为攻击者提供了与传统攻击相同的效率和规模，但执行所需的资源却少得多，这使其成为威胁行为者越来越青睐的战术。GTIG 高度确信，大规模开源供应链攻击活动的增长代表了这一威胁向量的显著扩展，并将持续到 2026 年及以后。 该指南专门针对 MITRE ATT&CK 技术 T1195.001（入侵软件依赖项和开发工具），并指出虽然开源供应链攻击更容易发起，但也更容易暴露——恶意软件包通常比传统入侵更快被发现和公开。建议来源于真实的事件响应经验，包括涉及蠕虫和迭代入侵技术的攻击活动。

rss · Google Threat Intelligence · 7月30日 14:00

**背景**: 网络安全行业对供应链攻击的理解受到了几起标志性事件的影响，包括 2020 年俄罗斯间谍组织 ICE RELIC（APT29）对 SolarWinds 的攻击——该攻击通过被入侵的软件更新部署了 SUNBURST 后门，以及 2023 年朝鲜威胁行为者 UNC4736 对 3CX 的入侵。这些传统的供应链攻击需要大量的规划和资源，针对特定的商业软件供应商。然而，威胁形势已转向开源代码库，攻击者可以以相对较小的代价将恶意代码注入广泛使用的软件包中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://breachnews.com/threat-actors/unc4736/">UNC 4736 : Threat Actor Profile | BreachNews</a></li>
<li><a href="https://www.infosecinstitute.com/resources/malware-analysis/sunburst-backdoor-malware-what-it-is-how-it-works-and-how-to-prevent-it-malware-spotlight/">SUNBURST backdoor malware : What it is, how it works, and how to...</a></li>
<li><a href="https://strobes.co/vi/threat-actors/UNC4736/">UNC 4736 - Threat Actor Profile & Exploited CVEs | Strobes VI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Supply Chain Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Mandiant</span> <span class="tag-badge">Risk Mitigation</span></p>

---

<a id="item-11"></a>

## [Cloudflare 将 cdnjs 大规模迁移至其开发者平台](https://blog.cloudflare.com/cdnjs-dev-platform-migration/) ⭐️ 8.0/10

Cloudflare 已将日均处理 90 亿次请求的最繁忙开源 CDN 之一 cdnjs，完整迁移至自家的开发者平台。在此过程中，Cloudflare 将 Workflows 和 Workers 产品的能力和上限推向了新的高度，惠及整个平台生态系统。 此次迁移是一个有力的现实案例，证明无服务器和边缘计算架构能够可靠承载互联网级、关键业务规模的流量。迁移过程中对 Workflows 和 Workers 所做的改进，将直接惠及所有在 Cloudflare 平台上构建应用的开发者。 cdnjs 每月处理超过 2000 亿次请求，被超过 12.5% 的网站所信赖，是测试 Cloudflare 基础设施的绝佳压力测试对象。此次迁移中使用的 Cloudflare Workflows 是基于 Workers 构建的持久化执行引擎，允许开发者构建能够自动重试、持久化状态并长时间运行的多步骤应用程序。

rss · The Cloudflare Blog · 7月30日 13:00

**背景**: cdnjs 是一个免费的开源 CDN，托管流行的 JavaScript 和 CSS 库，将其公开存储在 GitHub 上，并服务于全球开发者。Cloudflare Workers 是一个无服务器平台，允许开发者在 Cloud 全球网络的边缘运行代码，而 Workflows 是基于 Workers 构建的较新执行引擎，用于持久化的多步骤应用。"Dogfooding" 指的是公司使用自家产品来运行其服务，此案例中展示了 Cloudflare 对自身平台的信心，将关键基础设施运行于其上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cdnjs.com/">cdnjs - The #1 free and open source CDN built to make life easier for...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cdnjs">cdnjs - Wikipedia</a></li>
<li><a href="https://developers.cloudflare.com/workflows/">Overview · Cloudflare Workflows docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cloudflare</span> <span class="tag-badge">edge-computing</span> <span class="tag-badge">cdn</span> <span class="tag-badge">serverless</span> <span class="tag-badge">infrastructure</span></p>

---

<a id="item-12"></a>

## [Metasploit Framework 6.5 发布，新增 Malleable C2 与 MCP Server](https://www.rapid7.com/blog/post/pt-metasploit-framework-6-5-released) ⭐️ 8.0/10

Metasploit Framework 6.5 版本已正式发布，在过去两年中新增了 422 个模块，并为所有当前的 Meterpreter 有效载荷（包括 Windows、Java、Python、PHP 和 Linux）引入了对 HTTP(S) Malleable C2 配置文件的支持。该版本还首次推出了 Metasploit MCP Server（msfmcpd），这是一个中间件层，允许 Claude 或 Cursor 等 AI 应用通过 16 个标准化工具与 Metasploit 进行交互。 Malleable C2 配置文件支持是一项长期被请求的功能，极大地增强了红队成员将 Meterpreter 流量伪装为合法网络活动的能力，从而提升了对网络检测系统的规避效果。MCP Server 的引入将 Metasploit 与快速发展的 AI 辅助安全工作流生态系统连接起来，为下一代自动化渗透测试奠定了基础。 用户通过将 MALLEABLEC2 选项设置为磁盘上的配置文件来启用 Malleable C2，其配置语法与 Cobalt Strike 等其他工具兼容，可以直接加载公开可用的配置文件。由于体积限制，分阶段载荷只有在第二阶段加载完成后才会应用 Malleable C2 配置，而无阶段载荷则从一开始就立即应用该配置。

rss · Rapid7 Cybersecurity Blog · 7月30日 14:29

**背景**: Malleable C2 是一项最初由 Cobalt Strike 推广的技术，允许操作者自定义命令与控制（C2）网络流量的形态和特征，使其看起来像是合法的网络浏览活动。Meterpreter 是 Metasploit 中最受欢迎的有效载荷类型，提供了一个可扩展的内存驻留代理，用于后渗透操作。分阶段载荷将代理分为两部分交付——一个小的初始加载器负责下载完整载荷——而无阶段载荷则将所有内容打包到一个独立的可执行文件中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnblogs.com/zpchcbd/p/12466380.html">Malleable C 2 - zpchcbd - 博客园</a></li>
<li><a href="https://docs.rapid7.com/metasploit/working-with-payloads/">Working with Payloads | Metasploit Documentation</a></li>
<li><a href="https://dev.to/vibhav_chennamadhava_a887/metasploit-deep-dive-staged-vs-stageless-payloads-a-practical-lab-1pa7">Metasploit Deep Dive: Staged vs . Stageless Payloads — A Practical...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Metasploit</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Red Team</span> <span class="tag-badge">Security Tools</span></p>

---

<a id="item-13"></a>

## [中文威胁行为者利用 AI 模型进行自主网络攻击](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/) ⭐️ 8.0/10

Palo Alto Networks Unit 42 揭露了一起网络攻击活动，一名中文威胁行为者部署了自主 AI 模型来扫描和利用漏洞。该行为者将针对七个已知漏洞的 AI 驱动自主扫描与手动利用技术相结合，以入侵目标。 这一发展标志着恶意行为者对 AI 的使用取得了重大突破，从理论担忧转变为现实世界中的自主攻击活动。它迫使安全专业人员和组织调整其防御策略，以应对能够以机器速度和规模运作的 AI 增强型威胁。 该攻击活动的特征在于，一个自主 AI 代理与传统手动利用方法相结合，系统性地扫描了七个特定漏洞。这种 AI 自动化与人类指导的利用相结合的混合方法，使得威胁行为者能够同时提高攻击的速度和效率。

rss · Unit 42 · 7月30日 10:00

**背景**: Palo Alto Networks Unit 42 是一个领先的威胁情报和事件响应团队，积极研究新兴的网络安全威胁。网络安全中的自主 AI 涉及使用 AI 代理独立执行侦察、漏洞扫描和利用等任务，而无需持续的人类监督。使用 AI 来自动化这些任务是一个不断增长的趋势，攻防双方的安全团队都在探索其能力，以加速工作流程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/automating-penetration-testing-using-autonomous-ai-manjish-y0rie">Automating Penetration Testing Using Autonomous AI Agents</a></li>
<li><a href="https://unit42.paloaltonetworks.com/">Unit 42 - Latest Cybersecurity Research | Palo Alto Networks</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Autonomous AI</span> <span class="tag-badge">Vulnerability Exploitation</span></p>

---

<a id="item-14"></a>

## [欧盟启动 AI 超级工厂招标 拟撬动约 300 亿欧元投资](https://www.wsj.com/world/europe/eu-opens-call-for-creation-of-local-ai-gigafactories-c286213d) ⭐️ 8.0/10

欧盟委员会于周四正式启动 AI 超级工厂招标程序，计划在全欧范围内建设最多七座 AI 超级工厂，旨在撬动约 300 亿欧元（约 344 亿美元）的总投资。其中欧盟层面资金和参与成员国将共同出资 100 亿欧元，投标截止日期为 11 月 12 日，中标结果预计于 2027 年 7 月公布。 这一举措代表了欧盟通过大规模政府支持建设本土 AI 基础设施、缩小与美中在 AI 竞赛中差距的重大战略努力。投资规模表明欧盟已将 AI 算力视为对其经济和技术主权至关重要的战略优先事项。 招标将分建设选址和扩建两个阶段进行，中标项目须在签约后 18 个月内投入运营。每座超级工厂将配备超级计算机和数据中心，用于支持大规模 AI 训练和部署工作负载。

telegram · zaihuapd · 7月30日 11:50

**背景**: 欧盟一直在稳步推进其 AI 基础设施战略，最初宣布建设 AI 工厂的计划，随后将愿景扩展到计算能力更强的超级工厂。这些设施旨在为欧洲企业和研究人员提供尖端 AI 计算资源的访问渠道，减少对外国云服务提供商和 AI 公司的依赖。这一举措也契合欧盟在 全球技术竞争中加强自身地位的更广泛努力，目前美国和中国在 AI 模型开发和部署方面已取得领先优势。欧盟包括《人工智能法案》在内的监管路径，将通过这一产业投资形成互补，确保欧洲参与者能在治理和能力两个层面参与竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.dw.com/zh/出资100亿欧元欧盟委员会支持建七座ai超级工厂/a-78178987">出资100亿 欧 元！ 欧 盟 委员会支持建七座 AI 超 级 工 厂</a></li>
<li><a href="https://m.163.com/dy/article/JSQ4UC6905346RC6.html">【微特稿·投资与消费】 欧 盟 披露投建13家 AI 超 级 工 厂 细节_手机网易网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">欧盟政策</span> <span class="tag-badge">AI超级工厂</span> <span class="tag-badge">政府投资</span> <span class="tag-badge">科技竞争</span></p>

---