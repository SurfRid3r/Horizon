---
layout: default
title: "Horizon Summary: 2026-07-08 (EN)"
date: 2026-07-08
lang: en
---

> From 54 items, 16 important content pieces were selected

---

1. [OpenAI Announces GPT-Live: Continuous Voice Mode with Background Delegation to GPT-5.5](#item-1) ⭐️ 9.0/10
2. [Cloudflare Introduces Meerkat: Globally Distributed Consensus Powered by QuePaxa](#item-2) ⭐️ 9.0/10
3. [EU Nears Approval of Controversial Chat Control Message Scanning Rules](#item-3) ⭐️ 9.0/10
4. [GitLost: Prompt Injection Attack Exposes Private Repos via GitHub's AI Agent](#item-4) ⭐️ 9.0/10
5. [TypeScript 7 Released with Up to 10x Faster Build Times](#item-5) ⭐️ 9.0/10
6. [GhostApproval: Trust Boundary Flaw in AI Coding Assistants](#item-6) ⭐️ 9.0/10
7. [Huawei Returns to Overseas 5G Market with Pura 90 Pro Max](#item-7) ⭐️ 9.0/10
8. [xAI Releases Grok 4.5 with Unmatched Pricing and Coding Skills](#item-8) ⭐️ 8.0/10
9. [OpenBSD Use-After-Free Vulnerability Enables Local Root Escalation](#item-9) ⭐️ 8.0/10
10. [Guide: Building a Minimal DIY ZFS NAS Without TrueNAS](#item-10) ⭐️ 8.0/10
11. [Tenda Firmware Contains Hidden Authentication Backdoor](#item-11) ⭐️ 8.0/10
12. [Dissecting a TradingView Phishing Campaign Using ScreenConnect](#item-12) ⭐️ 8.0/10
13. [DeepSeek Developing Custom AI Chip to Reduce Dependence on NVIDIA and Huawei](#item-13) ⭐️ 8.0/10
14. [Alibaba Bans Employee Use of Claude Effective July 10](#item-14) ⭐️ 8.0/10
15. [Critical Android Remote Root Exploit Chain "IonStack" Exposed](#item-15) ⭐️ 8.0/10
16. [Researchers Identify Smartphone Apps via Leaked Electromagnetic Signals](#item-16) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [OpenAI Announces GPT-Live: Continuous Voice Mode with Background Delegation to GPT-5.5](https://openai.com/index/introducing-gpt-live/) ⭐️ 9.0/10

OpenAI has announced GPT-Live, an advanced voice interaction mode that supports continuous, uninterrupted conversation while delegating complex queries to GPT-5.5 in the background. This eliminates the prior limitation where voice interactions were constrained by a model significantly behind the frontier. This represents a paradigm shift in voice AI assistants, as users can now access frontier-level reasoning during natural voice conversations without sacrificing capability for convenience. The high community engagement (410 points, 274 comments) underscores the significant interest and potential societal impact of more human-like AI interaction. Early access users report being able to sustain conversations lasting a full hour and successfully using the system for brainstorming sessions. However, a notable limitation is the lack of tool and connector integration during voice mode — a gap shared across all frontier assistants including Claude, ChatGPT, Gemini, and Grok.

hackernews · logickkk1 · Jul 8, 17:03 · [Discussion](https://news.ycombinator.com/item?id=48834405)

**Background**: Frontier AI models are the most advanced general-purpose models available, representing the cutting edge of capabilities such as reasoning, multimodal generation, and agentic workflows. Previously, voice mode assistants operated on specialized but less capable models, creating a performance gap between text and voice interactions. AI delegation refers to the practice of an orchestrating model handing off tasks to more capable specialized models — in this case, GPT-Live's voice interface delegates complex reasoning tasks to GPT-5.5 behind the scenes.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/glossary/frontier-models/">What Are Frontier AI Models and How They Work - NVIDIA</a></li>
<li><a href="https://www.datacamp.com/blog/frontier-models">Frontier Models Explained: What Defines the Cutting Edge of AI</a></li>
<li><a href="https://arxiv.org/html/2602.11865v1">Intelligent AI Delegation - arXiv.org</a></li>

</ul>
</details>

**Discussion**: Early access user simonw praised the system's ability to maintain extended conversations and delegate to GPT-5.5, though noted some bugs like inappropriate interruptions. artdigital expressed frustration that no frontier assistant supports tool integration in voice mode, which limits productivity. Deeper philosophical concerns were raised by jonstaab and yottamus, who worry that increasingly human-like AI interactions could erode genuine human relationships and normalize behaviors like speaking over others.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Voice Assistants</span> <span class="tag-badge">Product Announcement</span> <span class="tag-badge">Human-Computer Interaction</span></p>

---

<a id="item-2"></a>

## [Cloudflare Introduces Meerkat: Globally Distributed Consensus Powered by QuePaxa](https://blog.cloudflare.com/meerkat-introduction/) ⭐️ 9.0/10

Cloudflare Research has introduced Meerkat, a globally distributed consensus service powered by QuePaxa, marking the first production implementation of an asynchronous, leaderless consensus algorithm originally published at SOSP 2023 by EPFL researchers. Unlike traditional consensus algorithms, QuePaxa allows all replicas to perform writes at all times and never halts progress due to timeouts, making it resilient under highly variable network conditions. This represents a significant paradigm shift for globally distributed systems, where leader-based algorithms like Raft frequently suffer from leader flapping, election storms, and latency spikes when network conditions degrade. By eliminating the reliance on timeouts and strong leaders, Meerkat has the potential to deliver more robust and consistent performance across Cloudflare's global infrastructure and could influence how the broader industry approaches consensus at planetary scale. QuePaxa is crash fault tolerant and employs a novel asynchronous consensus core that tolerates adverse network conditions while offering state-of-the-art normal-case efficiency comparable to Multi-Paxos and Raft. Cloudflare plans to use Meerkat to build a strongly consistent, fault-tolerant key-value store and other applications, though the open question remains whether its performance is competitive enough in the normal case compared to established leader-based protocols.

hackernews · The Cloudflare Blog · Jul 8, 13:18 · [Discussion](https://news.ycombinator.com/item?id=48831565)

**Background**: Consensus algorithms like Raft and Multi-Paxos are foundational to distributed systems, ensuring multiple nodes agree on a shared state even when some fail. These traditional algorithms are partially synchronous, meaning they rely on timeouts for liveness and only make progress when message delays are sufficiently small relative to timeout durations. In globally distributed networks where latency and delay can fluctuate wildly, this timeout dependency causes practical problems such as unnecessary leader elections and stalled writes. QuePaxa, published at SOSP 2023, is the first protocol to break this dependency, offering state-of-the-art efficiency without relying on timeouts.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.cloudflare.com/meerkat-introduction/">Introducing Meerkat: an experiment in global consensus</a></li>
<li><a href="https://github.com/dedis/quepaxa">GitHub - dedis/quepaxa: This is the code repository for ...</a></li>
<li><a href="https://dl.acm.org/doi/abs/10.1145/3600006.3613150">QuePaxa: Escaping the tyranny of timeouts in consensus</a></li>

</ul>
</details>

**Discussion**: The community discussion is highly technical and somewhat divided. One commenter finds the comparison to Raft confusing since Raft was specifically designed to have strong leaders, suggesting the article would benefit from comparing Meerkat to leaderless Paxos-class algorithms instead. Others highlight that the true innovation is being the first production asynchronous consensus algorithm, which escapes the tyranny of timeouts that plague Raft and Paxos under adverse network conditions. A practitioner who has struggled with Raft clusters on bad networks expresses enthusiasm, noting that this could genuinely help those dealing with messy network environments.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Distributed Systems</span> <span class="tag-badge">Consensus Algorithms</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">QuePaxa</span> <span class="tag-badge">Infrastructure</span></p>

---

<a id="item-3"></a>

## [EU Nears Approval of Controversial Chat Control Message Scanning Rules](https://cyberinsider.com/eu-now-one-step-away-from-reviving-private-message-scanning-rules/) ⭐️ 9.0/10

The European Union is reportedly on the verge of finalizing the controversial Child Sexual Abuse Regulation (CSAR), widely known as 'Chat Control,' with EU governments expected to vote around October 13–14, 2025. If endorsed, the regulation would mandate the scanning of private messages on platforms like WhatsApp and Messenger, effectively undermining end-to-end encryption (E2EE) across the bloc. This represents one of the most consequential encryption regulations in EU history, potentially forcing tech companies to choose between complying with mass surveillance mandates or abandoning the European market. If passed, it could set a global precedent that erodes digital privacy rights and normalizes government-mandated scanning of private communications worldwide. Critics distinguish between Chat Control 1.0, which allows voluntary scanning by platforms like Meta, and the far more alarming Chat Control 2.0, which would mandate scanning and effectively ban E2EE. The proposed mechanism relies on client-side scanning (CSS), which security experts from the EFF and Internet Society warn fundamentally breaks the security promise of end-to-end encryption by analyzing message contents on the device before encryption is applied.

hackernews · ggirelli · Jul 8, 16:53 · [Discussion](https://news.ycombinator.com/item?id=48834296)

**Background**: The regulation was originally proposed by EU Commissioner for Home Affairs Ylva Johansson in May 2022 with the stated goal of combating child sexual abuse material (CSAM) online. End-to-end encryption ensures that only the sender and recipient can read messages, providing the strongest level of communication security, but it also prevents platforms and law enforcement from detecting illegal content. Client-side scanning has been proposed as a technical compromise, but researchers and civil liberties organizations argue it introduces vulnerabilities that could be exploited for broader surveillance beyond CSAM detection.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://edri.org/our-work/chat-control-what-is-actually-going-on/">Chat Control: What is actually going on? - European Digital Rights (EDRi)</a></li>
<li><a href="https://www.eff.org/deeplinks/2019/11/why-adding-client-side-scanning-breaks-end-end-encryption">Why Adding Client-Side Scanning Breaks End-To-End Encryption</a></li>

</ul>
</details>

**Discussion**: Community members expressed strong concern about the erosion of EU digital privacy rights, with one user sharing an actionable link (fightchatcontrol.eu) for contacting representatives. A key clarification emerged distinguishing Chat Control 1.0 (voluntary platform scanning) from the far more dangerous Chat Control 2.0 (mandatory scanning and E2EE ban), with frustration that both share the same branding. Several commenters also expressed skepticism about the timeline, noting these alarming headlines have circulated for years without resolution.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">EU</span> <span class="tag-badge">encryption</span> <span class="tag-badge">policy</span></p>

---

<a id="item-4"></a>

## [GitLost: Prompt Injection Attack Exposes Private Repos via GitHub's AI Agent](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) ⭐️ 9.0/10

Security researchers demonstrated that GitHub's AI agent could be manipulated through prompt injection to leak private repository data into public contexts. They bypassed GitHub's guardrails using remarkably simple techniques, such as embedding instructions with a word as basic as "Additionally" within public issues or pull requests. This vulnerability exposes a systemic risk in agentic AI systems that operate with privileged access to sensitive data while also processing untrusted user input. As AI agents become increasingly integrated into developer workflows, this class of attack threatens the confidentiality of proprietary code and secrets stored in platforms used by millions of developers worldwide. The researchers highlighted that the actual leak occurred because the agent could write extracted private data back out as a public comment on an issue, rather than simply because it could read private repositories. Community members noted that while input-side prompt injection may be nearly impossible to fully prevent, restricting an agent's ability to publicly output data pulled from a private scope is a more tractable defense.

hackernews · ColinEberhardt · Jul 8, 05:25 · [Discussion](https://news.ycombinator.com/item?id=48827858)

**Background**: Prompt injection is a cybersecurity exploit where carefully crafted inputs are designed to cause unintended behavior in large language models (LLMs), taking advantage of the model's inability to distinguish between developer-defined instructions and user inputs. Agentic AI systems are intelligent agents that can pursue goals, use tools, and take actions with varying degrees of autonomy, often within human-defined constraints. When these agents have access to both private resources and untrusted public input—as is common in developer platforms like GitHub—they become especially vulnerable to indirect prompt injection, where adversarial prompts are embedded within content the agent processes.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_agent">AI agent - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The community is divided on whether this represents an inherent architectural flaw or a configuration error by users who grant agents excessive permissions. Some commenters argue that prompt injection is analogous to SQL injection but potentially more severe, while others point out that the real vulnerability lies in the agent's ability to write private data to public outputs rather than in its ability to read private repositories.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Prompt Injection</span> <span class="tag-badge">GitHub Copilot</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">LLM</span></p>

---

<a id="item-5"></a>

## [TypeScript 7 Released with Up to 10x Faster Build Times](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) ⭐️ 9.0/10

Microsoft has officially released TypeScript 7, a landmark version that rewrites the compiler and language service in native Go, delivering order-of-magnitude performance improvements. Community benchmarks confirm speedups of 8–12x on major codebases, including VS Code dropping from 125.7s to 10.6s and Sentry from 139.8s to 15.7s. TypeScript is the dominant typed language for web development, used by millions of projects, so a 10x reduction in build and type-check times translates directly into massive savings in developer productivity and CI costs. The performance leap also unlocks richer real-time editor tooling and language services that were previously infeasible on very large monorepos. The rewrite, internally codenamed "Project Corsa", shifts from the original TypeScript-to-JavaScript pipeline to a native Go codebase that leverages native execution speed, better memory usage, and shared-memory parallelism. The team maintained two separate codebases in parallel during the transition, and JSDoc type syntax continues to receive dedicated support alongside some syntax refinements.

hackernews · DanRosenwasser · Jul 8, 16:06 · [Discussion](https://news.ycombinator.com/item?id=48833715)

**Background**: TypeScript, released by Microsoft in 2012, is a statically typed superset of JavaScript that compiles to plain JavaScript and has become the de facto standard for large-scale web development. For over a decade, the TypeScript compiler itself was written in TypeScript and distributed as JavaScript running on Node.js, which imposed inherent performance ceilings as codebases grew into the millions of lines. In March 2025, Microsoft announced a native port effort aiming for a 10x speedup, which has now culminated in the TypeScript 7.0 release.

<details><summary>References</summary>
<ul>
<li><a href="https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/">Progress on TypeScript 7 - December 2025 - TypeScript</a></li>
<li><a href="https://visualstudiomagazine.com/articles/2026/07/08/typescript-7-arrives-to-rock-vs-code-with-go-powered-speed.aspx">TypeScript 7 Arrives to Rock VS Code with Go-Powered Speed</a></li>
<li><a href="https://devblogs.microsoft.com/typescript/typescript-native-port/">A 10x Faster TypeScript - TypeScript - devblogs.microsoft.com</a></li>

</ul>
</details>

**Discussion**: Sentiment is overwhelmingly positive, with users sharing independent benchmarks that confirm 8–12x speedups and praising the team's engineering discipline in maintaining two parallel codebases for such a complex type system. Several commenters noted how TypeScript has shifted industry expectations so that static types now feel essential rather than burdensome, while others expressed appreciation for continued JSDoc support despite syntax changes.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">TypeScript</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">Compilers</span> <span class="tag-badge">Web Development</span> <span class="tag-badge">Performance</span></p>

---

<a id="item-6"></a>

## [GhostApproval: Trust Boundary Flaw in AI Coding Assistants](https://www.wiz.io/blog/ghostapproval-a-trust-boundary-gap-in-ai-coding-assistants) ⭐️ 9.0/10

Security researchers at Wiz have uncovered a category-level vulnerability dubbed "GhostApproval" that affects modern AI coding assistants, revealing that the widely relied-upon Human-in-the-Loop (HITL) approval model can be systematically bypassed. This is not a single-tool bug but a class of trust boundary gaps that allows classic attack techniques to slip through standard safety checkpoints undetected. This finding is significant because HITL approval is the foundational safety mechanism that the entire AI coding assistant ecosystem relies on to prevent unauthorized or malicious actions. If this trust boundary can be circumvented, every developer and organization using tools like GitHub Copilot, Cursor, or similar AI-powered IDE assistants could be exposed to attacks where malicious actions execute without genuine human oversight. The GhostApproval vulnerability exploits a fundamental architectural blind spot where the trust boundary between the AI agent's suggested action and the human reviewer's decision can be manipulated. Classic threat vectors — such as prompt injection or context manipulation — can be weaponized to make the approval mechanism effectively transparent, causing actions to be executed without the human genuinely understanding or consenting to what is being approved.

rss · Wiz Blog | RSS feed · Jul 8, 14:00

**Background**: Modern AI coding assistants operate with deep system integration, able to read files, execute commands, search the web, and modify codebases, making them powerful but also potentially dangerous tools. The "Human-in-the-Loop" safety model is designed to mitigate this risk by requiring explicit human approval before the AI takes any consequential action, such as running a terminal command or writing to a file. A "trust boundary" is the logical perimeter that separates trusted components from untrusted inputs or actors. When this boundary is not properly enforced, an attacker can influence trusted processes through untrusted channels — a classic security problem now manifesting in the AI assistant domain.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">AI Coding Assistants</span> <span class="tag-badge">DevSecOps</span> <span class="tag-badge">LLM</span></p>

---

<a id="item-7"></a>

## [Huawei Returns to Overseas 5G Market with Pura 90 Pro Max](https://finance.sina.com.cn/tech/roll/2026-07-08/doc-inihapna8035781.shtml) ⭐️ 9.0/10

Huawei has officially released the international version of the Pura 90 Pro Max with native 5G network support, marking the company's return to the overseas 5G smartphone market after a seven-year hiatus. Overseas speed tests confirm the device displays a 5G indicator in the status bar and achieves peak download speeds exceeding 1100 Mbps. This milestone signals Huawei's successful breakthrough through years of US sanctions that had restricted its access to 5G technology and overseas markets since 2019. It demonstrates significant progress in technological self-reliance and could reshape the competitive landscape of the global premium smartphone market. The Pura 90 Pro Max runs HarmonyOS 6.0.0.125, which implements 5A communication technology that laid the technical foundation for the overseas return. The breakthrough follows the 2023 Mate 60 series, which first pierced the technology blockade domestically before enabling this international expansion.

telegram · zaihuapd · Jul 8, 12:17

**Background**: Since 2019, the US government imposed sanctions that severely restricted Huawei's access to advanced semiconductor chips and 5G-related technologies, effectively preventing the company from selling 5G smartphones in international markets. Huawei's Mate 60 series in 2023 marked a turning point by demonstrating the company could produce devices with advanced connectivity despite these restrictions. The Pura series, formerly known as the P series, represents Huawei's premium smartphone lineup focused on photography and design innovation.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">5G</span> <span class="tag-badge">Smartphones</span> <span class="tag-badge">Telecommunications</span> <span class="tag-badge">Tech Industry</span></p>

---

<a id="item-8"></a>

## [xAI Releases Grok 4.5 with Unmatched Pricing and Coding Skills](https://x.ai/news/grok-4-5) ⭐️ 8.0/10

xAI has released Grok 4.5, a new large language model that demonstrates impressive coding capabilities and operates with high reasoning efficiency. The model was reportedly trained on trillions of tokens of Cursor interaction data, which helps it understand real-world developer-agent workflows. This release disrupts the AI market by offering performance comparable to top-tier models like Claude Opus at a fraction of the cost, priced at just $2/$6 per million tokens. By leveraging Cursor's proprietary dataset, xAI has significantly enhanced the model's practical coding utility, challenging the financial viability of the ongoing AI arms race. Grok 4.5 achieves token efficiency and speeds of around 90 tokens per second, reportedly outperforming competitors like GPT 5.5 and GLM 5.2 in practical use. The training utilized Cursor's extensive data capturing how developers interact with codebases, a strategy made possible by SpaceX's recent acquisition of Cursor under the xAI umbrella.

hackernews · BoumTAC · Jul 8, 18:00 · [Discussion](https://news.ycombinator.com/item?id=48835111)

**Background**: Cursor is an AI-powered code editor and software development environment that allows users to program using natural-language instructions. In the rapidly evolving landscape of AI coding assistants, high-quality interaction data has become a critical asset for training models to understand complex, multi-step development tasks. Elon Musk's xAI acquiring Cursor provides the company with a massive proprietary advantage in this data-rich domain.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>

</ul>
</details>

**Discussion**: The community is highly impressed by Grok 4.5's economics, noting its $2/$6 pricing provides 4x better reasoning efficiency than Opus while matching its benchmark performance. While some users question the economic viability of selling third-place models at a loss, practical feedback highlights its superior speed and surprising ability to intuitively build functional applications where competitors like Claude sometimes give up.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Grok</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-9"></a>

## [OpenBSD Use-After-Free Vulnerability Enables Local Root Escalation](https://nvd.nist.gov/vuln/detail/cve-2026-57589) ⭐️ 8.0/10

A use-after-free vulnerability (CVE-2026-57589) was discovered in OpenBSD that allows local privilege escalation to root. The vulnerability was reportedly found as part of the 'Patch the Planet' initiative, a collaboration where OpenAI provides AI model access and Trail of Bits uses them to discover vulnerabilities in open-source software projects. This discovery is highly significant because OpenBSD is renowned for its legendary security record, having famously claimed only two remote holes in its default install over an extraordinarily long period. The fact that this was found through AI-driven vulnerability research demonstrates the emerging power of large language models in security analysis and could herald a new era of automated vulnerability discovery. The vulnerability is classified as a use-after-free bug, a class of memory safety issue where a program continues to use memory after it has been freed, potentially allowing arbitrary code execution. As of the community discussion, the vulnerability did not yet appear on OpenBSD's official security page, raising questions about its disclosure timeline and patch status.

hackernews · linggen · Jul 8, 13:24 · [Discussion](https://news.ycombinator.com/item?id=48831658)

**Background**: OpenBSD is a free and open-source Unix-like operating system famous for its obsessive focus on security, correctness, and proactive auditing of source code. Its homepage proudly states 'Only two remote holes in the default install, in a heck of a long time!' Local privilege escalation refers to exploiting a bug or design flaw to gain elevated access to resources beyond what was intended for a user or application, such as escalating from a regular user to root privileges.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Local_privilege_escalation">Local privilege escalation</a></li>

</ul>
</details>

**Discussion**: Community members noted the vulnerability was found through the 'Patch the Planet' initiative by OpenAI and Trail of Bits. Several commenters praised OpenBSD's security culture, noting that finding even one bug is a testament to their diligence, especially given their limited resources. Others expressed curiosity about how many more vulnerabilities AI tools might uncover in OpenBSD, while one user questioned why the vulnerability wasn't yet listed on OpenBSD's official security page.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenBSD</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">AI</span> <span class="tag-badge">Privilege Escalation</span></p>

---

<a id="item-10"></a>

## [Guide: Building a Minimal DIY ZFS NAS Without TrueNAS](https://neil.computer/notes/how-to-setup-minimal-zfs-nas-without-truenas/) ⭐️ 8.0/10

A new detailed guide outlines the process of building a minimal Network Attached Storage (NAS) system using vanilla ZFS on standard Linux. This approach avoids commercial vendor lock-in from Synology or QNAP, as well as heavier operating systems like TrueNAS. This guide empowers users to take full control of their storage infrastructure by leveraging open-source tools directly, reducing unnecessary overhead and complexity. It appeals to self-hosters and enthusiasts who prefer a lean, customizable system over pre-packaged commercial solutions. The setup relies on standard Linux tools to manage file sharing and network discovery alongside ZFS for RAID and data integrity. The community notes that crucial setup components include installing avahi-daemon for macOS discovery and wsdd2 for Windows clients to ensure seamless network integration.

hackernews · 4diii · Jul 8, 03:59 · [Discussion](https://news.ycombinator.com/item?id=48827325)

**Background**: ZFS is a robust file system and logical volume manager known for its high data integrity and protection against data corruption. Commercial NAS solutions like Synology and QNAP offer user-friendly interfaces, while TrueNAS provides a dedicated operating system based on ZFS, but these can introduce unnecessary complexity or cost for users who only need basic storage capabilities.

**Discussion**: The community provides valuable technical insights, such as "shucking" external WD Elements hard drives for significant cost savings compared to buying dedicated NAS drives. Users also debated alternatives like combining dm-integrity, mdadm, and XFS over ZFS due to concerns about OpenZFS development priorities and stability, while others shared success stories using NixOS and Docker Compose for a similarly minimal setup.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">ZFS</span> <span class="tag-badge">NAS</span> <span class="tag-badge">Self-Hosting</span> <span class="tag-badge">Storage</span> <span class="tag-badge">Linux</span></p>

---

<a id="item-11"></a>

## [Tenda Firmware Contains Hidden Authentication Backdoor](https://kb.cert.org/vuls/id/213560) ⭐️ 8.0/10

Multiple versions of Tenda firmware have been found to contain a hidden authentication backdoor accessible via a hardcoded password, specifically "rzadmin". This vulnerability allows unauthorized access since the associated username is completely ignored during validation. This vulnerability exposes a wide range of home and business network devices to potential takeover, compromising network security for numerous users. It highlights the ongoing risks associated with proprietary, "black-box" firmware compared to open-source alternatives like OpenWRT. The vulnerability exists due to a hardcoded password ("rzadmin") within the firmware's configuration, and the system does not validate the username field when this password is used. Security researchers were unable to reach the vendor for a patch, leaving affected devices vulnerable.

hackernews · miniBill · Jul 8, 00:08 · [Discussion](https://news.ycombinator.com/item?id=48825749)

**Background**: Tenda Technology Co., Ltd. is a manufacturer of networking equipment based in Shenzhen, supplying routers and other devices globally. A backdoor in software is a hidden method for bypassing normal authentication, often left intentionally or accidentally by developers. This incident fuels the debate over the security transparency of closed-source firmware versus open-source projects like OpenWRT, which allow independent auditing.

**Discussion**: Community members expressed strong frustration and a lack of trust in proprietary router firmware, with some advocating exclusively for open-source solutions like OpenWRT. Commenters mocked the amateur nature of the hardcoded password and raised concerns about the potential for widespread exploitation given Tenda's market presence.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">backdoor</span> <span class="tag-badge">firmware</span> <span class="tag-badge">networking</span></p>

---

<a id="item-12"></a>

## [Dissecting a TradingView Phishing Campaign Using ScreenConnect](https://osandamalith.com/2026/07/07/a-phishing-email-a-fake-trial-and-a-real-backdoor/) ⭐️ 8.0/10

A targeted phishing campaign against algorithmic traders has been uncovered, using a fake TradingView trial email as the initial lure. The attack leverages a self-hosted ScreenConnect instance to ultimately deploy backdoors onto the victim's machine. This highlights a sophisticated threat where attackers abuse legitimate remote support infrastructure to evade traditional antivirus defenses. It demonstrates a highly targeted approach against professionals in the financial and algorithmic trading sectors, posing a severe risk of data compromise and unauthorized system access. The attack chain begins with a well-timed email offering a free 1-month trial for the TradingView desktop app, which successfully passes standard email authentication checks. When the victim attempts to install the fake desktop application, it connects to the attacker's self-hosted ScreenConnect server, facilitating the backdoor installation.

rss · Blog of Osanda · Jul 7, 22:58

**Background**: TradingView is a widely popular charting platform and social network for traders and investors. ScreenConnect, currently known as ConnectWise Control, is a legitimate remote desktop and support software application that can be self-hosted. Cybercriminals frequently abuse dual-use remote administration tools like ScreenConnect because their network traffic can easily blend in with normal, legitimate business activities.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ScreenConnect">ScreenConnect</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Phishing</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Malware Analysis</span> <span class="tag-badge">InfoSec</span></p>

---

<a id="item-13"></a>

## [DeepSeek Developing Custom AI Chip to Reduce Dependence on NVIDIA and Huawei](https://t.me/zaihuapd/42423) ⭐️ 8.0/10

According to three sources familiar with the matter, Chinese AI company DeepSeek is developing its own AI chip focused on the inference phase—where trained models generate responses for users rather than during model training. The project began roughly a year ago and is still in early stages, with DeepSeek actively engaging chip design, foundry, and storage partners while quietly recruiting chip design engineers in recent months. This move signals a significant strategic shift in AI supply chain independence, especially critical as U.S. export controls restrict Chinese companies' access to advanced semiconductors like NVIDIA's H800. If successful, a custom inference-focused chip could reshape the compute landscape for DeepSeek and serve as a model for other Chinese AI companies seeking self-sufficiency. The chip is specifically designed for inference rather than training, suggesting a focus on optimizing serving costs rather than the more compute-intensive training pipeline. DeepSeek previously relied on NVIDIA H800 and Huawei Ascend chips, which are both affected by U.S. export restrictions. The project remains in early stages, meaning commercial availability could be years away.

telegram · zaihuapd · Jul 8, 05:20

**Background**: AI workloads are divided into two phases: training, where models learn from massive datasets using enormous compute resources, and inference, where trained models generate outputs for end users. U.S. export controls have progressively restricted Chinese companies' access to advanced AI chips, limiting the supply of NVIDIA's H800, A800, and other GPUs. DeepSeek, founded by Liang Wenfeng, has rapidly emerged as a leading Chinese AI company known for cost-efficient models that compete with top Western alternatives.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">自研芯片</span> <span class="tag-badge">出口管制</span> <span class="tag-badge">半导体</span></p>

---

<a id="item-14"></a>

## [Alibaba Bans Employee Use of Claude Effective July 10](https://t.me/zaihuapd/42424) ⭐️ 8.0/10

Alibaba announced an internal ban on all Anthropic products, including Claude models like Sonnet, Opus, and Fable, as well as Agent products like Claude Code, effective July 10. This move follows Anthropic's accusation that Alibaba used around 25,000 fake accounts to interact with Claude over 28 million times. This event highlights the growing tensions between major AI providers and large enterprise customers attempting to utilize their technologies, marking a significant conflict in the enterprise AI landscape. It also underscores how strictly AI companies monitor and enforce their usage policies, potentially impacting organizational tool choices and international tech dynamics. The ban requires employees to uninstall all Anthropic tools, reversing Alibaba's previous policy of reimbursing employees for using external models like Claude, GPT, and Gemini. The specific allegations state that between April 22 and June 5, Alibaba used fake accounts to interact with Claude 28 million times, prompting Anthropic to tighten its risk control strategies.

telegram · zaihuapd · Jul 8, 06:09

**Background**: Claude is a series of large language models developed by Anthropic, widely used in chatbots and AI-assisted software development tools like Claude Code. Anthropic trains these models using a technique called constitutional AI to improve ethical and legal compliance. Historically, Anthropic has strictly enforced its usage policies, even resulting in supply chain risk designations from government bodies over contractual prohibitions related to surveillance.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_Code">Claude Code</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">阿里巴巴</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">企业AI</span> <span class="tag-badge">行业冲突</span></p>

---

<a id="item-15"></a>

## [Critical Android Remote Root Exploit Chain "IonStack" Exposed](https://www.coolapk.com/feed/72700258?s=ZGQ2MTVlZjYxMDYyNTM3ZzZhNGUzOThjega1640) ⭐️ 8.0/10

Nebula Security has exposed "IonStack," a full-chain exploit that can remotely root fully updated Android 17 devices by chaining a Firefox vulnerability with a 15-year-old Linux kernel flaw known as GhostLock. The proof-of-concept allows attackers to gain complete control via a single malicious link click, and the kernel flaw has already been fixed by Linux maintainers. This exploit chain demonstrates how a browser vulnerability can be bolted onto a local kernel bug to achieve remote privilege escalation, highlighting severe security risks for the broader Android ecosystem. Because the proof-of-concept is now public, there is a high probability that generic, easy-to-use root tools will emerge, putting millions of devices at risk. The vulnerability grants attackers persistent root access within a minute of clicking a malicious link, enabling subsequent device control via ADB. The attack relies on two zero-day vulnerabilities spanning the Firefox browser and the Linux kernel to achieve remote code execution and container escape.

telegram · zaihuapd · Jul 8, 13:01

**Background**: Rooting an Android device typically requires unlocking the bootloader or exploiting specific vulnerabilities, which often demands physical access or complex user interactions. A "full-chain" exploit links multiple vulnerabilities together to bypass different security layers, such as the browser sandbox and OS kernel isolation. The 15-year-old flaw named GhostLock is a Linux kernel bug that enables privilege escalation and container escape once an attacker gains initial foothold. The Linux kernel and Android operating system use sandboxes and permission models to prevent unauthorized access, making full remote root exploits exceptionally rare and dangerous.

<details><summary>References</summary>
<ul>
<li><a href="https://cybersecuritynews.com/android-17-root-1-click/">First-Ever 1- Click Android 17 Exploit Allows Attackers to ...</a></li>
<li><a href="https://www.cyberkendra.com/2026/06/one-malicious-link-full-root-access.html">One Malicious Link, Full Root Access — Nebula Security Demos ...</a></li>
<li><a href="https://thehackernews.com/2026/07/15-year-old-ghostlock-flaw-enables-root.html">15-Year-Old GhostLock Flaw Enables Root and Container Escape ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Android</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Linux Kernel</span> <span class="tag-badge">Exploit</span></p>

---

<a id="item-16"></a>

## [Researchers Identify Smartphone Apps via Leaked Electromagnetic Signals](https://www.scmp.com/news/china/science/article/3359688/chinese-researchers-find-peephole-any-smartphone-its-leaked-radio-signal) ⭐️ 8.0/10

A research team from the People's Public Security University of China developed a non-contact forensic technique that identifies running smartphone applications by analyzing leaked low-frequency electromagnetic signals. This approach achieves an accuracy of up to 99.07% and functions even when the device is offline, locked, encrypted, or in airplane mode. This breakthrough highlights a severe privacy vulnerability, proving that physical side-channel leaks can expose user behavior without requiring system access or network connectivity. It significantly impacts mobile security and digital forensics, suggesting that current software-based protections cannot prevent hardware-level electromagnetic eavesdropping. The technology was successfully tested on an iPhone 15 Pro, Xiaomi 15 Pro, and OPPO Reno 13 to identify popular apps like TikTok, WeChat video calls, Baidu Maps, and SMS. It works by detecting subtle electromagnetic radiation emitted by the device's internal components during specific processing operations and using classification models to match these signal patterns to active applications.

telegram · zaihuapd · Jul 8, 16:05

**Background**: A side-channel attack is a security exploit that gathers information from the physical implementation of a computer system, such as timing, power consumption, or electromagnetic (EM) emissions, rather than attacking software vulnerabilities. Since electronic components process data by switching states, they inadvertently leak EM radiation that correlates with internal data flow. While traditionally used to extract cryptographic keys, researchers are increasingly applying these physical monitoring techniques to deduce broader user activities.

<details><summary>References</summary>
<ul>
<li><a href="https://www.mk.co.kr/cn/world/12093156">中国一所大学的研究团队开发出一种所谓“非接触式数字取证技术”,可通过...</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/646255118">电磁侧信道攻击破解密码 - 知乎 - 知乎专栏 密码学侧信道攻击（Side-channel Attack）：从物理泄露中窃取密钥_侧... 密码学侧信道攻击（Side-channel Attack）：从物理泄露中窃取密钥 - ... 侧信道安全威胁举例分析 | CN-SEC 中文网 电磁侧信道攻击破解密码 - 射频微波 - -EETOP-创芯网 利用电磁侧信道对移动设备进行屏幕嗅探攻击 - 今日头条</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">信息安全</span> <span class="tag-badge">侧信道攻击</span> <span class="tag-badge">电磁泄漏</span> <span class="tag-badge">移动安全</span> <span class="tag-badge">学术研究</span></p>

---