---
layout: default
title: "Horizon Summary: 2026-06-18 (ZH)"
date: 2026-06-18
lang: zh
---

> 从 68 条内容中筛选出 11 条重要资讯。

---

1. [发现一万个分发木马恶意软件的 GitHub 仓库](#item-1) ⭐️ 9.0/10
2. [医院和大学以低 90%的成本实现药物再利用](#item-2) ⭐️ 8.0/10
3. [康奈尔大学 CS 6120：高级编译器自学在线课程](#item-3) ⭐️ 8.0/10
4. [Emacs 31 即将发布，带来多项日常实用新特性](#item-4) ⭐️ 8.0/10
5. [DeepSeek 引入多模态视觉理解能力](#item-5) ⭐️ 8.0/10
6. [Midjourney 宣布全新的 AI 医学影像计划](#item-6) ⭐️ 8.0/10
7. [Cloudflare 详解定制的自动化漏洞发现 Harness](#item-7) ⭐️ 8.0/10
8. [通过 PSIGW SSRF 链实施的 PeopleSoft PeopleTools 预认证 RCE 漏洞](#item-8) ⭐️ 8.0/10
9. [微软披露 Mastra npm 供应链攻击，影响超过 140 个项目](#item-9) ⭐️ 8.0/10
10. [Apple 与 Intel 达成初步芯片代工协议](#item-10) ⭐️ 8.0/10
11. [小米开源智能家居 AI Agent 方案 Miloco 2.0 发布](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [发现一万个分发木马恶意软件的 GitHub 仓库](https://orchidfiles.com/github-repositories-distributing-malware/) ⭐️ 9.0/10

一位安全研究人员发现了约一万个在 GitHub 上积极分发木马恶意软件的仓库，暴露了大规模的软件供应链漏洞。这些仓库采用每隔几小时删除并重新推送提交的策略，以操纵搜索排名，使它们在 AI 编程代理搜索依赖项时能够突出显示。 这一发现标志着恶意软件分发方式的范式转变：攻击者现在专门针对 AI 编程代理而非人类开发者进行优化，利用 Copilot 和 Cursor 等工具在自动搜索和安装软件包方面日益增长的自主性。由于这些代理以机器速度做出依赖项决策，且审查程度往往低于谨慎的人类开发者，攻击面已经呈指数级扩大。 这些恶意仓库具有共同特征，包括由新注册的 GitHub 账户创建，以及代码表面上看起来合法，这使得自动化过滤成为可能但并非易事。社区分析表明，频繁的提交变动是专门为了操纵 AI 代理所依赖的搜索算法而设计的，而非为了吸引人类的注意力。

hackernews · theorchid · 6月18日 11:45 · [社区讨论](https://news.ycombinator.com/item?id=48583928)

**背景**: 软件供应链攻击是指攻击者将恶意代码注入到其他软件所依赖的组件中，当该依赖项被安装时就会危害更大的系统。GitHub 作为全球最大的开源代码托管平台，已成为通过模仿合法项目的仓库分发恶意软件的理想场所。AI 编程代理——基于大语言模型构建的自主或半自主工具——越来越多地代替开发者执行搜索库、评估选项和安装依赖项等任务，从而为攻击者创造了可大规模利用的新攻击向量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Supply_chain_attack">Supply chain attack - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_agent">AI agent</a></li>

</ul>
</details>

**社区讨论**: 社区成员对 GitHub 似乎没有足够重视恶意软件仓库问题表示不满，一位通讯策展人报告称经常在热门仓库中发现涉及加密货币、NFT 和 KMS 激活工具的恶意仓库。讨论中一个特别值得注意的见解是，频繁提交变动的模式强烈表明这些仓库是专门为欺骗 AI 代理而非人类而构建的，这代表着攻击策略的蓄意演变。评论者还分享了警示案例，包括一位迪士尼工程师在手动审查了看似合法的恶意代码后仍被攻破，凸显出即使是警惕性高的开发者仍然面临风险。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">GitHub</span> <span class="tag-badge">Software Supply Chain</span> <span class="tag-badge">AI Agents</span></p>

---

<a id="item-2"></a>

## [医院和大学以低 90%的成本实现药物再利用](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost) ⭐️ 8.0/10

医院和大学正越来越多地推进药物再利用——为现有的、通常是已过专利期的药物寻找新的治疗用途——其成本比开发新药低达 90%。这一努力由学术和临床机构而非传统制药公司主导，填补了业界偏向研发新型专利药物所留下的空白。 药物再利用有望大幅降低医疗成本并扩大治疗可及性，尤其是对于那些制药公司缺乏经济激励去开发新药的罕见病。它还暴露了药品专利体系中的结构性缺陷——在该体系下，公司被激励对药物进行微小的分子修饰以延长专利，而非最大化患者利益。 社区列举的具体案例包括：使用 Bevacizumab（Avastin，约 50 美元/剂）超适应症治疗黄斑变性，而非使用分子相似的 Lucentis（约 1500 美元/剂）；以及 Spravato（艾氯胺酮）作为已过专利期的氯胺酮的修饰版本获得专利，尽管有证据表明其疗效可能不如氯胺酮。由于再利用药物通常涉及已过专利期的化合物，在缺乏传统制药投资的情况下，为获得新的监管批准而开展所需的临床试验仍是一项重大挑战。

hackernews · giuliomagnifico · 6月18日 10:33 · [社区讨论](https://news.ycombinator.com/item?id=48583386)

**背景**: 药物再利用（又称药物重新定位）是指为已获批用于其他疾病的现有药物化合物寻找新的治疗用途的过程。开发一款全新药物通常需要数十亿美元和超过十年的时间，而再利用药物已经具备确立的安全性数据，可以显著缩短开发时间和降低成本。然而，由于许多再利用应用涉及已过专利期的药物，制药公司通常缺乏经济激励去资助获得新监管批准所需的昂贵临床试验，留下了一个由学术机构和非营利组织试图填补的空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.elsevier.com/en-in/industry/drug-repurposing">Drug repurposing : approaches, methods and considerations | Elsevier</a></li>
<li><a href="https://blog.zealtyro.com/drug-repurposing-cuts-healthcare-costs/">Drug Repurposing : How Science is Cutting... - ZealTyro Blog</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12766319/">Drug Repurposing as an Effective Drug Discovery Strategy: A Critical...</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为当前的制药激励机制已经失效，他们引用 Avastin 与 Lucentis、Spravato 与氯胺酮等具体案例来说明制药公司如何利用专利漏洞，而代价由患者承担。一些人强调了像 Cures Within Reach 这样的非营利组织为罕见病再利用研究提供资金，另一些人则对大型药企对医学院甚至搜索引擎结果的影响力表示担忧，认为这使再利用研究难以获得关注和推动力。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">healthcare</span> <span class="tag-badge">pharmaceuticals</span> <span class="tag-badge">drug-repurposing</span> <span class="tag-badge">economics</span> <span class="tag-badge">industry</span></p>

---

<a id="item-3"></a>

## [康奈尔大学 CS 6120：高级编译器自学在线课程](https://www.cs.cornell.edu/courses/cs6120/2025fa/self-guided/) ⭐️ 8.0/10

康奈尔大学的 CS 6120 高级编译器课程已作为自学在线资源向公众开放，提供涵盖现代编译器设计主题的全面学习材料。该课程由 Adrian Sampson 教授，内容包括中间表示、优化遍、数据流分析、SSA 形式和动态编译技术。 该课程为计算机科学课程中一个重要但覆盖不足的主题提供了免费的高质量教育资源，使全球的系统研究人员和软件工程师都能获取高级编译器知识。对于从事机器学习基础设施、语言运行时设计和系统编程等性能关键领域的工作来说，理解编译器内部机制越来越重要。 该课程涵盖的主题包括中间表示、死代码消除和常量传播等经典优化、数据流分析、SSA 形式，以及跟踪编译等动态编译方法。来自从业者的社区反馈指出，动态编译器部分过度强调跟踪编译，而跟踪编译已在很大程度上被分层编译策略、类型反馈和带去优化的推测性优化所取代。

hackernews · ibobev · 6月18日 11:04 · [社区讨论](https://news.ycombinator.com/item?id=48583606)

**背景**: 编译器将用编程语言编写的源代码翻译成机器码或中间表示，现代编译器使用具有复杂优化遍的多阶段流水线。高级编译器主题超越了基本的语法分析和代码生成，包括 SSA（静态单赋值）形式等中间表示，它支持许多强大的优化。动态编译器和 JIT（即时编译）在运行时利用程序执行期间收集的信息生成优化代码，其方法从基于跟踪的编译逐步演变为平衡编译速度和代码质量的分层编译系统。

**社区讨论**: 从业者 titzer 批评该课程对跟踪编译的过度关注，认为跟踪编译是一条已被多次放弃的死路，取而代之的是类型反馈、推测、去优化和分层编译方法。评论者 j2kun 质疑课程内容是否真正具有"高级"水平，指出死代码消除、数据流分析和 SSA 形式等主题似乎应属于编译器入门课程。另一位评论者询问该课程与 Nora Sandler 的实践指南《Writing a C Compiler》相比如何。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">compilers</span> <span class="tag-badge">computer science</span> <span class="tag-badge">systems</span> <span class="tag-badge">online education</span> <span class="tag-badge">programming</span></p>

---

<a id="item-4"></a>

## [Emacs 31 即将发布，带来多项日常实用新特性](https://www.rahuljuliato.com/posts/emacs-31-around-the-corner) ⭐️ 8.0/10

作者分享了对即将发布的 Emacs 31 版本的日常使用体验，详细介绍了他们在日常工作中已经在使用的新特性和变更。这篇文章为用户提供了关于这款高度可定制文本编辑器下一代版本更新内容的实战预览。 Emacs 依然是深受开发者喜爱且高度可扩展的工具，其重大新版本的发布展示了它对现代软件开发需求的持续适应力。鉴于社区中关于将 Claude 等现代 AI 工具整合到其成熟的文本配置系统中的热烈讨论，此次发布显得尤为重要，它在这款经典软件和尖端技术之间架起了桥梁。 社区反馈的一个关键亮点是，Emacs 基于文本的配置使其能够完美兼容现代 AI 代理，这些代理可以轻松管理和更新诸如 init.el 的配置文件。此外，Emacs 31 延续了该编辑器严格遵循“可选开启”特性的设计哲学，在保持经典且针对终端优化的代码显示效率的同时，确保了工作流的稳定性，免受强制界面变更的干扰。

hackernews · frou_dh · 6月18日 12:10 · [社区讨论](https://news.ycombinator.com/item?id=48584135)

**背景**: Emacs 是一类以其高度可扩展性和数十年历史（可追溯至 20 世纪 70 年代）而闻名的文本编辑器。该编辑器几乎完全可以通过 Emacs Lisp 进行定制，这种编程语言允许用户修改从快捷键绑定到复杂应用行为的所有内容。与现代 IDE 相比，尽管它年代久远且学习曲线陡峭，但它仍然拥有一批忠实的用户，他们极度看重键盘操作的效率以及对编辑环境的完全掌控权。

**社区讨论**: 评论者们充满热情地捍卫了 Emacs 历久弥新的应用价值，赞扬了它的速度、完全的用户控制权以及防止不需要的功能膨胀的“可选开启”理念。多位用户强调，Emacs 的配置非常适合现代 AI 代理，并且随着 Claude 等工具的集成，它现在提供的 AI 辅助开发体验已经足以媲美甚至超越 VSCode 等较新的编辑器。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Emacs</span> <span class="tag-badge">Text Editors</span> <span class="tag-badge">Software Development</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">Open Source</span></p>

---

<a id="item-5"></a>

## [DeepSeek 引入多模态视觉理解能力](https://chat.deepseek.com/) ⭐️ 8.0/10

DeepSeek 已在其平台中集成了图像理解能力，使其 AI 模型能够处理、分析和描述视觉内容。这标志着其用户界面从纯文本系统向多模态系统的重要转变。 增加视觉能力使 DeepSeek 在性能和多功能性上更接近 GPT-4o 和 Gemini 等前沿模型，极大地拓宽了其实用价值。这一进展使 AI 能够处理需要视觉上下文的复杂任务，例如图像描述和视觉问答。 新引入的功能允许模型理解和描述图像内容，但它并不支持图像的生成或修改。部分用户还注意到，最近的更新偶尔会导致模型意外地使用中文输出推理过程或回复。

hackernews · RIshabh235 · 6月18日 06:17 · [社区讨论](https://news.ycombinator.com/item?id=48581458)

**背景**: DeepSeek 是一家著名的中国人工智能公司，最近因发布 DeepSeek-R1 等高效且开放权重的大型语言模型而颠覆了整个行业。多模态 AI 在这些文本基础之上进行了扩展，通过同时集成和处理图像、音频和视频等多种数据类型，从而创建出功能更全面、更通用的人工智能系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek</a></li>
<li><a href="https://en.wikipedia.org/wiki/Multimodal_AI">Multimodal AI</a></li>

</ul>
</details>

**社区讨论**: 评论者澄清说，该更新严格用于视觉理解，缺乏图像生成或内置的语音识别功能。部分用户还报告了一个问题，即模型在推理时会意外切换为中文，而另一些人则提出了实际的应用建议，例如将该 API 与本地工具配合使用，以低成本生成 HTML 替代文本。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Multimodal AI</span> <span class="tag-badge">Computer Vision</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-6"></a>

## [Midjourney 宣布全新的 AI 医学影像计划](https://www.midjourney.com/medical/blogpost) ⭐️ 8.0/10

Midjourney 推出了一项名为 Midjourney Medical 的新计划，将其 AI 图像生成技术应用于健康数据和医学影像。他们分享了一段视频演示，展示了类似于低分辨率 CT 扫描的超声波重建图像。 对于一家领先的 AI 图像生成公司来说，这标志着其向受到严格监管的健康科技领域进行了一次令人惊讶的重大战略转变。这一举措可能会降低医疗扫描技术的门槛，但同时也引发了关于其临床可行性和企业重心的重大担忧。 初步演示的重点是将超声波数据重建为更全面的视觉格式，但专家指出，超声波与 CT 技术在本质上存在差异。Midjourney 设想了未来人们可以随意在水疗中心进行全身扫描，但由于无害的身体特征极易导致假阳性结果，这一概念遭到了医疗专业人员的严厉批评。

hackernews · ricochet11 · 6月18日 01:59 · [社区讨论](https://news.ycombinator.com/item?id=48579650)

**背景**: Midjourney 因其主要用于创意和艺术领域的强大 AI 图像生成平台而广为人知。医学影像需要高度精确和可靠的技术，并且通常需要接受严格的监管审批以确保诊断的准确性。超声波和计算机断层扫描（CT）是两种本质上不同的成像方式；超声波依赖于声波且高度依赖操作者，而 CT 则使用 X 射线来生成详细的横截面图像。

**社区讨论**: 社区的参与度非常高且褒贬不一，其中一位执业放射科医生提出了批评意见，强调超声波与 CT 扫描在本质上完全不同。许多用户批评 Midjourney 随意进行全身扫描的愿景，认为这可能会因假阳性结果导致不必要的焦虑，并且与主动预防的医疗保健理念相冲突。此外，一些评论者认为 Midjourney 的品牌过于偏向创意，建议他们应该为这项医疗项目成立一家独立的公司。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Medical Imaging</span> <span class="tag-badge">Midjourney</span> <span class="tag-badge">Health Tech</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-7"></a>

## [Cloudflare 详解定制的自动化漏洞发现 Harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness/) ⭐️ 8.0/10

Cloudflare 发布了关于其定制的多阶段漏洞发现 Harness 和自动分诊循环的详细技术分析。该架构独特地利用大语言模型 (LLM) 对安全发现进行分诊，实现了状态控制，并专门绕过了 LLM 的上下文窗口限制以减少误报。 这展示了将 LLM 集成到复杂安全工作流中的一种实用的、可投入生产环境的方法，超越了简单的 Bug 扫描，实现了自主分诊。对于希望扩展其漏洞管理能力并减少过滤误报所需手动工作的安全工程团队来说，这提供了一个极具价值的蓝图。 该架构依赖于一个多阶段自动分诊循环，该循环通过管理状态控制在扩展的工作流中保持上下文。为了应对幻觉和误报，Cloudflare 采用了对抗性审查流程，并开发了特定的路由技术来有效处理 LLM 的上下文窗口限制。

rss · The Cloudflare Blog · 6月18日 17:59

**背景**: 漏洞分诊是一个初步评估过程，旨在确定发现的安全漏洞是否有效及其紧迫程度，以便后续安排修复优先级。由于自动化扫描工具会产生海量的初步发现，人类分析师常常应接不暇，这推动了 AI 辅助分诊循环的采用。然而，大语言模型 (LLM) 面临着上下文窗口限制和潜在幻觉等固有缺陷，这就需要先进的 Harness 架构来管理状态并执行对抗性检查。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://apiiro.com/glossary/vulnerability-triage/">What Is Vulnerability Triage ? Challenges & Metrics</a></li>
<li><a href="https://dzone.com/articles/automating-dfir-triage-memory-forensics-llms">Automating the DFIR Triage Loop With Memory Forensics, LLMs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">vulnerability management</span> <span class="tag-badge">automation</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Cloudflare</span></p>

---

<a id="item-8"></a>

## [通过 PSIGW SSRF 链实施的 PeopleSoft PeopleTools 预认证 RCE 漏洞](https://www.trendmicro.com/en_us/research/26/f/PeopleTools.html) ⭐️ 8.0/10

安全研究人员披露了 Oracle PeopleSoft PeopleTools 中一个预认证远程代码执行（RCE）漏洞链的细节。该漏洞利用手段通过服务器端请求伪造（SSRF）滥用 Integration Broker 的 PSIGW 网关，直接在应用服务器的 Java 虚拟机（JVM）内部执行恶意代码。 此漏洞对任何运行 Oracle PeopleSoft 部署的组织都构成了严重的安全威胁，因为它可以在没有有效凭证的情况下被利用。此外，通过在 JVM 内部执行恶意负载，攻击者能够无缝规避传统的行为和网络安全传感器。 该攻击利用 SSRF 漏洞，将目标对准 PSIGW 网关上的 PeopleSoft 监听连接器。这种技术使得恶意代码能够伪装成合法的应用程序流量，从而有效地绕过安全监控工具。

rss · Trend Micro Research， News， Perspectives · 6月18日 00:00

**背景**: Oracle PeopleSoft 是一款广泛使用的企业级应用软件，而 PeopleTools 是其底层的专有中间件和架构。PeopleSoft 互联网架构（PIA）包含一个 Integration Broker，负责管理系统之间的同步和异步消息传递。PSIGW（PeopleSoft Integration Gateway）是该架构的关键组件，它使用监听连接器来接收来自外部节点或远程网关的入站消息。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.trendmicro.com/en_us/research/26/f/PeopleTools.html">PeopleSoft PeopleTools Pre-Authentication RCE: A PSIGW SSRF...</a></li>
<li><a href="https://en.wikipedia.org/wiki/PeopleTools">PeopleTools - Wikipedia</a></li>
<li><a href="https://www.zutshigroup.com/PSOL/pt846/eng/psbooks/tibr/htm/tibr06.htm">Managing Integration Gateways</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">remote-code-execution</span> <span class="tag-badge">oracle-peoplesoft</span> <span class="tag-badge">ssrf</span></p>

---

<a id="item-9"></a>

## [微软披露 Mastra npm 供应链攻击，影响超过 140 个项目](https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/) ⭐️ 8.0/10

微软安全团队发布了对 Mastra npm 供应链攻击的详细分析，该攻击通过在投毒的 npm 包的 postinstall 脚本中植入恶意 payload，最终危害了超过 140 个下游项目。报告还提供了使用 Microsoft Defender 和威胁情报工具进行检测、追踪和防御的实用指南。 这一事件凸显了 npm postinstall 脚本作为供应链攻击向量的持续危险性，能够在数百个依赖项目中静默传播恶意软件。随着 Mastra 等 AI 框架在 TypeScript 开发者中快速普及，单个被攻破的包就能对整个生态系统产生连锁影响。 该攻击利用了 postinstall 生命周期钩子——即 npm 在安装包后自动运行的脚本——在开发者不知情的情况下执行隐藏的恶意代码。微软建议审查依赖树中的异常脚本、限制脚本自动执行，并使用 Microsoft Defender 和威胁情报源等工具来识别和拦截恶意包。

rss · Microsoft Security · 6月18日 03:43

**背景**: npm 的 package. 支持包括 preinstall、install 和 postinstall 在内的生命周期脚本，这些脚本会在包安装时自动运行。虽然它们对于初始化任务很有用，但也可能被滥用来静默执行任意代码，因此成为供应链攻击的首选向量。Mastra 是一个开源 TypeScript 框架，用于构建 AI 驱动的应用程序和智能体，由 Gatsby 团队开发，可与 Next.js、React 和 Node 等流行框架集成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.npmjs.com/cli/v11/using-npm/scripts/">How npm handles the " scripts " field</a></li>
<li><a href="https://mastra.ai/">TypeScript AI Agent Framework & Platform | Mastra</a></li>
<li><a href="https://semgrep.dev/blog/2026/rip-npm-postinstall-scripts-npm-v12-default-change/">RIP npm Postinstall Scripts : npm v12 Kills Auto Script ... | Semgrep</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">npm</span> <span class="tag-badge">supply-chain-security</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">malware</span> <span class="tag-badge">devsecops</span></p>

---

<a id="item-10"></a>

## [Apple 与 Intel 达成初步芯片代工协议](https://t.me/zaihuapd/42031) ⭐️ 8.0/10

Apple 与 Intel 已签署初步协议，由 Intel 为部分 Apple 设备代工生产芯片，双方谈判历时一年有余。目前尚不明确该协议具体覆盖 iPhone、iPad 还是 Mac 中的哪类产品芯片。 此举标志着 Apple 在降低对 TSMC 芯片代工近乎完全依赖方面迈出的重要一步，实现了供应链多元化。同时，这也是 Intel 代工业务的重大里程碑，使其客户阵营在 Nvidia 和 SpaceX 之外又新增了 Apple 这一重量级合作伙伴。 该协议由美国政府深度推动，商务部长曾亲自游说 Apple CEO Tim Cook 等高层。据报道正式合同已在近几个月敲定，但制程节点、产能规模和时间表等制造细节尚未披露。

telegram · zaihuapd · 6月18日 09:19

**背景**: Apple 此前几乎完全依赖 TSMC 代工生产其定制的 A 系列和 M 系列芯片，是 TSMC 最大且最重要的客户之一。Intel 在 CEO Pat Gelsinger 的领导下积极推进 Intel Foundry Services（IFS）代工部门建设，力图成为先进制程代工领域的重要竞争者。美国政府通过《CHIPS 法案》向在美国本土建设芯片制造产能的企业提供数百亿美元补贴，大力推动半导体生产的本土化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fulideng.com/news_hybk/90.html">半 导 体 行 业 政 策 前景分析：现状、趋势与未来 - 九游会</a></li>
<li><a href="https://www.azchinesenews1.com/static/content/XW/2025-01-16/1329642385173549056.html">特别报道：《 CHIPS 法 案 》提高 美 国 半 导 体 产 量 但成本高昂</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">Intel</span> <span class="tag-badge">semiconductor</span> <span class="tag-badge">chip manufacturing</span> <span class="tag-badge">supply chain</span></p>

---

<a id="item-11"></a>

## [小米开源智能家居 AI Agent 方案 Miloco 2.0 发布](https://github.com/XiaoMi/xiaomi-miloco) ⭐️ 8.0/10

小米正式发布了开源智能家居方案 Miloco 2.0，它以米家摄像头的音视频作为感知入口，内置小米自研的 MiMo 大语言模型，作为 OpenClaw 插件运行。该系统新增了通用常识、身份识别、家庭记忆、家务任务、主动智能和家庭看板等功能，能够主动观察、推理并控制全屋设备。 Miloco 2.0 通过将物理硬件与先进的大模型推理能力相结合，在 AIoT 领域迈出了重要一步，实现了真正的主动式智能家居自动化，而非简单的基于规则的触发。这种开源方式赋能开发者和爱好者构建更智能、更个性化的智能家居体验，同时将小米定位为 AI 驱动家庭生态系统的领导者。 该项目需要 macOS 或 Linux 环境（Windows 通过 WSL 运行），建议 4 GB 内存和 256 GB 存储，用户需绑定小米账号并配置 MiMo API 密钥。感知和 Agent 功能主要依赖云端大模型处理，会产生持续的 API 费用，且项目仅限非商业用途。

telegram · zaihuapd · 6月18日 12:23

**背景**: MiMo 是小米自研的大语言模型系列，旨在作为 Agent 系统的大脑，能够编排复杂的工作流并驱动实际任务。OpenClaw 是一个基于插件的 AI Agent 平台，可通过模型提供商、Agent 框架、工具、语音和媒体理解等插件扩展功能。Miloco 2.0 将这些技术结合，使智能家居 Agent 超越传统语音助手，通过计算机视觉和自然语言推理来理解和响应家庭环境。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hyperosinsider.com/xiaomi-miloco-2-0-released-before-hyperos-4-smart-ai-open-source-solution/">Xiaomi Miloco 2.0 Released Before HyperOS 4: Smart AI Open ...</a></li>
<li><a href="https://github.com/XiaoMi/xiaomi-miloco">Xiaomi Miloco - GitHub</a></li>
<li><a href="https://mimo.xiaomi.com/mimo-v2-pro">MiMo-V2-Pro | Xiaomi</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Smart Home</span> <span class="tag-badge">AI Agent</span> <span class="tag-badge">Xiaomi</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">IoT</span></p>

---