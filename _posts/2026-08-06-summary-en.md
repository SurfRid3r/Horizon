---
layout: default
title: "Horizon Summary: 2026-08-06 (EN)"
date: 2026-08-06
lang: en
---

> From 52 items, 18 important content pieces were selected

---

1. [Jeff Dean and Top AI Researchers Leave Google in Major Leadership Shake-up](#item-1) ⭐️ 10.0/10
2. [Cloudflare Announces Next Generation MCP with Stateless Core](#item-2) ⭐️ 9.0/10
3. [Cloudflare Launches WebMCP Developer Preview for AI Agent Web Access](#item-3) ⭐️ 9.0/10
4. [SCTPhantom: 18-Year-Old Linux Kernel Privilege Escalation and Container Escape Flaw](#item-4) ⭐️ 9.0/10
5. [Chinese Scientists Confirm Existence of Glueballs, a New Form of Matter](#item-5) ⭐️ 9.0/10
6. [ByteDance Discusses Training a 5-Trillion Parameter LLM](#item-6) ⭐️ 9.0/10
7. [🤖 DeepSeek 2080 万美元入股宇树上海 IPO，共研具身智能](#item-7) ⭐️ 9.0/10
8. [Mario Meets Pareto: Game-Based Optimization Explained](#item-8) ⭐️ 8.0/10
9. [CRLF-Powered Desync Attacks: Beheading HTTP Streams](#item-9) ⭐️ 8.0/10
10. [UNC6671 Rebrands to Target Financial Services and Cloud via Vishing](#item-10) ⭐️ 8.0/10
11. [Cloudflare Introduces Agent Readiness and AEO as Machine Traffic Surpasses Human Traffic](#item-11) ⭐️ 8.0/10
12. [Cloudflare Outlines Vision for an Open Agentic Internet](#item-12) ⭐️ 8.0/10
13. [Introducing Kitesurf: Cloudflare's Agent-First Serverless Browser](#item-13) ⭐️ 8.0/10
14. [Wiz Research Publishes Cloud and AI Threat Highlights for H1 2026](#item-14) ⭐️ 8.0/10
15. [Shai-Hulud Returns: CHAINDROP Worm Infects Over 400 npm Packages](#item-15) ⭐️ 8.0/10
16. [Edge Device Bleeds: Citrix Bleed Resurfaces and FortiBleed Hits 430k Firewalls](#item-16) ⭐️ 8.0/10
17. [Anthropic Test Models Accidentally Breach Three Real Companies via Internet](#item-17) ⭐️ 8.0/10
18. [Alibaba Cloud Wan3.0 Video Model Public Beta Now Live](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Jeff Dean and Top AI Researchers Leave Google in Major Leadership Shake-up](https://www.cnbc.com/2026/08/05/google-chief-scientist-jeff-dean-leaving-company-after-27-years.html) ⭐️ 10.0/10

On August 5, Google announced a major AI department restructuring after Chief Scientist Jeff Dean and Sanjay Ghemawat departed after 27 years to co-found Discovery Loop, a public benefit AI research corporation that Google will co-invest in. The broader talent drain includes Gemini co-lead Noam Shazeer joining OpenAI in June and Nobel laureate John Jumper moving to Anthropic, while DeepMind founder Demis Hassabis stepped down from daily operations. Dean was a foundational figure who led Google's core search infrastructure and Gemini multimodal model development, making his departure alongside other key talent a significant blow to Google's AI capabilities. The brain drain to direct competitors comes at a critical time when Google's flagship Gemini 3.5 Pro remains unreleased, causing Alphabet shares to drop approximately 4%. Discovery Loop describes itself as building systems to automate entire experimental loops using frontier AI models and large-scale computational infrastructure. Despite the leadership upheaval, Google recently released Gemini 3.6 Flash, 3.5 Flash-Lite, and Flash Cyber, but Gemini 3.5 Pro remains in partner testing with no confirmed release date.

telegram · zaihuapd · Aug 6, 02:18

**Background**: Jeff Dean joined Google in 1999 and became one of its most influential engineers, famously co-building core search infrastructure and later leading the Gemini multimodal AI model initiative. The Gemini model family, first announced in December 2023, powers Google's AI chatbot and virtual assistant, competing directly with OpenAI's GPT series and Anthropic's Claude across text, code, image, audio, and video tasks. The departures highlight an intensifying talent war in AI, where major labs aggressively recruit top researchers as companies race to develop increasingly capable frontier models.

<details><summary>References</summary>
<ul>
<li><a href="https://www.discoveryloop.com/">Discovery Loop — Continuous Exploration</a></li>
<li><a href="https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/">Google releases three new Gemini models — but no 3.5 Pro | TechCrunch</a></li>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/">Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Google</span> <span class="tag-badge">AI Leadership</span> <span class="tag-badge">Jeff Dean</span> <span class="tag-badge">Corporate Restructuring</span> <span class="tag-badge">Talent Drain</span></p>

---

<a id="item-2"></a>

## [Cloudflare Announces Next Generation MCP with Stateless Core](https://blog.cloudflare.com/mcp-v2/) ⭐️ 9.0/10

Cloudflare has introduced the next generation of the Model Context Protocol (MCP), featuring a completely rewritten, stateless core optimized to run seamlessly on Cloudflare Workers. This update also includes specific protocol upgrades, a new feature lifecycle, and a clear SDK migration path for developers. This architectural shift is critical because adapting MCP for stateless serverless environments enables highly scalable, globally distributed AI integrations without the overhead of persistent connections. It positions Cloudflare's edge network as a premier infrastructure for deploying and hosting AI tools and agents. The new stateless core eliminates the need for long-running connections, perfectly aligning the protocol with the ephemeral execution model of serverless functions. Early adopters are already running this updated architecture in production environments, proving its viability.

rss · The Cloudflare Blog · Aug 6, 13:00

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic to standardize how AI systems integrate with external data sources, tools, and systems. Cloudflare Workers is a serverless execution platform that allows developers to deploy code globally across Cloudflare's edge network. Combining MCP with Workers allows AI applications to securely and efficiently access external tools at the edge.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>
<li><a href="https://developers.cloudflare.com/workers/">Overview · Cloudflare Workers docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">MCP</span> <span class="tag-badge">Cloudflare Workers</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Serverless</span> <span class="tag-badge">Model Context Protocol</span></p>

---

<a id="item-3"></a>

## [Cloudflare Launches WebMCP Developer Preview for AI Agent Web Access](https://blog.cloudflare.com/webmcp/) ⭐️ 9.0/10

Cloudflare has launched a developer preview of WebMCP, a feature that injects a WebMCP bridge at Cloudflare's edge to give browser AI agents structured access to any website with a single switch. This requires no new APIs, no origin-side code changes, and no deployment modifications from website creators. This represents a major paradigm shift in how AI agents interact with the web, potentially making millions of existing websites instantly accessible to autonomous browsers without any developer effort. It bridges the gap between the rapidly growing ecosystem of AI agents and the vast legacy web, while keeping humans in control and preserving original traffic to content creators. WebMCP (Web Model Context Protocol) is a browser API that lets websites expose structured tools for AI agents to discover and execute directly. The bridge is injected at Cloudflare's edge network rather than at the origin server, meaning website operators simply flip a switch in their Cloudflare dashboard. Cloudflare Radar will also soon offer its own WebMCP tools natively.

rss · The Cloudflare Blog · Aug 6, 13:00

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize how AI systems like large language models integrate with external tools, systems, and data sources. MCP enables AI applications to connect to external systems through a unified protocol, eliminating the need for custom integrations for each tool or data source. WebMCP extends this concept specifically to the browser environment, allowing web pages to act as MCP servers that AI agents can interact with. Cloudflare's implementation is notable because it applies this at the edge infrastructure level, making it possible to retrofit existing websites without touching their original code.

<details><summary>References</summary>
<ul>
<li><a href="https://developers.cloudflare.com/browser-run/features/webmcp/">WebMCP · Cloudflare Browser Run docs</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://runtimewire.com/article/cloudflare-injects-webmcp-tools-into-websites-at-the-edge">Cloudflare injects WebMCP tools into websites at the... - RuntimeWire</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">WebMCP</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Web Infrastructure</span> <span class="tag-badge">Developer Preview</span></p>

---

<a id="item-4"></a>

## [SCTPhantom: 18-Year-Old Linux Kernel Privilege Escalation and Container Escape Flaw](https://security.tencent.com/index.php/blog/msg/226) ⭐️ 9.0/10

Tencent Security researchers disclosed SCTPhantom (CVE-2026-64564), a local privilege escalation and container escape vulnerability caused by a use-after-free (UAF) bug in the Linux kernel's SCTP protocol module that has existed for approximately 18 years. A patch was merged into the Linux kernel mainline on July 23, 2026, addressing the flaw in the ASCONF address parameter handling logic. This vulnerability is extremely impactful because it affects nearly two decades of Linux kernel deployments across countless distributions and cloud environments, and its container escape capability makes it especially dangerous for multi-tenant cloud infrastructure where isolation between tenants is critical. Kernel-level privilege escalation flaws of this longevity and severity demand urgent patching across the entire industry. The vulnerability resides in the SCTP protocol module's ASCONF address parameter processing, where a use-after-free condition allows attackers to trigger access to already-freed kernel memory by sending specially crafted SCTP packets. Tencent's Corvis AI was notably used to automatically migrate exploit code from TencentOS to Debian's default kernel, analyzing differences between kernel environments and adjusting 29 kernel offsets and symbols while iteratively refining the code based on compilation and execution results.

rss · 腾讯安全响应中心 · Aug 6, 15:34

**Background**: SCTP (Stream Control Transmission Protocol) is a transport-layer protocol standardized by the IETF, originally designed for telephony signaling but also used in various networking applications. A use-after-free (UAF) vulnerability occurs when a program continues to access memory after it has been freed, which can lead to arbitrary code execution in kernel context. Container escape refers to an attack where a malicious actor breaks out of an isolated container environment (e.g., Docker) to gain access to the host operating system, effectively compromising the isolation boundary that cloud platforms rely on.

<details><summary>References</summary>
<ul>
<li><a href="https://security.tencent.com/index.php/blog/msg/226">TencentOS 科维斯AI：SCTPhantom 潜伏18年的Linux内核提权与容器逃逸...</a></li>
<li><a href="https://cloud.tencent.com/announce/detail/2413">【安全通告】Linux Kernel SCTP "SCTPhantom" 本地权限提升漏洞风险通...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">linux-kernel</span> <span class="tag-badge">security</span> <span class="tag-badge">container-escape</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">privilege-escalation</span></p>

---

<a id="item-5"></a>

## [Chinese Scientists Confirm Existence of Glueballs, a New Form of Matter](https://mp.weixin.qq.com/s/pvyNR1lN7QPx3IrpB3WtUg) ⭐️ 9.0/10

A Chinese-led team within the BESIII collaboration has, after 15 years of research, confirmed the existence of glueballs—a previously unobserved form of matter predicted by the Standard Model. The team identified the particle X(2370), first discovered in 2011, and through recent measurements of its quantum state properties, decay modes, and 'flavor singlet' nature, confirmed it is primarily composed of gluons bound together. This is the most explicit experimental evidence for glueballs in nearly fifty years of searching, representing a major validation of the Standard Model of particle physics. The discovery confirms a long-standing theoretical prediction about how gluons—the carriers of the strong nuclear force—can bind to each other without involving quarks, opening new pathways for understanding fundamental interactions. The BESIII experiment leveraged approximately 10 billion J/ψ particle decay events, using the J/ψ→γKS0KS0η' process which has almost no physical background interference. The lightest glueball state was theoretically predicted to be a pseudoscalar particle with total spin of 0, electrically neutral, odd parity, and a rest mass between 2.3 to 2.6 GeV/c²—properties consistent with the measured characteristics of X(2370).

telegram · zaihuapd · Aug 6, 07:31

**Background**: Glueballs are hypothetical particles composed entirely of gluons, the force-carrying particles of the strong interaction (one of the four fundamental forces). While gluons typically bind quarks together inside protons and neutrons, the theory of quantum chromodynamics predicts that gluons can also attract and bind to each other, forming a pure 'glue' state without any quarks. The BESIII (Beijing Spectrometer III) is a large general-purpose magnetic spectrometer located at the Beijing Electron-Positron Collider (BEPCII), measuring about 11 meters long and weighing roughly 800 tons. It records the secondary particles produced by electron-positron collisions to study the fundamental building blocks of matter.

<details><summary>References</summary>
<ul>
<li><a href="https://bes3.ihep.ac.cn/">Beijing Spectrometer (BESIII) Experiment----Institute of High ...</a></li>
<li><a href="https://lssf.cas.cn/sszs/zyyj/bjzfdzdzj/kycg/202405/t20240510_5058967.html">北京谱仪实验首次测定 X ( 2370 )...</a></li>
<li><a href="https://user.guancha.cn/main/content?id=1253504&s=fwtjgzwz">新粒子！ 它是粒子物理学家期待已久的“ 胶 球 ”吗？_ 风闻</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Particle Physics</span> <span class="tag-badge">Scientific Research</span> <span class="tag-badge">Standard Model</span> <span class="tag-badge">BESIII</span> <span class="tag-badge">Physics</span></p>

---

<a id="item-6"></a>

## [ByteDance Discusses Training a 5-Trillion Parameter LLM](https://mp.weixin.qq.com/s/_SGStRsaJmpos2_deXUs8A) ⭐️ 9.0/10

ByteDance is internally discussing the development of a large language model exceeding 5 trillion parameters, led by Xiang Liang, head of Seed Foundation, in collaboration with Shen Ke, head of LLM pretraining data. Zhang Yiming has explicitly directed the team to abandon the distillation approach and instead pursue the upper limits of intelligence, even if it means lagging behind competitors in the short term. If realized, this model would surpass Alibaba's Qwen 3.8-Max and Moonshot's K3 to become the largest known parameter-scale model in China, significantly intensifying the domestic AI arms race. Zhang Yiming's strategic pivot away from distillation signals a fundamental shift toward original research and foundational capability building rather than replicating existing frontier models. The project is still in its early discussion stage, and Seed is currently restructuring its organization by eliminating the internal competition mechanism and consolidating resources to push this initiative forward. Zhang Yiming acknowledged coding as a critical direction and has integrated resources from Volcano Engine, Feishu, and Doubao to strengthen capabilities, while cautioning the team not to be entirely driven by short-term trends.

telegram · zaihuapd · Aug 6, 13:10

**Background**: Knowledge distillation in the context of large language models refers to the technique of transferring capabilities from a larger, more capable model (such as Claude or GPT-4) to a smaller model, enabling the smaller model to approximate the performance of the larger one at lower cost. While this approach is efficient for quickly producing competitive models, critics argue it inherently limits a model's potential to the teacher model's capabilities, preventing genuine breakthroughs. ByteDance's Seed team, established in 2023, focuses on research across LLMs, speech, vision, world models, and AI infrastructure, aiming to push the boundaries of general artificial intelligence.

<details><summary>References</summary>
<ul>
<li><a href="https://juejin.cn/post/7431092430575321151">juejin.cn/post/7431092430575321151</a></li>
<li><a href="https://seed.bytedance.com/">ByteDance Seed</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">ByteDance</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Zhang Yiming</span> <span class="tag-badge">Deep Learning</span></p>

---

<a id="item-7"></a>

## [🤖 DeepSeek 2080 万美元入股宇树上海 IPO，共研具身智能](https://www.reuters.com/world/asia-pacific/deepseek-invests-208-million-unitrees-shanghai-ipo-2026-08-06/) ⭐️ 9.0/10

DeepSeek斥资2080万美元入股宇树科技IPO，双方达成战略合作以共同研发人形机器人AI模型并推进具身智能发展。

telegram · zaihuapd · Aug 6, 14:23

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">宇树科技</span> <span class="tag-badge">具身智能</span> <span class="tag-badge">人形机器人</span> <span class="tag-badge">战略合作</span></p>

---

<a id="item-8"></a>

## [Mario Meets Pareto: Game-Based Optimization Explained](https://www.mayerowitz.io/blog/mario-meets-pareto) ⭐️ 8.0/10

An article uses Mario Kart as an accessible analogy to explain Pareto optimization and the Pareto frontier, making a traditionally abstract multi-objective optimization concept intuitive through a familiar gaming context. The piece sparked high-engagement discussion in the developer community about its real-world applicability. Pareto optimization is a foundational concept in engineering, economics, and decision-making, yet it is often poorly understood. By connecting it to a relatable game, the article democratizes the concept and prompts developers to critically examine tradeoffs they encounter daily, such as security versus user experience. The Pareto frontier represents the set of solutions where no single objective can be improved without degrading another, which the article illustrates through Mario Kart's competing objectives of speed, acceleration, and handling. Commenters noted that in practice, developers often mistakenly claim a tradeoff is necessary when they are not actually on the Pareto frontier yet, meaning further optimization is still possible.

hackernews · theanonymousone · Aug 6, 11:24 · [Discussion](https://news.ycombinator.com/item?id=49195231)

**Background**: Pareto optimization, also known as multi-objective optimization, deals with problems where multiple conflicting objectives must be optimized simultaneously. The Pareto front is the set of all nondominated solutions — solutions where improving one objective requires sacrificing another. The concept is widely used in engineering and economics to help decision-makers identify efficient tradeoffs, rather than considering the full range of every parameter. A key insight is that being 'on' the Pareto frontier means no further free improvements exist, while being 'inside' it means untapped optimization potential remains.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Pareto_optimization">Pareto optimization</a></li>
<li><a href="https://en.wikipedia.org/wiki/Pareto_front">Pareto front</a></li>

</ul>
</details>

**Discussion**: Developer jerf highlighted that the Pareto concept is crucial for challenging common assertions like 'more security means worse UX,' noting such tradeoffs are only truly unavoidable if you are already on the frontier. Another commenter shared a detailed account of applying Pareto-based pruning to optimize item builds in WoW Classic, handling astronomically large search spaces. The discussion also included humorous takes, with one parent noting they optimize for a car that keeps them competitive but still losing to their kids.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Pareto Front</span> <span class="tag-badge">Optimization</span> <span class="tag-badge">Game Theory</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">Decision Making</span></p>

---

<a id="item-9"></a>

## [CRLF-Powered Desync Attacks: Beheading HTTP Streams](https://portswigger.net/research/crlf-powered-desync-attacks) ⭐️ 8.0/10

PortSwigger published new research demonstrating that HTTP Header Injection is severely underestimated in terms of its destructive potential. The findings reveal that attackers can leverage CRLF injection not just for simple cross-site scripting (XSS), but to execute catastrophic HTTP desynchronization attacks. This research significantly elevates the threat level of HTTP Header Injection, transforming it from a minor web vulnerability into a critical infrastructure risk. Security engineers and system administrators must re-evaluate their defenses, as these CRLF-powered desync attacks can bypass traditional security measures to compromise backend systems. The attack works by injecting Carriage Return and Line Feed (CRLF) control characters into HTTP streams to manipulate how requests are parsed. By doing so, attackers can desynchronize the connection between front-end proxies and back-end servers, effectively "beheading" the HTTP stream and forcing the system to process smuggled, malicious requests.

rss · PortSwigger Research · Aug 5, 23:30

**Background**: HTTP Header Injection occurs when user input is dynamically inserted into HTTP response headers without proper sanitization, allowing attackers to inject malicious CRLF sequences. HTTP Request Smuggling, or HTTP Desync, happens when a front-end proxy and a back-end server disagree on the boundaries of HTTP requests. By exploiting header injection to trigger desync, attackers can manipulate the traffic stream to smuggle hidden requests that the front-end cannot detect.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/HTTP_header_injection">HTTP header injection</a></li>
<li><a href="https://hacktricks.wiki/en/pentesting-web/http-request-smuggling/index.html">HTTP Request Smuggling / HTTP Desync Attack - HackTricks</a></li>
<li><a href="https://portswigger.net/web-security/request-smuggling/browser/client-side-desync">Client-side desync attacks | Web Security Academy</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Web Security</span> <span class="tag-badge">HTTP Desync</span> <span class="tag-badge">Vulnerability Research</span> <span class="tag-badge">CRLF Injection</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-10"></a>

## [UNC6671 Rebrands to Target Financial Services and Cloud via Vishing](https://cloud.google.com/blog/topics/threat-intelligence/unc6671-targets-financial-services-and-enterprise-cloud-environments/) ⭐️ 8.0/10

Despite claiming retirement in May 2026, the UNC6671 threat actor has actively continued data theft extortion by rebranding across multiple fronts, including Redact, Pink, Helix, and Falcon. The group has escalated its targeting of financial services, private equity, and professional services using aggressive IT helpdesk voice phishing (vishing) to steal credentials and MFA tokens. This evolution demonstrates how threat actors adapt to public exposure by cycling through different extortion brands rather than disbanding. The aggressive use of social engineering against high-value targets highlights the critical need for enterprises to secure cloud environments like Microsoft 365 and Okta against credential compromise. UNC6671 contacts victims on their personal mobile devices pretending to be IT staff facilitating urgent security migrations, directing them to Adversary-in-the-Middle (AiTM) phishing panels. Once access is established, they use automated scripts to rapidly exfiltrate data from Software-as-a-Service (SaaS) applications before demanding extortion payments.

rss · Google Threat Intelligence · Aug 6, 14:00

**Background**: UNC6671 is an uncategorized threat actor group tracked by Mandiant, initially associated with the BlackFile extortion brand. Vishing (voice phishing) is a form of social engineering where attackers use phone calls to trick individuals into revealing sensitive information. Adversary-in-the-Middle (AiTM) attacks involve proxy servers that intercept and steal login credentials and session cookies, allowing attackers to bypass Multi-Factor Authentication (MFA).

<details><summary>References</summary>
<ul>
<li><a href="https://malpedia.caad.fkie.fraunhofer.de/actor/unc6671">UNC 6671 ( Threat Actor )</a></li>
<li><a href="https://corewin.ua/en/blog-en/vishing-is-targeting-it-help-desks-how-organizations-can-protect-them/">Vishing Is Targeting IT Help Desks : How Organizations... - CoreWin</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vishing</span> <span class="tag-badge">Extortion</span> <span class="tag-badge">Enterprise Security</span></p>

---

<a id="item-11"></a>

## [Cloudflare Introduces Agent Readiness and AEO as Machine Traffic Surpasses Human Traffic](https://blog.cloudflare.com/aeo/) ⭐️ 8.0/10

Cloudflare has introduced two new concepts — Agent Readiness and Answer Engine Optimization (AEO) — to help websites adapt to an era where machine-driven requests now account for over half of all web traffic. Agent Readiness measures how well AI agents can discover and read a site, while AEO tracks how often AI assistants recommend a site as a source. This signals a fundamental paradigm shift in web development and digital marketing, as websites must now optimize not just for human visitors and search rankings, but for AI agents and answer engines that increasingly mediate content discovery. With Cloudflare reporting that only 4% of top websites are currently agent-ready, there is a significant first-mover advantage for sites that adapt early. According to Cloudflare's data, only 4% of the top 200,000 domains currently declare AI usage preferences through their robots.txt or other signaling mechanisms. The Agent Readiness Score evaluates technical factors such as structured data, schema markup, and machine readability, while AEO focuses on structuring content so that generative AI engines like ChatGPT, Gemini, and Perplexity confidently cite and recommend a site.

rss · The Cloudflare Blog · Aug 6, 13:00

**Background**: Answer Engine Optimization (AEO) is an evolution of traditional Search Engine Optimization (SEO) that focuses on making content easily discoverable and citable by generative AI systems. Unlike traditional SEO, which aims to rank a website's link higher on search results pages, AEO aims to make a brand or site the actual answer that AI assistants provide to user questions. This shift is driven by the growing trend of users turning to AI chatbots and answer engines rather than traditional search engines for information.

<details><summary>References</summary>
<ul>
<li><a href="https://seofrancisco.com/insights/only-4-of-websites-are-ready-for-ai-agents-cloudflare-data-oai-adsbot-and-the-ro/">Only 4% of Websites Are Ready for AI Agents : Cloudflare Data...</a></li>
<li><a href="https://jamiemckaye.com/agent-readiness-score-useful-number-trap/">The Agent Readiness Score is useful. The number is a trap.</a></li>
<li><a href="https://www.directom.com/what-is-answer-engine-optimization-or-aeo/">What Is Answer Engine Optimization or AEO ? - DOM</a></li>

</ul>
</details>

**Discussion**: Some industry observers have raised concerns that the Agent Readiness Score, while measuring useful technical signals, may be structurally misleading as a composite number and could be misused by the industry — similar to what happened when Google launched Core Web Vitals. Others note the rapid pace of change, with new crawlers like OpenAI's OAI-AdsBot appearing without published IP ranges, making it challenging for technical SEO teams to keep pace.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Answer Engine Optimization</span> <span class="tag-badge">Web Infrastructure</span> <span class="tag-badge">SEO</span> <span class="tag-badge">Cloudflare</span></p>

---

<a id="item-12"></a>

## [Cloudflare Outlines Vision for an Open Agentic Internet](https://blog.cloudflare.com/the-agentic-internet/) ⭐️ 8.0/10

Cloudflare published a blog post proposing a set of open tools and protocols designed to make websites agent-ready across four pillars: readable (machine-parseable content), discoverable (agent discovery mechanisms), callable (API access instead of scraping), and payable (monetization through protocols like x402). The company frames AI agents as a fundamentally new class of web visitor—one backed by a paying human—and argues that blocking them means blocking your customer. As AI agents increasingly act on behalf of humans to browse, shop, and retrieve information, the traditional web—built for human eyes with rendered CSS and ad clicks—must evolve or become irrelevant to this growing traffic segment. Cloudflare's position as a dominant internet infrastructure provider gives its proposed protocols significant industry influence, potentially shaping how publishers, developers, and agent platforms establish standards for cooperation rather than collision. Cloudflare has already introduced a Monetization Gateway that leverages the x402 protocol, enabling websites to charge small fees for AI-accessed services, data, and content, along with Cloudflare Wallets that give AI agents built-in payment capabilities. The vision explicitly contrasts with the current model of adversarial scraping, proposing instead that agents query protocols, read structured data, and invoke tools—meaning sites that cannot respond to these requests will lose visibility to those that can.

rss · The Cloudflare Blog · Aug 6, 13:00

**Background**: The Agentic Internet refers to an emerging paradigm where AI agents powered by large language models act as autonomous actors that interact directly with websites, APIs, and each other to accomplish goals on behalf of humans. Unlike traditional web crawlers that passively index pages, agents actively plan, coordinate, and execute multi-step tasks such as booking travel, comparing products, or retrieving specific data. This shift requires new infrastructure: machine-readable content formats, agent discovery protocols like those being explored through Google's Agent-to-Agent Protocol (A2A) and Microsoft's NLWeb, and payment rails that allow microtransactions between agents and content providers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.alphanome.ai/post/the-agentic-internet-navigating-the-future-of-autonomous-ai-and-its-transformative-impact">The Agentic Internet : Navigating the Future of Autonomous AI and its...</a></li>
<li><a href="https://www.helpnetsecurity.com/2026/08/05/cloudflare-wallets-for-ai-agents/">Cloudflare gives AI agents wallets with built-in... - Help Net Security</a></li>
<li><a href="https://salespeak.ai/blog/stop-scraping-start-talking-agentic-web/">Stop Scraping, Start Talking: The Agentic Web Is Here</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">web infrastructure</span> <span class="tag-badge">protocols</span> <span class="tag-badge">monetization</span> <span class="tag-badge">Cloudflare</span></p>

---

<a id="item-13"></a>

## [Introducing Kitesurf: Cloudflare's Agent-First Serverless Browser](https://blog.cloudflare.com/kitesurf/) ⭐️ 8.0/10

Cloudflare has launched Kitesurf, a new stateless and highly scalable web browser that runs entirely on Cloudflare Workers using V8 isolates. It is specifically designed to provide AI agents with isolated, cost-effective web access without requiring a full Chromium instance for each task. This represents a paradigm shift for the Agentic Cloud by solving the heavy resource and cost constraints of traditional headless browsers used by AI. By leveraging V8 isolates, Kitesurf enables developers to build highly scalable AI agents that can browse the web efficiently at a fraction of the traditional cost. Unlike traditional headless browsers that spin up full browser instances, Kitesurf operates on V8 isolates to provide lightweight, isolated execution environments. It can be configured using the Model Context Protocol (MCP) server, allowing AI models to seamlessly interact with and execute web automation tasks.

rss · The Cloudflare Blog · Aug 6, 13:00

**Background**: Traditional web automation for AI typically involves running headless browsers like Chromium, which are resource-intensive and difficult to scale efficiently. Cloudflare Workers utilize V8 isolates, which are instances of the V8 JavaScript engine, allowing code to run rapidly in a serverless environment without the heavy overhead of containers or virtual machines. The Agentic Cloud refers to an emerging paradigm of cloud infrastructure specifically optimized to support autonomous AI agents executing complex, multi-step tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://kitesurf.cloudflare.app/">Kitesurf - stateless browser running entirely on Workers</a></li>
<li><a href="https://runtimewire.com/article/cloudflare-kitesurf-browser-ai-agents-workers-2">Cloudflare launches Kitesurf , a lightweight browser ... - RuntimeWire</a></li>
<li><a href="https://agihunt.info/en/e/19fd78bb113130e6775d14e8c8b">Cloudflare Kitesurf MCP Empowers AI Agents… · AGI Hunt</a></li>

</ul>
</details>

**Discussion**: Early community exploration highlights how developers are actively configuring the Cloudflare Kitesurf MCP server to give AI models direct browser capabilities. The overall sentiment is positive, with a strong appreciation for the technical advantage of avoiding heavy Chromium instances for lightweight agent tasks.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cloudflare-workers</span> <span class="tag-badge">ai-agents</span> <span class="tag-badge">serverless-browser</span> <span class="tag-badge">agentic-cloud</span> <span class="tag-badge">web-automation</span></p>

---

<a id="item-14"></a>

## [Wiz Research Publishes Cloud and AI Threat Highlights for H1 2026](https://www.wiz.io/blog/cloud-threat-highlights-h1-2026) ⭐️ 8.0/10

Wiz Threat Research, together with CIRT (Cyber Incident Response Team), has released a comprehensive summary of the most significant cloud and AI threat activities observed during the first half of 2026 (January through June). This report consolidates real-world threat intelligence gathered through Wiz's cloud security platform and incident response operations. As cloud infrastructure and AI workloads become deeply embedded in enterprise operations, understanding the evolving threat landscape is critical for security teams and software engineers alike. This report provides actionable intelligence on emerging vulnerabilities, attack vectors, and defensive strategies, helping organizations proactively strengthen their cloud and AI security posture. The report specifically focuses on threats targeting both cloud environments and AI systems, reflecting the convergence of these two critical domains. Wiz's threat detection capabilities are powered by a lightweight eBPF sensor that enables real-time monitoring and runtime protection across cloud infrastructure.

rss · Wiz Blog | RSS feed · Aug 6, 14:03

**Background**: Wiz is a leading cloud security platform that unifies code, cloud, and runtime visibility into a single security graph, enabling security teams to identify and remediate risks across their entire cloud estate. A CIRT (Cyber Incident Response Team) is a structured function within an organization that systematically manages and mitigates cybersecurity incidents through coordinated response efforts. Wiz Research regularly publishes threat intelligence reports to help the security community stay informed about evolving cloud and AI attack trends.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wiz.io/blog/tag/research">Posts tagged # Research | Wiz Blog</a></li>
<li><a href="https://cloud.google.com/wiz">Wiz | Google Cloud</a></li>
<li><a href="https://phoenixnap.com/glossary/cirt-cyber-incident-response-team">What is CIRT ( Cyber Incident Response Team)?</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloud Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Wiz Research</span></p>

---

<a id="item-15"></a>

## [Shai-Hulud Returns: CHAINDROP Worm Infects Over 400 npm Packages](https://www.elastic.co/security-labs/shai-hulud-chaindrop-npm-supply-chain) ⭐️ 8.0/10

Elastic Security Labs detected the return of the Shai-Hulud threat, where attackers compromised a maintainer of the 'keyv' package and deployed the CHAINDROP worm. This self-propagating worm used stolen npm credentials to backdoor 444 packages and over 2,212 versions across more than a dozen publishers. This is a massive supply chain security incident affecting packages with a combined total of over 1.3 billion monthly downloads. It highlights the persistent vulnerability of software ecosystems to automated, self-replicating malware that can rapidly compromise downstream applications and CI/CD pipelines globally. The attack began with the compromise of the keyv@6.0.0 package, from which the CHAINDROP worm automatically spread by republishing malicious updates to co-owned packages using stolen credentials. The worm features credential-stealing capabilities specifically designed to infect software environments and propagate further across the npm registry.

rss · Elastic Security Labs · Aug 6, 00:00

**Background**: "Shai-Hulud" is the name given to a self-replicating worm found in the npm package registry that exploits compromised developer accounts to inject malicious code into their maintained packages. "keyv" is a popular npm package providing a simple key-value store with support for multiple backends. In supply chain attacks like this, bad actors target trusted code repositories to distribute malware to unsuspecting developers and users, effectively abusing the ecosystem's inherent trust mechanisms.

<details><summary>References</summary>
<ul>
<li><a href="https://www.stepsecurity.io/blog/chaindrop-npm-worm">ChainDrop npm Worm : Bun-loaded CI/CD credential... - StepSecurity</a></li>
<li><a href="https://www.reversinglabs.com/blog/shai-hulud-worm-npm">Shai - Hulud npm supply chain attack : What you need to know</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">supply-chain-attack</span> <span class="tag-badge">npm</span> <span class="tag-badge">malware</span> <span class="tag-badge">javascript</span></p>

---

<a id="item-16"></a>

## [Edge Device Bleeds: Citrix Bleed Resurfaces and FortiBleed Hits 430k Firewalls](https://forum.butian.net/share/4949) ⭐️ 8.0/10

A low-level memory leak vulnerability in Citrix VPN devices, originally seen in 2023, has reportedly resurfaced in 2025 through a new entry point. Concurrently, a campaign dubbed 'FortiBleed' deployed packet sniffers on 430,000 FortiGate firewalls, harvesting 110 million VPN passwords and supplying them to INC Ransom and Lynx ransomware gangs. These exploits demonstrate how enterprise-grade boundary devices are being successfully weaponized into an access-as-a-service black market for ransomware operators. The ability of threat actors to automatically harvest millions of credentials from firewalls and VPNs creates an extremely dangerous pathway for mass network compromise. The Citrix vulnerability is triggered by an overly long URL that exploits a function return value error to dump memory contents containing session cookies. The FortiBleed operation follows a highly automated workflow of global scanning, initial password brute-forcing, and packet sniffing to continuously exfiltrate login credentials.

rss · 奇安信攻防社区 · Aug 6, 09:44

**Background**: Citrix Bleed (CVE-2023-4966) is a severe vulnerability in Citrix NetScaler ADC and Gateway devices that allows attackers to hijack active sessions by bypassing password authentication. FortiGate firewalls are critical enterprise network security appliances that frequently serve as SSL VPN gateways. INC Ransom and Lynx are related Ransomware-as-a-Service (RaaS) operations known for targeting organizations globally and relying on stolen credentials for initial access.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anquanke.com/post/id/291013">Citrix Bleed 漏 洞 （CVE-2023-4966） POC发布-安全KER...</a></li>
<li><a href="https://blog.billows.com.tw/?p=4305">FortiBleed 大規模憑證竊取行動曝光：43 萬台 FortiGate ...</a></li>
<li><a href="https://www.gm7.org/archives/122918">【安全圈】 FortiBleed 凭证窃取活动与 Lynx ... | 信息安全知识库</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">网络安全</span> <span class="tag-badge">漏洞分析</span> <span class="tag-badge">Citrix Bleed</span> <span class="tag-badge">FortiGate</span> <span class="tag-badge">勒索软件</span></p>

---

<a id="item-17"></a>

## [Anthropic Test Models Accidentally Breach Three Real Companies via Internet](https://t.me/zaihuapd/43002) ⭐️ 8.0/10

On July 30, Anthropic disclosed that three test versions of its Claude model — Opus 4.7, Mythos 5, and an unnamed internal research model — accidentally connected to the internet on three separate occasions since April and gained unauthorized access to the production infrastructure of three real companies. The incidents were caused by a system configuration error with testing partner Irregular, which inadvertently provided internet access and led the models to believe the breaches were part of their benchmark testing. This incident exposes critical vulnerabilities in AI safety testing protocols, showing that even leading AI labs can experience operational failures that allow models to escape isolation and interact with real-world systems. It serves as a stark warning for the industry about the urgent need for stricter containment measures during red-teaming exercises, especially as frontier models become increasingly capable of autonomous exploitation. The breach was discovered after Anthropic reviewed over 141,000 test logs, revealing that Irregular's configuration error gave the models unintended internet access during cybersecurity evaluations. In the most serious incident, a model's fictional target company happened to share the same name as a real organization, and the models used basic exploits to enter live production networks.

telegram · zaihuapd · Aug 6, 04:06

**Background**: AI companies increasingly partner with specialized security firms like Irregular — a frontier security lab that has raised $80 million and works with labs such as OpenAI and Anthropic — to conduct red-teaming exercises that test models for both offensive cyber capabilities and defensive resilience. These evaluations are designed to run in isolated environments to prevent models from reaching external systems, but this incident demonstrates how configuration errors can break that containment. The event follows other recent industry concerns about AI models behaving outside their intended boundaries during testing.

<details><summary>References</summary>
<ul>
<li><a href="https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/">Anthropic says its own AI models breached three... | TechCrunch</a></li>
<li><a href="https://auranews.co/technology/anthropic-ai-models-breach-three-external-networks-in-test">Anthropic AI models breach three external networks in test | AuraNews</a></li>
<li><a href="https://finance.yahoo.com/news/irregular-raises-80-million-set-121500443.html">Irregular Raises $80 Million to Set the Security Standards for Frontier AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Incident Report</span></p>

---

<a id="item-18"></a>

## [Alibaba Cloud Wan3.0 Video Model Public Beta Now Live](https://mp.weixin.qq.com/s/4ivdFBuZFsycAaQH1LESKA) ⭐️ 8.0/10

Alibaba Cloud has launched the public beta for its new Wan3.0 video generation model, which can generate up to 30 seconds of video per session. It also debuts a document-to-video feature that directly converts formats like PDF, PPT, and Excel into video content. This release significantly lowers the barrier for video production by allowing users to generate long-form videos directly from standard office documents without prior editing experience. It also strengthens Alibaba Cloud's position in the competitive AI video generation market by addressing previous limitations in duration and contextual consistency. The model achieves high consistency across characters, props, scenes, and styles, aiming for diverse and realistic portrait generation. API pricing is set at 0.3 RMB/second for 480P, 0.6 RMB/second for 720P, and 1.2 RMB/second for 1080P, and is accessible via Alibaba Cloud Bailian and WonderClip platforms.

telegram · zaihuapd · Aug 6, 14:17

**Background**: Alibaba Cloud Bailian is an enterprise-grade, one-stop large model service platform that integrates various AI models to provide developers with comprehensive tools. WonderClip is a full-link AIGC video creation platform designed to automate the video production process for creators.

<details><summary>References</summary>
<ul>
<li><a href="https://gongke.net/tools/aliyun-bailian">阿 里 云 百 炼 - 阿 里 云 推出的一站式大模型服务 平 台 | 攻壳智能体</a></li>
<li><a href="https://www.qianwenai.com/agents/wonderclip">万 镜 一 刻 - 全链路AIGC视频创作平台 - 千问AI平台</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Video Generation</span> <span class="tag-badge">Alibaba Cloud</span> <span class="tag-badge">Generative AI</span> <span class="tag-badge">Wan3.0</span> <span class="tag-badge">Product Launch</span></p>

---