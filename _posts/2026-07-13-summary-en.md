---
layout: default
title: "Horizon Summary: 2026-07-13 (EN)"
date: 2026-07-13
lang: en
---

> From 46 items, 9 important content pieces were selected

---

1. [Session Context Crosstalk Vulnerability in JDK 21 Virtual Threads](#item-1) ⭐️ 9.0/10
2. [LAPD Lets Contract with Surveillance Giant Flock Expire](#item-2) ⭐️ 8.0/10
3. [Ghostcommit Attack Hides Malicious Prompts in Images to Steal Secrets](#item-3) ⭐️ 8.0/10
4. [Microsoft Entra ID Makes Passkeys the Default Authentication Method](#item-4) ⭐️ 8.0/10
5. [Cursor Secretly Develops General AI Agent 'Sand' to Rival Claude and OpenAI](#item-5) ⭐️ 8.0/10
6. [EU Plans to Ban Social Media for Children Under 13](#item-6) ⭐️ 8.0/10
7. [White House to Rally Utilities and Data Centers on AI Power Costs](#item-7) ⭐️ 8.0/10
8. [South Korea Launches "AI for All" Project with Free Domestic Chatbot](#item-8) ⭐️ 8.0/10
9. [xAI Emergency-Disables Grok Build CLI Codebase Uploads After Privacy Backlash](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Session Context Crosstalk Vulnerability in JDK 21 Virtual Threads](https://xz.aliyun.com/news/92509) ⭐️ 9.0/10

The article reveals a hidden session privilege escalation vulnerability introduced by JDK 21's virtual threads (JEP 444), where default empty-string thread names cause concurrent virtual threads to share the same entry in isolation tables that use thread name as a key. This leads to identity crosstalk between concurrent requests in web applications relying on MDC, APM tracing, or custom multi-tenant context maps. This vulnerability has massive implications for the Java ecosystem because virtual threads are one of the most anticipated features in JDK 21, and many existing frameworks and libraries implicitly depend on thread-name-based context isolation. Applications migrating to virtual threads without auditing their context isolation mechanisms could unknowingly expose users to cross-request identity leakage and privilege escalation. The root cause is that virtual threads created without an explicit name default to an empty string (""), unlike platform threads which typically carry a unique name like 'pool-1-thread-3'. Any isolation table keyed by Thread.currentThread().getName() will collapse all unnamed virtual threads into a single shared slot, breaking assumptions that held true under the traditional thread-per-request model.

rss · 先知安全技术社区 · Jul 13, 01:51

**Background**: Virtual threads, introduced in JDK 21 via JEP 444, are lightweight user-mode threads managed by the JVM rather than the OS, designed to dramatically simplify high-throughput concurrent programming. MDC (Mapped Diagnostic Context) is a logging mechanism that stores per-thread contextual data (like user IDs or request IDs) using thread identity as an implicit key. Under the traditional thread-per-request model, each request runs on a uniquely named platform thread, making thread-name-based isolation safe; virtual threads invalidate this assumption because they can be created in massive numbers with empty default names.

<details><summary>References</summary>
<ul>
<li><a href="https://openjdk.org/jeps/444">JEP 444 : Virtual Threads</a></li>
<li><a href="https://www.baeldung.com/mdc-in-log4j-2-logback">Java Logging with Mapped Diagnostic Context ( MDC ) | Baeldung</a></li>
<li><a href="https://logback.qos.ch/manual/mdc.html">Chapter 8: Mapped Diagnostic Context</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">JDK 21</span> <span class="tag-badge">Virtual Threads</span> <span class="tag-badge">Web Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Concurrency</span></p>

---

<a id="item-2"></a>

## [LAPD Lets Contract with Surveillance Giant Flock Expire](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/) ⭐️ 8.0/10

The Los Angeles Police Department (LAPD) allowed its contract with Flock Safety, a manufacturer of automated license plate readers (ALPRs), to expire, citing serious concerns over civil liberties and privacy. While this appears to be a decisive move away from the technology, Flock retains ownership of the physical cameras and poles, meaning surveillance operations may continue independently. This represents a significant moment in the growing debate over municipal surveillance, as one of the largest police departments in the United States takes a public stand against unchecked data collection on its own terms. However, the technical and business structure of Flock's model—where the company retains hardware ownership and can sell data to any agency—exposes a critical loophole that may render such contract terminations largely symbolic. Flock Safety owns the cameras, poles, and infrastructure deployed under its contracts, meaning the equipment continues to operate and record data even after a department's contract expires. The company can then sell the collected license plate and vehicle data to other law enforcement agencies such as the California Highway Patrol (CHP), Los Angeles Sheriff's Department (LASD), FBI, or even private firms like Palantir, regardless of the contracting department's decision.

hackernews · forks · Jul 13, 15:11 · [Discussion](https://news.ycombinator.com/item?id=48893947)

**Background**: Flock Safety is a private surveillance company that sells automatic license plate readers (ALPRs) and live-view video cameras to police departments, homeowners associations (HOAs), schools, and businesses. ALPR technology uses cameras mounted on poles or patrol cars to automatically capture and read vehicle license plates, creating detailed databases of vehicle movements over time. These systems have raised significant civil liberties concerns because they enable systematic tracking of citizens' locations without warrants, individualized suspicion, or meaningful oversight.

<details><summary>References</summary>
<ul>
<li><a href="https://research.contrary.com/company/flock-safety">Report: Flock Safety Business Breakdown & Founding Story</a></li>
<li><a href="https://sls.eff.org/technologies/automated-license-plate-readers-alprs">Automated License Plate Readers</a></li>
<li><a href="https://newrepublic.com/article/202565/flock-safety-police-surveillance-dystopia">The Tech Company Bringing Surveillance ... | The New Republic</a></li>

</ul>
</details>

**Discussion**: Commenters expressed deep skepticism that the LAPD's contract expiration would meaningfully curb surveillance, noting that Flock's ownership of hardware allows continuous data harvesting that can be sold to other agencies. Several users called for legislation making it illegal for the government to purchase data or intelligence it could not legally collect itself. Others debated the practical utility of such surveillance in high-crime areas, with one commenter sharing a firsthand account of Flock cameras helping solve a series of neighborhood robberies.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Surveillance</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Civil Liberties</span> <span class="tag-badge">Law Enforcement</span> <span class="tag-badge">Data Brokerage</span></p>

---

<a id="item-3"></a>

## [Ghostcommit Attack Hides Malicious Prompts in Images to Steal Secrets](https://mp.weixin.qq.com/s?__biz=MzkyMTI0NjA3OA==&mid=2247495300&idx=1&sn=a495dbb43bc4e710231bd9e6bc2e2b21) ⭐️ 8.0/10

Researchers from the University of Missouri-Kansas City have disclosed the Ghostcommit attack, a novel technique that hides prompt injection instructions within PNG images. This method covertly tricks AI coding agents into leaking sensitive `.env` files during code reviews. This attack exposes severe vulnerabilities in modern AI-assisted development workflows, where agents blindly trust embedded instructions. It highlights a dangerous new supply chain attack vector that could lead to the widespread compromise of API keys and database credentials. The attack works by submitting a pull request containing a harmless-looking image alongside a configuration file that instructs the AI agent to trust the image's contents. Because the malicious payload is an image rather than text, it easily bypasses traditional AI code reviewers and text-based security filters.

rss · M01NTeam · Jul 13, 10:00

**Background**: Prompt injection is a cybersecurity exploit where attackers craft inputs that override a large language model's intended instructions, causing it to perform unintended actions. In software development, `.env` files are plain-text configuration files used to store sensitive environment variables like API keys and database passwords. AI coding agents are increasingly integrated into development pipelines to automate tasks like reviewing pull requests, making them a prime target for such supply chain attacks.

<details><summary>References</summary>
<ul>
<li><a href="https://www.malwarebytes.com/blog/ai/2026/07/ghostcommit-attack-hides-malicious-ai-instructions-in-images">Ghostcommit attack hides malicious AI instructions in... | Malwarebytes</a></li>
<li><a href="https://cybersecuritynews.com/ghostcommit-attack-hides-prompts/">New Ghostcommit Attack Hides Malicious Prompts in Images to...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI安全</span> <span class="tag-badge">提示注入</span> <span class="tag-badge">数据窃取</span> <span class="tag-badge">漏洞分析</span> <span class="tag-badge">Ghostcommit</span></p>

---

<a id="item-4"></a>

## [Microsoft Entra ID Makes Passkeys the Default Authentication Method](https://www.microsoft.com/en-us/security/blog/2026/07/13/microsoft-entra-id-security-updates-passkeys-are-the-default-authentication-method-in-entra-id/) ⭐️ 8.0/10

Microsoft is officially making passkeys the default authentication experience for Microsoft Entra ID. Additionally, the company announced a new operational model for SMS and voice authentication to further secure the platform. As Entra ID is a foundational identity service for millions of enterprise users, making passkeys the default significantly accelerates the industry's transition to phishing-resistant, passwordless authentication. This update prompts organizations to modernize their security protocols, reducing their reliance on easily compromised passwords. Passkeys use public-key cryptography (via the WebAuthn standard) alongside device biometrics or PINs to securely authenticate users without transmitting sensitive shared credentials. IT administrators will need to prepare their infrastructure for this transition, particularly regarding the newly updated SMS and voice authentication frameworks.

rss · Microsoft Security · Jul 13, 17:00

**Background**: Microsoft Entra ID, formerly known as Azure Active Directory, is a widely used cloud-based identity and access management service for Microsoft 365, Azure, and third-party applications. Passkeys represent a modern, passwordless authentication standard that relies on cryptographic keys stored securely on a user's device. This approach eliminates the need to send passwords over networks, making it highly effective against phishing campaigns and credential theft.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Microsoft_Entra_ID">Microsoft Entra ID</a></li>
<li><a href="https://en.wikipedia.org/wiki/Passkey_(authentication)">Passkey (authentication)</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Authentication</span> <span class="tag-badge">Passkeys</span> <span class="tag-badge">Entra ID</span> <span class="tag-badge">Microsoft</span></p>

---

<a id="item-5"></a>

## [Cursor Secretly Develops General AI Agent 'Sand' to Rival Claude and OpenAI](https://www.theinformation.com/articles/cursor-developing-ai-agent-compete-claude-cowork) ⭐️ 8.0/10

Cursor is secretly developing a general-purpose AI agent codenamed "Sand" capable of handling multi-step tasks like replying to emails, organizing spreadsheets, and performing engineering duties. The unreleased product aims to directly compete with Anthropic's Claude Cowork and OpenAI's ChatGPT Work. This marks a strategic expansion for Cursor from building a popular AI code editor into the broader enterprise AI assistant market. By targeting a user base beyond just software developers, Cursor positions itself as a direct competitor against major industry players like OpenAI and Anthropic. The "Sand" agent reportedly extends Cursor's natural language processing capabilities from codebase operations to general enterprise tasks by automating multi-step workflows. The product is currently unreleased, with specific details regarding its technical architecture or integration capabilities remaining under wraps.

telegram · zaihuapd · Jul 13, 01:34

**Background**: Cursor is a popular AI-assisted integrated development environment (IDE) forked from Visual Studio Code that allows users to execute programming tasks using natural language instructions. Meanwhile, competitors like Anthropic's Claude Cowork and OpenAI's ChatGPT Work are general enterprise AI agents designed to bridge scattered team notes into finished deliverables, automating work across various applications like presentations, documents, and spreadsheets.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>
<li><a href="https://claude.com/product/cowork">Claude Cowork | Claude by Anthropic</a></li>
<li><a href="https://openai.com/chatgpt-work/">ChatGPT Work with GPT-5.6 | OpenAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cursor</span> <span class="tag-badge">AI Agent</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Enterprise Software</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-6"></a>

## [EU Plans to Ban Social Media for Children Under 13](https://www.nytimes.com/2026/07/13/technology/europe-teen-social-media.html) ⭐️ 8.0/10

The European Union is preparing to introduce legislation in September that would ban children under 13 from using social media without parental or teacher supervision. The expert report also recommends a complete screen ban for toddlers under three and restricts teenagers aged 13 to 18 to platforms with built-in safety features. If passed, this legislation will establish the world's largest digital age restriction, significantly impacting a demographic that makes up roughly 18% of the EU's population. It will force social media platforms to overhaul their age verification and minor safety systems, setting a powerful regulatory precedent for other global markets. The proposed framework outlines a tiered approach to digital access based on age groups, placing strict requirements on platforms to verify users and ensure compliant safety environments. This will pose significant technical and privacy challenges, as platforms must accurately verify ages without violating existing data protection laws like the GDPR.

telegram · zaihuapd · Jul 13, 10:20

**Background**: Governments worldwide are increasingly concerned about the negative impacts of social media on youth mental health and development. Countries like Australia, Denmark, and France have already implemented or are considering similar age-based digital restrictions. The EU has a history of pioneering tech regulation, previously introducing strict data privacy rules through the GDPR and online safety standards via the Digital Services Act (DSA).

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Tech Policy</span> <span class="tag-badge">Social Media</span> <span class="tag-badge">EU Regulation</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Child Safety</span></p>

---

<a id="item-7"></a>

## [White House to Rally Utilities and Data Centers on AI Power Costs](https://www.reuters.com/legal/litigation/white-house-rally-utilities-data-centers-over-ai-power-costs-2026-07-13/) ⭐️ 8.0/10

The White House plans to convene utility companies, data center developers, and governors in the coming weeks to expand a voluntary initiative ensuring that surging AI electricity demand does not raise residential and business power bills. This builds on earlier commitments signed by Google, Meta, and OpenAI, which agreed to self-fund power generation and grid upgrades rather than passing costs to existing ratepayers. The collision between AI infrastructure scaling and physical power grid limits has become a critical macro-level challenge, with AI data centers already straining regional grid capacity and causing residential electricity bills to spike in areas like Lake Tahoe, Nevada. While the initiative signals federal awareness of this tension, the commitments remain non-binding and voluntary, leaving open questions about enforcement. U.S. industrial electricity benefits from high volume and voltage, achieving economies of scale that keep prices significantly below residential rates; however, AI data centers are consuming disproportionate shares of regional grid resources. The voluntary commitments lack binding enforcement mechanisms, meaning compliance depends entirely on corporate goodwill.

telegram · zaihuapd · Jul 13, 11:17

**Background**: AI training and inference require massive computational power, driving unprecedented demand for electricity from data centers. Major tech companies like Google, Meta, and OpenAI are rapidly expanding their data center footprints, which puts pressure on local power grids that were not designed for such concentrated loads. In the U.S., electricity markets are regulated, and infrastructure costs can be distributed across all ratepayers — meaning that when utilities build new capacity to serve data centers, residential consumers may end up footing part of the bill through higher rates.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Energy Policy</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">AI Economics</span> <span class="tag-badge">Power Grid</span></p>

---

<a id="item-8"></a>

## [South Korea Launches "AI for All" Project with Free Domestic Chatbot](https://www.yna.co.kr/view/AKR20260713108901017) ⭐️ 8.0/10

The South Korean government announced the "AI for All" project, planning to launch a free, unlimited domestic AI chatbot and public AI agents by the end of the year. The initiative will be led by 2 to 3 private companies utilizing government-provided NVIDIA B200 GPUs and domestic foundational models like Kakao's Kanana. This represents a major government-level strategic initiative to provide all citizens with free access to domestically developed AI technologies. It strengthens South Korea's technological sovereignty and boosts local tech giants like Kakao and Naver in the competitive global AI landscape. The project mandates that at least 50% of the foundational models used must be independently developed in South Korea, initially supported by 512 NVIDIA B200 GPUs owned by the government. Service providers will be selected in mid-August, with a Beta test targeted for September, while Kakao has already confirmed its participation using its proprietary "Kanana" model.

telegram · zaihuapd · Jul 13, 15:10

**Background**: South Korea has been actively investing in AI infrastructure to maintain its technological edge and reduce reliance on foreign AI models. NVIDIA's B200, based on the Blackwell architecture, is a high-performance GPU designed to handle demanding enterprise AI workloads, including training and inference. Kakao's "Kanana" is a bilingual large language model family optimized for Korean and English, capable of powering various personal and lifestyle AI services.

<details><summary>References</summary>
<ul>
<li><a href="https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet">NVIDIA DGX B200 Datasheet</a></li>
<li><a href="https://www.kakaocorp.com/page/detail/11333">Introducing Kakao ’s AI model , Kanana Model Family | Kakao | 카카오</a></li>
<li><a href="https://github.com/kakao/kanana">kakao / kanana : Kanana : Compute-efficient Bilingual Language Models ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Policy</span> <span class="tag-badge">South Korea</span> <span class="tag-badge">Public AI</span> <span class="tag-badge">Chatbot</span> <span class="tag-badge">National Strategy</span></p>

---

<a id="item-9"></a>

## [xAI Emergency-Disables Grok Build CLI Codebase Uploads After Privacy Backlash](https://t.me/zaihuapd/42539) ⭐️ 8.0/10

In the early hours of July 13, xAI deployed a server-side update adding a `disable_codebase_upload` field that returns `true`, effectively shutting off the automatic upload functionality. This emergency patch came shortly after a security researcher disclosed that the Grok Build CLI was silently uploading users' entire codebases and secret key files by default. This incident represents a serious privacy and security breach for a developer tool that handles inherently sensitive material like source code and API keys. It undermines developer trust in AI-powered coding assistants and highlights the need for transparent data handling practices in an increasingly competitive AI tooling market. The fix was applied server-side, meaning users did not need to update their local CLI installations; the `disable_codebase_upload` field is returned by xAI's servers to enforce the new behavior globally. The original upload behavior was enabled by default, raising concerns about how long the silent uploads had been occurring and whether uploaded data had already been processed or stored.

telegram · zaihuapd · Jul 13, 16:39

**Background**: Grok Build is xAI's terminal-native AI coding agent and command-line interface (CLI) with an interactive terminal UI, launched in beta in May 2026. It is powered by Grok 4.5 and is available to SuperGrok and X Premium Plus subscribers. Like other AI coding tools, it integrates deeply into a developer's local environment, which makes the automatic upload of codebases and secrets particularly dangerous.

<details><summary>References</summary>
<ul>
<li><a href="https://x.ai/news/grok-build-cli">Introducing Grok Build | SpaceXAI</a></li>
<li><a href="https://www.verdent.ai/guides/grok-build-install">Grok Build Install Guide: CLI , Windows, and Setup - Verdent Guides</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Grok</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Developer Tools</span></p>

---