---
layout: default
title: "Horizon Summary: 2026-08-04 (EN)"
date: 2026-08-04
lang: en
---

> From 64 items, 18 important content pieces were selected

---

1. [Keyv and Related Packages Hit by Shai-Hulud NPM Supply Chain Attack](#item-1) ⭐️ 9.0/10
2. [Critical N-able N-central Authentication Bypass Exploited in the Wild](#item-2) ⭐️ 9.0/10
3. [Palo Alto's NOVA AI Discovers 14,000+ Zero-Day Vulnerabilities in Open-Source Software](#item-3) ⭐️ 9.0/10
4. [Google Builds $200B Wall Street Financing Machine for Anthropic](#item-4) ⭐️ 9.0/10
5. [China's First Mandatory L3/L4 Autonomous Driving Standard Submitted, Effective 2027](#item-5) ⭐️ 9.0/10
6. [DeepSeek V4 Flash Runs Efficiently on a Single AMD MI300X GPU](#item-6) ⭐️ 8.0/10
7. [Harness Engineering: The New Frontier for AI Agent Self-Improvement](#item-7) ⭐️ 8.0/10
8. [Cisco Talos Exposes How Adversaries Weaponize AI Coding Agents](#item-8) ⭐️ 8.0/10
9. [Elastic Shares Custom LLM Benchmarking Framework for Agentic SOC Workflows](#item-9) ⭐️ 8.0/10
10. [Elastic Built an AI Agent for HackerOne Bug Report Triage](#item-10) ⭐️ 8.0/10
11. [Zhuque Lab Exposes Memory Heist Threats and Releases AI-Infra-Guard Scanner](#item-11) ⭐️ 8.0/10
12. [How Legitimate Cloud Platforms Enable AitM Phishing to Bypass MFA](#item-12) ⭐️ 8.0/10
13. [Huawei Proposes 'Tau Scaling Law' to Advance Beyond Moore's Law](#item-13) ⭐️ 8.0/10
14. [Cloudflare Replaces Third-Party Security Tools with AI Agents, Slashing Bounty Triage Costs](#item-14) ⭐️ 8.0/10
15. [U.S. FCC Bans Import of New Chinese Humanoid Robots and Connected Power Inverters](#item-15) ⭐️ 8.0/10
16. [US-China Tensions Rise Over Anthropic's Mythos AI Model Before September Summit](#item-16) ⭐️ 8.0/10
17. [5-Hour Interview with Huawei's Chief Semiconductor Scientist on Ascend Chips](#item-17) ⭐️ 8.0/10
18. [Trump Administration Drafting FCC Ban on Chinese Data Center Optical Modules](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Keyv and Related Packages Hit by Shai-Hulud NPM Supply Chain Attack](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack) ⭐️ 9.0/10

Keyv 6.0.0 and ten related npm releases shipped install-time malware exploiting pre-install hooks. Compromising Keyv, a widely used key-value store package, allows attackers to reach a large number of downstream applications, causing widespread damage and security breaches. The malicious code specifically exploits the package's pre-install hooks to execute malware during the npm install process.

hackernews · cimi_ · Aug 4, 11:01 · [Discussion](https://news.ycombinator.com/item?id=49166874)

**Background**: Keyv is a popular simple key-value store for Node.js with support for multiple backends. NPM pre-install and post-install hooks are lifecycle scripts executed automatically before or after a package is installed. The "Shai-Hulud" attack refers to a self-replicating worm that has recently compromised hundreds of packages in the npm ecosystem by exploiting exposed secrets and automated scripts.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack">Shai-Hulud 2.0 Supply Chain Attack: 25K+ Repos Exposing Secrets</a></li>
<li><a href="https://unit42.paloaltonetworks.com/npm-supply-chain-attack/">"Shai-Hulud" Worm Compromises npm Ecosystem in Supply Chain ...</a></li>

</ul>
</details>

**Discussion**: Commenters are highly critical of pre-install hooks, with one user suggesting that any package adding a new pre-install hook should be treated with extreme suspicion. Another user shared a configuration tip (min-release-age=5 in .npmrc) to delay package updates and avoid installing freshly released compromised versions.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">NPM</span> <span class="tag-badge">Supply Chain Attack</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">Node.js</span></p>

---

<a id="item-2"></a>

## [Critical N-able N-central Authentication Bypass Exploited in the Wild](https://www.rapid7.com/blog/post/etr-cve-2026-18577-n-able-n-central-authentication-bypass-exploited-in-the-wild) ⭐️ 9.0/10

Rapid7 reported that CVE-2026-18577, a severe unauthenticated remote authentication bypass vulnerability in N-able N-central, is being actively exploited in the wild. This critical flaw allows remote attackers to gain administrative control of vulnerable servers and was officially added to CISA's Known Exploited Vulnerability (KEV) catalog on August 3, 2026. Because N-central is a widely deployed Remote Monitoring and Management (RMM) platform used by managed service providers (MSPs), a successful compromise provides attackers with an efficient path to breach downstream managed client systems. The threat actors are already leveraging the platform's Take Control feature to access endpoints and deploying Cloudflare Tunnel (cloudflared) to maintain persistent remote access. CVE-2026-18577 affects all versions of N-able N-central up to and including version 2026.3.1 prior to Hotfix 1. The vulnerability resulted from an incomplete fix for a previous authentication bypass issue (CVE-2026-18556), and on-premise deployments require immediate manual remediation by upgrading to version 2026.3.1.1.7.

rss · Rapid7 Cybersecurity Blog · Aug 4, 11:11

**Background**: N-able N-central is a heavyweight Remote Monitoring and Management (RMM) tool used by IT service providers to centrally monitor and manage large fleets of customer devices and servers. These platforms operate with deep automation and elevated administrative privileges across multiple customer environments, making them highly lucrative targets for threat actors. CVE-2026-18556 was an earlier, high-severity authentication bypass vulnerability affecting N-central through version 2026.1, which the latest exploit manages to circumvent.

<details><summary>References</summary>
<ul>
<li><a href="https://nvd.nist.gov/vuln/detail/cve-2026-18556">NVD - cve-2026-18556</a></li>
<li><a href="https://docs.blinkops.com/docs/integrations/n-able-n-central">N - able N - Central - BlinkOps Documentation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Authentication Bypass</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-3"></a>

## [Palo Alto's NOVA AI Discovers 14,000+ Zero-Day Vulnerabilities in Open-Source Software](https://unit42.paloaltonetworks.com/frontier-ai-vulnerability-burst/) ⭐️ 9.0/10

Palo Alto Networks' Unit 42 has introduced NOVA, an AI-powered system that autonomously discovered over 14,000 previously unknown zero-day vulnerabilities across open-source software projects. This represents one of the largest-scale demonstrations of AI-driven vulnerability discovery to date, showcasing the industrialization of what was traditionally a manual and labor-intensive security research process. This breakthrough signals a fundamental shift in cybersecurity, where AI systems can now discover vulnerabilities at industrial scale, potentially outpacing the ability of organizations to patch them. The finding has profound implications for the entire software supply chain, as many of these vulnerable open-source components are embedded in critical infrastructure and enterprise applications worldwide. NOVA's discovery of 14,000+ vulnerabilities demonstrates unprecedented scale in autonomous vulnerability discovery, though specific details about the severity of these vulnerabilities, affected projects, and remediation timelines have not been fully disclosed. The system appears to leverage frontier AI capabilities to analyze code patterns and identify potential security flaws that traditional scanning tools might miss.

rss · Unit 42 · Aug 4, 13:00

**Background**: Zero-day vulnerabilities are security flaws in software that are unknown to the vendor and for which no patch exists, making them particularly dangerous as they can be exploited by attackers before defenders are aware of the issue. Open-source software forms the backbone of modern digital infrastructure, with components like libraries, frameworks, and tools being widely reused across applications—meaning a single vulnerability can have cascading effects across thousands of dependent projects. Traditional vulnerability discovery has relied on manual code review, fuzzing, and security researchers' expertise, making it a slow and resource-intensive process. The emergence of AI-powered systems like NOVA represents a new era where autonomous agents can rapidly analyze vast codebases to identify potential security issues at scale.

<details><summary>References</summary>
<ul>
<li><a href="https://www.akamai.com/solutions/frontier-ai-security-risks">Frontier AI Security Risks & Practical Defense Strategies | Akamai</a></li>
<li><a href="https://www.ey.com/en_gl/insights/consulting/how-can-you-redefine-resilience-for-the-next-frontier-of-vulnerabilities">Cybersecurity resilience for frontier AI vulnerabilities | EY - Global</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">vulnerability discovery</span> <span class="tag-badge">zero-day</span> <span class="tag-badge">open-source</span> <span class="tag-badge">automated security</span></p>

---

<a id="item-4"></a>

## [Google Builds $200B Wall Street Financing Machine for Anthropic](https://www.ft.com/content/549f2e23-5aa2-49c7-9ea6-a9784ab7087c) ⭐️ 9.0/10

Google has quietly assembled one of the largest infrastructure financing structures in history, totaling approximately $200 billion, to fund Anthropic's massive AI chip and compute purchases. In June 2025, a special purpose vehicle called "Compute SPV" completed its first transactions, acquiring about $35 billion in hardware—roughly 1 gigawatt of compute capacity and 1 million TPU chips. This unprecedented off-balance-sheet financing model—borrowed from the aviation industry's vendor financing playbook pioneered by Boeing and GE—represents a paradigm shift in how AI infrastructure is funded. It allows multiple parties to share the enormous capital risk of AI hardware without burdening any single company's balance sheet, potentially reshaping how the AI compute arms race is financed across the entire industry. Approximately 80% of the ~$200 billion in contracts are directly tied to chips, with participants including Broadcom, Apollo, Blackstone, Morgan Stanley, and several crypto mining companies. Because Anthropic lacks a credit rating, risk is distributed: Google guarantees data centers, Broadcom purchases and helps finance chips, while Apollo and Blackstone provide capital to buy hardware and lease it back to Anthropic.

telegram · zaihuapd · Aug 4, 10:52

**Background**: TPU (Tensor Processing Unit) is Google's custom application-specific integrated circuit designed specifically for neural network machine learning tasks, optimized for fast tensor and matrix operations. A Special Purpose Vehicle (SPV) is a legal entity created to isolate financial risk, commonly used in asset securitization to separate specific assets from the originator's balance sheet. Anthropic is a San Francisco-based AI public benefit corporation founded in 2021 by former OpenAI members, known for its Claude large language models. The vendor financing model used here mirrors how Boeing and GE historically sold aircraft and engines—financing massive capital purchases through third-party structures rather than direct ownership.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Tensor_Processing_Unit">Tensor Processing Unit - Wikipedia</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/1937092244185261642">一文全解特殊目的载体(SPV)，资产证券化破产隔离的法律性质和实际问题</a></li>
<li><a href="https://en.wikipedia.org/wiki/Anthropic_AI_PBC">Anthropic AI PBC</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">谷歌</span> <span class="tag-badge">表外融资</span> <span class="tag-badge">算力</span></p>

---

<a id="item-5"></a>

## [China's First Mandatory L3/L4 Autonomous Driving Standard Submitted, Effective 2027](https://t.me/zaihuapd/42972) ⭐️ 9.0/10

China's Ministry of Industry and Information Technology (MIIT) has finalized the draft for the country's first mandatory national standard for L3/L4 autonomous driving systems, set to take effect on July 1, 2027. The regulation introduces a "Safety Case" mechanism that requires automakers to systematically prove the safety of their systems using a "claim-argument-evidence" framework. This marks a critical regulatory shift for the Chinese autonomous vehicle industry, transitioning from loose conceptual definitions to hard safety constraints. It will profoundly impact automakers and system developers by curbing exaggerated marketing claims and establishing a strict, standardized benchmark for the commercialization of self-driving technologies. The standard sets specific requirements for human-machine handover processes in L3 systems and autonomous risk minimization capabilities for L4 systems. It emphasizes strict control over the Operational Design Domain (ODD) to ensure that takeover requests and dynamic driving tasks are managed safely.

telegram · zaihuapd · Aug 4, 13:06

**Background**: Autonomous driving levels are defined by SAE International, where L3 (Conditional Automation) allows the vehicle to handle all driving tasks under certain conditions but requires a human driver to take over when prompted. L4 (High Automation) can operate without human intervention within a specific Operational Design Domain (ODD). Previously, China lacked a unified mandatory safety standard for these advanced levels, leading automakers to frequently use ambiguous terms like "L2+" for marketing.

<details><summary>References</summary>
<ul>
<li><a href="https://www.i-newcar.com/index.php?m=home&c=View&a=index&aid=1821">L3自动驾驶冗余模式和设计纲要_牛喀网-具身智能开发者生态</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Autonomous Vehicles</span> <span class="tag-badge">Regulation</span> <span class="tag-badge">Automotive Industry</span> <span class="tag-badge">L3/L4 Automation</span> <span class="tag-badge">China</span></p>

---

<a id="item-6"></a>

## [DeepSeek V4 Flash Runs Efficiently on a Single AMD MI300X GPU](https://github.com/ryanzhou/deepseek-v4-flash-mi300x) ⭐️ 8.0/10

A GitHub repository demonstrates how to run the massive DeepSeek V4 Flash model natively on a single AMD MI300X GPU, achieving over 150 tokens per second. To fit within the hardware constraints, the context window is reduced from the model's native 1 million tokens to 256k. This achievement proves that very large Mixture-of-Experts models can be practically deployed on single high-memory enterprise accelerators without compromising native inference weights or relying on extreme quantization. It highlights the viability of AMD's hardware ecosystem for handling cutting-edge AI workloads that were previously thought to require multi-GPU clusters. The DeepSeek V4 Flash model features 284 billion total parameters with 13 billion activated parameters, utilizing native MXFP4 quantization to fit within the MI300X's 192GB of HBM3 memory. The primary technical trade-off for achieving high throughput on a single GPU is significantly reducing the context length from 1M to 256k tokens.

hackernews · zhoutong · Aug 4, 10:00 · [Discussion](https://news.ycombinator.com/item?id=49166386)

**Background**: DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts (MoE) language model that selectively activates only a fraction of its parameters during inference to save compute. The AMD Instinct MI300X is a high-performance data center GPU notable for its massive 192 GB of HBM3 memory, which is crucial for accommodating the large weight files of modern LLMs. Running models of this scale on single GPUs often involves careful trade-offs between quantization precision, context length, and inference speed due to memory capacity and bandwidth limits.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek-ai/DeepSeek-V4-Flash · Hugging Face</a></li>
<li><a href="https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html">AMD Instinct™ MI300X Accelerators</a></li>
<li><a href="https://bitfern.com/blog/context-windows/">LLM Context Windows Explained: Limits, Tokens, and Memory</a></li>

</ul>
</details>

**Discussion**: Commenters discussed the accessibility of the hardware, noting that the MI300X is an OAM module typically sold in expensive 8-GPU configurations, whereas the PCIe-based MI350P might be more practical for individuals despite having less memory. Others pointed out alternative projects like DwarfStar and Doubleword's work on 2x MI300X setups, while praising the practical trade-off of reducing context window size to maintain inference speed and native weights.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">AMD MI300X</span> <span class="tag-badge">AI Inference</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">DeepSeek</span></p>

---

<a id="item-7"></a>

## [Harness Engineering: The New Frontier for AI Agent Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/) ⭐️ 8.0/10

Lilian Weng's new article argues that the focus for improving AI capabilities is shifting from scaling model weights to "harness engineering"—the optimization of prompts, tools, and surrounding frameworks. This approach treats the harness as the primary lever for driving AI self-improvement and autonomous agent performance. As pre-training massive models yields diminishing returns and soaring costs, optimizing the agent's operating environment offers a highly efficient, practical path to better AI outputs. This shift fundamentally changes how software engineers and AI practitioners build systems, placing greater emphasis on system design and contextual scaffolding than raw compute. The "harness" comprises several feedforward controls, including system prompts, tool descriptions, context management, and subagent delegation mechanisms that guide the model's behavior. Practitioners are actively exploring ways to create reliable "fitness functions" for complex tasks like codebases, allowing agents to iteratively self-correct and optimize their own operating frameworks using methods like hill-climbing experiments.

hackernews · tosh · Aug 4, 06:17 · [Discussion](https://news.ycombinator.com/item?id=49164896)

**Background**: In the context of AI agents, a "harness" or "scaffold" refers to the structured operating environment that surrounds a foundational language model. While the underlying model contains the raw intelligence (weights), the harness dictates how that intelligence is applied—defining which tools the agent can use, how it parses information, and how it validates its decisions. Harness engineering formalizes the design of this execution environment to ensure the agent can perform useful work reliably, repeatably, and safely.

<details><summary>References</summary>
<ul>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness">The Anatomy of an Agent Harness</a></li>
<li><a href="https://milvus.io/blog/harness-engineering-ai-agents.md">What Is Harness Engineering for AI Agents? | Milvus - Milvus Blog</a></li>
<li><a href="https://martinfowler.com/articles/harness-engineering.html">Harness engineering for coding agent users</a></li>

</ul>
</details>

**Discussion**: The community strongly resonates with the shift from weight training to harness and prompt optimization, with one commenter noting that causal theories in prompts might be more sample-efficient. Developers are actively sharing practical implementations, such as using "hillclimb experiments" and developing "fitness functions" for codebases to let agents optimize their own tools, while others humorously warn of the pursuit of the "Torment Nexus."

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Harness Engineering</span> <span class="tag-badge">Prompt Engineering</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-8"></a>

## [Cisco Talos Exposes How Adversaries Weaponize AI Coding Agents](https://blog.talosintelligence.com/keep-going-bro-youve-got-this-a-data-driven-look-at-how-adversaries-are-weaponizing-ai/) ⭐️ 8.0/10

Cisco Talos released a data-driven analysis of prompt logs extracted from threat actor endpoints, revealing exactly how adversaries are abusing cloud-based AI tools. The report specifically examines malicious usage of popular AI coding agents and applications like Claude Code, Cursor, and Gemini. This research provides rare empirical evidence of how cybercriminals are actively integrating large language models into their attack workflows, moving beyond theoretical AI security risks. It highlights a critical new attack surface where compromised developer credentials can be leveraged to weaponize AI agents for malicious code generation and task automation. The analysis is unique because it relies on actual prompt logs found on compromised endpoints running tools like Claude Code, CodeX, Cursor, or Gemini. By examining these prompts, Talos deciphers the specific natural language instructions adversaries use to manipulate AI models into performing malicious activities.

rss · Cisco Talos Blog · Aug 4, 10:00

**Background**: Cisco Talos is a premier threat intelligence research organization operating within Cisco Systems, dedicated to providing comprehensive cybersecurity analysis and vulnerability research. The AI tools mentioned, such as Cursor and Claude Code, are advanced agentic coding environments that can autonomously edit files, execute terminal commands, and search codebases based on natural language prompts. While these cloud-based AI applications dramatically improve software development efficiency, their broad system access also creates significant security implications if they fall into the hands of malicious actors.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cisco_Talos">Cisco Talos - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Cisco Talos</span></p>

---

<a id="item-9"></a>

## [Elastic Shares Custom LLM Benchmarking Framework for Agentic SOC Workflows](https://www.elastic.co/security-labs/llm-benchmarking-agentic-soc) ⭐️ 8.0/10

Elastic Security Labs published a custom evaluation framework for benchmarking LLMs specifically within Security Operations Center workflows, moving beyond public leaderboards to grade models on real operational output. The framework evaluates models across three Elastic products—Agent Builder, Attack Discovery, and automatic migration—using tool calls, execution traces, and blind judging as core assessment criteria. Public LLM leaderboards do not reflect the specialized demands of security workflows, leaving SOC teams without trustworthy guidance for model selection. This framework fills a critical industry gap by establishing a methodology for evaluating LLMs on security-specific agentic tasks, potentially setting a benchmark standard for security AI evaluation across the industry. The framework grades models on three dimensions: tool calls (whether the correct tools are invoked correctly), execution traces (the complete reasoning-to-action pathway), and blind judging (output quality assessed without model identity to eliminate brand bias). Benchmarks are applied across Agent Builder for custom agent creation, Attack Discovery for alert triage and threat investigation, and automatic migration for security rule and configuration translation.

rss · Elastic Security Labs · Aug 4, 23:59

**Background**: An Agentic SOC (Agentic Security Operations Center) is an advanced operating model that integrates autonomous AI agents to dynamically perform alert triage, investigation, context enrichment, reasoning, and response actions—shifting security from reactive incident handling to proactive threat anticipation. Elastic's Agent Builder is an AI conversational platform for creating agents that operate over Elasticsearch data using natural language, while Attack Discovery leverages Elasticsearch's hybrid search capabilities to rank and contextualize alert details for LLM-driven analysis. Together, these tools represent the agentic SOC vision where AI agents handle complex, multi-step security workflows end-to-end.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Agentic_SOC">Agentic SOC</a></li>
<li><a href="https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder">Elastic Agent Builder</a></li>
<li><a href="https://www.elastic.co/docs/solutions/security/ai/attack-discovery">Attack Discovery | Elastic Docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">security</span> <span class="tag-badge">SOC</span> <span class="tag-badge">evaluation</span> <span class="tag-badge">benchmarking</span></p>

---

<a id="item-10"></a>

## [Elastic Built an AI Agent for HackerOne Bug Report Triage](https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone) ⭐️ 8.0/10

Elastic Security Labs introduced an AI triage agent capable of processing HackerOne bug bounty reports for just $2 each. The system achieves an 85% accuracy rate compared to human analysts and was calibrated using 3,300 real historical reports. The proliferation of LLMs has made it cheap for malicious actors to flood bug bounty programs with automated, low-quality submissions, overwhelming human defenders. This development represents an 'agents vs. agents' approach, providing a scalable defense mechanism to maintain the efficiency and integrity of crowdsourced security programs. Elastic shared the comprehensive architecture of the agent, including its threat model and calibration methodology against real-world data. The system is specifically designed to distinguish between actionable security vulnerabilities and noise generated by automated tools or spam.

rss · Elastic Security Labs · Aug 4, 00:00

**Background**: HackerOne is a platform that connects organizations with ethical hackers to find and fix security vulnerabilities before they are exploited criminally. 'Triage' in this context refers to the process of reviewing incoming bug reports to determine if they are valid, unique, and worthy of a financial bounty. Recently, security teams have faced a growing volume of AI-generated spam reports, necessitating automated vulnerability triage solutions to filter out the noise.

<details><summary>References</summary>
<ul>
<li><a href="https://hackerone.com/security">HackerOne - Bug Bounty Program | HackerOne</a></li>
<li><a href="https://www.pixee.ai/triage-automation">Vulnerability Triage Automation : 98% False Positive Reduction | Pixee</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">vulnerability triage</span> <span class="tag-badge">LLM agents</span> <span class="tag-badge">bug bounty</span> <span class="tag-badge">security automation</span></p>

---

<a id="item-11"></a>

## [Zhuque Lab Exposes Memory Heist Threats and Releases AI-Infra-Guard Scanner](https://security.tencent.com/index.php/blog/msg/225) ⭐️ 8.0/10

Tencent's Zhuque Lab published a detailed analysis of the "Memory Heist" attack chain targeting AI Agent memory systems, demonstrating how prompt injection can be chained with agent features to exfiltrate personal data. Alongside the analysis, they introduced an automated security scanning module (agent-scan) within the AI-Infra-Guard (A.I.G) tool to actively detect such vulnerabilities. As AI Agents increasingly rely on persistent memory to deliver personalized experiences, these memory banks become high-value targets for data exfiltration. Exposing the Memory Heist methodology and providing a dedicated detection tool highlights critical blind spots in current AI infrastructure, pushing the industry to secure agent-tool interactions. The Memory Heist vulnerability specifically exploits the combination of an agent's memory feature and its ability to fetch external web content, allowing attackers to silently extract sensitive user data through prompt injections. The newly released agent-scan module within AI-Infra-Guard serves as a red-teaming tool to comprehensively assess agent attack surfaces including infrastructure, protocols, and agent behaviors.

rss · 腾讯安全响应中心 · Aug 4, 14:25

**Background**: AI Agents often use persistent memory systems to store user preferences, past interactions, and personal information, enabling highly contextual and personalized responses over time. However, when these agents are also given tools to interact with the external web, malicious actors can use indirect prompt injections to trick the agent. This causes the agent to inadvertently access its own memory and leak the stored private data to attacker-controlled servers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ayush.digital/blog/the-memory-heist">The Memory Heist | Ayush Paul</a></li>
<li><a href="https://github.com/Tencent/AI-Infra-Guard">GitHub - Tencent/AI-Infra-Guard: A full-stack AI Red Teaming ...</a></li>
<li><a href="https://arxiv.org/html/2606.31227v1">AI-Infra-Guard Technical Report - arXiv.org</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Memory Heist</span> <span class="tag-badge">Vulnerability Analysis</span> <span class="tag-badge">Penetration Testing</span></p>

---

<a id="item-12"></a>

## [How Legitimate Cloud Platforms Enable AitM Phishing to Bypass MFA](https://securelist.com/cloud-platforms-in-phishing/120832/) ⭐️ 8.0/10

The article provides a technical deep-dive into how attackers abuse legitimate cloud platforms—including Cloudflare Workers, Vercel, Netlify, GitHub Pages, and IPFS—to host Adversary-in-the-Middle (AitM) phishing campaigns. It details the use of service workers and the Ultraviolet reverse proxy tool to intercept credentials and bypass multi-factor authentication in real time, along with hosting statistics across these platforms. This analysis highlights a dangerous trend where attackers weaponize trusted, widely-used cloud infrastructure to make phishing pages appear legitimate to both users and security filters. By successfully bypassing MFA—considered one of the most effective defenses against credential theft—these AitM campaigns pose a severe threat to organizational security and erode confidence in cloud-hosted content. The attack leverages Ultraviolet, a sophisticated web proxy that intercepts HTTP requests via a service worker script following the TompHTTP specifications, effectively acting as a reverse proxy between the victim and the legitimate authentication service. This setup allows attackers to capture passwords and MFA tokens (such as TOTPs) in real time, replay them to the genuine service, and ultimately steal session cookies for persistent access.

rss · Kaspersky  - Information about Viruses， Hackers and Spam · Aug 4, 12:00

**Background**: Adversary-in-the-Middle (AitM) phishing is an evolution of traditional Man-in-the-Middle attacks, where an attacker positions themselves between a user and a legitimate website to intercept and manipulate communications in real time. Ultraviolet was originally designed as an advanced web proxy for evading internet censorship, using service workers to intercept and rewrite HTTP requests on the client side. IPFS (InterPlanetary File System) is a peer-to-peer hypermedia protocol that uses a distributed hash table for data storage, making content difficult to take down because it is distributed across many nodes rather than hosted on a single centralized server.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Rvrbss/Ultraviolet">GitHub - Rvrbss/Ultraviolet: Highly sophisticated proxy used ...</a></li>
<li><a href="https://attack.mitre.org/techniques/T1557/">Adversary - in - the - Middle , Technique T1557... | MITRE ATT&CK</a></li>
<li><a href="https://en.wikipedia.org/wiki/InterPlanetary_File_System">InterPlanetary File System - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Phishing</span> <span class="tag-badge">Cloud Security</span> <span class="tag-badge">MFA Bypass</span> <span class="tag-badge">Adversary-in-the-Middle</span></p>

---

<a id="item-13"></a>

## [Huawei Proposes 'Tau Scaling Law' to Advance Beyond Moore's Law](https://t.me/zaihuapd/42966) ⭐️ 8.0/10

At the 2026 IEEE International Symposium on Circuits and Systems (ISCAS), Huawei introduced the 'Tau Scaling Law,' proposing a shift from 'geometric scaling' to 'time scaling' to optimize semiconductor performance. The company revealed it has designed 381 chips based on this principle over the past six years and will release a new Kirin chip utilizing 'logic folding' technology this autumn. This strategic shift provides a potential pathway to circumvent the physical limitations of Moore's Law and mitigate the impact of manufacturing process restrictions. By focusing on system-level time-domain optimization rather than just shrinking transistor size, Huawei aims to achieve advanced performance levels, targeting an equivalent 1.4nm process density by 2031. The Tau Law focuses on reducing the time constant (τ) to achieve multi-level synergistic optimization from devices to entire systems. The key implementation technology, 'logic folding,' is a 3D integration technique designed to compress signal propagation delay and improve density without relying solely on cutting-edge lithography.

telegram · zaihuapd · Aug 4, 08:04

**Background**: Moore's Law has historically driven semiconductor progress through 'geometric scaling,' which involves shrinking transistor sizes on silicon wafers to increase density. As transistors approach atomic scales, this method faces severe physical and economic barriers, such as heat dissipation and quantum tunneling effects. The 'Tau Scaling Law' (named after the Greek letter τ representing the time constant) shifts the optimization focus from spatial dimensions to the time domain. This approach leverages advanced packaging and 3D architectures to stack components vertically, improving performance without needing smaller individual transistors.

<details><summary>References</summary>
<ul>
<li><a href="https://www.huawei.com/en/news/2026/5/ieee-iscas-tau-scaling">HUAWEI Presents the Tau (τ) Scaling Law, Enabling ...</a></li>
<li><a href="https://www.yicaiglobal.com/news/huawei-presents-tau-law-to-replace-geometric-scaling-with-time-scaling-in-semiconductor-industry">Huawei Proposes Tau Scaling Law to Replace Moore’s Law in ...</a></li>
<li><a href="https://www.ithome.com/0/955/623.htm">华为“韬定律”逻辑折叠芯片设计公布，北大团队火速官宣“真 3D”EDA 工具...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Moore's Law</span> <span class="tag-badge">Chip Design</span> <span class="tag-badge">Kirin</span></p>

---

<a id="item-14"></a>

## [Cloudflare Replaces Third-Party Security Tools with AI Agents, Slashing Bounty Triage Costs](https://www.theregister.com/security/2026/08/04/cloudflare-has-mostly-ditched-third-party-security-tools-suggests-not-trying-that-at-home/5282600) ⭐️ 8.0/10

Cloudflare has built over 200 autonomous security agents and largely replaced all third-party security tools with in-house, AI-assisted applications. The company now uses Anthropic's Claude Sonnet model to automate vulnerability bounty report deduplication and valuation for just $58 per month, compared to approximately $200,000 monthly if using the security-specialized Mythos model. This represents a striking real-world demonstration of how AI-driven automation can dramatically reduce enterprise security operational costs while reshaping vendor-customer relationships. Cloudflare also attributed its recent layoff of 1,100 employees to AI-driven automation, signaling a broader industry trend of workforce displacement driven by AI adoption. CSO Grant Bourzikas explicitly cautioned other enterprises against replicating Cloudflare's approach, stating that Cloudflare possesses unique in-house security software development capabilities and that not every bank should build all its own software. Chief Strategy Officer Stephanie Cohen also revealed plans for Cloudflare to act as an intermediary between AI companies and publishers, enabling micropayments for content access.

telegram · zaihuapd · Aug 4, 09:24

**Background**: Vulnerability bounty programs are crowdsourced security initiatives where organizations pay independent researchers for discovering and reporting security flaws. The triage process — reviewing, deduplicating, and assessing the value of submitted reports — is traditionally labor-intensive and costly. Mythos is Anthropic's specialized cybersecurity model launched in 2026, recognized for top-tier security capabilities including autonomous zero-day vulnerability discovery, but it carries a significantly higher operational cost compared to general-purpose models like Claude Sonnet.

<details><summary>References</summary>
<ul>
<li><a href="https://news.qq.com/rain/a/20260611A000PV00">Mythos模型深度解析：技术跃迁、安全革命与战略博弈</a></li>
<li><a href="https://www.gm7.org/archives/97967">谷歌 重 构 漏 洞 赏 金 计划：人工智能时代下安卓 赏 金 上调、Chrome...</a></li>
<li><a href="https://www.cnblogs.com/AmazonwebService/p/19868909">深度分析：Claude Mythos Preview —— Anthropic 网络安全专用模型的架...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Automation</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-15"></a>

## [U.S. FCC Bans Import of New Chinese Humanoid Robots and Connected Power Inverters](https://t.me/zaihuapd/42970) ⭐️ 8.0/10

On July 28, the U.S. Federal Communications Commission (FCC) announced an immediate ban on importing new humanoid robots, quadruped robots, and connected power inverters from China. The measure applies only to models not yet introduced to the U.S. market, though the FCC retains the authority to revoke existing authorizations for products already approved for sale. This move is a significant escalation in U.S.-China tech decoupling, targeting both the fast-growing robotics sector and critical energy infrastructure components. It directly impacts Chinese manufacturers looking to enter the U.S. market and signals broadening national security scrutiny beyond semiconductors and telecommunications into AI-driven robotics and smart grid equipment. The ban took effect immediately upon publication and covers only new, not-yet-released models of the specified product categories. FCC is expected to grant waivers to many non-Chinese suppliers, but the agency explicitly reserves the right to revoke existing product authorizations if deemed necessary.

telegram · zaihuapd · Aug 4, 11:29

**Background**: Connected power inverters are critical components in solar power systems that convert direct current (DC) generated by solar panels into alternating current (AC) synchronized with the public grid frequency and phase. China dominates the global inverter market, with an estimated 2025 photovoltaic inverter shipment of approximately 357.8 GW, representing a 16.2% year-over-year increase. Humanoid and quadruped robots are part of the rapidly advancing field of service and industrial robotics, where Chinese companies such as Unitree and AGIBOT have become globally competitive. These devices typically incorporate sensors, cameras, and network connectivity that can collect environmental data, which has raised national security concerns in the U.S. about potential data theft and cyberattack vectors.

<details><summary>References</summary>
<ul>
<li><a href="https://www.afzhan.com/news/detail/110922.html">从电能转换到电网支撑 中国联网电力逆变器产业迈入价值竞争新阶段_逆...</a></li>
<li><a href="https://www.gkzhan.com/news/detail/193960.html">从电能转换到电网支撑 中国联网电力逆变器产业迈入价值竞争新阶段_逆...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Robotics</span> <span class="tag-badge">Regulation</span> <span class="tag-badge">Trade War</span> <span class="tag-badge">AI Policy</span></p>

---

<a id="item-16"></a>

## [US-China Tensions Rise Over Anthropic's Mythos AI Model Before September Summit](https://www.bloomberg.com/news/articles/2026-08-03/china-is-getting-more-anxious-about-mythos-before-trump-meets-xi) ⭐️ 8.0/10

As a high-level US-China summit approaches in September, artificial intelligence has emerged as a critical geopolitical battleground. Specifically, the Chinese government is reportedly growing increasingly anxious and suspicious regarding Anthropic's advanced 'Mythos' model, although neither side currently intends to immediately escalate the confrontation. The entanglement of advanced AI models like Mythos in international diplomacy underscores the escalating national security risks associated with frontier technologies. The friction surrounding this model's capabilities could heavily influence future global AI regulations, technology export controls, and the strategic balance of power between superpowers. Anthropic currently restricts access to the Mythos model, providing it only to a vetted group of customers through trusted access programs due to its highly capable dual-use nature. The model possesses unprecedented speed and scale in executing functions, notably compressing weeks of complex hacking efforts into mere hours.

telegram · Marcoview666 · Aug 4, 01:21

**Background**: Anthropic is a prominent AI safety and research company, and 'Mythos' refers to their highly advanced frontier AI model series known for dual-use capabilities in cybersecurity and biology. The model has demonstrated exceptional offensive security traits, such as turning a browser crash into a working computer exploit, alarming global institutions like banks and governments. As AI models achieve these disruptive capabilities, they naturally intersect with the broader geopolitical rivalry between the US and China over technological supremacy.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/mythos">Claude Mythos \ Anthropic</a></li>
<li><a href="https://www.lesswrong.com/posts/MJs3qetvR7Y3zDKqy/anthropic-is-really-pushing-the-frontier-what-do-i-think">Anthropic is Really Pushing the Frontier, What do... — LessWrong</a></li>
<li><a href="https://www.linkedin.com/pulse/straight-talking-mystery-anthropic-mythos-cause-concern-williams-3tmue">Straight Talking The mystery of Anthropic Mythos - cause to celebrate...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">US-China Relations</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Policy</span></p>

---

<a id="item-17"></a>

## [5-Hour Interview with Huawei's Chief Semiconductor Scientist on Ascend Chips](https://www.bilibili.com/video/av116980698843032?p=1) ⭐️ 8.0/10

A comprehensive 5-hour full-version interview with Dr. Liao Heng, Huawei's Chief Semiconductor Scientist and Fellow, has been released. In this deep dive, he shares the historical journey of Huawei's Ascend AI chips since 2020, the 30-year epic of the global semiconductor industry, and introduces his novel "18-story pagoda" theory for the semiconductor supply chain. This interview provides a rare, first-hand strategic and technical perspective from a top executive at Huawei regarding its AI chip development and the broader semiconductor landscape. It offers critical insights into how Huawei is positioning its Ascend ecosystem to challenge global monopolies like NVIDIA's CUDA, making it highly relevant for understanding the future of AI hardware. Dr. Liao introduces the "18-story pagoda" concept as a systematic expression of chip competition in the post-Moore's Law era, highlighting the need for balance between vertical synergy and open ecosystems. The discussion also explores Huawei's computational architecture, the impact of DeepSeek on the Ascend ecosystem, and addresses talent and power constraints in AI hardware.

telegram · Marcoview666 · Aug 4, 08:10

**Background**: Huawei's Ascend AI chips serve as the core of its strategy to build a domestic AI compute infrastructure, especially following US sanctions in 2020. The ecosystem relies on its Compute Architecture for Neural Networks (CANN), which recently went open-source to challenge NVIDIA's CUDA dominance. Dr. Liao Heng is a Huawei Fellow who entered Tsinghua University's gifted program at age 14 and later conducted postdoctoral research at Princeton.

<details><summary>References</summary>
<ul>
<li><a href="https://www.eet-china.com/mp/a514555.html">华为半导体首席科学家廖恒罕见公开露面，首次提出芯片“18层宝塔”理论</a></li>
<li><a href="https://t.cj.sina.com.cn/articles/view/1432418975/5560fa9f00101ugkw">如何理解华为半导体的“18层宝塔”__财经头条__新浪财经</a></li>
<li><a href="https://docs.onethingai.com/9bc2e/9c378">华 为 宣布 CANN 全面开源开放： 昇 腾 生态重塑全球 AI 算力竞争格局</a></li>

</ul>
</details>

**Discussion**: The video has garnered massive engagement with over 890,000 views and 4,000+ comments, indicating exceptional community interest. Viewers are highly engaged by the deep technical insights and the historical narrative, with many finding inspiration in Dr. Liao's humble framing of this monumental journey as "just an engineer's story."

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">AI Chips</span> <span class="tag-badge">Ascend</span> <span class="tag-badge">Deep Dive</span></p>

---

<a id="item-18"></a>

## [Trump Administration Drafting FCC Ban on Chinese Data Center Optical Modules](https://www.reuters.com/world/trump-administration-drafting-ban-chinese-data-center-devices-sources-say-2026-08-04/) ⭐️ 8.0/10

The Trump administration is drafting new rules through the U.S. Federal Communications Commission (FCC) that would ban the import of Chinese-made optical modules for data centers, with plans for implementation later this year. The proposed restrictions could still face modifications or potential shelving before final approval. This potential ban could severely disrupt the global AI hardware supply chain, directly impacting leading Chinese manufacturers like Zhongji Innolight (which holds 27% global market share) while forcing U.S. cloud providers to seek alternative suppliers at significantly higher costs. The restrictions highlight growing geopolitical tensions in critical technology infrastructure and could slow the cost-effective expansion of AI data centers globally. While U.S. manufacturers like Lumentum and Coherent saw immediate stock price increases following the news, their production capacity remains insufficient to fully replace Chinese suppliers. There are notable internal divisions within the U.S. government, as the Commerce Department has recently eased some tech restrictions while the FCC continues to escalate limitations on Chinese equipment including drones, routers, and inverters.

telegram · Marcoview666 · Aug 4, 15:02

**Background**: Optical modules are critical hardware components that enable high-speed data transmission within data center networks, converting electrical signals to optical signals for fiber optic communication. As AI infrastructure demands faster data processing, advanced optical transceivers (such as 400G and 800G modules) have become essential for connecting AI hardware components and supporting hyperscale computing environments. Chinese manufacturers have established dominant positions in this market through cost-effective production and technological advancement, making them integral to the global cloud computing and AI hardware ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://resources.l-p.com/knowledge-center/optical-modules-cloud-computing-fast-reliable-scalable-data/">The Critical Role of Optical Transceivers in Cloud Computing</a></li>
<li><a href="https://www.linkedin.com/pulse/what-optical-transceiver-ai-uses-how-works-top-companies-bwdsc">What is Optical Transceiver For AI ? Uses, How It Works & Top...</a></li>
<li><a href="https://www.optcore.net/">Optical Connectivity for AI Infrastructure, Data Center... | Optcore</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Data Center</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Policy</span></p>

---