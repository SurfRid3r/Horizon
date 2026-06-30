---
layout: default
title: "Horizon Summary: 2026-06-30 (ZH)"
date: 2026-06-30
lang: zh
---

> 从 53 条内容中筛选出 11 条重要资讯。

---

1. [Anthropic 发布增强型代理能力的 Claude Sonnet 5](#item-1) ⭐️ 9.0/10
2. [微软警告 AI 智能体中的 MCP 工具投毒威胁](#item-2) ⭐️ 9.0/10
3. [华为开源盘古 2.0 模型，提供高达 505B 参数](#item-3) ⭐️ 9.0/10
4. [Claude Code 2.1.91 被指隐蔽遥测，暗传代理与时区信息](#item-4) ⭐️ 9.0/10
5. [Anthropic 发布 Claude Sonnet 4.6，性能与计算机使用能力大幅提升](#item-5) ⭐️ 9.0/10
6. [展望 PostgreSQL 19 的预期功能](#item-6) ⭐️ 8.0/10
7. [欧盟数字身份证钱包因依赖苹果和谷歌而遭批评](#item-7) ⭐️ 8.0/10
8. [LongCat-2.0：基于华为昇腾芯片训练的 1.6 万亿参数 MoE 模型](#item-8) ⭐️ 8.0/10
9. [WatchTowr Labs 披露 Citrix NetScaler 预认证内存越界读取漏洞（CVE-2026-8451）](#item-9) ⭐️ 8.0/10
10. [ToddyCat APT 组织部署 Umbrij 工具劫持 Gmail OAuth 令牌](#item-10) ⭐️ 8.0/10
11. [最高法院裁定获取手机位置数据须凭搜查令](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic 发布增强型代理能力的 Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) ⭐️ 9.0/10

Anthropic 发布了 Sonnet 系列的最新模型 Claude Sonnet 5，是对 Claude Sonnet 4.6 的升级，在自主代理性能方面有显著提升。该模型经过优化，能够制定计划、使用浏览器和终端等工具，并以此前需要更大、更昂贵模型才能达到的水平自主运行。 此次发布将 Claude Sonnet 5 定位为比 Opus、GPT-5.5 和 Gemini Pro 更经济的替代方案，有望让更多开发者用上高级代理型 AI。该模型在自主能力方面的提升标志着代理型 AI 时代的重要一步，AI 系统越来越能够自主行动以完成复杂任务。 根据系统卡片，Claude Sonnet 5 在某些领域出现了退步，尤其是在 CyberGym 漏洞发现方面得分低于 Sonnet 4.6，且在启用默认缓解措施时得分为 0。社区对每项任务成本基准的分析表明，在中等以上的努力程度下，给定成本下 Opus 始终优于 Sonnet 5，这使得该模型在处理高要求任务时的价值主张不太明确。

hackernews · marinesebastian · 6月30日 17:59 · [社区讨论](https://news.ycombinator.com/item?id=48736605)

**背景**: Anthropic 的 Claude 模型家族包括不同层级：Opus（能力最强且最昂贵）、Sonnet（平衡型主力模型）和 Haiku（最小最快）。'代理型 AI'范式是指能够自主规划、使用工具并以最少人工干预完成多步骤任务的 AI 系统。Sonnet 级别模型对开发者尤为重要，因为 Claude Sonnet 3.5、3.6 和 3.7 是最早在合理价格点展现出出色编码和工具使用技能的模型之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/news/claude-sonnet-5?s=03">Introducing Claude Sonnet 5 \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/claude-sonnet-5-system-card">Claude Sonnet 5 System Card - anthropic.com</a></li>
<li><a href="https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/">Anthropic launches Claude Sonnet 5 as a cheaper way to run ...</a></li>

</ul>
</details>

**社区讨论**: 社区情绪褒贬不一，多位用户质疑 Sonnet 5 在更高努力程度下相比 Opus 的成本效益，指出在许多基准测试中给定成本下 Opus 表现更优。一位用户强调了性能退步问题，包括性价比不如 GLM 5.2 以及在网络安全任务上得分大幅下降。不过，也有用户称赞这是一次针对日常编码任务的扎实渐进式更新，尤其是在将工作拆分为更小部分时。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Claude</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-2"></a>

## [微软警告 AI 智能体中的 MCP 工具投毒威胁](https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/) ⭐️ 9.0/10

微软事件响应团队于 2026 年 6 月 30 日发表了一篇关于 MCP 工具投毒的详细分析，揭示了威胁行为者如何在 MCP 工具描述中嵌入恶意指令——这些指令对用户不可见，但对 AI 模型可见。该文章解释了被投毒的 AI 智能体如何被转化为数据泄露和未授权操作的操控平面。 随着 AI 智能体从被动读取数据转向通过工具自主执行操作，MCP 工具投毒成为一个关键的新兴威胁，可能影响任何部署智能体 AI 系统的组织。鉴于 MCP 已被 OpenAI 和 Google DeepMind 等主要厂商采纳，这一攻击载体对整个 AI 生态系统具有广泛影响，使得检测与缓解策略对安全专业人员至关重要。 MCP 工具投毒被归类为间接提示注入攻击，恶意指令隐藏在用户永远看不到但 AI 智能体在调用工具时会处理的工具描述中。注入的指令可以劫持智能体行为、窃取敏感数据并触发未授权操作，从而将受信任的智能体转变为攻击载体。

rss · Microsoft Security · 6月30日 15:57

**背景**: 模型上下文协议（MCP）是 Anthropic 于 2024 年 11 月推出的开放标准，旨在标准化大型语言模型等 AI 系统与外部工具、数据源和工作流的集成方式。智能体 AI 是指能够自主追求目标、使用工具并采取行动的 AI 系统。MCP 已被 OpenAI 和 Google DeepMind 等主要 AI 厂商广泛采纳，成为现代自主智能体生态系统的基石，但由于外部工具的不可信性，也创造了新的攻击面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://owasp.org/www-community/attacks/MCP_Tool_Poisoning">MCP Tool Poisoning - OWASP Foundation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol</a></li>
<li><a href="https://en.wikipedia.org/wiki/Agentic_AI">Agentic AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Agentic AI</span> <span class="tag-badge">MCP Tool Poisoning</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Model Context Protocol</span></p>

---

<a id="item-3"></a>

## [华为开源盘古 2.0 模型，提供高达 505B 参数](https://t.me/zaihuapd/42259) ⭐️ 9.0/10

在 2026 年华为开发者大会上，华为宣布开源盘古 2.0 模型。此次发布包含 505B 参数的 Pro 版和 92B 参数的 Flash 版，均支持 512K 的超长上下文窗口。 此次发布是人工智能行业的重大里程碑，在英伟达主导的市场中提供了一个极具竞争力的开源替代方案。它强烈凸显了华为推动国产 AI 生态系统的战略，这些模型专门针对其自研的昇腾 NPU 和鸿蒙系统进行了优化。 openPangu-2.0-Flash 模型采用了混合专家（MoE）架构，总参数量为 920 亿，激活参数为 60 亿。华为计划从 6 月 30 日起陆续开源包括预训练代码在内的 7 大核心组件，且该模型已在 GitCode 的昇腾社区正式上线。

telegram · zaihuapd · 6月30日 06:01

**背景**: 盘古大模型是华为开发的一系列人工智能模型，最初在全球广泛认识到大语言模型之前就已经推出。华为常务董事余承东指出，公司已将大量算力分配给其他国内企业以支持其需求，留给自身的数量非常有限。昇腾 NPU 代表了华为自主构建的 AI 硬件生态系统，旨在高效处理深度学习算法并摆脱对外国技术的依赖。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.aimadetools.com/blog/openpangu-2-complete-guide/">openPangu 2.0 Complete Guide: Huawei's 505B Model Trained ...</a></li>
<li><a href="https://www.techinasia.com/news/huawei-unveils-new-open-source-ai-model-openpangu">Huawei unveils new open-source AI model openPangu - Tech in Asia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Pangu 2.0</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

<a id="item-4"></a>

## [Claude Code 2.1.91 被指隐蔽遥测，暗传代理与时区信息](https://www.reddit.com/r/ClaudeAI/comments/1ujila1/anthropic_embedded_spyware_in_claude_code_and/) ⭐️ 9.0/10

一项逆向工程分析声称，自 2.1.91 版本起，Claude Code 会检查用户系统时区是否为 Asia/Shanghai 或 Asia/Urumqi，以及代理 URL 是否指向中国域名或中国 AI 实验室。随后通过修改 system prompt 中日期格式和 "Today's date is" 中的 Unicode 撇号，将结果隐写编码进发往 Anthropic API 的提示词中，并使用 XOR 密钥 91 进行混淆。 这一发现直击反滥用措施与用户信任之间的核心矛盾——在广泛使用的编程助手中嵌入混淆遥测，引发了严重的透明度和隐私担忧。更新日志中未做任何披露，意味着用户根本没有机会就自己机器上传输的数据做出知情决定。 该隐写技术通过修改 system prompt 日期字符串中撇号的 Unicode 码点来编码一个比特位，用于指示是否检测到中国时区或代理使用。XOR 密钥 91 用于进一步混淆二进制文件中的检测逻辑，且整个机制在更新日志中完全没有提及。

telegram · zaihuapd · 6月30日 10:34

**背景**: Claude Code 是 Anthropic 推出的基于命令行的编程助手，运行在用户本地机器上并与 Anthropic 的 API 通信。模型蒸馏是一种利用更大、更强模型的输出来训练较小模型的技术——一些中国 AI 实验室曾被怀疑通过未授权访问进行此类操作。Anthropic 限制了某些地区的 API 访问，导致部分用户使用代理绕过限制，这反过来又引发了反滥用对抗措施。

**社区讨论**: 社区意见严重分化：批评者认为无论商业理由如何，在用户机器上进行隐蔽遥测都是不可接受的；支持者则认为反蒸馏的意图是合理的，不会伤害正常开发者。部分评论者指出，作为隐蔽操作，其实现方式出人意料地粗糙；另一些人则指出，显式遥测字段会被恶意代理网关轻易剥离，因此隐写方式具有合理性。一些用户主张转向 Codex CLI 等开源替代方案以获得更好的可审计性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Telemetry</span> <span class="tag-badge">Security</span> <span class="tag-badge">Anthropic</span></p>

---

<a id="item-5"></a>

## [Anthropic 发布 Claude Sonnet 4.6，性能与计算机使用能力大幅提升](https://t.me/zaihuapd/42277) ⭐️ 9.0/10

Anthropic 发布了 Claude Sonnet 4.6 模型，在编程、计算机操作及长文本推理方面实现了全面升级。该模型现已作为 Free 和 Pro 用户的默认版本，提供 1M token 上下文窗口，并在 OSWorld 评测中的计算机使用（Computer Use）能力取得显著进步。 此次发布代表了 AI 研究中最具竞争力的领域——编程、计算机使用和长上下文推理的重大进步。1M token 上下文窗口结合大幅提升的计算机使用能力，使 Claude 在处理复杂的多步骤工作流方面成为更强大的智能体，直接挑战其他前沿模型提供商。 该模型已通过 API 及主流云平台同步上线，定价与前代版本保持一致。Sonnet 4.6 在处理复杂代码和办公任务方面较前代有可衡量的提升，其计算机使用性能在 OSWorld 评测基准上的进步得到了验证。

telegram · zaihuapd · 6月30日 17:58

**背景**: 计算机使用（Computer Use）是 Anthropic 推出的一项能力，允许 Claude 与图形用户界面交互——点击按钮、输入文本、导航应用程序——使 AI 能够自主执行真实的计算机任务。OSWorld 是一个评测环境，旨在评估 AI 智能体通过完成跨各种应用程序的真实任务来操作计算机系统的能力。1M token 上下文窗口允许模型在单次查询中处理超大型文档或扩展的对话历史，这对于涉及大量代码库或冗长参考资料的任务至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Computer_user_satisfaction">Computer user satisfaction</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Computer Use</span> <span class="tag-badge">AI Models</span></p>

---

<a id="item-6"></a>

## [展望 PostgreSQL 19 的预期功能](https://www.snowflake.com/en/blog/engineering/postgresql-19-features-beta/) ⭐️ 8.0/10

一篇最新文章概述了 PostgreSQL 19 中即将推出的预期功能和改进，引发了社区成员之间的深入技术讨论。新版本中预计的关键新增功能包括 COPY 和逻辑复制改进，以及基于 SQL:2011 标准的原生应用时间时态数据支持。 PostgreSQL 是现代软件工程的基础技术，其下一个主要版本的发展路线图对更广泛的生态系统具有重大影响。即将推出的复制和数据处理改进将简化日常运维操作，而社区的反馈则凸显了该数据库未来扩展性在架构上的关键需求。 预计的更新显著包含了增强的逻辑复制以及符合 SQL:2011 的原生时态表。尽管有这些新增功能，经验丰富的从业者指出仍然存在重大的运维痛点，例如在 Docker 中进行主版本原地升级的复杂性，以及每个数据库连接庞大的内存占用。

hackernews · thinkingemote · 6月30日 14:14 · [社区讨论](https://news.ycombinator.com/item?id=48733031)

**背景**: PostgreSQL 是一个强大的开源对象关系数据库系统，已成为许多企业应用的默认选择。多年来，其生态系统一直依赖外部工具和扩展来处理大规模操作，例如用于高并发的连接池工具以及用于备份的外部工具。随着数据集呈指数级增长，社区正在积极辩论核心数据库应如何演变，以便在不依赖第三方扩展的情况下原生支持列式存储等功能。

**社区讨论**: 社区普遍赞赏诸如更好的 COPY 和逻辑复制等实用的日常运维改进。然而，长期用户提出了重大的架构担忧，强烈渴望轻量级连接以减少内存开销、用于大型科学数据集的原生列式存储，以及针对容器化环境的简化版主版本原地升级。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">PostgreSQL</span> <span class="tag-badge">Databases</span> <span class="tag-badge">Systems</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-7"></a>

## [欧盟数字身份证钱包因依赖苹果和谷歌而遭批评](https://waag.org/en/article/european-digital-id-wallets-are-gift-google-and-apple/) ⭐️ 8.0/10

Waag 发布的一篇文章指出，欧盟数字身份证钱包的参考实现在 Android 上严格要求使用 Google Play Services，在 iOS 上依赖苹果的安全服务，实际上将 GrapheneOS 等替代操作系统排除在外。这种对两家美国科技巨头的依赖直接削弱了欧盟实现数字主权和用户自主权的既定目标。 这一发现暴露了欧盟数字政策中的一个根本矛盾：在推动欧洲数字主权的同时，却将关键的身份基础设施建立在由美国公司控制的平台之上。对远程认证机制的依赖也赋予了政府和平台所有者决定哪些操作系统"可接受"的权力，未来可能限制用户的选择和隐私。 欧盟参考钱包在 Android 上依赖 Play Integrity API，该 API 需要 Google Play Services，与去谷歌化的操作系统（如 GrapheneOS）不兼容。意大利用于政府服务、年龄验证和文件存储的 IO 应用持续拒绝用户对 GrapheneOS 支持的请求。批评者指出，即使是 Android 的硬件认证 API 作为 Play Integrity 的替代方案，仍然构成远程认证，削弱了设备自主权。

hackernews · donohoe · 6月30日 10:36 · [社区讨论](https://news.ycombinator.com/item?id=48730729)

**背景**: 欧盟正在根据 eIDAS 2.0 法规开发数字身份钱包，旨在为公民提供一种安全、保护隐私的方式来存储和共享身份文件、文凭和其他凭证，并在各成员国之间互通使用。数字主权一直是欧盟的重要政策主题，强调欧洲需要减少在关键基础设施上对非欧洲技术提供商的依赖。远程认证是一种安全机制，设备向远程服务器证明其软件状态，服务器随后决定是否信任该设备——这一功能虽然增强了安全性，但也使得平台锁定成为可能。

**社区讨论**: 社区讨论产生了 279 条评论，绝大多数批评欧盟在数字主权立场上的虚伪——一边依赖美国科技巨头，一边宣称要实现数字主权。用户指出了具体的技术问题，如 Play Integrity 要求排斥了 GrapheneOS 用户；警告远程认证实质上是政府越权，最终可能迫使操作系统开发商安装后门；并指出法规往往因小企业无力承担合规成本而加剧垄断。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Digital Identity</span> <span class="tag-badge">Digital Sovereignty</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Mobile Security</span> <span class="tag-badge">EU Regulations</span></p>

---

<a id="item-8"></a>

## [LongCat-2.0：基于华为昇腾芯片训练的 1.6 万亿参数 MoE 模型](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10

LongCat-2.0 被宣布为一个拥有 1.6 万亿总参数和 480 亿活跃参数的超大规模混合专家（MoE）模型。最引人注目的是，据报道该模型是在华为昇腾 AI 芯片的大规模集群上训练和部署的，而非使用 Nvidia GPU。 如果得到证实，这将是一个罕见的例证，表明万亿规模模型可以在非 Nvidia 硬件上进行端到端训练，这对 AI 行业对 Nvidia 生态系统的依赖具有重要意义。这表明华为昇腾平台可能已经足够成熟以支持前沿规模的模型训练，有望重塑 AI 硬件的竞争格局。

hackernews · benjiro29 · 6月30日 00:30 · [社区讨论](https://news.ycombinator.com/item?id=48727116)

**背景**: 混合专家（MoE）是一种架构，在任意给定输入下只激活模型参数的一个子集（即"专家"），从而允许更大的总参数量同时保持可控的推理成本。华为昇腾系列，尤其是 910 系列，是旨在与 Nvidia 数据中心 GPU 竞争的 AI ASIC 芯片，但在软件生态成熟度方面历来存在差距。训练万亿规模模型需要数千个互联的芯片协同工作，因此硬件可靠性和软件工具链都是关键因素。

**社区讨论**: 社区讨论非常热烈且意见分歧。最有价值的见解来自用户 gardnr，他指出使用华为昇腾 910C 芯片才是真正的新闻亮点，并强调了所克服的软件基础设施挑战。其他用户测试模型后发现其在政治敏感话题上存在严重审查（如关于毛泽东的问题），而用户 tcper 则表达了强烈的质疑，指出其 HuggingFace 页面上没有任何可下载内容，并对该公司的一贯表现提出了质疑。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">MoE</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Huawei Ascend</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-9"></a>

## [WatchTowr Labs 披露 Citrix NetScaler 预认证内存越界读取漏洞（CVE-2026-8451）](https://labs.watchtowr.com/citrixbleed-to-infinity-and-beyond-citrix-netscaler-pre-auth-memory-overread-cve-2026-8451/) ⭐️ 8.0/10

WatchTowr Labs 发布了关于 Citrix NetScaler 一个新的预认证内存越界读取漏洞的技术分析，该漏洞被称为「CitrixBleed To Infinity And Beyond」，编号为 CVE-2026-8451。该披露包含了漏洞的利用细节和方法，且该漏洞无需有效凭证即可触发。 Citrix NetScaler 广泛部署于企业环境中，用于应用交付和负载均衡，因此这是一个高影响的目标。预认证内存越界读取可能会泄露进程内存中的敏感数据，包括会话令牌和凭证，使攻击者能够绕过认证并获取内部网络的访问权限。 该漏洞可在预认证阶段被利用，意味着无需有效凭证即可触发内存越界读取条件。这遵循了与先前 Citrix 漏洞相似的脉络，包括最初的「CitrixBleed」（CVE-2023-4966），表明 NetScaler 代码库中存在反复出现的内存安全问题。

rss · watchTowr Labs - Blog · 6月30日 19:35

**背景**: Citrix NetScaler（现为 Citrix ADC/NetScaler ADC 的一部分）是一种应用交付控制器，被组织用于负载均衡、流量管理和安全远程访问。内存越界读取漏洞是指软件读取超出已分配内存缓冲区边界的情况，可能会暴露不应被访问的数据。2023 年发现的最初「CitrixBleed」漏洞（CVE-2023-4966）就是一个类似的问题，允许攻击者从 NetScaler 内存中提取会话令牌，在补丁部署之前导致了大规模利用。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Citrix NetScaler</span> <span class="tag-badge">Memory Overread</span> <span class="tag-badge">Exploit</span></p>

---

<a id="item-10"></a>

## [ToddyCat APT 组织部署 Umbrij 工具劫持 Gmail OAuth 令牌](https://securelist.com/toddycat-apt-umbrij-tool-and-oauth/120251/) ⭐️ 8.0/10

卡巴斯基研究人员发布了一份关于“Umbrij”的详细技术分析，这是 ToddyCat APT 组织用来入侵企业 Gmail 账户的一项新发现的工具。该工具专门针对并劫持 OAuth 授权令牌，从而隐蔽地维持对受害者 Google 服务的访问权限。 这一发现揭示了入侵企业通信的一种高度隐蔽且现代的方法，能够绕过传统的基于密码的防御。它为安全和事件响应团队提供了关键的威胁情报，凸显了在企业环境中监控和保护 OAuth 令牌使用的必要性。 通过针对 OAuth 令牌而不是密码，攻击者建立了持久的、无需密码的访问权限，这使得使用标准身份验证监控很难检测到。该分析揭示了这个新工具的内部工作机制，展示了威胁行为者如何操纵授权流程以与 Google API 无缝交互。

rss · Kaspersky  - Information about Viruses， Hackers and Spam · 6月30日 10:00

**背景**: ToddyCat 是一个高级持续性威胁（APT）组织，以针对亚洲和欧洲的高级组织和政府实体而闻名。OAuth 2.0 是一个行业标准的授权框架，允许第三方应用程序在不暴露密码的情况下获得对用户账户的有限访问权限。威胁行为者越来越多地滥用 OAuth 令牌，因为它们提供持续的访问权限，并且通常可以绕过多因素身份验证（MFA）的要求。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">APT</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">ToddyCat</span></p>

---

<a id="item-11"></a>

## [最高法院裁定获取手机位置数据须凭搜查令](https://www.androidpolice.com/supreme-court-protects-your-cell-phone-location-data-after-googles-role-in-a-conviction/) ⭐️ 8.0/10

美国最高法院以 6 比 3 裁定，政府在向第三方科技公司索取公民手机位置数据前，必须事先获得司法搜查令。该裁决直接针对并限制了执法部门对“地理围栏令”等反向位置搜索的使用。 这一里程碑式的裁决将第三方持有的位置数据纳入第四修正案的保护范围，大幅加强了数字隐私权。它限制了执法部门从 Google 等大型科技公司进行“撒网式”数据收集的能力。 该裁决源于 2019 年的一起银行抢劫案，警方当时使用“地理围栏令”迫使 Google 将数百万用户账户范围缩小至单一嫌疑人。大法官 Elena Kagan 撰写了多数意见，主张个人对其历史位置记录享有合理的隐私期待，案件已被发回下级法院以裁定原始搜查令是否合法。

telegram · zaihuapd · 6月30日 04:00

**背景**: 美国宪法第四修正案旨在保护公民免受不合理的搜查和扣押，通常要求执法部门证明有相当理由才能获得搜查令。“地理围栏令”是一种相对较新的监控工具，要求科技公司提供在特定时间出现在特定区域内的所有设备的数据。此前，“第三方原则”认为个人在将数据共享给公司后就放弃了隐私权，但现代法院越来越倾向于将第四修正案的保护范围扩大到数字数据领域。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">数字隐私</span> <span class="tag-badge">法律裁决</span> <span class="tag-badge">第四修正案</span> <span class="tag-badge">科技公司</span> <span class="tag-badge">地理围栏令</span></p>

---