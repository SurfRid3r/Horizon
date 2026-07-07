---
layout: default
title: "Horizon Summary: 2026-07-07 (EN)"
date: 2026-07-07
lang: en
---

> From 63 items, 13 important content pieces were selected

---

1. [Januscape: 16-Year-Old KVM VM Escape Vulnerability Disclosed](#item-1) ⭐️ 10.0/10
2. [EU Chat Control Surveillance Bill Advances in Parliament](#item-2) ⭐️ 9.0/10
3. [Musk Announces xAI Dissolution and Merger into SpaceX as SpaceXAI](#item-3) ⭐️ 9.0/10
4. [China Plans 2 Trillion Yuan National Computing Network Over Five Years](#item-4) ⭐️ 9.0/10
5. [Anthropic Releases Claude Sonnet 5: Most Agentic Sonnet Yet](#item-5) ⭐️ 9.0/10
6. [EU 'Chat Control' Legislation Threatens Encryption and Privacy](#item-6) ⭐️ 8.0/10
7. [Microsoft Reportedly Fires idTech Engine Team at id Software](#item-7) ⭐️ 8.0/10
8. [Recovering Active ADFS Signing Keys via Machine DPAPI](#item-8) ⭐️ 8.0/10
9. [Behind the Refusal: Behavioral Monitoring for LLM Guardrails](#item-9) ⭐️ 8.0/10
10. [Windows 11 Bug Can Consume Up to 513 GB of Disk Storage](#item-10) ⭐️ 8.0/10
11. [DeepSeek Developing Own AI Chip to Cut NVIDIA and Huawei Dependence](#item-11) ⭐️ 8.0/10
12. [China's Ministry of Commerce Considers Restricting Export of Top Domestic AI Models](#item-12) ⭐️ 8.0/10
13. [WeChat Record Export Tool WeFlow Removed from GitHub via DMCA Notice](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Januscape: 16-Year-Old KVM VM Escape Vulnerability Disclosed](https://github.com/V4bel/Januscape) ⭐️ 10.0/10

Security researchers have disclosed "Januscape" (CVE-2026-53359), a severe KVM/x86 virtual machine escape vulnerability caused by a use-after-free flaw in the shadow MMU. This 16-year-old bug, which affects Linux kernels from 2010 to June 2026, includes a public Proof of Concept (PoC) capable of triggering host kernel panics across both Intel and AMD platforms. This vulnerability severely compromises the isolation boundaries of multi-tenant public cloud environments by allowing malicious guest VMs to escape and attack the host machine. It is particularly critical because it is the first known KVM escape affecting both Intel and AMD platforms, posing an urgent threat to infrastructure providers relying on KVM virtualization. The exploit leverages a use-after-free bug in shadow page handling, enabling guest-to-host attacks and even local privilege escalation to root on distributions like RHEL. Notably, this vulnerability remained undetected for years and was previously utilized as a 0-day exploit in Google's kvmCTF competition.

telegram · zaihuapd · Jul 7, 10:14

**Background**: KVM (Kernel-based Virtual Machine) relies on memory virtualization techniques like shadow page tables (part of the shadow MMU) to map guest virtual memory addresses to host physical addresses securely. A "use-after-free" vulnerability occurs when a program accidentally attempts to access memory that has already been freed, which attackers can exploit to execute arbitrary code. Google's kvmCTF is a bug bounty program designed to identify and fix critical vulnerabilities in the KVM hypervisor, offering rewards up to $250,000 for full VM escapes.

<details><summary>References</summary>
<ul>
<li><a href="https://ryanstan.com/mmu-virtualization-shadow-page-tables.html">MMU virtualization: shadow page tables</a></li>
<li><a href="https://encyclopedia.kaspersky.com/glossary/use-after-free/">What is Use-After-Free? | Kaspersky IT Encyclopedia</a></li>
<li><a href="https://deepwiki.com/google/security-research/2.3-kvmctf">kvmCTF | google /security-research | DeepWiki</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">KVM</span> <span class="tag-badge">Virtual Machine Escape</span> <span class="tag-badge">Linux Kernel</span> <span class="tag-badge">Cloud Computing</span></p>

---

<a id="item-2"></a>

## [EU Chat Control Surveillance Bill Advances in Parliament](https://www.heise.de/en/news/Showdown-in-Strasbourg-The-unexpected-return-of-Chat-Control-1-0-11356680.html) ⭐️ 9.0/10

The controversial EU 'Chat Control' regulation, officially known as the Child Sexual Abuse Regulation (CSAR), has passed a critical first-round vote in the European Parliament and is now heading toward a decisive second-reading vote on Thursday. The bill would require messaging platforms to scan private communications, including end-to-end encrypted messages, for child sexual abuse material. If enacted, this regulation would effectively break end-to-end encryption on platforms like WhatsApp, Signal, and Threema, representing what critics call 'a historic break' for digital privacy in democracies. The legislation also sets a global precedent — once major services comply with EU scanning requirements, other governments worldwide are expected to demand the same access, potentially normalizing mass surveillance of private communications. The procedural rules of the second reading give proponents a significant tactical advantage: while amendments or rejection require an absolute majority of 361 votes from all MEPs, passage only needs a simple majority of those present. Since the vote falls on the last day before the summer break, when many parliamentarians have already departed, opponents face a much steeper uphill battle to gather the roughly 60 additional 'no' votes needed to block it.

hackernews · miroljub · Jul 7, 15:16 · [Discussion](https://news.ycombinator.com/item?id=48819008)

**Background**: 'Chat Control' is the unofficial name for the Regulation to Prevent and Combat Child Sexual Abuse, originally proposed by European Commissioner for Home Affairs Ylva Johansson on May 11, 2022. While the stated goal is to combat child sexual abuse material (CSAM), the regulation would mandate client-side scanning technology that effectively undermines end-to-end encryption by scanning message contents before they are encrypted and transmitted. Privacy advocates, cybersecurity experts, and digital rights organizations have warned that creating such scanning infrastructure introduces vulnerabilities that could be exploited beyond their intended purpose, fundamentally compromising the security of private communications for all users.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://fightchatcontrol.eu/">Fight Chat Control - Protect Digital Privacy in the EU</a></li>
<li><a href="https://www.heise.de/en/news/Chat-control-More-and-more-warnings-about-the-weakening-of-secure-encryption-10733664.html">Chat control : More and more warnings about the... | heise online</a></li>

</ul>
</details>

**Discussion**: Commenters expressed deep frustration with what they perceive as anti-democratic tactics, noting that the timing and procedural rules deliberately advantage the bill's proponents. Several users emphasized the global ripple effects, warning that once services comply with EU mandates, other governments will inevitably demand the same surveillance capabilities. One commenter shared a resource (howtheyvote.eu) for citizens to check how their MEPs voted, while others quoted political figures like Jean-Claude Juncker to illustrate the cynical incrementalist approach to pushing through unpopular legislation.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">EU policy</span> <span class="tag-badge">encryption</span> <span class="tag-badge">digital rights</span></p>

---

<a id="item-3"></a>

## [Musk Announces xAI Dissolution and Merger into SpaceX as SpaceXAI](https://x.com/i/status/2074214064746832060) ⭐️ 9.0/10

Elon Musk confirmed that xAI will be dissolved as an independent company and rebranded as SpaceXAI, becoming SpaceX's AI product division. The company first used the new name in a computing partnership announcement with Anthropic, following SpaceX's acquisition of xAI. This restructuring eliminates xAI as a standalone brand and consolidates Musk's AI ambitions directly under SpaceX, potentially reshaping the competitive dynamics of the AI industry. The move signals deeper integration between aerospace and AI technologies within Musk's business empire. The xAI brand and its independent corporate entity will cease to exist, with its technologies and products—such as the Grok chatbot—absorbed into the SpaceX ecosystem. The timing coincides with a newly announced computing collaboration with Anthropic, a notable AI competitor known for its Claude language model.

telegram · zaihuapd · Jul 7, 02:30

**Background**: xAI is Elon Musk's artificial intelligence company, best known for developing Grok, an AI chatbot featuring voice interaction, image generation, real-time search, and advanced reasoning capabilities. SpaceX (Space Exploration Technologies Corp.) is Musk's aerospace company focused on space transportation and exploration. Anthropic is an AI safety startup founded in 2021 by former OpenAI researchers, recognized for building the Claude family of large language models.

<details><summary>References</summary>
<ul>
<li><a href="https://x.ai/grok">Grok — Truth-seeking AI Chatbot with Voice & Image Generation | xAI</a></li>
<li><a href="https://k.sina.com.cn/article_7857201856_1d45362c00190650xi.html?from=tech">有人了解 Anthropic 公 司 吗?它家的 AI... | 新浪网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">xAI</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">马斯克</span> <span class="tag-badge">企业重组</span></p>

---

<a id="item-4"></a>

## [China Plans 2 Trillion Yuan National Computing Network Over Five Years](https://t.me/zaihuapd/42399) ⭐️ 9.0/10

China is planning to invest approximately 2 trillion yuan (about $295 billion) over the next five years to build a nationwide interconnected data center network, with major facilities operated by state-owned telecom enterprises. The initiative mandates that at least 80% of AI chips and technologies come from domestic suppliers such as Huawei, explicitly aiming to reduce dependence on U.S. firms like NVIDIA and AMD. This represents one of the largest government-backed AI infrastructure programs in history, fundamentally reshaping the global semiconductor and cloud computing landscape. The mandate for at least 80% domestic chips signals a decisive acceleration of China's technological self-sufficiency strategy and could significantly impact the market dynamics for both domestic chipmakers like Huawei and foreign technology providers. The plan is a key component of Beijing's 'Six Networks' infrastructure initiative, designed to consolidate scattered regional computing resources into a unified national network. Chinese telecom operators such as China Telecom and China Unicom have already begun offering computing-power 'token packages,' selling AI computing capacity much like mobile data plans to lower barriers for large-scale AI applications.

telegram · zaihuapd · Jul 7, 04:45

**Background**: A 'computing power network' (算力网络) is a concept where distributed computing resources across different locations are connected through high-speed networks and managed as a single virtual computer, often described as 'Network As A Computer.' This allows users to access computing power on demand without needing to own physical hardware. The 'Six Networks' initiative is part of China's broader strategy to modernize its digital and physical infrastructure in parallel. Major Chinese telecom operators have recently launched token-based computing packages priced as low as 5.99 to 9.9 yuan per month, making AI computing resources accessible to individual consumers and small businesses.

<details><summary>References</summary>
<ul>
<li><a href="https://36kr.com/p/1858434719471494">到底什么是“ 算 力 网 络 ”？ -36氪</a></li>
<li><a href="https://finance.sina.cn/tech/2026-04-21/detail-inhvheze6850693.d.html?fromtech=1&vt=4">算 力 套 餐 亲民上线——北京移动 算 力 Token 套 餐 开售！| 数据安全|Qwen...</a></li>
<li><a href="https://www.guandian.cn/article/20260422/556949.html">中国移动北京公司推出个人 算 力 Token 套 餐 最低5.99元起 - 观点网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">China</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Technological Sovereignty</span> <span class="tag-badge">Cloud Computing</span></p>

---

<a id="item-5"></a>

## [Anthropic Releases Claude Sonnet 5: Most Agentic Sonnet Yet](https://t.me/zaihuapd/42404) ⭐️ 9.0/10

Anthropic has released Claude Sonnet 5, described as its most capable agentic Sonnet model to date, able to plan, use browser and terminal tools, and operate autonomously. It reportedly outperforms Sonnet 4.6 in reasoning, tool use, coding, and knowledge work while approaching Opus 4.8's performance at a lower price. This release narrows the gap between Anthropic's mid-tier Sonnet and flagship Opus lines, bringing near-top-tier agentic performance to users at a fraction of the cost. By making Sonnet 5 the default model for both Free and Pro tiers, Anthropic is positioning advanced autonomous-agent capabilities as the new baseline for everyday AI interactions. Claude Sonnet 5 is available immediately across all subscription tiers and is now the default model for Free and Pro users. On the Claude Platform, a promotional rate runs through August 31, 2026, charging $2 per million input tokens, with output token pricing also lower than Opus 4.8.

telegram · zaihuapd · Jul 7, 09:02

**Background**: Agentic AI refers to systems that can autonomously execute multi-step tasks—such as browsing the web, running terminal commands, and chaining tool calls—to complete meaningful work, rather than merely generating text. Within Anthropic's lineup, Opus is the premium tier optimized for the hardest coding and long-horizon tasks, while Sonnet is the mid-tier that balances performance and cost. According to comparative benchmarks, Opus 4.8 still edges out Sonnet 5 on SWE-bench Pro (69.2% vs. 63.2%), but Sonnet 5 offers significantly better value for most workloads.

<details><summary>References</summary>
<ul>
<li><a href="https://www.remoteopenclaw.com/blog/claude-opus-vs-sonnet">Claude Opus vs Sonnet : Opus 4.8 vs Sonnet ... | Remote OpenClaw</a></li>
<li><a href="https://yingtu.ai/en/blog/opus-sonnet">Claude Opus vs Sonnet : Which Claude Model Should You... | YingTu</a></li>
<li><a href="https://ai.plainenglish.io/agentic-ai-separating-capability-from-agent-washing-2a685daa8c3a">Agentic AI : Separating Capability from Agent Washing | by Nathalie...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-6"></a>

## [EU 'Chat Control' Legislation Threatens Encryption and Privacy](https://fightchatcontrol.eu/chat-control-overview) ⭐️ 8.0/10

The article provides a comprehensive overview of the EU's Chat Control 1.0 and 2.0 legislation, tracing the timeline from the initial 2021 temporary derogation of the ePrivacy Directive to the more expansive Chat Control 2.0 proposal. Chat Control 1.0 has already expired, yet major tech companies like Google, Meta, Microsoft, and Snap reportedly continue scanning private messages voluntarily. Chat Control represents one of the most significant threats to end-to-end encryption (E2EE) globally, as it would mandate mass surveillance of private communications under the guise of combating child sexual abuse material (CSAM). If passed, it could set a precedent that undermines digital privacy worldwide and fundamentally alters the trust model of encrypted messaging platforms used by billions of people. The proposed mechanism for scanning encrypted messages is client-side scanning (CSS), which security experts widely consider fundamentally incompatible with true end-to-end encryption. Chat Control 2.0 goes beyond the voluntary framework of 1.0 by seeking to mandate scanning requirements, and the EU Parliament recently failed to pass the legislation amid significant pushback from privacy advocates and tech leaders including Vitalik Buterin.

hackernews · gasull · Jul 7, 14:23 · [Discussion](https://news.ycombinator.com/item?id=48818311)

**Background**: End-to-end encryption (E2EE) ensures that only the sender and recipient can read message contents, with even the service provider unable to access plaintext data. The EU's ePrivacy Directive generally prohibits interception of private communications, which created the need for the 'temporary derogation' that enabled Chat Control 1.0. Client-side scanning attempts to solve the encryption dilemma by scanning content on the user's device before it is encrypted and sent, but researchers have demonstrated that this approach introduces vulnerabilities that can be exploited and effectively breaks the security guarantees of E2EE.

<details><summary>References</summary>
<ul>
<li><a href="https://fightchatcontrol.eu/chat-control-overview">Chat Control 1 . 0 vs 2 . 0 - Fight Chat Control</a></li>
<li><a href="https://www.patrick-breyer.de/en/posts/chat-control/?ref=cyberlaw.stanford.edu">Chat Control : The EU ’s CSAM scanner proposal – Patrick Breyer</a></li>
<li><a href="https://www.internetsociety.org/resources/doc/2023/client-side-scanning/">Client - Side Scanning - Internet Society</a></li>

</ul>
</details>

**Discussion**: Commenters overwhelmingly oppose the legislation, with multiple users expressing concern that it represents a surveillance state overreach disguised as child protection. Technical discussions center on the fundamental impossibility of scanning E2EE without either implementing man-in-the-middle decryption or mandatory on-device scanning, both of which compromise security. One user notes the irony that even after Chat Control 1.0 expired, major tech companies continued scanning voluntarily, raising questions about enforcement and corporate compliance with privacy directives.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Surveillance</span> <span class="tag-badge">Encryption</span> <span class="tag-badge">Policy</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-7"></a>

## [Microsoft Reportedly Fires idTech Engine Team at id Software](https://gamefromscratch.com/microsoft-fire-idtech-team-at-id-software/) ⭐️ 8.0/10

A rumor has emerged that Microsoft has dismissed the idTech engine development team at id Software, potentially signaling a strategic shift away from proprietary engine development. The report lacks concrete evidence but has triggered widespread debate within the gaming and developer communities. If true, this move represents a significant shift in the gaming industry's landscape, where proprietary engines like idTech are increasingly being abandoned in favor of Unreal Engine 5. It raises concerns about engine monoculture, the commoditization of game developers, and the loss of decades of specialized engine expertise that powered iconic franchises like Doom and Wolfenstein. The original article does not present concrete evidence that the idTech team was specifically targeted for layoffs, leading some commenters to question the factual basis of the report. The broader context involves Microsoft's ongoing Xbox restructuring following its acquisition of Activision Blizzard, which has included significant workforce reductions across multiple studios.

hackernews · bauc · Jul 7, 15:33 · [Discussion](https://news.ycombinator.com/item?id=48819244)

**Background**: idTech is a series of proprietary game engines developed by id Software, with roots tracing back to the original Doom engine and evolving through multiple iterations like id Tech 5 and id Tech 6. These engines powered landmark titles including Rage, Wolfenstein: The New Order, and the modern Doom reboots. The engines were historically known for pushing technical boundaries, with John Carmack's pioneering work in 3D graphics and engine architecture influencing the entire industry.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Id_Tech">id Tech - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Id_tech_5_engine">Id tech 5 engine</a></li>

</ul>
</details>

**Discussion**: Commenters express deep concern that the move reflects a broader industry trend of replacing specialized engine developers with lower-cost contractors familiar with Unreal Engine 5. Some argue Microsoft is making a strategic blunder by ceding engine dominance to Epic Games, while others note the lack of evidence and suggest the restructuring may ultimately benefit talent trapped in corporate bureaucracy. A recurring theme is the tension between corporate cost-cutting and preserving the unique technical cultures that made acquired studios successful.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Game Development</span> <span class="tag-badge">idTech</span> <span class="tag-badge">Unreal Engine</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-8"></a>

## [Recovering Active ADFS Signing Keys via Machine DPAPI](https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi/) ⭐️ 8.0/10

Mandiant discovered that when ADFS certificates are manually rotated, configuration drift leaves active signing keys exposed in Machine DPAPI, while the WID database only contains an expired "ghost" certificate. Adversaries can extract this active key from the machine's cryptographic store to forge SAML tokens while avoiding interactions with heavily monitored processes like LSASS. This technique enables attackers to execute highly stealthy Golden SAML attacks, bypassing multi-factor authentication (MFA) and accessing SAML-federated applications like Microsoft 365. Because the method sidesteps standard detection mechanisms like monitoring the LSASS memory, it presents a significant and silent threat to enterprise identity security. The vulnerability occurs when AutoCertificateRollover is disabled, causing the active key to be stored in the system's machine-scoped cryptographic store rather than being updated in the ADFS database. If an attacker only extracts the key from the WID database, Entra ID will reject the forged tokens with an AADSTS500172 error due to invalid signing material.

rss · Google Threat Intelligence · Jul 7, 14:00

**Background**: Active Directory Federation Services (ADFS) is a Microsoft software component that provides single sign-on capabilities by sharing identity information across security boundaries. A Golden SAML attack occurs when an adversary steals the private key of an ADFS token-signing certificate to forge SAML tokens, allowing them to impersonate any user. Windows Data Protection API (DPAPI) is a cryptographic interface used to protect sensitive data, where Machine DPAPI specifically protects keys at the system level using the DPAPI_SYSTEM LSA secret.

<details><summary>References</summary>
<ul>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi/">Recovering Active ADFS Signing Keys via Machine DPAPI</a></li>
<li><a href="https://netwrix.com/en/cybersecurity-glossary/cyber-security-attacks/golden-saml-attack/">Golden SAML attack : Forged access to hybrid environments | Netwrix</a></li>
<li><a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-ts-td-certs-ad-fs">Obtain and configure token signing and token... | Microsoft Learn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">ADFS</span> <span class="tag-badge">DPAPI</span> <span class="tag-badge">Golden SAML</span></p>

---

<a id="item-9"></a>

## [Behind the Refusal: Behavioral Monitoring for LLM Guardrails](https://paper.seebug.org/3496) ⭐️ 8.0/10

A new research paper by William Hackett and Peter Garraghan introduces a behavioral monitoring approach to determine when Large Language Model (LLM) guardrails are activated. This method is specifically designed to help security researchers identify guardrail triggers during black-box adversarial simulations of production-level AI systems. This research addresses a critical blind spot where security testers could not effectively evaluate or bypass defensive measures without understanding how or when they were triggered. By providing visibility into guardrail activation within opaque, black-box environments, the study significantly enhances AI safety auditing and helps developers fortify models against real-world malicious prompts. This approach focuses on monitoring observable behavioral signals rather than relying on internal system logs or white-box access to the model's architecture. It specifically targets the black-box testing constraint, allowing researchers to differentiate between a model's standard conversational refusals and explicit guardrail interventions.

rss · Seebug漏洞社区 · Jul 7, 08:33

**Background**: LLM guardrails are safety controls deployed between users and foundation models to monitor and filter malicious inputs or unsafe outputs. In cybersecurity, black-box adversarial simulation occurs when an attacker or researcher tests a system without any prior knowledge of its internal workings, model weights, or specific defense configurations. This is a highly realistic testing method, but researchers often struggle to determine whether an AI's refusal is due to active safety guardrails or simply the model's inherent limitations.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/data-science/safeguarding-llms-with-guardrails-4f5d9f57cff2">Safeguarding LLMs with Guardrails | by Aparna Dhinakaran | Medium</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9601915/">An Optimized Black - Box Adversarial Simulator Attack Based on...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">LLM Guardrails</span> <span class="tag-badge">Adversarial Simulation</span> <span class="tag-badge">Behavioral Monitoring</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-10"></a>

## [Windows 11 Bug Can Consume Up to 513 GB of Disk Storage](https://www.windowslatest.com/2026/07/06/microsoft-admits-a-windows-11-bug-is-eating-up-to-500gb-of-storage-verify-if-you-are-affected/) ⭐️ 8.0/10

A confirmed bug in Windows 11 causes the Capability Access Manager's WAL file (CapabilityAccessManager.db-wal) to abnormally bloat, with users reporting storage consumption ranging from tens of gigabytes up to approximately 513 GB. Microsoft has acknowledged the issue, delivered partial mitigation in the June 2026 optional update KB5095093, and plans a permanent fix in the July 2026 patch. This bug can silently consume an enormous amount of disk space, potentially causing system instability, failed updates, or application crashes for any Windows 11 user. Given that the Capability Access Manager is a core system service tracking privacy-sensitive permissions, the issue affects a broad user base and underscores the importance of proactive storage monitoring. The root cause is that the WAL (Write-Ahead Log) file fails to properly checkpoint — meaning transaction logs are not being merged back into the main database (CapabilityAccessManager.db) as expected. As a temporary workaround, users can stop the Capability Access Manager service, then safely delete the bloated WAL file, though the issue may recur until the permanent July patch is installed.

telegram · zaihuapd · Jul 7, 06:34

**Background**: Write-Ahead Logging (WAL) is a standard database technique for ensuring atomicity and durability — it records changes to an append-only auxiliary log file before applying them to the main database, enabling crash recovery. Under normal operation, WAL files are periodically checkpointed and merged back into the main database, keeping their size small. The Capability Access Manager is a Windows service that tracks and records which applications access privacy-sensitive resources like the camera, microphone, location, and screen capture, storing this data in a SQLite database. When the checkpoint process fails, the WAL file grows indefinitely, consuming vast amounts of disk space.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Write-ahead_logging">Write - ahead logging - Wikipedia</a></li>
<li><a href="https://www.thewindowsclub.com/capability-access-manager-taking-up-storage-in-windows-11">Capability Access Manager taking up storage in Windows 11</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Windows 11</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Bug</span> <span class="tag-badge">Storage Management</span> <span class="tag-badge">System Administration</span></p>

---

<a id="item-11"></a>

## [DeepSeek Developing Own AI Chip to Cut NVIDIA and Huawei Dependence](https://www.reuters.com/world/china/chinas-deepseek-developing-its-own-ai-chip-sources-say-2026-07-07/) ⭐️ 8.0/10

Chinese AI company DeepSeek has been developing its own inference-focused AI chip for approximately one year, and has begun engaging with chip design, foundry, and storage companies while quietly recruiting chip design engineers in recent months. The chip targets the inference phase—where trained models generate responses to users—rather than the model training phase. This move represents a major strategic shift for DeepSeek to achieve supply chain autonomy amid tightening U.S. export controls on advanced AI chips, reducing dependence on both NVIDIA's foreign GPUs and Huawei's domestic Ascend chips. If successful, it could position DeepSeek as a vertically integrated AI company and intensify competition in China's already rapidly evolving AI chip ecosystem. DeepSeek's previous models relied on NVIDIA H800 chips (a China-specific version created after initial U.S. export controls) and Huawei Ascend chips. The project remains in early stages, and founder Liang Wenfeng publicly acknowledged in a rare 2024 interview that chip restrictions represent a significant challenge for the company.

telegram · zaihuapd · Jul 7, 11:08

**Background**: AI chips generally serve two distinct purposes: training chips for building models and inference chips for running trained models in production. The U.S. government has progressively tightened export controls on high-performance AI chips to China, making NVIDIA's H800 and A800 unavailable for export since October 2023. Huawei's Ascend series, including the 910B and 910C, has emerged as the leading domestic alternative, with Huawei planning its chip roadmap through 2028. Inference chip demand has now surpassed training chip demand in data centers, making it an increasingly critical market segment.

<details><summary>References</summary>
<ul>
<li><a href="https://cloud.tencent.com/developer/article/2359846">腾讯刘炽平：已储备大量 H 800 ...</a></li>
<li><a href="https://www.53ai.com/news/zhinengyingjian/2024110882904.html">AI Phone... - 53 AI - AI 知识库|大模型知识库|大模型 训 练 |智能体开发</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">硬件</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">中国科技</span></p>

---

<a id="item-12"></a>

## [China's Ministry of Commerce Considers Restricting Export of Top Domestic AI Models](https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/) ⭐️ 8.0/10

Reuters reported on July 7 that China's Ministry of Commerce has convened meetings over the past month with leading AI companies including Alibaba, ByteDance, and Zhipu AI to discuss restricting overseas access to China's most advanced AI models, including unreleased ones. Proposed measures include criminalizing the leakage or theft of core AI technologies under national security laws and potentially limiting foreign capital investment in domestic AI startups. If implemented, these restrictions would reshape the global AI competitive landscape by limiting international access to China's most capable models and could trigger reciprocal measures from other nations. The policy would significantly affect the business strategies of Chinese AI companies that have been expanding overseas, as well as foreign developers and enterprises that rely on Chinese AI APIs and services. The scope of the restrictions remains under discussion and may only apply to newly released models going forward, with uncertainty about whether the policy will ultimately be enacted. The discussions also cover the feasibility of controlling cross-border API access and open-source model distribution, which presents significant enforcement challenges similar to those faced by the U.S. in regulating open-source AI weights under its Export Administration Regulations.

telegram · zaihuapd · Jul 7, 11:42

**Background**: China's domestic AI sector has rapidly advanced, with companies like Alibaba (Qwen/Tongyi Qianwen), ByteDance (Doubao), and Zhipu AI (GLM series) developing large language models that compete globally in performance. Zhipu AI, spun out of Tsinghua University, is one of China's highest-valued AI startups and offers APIs for various large models. The U.S. has already been attempting to bring open-source AI models under its Export Administration Regulations (EAR), but faces enforcement difficulties in tracking model weights and derivative projects. These developments reflect an escalating global technology decoupling where both nations are treating advanced AI as a strategic asset subject to national security controls.

<details><summary>References</summary>
<ul>
<li><a href="https://segmentfault.com/a/1190000046530687">人工 智 能 - 国产五 大 AI 模 型 哪家强？ DeepSeek... - SegmentFault 思否</a></li>
<li><a href="https://ipc.court.gov.cn/zh-cn/news/view-5766.html">ipc.court.gov.cn/zh-cn/news/view-5766.html</a></li>
<li><a href="https://open.bigmodel.cn/">Zhipu ai open platform</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI政策</span> <span class="tag-badge">技术出口限制</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">地缘政治</span> <span class="tag-badge">大模型</span></p>

---

<a id="item-13"></a>

## [WeChat Record Export Tool WeFlow Removed from GitHub via DMCA Notice](https://github.com/hicccc77/WeFlow) ⭐️ 8.0/10

On July 7th, the GitHub repository for WeFlow, a local tool for viewing, analyzing, and exporting WeChat chat records, was taken down following a DMCA (Digital Millennium Copyright Act) notice. The repository has been deleted, though an archive link remains available for reference. This event highlights the ongoing tension between user data ownership and platform control, particularly within closed ecosystems like WeChat. It underscores the significant legal risks faced by open-source developers who create reverse engineering or data extraction tools for proprietary applications. WeFlow offered features such as generating annual chat reports, group chat profiling, an anti-recall function for messages, and an HTTP API. A DMCA takedown means GitHub complied with a copyright infringement claim, and the repository will remain inaccessible unless the developer successfully files a counter-notice.

telegram · zaihuapd · Jul 7, 15:19

**Background**: WeChat is a dominant messaging platform that does not natively offer robust tools for users to export their personal chat histories, creating a high demand for third-party extraction utilities. The DMCA "notice-and-takedown" system provides a legal mechanism for copyright holders to request the removal of allegedly infringing material from online platforms like GitHub. Additionally, WeChat's anti-recall feature works by intercepting the "revoke" command sent from the server to the client, ensuring the original message remains visible.

<details><summary>References</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/1887554520982214102">跨境卖家必读：美国DMCA“通知-下架-反通知”规则详解</a></li>
<li><a href="https://blog.csdn.net/gitblog_00493/article/details/157012585">深度解析微信防撤回技术：从原理到实战的完整指南-CSDN博客</a></li>
<li><a href="https://www.downxia.com/downinfo/512641.html">weflow 微 信 导 出 | WeFlow ...</a></li>

</ul>
</details>

**Discussion**: The news was shared within community channels, indicating strong user interest in data management and recovery tools. Although specific comments are not provided, takedowns of popular utilities typically spark debates regarding digital rights, the chilling effect on open-source development, and corporate control over user data.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">WeChat</span> <span class="tag-badge">DMCA</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Data Privacy</span> <span class="tag-badge">Takedown</span></p>

---