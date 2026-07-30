---
layout: default
title: "Horizon Summary: 2026-07-30 (EN)"
date: 2026-07-30
lang: en
---

> From 64 items, 14 important content pieces were selected

---

1. [Critical VMware vCenter Vulnerabilities Allow Auth Bypass and RCE](#item-1) ⭐️ 10.0/10
2. [CVE-2026-66066: Critical Pre-Auth RCE in Rails Active Storage](#item-2) ⭐️ 9.5/10
3. [Google DeepMind Introduces Gemini Robotics 2 for Whole-Body Intelligence](#item-3) ⭐️ 9.0/10
4. [OpenAI's GPT-5.6 Luna Delivers 80% Cost Reduction](#item-4) ⭐️ 9.0/10
5. [Stacked Pull Requests Enter Public Preview on GitHub](#item-5) ⭐️ 9.0/10
6. [CosmosEscape Vulnerability Enables Full Takeover of Azure Cosmos DB](#item-6) ⭐️ 9.0/10
7. [Russia Charges Telegram Founder Durov with Assisting Terrorism, Issues Arrest Warrant](#item-7) ⭐️ 9.0/10
8. [Anthropic's AI Discovers Severe Weakness in NIST Post-Quantum Algorithm HAWK](#item-8) ⭐️ 9.0/10
9. [Google DeepMind Disbands AlphaFold Team; Key Researchers Join Anthropic](#item-9) ⭐️ 9.0/10
10. [Mandiant and GTIG Release Supply Chain Compromise Mitigation Guidance](#item-10) ⭐️ 8.0/10
11. [Cloudflare Migrates cdnjs to Its Developer Platform at Massive Scale](#item-11) ⭐️ 8.0/10
12. [Metasploit Framework 6.5 Released with Malleable C2 and MCP Server](#item-12) ⭐️ 8.0/10
13. [Chinese-Speaking Threat Actor Uses AI Models for Autonomous Cyberattacks](#item-13) ⭐️ 8.0/10
14. [EU Launches AI Gigafactory Tender to Mobilize €30 Billion](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Critical VMware vCenter Vulnerabilities Allow Auth Bypass and RCE](https://www.rapid7.com/blog/post/etr-critical-vmware-vcenter-vulnerabilities-allow-authentication-bypass-and-remote-code-execution-cve-2026-59309-cve-2026-59310) ⭐️ 10.0/10

On July 29, 2026, Broadcom published security advisory VMSA-2026-0006 disclosing two critical vulnerabilities in VMware vCenter Server: CVE-2026-59309 (an authentication bypass in VMware Directory Service) and CVE-2026-59310 (a directory traversal in the Syslog server enabling remote code execution), both carrying a CVSSv3.1 score of 9.8. These vulnerabilities affect VMware vCenter Server, the centralized management platform for enterprise virtualization infrastructure, meaning successful exploitation could grant attackers control over entire virtualized environments including ESXi hosts and virtual machines. Since both flaws are exploitable without authentication by anyone with network access to the vCenter services, they represent a severe risk to enterprise data centers worldwide. CVE-2026-59309 targets the VMware Directory Service authentication mechanism, while CVE-2026-59310 exploits a directory traversal flaw in the vCenter Syslog server to achieve arbitrary code execution. At the time of publication, there was no known public proof-of-concept exploit code or evidence of active exploitation in the wild, though vCenter Server has historically appeared on CISA's Known Exploited Vulnerabilities (KEV) list multiple times.

rss · Rapid7 Cybersecurity Blog · Jul 30, 10:35

**Background**: VMware vCenter Server is the centralized management utility for VMware vSphere environments, enabling administrators to manage ESXi hosts, virtual machines, resource allocation, and availability from a single control plane. CVSS (Common Vulnerability Scoring System) v3.1 is the industry standard for assessing the severity of software vulnerabilities, with scores ranging from 0 to 10; a score of 9.8 is classified as 'Critical,' indicating the highest level of severity. Broadcom acquired VMware in 2023 and has since been responsible for publishing VMware security advisories (VMSAs) for its products.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/VCenter">vCenter - Wikipedia</a></li>
<li><a href="https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator">NVD - CVSS v3 Calculator</a></li>
<li><a href="https://blogs.vmware.com/cloud-foundation/2024/09/17/vmsa-2024-0019-questions-answers/">VMSA -2024-0019: Questions & Answers - VMware Cloud Foundation...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">vmware</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-2"></a>

## [CVE-2026-66066: Critical Pre-Auth RCE in Rails Active Storage](https://www.akamai.com/blog/security-research/2026/jul/rails-active-storage-rce-cve-2026-66066) ⭐️ 9.5/10

On July 29, 2026, Ruby on Rails disclosed CVE-2026-66066 (CVSSv4 9.5), a critical pre-authentication vulnerability in Active Storage's image processing pipeline when using the libvips library, allowing unauthenticated attackers to read arbitrary files and potentially achieve remote code execution. Ethiack and GMO Flatt Security independently reported the flaw, with proof-of-concept details withheld until August 28, 2026. Ruby on Rails is one of the most widely deployed web frameworks, and libvips has been the default Active Storage variant processor since Rails 7.0, meaning a vast number of production applications accepting image uploads are potentially exposed. Since exploitation requires no authentication and can escalate to full RCE, this vulnerability demands urgent remediation outside normal patching cycles across the entire Rails ecosystem. The root cause is that Active Storage failed to disable libvips operations marked as 'unfuzzed' or 'untrusted' that are unsafe for processing untrusted content; notably, even generating image variants is not required for an application to be vulnerable. Applications using ImageMagick instead of libvips are unaffected by this vector, and no exploitation in the wild has been observed as of July 30, 2026.

rss · akamai Blog · Jul 30, 08:00

**Background**: Active Storage is a built-in Rails framework for handling file uploads to cloud storage services like Amazon S3 and Google Cloud Storage. It can transform uploaded images into variants (e.g., resized thumbnails) using either libvips or ImageMagick as backend processors. libvips became the default variant processor starting with Rails 7.0, selected for its superior speed and lower memory footprint. A pre-authentication RCE vulnerability is particularly severe because it allows an attacker to execute arbitrary code on a server without needing any valid login credentials.

<details><summary>References</summary>
<ul>
<li><a href="https://guides.rubyonrails.org/active_storage_overview.html">Active Storage Overview — Ruby on Rails Guides</a></li>
<li><a href="https://www.libvips.org/">A fast image processing library with low memory needs.</a></li>
<li><a href="https://medium.com/@instatunnel/the-beyondtrust-breakout-why-pre-auth-rce-remains-2025s-ransomware-holy-grail-16c67f35d5bf">The BeyondTrust Breakout: Why Pre - Auth RCE Remains... | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Ruby on Rails</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-3"></a>

## [Google DeepMind Introduces Gemini Robotics 2 for Whole-Body Intelligence](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/) ⭐️ 9.0/10

Google DeepMind has introduced Gemini Robotics 2, a new intelligence layer designed to provide adaptable whole-body control, advanced dexterity, and multi-robot collaboration. This system acts as a high-level brain based on the Gemini large language model, enabling physical robots to better perceive their environment and plan complex, multi-step tasks. This development represents a major step in expanding foundation models from digital environments into physical robotics, potentially accelerating the development of truly autonomous machines. If its progress mirrors the rapid advancements seen in text-based models, this whole-body intelligence could unlock massive real-world applications across various industries. The Gemini Robotics models are vision-language-action (VLA) systems tailored for robotics, allowing machines of various shapes and sizes to interact with humans and use tools. Access to these models is currently restricted to trusted testers, which includes major industry players like Boston Dynamics and Agility Robotics.

hackernews · ai2027 · Jul 30, 15:15 · [Discussion](https://news.ycombinator.com/item?id=49111237)

**Background**: Gemini Robotics is an advanced vision-language-action model developed by Google DeepMind to function as an embodied reasoning (ER) system for physical machines. It is built upon the Gemini 2.0 large language model, allowing it to process visual and linguistic inputs to generate physical actions. Prior to this announcement, DeepMind had already released earlier iterations like Gemini Robotics-ER and an On-Device variant optimized for local execution on robotic hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/">Gemini Robotics 2 brings whole body intelligence to robots</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_Robotics">Gemini Robotics</a></li>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/">Gemini Robotics ER 2</a></li>

</ul>
</details>

**Discussion**: The community is impressed by Google's broad scope of AI research but remains highly skeptical about current hardware limitations, noting that the robots appear slow and lack fluidity. Commenters debate the practical readiness of the technology for daily tasks, with some drawing parallels to the surprisingly rapid improvement of early text-based LLMs, while others argue that slow actuator innovation remains a massive bottleneck.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Robotics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">DeepMind</span> <span class="tag-badge">Gemini</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-4"></a>

## [OpenAI's GPT-5.6 Luna Delivers 80% Cost Reduction](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) ⭐️ 9.0/10

OpenAI has announced GPT-5.6, with its Luna model receiving an 80% cost reduction that makes it five times cheaper than before. The savings are driven primarily by kernel-level optimizations that cut end-to-end serving costs by 20% and token-generation efficiency improvements exceeding 15%. An 80% price reduction for a production-grade model fundamentally changes the economics of AI application development, enabling use cases like massively parallel agent workflows that were previously cost-prohibitive. It also signals a reversal of the industry's recent trend of rising prices, placing competitive pressure on rival model providers. GPT-5.6 Luna is designed for cost-sensitive, high-volume workloads with a 1,050,000-token context window, roughly corresponding to the nano tier in earlier GPT-5 model families. The dramatic cost reduction appears to stem from compounding engineering gains in serving infrastructure rather than fundamental architectural changes, suggesting similar optimizations could potentially be applied across the broader GPT-5.6 lineup.

hackernews · tedsanders · Jul 30, 17:15 · [Discussion](https://news.ycombinator.com/item?id=49112867)

**Background**: GPT-5.6 is part of OpenAI's tiered model lineup that includes Luna (fastest and cheapest, analogous to a nano tier), Sol (mid-tier), and Terra (most powerful). Prior to this announcement, the AI industry had been experiencing a period of steadily increasing model serving costs, with many observers expecting only incremental 5-10% improvements as model capabilities plateaued. Kernel optimizations refer to improvements in the low-level GPU compute functions that execute tensor operations — by fusing operations, reducing memory bottlenecks, and improving throughput, these optimizations can significantly reduce the computational overhead per inference without changing the model itself.

<details><summary>References</summary>
<ul>
<li><a href="https://developers.openai.com/api/docs/models/gpt-5.6-luna">GPT-5.6 Luna Model | OpenAI API</a></li>
<li><a href="https://www.datacamp.com/blog/gpt-5-6-sol-luna-terra">GPT-5.6 Sol, Terra, and Luna : OpenAI 's Next-Gen Model ... | DataCamp</a></li>
<li><a href="https://www.aatrax.com/llm-latency-explained-inference-bottlenecks-and-speed-optimization/">LLM Latency Explained: Inference Bottlenecks and Speed Optimization</a></li>

</ul>
</details>

**Discussion**: Commenters expressed widespread astonishment at the scale of the cost reduction, with many noting it far exceeded expectations of incremental progress. Simon Willingham raised the striking point that even a 20% serving cost reduction could translate to billions in monthly savings across the industry, while others highlighted the practical implications — comparing the shift to the dialup-to-broadband transition and noting that running 50 parallel agents is now economically feasible. Several commenters also contextualized this within a broader competitive landscape including Kimi K3 and GLM 5.2, suggesting the industry may be re-entering a phase of aggressive price competition.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Cost Optimization</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-5"></a>

## [Stacked Pull Requests Enter Public Preview on GitHub](https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/) ⭐️ 9.0/10

GitHub has officially launched Stacked Pull Requests into public preview, allowing developers to stack dependent code changes on top of one another. This introduces a major workflow paradigm shift accessible via the platform's UI and a new command-line tool. Native support for stacked PRs is one of the largest platform-level changes in GitHub's history, fundamentally altering how developers collaborate on complex features. It exposes a highly requested, efficient workflow to a massive global audience, potentially improving software quality by making code reviews faster and more manageable. The launch is incredibly broad in scale, touching almost every GitHub service from Actions to security. However, early users report significant limitations during the preview, notably that merging an entire stack is currently broken in many cases, particularly when using squash and merge alongside required reviews.

hackernews · tomzorz · Jul 30, 16:26 · [Discussion](https://news.ycombinator.com/item?id=49112232)

**Background**: Stacked pull requests involve breaking a large feature into a series of small, dependent changes that are layered on top of one another, rather than submitting one massive pull request. This workflow helps solve code review bottlenecks by allowing developers to maintain momentum and get faster feedback on bite-sized, sequential changes. It contrasts with the traditional 'Feature Branch Workflow' by preventing reviewers from being overwhelmed by massive, monolithic diffs.

<details><summary>References</summary>
<ul>
<li><a href="https://www.graphite.com/guides/stacked-diffs">Stacked diffs</a></li>
<li><a href="https://awesomecodereviews.netlify.app/best-practices/stacked-prs/">Stacked Pull Requests - The Complete Guide for Developers</a></li>
<li><a href="https://www.git-tower.com/blog/stacked-prs">Understanding the Stacked Pull Requests Workflow | Tower Blog</a></li>

</ul>
</details>

**Discussion**: The community views this as a monumental and highly positive shift for the platform, with prominent developers noting it will expose superior workflows to countless new users. However, there is active frustration regarding current bugs, such as broken stack merging. Additionally, some developers are questioning whether stacked PRs are actually better than well-curated commit sets, especially as the industry struggles to adapt reviews for large AI-generated code.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">github</span> <span class="tag-badge">developer-tools</span> <span class="tag-badge">workflow</span> <span class="tag-badge">pull-requests</span> <span class="tag-badge">devops</span></p>

---

<a id="item-6"></a>

## [CosmosEscape Vulnerability Enables Full Takeover of Azure Cosmos DB](https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db) ⭐️ 9.0/10

Security researchers at Wiz uncovered "CosmosEscape," a critical vulnerability chain in Microsoft's Azure Cosmos DB that allowed unauthorized, full read and write access to all customer databases. This vulnerability poses a massive risk to enterprise cloud security, as Cosmos DB is widely used to store sensitive, globally distributed data. If exploited, attackers could access, modify, or delete critical business data across multiple tenants, leading to devastating data breaches. The vulnerability chain specifically targeted the implementation of the Gremlin API within Azure Cosmos DB. This flaw potentially enabled cross-tenant attacks, bypassing isolation boundaries to compromise virtually any database hosted on the service.

rss · Wiz Blog | RSS feed · Jul 30, 12:00

**Background**: Azure Cosmos DB is Microsoft's proprietary globally distributed, multi-model NoSQL and vector database service designed for high availability and low-latency access. It supports multiple APIs, including the Gremlin API for graph database functionality, allowing developers to interact with data using different paradigms. Because it is a managed cloud service, maintaining strict isolation between different customers' (tenants) data is critical for overall security.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db">CosmosEscape : Taking Over Every Azure Cosmos DB | Wiz Blog</a></li>
<li><a href="https://en.wikipedia.org/wiki/Azure_Cosmos_DB">Azure Cosmos DB</a></li>
<li><a href="https://cybersecuritynews.com/cosmosescape-vulnerability/">New CosmosEscape Vulnerability Allowed Attackers to Take Over...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cloud-security</span> <span class="tag-badge">azure</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">cosmos-db</span> <span class="tag-badge">data-breach</span></p>

---

<a id="item-7"></a>

## [Russia Charges Telegram Founder Durov with Assisting Terrorism, Issues Arrest Warrant](https://t.me/zaihuapd/42859) ⭐️ 9.0/10

On July 29, Russia's Federal Security Service (FSB) filed criminal charges against Telegram founder Pavel Durov under Article 205.1, Part 1.1 of the Russian Criminal Code for assisting terrorist activities. The FSB has also placed Durov on an international wanted list. This action highlights the intense pressure tech platforms face regarding content moderation and cooperation with government requests, especially in politically sensitive regions. Telegram is a vital communication tool for millions globally, making Durov's legal status a critical issue for digital privacy, free speech, and the future of the platform. The FSB alleges that Telegram management refused to delete channels, groups, and bots used by Ukrainian intelligence and terrorist/extremist organizations to coordinate sabotage, terrorist attacks, and cyber fraud in Russia. The agency claims this refusal resulted in multiple casualties, including women and children, and billions of rubles in damages.

telegram · zaihuapd · Jul 30, 03:45

**Background**: Telegram is a widely used instant messaging app known for its speed, security features, and support for large public channels and bots. Its founder, Pavel Durov, previously created the Russian social network VKontakte (VK) before leaving Russia in 2014 due to conflicts with the government over censorship and user data. Since then, Durov has operated Telegram from abroad, positioning it as a defender of free speech and privacy, which has led to ongoing clashes with authorities in various countries demanding content removal or access to encrypted data.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Pavel Durov</span> <span class="tag-badge">Censorship</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Tech News</span></p>

---

<a id="item-8"></a>

## [Anthropic's AI Discovers Severe Weakness in NIST Post-Quantum Algorithm HAWK](https://startupfortune.com/claude-mythos-broke-hawk-and-the-nist-post-quantum-timeline-may-not-survive-it/) ⭐️ 9.0/10

Anthropic's Claude Mythos Preview model discovered a severe weakness in HAWK, a NIST post-quantum cryptography candidate algorithm, in approximately 60 hours—after human experts had failed to find it over two years of review. The attack halves HAWK-256's effective key strength from 2^64 to 2^38 and cost about $100,000 in API fees. This demonstrates AI as a powerful new tool in cryptographic analysis, capable of finding vulnerabilities far faster than human cryptanalysts, which could reshape how post-quantum algorithms are evaluated and standardized. It also adds urgency to the NIST post-quantum standardization process and the federal mandate requiring agencies to migrate to quantum-resistant cryptography by 2030. The attack does not run in polynomial time, meaning larger key sizes remain resistant and HAWK has not been publicly withdrawn. The research also included an improved attack on 7-round AES-128, but since the full standard uses 10 rounds, production systems remain unaffected.

telegram · zaihuapd · Jul 30, 05:47

**Background**: Post-quantum cryptography (PQC) refers to cryptographic algorithms designed to resist attacks by quantum computers, which could break many current public-key systems using Shor's algorithm. NIST has been running a multi-year competition to standardize PQC algorithms, with HAWK having survived two rounds of evaluation. A June 2026 White House executive order (EO 14409) requires U.S. federal agencies to complete encryption migration by 2030 and digital signature migration by 2031. Cryptographic agility—the ability to switch between cryptographic primitives quickly—is considered essential for navigating this transition.

<details><summary>References</summary>
<ul>
<li><a href="https://arstechnica.com/security/2026/07/mythos-uncovers-crypto-weaknesses-that-went-unknown-for-years/">Mythos attack on 3rd-round PQC algorithm candidate... - Ars Technica</a></li>
<li><a href="https://www.techtimes.com/articles/321876/20260728/ai-cracks-post-quantum-cipher-60-hours-after-two-years-human-review-failed.htm">AI Cracks Post - Quantum Cipher in 60 Hours After Two Years of...</a></li>
<li><a href="https://www.techtimes.com/articles/319080/20260625/post-quantum-encryption-cloudflare-moves-2029-federal-2030-mandate-reaches-every-vendor.htm">Post - Quantum Encryption: Cloudflare Moves to 2029 as Federal 2030 ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Post-Quantum Cryptography</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">NIST</span></p>

---

<a id="item-9"></a>

## [Google DeepMind Disbands AlphaFold Team; Key Researchers Join Anthropic](https://www.ft.com/content/61b2953d-ee0d-45de-af6e-a9c1cf524b33?syn-25a6b1a6=1) ⭐️ 9.0/10

Google DeepMind has disbanded its Nobel Prize-winning AlphaFold team as part of a broader research strategy realignment. Over the past year, most original authors of the AlphaFold papers have been reassigned to other projects within the company, while nearly a quarter have left entirely — including three core members, John Jumper, Jonas Adler, and Alexander Pritzel, who joined competitor Anthropic. The dissolution of one of AI's most celebrated scientific teams signals a strategic pivot at DeepMind away from specialized scientific AI toward more commercially focused efforts like the Gemini large language model. The loss of top-tier talent to Anthropic also underscores the fierce competition for elite AI researchers among frontier labs, with OpenAI research head Mark Chen noting that researchers want to work at the frontier rather than playing catch-up. Remaining AlphaFold team members have been internally reassigned to projects including the Gemini LLM, enzyme design, nuclear fusion, and genomics, while some transferred to Isomorphic Labs, an Alphabet subsidiary focused on AI-driven drug discovery. Notably, AlphaFold's technology and infrastructure remain in use despite the team's dissolution, and the project's legacy continues through Isomorphic Labs' drug discovery efforts.

telegram · zaihuapd · Jul 30, 07:45

**Background**: AlphaFold is an AI system developed by Google DeepMind that predicts 3D protein structures with high accuracy, a breakthrough that earned the team a Nobel Prize and revolutionized computational biology. Isomorphic Labs was spun off from DeepMind in 2021 under Alphabet, leveraging AlphaFold technology to reimagine drug discovery. Anthropic is a leading AI safety company and a direct competitor to both DeepMind and OpenAI in the race to build frontier AI models, making the hiring of AlphaFold's core researchers a notable talent coup.

<details><summary>References</summary>
<ul>
<li><a href="https://deepmind.google/science/alphafold/">AlphaFold — Google DeepMind</a></li>
<li><a href="https://en.wikipedia.org/wiki/Isomorphic_Labs">Isomorphic Labs</a></li>
<li><a href="https://www.isomorphiclabs.com/">Reimagining Drug Discovery Process with AI - Isomorphic Labs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">AlphaFold</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-10"></a>

## [Mandiant and GTIG Release Supply Chain Compromise Mitigation Guidance](https://cloud.google.com/blog/topics/threat-intelligence/mitigation-guidance-for-supply-chain-compromise/) ⭐️ 8.0/10

Google Threat Intelligence Group (GTIG) and Mandiant have published new mitigation and hardening recommendations for defending against software supply chain compromises, with a particular focus on the growing threat of open source repository attacks observed throughout 2025 and early 2026. The guidance incorporates direct insights gained from supporting customers through recent large-scale campaigns involving manipulated open source packages, worms, and iterative compromises. Open source supply chain compromises offer attackers the same efficiency and scale as traditional attacks but require significantly fewer resources to execute, making them an increasingly attractive tactic for threat actors. GTIG assesses with high confidence that the growth in very large-scale open source supply chain campaigns represents a significant expansion of this threat vector that will continue through 2026 and beyond. The guidance specifically addresses MITRE ATT&CK technique T1195.001 (Compromise Software Dependencies and Developer Tools) and notes that while open source supply chain attacks are easier to launch, they are also noisier — malicious packages are typically discovered and publicized more quickly than traditional compromises. The recommendations are derived from real-world incident response experience, including campaigns involving worms and iterative compromise techniques.

rss · Google Threat Intelligence · Jul 30, 14:00

**Background**: The cybersecurity industry's understanding of supply chain compromise has been shaped by watershed events such as the 2020 SolarWinds attack by Russian espionage group ICE RELIC (APT29), which deployed the SUNBURST backdoor through a compromised software update, and the 2023 3CX compromise by North Korean threat actor UNC4736. These traditional supply chain attacks required extensive planning and resources, targeting specific commercial software vendors. However, the threat landscape has shifted toward open source repositories, where attackers can inject malicious code into widely-used packages with comparatively minimal effort.

<details><summary>References</summary>
<ul>
<li><a href="https://breachnews.com/threat-actors/unc4736/">UNC 4736 : Threat Actor Profile | BreachNews</a></li>
<li><a href="https://www.infosecinstitute.com/resources/malware-analysis/sunburst-backdoor-malware-what-it-is-how-it-works-and-how-to-prevent-it-malware-spotlight/">SUNBURST backdoor malware : What it is, how it works, and how to...</a></li>
<li><a href="https://strobes.co/vi/threat-actors/UNC4736/">UNC 4736 - Threat Actor Profile & Exploited CVEs | Strobes VI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Supply Chain Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Mandiant</span> <span class="tag-badge">Risk Mitigation</span></p>

---

<a id="item-11"></a>

## [Cloudflare Migrates cdnjs to Its Developer Platform at Massive Scale](https://blog.cloudflare.com/cdnjs-dev-platform-migration/) ⭐️ 8.0/10

Cloudflare completed the migration of cdnjs — one of the internet's busiest open-source CDNs serving 9 billion requests daily — entirely onto its own Developer Platform. In the process, Cloudflare pushed the capabilities and limits of its Workflows and Workers products to new heights, benefiting the entire platform ecosystem. This migration serves as a powerful real-world proof point that serverless and edge computing architectures can reliably handle internet-scale, mission-critical traffic. The improvements made to Workflows and Workers during the migration directly benefit all developers building applications on Cloudflare's platform. cdnjs serves over 200 billion requests per month and is trusted by more than 12.5% of all websites, making it an ideal stress test for Cloudflare's infrastructure. Cloudflare Workflows, the durable execution engine used in this migration, is built on top of Workers and allows developers to build multi-step applications that can automatically retry, persist state, and run for extended periods.

rss · The Cloudflare Blog · Jul 30, 13:00

**Background**: cdnjs is a free and open-source CDN that hosts popular JavaScript and CSS libraries, storing them publicly on GitHub and serving them to developers worldwide. Cloudflare Workers is a serverless platform that lets developers run code at the edge of Cloud's global network, while Workflows is a newer execution engine built on Workers for durable, multi-step applications. The term "dogfooding" refers to a company using its own products to run its services, which in this case demonstrates Cloudflare's confidence in its platform by running critical infrastructure on it.

<details><summary>References</summary>
<ul>
<li><a href="https://cdnjs.com/">cdnjs - The #1 free and open source CDN built to make life easier for...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cdnjs">cdnjs - Wikipedia</a></li>
<li><a href="https://developers.cloudflare.com/workflows/">Overview · Cloudflare Workflows docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cloudflare</span> <span class="tag-badge">edge-computing</span> <span class="tag-badge">cdn</span> <span class="tag-badge">serverless</span> <span class="tag-badge">infrastructure</span></p>

---

<a id="item-12"></a>

## [Metasploit Framework 6.5 Released with Malleable C2 and MCP Server](https://www.rapid7.com/blog/post/pt-metasploit-framework-6-5-released) ⭐️ 8.0/10

Metasploit Framework version 6.5 has been released, adding 422 new modules over the past two years and introducing support for Malleable C2 profiles for HTTP(S) traffic across all current Meterpreter payloads, including Windows, Java, Python, PHP, and Linux. The release also debuts the Metasploit MCP Server (msfmcpd), a middleware layer enabling AI applications like Claude or Cursor to interact with Metasploit through 16 standardized tools. The addition of Malleable C2 profile support is a long-requested feature that significantly enhances red teamers' ability to blend Meterpreter traffic with legitimate network activity, improving evasion of network-based detection systems. The introduction of an MCP Server bridges Metasploit with the rapidly growing AI-assisted security workflow ecosystem, positioning the framework for next-generation automated penetration testing. Users enable Malleable C2 by setting the MALLEABLEC2 option to a profile file on disk, and the profile syntax is compatible with other tools such as Cobalt Strike, allowing publicly available profiles to be reused. Staged payloads only apply the Malleable C2 configuration after the second stage is loaded due to size constraints, whereas stageless payloads apply it immediately from the start.

rss · Rapid7 Cybersecurity Blog · Jul 30, 14:29

**Background**: Malleable C2 is a technique originally popularized by Cobalt Strike that allows operators to customize the shape and characteristics of command-and-control (C2) network traffic, making it appear as legitimate web browsing activity. Meterpreter is Metasploit's most popular payload type, providing an extensible in-memory agent for post-exploitation operations. Staged payloads deliver the agent in two parts—a small initial stager that downloads the full payload—while stageless payloads bundle everything into a single, self-contained executable.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnblogs.com/zpchcbd/p/12466380.html">Malleable C 2 - zpchcbd - 博客园</a></li>
<li><a href="https://docs.rapid7.com/metasploit/working-with-payloads/">Working with Payloads | Metasploit Documentation</a></li>
<li><a href="https://dev.to/vibhav_chennamadhava_a887/metasploit-deep-dive-staged-vs-stageless-payloads-a-practical-lab-1pa7">Metasploit Deep Dive: Staged vs . Stageless Payloads — A Practical...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Metasploit</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Red Team</span> <span class="tag-badge">Security Tools</span></p>

---

<a id="item-13"></a>

## [Chinese-Speaking Threat Actor Uses AI Models for Autonomous Cyberattacks](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/) ⭐️ 8.0/10

Palo Alto Networks Unit 42 has uncovered a cyber campaign in which a Chinese-speaking threat actor deployed autonomous AI models to scan for and exploit vulnerabilities. The actor combined AI-driven autonomous scanning across seven known vulnerabilities with manual exploitation techniques to compromise targets. This development represents a major leap forward in the use of AI by malicious actors, moving from theoretical concerns to real-world autonomous attack campaigns. It forces security professionals and organizations to adapt their defenses to counter AI-augmented threats that can operate at machine speed and scale. The campaign was characterized by the integration of an autonomous AI agent that systematically scanned for seven specific vulnerabilities alongside traditional manual exploitation methods. This hybrid approach of AI automation and human-directed exploitation allowed the threat actor to increase both the speed and efficiency of the attack.

rss · Unit 42 · Jul 30, 10:00

**Background**: Palo Alto Networks Unit 42 is a leading threat intelligence and incident response team that actively researches emerging cybersecurity threats. Autonomous AI in cybersecurity involves using AI agents to independently perform tasks like reconnaissance, vulnerability scanning, and exploitation without continuous human oversight. The use of AI to automate these tasks is a growing trend, with both offensive and defensive security teams exploring its capabilities to accelerate their workflows.

<details><summary>References</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/automating-penetration-testing-using-autonomous-ai-manjish-y0rie">Automating Penetration Testing Using Autonomous AI Agents</a></li>
<li><a href="https://unit42.paloaltonetworks.com/">Unit 42 - Latest Cybersecurity Research | Palo Alto Networks</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Autonomous AI</span> <span class="tag-badge">Vulnerability Exploitation</span></p>

---

<a id="item-14"></a>

## [EU Launches AI Gigafactory Tender to Mobilize €30 Billion](https://www.wsj.com/world/europe/eu-opens-call-for-creation-of-local-ai-gigafactories-c286213d) ⭐️ 8.0/10

The European Commission officially launched a tender process on Thursday to build up to seven AI 'gigafactories' across the EU, aiming to mobilize approximately €30 billion ($34.4 billion) in total investment. The EU-level funding and participating member states will jointly contribute €10 billion, with bids closing on November 12 and winners announced by July 2027. This initiative represents a major government-backed effort to build domestic AI infrastructure and close the competitive gap with the United States and China in the global AI race. The scale of investment signals that the EU is treating AI computing capacity as a strategic priority critical to its economic and technological sovereignty. The tender will be conducted in two phases covering site selection and facility expansion, and winning projects must become operational within 18 months of contract signing. Each gigafactory will house supercomputers and data centers designed to support large-scale AI training and deployment workloads.

telegram · zaihuapd · Jul 30, 11:50

**Background**: The EU has been steadily building its AI infrastructure strategy, initially announcing plans for AI factories and later expanding the vision to include gigafactories with significantly larger computing capacity. These facilities are intended to provide European companies and researchers with access to cutting-edge AI computing resources, reducing dependence on foreign cloud and AI providers. The initiative also aligns with the EU's broader push to strengthen its position in the global technology competition, where the US and China have taken early leads in AI model development and deployment. The EU's regulatory approach, including the AI Act, is complemented by this industrial investment to ensure European players can compete on both governance and capability.

<details><summary>References</summary>
<ul>
<li><a href="https://www.dw.com/zh/出资100亿欧元欧盟委员会支持建七座ai超级工厂/a-78178987">出资100亿 欧 元！ 欧 盟 委员会支持建七座 AI 超 级 工 厂</a></li>
<li><a href="https://m.163.com/dy/article/JSQ4UC6905346RC6.html">【微特稿·投资与消费】 欧 盟 披露投建13家 AI 超 级 工 厂 细节_手机网易网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">欧盟政策</span> <span class="tag-badge">AI超级工厂</span> <span class="tag-badge">政府投资</span> <span class="tag-badge">科技竞争</span></p>

---