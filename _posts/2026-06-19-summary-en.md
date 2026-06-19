---
layout: default
title: "Horizon Summary: 2026-06-19 (EN)"
date: 2026-06-19
lang: en
---

> From 44 items, 10 important content pieces were selected

---

1. [Project Valhalla: A Decade of Value Types Arrives in JDK 28](#item-1) ⭐️ 9.0/10
2. [Zero-Touch OAuth Framework Launched for Model Context Protocol](#item-2) ⭐️ 9.0/10
3. [AutoJack: Single Webpage RCEs AI Agent Host via MCP WebSocket](#item-3) ⭐️ 9.0/10
4. [Amateur Uses Claude Code to Make Progress on Deciphering Linear A](#item-4) ⭐️ 8.0/10
5. [Understanding ATProto: Why There Are No Instances Like Mastodon](#item-5) ⭐️ 8.0/10
6. [Cloudflare Launches Temporary Accounts for AI Agents to Deploy Workers](#item-6) ⭐️ 8.0/10
7. [Metasploit Weekly Update: NTLM Relay Privesc, MCP AI Plugin, Paperclip AI RCE](#item-7) ⭐️ 8.0/10
8. [China's CAC Seeks Comments on Distributed Digital Identity Regulation](#item-8) ⭐️ 8.0/10
9. [US Pressures ASML Over Suspected EUV Machine Transfer to China](#item-9) ⭐️ 8.0/10
10. [Midjourney Announces Whole-Body Ultrasound Scanner and Spa Centers for 2027](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Project Valhalla: A Decade of Value Types Arrives in JDK 28](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 9.0/10

After nearly a decade of development since its announcement in 2014, Project Valhalla's value types and enhanced memory layout capabilities are set to arrive in JDK 28. The project introduces value objects to Java's type system, combining object-oriented abstractions with the performance characteristics of simple primitives. This represents one of the most significant changes to Java since generics, fundamentally altering how the JVM handles memory by enabling dense, contiguous storage of values without per-object headers or pointer indirection. It promises substantial performance improvements for data-intensive applications while maintaining Java's object-oriented programming model. Value types enable arrays to store values directly in contiguous memory blocks—for example, a Point with two 32-bit integers would use approximately 8 bytes per element, potentially plus a null flag. However, there are limitations: heap flattening won't work for objects with representations larger than 64 bits, and some community members have critiqued the article's examples for potential inconsistencies in this regard.

hackernews · philonoist · Jun 19, 06:35 · [Discussion](https://news.ycombinator.com/item?id=48595511)

**Background**: Project Valhalla was announced in July 2014 as an experimental OpenJDK effort led by Oracle engineer Brian Goetz, aiming to advance Java's type system. In Java's current model, primitive types (int, double, etc.) and reference types (objects) are fundamentally different—primitives are stored by value while objects are stored by reference with headers and pointer indirection. Boxing and unboxing primitives into wrapper classes like Integer and Double incurs measurable runtime costs. Valhalla aims to bridge this gap by introducing value objects that combine the abstraction of objects with the performance of primitives, and eventually migrating wrapper classes to become primitive classes.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Valhalla_(Java_language)">Project Valhalla (Java language)</a></li>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla</a></li>
<li><a href="https://www.baeldung.com/java-valhalla-project">Java Valhalla Project | Baeldung</a></li>

</ul>
</details>

**Discussion**: The community discussion reveals polarized views: some praise Java's evolution into a formidable platform in 2026 while others dismiss the changes as catching up to features C++ has had since the 1980s. Technical readers critiqued potential inaccuracies in the article's examples, particularly around the 64-bit limitations for heap flattening with objects like Point that have two 32-bit integers plus a null flag. The null-safety tradeoffs also sparked debate, with some arguing that non-nullable variables are not 'mentally heavy' as the article suggests.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Java</span> <span class="tag-badge">JVM</span> <span class="tag-badge">Project Valhalla</span> <span class="tag-badge">value types</span> <span class="tag-badge">performance</span></p>

---

<a id="item-2"></a>

## [Zero-Touch OAuth Framework Launched for Model Context Protocol](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 9.0/10

Model Context Protocol (MCP) has introduced Enterprise-Managed Authorization (EMA), a new zero-touch OAuth framework enabling secure, isolated authentication for enterprise AI agents. Powered by the novel ID-JAG token format and developed with partners like Okta and Microsoft, EMA allows MCP servers to connect automatically upon first login without per-app configuration. This framework solves a critical blocker for enterprise adoption of AI agents by ensuring authentication flows are isolated outside the AI model's context window, significantly improving security. It also streamlines deployment for large organizations, enabling seamless single sign-on (SSO) experiences across MCP-compatible applications like Claude and VS Code. The system uses OAuth Token Exchange to request an ID-JAG token from an organization's identity provider (IdP) during the standard login flow. Despite the architectural advantages, developers have reported practical integration challenges, such as difficulties indicating specific client IDs when using Microsoft Entra ID.

hackernews · niyikiza · Jun 18, 21:54 · [Discussion](https://news.ycombinator.com/item?id=48592163)

**Background**: The Model Context Protocol (MCP) is an open-source standard introduced by Anthropic in late 2024 that standardizes how AI applications connect to external data sources and tools. Enterprise-Managed Authorization (EMA) functions as a stable extension to the MCP specification to manage access controls. Underlying this extension is the ID-JAG token standard, an emerging IETF draft designed for safe data sharing between applications using the same SSO provider, making it useful beyond just MCP implementations.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/">Enterprise-Managed Authorization: Zero-touch OAuth for MCP | Model Context Protocol Blog</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://www.techtimes.com/articles/318708/20260619/mcp-enterprise-authorization-goes-stable-zero-touch-sso-okta-anthropic-vs-code.htm">MCP Enterprise Authorization Goes Stable: Zero-Touch SSO for Okta, Anthropic, VS Code</a></li>

</ul>
</details>

**Discussion**: The community highlights that MCP's true advantage over alternatives like standard skills is its ability to isolate authentication flows away from the AI's context window for better security and user experience. An Anthropic developer noted that EMA is now a stable extension actively seeking user feedback. However, some developers shared practical implementation hurdles, specifically detailing friction when configuring the system with Microsoft Entra ID.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">MCP</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Enterprise Security</span> <span class="tag-badge">Authentication</span></p>

---

<a id="item-3"></a>

## [AutoJack: Single Webpage RCEs AI Agent Host via MCP WebSocket](https://www.microsoft.com/en-us/security/blog/2026/06/18/autojack-single-page-rce-host-running-ai-agent/) ⭐️ 9.0/10

Microsoft Security researchers disclosed 'AutoJack', an exploit chain where a single malicious webpage forces an AI browsing agent to execute arbitrary code on the host machine. The attack specifically hijacks the MCP WebSocket connection in AutoGen Studio to trigger remote code execution. This exposes a critical vulnerability class where AI agents browsing untrusted web content can bypass traditional localhost security boundaries. It has profound implications for AI system architecture, proving that combining web access with local system privileges creates a direct pathway for severe cyberattacks. The attack abuses inherent trust in localhost services, missing authentication mechanisms, and unsafe parameter handling. By weaponizing the agent's access to the local MCP server, attackers can achieve arbitrary process execution on the underlying operating system.

rss · Microsoft Security · Jun 19, 00:17

**Background**: AutoGen is an open-source framework by Microsoft designed for building multi-agent AI applications that can act autonomously or work alongside humans. The Model Context Protocol (MCP) frequently uses WebSockets to provide a standardized communication channel between AI models and local tools or data sources. Traditionally, services running on localhost are considered safe from external internet threats, but AI agents blur this boundary by simultaneously reading web pages and interacting with local services.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/microsoft/autogen">GitHub - microsoft/ autogen : A programming framework for agentic AI</a></li>
<li><a href="https://microsoft.github.io/autogen/stable/index.html">Top-level documentation for AutoGen , a framework for developing...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-4"></a>

## [Amateur Uses Claude Code to Make Progress on Deciphering Linear A](https://aiclambake.com/clamtakes/linear-a/) ⭐️ 8.0/10

An amateur researcher and AI engineer named Tom Di Mino has reportedly made significant progress in deciphering the ancient Linear A script by utilizing Claude Code. Instead of using AI as a black-box translator, he used it to build a suite of Python tools that systematically test linguistic hypotheses against digitized databases, resulting in the translation of over 300 words. The decipherment of Linear A would represent a monumental breakthrough in archaeology and linguistics, potentially unlocking the written history of the Minoan civilization. Furthermore, it demonstrates a highly effective, tool-augmented methodology for applying large language models to complex academic research, proving AI's value as an autonomous agent for systematic analysis. The analysis centers heavily on the "Libation Formula," the only recurring phrase in the extremely limited Linear A corpus, which consists of only about 7,500 characters across 1,500 inscriptions. While the work has produced unprecedented results and even solved some issues in Linear B, it is currently under expert academic review at Rutgers and Cambridge, and is not yet considered a definitive solution.

hackernews · Kosturdistan · Jun 19, 16:04 · [Discussion](https://news.ycombinator.com/item?id=48600107)

**Background**: Linear A is the undeciphered writing system used by the Minoan civilization on the island of Crete from approximately 1800 to 1450 BC. Rediscovered in 1900, it was the precursor to Linear B, which was later deciphered as an early form of Greek, but the underlying language of Linear A remains a mystery. Claude Code is an agentic coding system developed by Anthropic that can operate across a project to understand codebases and execute complex multi-file tasks autonomously.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Linear_A_script">Linear A script</a></li>
<li><a href="https://www.anthropic.com/product/claude-code">Claude Code | Anthropic's agentic coding system</a></li>

</ul>
</details>

**Discussion**: Commenters are highly impressed by the methodology of using Claude Code to build Python tools rather than attempting black-box translation, viewing it as an ideal application of AI. While there is genuine excitement, knowledgeable users emphasize the extreme scarcity of the corpus and caution that the work remains an unproven attempt requiring academic validation, though it was noted the research is indeed under peer review.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Linguistics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Archaeology</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Ancient History</span></p>

---

<a id="item-5"></a>

## [Understanding ATProto: Why There Are No Instances Like Mastodon](https://overreacted.io/there-are-no-instances-in-atproto/) ⭐️ 8.0/10

An article clarifies a common misconception by explaining that ATProto does not use the traditional "instance" model found in Mastodon. Instead, it relies on a distributed architecture of separate microservices like Personal Data Servers (PDS), Relays, and AppViews. This architectural distinction fundamentally changes how decentralized social networks scale and manage data, setting Bluesky apart from the broader ActivityPub ecosystem. It impacts everything from server maintenance costs to user data portability and how network components interact. ATProto separates duties into Personal Data Servers (PDS) for hosting user data, Relays for shuttling data content-agnostically, and AppViews for indexing and providing views of the data. Critics point out that Relays are currently expensive to run and that a user's data being tied to a single canonical PDS makes the system more akin to a client-server architecture than a peer-to-peer distributed database.

hackernews · danabramov · Jun 19, 15:10 · [Discussion](https://news.ycombinator.com/item?id=48599515)

**Background**: Mastodon and other networks built on ActivityPub typically operate using interconnected "instances" (servers), where users create accounts and the servers communicate directly with each other. In contrast, ATProto (Authenticated Transfer Protocol), developed by Bluesky, uses a modular microservice architecture to handle different scaling demands separately. It aims to offer better user data portability and network scalability by decoupling these services.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Atproto">Atproto</a></li>
<li><a href="https://activitypub.rocks/">ActivityPub Rocks!</a></li>
<li><a href="https://softwaremill.com/blueskys-decentralized-architecture-compared-to-mastodon-and-twitter-x/">Bluesky's Decentralized Architecture Compared to Mastodon and Twitter/X</a></li>

</ul>
</details>

**Discussion**: The community offers a mixed response, with some praising the separation of services as a beautiful solution to system design and scaling problems compared to Mastodon. However, critics argue that the reliance on expensive Relays and the canonical nature of Personal Data Servers (PDS) make the architecture much closer to a traditional client-server model, questioning the author's analogies to RSS.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Decentralized Web</span> <span class="tag-badge">ATProto</span> <span class="tag-badge">Bluesky</span> <span class="tag-badge">System Architecture</span> <span class="tag-badge">ActivityPub</span></p>

---

<a id="item-6"></a>

## [Cloudflare Launches Temporary Accounts for AI Agents to Deploy Workers](https://blog.cloudflare.com/temporary-accounts/) ⭐️ 8.0/10

Cloudflare has introduced Temporary Accounts for Cloudflare Workers, enabling AI agents to autonomously run `wrangler deploy --temporary` and deploy live Workers in seconds without any human-oriented account setup or authentication barriers. This feature directly addresses a major friction point in the growing AI agent ecosystem by allowing autonomous code deployment without human intervention, signaling real industry movement toward agent-native infrastructure from a major platform provider. Temporary preview accounts currently support a limited set of products including Workers, Workers Static Assets, Workers KV, D1, Hyperdrive, Queues, and SSL/TLS certificates, making the feature suitable for ephemeral use cases such as prototyping, testing, and demo deployments.

rss · The Cloudflare Blog · Jun 19, 13:00

**Background**: Cloudflare Workers is a serverless platform that allows developers to run code on Cloudflare's global edge network, reaching 95% of the world's internet-connected population within 50ms. Wrangler is the official CLI tool for the Cloudflare Developer Platform, used to build, test, and deploy Workers projects. Previously, deploying Workers required creating a full Cloudflare account with authentication credentials, which created a significant barrier for AI agents attempting autonomous deployment.

<details><summary>References</summary>
<ul>
<li><a href="https://noise.getoto.net/2026/06/19/temporary-cloudflare-accounts-for-ai-agents/">Temporary Cloudflare Accounts for AI agents | Noise</a></li>
<li><a href="https://developers.cloudflare.com/changelog/post/2026-06-19-temporary-accounts-for-agents/">Temporary accounts for AI agent deployments · Changelog</a></li>
<li><a href="https://developers.cloudflare.com/workers/wrangler/">Wrangler · Cloudflare Workers docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">Cloudflare Workers</span> <span class="tag-badge">infrastructure</span> <span class="tag-badge">serverless</span> <span class="tag-badge">developer tools</span></p>

---

<a id="item-7"></a>

## [Metasploit Weekly Update: NTLM Relay Privesc, MCP AI Plugin, Paperclip AI RCE](https://www.rapid7.com/blog/post/pt-metasploit-wrap-up-19-06-2026) ⭐️ 8.0/10

This week's Metasploit release adds five new modules, headlined by the windows/local/ntlm_relay_2_self privilege escalation chain that coercing a local machine account via WebDAV and relaying NTLM authentication to a Domain Controller's LDAP service to ultimately gain SYSTEM access. Additionally, a new MCP (Model Context Protocol) server plugin enables AI tools to assist operators directly within a running msfconsole instance, and an unauthenticated six-API-call RCE chain targets Paperclip AI (CVE-2026-41679). The NTLM relay-to-self module represents a sophisticated local-to-domain privilege escalation chain that requires only a low-privilege user session, making it highly valuable for red team operations in Active Directory environments. The MCP server plugin signals a significant industry trend toward AI-assisted penetration testing, potentially transforming how security professionals interact with exploitation frameworks. The ntlm_relay_2_self module chains WebDAV coercion (OpenEncryptedFileRaw), LDAP relay, Shadow Credentials injection via msDS-KeyCredentialLink, and S4U2Proxy Kerberos delegation to obtain a service ticket as Administrator, then uses PsExec for SYSTEM-level access. The Paperclip AI exploit (CVE-2026-41679) achieves unauthenticated RCE through a chain of exactly six API calls on instances running in authenticated mode with default configuration.

rss · Rapid7 Cybersecurity Blog · Jun 19, 17:08

**Background**: NTLM relay attacks intercept and forward authentication requests between Windows systems, often abusing protocols like WebDAV to coerce authentication from targeted machines. Shadow Credentials is an Active Directory attack technique where an attacker modifies the msDS-KeyCredentialLink attribute on a target object to append alternate certificate-based credentials, enabling account takeover. S4U2Proxy is a Kerberos constrained delegation extension that allows a service to request a Ticket-Granting Service (TGS) ticket on behalf of a user to access another service, which attackers can abuse to escalate privileges. The Model Context Protocol (MCP) is an open standard introduced by Anthropic that enables secure, two-way connections between data sources and AI-powered tools.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/shadow-credentials">Shadow Credentials | Red Team Notes</a></li>
<li><a href="https://www.notsoshant.io/blog/attacking-kerberos-constrained-delegation/">Attacking Kerberos : Constrained Delegation</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Metasploit</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Privilege Escalation</span> <span class="tag-badge">AI Integration</span></p>

---

<a id="item-8"></a>

## [China's CAC Seeks Comments on Distributed Digital Identity Regulation](https://www.cac.gov.cn/2026-06/18/c_1783525605384124.htm) ⭐️ 8.0/10

On June 18, China's Cyberspace Administration (CAC) released the draft "Regulations on Promoting the Interoperability and Mutual Recognition of Distributed Digital Identity Applications" for public comment through July 18. The regulation proposes building a national distributed digital identity (DID) public service system on China's national blockchain network — an "identity chain" — to enable cross-platform identity interoperability across finance, transportation, customs, taxation, and digital yuan (e-CNY) applications. This draft regulation represents a major national-level government endorsement of blockchain-based identity infrastructure, with the potential to shape DID adoption at unprecedented scale across critical economic sectors. If enacted, it would establish one of the world's largest government-backed distributed identity systems, fundamentally affecting how individuals, institutions, and industrial devices authenticate and manage identity across platforms in China. The draft defines distributed digital identity as comprising identifiers, cryptographic keys, verifiable credentials (VCs), and verifiable claims, supporting use cases such as login authentication and data authorization. Domestic and foreign individuals, institutions, and industrial devices may all voluntarily apply for registration, while relevant organizations must fulfill data security and personal information protection obligations.

telegram · zaihuapd · Jun 19, 01:39

**Background**: Decentralized Digital Identity (DID) leverages distributed infrastructure — primarily blockchain technology — to shift identity control from centralized authorities to users, giving individuals sovereignty over their own identity and data. Verifiable Credentials (VCs) are digitally signed proofs that enable secure, portable, and rapidly verifiable identity claims without relying on a central registry. An "identity chain" integrates existing digital identity technologies with blockchain, using selective disclosure and Merkle trees to protect user privacy during verification. China has been exploring an authoritative trusted digital identity chain since at least 2022 as part of its broader digital infrastructure strategy.

<details><summary>References</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/689030887">【深度】DID分布式数字身份(1/5)--什么是DID - 知乎</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/357716225">可验证凭证 – 数字身份的核心 - 知乎</a></li>
<li><a href="https://www.zhihu.com/question/549950311">如何看待：我国将建权威可信数字身份链？ - 知乎</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">digital-identity</span> <span class="tag-badge">blockchain</span> <span class="tag-badge">regulation</span> <span class="tag-badge">China</span> <span class="tag-badge">DID</span></p>

---

<a id="item-9"></a>

## [US Pressures ASML Over Suspected EUV Machine Transfer to China](https://www.bloomberg.com/news/articles/2026-06-19/us-tells-asml-it-s-concerned-china-may-have-top-chip-tool) ⭐️ 8.0/10

US Commerce Secretary Howard Lutnick recently told ASML executives that Washington suspects a top-tier EUV lithography machine may have reached China in violation of US-led export controls. ASML firmly denies the accusation, stating that none of the 314 EUV systems operating worldwide are located in China. This dispute marks a significant escalation in US-China semiconductor tensions and threatens to strain transatlantic cooperation on technology export controls. It may also galvanize pending US legislation aimed at tightening restrictions on chipmaking equipment exports to China. US officials claim to possess evidence that ASML has not acted in good faith — including the export of EUV-related transport equipment to China — but have refused to present this evidence. ASML has circulated internal documents to prove its compliance and countered that it has never exported any EUV-specific components to China.

telegram · zaihuapd · Jun 19, 03:09

**Background**: EUV (extreme ultraviolet) lithography is a cutting-edge technology exclusively produced by ASML that uses light with a wavelength of just 13.5 nm to print the tiniest features on microchips, enabling continued advancement of Moore's Law. Since the first Trump administration, the US has barred ASML from selling EUV machines to China as part of a broader strategy to restrict China's access to advanced semiconductor manufacturing capabilities. EUV systems are extraordinarily expensive and complex — each unit costs hundreds of millions of dollars — making them a critical chokepoint in the global chip supply chain.

<details><summary>References</summary>
<ul>
<li><a href="https://techcrunch.com/2026/06/19/the-us-says-asmls-top-chip-tool-may-be-in-china-asml-says-it-isnt/">The US says ASML’s top chip tool may be in China. ASML says ...</a></li>
<li><a href="https://www.dutchnews.nl/2026/06/asml-denies-us-accusation-an-advanced-machine-reached-china/">ASML denies US accusation an advanced machine reached China</a></li>
<li><a href="https://www.asml.com/en/products/euv-lithography-systems">EUV lithography systems – Products | ASML</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">ASML</span> <span class="tag-badge">Export Controls</span> <span class="tag-badge">EUV Lithography</span></p>

---

<a id="item-10"></a>

## [Midjourney Announces Whole-Body Ultrasound Scanner and Spa Centers for 2027](https://www.midjourney.com/medical/blogpost) ⭐️ 8.0/10

Midjourney launched a medical division and announced the Midjourney Scanner, a whole-body ultrasound device designed to generate high-precision 3D images in roughly 60 seconds. The company plans to open the first accompanying scanning spa center in San Francisco by 2027, with an ambitious goal of deploying 50,000 units globally by 2031. This announcement marks a surprising strategic pivot for a company predominantly known for AI image generation into the physical medical hardware space. If successful, the technology could democratize rapid, non-invasive full-body imaging, dramatically increasing accessibility to detailed body composition tracking and preventative health diagnostics. The scanner utilizes about 500,000 miniaturized sensors emitting and receiving sound waves through a shallow pool of water to capture vertical slices of the body. While the company claims a 60-second final scan time and MRI-comparable speed, reports indicate their current prototype still requires about 20 minutes to complete a scan.

telegram · zaihuapd · Jun 19, 04:00

**Background**: Ultrasound technology traditionally uses high-frequency sound waves to measure how vibrations echo through tissues and generate 2D images of internal structures. The Midjourney Scanner builds upon emerging Ultrasound Tomography systems, which use rings of sensors to capture cross-sections of the body, assessing the composition of muscle, fat, and bone. Unlike MRI machines, ultrasound imaging is highly accessible and non-invasive, making it a preferred method for routine body composition assessments.

<details><summary>References</summary>
<ul>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/952011/midjourney-medical-ai-ultrasound-scan">Midjourney goes from generating cat images to full-body ultrasound scans</a></li>
<li><a href="https://www.techtimes.com/articles/318628/20260618/midjourney-full-body-ultrasound-scanner-targets-mri-speed-prototype-runs-20-minutes.htm">Midjourney Full-Body Ultrasound Scanner Targets MRI Speed, But Prototype Runs 20 Minutes</a></li>
<li><a href="https://www.caltech.edu/about/news/scanning-the-body-with-sound">Scanning the Body with Sound - www.caltech.edu</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Midjourney</span> <span class="tag-badge">Medical Imaging</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Healthcare Tech</span> <span class="tag-badge">Ultrasound</span></p>

---