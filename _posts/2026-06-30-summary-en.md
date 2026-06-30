---
layout: default
title: "Horizon Summary: 2026-06-30 (EN)"
date: 2026-06-30
lang: en
---

> From 53 items, 11 important content pieces were selected

---

1. [Anthropic Releases Claude Sonnet 5 with Enhanced Agentic Capabilities](#item-1) ⭐️ 9.0/10
2. [Microsoft Warns of MCP Tool Poisoning in AI Agents](#item-2) ⭐️ 9.0/10
3. [Huawei Open-Sources Pangu 2.0 Models Up to 505B Parameters](#item-3) ⭐️ 9.0/10
4. [Claude Code v2.1.91 Accused of Covert Telemetry Tracking](#item-4) ⭐️ 9.0/10
5. [Anthropic Releases Claude Sonnet 4.6 with Major Performance and Computer Use Gains](#item-5) ⭐️ 9.0/10
6. [Looking Ahead to Anticipated Features in PostgreSQL 19](#item-6) ⭐️ 8.0/10
7. [EU Digital ID Wallets Criticized for Dependence on Apple and Google](#item-7) ⭐️ 8.0/10
8. [LongCat-2.0: 1.6T Parameter MoE Model Trained on Huawei Ascend](#item-8) ⭐️ 8.0/10
9. [WatchTowr Labs Discloses Citrix NetScaler Pre-Auth Memory Overread Vulnerability (CVE-2026-8451)](#item-9) ⭐️ 8.0/10
10. [ToddyCat APT Deploys Umbrij Tool to Hijack Gmail OAuth Tokens](#item-10) ⭐️ 8.0/10
11. [Supreme Court Requires Warrant for Cell Phone Location Data](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic Releases Claude Sonnet 5 with Enhanced Agentic Capabilities](https://www.anthropic.com/news/claude-sonnet-5) ⭐️ 9.0/10

Anthropic has released Claude Sonnet 5, the latest model in the Sonnet family and an upgrade to Claude Sonnet 4.6, with significant improvements in autonomous agentic performance. The model is optimized to make plans, use tools like browsers and terminals, and run autonomously at a level previously requiring larger, more expensive models. This release positions Claude Sonnet 5 as a cheaper alternative to larger models like Opus, GPT-5.5, and Gemini Pro, potentially making advanced agentic AI more accessible to developers. The model's improved autonomous capabilities mark a significant step in the agentic AI era, where AI systems can increasingly act on their own to complete complex tasks. According to the system card, Claude Sonnet 5 shows regressions in some areas, notably scoring lower than Sonnet 4.6 on CyberGym vulnerability discovery and scoring 0 with default mitigations enabled. Community analysis of cost-per-task benchmarks suggests that at effort levels above medium, Opus consistently outperforms Sonnet 5 for a given cost, making the model's value proposition less clear for demanding tasks.

hackernews · marinesebastian · Jun 30, 17:59 · [Discussion](https://news.ycombinator.com/item?id=48736605)

**Background**: Anthropic's Claude model family includes different tiers: Opus (the most capable and expensive), Sonnet (a balanced workhorse model), and Haiku (the smallest and fastest). The 'agentic AI' paradigm refers to AI systems that can autonomously plan, use tools, and complete multi-step tasks with minimal human intervention. Sonnet-class models have been particularly important for developers, as Claude Sonnet 3.5, 3.6, and 3.7 were among the first models to demonstrate impressive coding and tool-use skills at a reasonable price point.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/news/claude-sonnet-5?s=03">Introducing Claude Sonnet 5 \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/claude-sonnet-5-system-card">Claude Sonnet 5 System Card - anthropic.com</a></li>
<li><a href="https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/">Anthropic launches Claude Sonnet 5 as a cheaper way to run ...</a></li>

</ul>
</details>

**Discussion**: Community sentiment is mixed, with several users questioning the cost-effectiveness of Sonnet 5 compared to Opus at higher effort levels, noting that Opus performs better for a given cost in many benchmarks. One user highlighted performance regressions, including worse price/performance than GLM 5.2 and significantly lower scores on cybersecurity tasks. However, some users praised it as a solid incremental update for everyday coding tasks, especially when work is broken down into smaller pieces.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Claude</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-2"></a>

## [Microsoft Warns of MCP Tool Poisoning in AI Agents](https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/) ⭐️ 9.0/10

Microsoft Incident Response published a detailed analysis of MCP tool poisoning, a novel attack vector where threat actors embed malicious instructions within MCP tool descriptions that are invisible to users but visible to AI models. The blog post, published on June 30, 2026, explains how poisoned AI agents can be turned into a control plane for data loss and unauthorized actions. As AI agents transition from passively reading data to autonomously executing actions through tools, MCP tool poisoning represents a critical emerging threat that could affect any organization deploying agentic AI systems. With MCP being adopted by major providers like OpenAI and Google DeepMind, this attack vector has broad implications for the entire AI ecosystem, making detection and mitigation strategies essential for security professionals. MCP tool poisoning is classified as an indirect prompt injection attack where malicious instructions are hidden in tool descriptions that users never see but AI agents process when calling the tool. The injected instructions can hijack agent behavior, exfiltrate sensitive data, and trigger unauthorized actions, effectively turning trusted agents into attack vectors.

rss · Microsoft Security · Jun 30, 15:57

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize how AI systems like large language models integrate with external tools, data sources, and workflows. Agentic AI refers to AI systems capable of pursuing goals, using tools, and taking actions with varying degrees of autonomy. MCP has been widely adopted by major AI providers including OpenAI and Google DeepMind, making it a cornerstone of the modern autonomous agent ecosystem but also creating novel attack surfaces due to untrusted external tools.

<details><summary>References</summary>
<ul>
<li><a href="https://owasp.org/www-community/attacks/MCP_Tool_Poisoning">MCP Tool Poisoning - OWASP Foundation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol</a></li>
<li><a href="https://en.wikipedia.org/wiki/Agentic_AI">Agentic AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Agentic AI</span> <span class="tag-badge">MCP Tool Poisoning</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Model Context Protocol</span></p>

---

<a id="item-3"></a>

## [Huawei Open-Sources Pangu 2.0 Models Up to 505B Parameters](https://t.me/zaihuapd/42259) ⭐️ 9.0/10

At the Huawei Developer Conference 2026, Huawei announced the open-sourcing of the Pangu 2.0 models. The release includes a massive 505B-parameter Pro version and a 92B-parameter Flash version, both supporting an ultra-long context window of 512K. This release is a major milestone in the AI industry, providing a highly competitive, open-source alternative to proprietary models in a market dominated by NVIDIA. It strongly underscores Huawei's strategy to promote a domestic AI ecosystem, with the models being specifically optimized for their in-house Ascend NPUs and HarmonyOS. The openPangu-2.0-Flash model utilizes a Mixture-of-Experts (MoE) architecture with 92 billion total parameters and 6 billion activated parameters. Huawei plans to progressively release seven major components, including pre-training code, starting June 30th, with the models already debuting on the Ascend Tribe community on GitCode.

telegram · zaihuapd · Jun 30, 06:01

**Background**: Pangu Large Models are a series of AI models developed by Huawei, originally introduced before large language models became widely recognized globally. Richard Yu, Huawei's Executive Director, noted that the company has allocated much of its computing power to support other domestic enterprises, leaving limited resources for itself. Ascend NPUs represent Huawei's proprietary AI hardware ecosystem, designed to process deep learning algorithms efficiently and independently of foreign technology.

<details><summary>References</summary>
<ul>
<li><a href="https://www.aimadetools.com/blog/openpangu-2-complete-guide/">openPangu 2.0 Complete Guide: Huawei's 505B Model Trained ...</a></li>
<li><a href="https://www.techinasia.com/news/huawei-unveils-new-open-source-ai-model-openpangu">Huawei unveils new open-source AI model openPangu - Tech in Asia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Pangu 2.0</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

<a id="item-4"></a>

## [Claude Code v2.1.91 Accused of Covert Telemetry Tracking](https://www.reddit.com/r/ClaudeAI/comments/1ujila1/anthropic_embedded_spyware_in_claude_code_and/) ⭐️ 9.0/10

A reverse engineering analysis claims that since version 2.1.91, Claude Code checks whether the user's system timezone is Asia/Shanghai or Asia/Urumqi and whether proxy URLs point to Chinese domains or Chinese AI labs. The results are then steganographically encoded into system prompts sent to the Anthropic API by altering the date format and the Unicode apostrophe in 'Today's date is', using XOR key 91 for obfuscation. This revelation strikes at the core tension between anti-abuse measures and user trust, as obfuscated telemetry embedded in a widely used coding assistant raises serious transparency and privacy concerns. The lack of disclosure in release notes means users had no opportunity to make informed decisions about data being transmitted from their machines. The steganographic technique modifies the Unicode codepoint of the apostrophe in the system prompt's date string to encode a single bit indicating whether Chinese timezone or proxy usage was detected. The XOR key 91 was applied to further obfuscate the detection logic in the binary, and the entire mechanism was absent from the changelog.

telegram · zaihuapd · Jun 30, 10:34

**Background**: Claude Code is Anthropic's CLI-based coding assistant that runs on users' local machines and communicates with Anthropic's API. Model distillation is a technique where a smaller model is trained using outputs from a larger, more capable model — a practice some Chinese AI labs have been suspected of conducting using unauthorized access. Anthropic restricts API access from certain regions, leading some users to employ proxies to bypass these restrictions, which in turn prompts anti-abuse countermeasures.

**Discussion**: The community is deeply divided: critics argue that covert telemetry on user machines is unacceptable regardless of business justification, while supporters contend the anti-distillation intent is legitimate and doesn't harm normal developers. Some commenters note the implementation was surprisingly sloppy for a covert operation, while others point out that explicit telemetry fields would be trivially stripped by malicious proxy gateways, justifying the steganographic approach. Several users advocate switching to open-source alternatives like Codex CLI for better auditability.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Telemetry</span> <span class="tag-badge">Security</span> <span class="tag-badge">Anthropic</span></p>

---

<a id="item-5"></a>

## [Anthropic Releases Claude Sonnet 4.6 with Major Performance and Computer Use Gains](https://t.me/zaihuapd/42277) ⭐️ 9.0/10

Anthropic has released Claude Sonnet 4.6, delivering significant performance improvements in programming, computer operation, and long-context reasoning. The model is now the default version for both Free and Pro users, featuring a 1M token context window and notable gains in the OSWorld benchmark for Computer Use capabilities. This release represents a major advancement in the most competitive areas of AI research—coding, computer use, and long-context reasoning. The 1M token context window combined with substantially improved Computer Use capabilities positions Claude as a more powerful agent for complex, multi-step workflows, directly challenging other frontier model providers. The model is available through the API and major cloud platforms with pricing consistent with prior versions. Sonnet 4.6 demonstrates measurable improvements over its predecessor in handling complex code and office tasks, with Computer Use performance validated by progress on the OSWorld evaluation benchmark.

telegram · zaihuapd · Jun 30, 17:58

**Background**: Computer Use is an Anthropic-introduced capability that allows Claude to interact with graphical user interfaces—clicking buttons, typing text, and navigating applications—enabling AI to perform real-world computer tasks autonomously. OSWorld is a benchmark environment designed to evaluate how well AI agents can operate computer systems by completing realistic tasks across various applications. A 1M token context window allows the model to process extremely large documents or extended conversation histories in a single query, which is critical for tasks involving extensive codebases or lengthy reference materials.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Computer_user_satisfaction">Computer user satisfaction</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Computer Use</span> <span class="tag-badge">AI Models</span></p>

---

<a id="item-6"></a>

## [Looking Ahead to Anticipated Features in PostgreSQL 19](https://www.snowflake.com/en/blog/engineering/postgresql-19-features-beta/) ⭐️ 8.0/10

A recent article outlines the anticipated features and improvements coming to PostgreSQL 19, sparking deep technical discussions among community members. Key additions expected in the new release include COPY and logical replication improvements, as well as native application-time temporal data support based on the SQL:2011 standard. PostgreSQL is a foundational technology in modern software engineering, making the roadmap of its next major version highly impactful for the broader ecosystem. The upcoming improvements to replication and data handling will streamline day-to-day operations, while community feedback highlights critical architectural needs for the database's future scalability. The expected updates notably feature enhanced logical replication and native temporal tables compliant with SQL:2011. Despite these additions, experienced practitioners point out that significant operational pain points remain, such as the complexity of in-place major version upgrades in Docker and the heavy memory footprint per database connection.

hackernews · thinkingemote · Jun 30, 14:14 · [Discussion](https://news.ycombinator.com/item?id=48733031)

**Background**: PostgreSQL is a powerful, open-source object-relational database system that has become a default choice for many enterprise applications. Over the years, its ecosystem has relied on external tools and extensions to handle large-scale operations, such as connection poolers for high concurrency and external tools for backups. As datasets grow exponentially, the community is actively debating how the core database should evolve to support features like columnar storage natively without relying on third-party extensions.

**Discussion**: The community generally praises the practical, day-to-day operational improvements like better COPY and logical replication. However, long-term users raised significant architectural concerns, strongly desiring lightweight connections to reduce memory overhead, native columnar storage for large scientific datasets, and simplified in-place major version upgrades for containerized environments.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">PostgreSQL</span> <span class="tag-badge">Databases</span> <span class="tag-badge">Systems</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-7"></a>

## [EU Digital ID Wallets Criticized for Dependence on Apple and Google](https://waag.org/en/article/european-digital-id-wallets-are-gift-google-and-apple/) ⭐️ 8.0/10

An article published by Waag highlights that the EU's reference implementation for digital ID wallets strictly requires Google Play Services on Android and Apple's security services on iOS, effectively locking out alternative operating systems like GrapheneOS. This dependency on two US tech giants directly undermines the EU's stated goals of achieving digital sovereignty and user autonomy. This revelation exposes a fundamental contradiction in EU digital policy: promoting European digital sovereignty while building critical identity infrastructure on platforms controlled by American corporations. The dependence on remote attestation mechanisms also grants governments and platform owners the power to determine which operating systems are 'acceptable,' potentially enabling future restrictions on user choice and privacy. The EU reference wallet on Android relies on Play Integrity API, which requires Google Play Services and is incompatible with de-Googled operating systems like GrapheneOS. Italy's IO app, which implements the wallet for government services, age verification, and document storage, has continuously refused user requests for GrapheneOS support. Critics note that even Android's hardware attestation API, as an alternative to Play Integrity, still constitutes remote attestation that undermines device autonomy.

hackernews · donohoe · Jun 30, 10:36 · [Discussion](https://news.ycombinator.com/item?id=48730729)

**Background**: The EU is developing a digital identity wallet under the eIDAS 2.0 regulation, intended to provide citizens with a secure, privacy-preserving way to store and share identity documents, diplomas, and other credentials across member states. Digital sovereignty has been a major EU policy theme, emphasizing the need for Europe to reduce its dependence on non-European technology providers in critical infrastructure. Remote attestation is a security mechanism where a device proves its software state to a remote server, which can then decide whether to trust the device — a feature that, while enhancing security, also enables platform lock-in.

**Discussion**: The community discussion, which generated 279 comments, overwhelmingly criticized the EU for hypocrisy in its digital sovereignty stance while depending on US tech giants. Users highlighted specific technical issues like Play Integrity requirements excluding GrapheneOS users, warned that remote attestation amounts to government overreach that could eventually force OS developers to install backdoors, and noted that regulations tend to entrench monopolies by pricing out smaller competitors.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Digital Identity</span> <span class="tag-badge">Digital Sovereignty</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Mobile Security</span> <span class="tag-badge">EU Regulations</span></p>

---

<a id="item-8"></a>

## [LongCat-2.0: 1.6T Parameter MoE Model Trained on Huawei Ascend](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10

LongCat-2.0 has been announced as a massive Mixture-of-Experts (MoE) model with 1.6 trillion total parameters and 48 billion active parameters. Most notably, the model was reportedly trained and deployed on large-scale clusters of Huawei Ascend AI chips rather than Nvidia GPUs. If confirmed, this represents a rare demonstration that trillion-scale models can be trained end-to-end on non-Nvidia hardware, which has significant implications for the AI industry's dependence on Nvidia's ecosystem. It signals that Huawei's Ascend platform may be maturing enough to support frontier-scale model training, potentially reshaping the competitive landscape of AI hardware. 开发者指出，与Nvidia成熟的GPU生态系统相比，昇腾的支持软件社区仍不够成熟，需要大量的工程投入来构建稳定且可扩展的基础设施。社区成员推测使用的是华为昇腾910C芯片，部分人对模型回复中的审查问题以及在HuggingFace上缺乏可下载的模型权重表示了担忧。

hackernews · benjiro29 · Jun 30, 00:30 · [Discussion](https://news.ycombinator.com/item?id=48727116)

**Background**: Mixture-of-Experts (MoE) is an architecture where only a subset of a model's parameters (the 'experts') are activated for any given input, allowing for much larger total parameter counts while keeping inference costs manageable. Huawei's Ascend series, particularly the 910 series, are AI ASIC chips designed to compete with Nvidia's data center GPUs, but they have historically lagged in software ecosystem maturity. Training trillion-scale models requires thousands of interconnected chips working in unison, making both hardware reliability and software tooling critical factors.

**Discussion**: The community discussion is highly engaged and divided. The most significant insight comes from user gardnr, who identifies the use of Huawei Ascend 910C chips as the real news story, highlighting the software infrastructure challenges overcome. Other users tested the model and found heavy censorship on politically sensitive topics (e.g., questions about Mao Zedong), while user tcper expressed strong skepticism, noting that nothing is downloadable from their HuggingFace page and calling the company's track record into question.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">MoE</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Huawei Ascend</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-9"></a>

## [WatchTowr Labs Discloses Citrix NetScaler Pre-Auth Memory Overread Vulnerability (CVE-2026-8451)](https://labs.watchtowr.com/citrixbleed-to-infinity-and-beyond-citrix-netscaler-pre-auth-memory-overread-cve-2026-8451/) ⭐️ 8.0/10

WatchTowr Labs has published a technical analysis of a new pre-authentication memory overread vulnerability in Citrix NetScaler, dubbed 'CitrixBleed To Infinity And Beyond' and assigned CVE-2026-8451. The disclosure includes exploit details and methodology for the vulnerability, which can be triggered without valid credentials. Citrix NetScaler is widely deployed in enterprise environments for application delivery and load balancing, making this a high-impact target. A pre-auth memory overread can potentially leak sensitive data from process memory, including session tokens and credentials, enabling attackers to bypass authentication and gain access to internal networks. The vulnerability is exploitable pre-authentication, meaning no valid credentials are required to trigger the memory overread condition. This follows a lineage of similar Citrix vulnerabilities including the original 'CitrixBleed' (CVE-2023-4966), suggesting a recurring class of memory safety issues in the NetScaler codebase.

rss · watchTowr Labs - Blog · Jun 30, 19:35

**Background**: Citrix NetScaler (now part of Citrix ADC/NetScaler ADC) is an application delivery controller used by organizations for load balancing, traffic management, and secure remote access. A memory overread vulnerability occurs when software reads beyond the bounds of an allocated memory buffer, potentially exposing data that should not be accessible. The original 'CitrixBleed' vulnerability (CVE-2023-4966) discovered in 2023 was a similar issue that allowed attackers to extract session tokens from NetScaler memory, leading to widespread exploitation before patches were applied.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Citrix NetScaler</span> <span class="tag-badge">Memory Overread</span> <span class="tag-badge">Exploit</span></p>

---

<a id="item-10"></a>

## [ToddyCat APT Deploys Umbrij Tool to Hijack Gmail OAuth Tokens](https://securelist.com/toddycat-apt-umbrij-tool-and-oauth/120251/) ⭐️ 8.0/10

Kaspersky researchers have published a detailed technical analysis of 'Umbrij,' a newly discovered tool utilized by the ToddyCat APT group to compromise corporate Gmail accounts. The tool specifically targets and hijacks OAuth authorization tokens to stealthily maintain access to victims' Google services. This discovery exposes a highly stealthy and modern approach to compromising corporate communications, bypassing traditional password-based defenses. It provides essential threat intelligence for security and incident response teams, highlighting the need to monitor and secure OAuth token usage within enterprise environments. By targeting OAuth tokens rather than passwords, the attackers establish persistent, passwordless access that is difficult to detect using standard authentication monitoring. The analysis exposes the inner workings of this novel tool, demonstrating how the threat actors can manipulate the authorization flow to seamlessly interact with Google APIs.

rss · Kaspersky  - Information about Viruses， Hackers and Spam · Jun 30, 10:00

**Background**: ToddyCat is an advanced persistent threat (APT) group known for targeting high-profile organizations and government entities in Asia and Europe. OAuth 2.0 is an industry-standard authorization framework that allows third-party applications to obtain limited access to user accounts without exposing passwords. Threat actors increasingly abuse OAuth tokens because they offer continuous access and often bypass multi-factor authentication (MFA) requirements.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">APT</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">ToddyCat</span></p>

---

<a id="item-11"></a>

## [Supreme Court Requires Warrant for Cell Phone Location Data](https://www.androidpolice.com/supreme-court-protects-your-cell-phone-location-data-after-googles-role-in-a-conviction/) ⭐️ 8.0/10

The US Supreme Court ruled 6-3 that the government must obtain a judicial warrant to request citizens' cell phone location data from third-party tech companies. This decision directly addresses and limits the use of reverse location searches, commonly known as geofence warrants, used by law enforcement. This landmark decision significantly bolsters digital privacy rights by bringing third-party location data under the protection of the Fourth Amendment. It restricts law enforcement's ability to conduct dragnet-style data collections from major tech companies like Google. The ruling stems from a 2019 bank robbery where police used a geofence warrant to compel Google to narrow down millions of user accounts to a single suspect. Justice Elena Kagan authored the majority opinion, asserting that individuals maintain a reasonable expectation of privacy over their historical location records, and the case was remanded to lower courts to determine if the original warrant was lawful.

telegram · zaihuapd · Jun 30, 04:00

**Background**: The Fourth Amendment of the US Constitution protects citizens from unreasonable searches and seizures, generally requiring law enforcement to demonstrate probable cause to obtain a warrant. A geofence warrant is a relatively new surveillance tool that asks tech companies to provide data on all devices present in a specific area during a specific time. Previously, the third-party doctrine suggested individuals relinquished privacy rights for data shared with companies, but modern courts have increasingly applied Fourth Amendment protections to digital data.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">数字隐私</span> <span class="tag-badge">法律裁决</span> <span class="tag-badge">第四修正案</span> <span class="tag-badge">科技公司</span> <span class="tag-badge">地理围栏令</span></p>

---