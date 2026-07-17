---
layout: default
title: "Horizon Summary: 2026-07-17 (EN)"
date: 2026-07-17
lang: en
---

> From 55 items, 12 important content pieces were selected

---

1. [Critical CVSS 9.8 SharePoint RCE Vulnerability Actively Exploited in the Wild](#item-1) ⭐️ 10.0/10
2. [First Potential Atmosphere Discovered on an Earth-like Exoplanet](#item-2) ⭐️ 9.0/10
3. [Mozilla's State of Open Source AI Report Sparks Heated Debate](#item-3) ⭐️ 8.0/10
4. [NadMesh Botnet Analysis: A Product-Grade Threat for AI Services](#item-4) ⭐️ 8.0/10
5. [DPRK Hackers Hide Malware in SVG Flags to Target Developers](#item-5) ⭐️ 8.0/10
6. [Unit 42 Exposes Three Chained Zero-Day Vulnerabilities in Siemens ROX II OT Switches](#item-6) ⭐️ 8.0/10
7. [HTB FireFlow: From Langflow RCE to Kubernetes Root](#item-7) ⭐️ 8.0/10
8. [Refactored SRDI Enhances Stealth and Flexibility in DLL Injection](#item-8) ⭐️ 8.0/10
9. [Truth Social to Launch "Truth API" for Algorithmic Trading](#item-9) ⭐️ 8.0/10
10. [Tesla Begins Mass Production of Steering-Wheel-Free Cybercab in North America](#item-10) ⭐️ 8.0/10
11. [Huawei Unveils Ascend 950 SuperPoD with 6.7x NVIDIA NVL144 Compute](#item-11) ⭐️ 8.0/10
12. [中国人工智能模型的崛起，让习近平主席获得了新的炫耀资本，也让他更有力地塑造了这项技术的全球规则，尽管其日益增长的力量也引起了华盛顿和北京的安全警觉。](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Critical CVSS 9.8 SharePoint RCE Vulnerability Actively Exploited in the Wild](https://www.rapid7.com/blog/post/etr-cve-2026-58644-microsoft-sharepoint-server-unauthenticated-remote-code-execution-vulnerability-exploited-in-the-wild) ⭐️ 10.0/10

On July 14, 2026, Microsoft published a security advisory for CVE-2026-58644, a CVSS 9.8 unauthenticated remote code execution vulnerability in on-premises Microsoft SharePoint Server caused by unsafe deserialization of untrusted data (CWE-502). CISA added the vulnerability to its Known Exploited Vulnerabilities (KEV) catalog on July 16, 2026, after confirming active exploitation in the wild. This is a maximum-severity vulnerability that allows unauthenticated attackers to execute arbitrary code on enterprise SharePoint servers with no user interaction required, potentially leading to full system compromise, data exfiltration, and lateral movement within corporate networks. Because active exploitation is already occurring and many organizations run on-premises SharePoint deployments that may be internet-facing, immediate patching is critical to prevent widespread compromise. The vulnerability affects SharePoint Enterprise Server 2016, SharePoint Server 2019, and SharePoint Server Subscription Edition, with remediation requiring the July 14, 2026 security updates applied across all SharePoint servers in a farm. Microsoft and CISA additionally recommend enabling the Antimalware Scan Interface (AMSI) for every SharePoint web application and monitoring Microsoft Defender detections for indicators of exploitation.

rss · Rapid7 Cybersecurity Blog · Jul 17, 18:18

**Background**: Deserialization of untrusted data (CWE-502) occurs when an application deserializes data from untrusted sources without sufficiently verifying its validity, which can allow attackers to manipulate in-memory objects and achieve arbitrary code execution. A CVSS v3.1 score of 9.8 represents the highest critical severity tier, indicating vulnerabilities that are typically low-complexity to exploit, require no authentication or user interaction, and can result in complete confidentiality, integrity, and availability impact. The CISA Known Exploited Vulnerabilities (KEV) catalog is a authoritative list of flaws confirmed to be actively exploited, and federal agencies are legally required to remediate listed vulnerabilities within specified deadlines.

<details><summary>References</summary>
<ul>
<li><a href="https://cwe.mitre.org/data/definitions/502.html">CWE - CWE-502: Deserialization of Untrusted Data (4.20)</a></li>
<li><a href="https://owasp.org/www-community/vulnerabilities/Deserialization_of_untrusted_data">Deserialization of untrusted data - OWASP Foundation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-2"></a>

## [First Potential Atmosphere Discovered on an Earth-like Exoplanet](https://www.bbc.com/news/articles/cy4kdd1e0ejo) ⭐️ 9.0/10

Astronomers potentially discovered the first atmosphere on an Earth-like exoplanet, LHS 1140b, located 48 light-years away. Using the James Webb Space Telescope (JWST), they found that this planet in the habitable zone of a red dwarf star has managed to retain its atmosphere. This discovery is a monumental breakthrough in the search for extraterrestrial life, as an atmosphere is essential for maintaining liquid water and potential biological processes. It significantly advances our understanding of rocky exoplanets and demonstrates the capability of modern telescopes to characterize distant, potentially habitable worlds. LHS 1140b orbits a red dwarf star, and scientists initially suspected it might be a mini-Neptune being stripped of its atmosphere by stellar radiation. However, JWST emission spectroscopy data ruled out the mini-Neptune scenario, suggesting it is a solid rocky world with a substantial atmosphere.

hackernews · neversaydie · Jul 17, 14:06 · [Discussion](https://news.ycombinator.com/item?id=48947560)

**Background**: The habitable zone, or Goldilocks zone, is the orbital region around a star where a planet could theoretically maintain liquid water on its surface. Red dwarfs are cooler than our Sun, meaning their habitable zones are much closer to the star, exposing planets to intense radiation that often strips away atmospheres. The James Webb Space Telescope (JWST) conducts infrared astronomy, enabling detailed atmospheric characterization of these distant exoplanets by observing the light that filters through them.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/JWST">JWST</a></li>
<li><a href="https://en.wikipedia.org/wiki/Habitable_zone">Habitable zone</a></li>

</ul>
</details>

**Discussion**: Commenters are deeply engaged in the technical nuances, particularly noting the surprising finding that LHS 1140b retained an atmosphere despite the intense stellar stripping typical of red dwarfs. Others speculated on future exploration technologies, advocating for a solar lens telescope to directly image these worlds and discussing propulsion systems capable of reaching near-light speeds for interstellar probes.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Astronomy</span> <span class="tag-badge">Exoplanets</span> <span class="tag-badge">Astrophysics</span> <span class="tag-badge">JWST</span> <span class="tag-badge">Space Exploration</span></p>

---

<a id="item-3"></a>

## [Mozilla's State of Open Source AI Report Sparks Heated Debate](https://stateofopensource.ai/) ⭐️ 8.0/10

Mozilla released a comprehensive presentation analyzing the state of open source AI, highlighting the rapid growth and adoption of open models. The report visualizes various metrics, including a significant market share shift on platforms like OpenRouter where open models now lead closed models 63% to 37%, a complete inversion from just four months prior. The rapid shift towards open source AI models could fundamentally disrupt the business models of frontier AI labs like OpenAI and Anthropic, who spend billions training models that may quickly become commoditized. It signals a broader industry trend where the value may shift from the models themselves to the infrastructure and devices that run them, potentially benefiting hyperscalers and hardware manufacturers. The report utilizes data from platforms like OpenRouter to demonstrate growth, noting that open models processed 4.19 trillion tokens daily recently, compared to 888 billion just four months ago. However, the presentation itself faced heavy criticism from the community for appearing to be AI-generated, described as an overwhelming collection of charts lacking coherent narrative analysis from Mozilla's leadership.

hackernews · rellem · Jul 17, 14:31 · [Discussion](https://news.ycombinator.com/item?id=48947825)

**Background**: The open source AI movement advocates for the free availability of model weights and architectures, allowing anyone to inspect, modify, and deploy the models. This stands in contrast to closed-source models accessed via APIs, where the underlying model remains proprietary to the company. Mozilla's involvement in this space aligns with its historical mission of keeping the web open and preventing any single entity from controlling access to the internet.

**Discussion**: The discussion is highly active with users debating the existential threat to frontier model companies, with one user speculating that open models will eventually kill OpenAI and Anthropic as hyperscalers run models without licensing fees. Users also shared data-driven insights showing the 5x growth of open model usage on OpenRouter, while heavily criticizing the presentation as an incoherent, AI-generated slide deck that undermined its own credibility.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Industry Analysis</span> <span class="tag-badge">LLMs</span></p>

---

<a id="item-4"></a>

## [NadMesh Botnet Analysis: A Product-Grade Threat for AI Services](https://blog.xlab.qianxin.com/nadmesh-botnet-analysis-a-product-grade-threat-for-the-ai-service-era-en/) ⭐️ 8.0/10

XLab researchers uncovered NadMesh, a sophisticated Go-based botnet that integrates autonomous scanning, exploitation, and large-scale harvesting of AI service credentials. The operator's dashboard claims to have already collected 3,811 unique AWS keys and catalogs AI services like DeepSeek, GLM, and Kimi. This represents a dangerous evolution where traditional botnet capabilities are specifically engineered to target AI infrastructure and cloud assets. The large-scale theft of AI service credentials can lead to severe data breaches, resource hijacking for model training, and significant financial losses for affected organizations. Named after the "n4d mesh controller" string in its source code, NadMesh acts as a unified, autonomous platform for intelligence gathering. Its inventory mechanism extends beyond the infected host to tag and catalog cloud-based AI services, highlighting its product-grade engineering and specific focus on the AI ecosystem.

rss · 奇安信 X 实验室 · Jul 17, 08:14

**Background**: Botnets are networks of infected computers controlled by a malicious actor, often used to launch coordinated attacks or distribute malware. Modern botnets are increasingly written in the Go programming language because it is cross-platform and harder to analyze. As AI services become integral to business operations, the credentials used to access these models and cloud infrastructure have become high-value targets for cybercriminals.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html">New NadMesh Botnet Hunts Exposed AI Services for Cloud Keys and...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Malware Analysis</span></p>

---

<a id="item-5"></a>

## [DPRK Hackers Hide Malware in SVG Flags to Target Developers](https://www.elastic.co/security-labs/contagious-interview-malware-svg-steganography) ⭐️ 8.0/10

DPRK-aligned hackers are exploiting fake coding interviews by distributing malware disguised as normal SVG flag files, such as AE.svg and AF.svg. This new tactic utilizes SVG steganography—hiding Base64-encoded malicious code within image comment blocks—to successfully evade detection by all traditional antivirus vendors. This campaign, tracked as Contagious Interview, directly targets software developers and engineers by exploiting the vulnerable job-seeking process to steal credentials and infiltrate enterprise networks. Because the malicious payloads completely bypass standard antivirus detection, security and engineering teams must immediately adopt advanced defensive measures beyond traditional signature-based scanning. The malicious payload, associated with the OtterCookie malware family, is concealed inside SVG files by injecting Base64-encoded data into comment blocks. Because the SVG format is an open standard that can natively incorporate text, XML, and JavaScript, attackers can effectively use these image files as undetected containers to deliver active malicious code.

rss · Elastic Security Labs · Jul 18, 00:00

**Background**: Steganography is a cybersecurity technique used to hide malicious data within ordinary, non-secret files or messages to avoid raising suspicion. In recent attacks, threat actors increasingly abuse the SVG (Scalable Vector Graphics) format because its XML-based structure allows embedded code to execute when the image is rendered or opened. DPRK-aligned threat actors have a well-documented history of using elaborate social engineering tactics, such as posing as recruiters on professional networking sites, to trick tech workers into executing malware during fake job interviews.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/07/north-korea-linked-hackers-hide.html">Fake Coding Tests Deliver OtterCookie-Aligned Malware Hidden in...</a></li>
<li><a href="https://unit42.paloaltonetworks.com/north-korean-threat-actors-lure-tech-job-seekers-as-fake-recruiters/">Contagious Interview: DPRK Threat Actors Lure Tech Industry Job...</a></li>
<li><a href="https://d2lvhbqifib4zm.cloudfront.net/blog/what-is-steganography/">What is steganography ? How hidden data attacks work</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Steganography</span> <span class="tag-badge">Developer Security</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-6"></a>

## [Unit 42 Exposes Three Chained Zero-Day Vulnerabilities in Siemens ROX II OT Switches](https://unit42.paloaltonetworks.com/siemens-rox-ii-zero-day-vulnerabilities/) ⭐️ 8.0/10

Unit 42 published a detailed technical analysis of three chained zero-day vulnerabilities (CVE-2025-40948, CVE-2025-40947, and CVE-2025-40949) in Siemens RUGGEDCOM ROX II operational technology switches. When exploited together, these vulnerabilities enable attackers to escalate privileges and achieve persistent root access on affected devices. Siemens RUGGEDCOM ROX II switches are deployed in mission-critical industrial environments such as power grids, water treatment facilities, and oil refineries, where a compromise could lead to physical damage, service disruption, or safety hazards. The ability to achieve persistent root access means attackers could maintain long-term, stealthy control over industrial networks, potentially enabling sabotage, espionage, or lateral movement into connected enterprise systems. The three vulnerabilities form a progressive exploitation chain that incrementally escalates attacker privileges until achieving full root-level control of the device. Siemens and CISA have jointly published advisory ICSA-25-226-20 recommending mitigations, including setting a secure boot password on RUGGEDCOM ROX RX1400 devices to prevent unauthorized access to BIST (Built-In Self-Test) mode.

rss · Unit 42 · Jul 17, 10:00

**Background**: Operational Technology (OT) encompasses the hardware and software systems that monitor and control physical devices and processes in industrial environments, such as power grids, manufacturing lines, and transportation systems. Unlike IT networks, which prioritize data confidentiality and availability, OT systems focus on physical safety and real-time process control, making them particularly sensitive to disruptions. Siemens RUGGEDCOM ROX II is a series of industrial-grade network switches and routers designed to operate reliably in harsh environmental conditions while providing secure connectivity for critical infrastructure. Zero-day vulnerabilities are previously unknown security flaws for which no patch exists at the time of discovery, and chained exploits combine multiple vulnerabilities together to achieve outcomes—such as persistent root access—that no single flaw could accomplish alone.

<details><summary>References</summary>
<ul>
<li><a href="https://unit42.paloaltonetworks.com/siemens-rox-ii-zero-day-vulnerabilities/">Three Steps to the Terminal: A Siemens ROX II Zero-Day Trilogy</a></li>
<li><a href="https://www.cisa.gov/news-events/ics-advisories/icsa-25-226-20">Siemens RUGGEDCOM ROX II - ICS Advisory</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">OT Security</span> <span class="tag-badge">Zero-Day</span> <span class="tag-badge">ICS</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-7"></a>

## [HTB FireFlow: From Langflow RCE to Kubernetes Root](https://xz.aliyun.com/news/92536) ⭐️ 8.0/10

This article provides a complete walkthrough of the Hack The Box 'FireFlow' machine, demonstrating a multi-stage attack chain that begins by exploiting CVE-2026-33017, an unauthenticated remote code execution (RCE) vulnerability in Langflow version 1.8.2. The attacker then leverages Model Context Protocol (MCP) JWT forgery to escalate privileges, ultimately achieving root-level access within the underlying Kubernetes cluster. This analysis matters because it highlights how vulnerabilities in modern AI tooling, like workflow orchestration platforms, can be chained together to compromise critical infrastructure such as Kubernetes clusters. It provides red teams and security professionals with actionable insights into securing AI infrastructure, an increasingly important attack surface as enterprise AI adoption accelerates. The initial compromise relies on CVE-2026-33017, a CVSS 9.8 critical vulnerability where an unauthenticated attacker can build a malicious public Flow containing a Python Interpreter component to achieve RCE. Notably, security researchers at JFrog found that Langflow version 1.8.2, which was supposedly patched for this vulnerability, remains exploitable.

rss · 先知安全技术社区 · Jul 17, 08:15

**Background**: Langflow is an open-source platform that allows users to visually build and deploy AI workflows and applications, often integrating large language models. The Model Context Protocol (MCP) is an open standard introduced by Anthropic to standardize how AI systems connect with external data sources and tools. Hack The Box (HTB) is a popular online platform that provides interactive, gamified cybersecurity training and penetration testing challenges for security professionals.

<details><summary>References</summary>
<ul>
<li><a href="https://research.jfrog.com/post/langflow-latest-version-was-not-fixed/">Langflow CVE-2026-33017: Latest 'fixed' version is still exploitable - JFrog Security Research</a></li>
<li><a href="https://github.com/EQSTLab/CVE-2026-33017">GitHub - EQSTLab/CVE-2026-33017: Langflow RCE · GitHub</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Kubernetes Security</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Langflow</span> <span class="tag-badge">Red Team</span></p>

---

<a id="item-8"></a>

## [Refactored SRDI Enhances Stealth and Flexibility in DLL Injection](https://xz.aliyun.com/news/92534) ⭐️ 8.0/10

A refactored version of Shellcode Reflective DLL Injection (sRDI) has been introduced, adding support for TLS data, clearing original PE data, and hiding mapped PE header characteristics. It also enables calling DLL exports flexibly by name or export hash and supports passing user data to these exports. This advancement significantly improves operational security (OPSEC) for red teams and malware developers by reducing memory forensic footprints. By supporting API hashing and clearing PE headers, it makes injected payloads much harder for EDR and antivirus solutions to detect. The technique specifically addresses the limitations of traditional sRDI by integrating Thread Local Storage (TLS) callback support to ensure proper execution of complex DLLs. Furthermore, the ability to invoke exports via hashes rather than plaintext strings adds an important layer of defense against static analysis.

rss · 先知安全技术社区 · Jul 17, 05:08

**Background**: Shellcode Reflective DLL Injection (sRDI), originally developed by Nick Landers (monoxgas), is an evolution of Reflective DLL Injection that converts a DLL into position-independent shellcode. This allows the payload to be injected directly into a victim process from memory rather than disk. PE headers contain valuable metadata for malware analysts, so stripping or hiding them is a common evasion tactic. Additionally, API hashing is a popular technique used by threat actors to dynamically resolve function addresses without revealing plaintext function names.

<details><summary>References</summary>
<ul>
<li><a href="https://www.rbtsec.com/blog/shellcode-reflective-dll-injection-srdi-converting-dlls-into-position-independent-shellcode/">Shellcode Reflective DLL Injection ( sRDI ): Converting... | RBT Security</a></li>
<li><a href="https://securitymaven.medium.com/api-hashing-why-malware-loves-and-you-should-care-77c5135d9aaa">API Hashing — Why Malware Loves (And You Should Care) - Nikhil gupta</a></li>
<li><a href="https://www.ired.team/offensive-security/code-injection-process-injection/reflective-shellcode-dll-injection">Shellcode Reflective DLL Injection | Red Team Notes</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Red Teaming</span> <span class="tag-badge">Malware Development</span> <span class="tag-badge">Windows Security</span> <span class="tag-badge">Shellcode Injection</span> <span class="tag-badge">Reverse Engineering</span></p>

---

<a id="item-9"></a>

## [Truth Social to Launch "Truth API" for Algorithmic Trading](https://www.cnn.com/2026/07/16/business/truth-social-data-wall-street) ⭐️ 8.0/10

Trump Media & Technology Group (TMTG) announced the upcoming launch of "Truth API," a business-to-business data feed offering millisecond-level, real-time access to posts from Truth Social's top accounts. Slated for release on August 1, the service is explicitly designed to give Wall Street firms an information edge in high-frequency algorithmic trading. This development represents a novel intersection of social media, politics, and financial technology, directly turning political posts into a monetizable asset for financial markets. Because Trump's past statements on the platform have triggered massive fluctuations in stock and oil prices, this API creates an ecosystem where algorithmic traders can literally buy a speed advantage to capitalize on policy-driven market shifts. Truth API will strictly provide real-time, licensed data feeds focused on the platform's top 10 highest-ranking accounts, with the most prominent being Donald Trump. While TMTG has not publicly released the pricing for this institutional service, it relies on the critical requirement of ultra-low latency infrastructure that high-frequency trading firms depend on to execute trades before the broader market reacts.

telegram · zaihuapd · Jul 17, 01:02

**Background**: High-frequency trading (HFT) relies on incredibly fast, sub-millisecond data processing and network connections to execute large numbers of orders in fractions of a second. Financial firms constantly seek out "alternative data"—such as real-time social media feeds or geolocation data—to feed into their algorithms and predict market movements before human traders can react. Truth Social has effectively become a primary broadcast channel for major policy announcements, making its raw data highly valuable for predictive financial modeling.

<details><summary>References</summary>
<ul>
<li><a href="https://www.globenewswire.com/news-release/2026/07/16/3328489/0/en/trump-media-and-technology-group-launches-truth-api-a-new-licensed-data-service-for-financial-services-partners-that-provides-the-fastest-access-to-truth-social-s-most-influential-.html">Trump Media and Technology Group Launches Truth API, a New Licensed Data Service for Financial Services Partners That Provides the Fastest Access to Truth Social’s Most Influential Accounts</a></li>
<li><a href="https://www.cnbc.com/2026/07/16/trump-truth-social-wall-street-traders-api.html">Trump Media launches paid data service to help Wall Street track Trump’s posts</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">FinTech</span> <span class="tag-badge">Data API</span> <span class="tag-badge">Algorithmic Trading</span> <span class="tag-badge">Social Media</span> <span class="tag-badge">High-Frequency Trading</span></p>

---

<a id="item-10"></a>

## [Tesla Begins Mass Production of Steering-Wheel-Free Cybercab in North America](https://t.me/zaihuapd/42621) ⭐️ 8.0/10

Tesla has officially commenced mass production of its fully autonomous vehicle, the Cybercab, in North America. The dedicated vehicle is purpose-built without a steering wheel, pedals, or mirrors, relying entirely on an onboard AI to handle all driving operations. The start of manufacturing for a purpose-built Robotaxi is a crucial milestone for the autonomous driving industry. It represents a significant transition from retrofitting autonomous systems into traditional cars to building specialized vehicles designed exclusively for driverless ride-hailing ecosystems. The Cybercab's architecture and user interaction are tailored specifically for driverless scenarios as part of Tesla's broader Robotaxi service network. However, because the vehicle lacks manual controls, Tesla currently cannot legally sell it to individual consumers and must navigate significant regulatory hurdles before it can operate without human supervision.

telegram · zaihuapd · Jul 17, 03:06

**Background**: The Cybercab concept was officially unveiled in October 2024, featuring prototypes that demonstrated the bold design of having no steering wheel or pedals. Within Tesla's mobility ecosystem, "Robotaxi" refers to the overarching automated ride-hailing service, which can utilize modified Model Ys or the dedicated Cybercab. Unlike conventional vehicles with semi-autonomous assist features, the Cybercab is designed from the ground up as a Level 4 or Level 5 autonomous machine, depending entirely on the Full Self-Driving (FSD) computer and vision-based AI.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Tesla_Cybercab">Tesla Cybercab</a></li>
<li><a href="https://electrek.co/2026/07/06/tesla-cybercab-production-before-autonomy/">Tesla Cybercab: mass-producing a car it can't sell or drive itself | Electrek</a></li>
<li><a href="https://www.theautopian.com/the-first-responders-guide-to-the-tesla-cybercab-was-released-and-reveals-some-interesting-and-weird-details/">The First Responder's Guide To The Tesla Cybercab Was Released And Reveals Some Interesting And Weird Details - The Autopian</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Tesla</span> <span class="tag-badge">Autonomous Vehicles</span> <span class="tag-badge">Robotaxi</span> <span class="tag-badge">Automotive Industry</span></p>

---

<a id="item-11"></a>

## [Huawei Unveils Ascend 950 SuperPoD with 6.7x NVIDIA NVL144 Compute](https://www.ithome.com/0/978/019.htm) ⭐️ 8.0/10

On July 17 at WAIC 2026, Huawei publicly showcased the Ascend 950 SuperPoD (Atlas 950 SuperPoD) physical hardware for the first time, achieving the industry's largest 1024-card scale with 1 EFLOPS FP8 and 2 EFLOPS FP4 computing power, plus 256 TB of global unified memory. According to BOC Securities, its total computing power reaches 6.7 times that of NVIDIA's comparable NVL144 system with 144 GPUs. This unveiling represents a major milestone for China's domestic AI computing infrastructure, demonstrating Huawei's ability to deliver ultra-large-scale compute systems that compete directly with NVIDIA's flagship offerings. The system's massive scale and native support for low-precision formats like FP8 and FP4 position it as a critical enabler for training next-generation trillion-parameter foundation models, especially in markets where NVIDIA hardware access is restricted. The Ascend 950 SuperPoD is built on Huawei's Lingqu (UnifiedBus) interconnect protocol and can theoretically scale to 8192 cards with non-blocking full interconnection — over 100 times the scale of NVIDIA's NVL72. The DT chip uses a dual-Die UMA architecture with 144 GB HBM, 4 TB/s memory bandwidth, and 2 TB/s single-card interconnect bandwidth, adding support for MXFP8 and MXFP4 low-precision data formats.

telegram · zaihuapd · Jul 17, 10:27

**Background**: A SuperPoD (Super Pod) is an ultra-large-scale AI computing cluster that links hundreds or thousands of accelerators into a single logical system, enabling the training of massive AI models that exceed the capacity of individual servers. Interconnect protocols like Huawei's Lingqu (UnifiedBus), NVIDIA's NVLink, and the industry-standard UALink and CXL are critical for achieving the high-bandwidth, low-latency communication required between GPUs across such scales. NVIDIA's NVL144, part of the Vera Rubin platform roadmap, is a 144-GPU flagship rack-scale system designed for ultra-large-context AI inference workloads, but reports indicate it has faced delays pushing availability beyond 2027.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cls.cn/detail/2426602">华为 昇 腾 950 超 节 点 将首次真机亮相 国产算力板块高景气有望延续</a></li>
<li><a href="https://www.nbd.com.cn/articles/2025-09-18/4065524.html">突破大规模超节点 互 联 技术 华为发布 互 联 协 议 “ 灵 衢 ” | 每经网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">华为昇腾</span> <span class="tag-badge">AI算力</span> <span class="tag-badge">硬件架构</span> <span class="tag-badge">超节点</span> <span class="tag-badge">人工智能</span></p>

---

<a id="item-12"></a>

## [中国人工智能模型的崛起，让习近平主席获得了新的炫耀资本，也让他更有力地塑造了这项技术的全球规则，尽管其日益增长的力量也引起了华盛顿和北京的安全警觉。](https://www.bloomberg.com/news/articles/2026-07-16/china-s-ai-ascendance-gives-xi-a-stage-and-a-security-dilemma?srnd=homepage-asia) ⭐️ 8.0/10

Bloomberg reports on China's growing dominance in the AI sector, highlighted by Xi Jinping's upcoming appearance at the WAIC, as Chinese models capture nearly 60% of US enterprise applications on platforms like OpenRouter.

telegram · Marcoview666 · Jul 17, 01:38

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">China</span> <span class="tag-badge">Industry News</span> <span class="tag-badge">Enterprise AI</span></p>

---