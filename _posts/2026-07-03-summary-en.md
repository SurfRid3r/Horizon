---
layout: default
title: "Horizon Summary: 2026-07-03 (EN)"
date: 2026-07-03
lang: en
---

> From 62 items, 14 important content pieces were selected

---

1. [Automated Reverse Engineering of Encrypted CAPTCHA in 3 Hours via Claude Code](#item-1) ⭐️ 9.0/10
2. [Anthropic Accuses Alibaba of Massive Distillation Attack on Claude](#item-2) ⭐️ 9.0/10
3. [Huawei Launches Atlas 350 Accelerator with Ascend 950PR, 2.87x NVIDIA H20](#item-3) ⭐️ 9.0/10
4. [ProseMirror Creator Launches Wordgard, a New Browser-Based Rich Text Editor](#item-4) ⭐️ 8.0/10
5. [WebKit Introduces Safari MCP Server for AI-Driven Browser Automation](#item-5) ⭐️ 8.0/10
6. [crustc: The Entire Rust Compiler Translated to C](#item-6) ⭐️ 8.0/10
7. [Unit 42 Pioneers WebAuthn Support in Browser-Based RDP Client](#item-7) ⭐️ 8.0/10
8. [Armored Likho APT Deploys AI-Generated Loaders and BusySnake Stealer](#item-8) ⭐️ 8.0/10
9. [Google's Gemini Omni Flash Tops Video Arena Leaderboard](#item-9) ⭐️ 8.0/10
10. [OPPO Unifies OnePlus and Realme Systems Globally Under ColorOS](#item-10) ⭐️ 8.0/10
11. [NASA Launches Private LINK Spacecraft to Rescue Swift Telescope](#item-11) ⭐️ 8.0/10
12. [Tencent's Atuin AI Surpasses Anthropic's Mythos in CyberGym Benchmark](#item-12) ⭐️ 8.0/10
13. [Blackstone Withdraws Funding, Threatening World's Largest Data Center Project](#item-13) ⭐️ 8.0/10
14. [Erin Catto Releases Box3D: A New 3D Physics Engine in C](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Automated Reverse Engineering of Encrypted CAPTCHA in 3 Hours via Claude Code](https://xz.aliyun.com/news/92420) ⭐️ 9.0/10

The author used a single prompt in Claude Code to autonomously execute a multi-stage penetration test on a target website. Over three hours, the AI successfully reverse-engineered the ECDH key exchange, reconstructed AES-GCM encryption, cracked the NCC image recognition algorithm, and developed a complete API bypass script for batch account registration. This demonstrates a paradigm shift where AI acts as an autonomous cybersecurity agent capable of handling complex, multi-step reverse engineering tasks without continuous human intervention. It highlights the transformative impact of AI-driven penetration testing, significantly lowering the barrier to executing advanced attacks and exposing sensitive vulnerabilities at scale. The autonomous process specifically targeted and cracked cryptographic implementations including ECDH for key exchange and AES-GCM for data encryption, alongside the NCC image recognition algorithm used for CAPTCHAs. The entire operation was executed as an automated loop, resulting in a functional exploit script that bypassed traditional web security measures entirely via API requests.

rss · 先知安全技术社区 · Jul 3, 03:41

**Background**: ECDH (Elliptic Curve Diffie-Hellman) is a key agreement protocol that allows two parties to establish a shared secret over an insecure channel, widely used in modern secure communications. AES-GCM (Advanced Encryption Standard - Galois/Counter Mode) is an authenticated encryption algorithm designed to provide both data confidentiality and integrity. In this context, Claude Code acted as an automated agent, iterating through information gathering, code analysis, and exploit development to compromise these cryptographic mechanisms.

<details><summary>References</summary>
<ul>
<li><a href="https://www.webkt.com/article/8610">深入浅出 ECDH 密钥交换：原理、实现与 Python、C++ 代码示例 - WEBKT</a></li>
<li><a href="https://blog.csdn.net/openHiTLS/article/details/151231316">一文读懂 Ecdh：从 "密钥交换难题" 到 源码实践落地-csdn博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Reverse Engineering</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Automation</span></p>

---

<a id="item-2"></a>

## [Anthropic Accuses Alibaba of Massive Distillation Attack on Claude](https://t.me/zaihuapd/42327) ⭐️ 9.0/10

Anthropic has sent a letter to the U.S. Senate Banking Committee accusing Alibaba of using approximately 25,000 fraudulent accounts to conduct over 28.8 million interactions with Claude to extract its AI capabilities. Anthropic claims this is the largest known distillation attack against the company, occurring between April 22 and June 5, 2026. This escalation brings corporate AI disputes into the realm of international politics by directly involving U.S. lawmakers. It highlights the growing intellectual property risks and geopolitical tensions surrounding proprietary model training in the fiercely competitive global AI landscape. The implicated parties include Alibaba and its AI lab, Qwen, who allegedly used automated fraudulent accounts to systematically query Claude's outputs. This process, known as model extraction or distillation, allows a weaker model to replicate the performance of a stronger proprietary model without authorization.

telegram · zaihuapd · Jul 3, 06:21

**Background**: In the AI industry, "distillation" or model extraction involves training a smaller model on the outputs of a larger, more capable model to replicate its abilities, a technique theoretically pioneered by Geoffrey Hinton. While widely used as a standard training optimization method, it becomes highly controversial when used to clone proprietary models without permission. Industry observers note that model distillation is a common practice globally, with previous accusations by Anthropic against other Chinese AI firms sparking debates over the ethical boundaries of this technology.

<details><summary>References</summary>
<ul>
<li><a href="https://m.21jingji.com/article/20260626/herald/4191618349373fe9453230e50e2cacf6.html">美国AI巨头，再次炒作中国大模型“蒸馏”话题 - 21财经</a></li>
<li><a href="https://www.ofweek.com/ai/2026-02/ART-201700-8420-30681798.html">“蒸馏”博弈：深度学习这个领域，大概永远不会有绝对的清白者 - OFweek 人工智能网</a></li>
<li><a href="https://www.ctfiot.com/299416.html">【科普】关于模型提取攻击（蒸馏攻击） | CTF导航</a></li>

</ul>
</details>

**Discussion**: Public sentiment regarding these accusations is mixed, with many industry insiders pointing out that model distillation is a widespread practice even among U.S. tech companies. Commentators frequently argue that there is a lack of clear boundaries and "absolute innocence" in the AI community, which dilutes the moral high ground of Anthropic's aggressive intellectual property claims.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">阿里巴巴</span> <span class="tag-badge">知识产权</span> <span class="tag-badge">蒸馏攻击</span></p>

---

<a id="item-3"></a>

## [Huawei Launches Atlas 350 Accelerator with Ascend 950PR, 2.87x NVIDIA H20](https://t.me/zaihuapd/42329) ⭐️ 9.0/10

At the Huawei China Partner Conference 2026, Huawei officially launched the Atlas 350 AI accelerator card powered by the all-new Ascend 950PR processor. The card delivers 2.87x the single-card computing power of NVIDIA's H20 and is the first domestic accelerator in China to support FP4 low-precision inference, featuring 112GB of HBM memory. This release represents a major competitive challenge to NVIDIA's dominance in the AI accelerator market, particularly in China where export restrictions have limited access to high-end GPUs. The combination of FP4 support, large HBM capacity, and the ability to load 70B parameter models on a single card could significantly reshape the domestic AI infrastructure landscape and reduce reliance on foreign chipmakers. The Atlas 350 achieves substantial improvements over its predecessor in vector computing power, interconnect bandwidth, and self-developed HBM technology. It supports loading 70B parameter models on a single card, which significantly reduces both inference latency and investment costs, and FP4/FP8 mixed precision has been shown to dramatically lower hardware requirements for running ultra-large MoE models.

telegram · zaihuapd · Jul 3, 08:35

**Background**: FP4 (4-bit floating point) is a low-precision numerical format that reduces memory usage and computational cost during AI inference while maintaining acceptable model accuracy, making it increasingly important for efficient large model deployment. NVIDIA's H20 is a China-specific GPU offering designed to comply with US export control restrictions on advanced semiconductors. Huawei's Ascend series has emerged as China's most prominent domestic AI chip lineup, and the Atlas product line encompasses Huawei's AI computing hardware solutions targeting both training and inference workloads.

<details><summary>References</summary>
<ul>
<li><a href="https://core.dpangzi.com/article/read/69beb2cc452176f8ed934563.html">华 为 Atlas 350 加 速 卡 上市，搭载全新昇腾 950PR 处理器 - 叫我阿胖</a></li>
<li><a href="https://money.udn.com/money/story/5603/9395364">華為 Atlas 350 加 速 卡 亮相：單 卡 算力超H20... | 經濟日報</a></li>
<li><a href="https://www.aimodeling.com/news/98312e5c-0687-41f5-a5b3-596a45563e67">DeepSeek V4训练内幕：Muon优化器与 FP 4 混合 精 度 重塑大模型效率</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">华为</span> <span class="tag-badge">昇腾950PR</span> <span class="tag-badge">AI加速卡</span> <span class="tag-badge">英伟达竞争</span> <span class="tag-badge">国产芯片</span></p>

---

<a id="item-4"></a>

## [ProseMirror Creator Launches Wordgard, a New Browser-Based Rich Text Editor](https://wordgard.net/) ⭐️ 8.0/10

Marijn Haverbeke, the creator of ProseMirror, has released Wordgard, a new open-source JavaScript rich text editor framework with a different architecture from ProseMirror. It provides tools for building semantic content editors where developers precisely control what kinds of content are supported. ProseMirror is a foundational library used by countless projects including Tiptap, GitLab, and the New York Times, so a new editor from the same creator signals a potential shift in the rich-text editing ecosystem. Teams that have outgrown basic text boxes and need strict control over document structure now have a new architectural option, though migration from ProseMirror-based solutions remains unclear. Wordgard is not a free-form HTML editor but enforces a precise content model where you control exactly what content types are supported. There is no upgrade path from ProseMirror—while many concepts are shared, switching requires significant rewriting, and some concepts diverge meaningfully.

hackernews · indy · Jul 3, 08:50 · [Discussion](https://news.ycombinator.com/item?id=48772573)

**Background**: ProseMirror is a widely-used toolkit for building rich text editors in the browser that treats documents as structured trees rather than flat strings, avoiding the pitfalls of the browser's contentEditable attribute. Its author, Marijn Haverbeke, also created CodeMirror (used by Obsidian) and is one of the most influential figures in web-based text editing. Many modern editor frameworks like Tiptap are built on top of ProseMirror, making any new project from its creator noteworthy for the entire ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://wordgard.net/">Wordgard</a></li>
<li><a href="https://news.lavx.hu/article/wordgard-brings-structured-editing-to-javascript-apps">Wordgard brings structured editing to JavaScript apps | LavX News</a></li>

</ul>
</details>

**Discussion**: Community members praised the project's art direction and visual design as notably tasteful, while developers who had built similar systems found the architecture deeply validating. A key concern raised was the lack of a clear migration path from ProseMirror, with users noting that switching would require substantial work, and some wondered about implications for frameworks like Tiptap. One user reported a bug on iOS where text disappeared during keyboard corrections.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">rich-text-editor</span> <span class="tag-badge">prosemirror</span> <span class="tag-badge">web-development</span> <span class="tag-badge">content-editing</span> <span class="tag-badge">javascript</span></p>

---

<a id="item-5"></a>

## [WebKit Introduces Safari MCP Server for AI-Driven Browser Automation](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/) ⭐️ 8.0/10

WebKit has officially announced a new Safari MCP server that enables AI agents to directly interact with the Safari browser for web development, testing, and personalized automation tasks. This release brings Model Context Protocol support to Apple's browser ecosystem, allowing AI-powered tools to inspect pages, execute commands, and perform browser operations programmatically. This is significant because it allows AI agents to operate within a browser where users are already authenticated, making automation handoffs between humans and agents far more seamless than working with isolated browser instances. It also expands cross-browser testing capabilities for developers, adding Safari to the growing list of browsers with MCP support alongside Chrome and Firefox. The Safari MCP server joins existing browser MCP solutions like Chrome DevTools MCP and Firefox DevTools MCP, and coexists with Apple's pre-existing safaridriver tool that implements the W3C WebDriver standard. Community members note that while the MCP approach offers richer AI integration, some alternatives like Playwright-CLI may still offer faster performance for certain automation workflows.

hackernews · coloneltcb · Jul 3, 01:37 · [Discussion](https://news.ycombinator.com/item?id=48769639)

**Background**: The Model Context Protocol (MCP) is an emerging standard that enables AI models and agents to interact with external tools and services in a structured way, allowing them to perform real-world actions beyond text generation. Browser automation has traditionally relied on technologies like the W3C WebDriver standard (used by tools such as safaridriver) or frameworks like Playwright and Puppeteer, which control browsers programmatically for testing and scraping. MCP servers represent a newer approach that is specifically designed for AI agent integration, making it easier for large language models to understand and manipulate browser state as part of their reasoning and task execution loops.

**Discussion**: Community sentiment is broadly positive, with users particularly excited about the ability to run automations in their primary authenticated browser session rather than a separate instance. Several commenters compared the Safari MCP server to existing alternatives, noting that Chrome DevTools MCP and Firefox DevTools MCP have been available, while others suggested that Playwright-CLI may be faster for pure automation workflows. One user also pointed out that Apple's safaridriver has supported W3C WebDriver automation for years, raising questions about what additional value the MCP approach brings beyond tighter AI integration.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">MCP</span> <span class="tag-badge">Safari</span> <span class="tag-badge">Web Development</span> <span class="tag-badge">Browser Automation</span> <span class="tag-badge">AI Agents</span></p>

---

<a id="item-6"></a>

## [crustc: The Entire Rust Compiler Translated to C](https://github.com/FractalFir/crustc) ⭐️ 8.0/10

After three years of effort, a developer has translated the entirety of the Rust compiler (rustc) into C, creating a project called crustc. This represents the 14th known attempt at compiling Rust to C and aims to support old or obscure hardware that lacks LLVM or GCC backend support. This project addresses the long-standing bootstrapping problem in Rust, where building the compiler from source requires an existing Rust compiler. By providing a C translation, crustc could enable Rust to reach platforms that are currently unsupported, significantly expanding the language's accessibility and solving a known trust issue in the compilation toolchain. The developer notes that transpiling to C and letting GCC handle optimization is practically more feasible than targeting LLVM IR directly. The project could also be used for Diverse Double-Compiling (DDC) to verify the integrity of the official rustc binary by comparing bit-for-bit outputs.

hackernews · Philpax · Jul 2, 22:57 · [Discussion](https://news.ycombinator.com/item?id=48768464)

**Background**: Compiler bootstrapping is the technique of producing a self-compiling compiler, where the compiler is written in the language it compiles. Rust's compiler, rustc, is self-hosting and written in Rust, meaning each new version is built using the previous stable release. This creates a chicken-or-egg problem: to build rustc from source, you need a working Rust compiler, which creates dependency and trust concerns for projects requiring reproducible builds or targeting niche platforms without LLVM or GCC support.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Compiler_bootstrapping">Compiler bootstrapping</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rust_compiler">Rust compiler</a></li>

</ul>
</details>

**Discussion**: The community praises the project as an impressive piece of original work rather than an LLM-generated demo. Commenters highlight its potential for verifying compiler integrity through Diverse Double-Compiling and discuss the relative merits of transpiling to C versus LLVM IR. One user also notes that LLVM's previously abandoned C backend may now be available again, which could be relevant.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Rust</span> <span class="tag-badge">Compilers</span> <span class="tag-badge">C</span> <span class="tag-badge">Bootstrapping</span> <span class="tag-badge">Systems Programming</span></p>

---

<a id="item-7"></a>

## [Unit 42 Pioneers WebAuthn Support in Browser-Based RDP Client](https://unit42.paloaltonetworks.com/webauthn-added-to-browser-based-rdp/) ⭐️ 8.0/10

Palo Alto Networks' Unit 42 has detailed the reverse-engineering process behind building the first non-Windows, browser-based RDP client to support WebAuthn passwordless authentication redirection. This breakthrough enables users to authenticate to remote Windows desktop sessions using passkeys or security keys directly through a web browser. This achievement closes a significant gap in remote access security, as browser-based RDP clients previously lacked support for modern passwordless authentication, forcing reliance on weaker credential methods. It demonstrates that complex Windows-specific authentication redirection protocols can be successfully replicated in cross-platform environments, opening doors for more secure remote access solutions across diverse operating systems. The implementation required reverse-engineering Microsoft's proprietary RDP protocol to understand how WebAuthn authentication requests are redirected from the remote server back to the client. The technical challenge involved correctly replicating the redirect channel so that authenticator responses are securely transmitted back to the server during the RDP session.

rss · Unit 42 · Jul 2, 22:00

**Background**: RDP (Remote Desktop Protocol) is Microsoft's proprietary protocol for remote desktop access, widely used in enterprise environments. WebAuthn is a web authentication standard that enables passwordless login using public-key cryptography, typically backed by hardware authenticators like security keys or platform authenticators like Windows Hello. In RDP contexts, authentication redirection means that when a remote server needs to verify a user's identity, it redirects the authentication request back to the client machine where the user can interact with their local authenticator. Previously, this WebAuthn redirect capability was exclusive to native Windows RDP clients.

<details><summary>References</summary>
<ul>
<li><a href="https://www.reddit.com/r/sysadmin/comments/1m6aoh6/access_rdp_with_a_browser/">Access RDP with a browser : r/sysadmin - Reddit</a></li>
<li><a href="https://tsplus.me/html5-remote-desktop/">HTML5 Remote Desktop - Browser-Based RDP Access Guide</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">WebAuthn</span> <span class="tag-badge">RDP</span> <span class="tag-badge">Reverse Engineering</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Authentication</span></p>

---

<a id="item-8"></a>

## [Armored Likho APT Deploys AI-Generated Loaders and BusySnake Stealer](https://securelist.com/tr/armored-likho-apt-with-busysnake-stealer/120292/) ⭐️ 8.0/10

Kaspersky has uncovered an active Advanced Persistent Threat (APT) campaign dubbed Armored Likho, which employs spear-phishing emails, AI-generated loaders, and a novel Python-based data-stealing tool called BusySnake Stealer. The campaign has been actively targeting organizations located in Russia, Kazakhstan, and Brazil. The integration of AI-generated loaders in this campaign highlights a worrying trend of threat actors leveraging artificial intelligence to streamline malware development and deployment. This evolution lowers the barrier to entry for sophisticated attacks, forcing the cybersecurity industry to adapt its defensive strategies against increasingly automated and adaptable threats. The BusySnake Stealer is a newly identified malware payload written in Python, designed specifically to exfiltrate sensitive data from compromised systems. Attackers initiate the intrusion through targeted spear-phishing, utilizing AI-assisted loaders to deliver the payload stealthily.

rss · Kaspersky  - Information about Viruses， Hackers and Spam · Jul 3, 10:00

**Background**: An Advanced Persistent Threat (APT) refers to a prolonged and targeted cyberattack in which an intruder establishes an undetected presence in a network to steal sensitive data over time. Spear-phishing is a targeted attempt to steal sensitive information or install malware through deceptive emails tailored to specific individuals or organizations. A 'loader' in cybersecurity is a type of malware that acts as an initial payload, typically used to establish a foothold on a compromised system and download additional malicious software.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">APT</span> <span class="tag-badge">malware-analysis</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">python</span></p>

---

<a id="item-9"></a>

## [Google's Gemini Omni Flash Tops Video Arena Leaderboard](https://x.com/Designarena/status/2072759122366509130) ⭐️ 8.0/10

Google DeepMind's public beta video generation model, Gemini Omni Flash, has claimed first place on the Video Arena leaderboard with a score of 1404, surpassing ByteDance's Seedance 2.0 Mini by 101 points. This marks a significant competitive shift in AI video generation, demonstrating Google's rapid advancement in multimodal capabilities and reclaiming the top position previously held by ByteDance's Seedance series. It signals intensifying competition among major tech players in the generative video space. Video Arena rankings are generated through blind user voting, serving as a crowdsourced evaluation benchmark. Google's video model ranking improved by 7 positions compared to the Veo series era, indicating a substantial leap in perceived quality.

telegram · zaihuapd · Jul 3, 05:51

**Background**: Video Arena is a leaderboard platform where AI video generation models are ranked based on blind user voting, similar in concept to LMSYS's Chatbot Arena for language models. ByteDance's Seedance series, particularly Seedance 2.0 Mini, had been dominating the top of the leaderboard with a score of 1303. Google's Veo models were the company's earlier generation of video generation tools that have now been surpassed by the Gemini Omni Flash model.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">Video Generation</span> <span class="tag-badge">Gemini</span> <span class="tag-badge">Leaderboard</span> <span class="tag-badge">AI Models</span></p>

---

<a id="item-10"></a>

## [OPPO Unifies OnePlus and Realme Systems Globally Under ColorOS](https://www.donews.com/news/detail/8/6620374.html) ⭐️ 8.0/10

In July 2026, OPPO announced a comprehensive integration of its smartphone operating systems, officially discontinuing the development of OnePlus's OxygenOS and Realme UI. Moving forward, all new smartphones from these brands globally will be unified under the ColorOS system to optimize research and development resources. This significant strategic shift directly impacts millions of users across OPPO, OnePlus, and Realme devices, fundamentally altering the Android ecosystem landscape for these major brands. It signals a massive consolidation of resources aimed at strengthening brand synergy and streamlining global market strategies. The integration focuses on core markets like China and India, with OnePlus narrowing its focus to these regions and merging its after-sales services into the OPPO network. Realme is scaling back its operations in China to concentrate entirely on overseas markets, having already migrated its service accounts to OPPO's system on July 1st and shut down its mall in April.

telegram · zaihuapd · Jul 3, 10:45

**Background**: ColorOS is a custom user interface developed by OPPO based on the Android Open Source Project (AOSP). Historically, OnePlus used OxygenOS for its global market and HydrogenOS for China, while Realme launched its own Realme UI in 2020 after initially using ColorOS. This consolidation ends years of distinct software identities, bringing all three brands under a single, unified software ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ColorOS">ColorOS</a></li>
<li><a href="https://en.wikipedia.org/wiki/OxygenOS">OxygenOS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Realme_UI">Realme UI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OPPO</span> <span class="tag-badge">OnePlus</span> <span class="tag-badge">ColorOS</span> <span class="tag-badge">智能手机</span> <span class="tag-badge">行业整合</span></p>

---

<a id="item-11"></a>

## [NASA Launches Private LINK Spacecraft to Rescue Swift Telescope](https://apnews.com/article/swift-nasa-satellite-rescue-katalyst-a7ddd740ca099587c58865f583c7245a) ⭐️ 8.0/10

On July 3, NASA launched the privately built LINK spacecraft to rendezvous with the 20-year-old Neil Gehrels Swift Observatory, grab it with a robotic arm, and re-boost it approximately 240 km to a safer orbit. This marks the first time a commercial vehicle will attempt to capture and service a U.S. government satellite. This mission represents a major milestone in commercial in-orbit servicing, demonstrating that private spacecraft can extend the operational life of aging government satellites. Success would open a new paradigm for satellite life extension, reduce space debris, and validate the commercial servicing market for future government and private space assets. Increased solar activity has expanded Earth's upper atmosphere, increasing drag on Swift and causing its orbit to decay rapidly; without intervention, Swift could burn up in the atmosphere as early as October. LINK will use a robotic arm to physically grapple the telescope and fire its thrusters to slowly raise the orbit, with Swift potentially resuming observations by September if the mission succeeds.

telegram · zaihuapd · Jul 3, 15:43

**Background**: The Neil Gehrels Swift Observatory, launched on November 20, 2004, is a NASA medium-class Explorer mission designed primarily to study gamma-ray bursts (GRBs) across X-ray, UV/visible, and gamma-ray wavelengths. Originally planned for a two-year mission, Swift has far exceeded its design lifetime and has become a general-purpose multi-wavelength observatory, observing approximately 70 targets per day. The mission is operated by Pennsylvania State University in collaboration with NASA's Goddard Space Flight Center and international partners from the UK and Italy.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Swift_space_telescope">Swift space telescope</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">NASA</span> <span class="tag-badge">Space Exploration</span> <span class="tag-badge">In-Orbit Servicing</span> <span class="tag-badge">Satellite Technology</span> <span class="tag-badge">Commercial Space</span></p>

---

<a id="item-12"></a>

## [Tencent's Atuin AI Surpasses Anthropic's Mythos in CyberGym Benchmark](https://mp.weixin.qq.com/s/BzU7g-2iG7d6h4ViwMhxyg) ⭐️ 8.0/10

Tencent Xuanwu Lab's Atuin AI scored 84.0% on UC Berkeley's CyberGym cybersecurity benchmark, surpassing Anthropic's Claude Mythos Preview while using less than 0.1% of the budget of Mythos's Project Glasswing initiative. Atuin also identified multiple high-severity logic vulnerabilities in critical projects including curl, gnark, OpenSSL, Python cryptography, and Java bc-java that Mythos had failed to detect. This result demonstrates that a locally-deployable AI security tool built on an open-source model can compete with—and in key areas outperform—well-funded commercial systems from frontier AI labs. It signals a potential democratization of advanced vulnerability discovery capabilities, where resource-efficient approaches can challenge established industry leaders on critical infrastructure protection. Atuin AI is built on the open-source GLM-5.1 model and is designed for local deployment, making it accessible without reliance on cloud-based commercial APIs. In the Berkeley BVI real-world vulnerability rankings, Atuin ranked first by vulnerability severity (CVSS scores up to 9.3) and fifth by total number of vulnerabilities discovered.

telegram · zaihuapd · Jul 3, 16:12

**Background**: CyberGym is a cybersecurity benchmark developed at UC Berkeley to evaluate how effectively AI systems can discover real-world software vulnerabilities. Anthropic's Project Glasswing is a collaborative security initiative that has expanded to approximately 200 organizations across 15-plus countries, with partners collectively using the Claude Mythos model to surface more than 10,000 high- and critical-severity flaws in under two months. Tencent Xuanwu Lab is a prominent cybersecurity research team known for discovering zero-day vulnerabilities in widely used software products.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing : Securing critical software for the AI era \ Anthropic</a></li>
<li><a href="https://www.digitalapplied.com/blog/anthropic-project-glasswing-mythos-security-expansion-2026">Anthropic Expands Glasswing : Frontier AI as Cyber Defense</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI</span> <span class="tag-badge">Vulnerability Detection</span> <span class="tag-badge">Tencent</span> <span class="tag-badge">Benchmark</span></p>

---

<a id="item-13"></a>

## [Blackstone Withdraws Funding, Threatening World's Largest Data Center Project](https://www.zerohedge.com/technology/worlds-largest-data-center-campus-verge-collapse-after-blackstone-unexpectedly-pulls-out) ⭐️ 8.0/10

Blackstone has unexpectedly withdrawn its financial backing, putting the development of the planned world's largest data center campus at imminent risk of collapse. The collapse of this mega-project could significantly constrain the future availability of data center capacity, creating potential bottlenecks for the rapidly expanding cloud computing and AI infrastructure sectors. It also highlights the growing financial volatility and investment risks associated with large-scale tech infrastructure initiatives. The sudden withdrawal of capital by a major private equity firm underscores the high-stakes nature of funding massive infrastructure projects, where billions of dollars are typically required upfront. This event may delay or permanently halt the construction timeline of the campus.

telegram · Marcoview666 · Jul 3, 06:18

**Background**: Data centers are the physical backbone of the internet, housing the critical servers and networking equipment required to run cloud services, digital applications, and AI workloads. As global demand for computing power skyrockets, particularly driven by artificial intelligence, tech companies and investors have been racing to build massive new facilities to handle the unprecedented scale of data processing. However, these hyperscale projects are incredibly capital-intensive, making them highly sensitive to changes in macroeconomic conditions and the strategic shifts of major institutional investors.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Data Center</span> <span class="tag-badge">Infrastructure</span> <span class="tag-badge">Private Equity</span> <span class="tag-badge">Cloud Computing</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-14"></a>

## [Erin Catto Releases Box3D: A New 3D Physics Engine in C](https://github.com/erincatto/box3d) ⭐️ 8.0/10

Erin Catto, the creator of the widely-used Box2D physics engine, has published a new GitHub repository called Box3D, a 3D physics engine for games written in C. The repository was recently trending with 16 new stars gained in the past 24 hours, indicating growing community interest. Erin Catto is the author of Box2D, which has become the de facto industry-standard 2D physics engine used in countless games and simulation software worldwide. A 3D physics engine from the same author carries enormous potential to reshape the landscape of real-time 3D physics simulation in game development and beyond. The Box3D project is currently in its early stages with minimal engagement metrics (16 stars, 1 fork). It is written in C, consistent with Catto's approach with Box2D, which prioritizes portability, performance, and ease of integration into various game engines and platforms.

ossinsight · erincatto · Jul 3, 20:00

**Background**: Erin Catto is a renowned computational physicist and software engineer best known for creating Box2D, an open-source 2D rigid body physics engine that powers many popular games like Angry Birds. Box2D is celebrated for its solver stability, performance, and clean C++ codebase, and has been ported to numerous languages and platforms. A physics engine handles critical simulation tasks including collision detection, rigid body dynamics, and constraint solving, serving as a foundational component in game engines. The transition from 2D to 3D physics introduces significantly greater mathematical and computational complexity.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---