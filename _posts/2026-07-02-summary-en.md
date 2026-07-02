---
layout: default
title: "Horizon Summary: 2026-07-02 (EN)"
date: 2026-07-02
lang: en
---

> From 73 items, 11 important content pieces were selected

---

1. [Podman v6.0.0 Released with Major Networking Improvements](#item-1) ⭐️ 9.0/10
2. [Cloudflare to Block Mixed-Use AI Crawlers by Default, Calls Out Google](#item-2) ⭐️ 9.0/10
3. [Erin Catto releases Box3D, a new open-source 3D physics engine](#item-3) ⭐️ 9.0/10
4. [Linux 6.9 Regression Breaks LUKS Key Wiping on Suspend](#item-4) ⭐️ 8.0/10
5. [F-Droid Condemns Google's Android Developer Verification as Ecosystem Lockdown](#item-5) ⭐️ 8.0/10
6. [Post-Mythos Era: Seven Trends in Automated Vulnerability Discovery](#item-6) ⭐️ 8.0/10
7. [Inside Elastic InfoSec's Agentic SOC: Alert Triage from 30 Minutes to Under 3](#item-7) ⭐️ 8.0/10
8. [Watchtowr Labs Analyzes Adobe ColdFusion Security Bulletin APSB26-68 CVE Bonanza](#item-8) ⭐️ 8.0/10
9. [Meta Plans to Sell Excess AI Compute, Eyeing Cloud Market Entry](#item-9) ⭐️ 8.0/10
10. [OpenAI Proposes 5% US Government Stake in Major AI Firms](#item-10) ⭐️ 8.0/10
11. [Citi Bans GPT-5.5 as Major Corporations Restrict Employee AI Use Over Soaring Costs](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Podman v6.0.0 Released with Major Networking Improvements](https://blog.podman.io/2026/07/introducing-podman-v6-0-0/) ⭐️ 9.0/10

Podman v6.0.0 has been officially released, bringing significant enhancements to its networking capabilities. This major version update further solidifies its position as a powerful, rootless alternative to Docker. This release is significant because networking has historically been a pain point for rootless container engines, and these improvements enhance usability for complex deployments. It strengthens Podman's appeal to DevOps professionals and homelab enthusiasts looking for a more secure, daemonless alternative to Docker. Podman is a daemonless container engine that offers a compatible alternative to Docker's API. Users transitioning to this new version should note that features like Quadlets and rootless containers make systemd integration and secure management much easier, though ecosystem tooling compatibility may vary.

hackernews · soheilpro · Jul 2, 14:23 · [Discussion](https://news.ycombinator.com/item?id=48762098)

**Background**: Podman is an open-source container management tool developed by Red Hat that handles containers, images, and pods without requiring a central daemon. Unlike traditional Docker, Podman emphasizes 'rootless' containers, which run without root privileges to provide an isolated and more secure execution environment. While Podman is largely compatible with Docker commands, differences in networking and ecosystem tooling often create migration hurdles.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Podman">Podman</a></li>
<li><a href="https://podman.io/">Podman</a></li>
<li><a href="https://medium.com/@ByteWaveNetwork/rootless-containers-whats-that-f4752158a923">Rootless Containers , what’s that? | by ByteWaveNetwork | Medium</a></li>

</ul>
</details>

**Discussion**: The community is highly enthusiastic about the networking improvements, with several users highlighting Quadlets and rootless support as primary motivations for switching from Docker. Some users express feeling locked into the Docker ecosystem due to dependencies on management platforms like Coolify, while others seek advice on migrating existing Docker Compose setups or praise UI readability enhancements.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">podman</span> <span class="tag-badge">containers</span> <span class="tag-badge">docker</span> <span class="tag-badge">devops</span> <span class="tag-badge">release</span></p>

---

<a id="item-2"></a>

## [Cloudflare to Block Mixed-Use AI Crawlers by Default, Calls Out Google](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/) ⭐️ 9.0/10

Cloudflare announced that starting September 15, it will by default block "mixed-use" crawlers that simultaneously serve search indexing, AI Q&A, and AI training on ad-supported pages. The company specifically called out Google for exploiting a loophole where websites allow search indexing but have their content repurposed for AI training without consent. As one of the world's largest CDN and web infrastructure providers, Cloudflare's default-blocking policy could fundamentally reshape how AI companies acquire training data and force them to negotiate paid content licensing deals with publishers. This move escalates the ongoing copyright battle between content creators and AI companies, potentially setting a new industry standard for how web content is accessed for AI purposes. Cloudflare's policy specifically targets crawlers that cannot be clearly separated by websites into search-indexing versus AI-training use cases, making it nearly impossible for publishers to allow one while blocking the other. The new framework suggests a future where AI companies may need to pay not just for the right to crawl, but also based on actual usage of scraped content.

telegram · zaihuapd · Jul 2, 05:37

**Background**: Websites typically use robots.txt files to control which crawlers can access their content, but this protocol relies on voluntary compliance and many AI crawlers either ignore it or exploit ambiguous rules. "Mixed-use" crawlers like Google's combine traditional search indexing with AI training data collection, creating a dilemma for publishers who want search visibility but not unauthorized AI training. Cloudflare, serving as a reverse proxy and WAF for a significant portion of the internet, has the technical capability to enforce crawler policies at the infrastructure level, making its default stance far more impactful than individual site-level robots.txt configurations.

<details><summary>References</summary>
<ul>
<li><a href="https://cnabke.com/blogs/robots-txt-audit-ai-crawlers-geo.html">robots . txt 检查与 AI 爬 虫 放行（GPTBot/ClaudeBot/Google-Extended</a></li>
<li><a href="https://www.codeqihan.com/post/ai.robots.txt/">ai . robots . txt 阻止 AI 爬 虫 - codeqihan的博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">AI Crawlers</span> <span class="tag-badge">Web Scraping</span> <span class="tag-badge">Copyright</span> <span class="tag-badge">Google</span></p>

---

<a id="item-3"></a>

## [Erin Catto releases Box3D, a new open-source 3D physics engine](https://github.com/erincatto/box3d) ⭐️ 9.0/10

Erin Catto, the original creator of the widely used Box2D physics engine, has released Box3D — a new open-source 3D physics engine for games written entirely in C. The project is forked from the Box2D codebase, exposing a C API with a nearly identical architecture to its 2D predecessor. Box2D is the de facto industry-standard 2D physics engine used in countless games, and a 3D successor from the same author carries enormous credibility. The open-source 3D physics engine space is notably sparse, so Box3D has the potential to become a foundational tool for game developers, graphics programmers, and real-time simulation communities. The core library has no dependencies beyond the C runtime (and libm on Unix), making it highly portable and easy to integrate. Erin Catto personally takes responsibility for every line of code in both Box2D and Box3D, ensuring a high standard of quality and consistency across the codebase.

ossinsight · erincatto · Jul 2, 20:00

**Background**: Box2D was originally introduced as "Box2D Lite" by Erin Catto at GDC 2006 as a demonstration engine accompanying a physics presentation. It was released as open source on SourceForge in September 2007 and has since become the most widely adopted 2D physics engine in game development. The open-source 3D physics engine landscape is sparse, with few mature, well-maintained options available to developers. Box3D aims to fill this gap by leveraging the proven architecture and design philosophy of Box2D in a 3D context.

<details><summary>References</summary>
<ul>
<li><a href="https://www.phoronix.com/news/Box3D-Open-Source-3D-Physics">Box 3 D Debuts As New Open-Source 3 D Physics Engine - Phoronix</a></li>
<li><a href="https://github.com/erincatto/box3d">GitHub - erincatto/ box 3 d : Box 3 D is a 3 D physics engine for games</a></li>
<li><a href="https://en.wikipedia.org/wiki/Box2D">Box2D - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---

<a id="item-4"></a>

## [Linux 6.9 Regression Breaks LUKS Key Wiping on Suspend](https://mathstodon.xyz/@iblech/116769502749142438) ⭐️ 8.0/10

A regression introduced in Linux kernel 6.9 causes `cryptsetup luksSuspend` to fail at wiping disk-encryption master keys from kernel memory when suspending an encrypted volume. The system continues to function normally, making the security regression difficult to detect without explicit testing. This regression silently disables a critical security feature that protects against physical attacks aimed at extracting encryption keys from RAM, such as cold boot attacks. It highlights the difficulty of maintaining security-critical functionality across kernel updates and raises questions about regression testing for security features that fail silently rather than visibly. The regression specifically affects the `luksSuspend` operation, which is designed to evict the master key from kernel memory and block all I/O to the device until `luksResume` is called with the correct passphrase. Community members noted that `luksSuspend` may be a Debian-specific extension rather than an officially supported upstream feature, which complicates assigning responsibility and determining which distributions are affected.

hackernews · IngoBlechschmid · Jul 2, 15:25 · [Discussion](https://news.ycombinator.com/item?id=48763035)

**Background**: LUKS (Linux Unified Key Setup) is the standard for Linux full disk encryption, managed by the `cryptsetup` utility. When a LUKS-encrypted volume is active, the master decryption key resides in kernel memory so the system can transparently read and write encrypted data. The `luksSuspend` command was designed to remove this key from memory—useful when leaving a machine unattended—so that an attacker with physical access cannot extract the key via techniques like cold boot attacks or DMA attacks. This is distinct from hibernation (suspend to disk), where RAM contents including the master key are written to encrypted swap and RAM is powered off, requiring a passphrase to resume.

<details><summary>References</summary>
<ul>
<li><a href="https://man7.org/linux/man-pages/man8/cryptsetup.8.html">cryptsetup (8) - Linux manual page</a></li>
<li><a href="https://git.hubp.de/mahdi-n0rouzi/luks-cheatsheet">GitHub - mahdi-n0rouzi/ luks -cheatsheet: Complete LUKS Cheat Sheet...</a></li>

</ul>
</details>

**Discussion**: Community members expressed a range of views: some questioned the severity, noting that `luksSuspend` may be a Debian-specific extension rather than an officially supported feature. A few commenters raised suspicions about the regression being a potential 'bugdoor,' while others felt the risk was acceptable for their personal threat models. Multiple users highlighted that security regressions are particularly dangerous because everything appears to work normally, and praised NixOS's automated testing infrastructure for catching the issue.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Linux</span> <span class="tag-badge">Security</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Kernel</span> <span class="tag-badge">Bug</span></p>

---

<a id="item-5"></a>

## [F-Droid Condemns Google's Android Developer Verification as Ecosystem Lockdown](https://f-droid.org/2026/07/01/adv-malware.html) ⭐️ 8.0/10

F-Droid published a sharply critical blog post on July 1, 2026, condemning Google's upcoming Android Developer Verification policy, which starting September 2026 will require all developers distributing apps via any method outside Google Play to undergo verification. F-Droid frames this mandatory requirement not as genuine security, but as an ecosystem lockdown that threatens alternative app stores and user freedom. This policy fundamentally alters Android's traditionally open distribution model, potentially crippling third-party app stores like F-Droid and making APK sideloading impractical for many developers. It impacts every user who values the freedom to install software of their choice on devices they own, and sets a precedent for further platform enclosure by Google. The verification requirement applies to all app distribution methods outside Google Play, including third-party stores and direct APK installation, effectively extending Play Store's gatekeeping to the entire Android platform. F-Droid's article uses confrontational language, calling Google a 'malware vendor' and comparing the policy to a trojan horse, which some community members worry could undermine the message's credibility.

hackernews · drewfax · Jul 2, 03:00 · [Discussion](https://news.ycombinator.com/item?id=48755965)

**Background**: F-Droid is a free and open-source app repository for Android that serves as an alternative to Google Play Store, hosting only FOSS (free and open source software) applications. Android has historically distinguished itself from iOS by allowing users to install apps from any source via APK sideloading or third-party stores, making it the preferred platform for developers and power users who value openness. Google's new verification policy represents a significant departure from this open distribution heritage, moving Android closer to a controlled ecosystem model reminiscent of Apple's walled garden approach.

<details><summary>References</summary>
<ul>
<li><a href="https://fatbobman.medium.com/from-open-platform-to-controlled-ecosystem-google-announces-android-developer-verification-policy-6a726b2f52bc">From Open Platform to Controlled Ecosystem: Google ... | Medium</a></li>
<li><a href="https://dev.to/dev-arafat-alim/android-is-losing-its-freedom-googles-2026-developer-verification-explained-2b5p">Android Is Losing Its Freedom: Google 's 2026 Developer ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/F-Droid">F - Droid - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The discussion reflects strong opposition to Google's policy, with commenters emphasizing device ownership ('the phone is either mine or it is not') and suggesting alternatives like GrapheneOS and Linux-based mobile OSes such as SailfishOS and Ubuntu Touch. One commenter criticizes F-Droid's article tone as 'childish' and counterproductive, arguing it gives Google ammunition to dismiss legitimate concerns, and points to keepandroidopen.org as a more professionally presented effort. Another commenter takes an extreme stance, characterizing virtually every Google product as spyware designed for data harvesting.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Android</span> <span class="tag-badge">F-Droid</span> <span class="tag-badge">Mobile OS</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">App Distribution</span></p>

---

<a id="item-6"></a>

## [Post-Mythos Era: Seven Trends in Automated Vulnerability Discovery](https://a7um.github.io/cn/blog/post-mythos-avd-trends/) ⭐️ 8.0/10

The article outlines seven emerging trends in AI-driven automated vulnerability discovery following the breakthrough of Anthropic's Mythos model, marking a strategic shift from simply finding cheap bugs to tackling complex challenges across the full vulnerability lifecycle. It argues that vulnerability discovery will become commoditized, while the truly scarce capabilities will shift toward repository-level coverage, low-noise verification, remediation, disclosure, and supply chain governance. This analysis is significant because it captures a pivotal inflection point where the security industry must evolve beyond bug-finding to address the downstream bottlenecks of triage, remediation, and supply chain security at scale. As Mythos-class tools demonstrate the ability to discover hundreds of vulnerabilities automatically, organizations and open-source maintainers face unprecedented pressure to build governance frameworks capable of absorbing this volume of findings. The article emphasizes that low-hanging fruit will be rapidly exhausted by AI-driven discovery, forcing the field to confront harder problems such as repository-level code coverage and reducing false-positive noise during verification. It also highlights emerging threat vectors including supply chain poisoning and change-entry-point attacks as critical governance challenges that automated vulnerability tools must eventually address.

rss · atum-Blog · Jul 2, 00:00

**Background**: Mythos is an AI model developed by Anthropic specifically for automated security vulnerability discovery, positioned as a powerful tool for autonomous security research. Mozilla notably leveraged Claude Mythos to fix 271 security vulnerabilities in Firefox, demonstrating the model's practical large-scale impact. Anthropic has restricted access to Mythos due to safety concerns, igniting industry-wide debate about the implications of AI-driven mass vulnerability discovery and prompting companies like 360 Group to develop their own competing vulnerability discovery agents.

<details><summary>References</summary>
<ul>
<li><a href="https://net.zhiding.cn/network_security_zone/2026/0423/3184861.shtml">Anthropic"超危险" 漏 洞 猎手模型 Mythos ...</a></li>
<li><a href="https://www.tahou.com/article/204172245447980037">挖 漏 洞 何必 Mythos ，国产智能体早跑通了-塔猴速递-塔猴</a></li>
<li><a href="https://news.qq.com/rain/a/20260528A080O900">海外媒体聚焦360 漏 洞 挖 掘 智能体： AI 安全不只有 Mythos ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Vulnerability Management</span> <span class="tag-badge">Automated Vulnerability Detection</span> <span class="tag-badge">Software Supply Chain</span> <span class="tag-badge">Cybersecurity Trends</span></p>

---

<a id="item-7"></a>

## [Inside Elastic InfoSec's Agentic SOC: Alert Triage from 30 Minutes to Under 3](https://www.elastic.co/security-labs/alert-triage-agentic-soc-elastic-workflows) ⭐️ 8.0/10

Elastic's InfoSec team has deployed AI agents built on Elastic Workflows to automatically investigate security alerts and assemble case context before an analyst opens them. This approach has reduced the average alert triage time from 30 minutes to under 3 minutes per alert. This real-world deployment demonstrates how agentic AI can dramatically improve Security Operations Center (SOC) efficiency, addressing critical industry challenges such as alert fatigue and analyst shortages. It provides a concrete, replicable model for other organizations seeking to automate their security operations. The AI agents investigate every alert and assemble the case context automatically, meaning analysts receive fully enriched cases rather than raw alerts. Elastic Workflows, the native automation engine within the Elasticsearch Platform, enables both scripted and AI-driven automation directly where the data resides.

rss · Elastic Security Labs · Jul 2, 00:00

**Background**: An Agentic SOC (Security Operations Center) integrates autonomous AI agents to perform tasks such as alert triage, investigation, context enrichment, reasoning, and response actions. This model represents a significant evolution from traditional SOCs, where human analysts must manually handle each alert, often leading to bottlenecks and alert fatigue. Elastic Workflows provides the automation infrastructure within the Elasticsearch Platform to support this agentic approach.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Agentic_SOC">Agentic SOC</a></li>
<li><a href="https://www.elastic.co/elasticsearch/workflows">Native workflow automation where your data lives | Elastic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">agentic-ai</span> <span class="tag-badge">soc-automation</span> <span class="tag-badge">elastic-security</span> <span class="tag-badge">ai-workflows</span></p>

---

<a id="item-8"></a>

## [Watchtowr Labs Analyzes Adobe ColdFusion Security Bulletin APSB26-68 CVE Bonanza](https://labs.watchtowr.com/its-37oc-and-all-we-can-think-about-is-coldfusion-adobe-coldfusion-security-bulletin-apsb26-68-cve-bonanza/) ⭐️ 8.0/10

Watchtowr Labs has published a technical analysis of Adobe ColdFusion security bulletin APSB26-68, which addresses a large number of vulnerabilities (CVEs) in the ColdFusion platform. The researchers note that the sheer volume of fixed vulnerabilities—and some that appear to go unmentioned—made it challenging to assess the full scope of the patch with confidence. Adobe ColdFusion is widely deployed in enterprise environments, and a large batch of CVE fixes suggests a significant attack surface that threat actors could exploit on unpatched systems. This analysis is critical for system administrators and security professionals who need to understand the real-world risk and prioritize patching efforts. The Watchtowr Labs analysis focuses on the technical details of the vulnerabilities addressed in bulletin APSB26-68, highlighting both the volume of CVEs and the researchers' concern about potential gaps in what was disclosed. The write-up is aimed at a technically-minded audience and provides insight into the exploitability and impact of the patched issues.

rss · watchTowr Labs - Blog · Jul 2, 16:38

**Background**: Adobe ColdFusion is a commercial rapid web-application development platform originally created in 1995, designed to make it easier to connect HTML pages to databases and now including a full scripting language (CFML) and IDE. Watchtowr Labs is a security research team specializing in offensive security and preemptive exposure management, regularly publishing technical analyses of critical vulnerabilities. Security bulletins like APSB26-68 are Adobe's formal advisories that enumerate CVEs affecting their products and provide guidance on patches.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Adobe_ColdFusion">Adobe ColdFusion</a></li>
<li><a href="https://labs.watchtowr.com/">watchTowr Labs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Adobe ColdFusion</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Security Research</span></p>

---

<a id="item-9"></a>

## [Meta Plans to Sell Excess AI Compute, Eyeing Cloud Market Entry](https://www.bloomberg.com/news/articles/2026-07-02/south-korean-stocks-tumble-6-as-ai-jitters-hurt-chipmakers) ⭐️ 8.0/10

Meta is reportedly planning to sell surplus AI computing power and model services to external customers, signaling a potential entry into the cloud computing market. Simultaneously, Apple is in talks to purchase memory chips from two Chinese manufacturers for China-market devices, raising concerns about Samsung and SK Hynix's competitive positioning. Meta's potential move into cloud computing could disrupt the existing cloud provider landscape dominated by Amazon, Microsoft, and Google, while also signaling that hyperscalers may have over-invested in AI infrastructure. Combined with Apple's potential shift to Chinese memory suppliers, these developments triggered a massive sell-off in Korean tech stocks, with the Kospi index plunging up to 7% and Samsung and SK Hynix each dropping at least 8%. The sell-off was severe enough that the Korea Exchange temporarily halted programmatic selling of Kospi futures. The market concerns are twofold: fears of AI overcapacity as major tech firms' spending may slow, and worries about shifting supply chains as Apple diversifies its memory chip sourcing away from traditional Korean suppliers.

telegram · zaihuapd · Jul 2, 02:29

**Background**: Major technology companies like Meta have invested billions in AI infrastructure, including massive GPU clusters for training large language models. Cloud computing is currently dominated by AWS, Microsoft Azure, and Google Cloud, which lease computing resources to enterprise customers. The AI chip supply chain is heavily dependent on memory chips from Samsung and SK Hynix, particularly high-bandwidth memory (HBM) used in AI accelerators, making any shift in procurement patterns highly impactful on the semiconductor industry.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Cloud Computing</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Market Analysis</span></p>

---

<a id="item-10"></a>

## [OpenAI Proposes 5% US Government Stake in Major AI Firms](https://www.bloomberg.com/news/articles/2026-07-02/openai-proposes-giving-the-us-government-a-5-stake-ft-says) ⭐️ 8.0/10

OpenAI, led by CEO Sam Altman and other executives, has proposed that a government vehicle hold a unified 5% equity stake in each of the major US AI companies, including OpenAI, Anthropic, Google, and Meta. The proposal aims to let the public directly benefit from the profits generated by the AI boom. This proposal introduces an unprecedented framework for government equity in the AI industry, potentially reshaping how AI governance, public profit-sharing, and regulatory oversight interact. If adopted, it could fundamentally alter the relationship between the US government and private tech giants, while also raising serious questions about regulatory capture and antitrust concerns. The proposal envisions a single government entity holding equity across multiple competing AI firms simultaneously, which is a novel structural approach. It remains unclear whether other companies such as Google, Meta, and Anthropic would accept such an arrangement, and significant legal and regulatory hurdles around antitrust law and corporate governance would need to be addressed.

telegram · zaihuapd · Jul 2, 06:02

**Background**: OpenAI's corporate structure has already undergone significant changes, including its transition from a purely non-profit model to a hybrid structure with a capped-profit arm. The broader context includes growing calls in the US for AI regulation, public interest in ensuring that AI benefits are widely shared, and increased scrutiny of Big Tech's market power. Similar concepts of public equity stakes in strategic industries have been discussed in policy circles as a way to align corporate incentives with public welfare.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI Governance</span> <span class="tag-badge">Tech Policy</span> <span class="tag-badge">Government Regulation</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-11"></a>

## [Citi Bans GPT-5.5 as Major Corporations Restrict Employee AI Use Over Soaring Costs](https://www.404media.co/companies-are-throttling-employees-ai-use-because-its-too-expensive/) ⭐️ 8.0/10

According to leaked internal documents obtained by 404 Media, major corporations including Citi, Atlassian, Adobe, and Amazon are restricting or fully disabling employee access to advanced AI models due to explosive cost increases under pay-per-use pricing. Citi completely disabled Claude Opus 4.6, 4.7, and GPT-5.5 on June 24, while Atlassian's monthly AI spending surged from $5 million in August 2025 to over $15 million by May 2026. This development exposes the growing tension between enterprise AI enthusiasm and economic reality, revealing that pay-per-use pricing for advanced models creates unsustainable cost structures at organizational scale. It signals a broader industry inflection point where companies must rigorously evaluate AI ROI before deployment, potentially slowing adoption curves and pressuring AI providers to redesign enterprise pricing models. Atlassian has terminated unlimited AI usage and introduced a cost-tracking dashboard, while Adobe announced it will not renew its unlimited Claude contract expiring June 30. Amazon quietly shut down its internal AI usage leaderboard, and employees subsequently discovered previously undisclosed token usage caps. Notably, Accenture is simultaneously pitching rapid AI adoption to clients while packaging AI cost management as a new consulting service line.

telegram · zaihuapd · Jul 2, 13:59

**Background**: Large language models such as GPT and Claude charge based on token consumption, where tokens represent chunks of text processed by the model. This pay-per-use model can generate unpredictable and rapidly scaling costs when deployed across thousands of employees, particularly with premium-tier models like Claude Opus that command significantly higher per-token rates. The enterprise AI market expanded rapidly as companies raced to integrate AI capabilities, but the unit economics become increasingly strained at scale when employees use these tools for routine tasks without cost visibility.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.hankmo.com/token-deep-dev-deepseek/">Token 是什么： 大 模 型 计 费 和上下文管理的底层逻辑 | 极客老墨</a></li>
<li><a href="https://www.datalearner.com/ai-models/pretrained-models/Claude3-Opus">Claude 3- Opus ：评测、参数与 模 型 卡 | DataLearnerAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">企业AI</span> <span class="tag-badge">AI成本</span> <span class="tag-badge">行业动态</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">IT支出</span></p>

---