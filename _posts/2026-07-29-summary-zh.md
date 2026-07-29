---
layout: default
title: "Horizon Summary: 2026-07-29 (ZH)"
date: 2026-07-29
lang: zh
---

> 从 53 条内容中筛选出 11 条重要资讯。

---

1. [JetBrains TeamCity 本地版中发现严重的未经验证远程代码执行漏洞](#item-1) ⭐️ 10.0/10
2. [Mitchell Hashimoto 宣布成立 Superlogical，专注终端与智能体应用集成](#item-2) ⭐️ 9.0/10
3. [OpenAI 硬件路线图：AI 音箱与手机计划于 2027 年上市](#item-3) ⭐️ 9.0/10
4. [俄罗斯联邦安全局指控 Telegram 创始人杜罗夫协助恐怖活动](#item-4) ⭐️ 9.0/10
5. [TurboFieldfare：在 M 系列 Mac 上仅用 2GB 内存运行 Gemma 4 26B](#item-5) ⭐️ 8.0/10
6. [文档传播的 AI 蠕虫可通过 Copilot for Word 自我传播](#item-6) ⭐️ 8.0/10
7. [Dysphoria 僵尸网络感染超 20 万台设备，利用区块链隐藏 C2 服务器](#item-7) ⭐️ 8.0/10
8. [Claude 共享对话链接遭搜索引擎索引，引发严重隐私泄露](#item-8) ⭐️ 8.0/10
9. [英伟达通知 AIC 合作伙伴显卡涨价，代工厂暂停出货](#item-9) ⭐️ 8.0/10
10. [报告称 Hugging Face 被广泛用于生成深度伪造裸照](#item-10) ⭐️ 8.0/10
11. [英伟达股价与信用违约掉期走势出现前所未有的严重背离](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [JetBrains TeamCity 本地版中发现严重的未经验证远程代码执行漏洞](https://www.rapid7.com/blog/post/etr-cve-2026-63077-critical-unauthenticated-remote-code-execution-in-jetbrains-teamcity) ⭐️ 10.0/10

2026 年 7 月 27 日，JetBrains 披露了 CVE-2026-63077，这是一个 CVSS 评分高达 9.8 的严重漏洞，影响了所有版本的 TeamCity 本地版。这种未经身份验证的远程代码执行缺陷通过反序列化不受信任的数据来利用代理轮询协议。 此漏洞允许未经身份验证的远程攻击者绕过身份验证、执行任意操作系统命令、读取存储的凭据并破坏 CI/CD 流水线的完整性。由于 TeamCity 是一个广泛使用的 CI/CD 平台，成功的攻击将对软件供应链构成严重风险，需要立即采取缓解措施。 相关组织应紧急更新至修复版本（2025.11.7 或 2026.1.3），或者为 2017.1 及更高版本应用 JetBrains 的安全补丁插件。TeamCity 云版客户不受此影响，但管理员在优先考虑立即升级的同时，也应限制网络访问作为纵深防御措施。

rss · Rapid7 Cybersecurity Blog · 7月29日 16:16

**背景**: JetBrains TeamCity 是一个持续集成和持续部署（CI/CD）平台，可帮助自动化软件的构建、测试和部署过程。该服务器使用“代理轮询协议”与构建代理进行通信，即代理通过建立 HTTP(S) 连接来定期检查待处理的任务。不受信任数据的反序列化（CWE-502）是指应用程序在未进行适当验证的情况下，从恶意构造的输入中重建对象，通常会导致任意代码执行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html">Deserialization - OWASP Cheat Sheet Series</a></li>
<li><a href="https://www.jetbrains.com/help/teamcity/install-and-start-teamcity-agents.html">Install and Start TeamCity Agents | TeamCity On-Premises</a></li>
<li><a href="https://www.jetbrains.com/zh-cn/teamcity/features/build-automation/">构建自动化 – 功能 | JetBrains TeamCity</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">CVE</span> <span class="tag-badge">JetBrains TeamCity</span> <span class="tag-badge">RCE</span></p>

---

<a id="item-2"></a>

## [Mitchell Hashimoto 宣布成立 Superlogical，专注终端与智能体应用集成](https://www.superlogical.com/) ⭐️ 9.0/10

HashiCorp 联合创始人、Ghostty 终端模拟器的创造者 Mitchell Hashimoto 宣布成立 Superlogical，这是一家在 libghostty 基础上构建终端与智能体应用集成先进平台的新公司。团队已包含来自 HashiCorp、Vercel、Poolside 和 Heroku 的资深成员，目前正在积极招聘。 在 AI 编程智能体快速涌现但缺乏统一集成基础设施的当下，这一举措代表了对终端工作流未来的重大押注。通过基于开源的 libghostty 并承诺持续上游贡献，Superlogical 有望成为连接传统终端应用与现代智能体工作流的核心平台，可能重塑开发者与 AI 智能体的交互方式。 Ghostty 的所有权已移交给一家非营利组织，Superlogical 将使用与所有人相同的 MIT 许可的 libghostty 组件，并持续向上游贡献共享的终端功能。该公司的招聘页面本身就很有特色——通过 `ssh superlogical.jobs` 即可在终端中查看职位描述，充分体现了该平台的理念。

hackernews · yan · 7月29日 15:41 · [社区讨论](https://news.ycombinator.com/item?id=49098965)

**背景**: Ghostty 是由 Mitchell Hashimoto 创建的现代高速终端模拟器，而 libghostty 是其可嵌入库形式，旨在让任何应用都能嵌入一个功能完整的终端模拟器。Mitchell Hashimoto 作为 HashiCorp 的联合创始人在软件工程界享有盛誉，该公司打造了 Terraform、Vault 和 Consul 等知名工具。终端生态系统长期以来一直处于碎片化状态，各种终端协议和封装器需要单独支持，使得集成工作充满挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mitchellh.com/writing/superlogical">Superlogical – Mitchell Hashimoto</a></li>
<li><a href="https://mitchellh.com/writing/libghostty-is-coming">Libghostty Is Coming – Mitchell Hashimoto</a></li>
<li><a href="https://daily.dev/posts/mitchell-hashimoto-starts-superlogical-beginning-with-a-terminal-multiplexer-eaqqccwhc">Mitchell Hashimoto starts Superlogical, beginning with a...</a></li>

</ul>
</details>

**社区讨论**: 评论者将该项目类比为历史上的组件技术（如 COM/OLE/ActiveX），指出 Superlogical 旨在解决类似的集成问题，但面向的是现代终端和智能体场景。其开源治理模式——将 Ghostty 移交给非营利组织同时在之上构建 Superlogical——被广泛赞誉商业开源的典范。多位评论者还将其与新兴的智能体多路复用工具进行比较，并强调了集中化碎片化终端生态系统的潜在价值。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Development Tools</span> <span class="tag-badge">Terminal</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Mitchell Hashimoto</span></p>

---

<a id="item-3"></a>

## [OpenAI 硬件路线图：AI 音箱与手机计划于 2027 年上市](https://www.macrumors.com/2026/07/28/openai-first-devices/) ⭐️ 9.0/10

OpenAI 的硬件路线图逐渐清晰：与 Jony Ive 合作开发的无屏幕、由 ChatGPT 驱动的便携式 AI 智能音箱计划于 2027 年初上市，售价在 200 至 300 美元之间。此外，OpenAI 的 AI 手机量产时间已提前至 2027 年上半年，预计 2027 至 2028 年总出货量约为 3000 万台。 这标志着 OpenAI 向消费电子领域进行了大规模的战略扩张，可能会打破目前由苹果主导的后智能手机硬件市场格局。这也凸显了日益加剧的行业竞争，苹果针对 OpenAI 正在进行的商业机密诉讼就是明证。 这一硬件布局源于 OpenAI 以 65 亿美元收购 io Products，并招募了超 400 名前苹果员工。未来的远期路线图还包括智能眼镜、智能灯和耳机等产品，不过苹果于 7 月 10 日提起的涉嫌窃取商业机密的诉讼可能会对这些计划造成重大影响。

telegram · zaihuapd · 7月29日 04:13

**背景**: io Products 是一家由 Jony Ive 及其他前苹果高管于 2024 年创立的 AI 硬件公司，OpenAI 在 2025 年 5 月将其收购以主导自身的硬件开发。收购完成后，Jony Ive 及其设计公司 LoveFrom 继续保持独立，但承担了 OpenAI 旗下产品的深度设计和创意工作。苹果随后向联邦法院提起诉讼，指控 OpenAI 窃取商业机密并违约，以开发自己的消费级硬件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Io_(company)">io (company) - Wikipedia</a></li>
<li><a href="https://openai.com/sam-and-jony/">A letter from Sam & Jony - OpenAI</a></li>
<li><a href="https://www.lawnews.co.uk/sector-insights/legal-tech/the-apple-openai-trade-secrets-lawsuit-is-bigger-than-you-think-and-heres-why/">The Apple OpenAI Trade Secrets Lawsuit Is Bigger... - Law News</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Consumer Electronics</span> <span class="tag-badge">Jony Ive</span> <span class="tag-badge">Apple</span></p>

---

<a id="item-4"></a>

## [俄罗斯联邦安全局指控 Telegram 创始人杜罗夫协助恐怖活动](https://www.interfax.ru/russia/1106228) ⭐️ 9.0/10

7 月 29 日，俄罗斯联邦安全局（FSB）依据《刑法》第 205.1 条以协助恐怖活动罪对 Telegram 创始人帕维尔·杜罗夫提起刑事指控，并将其列入国际通缉名单。FSB 指控 Telegram 管理层拒绝删除被乌克兰情报机构及极端组织用于在俄境内策划破坏活动、恐怖袭击及网络诈骗的频道、群组和机器人。 这一举动凸显了国家情报机构与全球加密通信平台在内容审核、用户隐私和审查方面日益加剧的冲突。对一个拥有数亿全球用户的平台创始人发出国际通缉令，为各国政府如何通过法律手段追查拒绝审查要求的科技公司高管开创了重大先例。 指控具体指出 Telegram 拒绝遵守删除特定频道和机器人的要求，FSB 声称这些渠道被用于协助恐怖主义和网络诈骗。FSB 指控这种不合作行为导致了包括妇女儿童在内的多人伤亡，以及数十亿卢布的经济损失。

telegram · zaihuapd · 7月29日 05:56

**背景**: 联邦安全局（FSB）是俄罗斯的主要安全机构，也是苏联克格勃（KGB）的主要继承者，负责反间谍、反恐和国内安全事务。俄罗斯《刑法》第 205.1 条专门针对协助恐怖活动，包括公开为恐怖主义辩护或向恐怖组织提供资源。Telegram 是一款基于云的即时通讯应用，以其强大的加密技术和相对宽松的内容审核而闻名，这使其成为活动人士以及有争议的非法行为者的常用工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Federal_Security_Service">Federal Security Service - Wikipedia</a></li>
<li><a href="https://www.unodc.org/cld/en//legislation/rus/the_criminal_code_of_the_russian_federation_russianenglish/chapter_24/article_205.1_-_205.3/article_205.1_-_205.3.html?lng=en">Article 205.1 - 205.3</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Pavel Durov</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Freedom of Speech</span></p>

---

<a id="item-5"></a>

## [TurboFieldfare：在 M 系列 Mac 上仅用 2GB 内存运行 Gemma 4 26B](https://github.com/drumih/turbo-fieldfare) ⭐️ 8.0/10

TurboFieldfare 是一个开源的 Swift 和 Metal 推理引擎，可在任何 Apple Silicon Mac 上（包括 8GB 型号）仅用约 2GB 内存运行 4-bit 量化的 Gemma 4 26B-A4B-IT 模型。它通过仅将模型的共享层和 KV 缓存保留在内存中，同时按需从 SSD 流式加载所需的 MoE 路由专家来实现这一目标，在 8GB M2 MacBook Air 上达到 5-6 tok/s，在 M5 MacBook Pro 上达到 31-35 tok/s。 该项目展示了解决消费级设备上运行大语言模型时内存不足这一日益严重的问题的实用方案，对于内存统一但通常有限的 Apple Silicon Mac 尤为相关。通过利用混合专家（MoE）架构仅从 SSD 流式加载活跃专家，它为在以前被认为无法胜任此类任务的低内存硬件上运行数十亿参数模型打开了大门。 该引擎维护一个专家缓存，并使用有界并行`pread`调用将 SSD 读取与 GPU 计算共享模型层重叠执行，从而缓解 SSD 与 RAM 之间的延迟差距。它还包括一个实验性的 OpenAI 兼容本地服务器，支持流式输出和工具调用，作者在 GitHub 仓库中记录了超过 100 次实验，其中大部分在找到可行设计之前都失败了。

hackernews · gitpusher42 · 7月29日 15:05 · [社区讨论](https://news.ycombinator.com/item?id=49098510)

**背景**: Gemma 4 26B-A4B-IT 是 Google DeepMind 推出的一款混合专家（MoE）模型，其中'A4B'表示在 260 亿总参数中每个 token 约有 40 亿活跃参数。在 MoE 架构中，每个 token 仅激活一小部分专家子网络，这意味着完整的权重集从不需要同时加载。传统推理引擎将整个模型加载到 RAM 中，当模型的量化权重（例如 4-bit Gemma 4 26B 约 14GB）在计入操作系统、应用程序和 KV 缓存后超过可用内存时就变得不切实际。TurboFieldfare 利用 MoE 的稀疏性，仅将始终活跃的共享专家和路由基础设施保留在 RAM 中，按需从 SSD 获取路由专家。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/drumih/turbo-fieldfare">GitHub - drumih/turbo-fieldfare: Gemma 4 26B-A4B inference in ~2 GB of ...</a></li>
<li><a href="https://huggingface.co/google/gemma-4-26B-A4B-it">google/gemma-4-26B-A4B-it · Hugging Face</a></li>
<li><a href="https://research.google/blog/mixture-of-experts-with-expert-choice-routing/">Mixture-of-Experts with Expert Choice Routing - Google Research</a></li>

</ul>
</details>

**社区讨论**: 社区成员提出了重要的安全顾虑，一位用户对 Swift 源代码进行了自动化安全审查。多位评论者将该方法与 llama.cpp 的 mmap 功能进行了比较，并质疑为什么传统推理引擎默认将整个模型加载到内存中。还有人分享了在旧版 macOS 上编译的实用技巧，并讨论了 SSD 流式方法与传统内存驻留推理之间的性能权衡。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">On-Device AI</span> <span class="tag-badge">Apple Silicon</span> <span class="tag-badge">Swift</span> <span class="tag-badge">Memory Optimization</span></p>

---

<a id="item-6"></a>

## [文档传播的 AI 蠕虫可通过 Copilot for Word 自我传播](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/) ⭐️ 8.0/10

安全研究人员已证明，隐藏在外部共享 Word 文档中的恶意提示注入指令可以劫持 Copilot for Word，使其在用户不知情的情况下修改草拟或编辑的文档，并将攻击传播到新文档。这创造了一种通过广泛使用的生产力软件自我传播的 AI 蠕虫，而截至文章发布时，尚无针对这一更广泛漏洞类别的有效缓解措施。 这暴露了集成在生产力工具中的 AI 代理存在根本性安全漏洞，而数百万用户每天都在使用这些工具处理敏感文档，可能催生类似于传统计算机蠕虫的自我传播恶意软件。随着 Copilot 等 AI 助手被授予越来越多的本地文件、电子邮件和系统资源访问权限，成功攻击的影响范围将显著扩大，威胁各组织的数据完整性和机密性。 该攻击利用了被称为"上下文坍缩"的现象——即 LLM 无法区分合法的用户指令和嵌入在被处理数据中的恶意提示，使得隐藏指令（例如使用 Unicode 技巧或白色隐形文本）能够执行任意命令。这种蠕虫不仅可以跨文档传播，还可以通过关联服务传播，社区成员指出，指令与数据混合这一根本性架构问题意味着当前 LLM 架构中不存在可靠的修复方案。

hackernews · Canopy9560 · 7月29日 11:44 · [社区讨论](https://news.ycombinator.com/item?id=49096188)

**背景**: 提示注入是一种网络安全攻击手段，攻击者将看似无害的输入设计为覆盖模型的预期指令，导致非预期行为，例如泄露敏感数据或执行未授权操作。AI 蠕虫是一类新型恶意软件，它利用自我复制的提示注入在互联的生成式 AI 应用中传播感染，其运作方式类似于 1988 年 Morris 蠕虫在网络系统中的自我复制。上下文坍缩是指 AI 系统无法区分来自不同来源的指令——用户的合法提示与文档内容中嵌入的隐藏指令——这是当前 LLM 架构的固有特征，因为所有文本输入都被等同处理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection - Wikipedia</a></li>
<li><a href="https://www.sentinelone.com/cybersecurity-101/cybersecurity/ai-worms/">AI Worms Explained: Adaptive Malware Threats - SentinelOne</a></li>
<li><a href="https://www.ibm.com/think/topics/prompt-injection">What is a prompt injection attack? - IBM</a></li>

</ul>
</details>

**社区讨论**: 社区讨论反映了对当前 LLM 架构固有安全缺陷的深切担忧，多位评论者一致认为指令与数据混合这一根本问题使此类漏洞在不改变架构范式的情况下无法修复。多位评论者提出了令人警醒的升级场景，包括通过 GitHub 评论传播、可能窃取加密货币钱包的蠕虫，而一位用户表示已完全卸载 Copilot 并在所有本地应用中禁用 AI，作为防范此类混淆攻击的防御措施。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Prompt Injection</span> <span class="tag-badge">Copilot</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Context Collapse</span></p>

---

<a id="item-7"></a>

## [Dysphoria 僵尸网络感染超 20 万台设备，利用区块链隐藏 C2 服务器](https://blog.xlab.qianxin.com/botnet-rising-star-the-evolution-and-in-depth-technical-analysis-of-dysphoria/) ⭐️ 8.0/10

CNCERT 与奇安信 XLab 联合发布的报告显示，自 2026 年 3 月首次被发现以来，Dysphoria 僵尸网络在短短数月内已感染全球超过 20 万台设备，并经历了多次变种迭代。该僵尸网络由早期的 jackskid 和 fbot 恶意软件家族演化而来，采用了基于以太坊（ENS）和 Solana（SNS）区块链域名的命令与控制基础设施。 Dysphoria 快速蔓延至 20 万个节点，并利用区块链域名隐藏 C2 服务器，标志着僵尸网络复杂性的令人担忧的升级，使防守方检测和清除的难度大幅增加。该僵尸网络的 DDoS 攻击和流量中继能力对全球网络基础设施构成直接威胁，而其快速迭代周期表明运营者具备迅速适应和规避安全措施的能力。 Dysphoria 通过解析 ENS/SNS 区块链记录，从伪装的 IPv6 字符串中提取隐藏的命令服务器 IP 地址，并采用修改版的 RC4 加密方案保护代码字符串。该恶意软件主要用于对受感染设备发起分布式拒绝服务（DDoS）攻击和流量中继操作。

rss · 奇安信 X 实验室 · 7月29日 02:09

**背景**: 僵尸网络是由受感染的互联网连接设备组成的网络，由中心化攻击者控制，通常用于大规模 DDoS 攻击、垃圾邮件活动或流量中继。命令与控制（C2）服务器是僵尸网络控制者向受感染节点下发指令的基础设施，隐藏这些服务器对于僵尸网络的生存至关重要。基于区块链的域名系统（如以太坊域名服务 ENS 和 Solana 域名服务 SNS）允许攻击者在去中心化账本上存储和解析 IP 地址，由于没有任何单一机构控制这些记录，因此极难被关停。CNCERT/CC 是中国负责网络安全威胁协调的国家计算机网络应急技术处理协调中心。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/new-dysphoria-ddos-botnet-spreads-to-200k-devices-worldwide/">New Dysphoria DDoS botnet spreads to 200k devices worldwide</a></li>
<li><a href="https://www.cointrust.com/ethereum-news/dysphoria-botnet-hides-command-servers-using-ethereum-and-solana-domains">Dysphoria Botnet Hides Command Servers Using Ethereum and...</a></li>
<li><a href="https://news-pravda.com/russia/2026/07/29/2477568.html">Dysphoria botnet shifts C2 concealment to blockchain domains</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">Malware Analysis</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Vulnerabilities</span></p>

---

<a id="item-8"></a>

## [Claude 共享对话链接遭搜索引擎索引，引发严重隐私泄露](https://t.me/zaihuapd/42830) ⭐️ 8.0/10

Anthropic 旗下的 Claude 平台目前存在严重的隐私漏洞，其共享对话链接缺少“noindex”标签。这导致 Google 等搜索引擎抓取并索引了大量对话，使 API 密钥、加密货币钱包和社会安全号码等高度敏感的用户数据面临公众搜索的风险。 此次隐私泄露事件暴露了极其敏感的个人和商业数据，可能导致身份盗用、财务损失和未经授权的系统访问。这凸显了人工智能平台中持续存在的安全隐患，因为这与 ChatGPT 一年前出现的类似问题如出一辙。 由于 Anthropic 尚未修复该漏洞，建议用户立即进入设置中的“共享对话”管理页面，手动删除包含个人或财务信息的共享链接。利用带有“noindex”值的 HTML robots 元标签来请求自动化网络机器人避免索引网页，是行业内通常采用的标准做法。

telegram · zaihuapd · 7月29日 02:40

**背景**: “noindex”标签是 HTML robots 元标签的一个值，用于请求自动化互联网机器人避免索引网页，从而防止其出现在搜索结果中。API 密钥则是一个秘密的唯一标识符，用于验证和授权用户、开发者或调用程序对 API 的访问。如果这些密钥通过共享对话在公共搜索引擎上暴露，恶意行为者可以利用它们来访问受保护的系统或产生未经授权的账单费用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Noindexing">Noindexing</a></li>
<li><a href="https://en.wikipedia.org/wiki/API_key">API key</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">privacy</span> <span class="tag-badge">claude</span> <span class="tag-badge">anthropic</span> <span class="tag-badge">data-leak</span></p>

---

<a id="item-9"></a>

## [英伟达通知 AIC 合作伙伴显卡涨价，代工厂暂停出货](https://t.me/zaihuapd/42834) ⭐️ 8.0/10

英伟达已向所有 AIC（附加卡）合作伙伴发出显卡涨价通知，涨价范围涵盖采用 GDDR7 显存的 Blackwell 旗舰产品线以及采用 GDDR6 显存的 GeForce 消费级产品线。受此影响，各大显卡品牌代工厂已封仓并暂停对外出货，RTX 50 系列供应量将从 7 月下旬起进一步收紧。 此次价格调整意味着重大的供应链变动，将直接影响消费者定价、开发者硬件采购成本以及整个 PC 市场。该决定也反映了英伟达不再将显存与 GPU 芯片捆绑销售的战略转变，迫使 AIC 合作伙伴在持续的内存短缺和 GDDR7 生产成本不断上升的情况下自行采购显存。 供应链消息称，8GB、12GB 和 16GB 显卡的显存成本分别增加约 76 美元、114 美元和 152 美元。具体定价政策将在 8 月最终确定，而英伟达对 AIC 合作伙伴的 GPU 供应量已经减少约 15%至 20%，华硕等合作伙伴据报已停止生产 RTX 5070 Ti 等部分型号。

telegram · zaihuapd · 7月29日 03:54

**背景**: AIC（附加卡）合作伙伴是使用英伟达 GPU 芯片生产显卡的制造商，通常以捆绑方式从英伟达购买 GPU 和显存。英伟达此前从三星、美光或 SK 海力士采购显存并与 GPU 芯片捆绑销售给 AIC 合作伙伴，但持续的内存短缺已使这种模式难以为继。Blackwell 是英伟达最新的 GPU 微架构，于 2024 年 3 月的 GTC 2024 上正式发布，是 Hopper 和 Ada Lovelace 架构的继任者，其旗舰产品采用比前代 GDDR6 带宽显著更高的新型 GDDR7 显存标准。

<details><summary>参考链接</summary>
<ul>
<li><a href="http://www.phpxs.com/post/13729/">英 伟 达 显卡涨价在即： 英 伟 达 停止在捆绑显存 要求 AIC ...</a></li>
<li><a href="https://www.3dhome.cn/blog_detail/86.html">3dhome.cn/blog_detail/86.html</a></li>
<li><a href="https://en.wikipedia.org/wiki/Nvidia_Blackwell">Nvidia Blackwell</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">GPU</span> <span class="tag-badge">硬件</span> <span class="tag-badge">供应链</span> <span class="tag-badge">价格变动</span></p>

---

<a id="item-10"></a>

## [报告称 Hugging Face 被广泛用于生成深度伪造裸照](https://www.theverge.com/ai-artificial-intelligence/971723/hugging-face-nudify-deepfake-undress-women-children) ⭐️ 8.0/10

7 月 28 日，欧洲非营利组织 AI Forensics 发布报告，揭示 Hugging Face 平台正被大量用于生成非自愿的深度伪造色情内容。测试显示，排名前九的图像编辑模型中有七个能通过简单提示轻易为女性"脱衣"，研究人员设置的蜜罐空间在七天内收到超过 1000 条请求，其中 73%涉及性内容，近 7%针对儿童。 该报告暴露了全球最大的开源 AI 模型托管平台之一在安全和内容审核方面的严重缺陷，与其禁止非自愿性内容和未成年人裸露的政策直接矛盾。这凸显了开源 AI 的开放性与有效防护机制之间的紧迫矛盾，可能推动整个开源生态系统采用更严格的内容过滤措施。 研究人员发现，无需精心构造提示词即可绕过安全防护——简单的文本提示就足以让排名靠前的模型生成露骨图像。AI Forensics 建议 Hugging Face 在平台层面实施提示词过滤和输出扫描机制，以阻止有害图像的生成。

telegram · zaihuapd · 7月29日 08:20

**背景**: Hugging Face 是一个重要的开源平台，托管超过 50 万个机器学习模型、数据集和应用程序，被广泛视为 AI 研究社区的中心枢纽。AI Forensics 是一家成立于 2021 年的欧洲非营利组织，致力于调查具有影响力的不透明算法系统，以追究科技平台的责任。蜜罐（Honeypot）是网络安全领域的术语，指旨在吸引和监控恶意活动的诱饵系统，研究人员在此利用它来衡量平台上有害请求的数量和性质。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/">Hugging Face – The AI community building the future.</a></li>
<li><a href="https://aiforensics.org/about">AIForensics</a></li>
<li><a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">Honeypot (computing) - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">Deepfake</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">Content Moderation</span> <span class="tag-badge">Open Source AI</span></p>

---

<a id="item-11"></a>

## [英伟达股价与信用违约掉期走势出现前所未有的严重背离](https://www.zerohedge.com/markets/chart-jensen-huang-does-not-want-you-see) ⭐️ 8.0/10

英伟达的股价在依然接近历史高点的同时，其信用违约掉期（CDS）成本却在短短一周内近乎翻倍，两者走势出现了严重背离。这种分裂凸显了信贷市场对“循环融资”生态系统的日益担忧，即英伟达涉嫌为 OpenAI 和 SK 集团等 AI 客户提供巨额融资，以支持他们采购自家芯片。 这种背离预示着 AI 行业存在潜在的系统性风险，其需求可能是通过企业间互联融资人为推高的，而非真实的终端用户需求。如果这种不透明的融资链条断裂，可能会引发连锁违约、信用评级下调，以及 AI 基础设施估值的严重回调。 信贷投资者深感担忧，庞大的资本支出正在吞噬自由现金流，预计行业自由现金流的拐点要到 2027 年下半年才会出现。与此同时，股票投资者仍将目光集中在营业收入的规模增长上，无视不断攀升的债务负担和表外交易的低透明度。

telegram · Marcoview666 · 7月29日 07:56

**背景**: 信用违约掉期（CDS）作为一种防范公司债务违约的保险，其价差的快速飙升表明信贷市场认为违约风险正在大幅增加。“循环融资”是指一种闭环融资机制：供应商向买方提供资金或担保，使其能够购买供应商的产品。在 AI 领域，庞大的基础设施成本迫使持续烧钱且信用评级不足的初创公司，依赖英伟达和云厂商等高评级主体来为其发债提供背书。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Credit Default Swaps</span> <span class="tag-badge">Systemic Risk</span> <span class="tag-badge">Financial Analysis</span></p>

---