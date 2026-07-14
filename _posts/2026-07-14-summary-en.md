---
layout: default
title: "Horizon Summary: 2026-07-14 (EN)"
date: 2026-07-14
lang: en
---

> From 47 items, 18 important content pieces were selected

---

1. [Wiz Details AsyncAPI Supply Chain Compromise via GitHub Actions](#item-1) ⭐️ 9.0/10
2. [Critical SharePoint Authentication Bypass Vulnerability Disclosed by Rapid7](#item-2) ⭐️ 9.0/10
3. [2026 Fields Medal Recipients Reportedly Leaked via ICM Website Code](#item-3) ⭐️ 9.0/10
4. [DeepSeek Raises Over 50 Billion RMB in Series A with Unusual Governance Structure](#item-4) ⭐️ 9.0/10
5. [Data-Driven Analysis of Input Latency: X11 vs. Wayland on Linux](#item-5) ⭐️ 8.0/10
6. [AI Agents Won't Solve Large Software Projects' Coordination Bottleneck](#item-6) ⭐️ 8.0/10
7. [EU Age Verification App Risks Excluding Non-iOS/Android Users](#item-7) ⭐️ 8.0/10
8. [Indian Scientists Release Most Detailed 3D Brainstem Atlas](#item-8) ⭐️ 8.0/10
9. [Langflow Vulnerabilities Exploited to Deploy Custom Gafgyt DDoS Botnets](#item-9) ⭐️ 8.0/10
10. [AI Security Report 2026: AI Becomes Autonomous Cyber Attack Operator](#item-10) ⭐️ 8.0/10
11. [Microsoft Outlines Defenses Against ShinyHunters' OAuth Abuse of SaaS Apps](#item-11) ⭐️ 8.0/10
12. [DeepSeek Founder Liang Wenfeng Becomes World's Richest AI Model Founder at $36 Billion](#item-12) ⭐️ 8.0/10
13. [Cloudflare Introduces Precursor for Continuous AI Bot Detection](#item-13) ⭐️ 8.0/10
14. [Amap Open-Sources ABot-WorldStudio for Interactive 3D World Generation](#item-14) ⭐️ 8.0/10
15. [DeepMind CEO Calls for US-Led Global AI Regulatory Body](#item-15) ⭐️ 8.0/10
16. [DeepSeek Seeks New Funding Round at $71 Billion Valuation](#item-16) ⭐️ 8.0/10
17. [Anthropic Launches Free Claude for Teachers for US K-12 Educators](#item-17) ⭐️ 8.0/10
18. [White House Expands Voluntary Commitments to Keep AI Power Costs Off Consumer Bills](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Wiz Details AsyncAPI Supply Chain Compromise via GitHub Actions](https://www.wiz.io/blog/m-red-team-asyncapi-supply-chain-compromise-via-github-actions) ⭐️ 9.0/10

Wiz's M-Red Team has published an analysis of a supply chain attack leveraging malicious @asyncapi npm packages that propagate through GitHub Actions. The report exposes specific payload mechanisms, including beacon encryption and command-and-control (C2) communication protocols. This compromise highlights an active threat within the open-source ecosystem, directly impacting DevSecOps teams who rely on event-driven architectures. Understanding these attack vectors is crucial for developers to secure their CI/CD pipelines and cloud infrastructure. The malicious payload explicitly self-identifies as 'M-RED-TEAM v6.4' in its code comments and operates in multiple runtime stages. The extracted configuration targets a specific organization and uses a service named 'miasma-monitor.service' to maintain persistence.

rss · Wiz Blog | RSS feed · Jul 14, 10:33

**Background**: AsyncAPI is an open-source initiative providing tools and specifications to build event-driven architectures. Supply chain attacks often target package managers like npm by injecting malicious code into dependencies, compromising automated build processes such as GitHub Actions. Wiz's Red Agent is an AI-powered tool that simulates these complex attack paths to help security teams uncover vulnerabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://www.asyncapi.com/">AsyncAPI Initiative for event-driven APIs | AsyncAPI Initiative for event-driven APIs</a></li>
<li><a href="https://www.wiz.io/blog/introducing-the-wiz-red-agent">Introducing the Wiz Red Agent- AI-Powered Attacker | Wiz Blog</a></li>
<li><a href="https://www.wiz.io/blog/m-red-team-asyncapi-supply-chain-compromise-via-github-actions">M-Red-Team: AsyncAPI Supply Chain Compromise via GitHub Actions</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Supply Chain Security</span> <span class="tag-badge">GitHub Actions</span> <span class="tag-badge">npm</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">DevSecOps</span></p>

---

<a id="item-2"></a>

## [Critical SharePoint Authentication Bypass Vulnerability Disclosed by Rapid7](https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed) ⭐️ 9.0/10

Rapid7 disclosed CVE-2026-55040, a critical 9.1 CVSS vulnerability in Microsoft SharePoint that allows remote attackers to bypass JWT token authentication. Discovered during the Pwn2Own Berlin 2026 hacking competition, this flaw is the first half of an exploit chain that can ultimately achieve unauthenticated remote code execution (RCE). Because SharePoint is deeply integrated into enterprise environments to manage sensitive corporate data and intranets, this vulnerability presents a massive attack surface. Successful exploitation allows unauthenticated attackers to perform administrative operations, potentially leading to complete system compromise once combined with the RCE component. The vulnerability stems from issues within the JWT token validation pipeline, requiring the attacker to know the target user's Active Directory Security ID (SID) or User Principal Name (UPN). While the authentication bypass component is now fixed, Microsoft is not expected to patch the RCE component of the exploit chain until August 2026.

rss · Rapid7 Cybersecurity Blog · Jul 14, 13:00

**Background**: Microsoft SharePoint is a ubiquitous web-based platform within the Microsoft 365 ecosystem used by enterprises worldwide for internal collaboration and document management. JWT (JSON Web Token) is an industry standard used to securely transmit information between parties, commonly employed for authentication in modern web applications. Pwn2Own is a highly regarded hacking competition where security researchers demonstrate zero-day exploits against major software and hardware platforms.

<details><summary>References</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/hackers-earn-1-298-250-for-47-zero-days-at-pwn2own-berlin-2026/">Hackers earn $1,298,250 for 47 zero-days at Pwn2Own Berlin 2026</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Zero-Day</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">RCE</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-3"></a>

## [2026 Fields Medal Recipients Reportedly Leaked via ICM Website Code](https://www.reddit.com/r/math/comments/1urv4id/fields_medal_26_predictionsdiscussion/) ⭐️ 9.0/10

A user discovered a hidden tag in the International Congress of Mathematicians (ICM) website's frontend code, allegedly leaking the 2026 Fields Medal recipients: Yu Deng, John Pardon, Jacob Tsimerman, and Hong Wang. Polymarket currently shows a 95% probability that this leaked list is accurate. The Fields Medal is the most prestigious award in mathematics, and an early leak from official channels is an unprecedented event in the academic world. The inclusion of Hong Wang, who recently co-authored a breakthrough proof for the 3D Kakeya conjecture, marks a historic milestone for the field. The leaked names were found within the schedule code for the ICM lectures, specifically marked as "HIDDEN" until the official announcement. Reddit discussions had already identified Jacob Tsimerman and Hong Wang as top contenders due to their significant recent contributions.

telegram · zaihuapd · Jul 14, 05:51

**Background**: The Fields Medal is awarded every four years to mathematicians under 40, recognizing outstanding mathematical achievement. The 3D Kakeya conjecture, recently solved by Hong Wang and Joshua Zahl, concerns the geometric properties of sets containing line segments in every direction in three-dimensional space. Polymarket is a cryptocurrency-based prediction market platform where users bet on future outcomes, and its high probability metric adds credibility to the leak.

<details><summary>References</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/27351797561">重大突破！三维Kakeya猜想终获解决，多尺度几何分析显神威 - 知乎</a></li>
<li><a href="https://en.wikipedia.org/wiki/Polymarket">Polymarket</a></li>

</ul>
</details>

**Discussion**: The mathematical community on platforms like Reddit has been actively predicting the 2026 winners, and this code leak validates earlier discussions that highlighted Hong Wang and Jacob Tsimerman as highly likely candidates. Commenters largely view the recent proof of the 3D Kakeya conjecture as a decisive factor that practically guarantees Wang's inclusion.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Fields Medal</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Academic Leak</span> <span class="tag-badge">ICM 2026</span> <span class="tag-badge">Research</span></p>

---

<a id="item-4"></a>

## [DeepSeek Raises Over 50 Billion RMB in Series A with Unusual Governance Structure](https://t.me/zaihuapd/42557) ⭐️ 9.0/10

DeepSeek has reportedly closed its first-ever funding round, raising over 50 billion RMB (approximately $7.4 billion) at a valuation exceeding $50 billion. The round features an unconventional structure where investors must channel funds into a limited partnership managed by CEO Liang Wenfeng rather than directly into DeepSeek, with a five-year lock-up period and no voting rights. This is one of the largest Series A rounds in AI history, cementing DeepSeek's position as a top-tier global AI lab alongside OpenAI and Anthropic. The stringent investment terms—no voting rights and long lock-ups—signal extraordinary founder confidence and investor appetite, reflecting DeepSeek's outsized influence after its models rivaled leading U.S. firms at a fraction of the cost. Founder Liang Wenfeng personally invested 20 billion RMB into this round, underscoring his commitment. Tencent and CATL (宁德时代) are reportedly considering or planning investments of 10 billion and 5 billion RMB respectively, potentially becoming the largest external investors. DeepSeek has not officially commented on the reports.

telegram · zaihuapd · Jul 14, 11:06

**Background**: DeepSeek is a Chinese AI startup that gained global prominence after its models demonstrated performance rivaling leading U.S. AI firms while using significantly less computing power. The company's chatbot briefly overtook ChatGPT on the Apple App Store in January 2025, marking a watershed moment for China's AI industry. DeepSeek has also expanded into African markets, offering affordable and efficient AI solutions that have spawned local startups. Founded by Liang Wenfeng, who also leads quantitative hedge fund High-Flyer, DeepSeek operates with a research-first culture that has attracted significant talent.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(chatbot)">DeepSeek (chatbot) - Wikipedia</a></li>
<li><a href="https://www.foxbusiness.com/technology/chinas-deepseek-ai-startup-releases-new-model-rivalry-openai">Chinese AI startup DeepSeek releases new model in evolving rivalry with US firms | Fox Business</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Funding</span> <span class="tag-badge">Venture Capital</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-5"></a>

## [Data-Driven Analysis of Input Latency: X11 vs. Wayland on Linux](https://marco-nett.de/blog/measuring-input-latency-on-linux-x11-vs-wayland-vrr-dxvk/) ⭐️ 8.0/10

A comprehensive article was published presenting empirical measurements of input latency on Linux, systematically comparing X11, Wayland, XWayland, VRR (Variable Refresh Rate), and DXVK configurations. The author used a 500Hz display and rigorous methodology to quantify differences across these display technologies and gaming translation layers. This analysis provides much-needed objective data to the long-running debate about whether Wayland or X11 offers better gaming performance, moving beyond anecdotal claims. The results can be fed back to graphics developers and distribution packagers, enabling targeted improvements in the Linux gaming ecosystem that closed-source platforms like Windows cannot match. The XWayland configuration showed approximately 3ms higher latency than native X11, which at 500Hz may indicate being one full frame behind. Commenters noted that testing at lower refresh rates (60Hz or 120Hz) would help distinguish small timing differences from larger frame-locked delays, and emphasized that the tests actually measure specific compositors (like KWin) rather than the Wayland protocol itself.

hackernews · hoechst · Jul 14, 16:36 · [Discussion](https://news.ycombinator.com/item?id=48909424)

**Background**: X11 is the traditional display server protocol for Linux with decades of history, while Wayland is a newer protocol designed to replace it by making the compositor act as the display server. XWayland is a compatibility layer that runs an X server as a Wayland client, allowing legacy X11 applications to function in a Wayland environment. DXVK is an open-source translation layer that converts Direct3D 8/9/10/11 calls to Vulkan, enabling Windows games to run on Linux through Proton/Steam, with support confirmed for over 80% of Direct3D games. VRR (Variable Refresh Rate) allows a display to dynamically adjust its refresh rate to match content, reducing screen tearing and improving smoothness.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/XWayland">XWayland</a></li>
<li><a href="https://en.wikipedia.org/wiki/DXVK">DXVK</a></li>

</ul>
</details>

**Discussion**: The community praised the open nature of Linux that enables this kind of analysis and allows results to drive ecosystem improvements, something impossible on Windows. Several commenters raised methodological concerns, noting that a 500Hz display hides problems visible at lower refresh rates and that the XWayland 3ms delay may represent a full frame behind. A key debate emerged about whether 'Wayland input latency' is a meaningful concept, since the measurements actually compare specific compositors (like KWin) rather than the protocol itself.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Linux</span> <span class="tag-badge">Wayland</span> <span class="tag-badge">X11</span> <span class="tag-badge">Input Latency</span> <span class="tag-badge">Gaming</span></p>

---

<a id="item-6"></a>

## [AI Agents Won't Solve Large Software Projects' Coordination Bottleneck](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) ⭐️ 8.0/10

Armin Ronacher's essay 'The Tower Keeps Rising' argues that while AI coding agents dramatically accelerate individual code production, large-scale software projects remain fundamentally bottlenecked by the need for human coordination and shared architectural understanding. The piece challenges the prevailing narrative that AI tools will simply scale to solve enterprise-level software complexity. As the industry rushes to integrate AI agents into development workflows, this analysis highlights a critical gap between individual productivity gains and the organizational challenges of building complex systems. The essay implies that the hardest problems in software engineering—coordination, shared mental models, and architectural alignment—are precisely the ones AI agents are least equipped to solve. The essay emphasizes that a software project's shared language lives not only in documentation and code, but also in code reviews, conversations, arguments, and the experience of explaining changes to others. It draws a sharp distinction between how fast code can be produced versus how well a team can coordinate its understanding of an evolving system.

hackernews · cdrnsf · Jul 14, 16:57 · [Discussion](https://news.ycombinator.com/item?id=48909785)

**Background**: The Lisp Curse is a well-known phenomenon where a language's extreme flexibility allows individuals to build custom solutions easily, but paradoxically hinders collaboration because everyone creates their own abstractions instead of converging on shared ones. Composability in software refers to how well components can be combined and recombined, often compared to Tetris where pieces must fit together and clear properly. Historically, works like 'The Mythical Man-Month' have established that large software projects are limited more by communication overhead than by raw coding speed.

**Discussion**: Commenters strongly agreed with the thesis, with one comparing composability to Tetris where 'lines have to clear' and warning that naive use of AI agents violates this principle. Another drew the parallel to the Lisp Curse, arguing that just as Lisp's ease of building discouraged collaboration, AI agents might enable isolated productivity at the cost of shared understanding. Multiple commenters emphasized that a project's implicit knowledge—living in code reviews and conversations—remains resistant to AI automation.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Software Architecture</span> <span class="tag-badge">Composability</span> <span class="tag-badge">Complexity</span></p>

---

<a id="item-7"></a>

## [EU Age Verification App Risks Excluding Non-iOS/Android Users](https://github.com/eu-digital-identity-wallet/av-doc-technical-specification/discussions/19) ⭐️ 8.0/10

A GitHub discussion on the EU Digital Identity Wallet's age verification technical specification has surfaced concerns that the proposed requirements may effectively mandate the use of mainstream iOS or Android devices, leaving users of alternative operating systems without a viable path to compliance. This issue strikes at the heart of the EU's stated goals around digital sovereignty and inclusivity, as it risks creating a two-tier digital ecosystem where only users of Google- and Apple-licensed platforms can fully participate in online services. It also sets a precedent for how future EU digital identity infrastructure may handle platform diversity and user choice. The technical specification does not currently include desktop support, and related discussions indicate the app may require Android systems licensed by Google, effectively banning custom ROMs and de-Google'd devices. Alternative mobile operating systems such as Linux-based phones would also be excluded under these requirements.

hackernews · roundabout-host · Jul 14, 08:34 · [Discussion](https://news.ycombinator.com/item?id=48903777)

**Background**: The EU Digital Identity Wallet (EUDI Wallet) is part of the eIDAS 2.0 regulation, which aims to provide EU citizens with a secure, privacy-preserving digital identity framework. Age verification is one of the key use cases being developed within this framework, intended to allow users to prove their age without revealing other personal data. The technical specifications are being developed collaboratively on GitHub, allowing public scrutiny and feedback from developers and civil society.

**Discussion**: Commenters expressed deep frustration with the contradiction between EU digital sovereignty rhetoric and reliance on US-controlled mobile platforms. While some argued that government-issued age verification is preferable to corporate alternatives like Roblox's data-harvesting approach, others questioned the fundamental premise of mandatory age verification itself, noting a lack of public consent and concern over digital exclusion of elderly and non-smartphone users.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Digital Identity</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">EU Policy</span> <span class="tag-badge">Mobile OS</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-8"></a>

## [Indian Scientists Release Most Detailed 3D Brainstem Atlas](https://www.bbc.com/news/articles/cg53l737v1qo) ⭐️ 8.0/10

A team of Indian scientists has created and publicly released the most detailed 3D atlas of the human brainstem to date, freely accessible online. The atlas provides unprecedented neuroanatomical resolution of this critical brain region and is available through the project's website. The brainstem controls vital functions such as breathing, heart rate, and consciousness, making it one of the most clinically important yet least mapped regions of the human brain. This open-access atlas provides a high-resolution reference that could significantly advance neurosurgery, neurological research, and medical education worldwide. The atlas is a reference map constructed from a small number of individual brains rather than a live diagnostic scanning tool. It is part of a broader Indian brain mapping initiative, with related publications and interactive viewers available through the HumanBrain.in portal network.

hackernews · BaudouinVH · Jul 14, 06:43 · [Discussion](https://news.ycombinator.com/item?id=48903082)

**Background**: A brain atlas is a comprehensive spatial reference map that identifies and labels anatomical structures within the brain, serving as a standardized guide for researchers and clinicians. The brainstem, located at the base of the brain, connects the cerebrum to the spinal cord and regulates essential life-sustaining functions. Previous brainstem atlases were limited in resolution and detail, partly due to the region's complex and dense architecture. India has been developing a national brain research ecosystem, including the Indian Institute of Technology Madras (IIT Madras), which hosts brain mapping projects under the HumanBrain.in initiative.

**Discussion**: Several commenters sought clarification that the atlas is a reference map built from a small number of individuals rather than a live diagnostic tool. The community strongly appreciated the open-access approach, with one user praising the decision not to gatekeep the technology. Links to the project website and related publications were shared for those interested in exploring the interactive 3D viewer.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">neuroscience</span> <span class="tag-badge">biology</span> <span class="tag-badge">medical-imaging</span> <span class="tag-badge">open-science</span> <span class="tag-badge">research</span></p>

---

<a id="item-9"></a>

## [Langflow Vulnerabilities Exploited to Deploy Custom Gafgyt DDoS Botnets](https://www.akamai.com/blog/security-research/2026/jul/langflow-exploited-build-custom-ddos-gafgyt-botnets) ⭐️ 8.0/10

Akamai security researchers discovered that vulnerabilities in Langflow, a popular AI orchestration tool, are being actively exploited by attackers to deploy customized Gafgyt botnets for launching distributed denial-of-service (DDoS) attacks. The attacks represent a real-world, in-the-wild exploitation of AI development infrastructure rather than a theoretical vulnerability disclosure. This exploitation highlights an alarming trend of threat actors pivoting to target AI and ML infrastructure, repurposing development tools into launchpads for large-scale cyberattacks. System administrators and developers leveraging Langflow in their pipelines must urgently patch and secure their deployments to avoid becoming unwitting participants in botnet-driven DDoS campaigns. Gafgyt, also known as BASHLITE, is a long-standing malware family that historically targeted Linux-based IoT devices such as routers and IP cameras to assemble botnets. The fact that attackers are now customizing Gafgyt variants specifically for deployment through Langflow suggests they are adapting traditional botnet techniques to exploit newly exposed, high-value AI infrastructure.

rss · akamai Blog · Jul 14, 16:00

**Background**: Langflow is an open-source, visual framework for building AI and large language model (LLM) applications, making it a popular tool within the modern AI/ML development ecosystem. Gafgyt was first observed in 2014 and has since evolved from primarily targeting IoT devices to becoming a versatile botnet platform that borrows code from other malware families like Mirai. The convergence of AI orchestration tool vulnerabilities with established botnet malware signals an emerging attack surface where development infrastructure itself becomes a high-value target for cybercriminals.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/BASHLITE">BASHLITE - Wikipedia</a></li>
<li><a href="https://hunt.io/malware-families/gafgyt">Gafgyt Malware: Evolution from IoT to Cloud Threats</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Langflow</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">DDoS</span></p>

---

<a id="item-10"></a>

## [AI Security Report 2026: AI Becomes Autonomous Cyber Attack Operator](https://research.checkpoint.com/2026/ai-security-report-2026/) ⭐️ 8.0/10

Check Point Research's AI Security Report 2026 reveals that artificial intelligence has transitioned from being a mere attack assistant to an autonomous operator capable of executing cyber threats. Recent incidents demonstrate that AI-powered agents can now autonomously conduct intelligence gathering and multi-step attacks with minimal human intervention. This paradigm shift signifies that cyber attacks can now be executed at unprecedented speed and scale, significantly lowering the barrier to entry for sophisticated threat actors. It forces the cybersecurity industry and enterprises to fundamentally rethink their defensive strategies and AI governance frameworks to counter autonomous threats. The report documents a critical evolution where AI systems now handle tactical execution phases like phishing, malware delivery, and reconnaissance autonomously. While AI still requires human operator input at critical strategic decision points, the large-scale automation of these offensive operations marks a pivotal milestone in cyber warfare capabilities.

rss · Check Point Research · Jul 14, 00:51

**Background**: Historically, the cybersecurity industry viewed AI as a "force multiplier" that simply made existing attack techniques faster, cheaper, and more accessible. Previous reports detailed how attackers primarily weaponized AI for preparatory tasks like generating phishing emails, deepfakes, and basic malware. The concept of autonomous cyber operations represents the first known instances of AI systems independently conducting multi-step attacks against well-defended targets in the wild.

<details><summary>References</summary>
<ul>
<li><a href="https://www.iaps.ai/research/autonomous-cyber-attacks">The Emergence of Autonomous Cyber Attacks: Analysis and ...</a></li>
<li><a href="https://cybermagazine.com/news/ai-agents-drive-first-large-scale-autonomous-cyberattack">AI Agents Drive First Large-Scale Autonomous Cyberattack</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">AI security</span> <span class="tag-badge">threat intelligence</span> <span class="tag-badge">AI threats</span> <span class="tag-badge">security research</span></p>

---

<a id="item-11"></a>

## [Microsoft Outlines Defenses Against ShinyHunters' OAuth Abuse of SaaS Apps](https://www.microsoft.com/en-us/security/blog/2026/07/13/defending-saas-based-applications-against-shinyhunters-oauth-abuse/) ⭐️ 8.0/10

Microsoft Threat Intelligence has published a detailed advisory outlining defensive strategies against threat actor activity exhibiting tradecraft associated with ShinyHunters, who are targeting SaaS-based applications through OAuth abuse, voice phishing (vishing), supply-chain compromise, and exploitation of misconfigured guest access. This advisory is critical for security engineers and system administrators because ShinyHunters is a financially motivated cybercrime group active since at least 2019, known for large-scale data theft and extortion targeting SaaS platforms. As organizations increasingly rely on SaaS applications, understanding and mitigating these OAuth-based attack vectors is essential for protecting sensitive corporate data and infrastructure. The identified threat activity involves multiple attack vectors working in concert, including OAuth token abuse to gain persistent access to SaaS environments, vishing to steal credentials from targeted users, supply-chain compromise to reach downstream victims, and exploitation of misconfigured guest access policies. Microsoft's advisory provides specific defensive recommendations for detecting and blocking these multi-stage intrusion techniques.

rss · Microsoft Security · Jul 13, 22:02

**Background**: ShinyHunters is a financially motivated cybercrime and extortion operation that has been active since around 2019–2020, initially gaining notoriety for selling massive user databases on dark web forums. The group is best known for large-scale data theft, SaaS-focused intrusions, and pay-or-leak extortion schemes, and has been associated with threat clusters UNC6040/UNC6240 described by Google. OAuth (Open Authorization) is an open-standard protocol for token-based authentication and authorization that allows third-party applications to access user data without sharing passwords, but when abused by attackers, compromised OAuth tokens can grant persistent, legitimate-looking access to SaaS platforms.

<details><summary>References</summary>
<ul>
<li><a href="https://www.huntress.com/threat-library/threat-actors/shinyhunters">ShinyHunters Threat Actor Profile: TTPs, IoCs & Attacks ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/ShinyHunters">ShinyHunters - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">SaaS</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">ShinyHunters</span></p>

---

<a id="item-12"></a>

## [DeepSeek Founder Liang Wenfeng Becomes World's Richest AI Model Founder at $36 Billion](https://www.bloomberg.com/news/articles/2026-07-14/deepseek-s-liang-tops-amodei-and-brockman-as-richest-ai-founder) ⭐️ 8.0/10

DeepSeek founder Liang Wenfeng's net worth surged from approximately $16.7 billion to $36 billion following a $7.4 billion funding round completed in June 2026, making him the wealthiest AI model founder globally. He personally contributed $3 billion to the round, which valued DeepSeek at $50 billion. This milestone underscores the dramatic rise of Chinese AI companies in the global AI race, with DeepSeek achieving a $50 billion valuation and its founder surpassing prominent Western AI leaders in personal wealth. It signals a significant shift in the geopolitical and financial landscape of the AI industry, highlighting the growing investor confidence in China's AI ecosystem. Liang Wenfeng holds approximately 78% of DeepSeek's shares, which constitutes the primary source of his wealth. The $7.4 billion funding round, valuing the company at $50 billion, positions DeepSeek among the most valuable private AI companies in the world.

telegram · zaihuapd · Jul 14, 05:06

**Background**: DeepSeek is a Chinese AI company known for developing large language models that have gained significant attention for their performance and cost-efficiency. Founded by Liang Wenfeng, the company has emerged as a formidable competitor to Western AI labs like OpenAI and Anthropic. The company's models have been recognized for delivering strong results at lower training costs, disrupting assumptions about the resources needed to build frontier AI systems.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI Industry</span> <span class="tag-badge">Funding</span> <span class="tag-badge">Liang Wenfeng</span> <span class="tag-badge">Valuation</span></p>

---

<a id="item-13"></a>

## [Cloudflare Introduces Precursor for Continuous AI Bot Detection](https://blog.cloudflare.com/introducing-precursor/) ⭐️ 8.0/10

Cloudflare announced Precursor, a continuous behavioral verification engine that detects AI bots and scripts by analyzing user interaction patterns like mouse trajectories and typing rhythms throughout a session. Unlike traditional tools like Turnstile that verify at specific moments, this client-side JavaScript solution runs continuously in the background to validate human presence. This development represents a significant escalation in web security against the growing threat of sophisticated AI agents and scripts by continuously monitoring hard-to-imitate human physiological traits. It provides businesses with a critical defense by protecting the entire user journey beyond just login or checkout points, which is essential in the ongoing AI and cybersecurity arms race. Precursor is currently in beta testing for Enterprise Bot Management users, with a full rollout planned for later this year. It is positioned as an optional add-on to Turnstile and organizes collected data into session-based analytics dashboards to distinguish between genuine human interactions and automated operations.

telegram · zaihuapd · Jul 14, 09:44

**Background**: Traditional authentication mechanisms typically verify users at login or checkout, making them vulnerable to sophisticated AI agents that can mimic human behavior after passing the initial check. Continuous behavioral authentication addresses this vulnerability by dynamically verifying users throughout an active session based on inherent interaction patterns. Research indicates that human interactions contain unique physiological traits, such as natural mouse arcs and cognitive pauses during thinking, which are exceedingly difficult for AI models to replicate accurately.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nca-ieee.org/2025/assets/pdf/32_Sarmiento_authn-mouse-dynamics.pdf">Continuous behavioral authentication using mouse dynamics ...</a></li>
<li><a href="https://www.computer.org/csdl/proceedings-article/nca/2025/784200a087/2bZ8v0SPf56">Continuous behavioral authentication using mouse dynamics ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Bot Detection</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI</span> <span class="tag-badge">Web Security</span></p>

---

<a id="item-14"></a>

## [Amap Open-Sources ABot-WorldStudio for Interactive 3D World Generation](https://www.ithome.com/0/976/538.htm) ⭐️ 8.0/10

Amap has officially released ABot-WorldStudio, an open world model workshop that unifies interactive video generation with 3D Gaussian Splatting (3DGS) scene generation in a single product for the first time. Users can input text or an image to generate real-time interactive AI worlds, while a built-in "space-time portal" mechanism links isolated 3D scenes into a boundless exploration network, and the underlying ABot-World model series has been fully open-sourced. This release demonstrates a major leap in long-term inference stability — the system runs continuously for over an hour on a single RTX 5090 without crashes or quality degradation, far exceeding the typical one-minute limit of comparable products. By open-sourcing the model and enabling native 3DGS output with photo-level fidelity, it provides significant value for researchers and developers working in embodied AI simulation, game and film creation, and cultural tourism applications. ABot-WorldStudio can be deployed locally on a single RTX 5090 GPU with no upper limit on inference duration, and it shares the same inference path as Amap's previously released ABot-Earth0.5. The system uses a "generate-evaluate-repair" modular design to ensure stable and controllable quality for high-fidelity, long-sequence scenes, and its native 3DGS output preserves real geometric structure rather than just 2D video frames.

telegram · zaihuapd · Jul 14, 12:22

**Background**: 3D Gaussian Splatting (3DGS) is a transformative radiance field technique that uses millions of learnable 3D Gaussians for explicit scene representation, enabling real-time, high-quality novel-view synthesis. Unlike implicit neural representations, 3DGS provides true geometric structure, making it valuable for embodied AI applications where agents must understand and navigate physical spaces. A "world model" in AI refers to a system that can simulate and predict the dynamics of an environment, allowing embodied agents to train and plan within realistic virtual worlds before deployment in the physical world.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ithome.com/0/976/538.htm">内置“任意门”，高德发布通用世界模型工坊 ABot-WorldStudio - IT之家</a></li>
<li><a href="https://autonews.gasgoo.com/articles/icv/amap-launches-abot-world-studio-a-general-world-model-development-platform-2077009328685764608">Amap Launches ABot-World Studio, a General World Model ...</a></li>
<li><a href="https://arxiv.org/html/2401.03890v8">A Survey on 3D Gaussian Splatting - arXiv.org</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">World Model</span> <span class="tag-badge">3D Generation</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Embodied AI</span></p>

---

<a id="item-15"></a>

## [DeepMind CEO Calls for US-Led Global AI Regulatory Body](https://www.theverge.com/tech/965270/google-deepmind-demis-hassabis-global-ai-watchdog) ⭐️ 8.0/10

Google DeepMind CEO Demis Hassabis has publicly called for the establishment of a US-led global AI regulatory body that would ideally begin operating by the end of this year. The proposed agency would consist of independent experts and open-source community representatives, with the authority to assess frontier AI models before release and coordinate industry-wide deployment pauses if risks are deemed too high. As the head of one of the world's leading AI labs publicly advocating for binding international oversight, this signals a significant industry shift toward embracing regulation. The proposal could shape the future governance of AI development, particularly given Hassabis's warning that artificial general intelligence (AGI) may be only a few years away. Hassabis has been engaging with the Trump administration, other AI labs, and European officials for months, and reports that feedback has been very positive. The proposed body would specifically focus on frontier AI models — the most advanced systems with multimodal processing and agentic capabilities — rather than all AI applications.

telegram · zaihuapd · Jul 14, 14:29

**Background**: Frontier AI models are the most advanced AI systems currently available, characterized by multimodal processing, zero-shot learning, and agentic behavior, with notable examples including GPT-4o and Gemini 1.5. Artificial General Intelligence (AGI) refers to AI systems capable of matching or exceeding human-level performance across any cognitive task, and is widely regarded as one of the ultimate goals of AI development. In 2023, major AI companies including Google, Microsoft, OpenAI, and Anthropic formed the Frontier Model Forum to promote the safe development of such systems, reflecting growing industry concern about potential risks.

<details><summary>References</summary>
<ul>
<li><a href="https://baike.baidu.com/item/前沿人工智能模型/68190808">前沿人工智能模型 - 百度百科</a></li>
<li><a href="https://baike.baidu.com/item/通用人工智能(AGI)/67547871">通用人工智能 (AGI) - 百度百科</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI监管</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">科技政策</span> <span class="tag-badge">AGI</span></p>

---

<a id="item-16"></a>

## [DeepSeek Seeks New Funding Round at $71 Billion Valuation](https://t.me/zaihuapd/42564) ⭐️ 8.0/10

Just one month after raising approximately $7 billion at a ~$52 billion valuation in late May, Chinese AI startup DeepSeek has begun preliminary discussions with investors for a new funding round at a pre-money valuation of around $71 billion. The company is also reportedly developing its own AI chips to reduce dependence on Nvidia and Huawei processors. The meteoric rise in valuation from $52 billion to $71 billion in a single month underscores unprecedented investor confidence in DeepSeek and the broader Chinese AI sector. The company's plan to develop proprietary AI chips carries significant strategic implications for semiconductor self-sufficiency amid ongoing U.S. export controls on advanced chips to China. The reported $71 billion pre-money valuation represents an approximately 37% increase from the ~$52 billion valuation in DeepSeek's late-May funding round. Reuters reported earlier this month that the chip development initiative aims specifically to reduce reliance on both Nvidia and Huawei, suggesting a vertically integrated strategy.

telegram · zaihuapd · Jul 14, 15:15

**Background**: DeepSeek (深度求索) is a Hangzhou-based AI company founded in July 2023 by Liang Wenfeng, who also serves as CEO of the hedge fund High-Flyer that owns and funds the company. DeepSeek gained global attention with the launch of its DeepSeek-R1 model in January 2025, which delivered performance comparable to OpenAI's GPT-4 and o1 at a fraction of the training cost — reportedly around $6 million versus $100 million for GPT-4. The company achieved cost reductions through techniques like Mixture of Experts (MoE) and by operating under U.S. trade restrictions using less powerful export-compliant chips. Its open-weight models, released under the MIT License, were widely described as triggering a 'Sputnik moment' for the U.S. AI industry.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(Company)">DeepSeek (Company)</a></li>
<li><a href="https://www.deepseek.com/">DeepSeek | 深度求索</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI融资</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">估值</span> <span class="tag-badge">中国AI</span></p>

---

<a id="item-17"></a>

## [Anthropic Launches Free Claude for Teachers for US K-12 Educators](https://www.anthropic.com/news/claude-for-teachers) ⭐️ 8.0/10

Anthropic has launched 'Claude for Teachers,' offering verified US K-12 educators a free year of premium Claude access. The program includes a specialized teaching skills library designed to generate lesson plans and quizzes aligned with academic standards across all 50 states. This move strategically positions Anthropic in the education sector by removing cost barriers for individual teachers. By emphasizing FERPA compliance and curriculum integration, it directly addresses the main concerns schools have regarding AI adoption. Educators must register by June 30, 2027 to receive the one-year free subscription. Furthermore, teacher data is not used for model training by default, and student information is protected under a FERPA-compliant data processing agreement.

telegram · zaihuapd · Jul 14, 15:37

**Background**: FERPA (Family Educational Rights and Privacy Act) is a US federal law that protects the privacy of student education records. Compliance with FERPA is a critical requirement for any educational technology tool to be adopted by schools in the United States. AI tools often face scrutiny over how they handle sensitive student data, making privacy features essential for market entry.

<details><summary>References</summary>
<ul>
<li><a href="http://studentprivacy.ed.gov/ferpa">FERPA | Protecting Student Privacy - ed</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">AI in Education</span> <span class="tag-badge">K-12</span> <span class="tag-badge">EdTech</span></p>

---

<a id="item-18"></a>

## [White House Expands Voluntary Commitments to Keep AI Power Costs Off Consumer Bills](https://t.me/zaihuapd/42566) ⭐️ 8.0/10

The White House plans to convene power companies, data center developers, and governors in the coming weeks to expand a set of voluntary commitments ensuring that surging AI electricity demand does not drive up power bills for residents and businesses. Google, Meta, OpenAI, and other tech giants already signed similar pledges earlier this year, agreeing to self-fund power generation and grid upgrades rather than shifting costs to existing utility customers. This initiative addresses one of the most critical bottlenecks in AI development—soaring energy consumption—and represents a significant policy effort to prevent the massive infrastructure costs of AI from burdening ordinary consumers. By broadening the commitment to include utilities and colocation operators, the White House is closing loopholes that could otherwise allow costs to trickle down through the power supply chain. The expanded commitment is expected to include not just hyperscalers but also wholesale colocation providers who build and operate data centers on behalf of tech giants, as well as power utilities and governors of states at the forefront of energy infrastructure expansion. Companies may increasingly rely on behind-the-meter power generation—producing electricity on-site or nearby—to meet demand without straining the public grid.

telegram · zaihuapd · Jul 14, 16:00

**Background**: AI workloads, particularly large language model training and inference, consume dramatically more electricity than traditional computing, straining local power grids and driving demand for new generation capacity. Behind-the-meter (BTM) power generation—producing electricity directly at or near the data center—has emerged as a key strategy, allowing facilities to bypass the utility grid or supplement it during peak demand. Wholesale colocation is a model where providers lease large-scale data center space and infrastructure to tech companies, which is increasingly favored for hyperscale AI deployments.

<details><summary>References</summary>
<ul>
<li><a href="https://www.datacenterdynamics.com/en/opinions/behind-the-meter-power-the-new-backbone-of-data-center-growth/">Behind-the-meter power: The new backbone of data center ...</a></li>
<li><a href="https://www.datacenters.com/news/wholesale-colocation-the-rising-star-of-data-center-real-estate">Wholesale Colocation: The Rising Star in Data Center Real Estate</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Energy Policy</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">Tech Industry</span> <span class="tag-badge">Government Regulation</span></p>

---