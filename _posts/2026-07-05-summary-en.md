---
layout: default
title: "Horizon Summary: 2026-07-05 (EN)"
date: 2026-07-05
lang: en
---

> From 51 items, 8 important content pieces were selected

---

1. [F-Droid Warns Google's New ADV System Is Unremovable Malware](#item-1) ⭐️ 9.0/10
2. [Box2D Creator Releases Box3D Open-Source 3D Physics Engine](#item-2) ⭐️ 9.0/10
3. [Shadcn/UI Switches Default Foundation from Radix to Base UI](#item-3) ⭐️ 8.0/10
4. [LLM Training Shifts from Reasoning Thinking to Agentic Thinking](#item-4) ⭐️ 8.0/10
5. [Hong Kong Handles Over Half of China's Chip Imports, Reaching Record High](#item-5) ⭐️ 8.0/10
6. [SpaceX Shows Prototype Smartphone to Investors](#item-6) ⭐️ 8.0/10
7. [GitHub Repo Collects Leaked System Prompts from Major AI Tools](#item-7) ⭐️ 8.0/10
8. [Chrome DevTools MCP: Official Tool for AI Coding Agents](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [F-Droid Warns Google's New ADV System Is Unremovable Malware](https://f-droid.org/2026/07/01/adv-malware.html) ⭐️ 9.0/10

Google is deploying an "Android Developer Verifier" (ADV) via Play Protect across approximately 4 billion Android devices as an unremovable system process with root privileges. Starting September 30, it will begin blocking apps not centrally approved by Google in select countries, with a global rollout planned for 2027. This fundamentally shifts Android from an open ecosystem towards a closed platform model, severely impacting user freedom and the ability to sideload apps. Over 70 digital rights organizations, including the EFF and FSF, have condemned the initiative, warning it gives Google unchecked power to unilaterally ban software and developers. F-Droid criticized Google for deliberately leaving "malware" undefined in its developer terms of service, allowing the company to arbitrarily classify unwanted apps, like ad blockers, as malicious. The initial activation on September 30 will target users in Brazil, Indonesia, Singapore, and Thailand on certified devices running Android 8 and up.

telegram · zaihuapd · Jul 5, 00:41

**Background**: Android Developer Verification is officially presented by Google as a new security layer designed to deter bad actors and ensure apps come from verified sources on certified Android devices. F-Droid is a popular alternative, community-run app repository for Android that allows users to easily install free and open-source software (FOSS). While Google markets Play Protect as an immune system for your phone, critics argue this new verification process compromises the foundational open nature of the operating system.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.android.com/developer-verification">Android developer verification | Android Developers</a></li>
<li><a href="https://support.google.com/android/answer/17065026?hl=en">Learn about Android developer verification - Android Help</a></li>
<li><a href="https://en.wikipedia.org/wiki/F-Droid">F-Droid - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The provided content highlights significant community backlash, noting that hundreds of thousands of people have signed petitions opposing the ADV rollout. Additionally, a coalition of over 70 organizations, including the EFF, FSF, and ACLU, has signed an open letter condemning Google's plan as an attack on digital rights.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Android</span> <span class="tag-badge">Google</span> <span class="tag-badge">F-Droid</span> <span class="tag-badge">Digital Rights</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-2"></a>

## [Box2D Creator Releases Box3D Open-Source 3D Physics Engine](https://github.com/erincatto/box3d) ⭐️ 9.0/10

Erin Catto, creator of the widely-used Box2D engine, has officially released Box3D, an open-source 3D physics engine for games written in C. The project is now publicly available on GitHub and can be thought of as a fork of Box2D extended with features necessary for 3D games. Given Erin Catto's track record with Box2D, which powered titles like Angry Birds and Limbo, Box3D has the potential to become a foundational library in the 3D game development ecosystem. It addresses frustrations developers face with existing engine-native physics solutions, such as those in Unreal Engine, and is already being adopted by some games and platforms. Box3D's codebase is partly derived from "Rubikon-Lite," an offshoot of the physics engine originally developed for Half-Life: Alyx. Development reportedly began due to limitations encountered with Unreal Engine's native physics, suggesting the engine is designed with practical production needs in mind.

ossinsight · erincatto · Jul 5, 20:00

**Background**: Box2D is a highly influential open-source 2D physics engine created by Erin Catto, written in C and released under the MIT license. It has been used in countless games across PC, console, and mobile platforms, including major hits like Angry Birds, Shovel Knight, and Noita. A physics engine simulates physical phenomena like gravity, collision, and object dynamics, allowing game worlds to behave realistically without requiring developers to hand-code every interaction.

<details><summary>References</summary>
<ul>
<li><a href="https://box2d.org/posts/2026/06/announcing-box3d/">Announcing Box3D :: Box2D</a></li>
<li><a href="https://www.phoronix.com/news/Box3D-Open-Source-3D-Physics">Box3D Debuts As New Open-Source 3D Physics Engine</a></li>
<li><a href="https://en.wikipedia.org/wiki/Box2D">Box2D</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---

<a id="item-3"></a>

## [Shadcn/UI Switches Default Foundation from Radix to Base UI](https://ui.shadcn.com/docs/changelog) ⭐️ 8.0/10

The popular React component library Shadcn/UI has officially updated its default base layer to use Base UI instead of Radix primitives. Additionally, the project is actively exploring the use of Large Language Models (LLMs) to assist users with code migration during upgrades. Because Shadcn/UI is widely adopted, this shift significantly elevates Base UI's status as a premier headless component library within the React ecosystem. Furthermore, relying on AI for code migration highlights an emerging industry trend of using LLMs to replace deterministic tools like codemods for complex codebase transformations. Base UI provides unstyled, accessible React components and low-level hooks that offer developers complete control over styling. However, the move towards LLM-based migration for a copy-paste component model raises concerns about predictability compared to the simple version increments typical of traditional package-managed libraries.

hackernews · dabinat · Jul 5, 04:46 · [Discussion](https://news.ycombinator.com/item?id=48791328)

**Background**: Shadcn/UI is a widely used React component library that operates on a "copy and paste" code distribution model rather than being installed as a traditional npm package. Historically, it relied heavily on Radix Primitives, an open-source library of unstyled, accessible UI components, to handle complex behaviors like modals and popovers. Base UI is a similar library of headless React components and hooks, developed by the MUI team, designed to be highly configurable for building accessible design systems.

<details><summary>References</summary>
<ul>
<li><a href="https://base-ui.com/">Unstyled UI components for accessible design systems · Base UI</a></li>
<li><a href="https://www.radix-ui.com/primitives">Radix Primitives</a></li>
<li><a href="https://ui.shadcn.com/">The Foundation for your Design System - shadcn/ui</a></li>

</ul>
</details>

**Discussion**: The community expresses mixed feelings about the copy-paste model, noting that while it offers easy modification, it complicates upgrades to the point where developers now need AI agents for what used to be a simple version bump. There is also notable criticism regarding the overuse of `<div>` elements instead of native HTML semantics across both Radix and Base UI. Finally, while some find the LLM-driven migration approach intriguing, others are put off by what they perceive as an AI-generated tone in the announcement.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Shadcn/UI</span> <span class="tag-badge">React</span> <span class="tag-badge">Base UI</span> <span class="tag-badge">Frontend</span> <span class="tag-badge">UI Components</span></p>

---

<a id="item-4"></a>

## [LLM Training Shifts from Reasoning Thinking to Agentic Thinking](https://arthurchiao.art/blog/from-reasoning-thinking-to-agentic-thinking-zh/) ⭐️ 8.0/10

A translated article from Junyang Lin (associated with Qwen) details a fundamental paradigm shift in LLM training moving from reasoning thinking—where models are trained to think longer—to agentic thinking, where models are trained to act within environments. This transitions the training focus from the model alone to the combined "Agent+Harness" system, and shifts the emphasis from data diversity to environment diversity. This shift represents a major inflection point in AI development, where models are no longer evaluated solely on their ability to reason through problems, but on their capacity to interact with and act upon real-world environments. It redefines how models will be trained, evaluated, and deployed, with reinforcement learning becoming a systematic engineering discipline rather than an optional step. The article reveals that Qwen's attempts to merge thinking and non-thinking modes into a single model failed due to conflicting data distributions and user behavior profiles, leading to a regression to separate Instruct and Thinking models. It emphasizes that generating longer reasoning traces does not automatically make models smarter, and that thinking should be determined by the target workload, not forced uniformly.

rss · ArthurChiao's Blog · Jul 5, 00:00

**Background**: "Reasoning thinking" refers to the paradigm popularized by models like OpenAI o1 and DeepSeek-R1, where models generate extended chain-of-thought reasoning before answering. An "Agent+Harness" architecture means an agent is composed of a raw LLM model plus a harness—the code, configuration, tool execution, state management, and feedback loops that enable the model to interact with external environments. This distinction is critical because in agentic systems, the harness engineering often matters more than model selection for production reliability.

<details><summary>References</summary>
<ul>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness">The Anatomy of an Agent Harness - langchain.com</a></li>
<li><a href="https://harness-engineering.ai/blog/agent-harness-complete-guide/">The Complete Guide to Agent Harness: What It Is and Why It Matters</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Agentic AI</span> <span class="tag-badge">Model Training</span> <span class="tag-badge">Reasoning</span> <span class="tag-badge">AI Paradigm Shift</span></p>

---

<a id="item-5"></a>

## [Hong Kong Handles Over Half of China's Chip Imports, Reaching Record High](https://thenextweb.com/news/hong-kong-china-ai-chip-trade-hub) ⭐️ 8.0/10

In the first five months of 2026, Hong Kong processed over half of China's semiconductor imports, with approximately $124 billion worth of chips re-exported to the mainland, accounting for 52% of China's total chip purchases during the same period. This represents a significant increase from just one-third a decade ago, marking a record high. This milestone solidifies Hong Kong's position as a critical transit hub for AI-related technology trade in Asia, highlighting a significant geopolitical and economic shift in the global semiconductor supply chain. Hong Kong's intermediary role amid escalating US-China tech tensions also exposes it to considerable geopolitical risks that could reshape the region's trade landscape. AI-related electronic products now account for 57% to 70% of Hong Kong's total exports, prompting the Hong Kong Trade Development Council to raise its 2026 export growth forecast to over 20%. Hong Kong's advantages stem from its free port status, zero tariffs, absence of capital controls, and a well-developed air cargo network that aligns well with the high-value, low-weight, and time-sensitive nature of semiconductors.

telegram · zaihuapd · Jul 5, 02:45

**Background**: Hong Kong has long served as a re-export hub connecting mainland China with global markets, leveraging its status as a free port with no tariffs and minimal trade restrictions. In recent years, as the US and its allies have tightened export controls on advanced semiconductors and AI chips to China, the role of intermediary trade hubs has become increasingly strategic. Semiconductors are critical components for AI development, data centers, and advanced manufacturing, making chip trade a focal point of US-China geopolitical competition.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Hong Kong</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">AI Trade</span></p>

---

<a id="item-6"></a>

## [SpaceX Shows Prototype Smartphone to Investors](https://www.wsj.com/tech/spacexs-telecom-dreams-d461e568) ⭐️ 8.0/10

SpaceX has reportedly demonstrated a prototype smartphone to investors, claiming it is thinner than an iPhone and runs on a proprietary operating system. President Gwynne Shotwell also revealed plans to potentially build a terrestrial mobile network or partner with cellular operators, with direct Starlink-to-mobile connectivity as a strategic priority. A SpaceX-built smartphone with its own OS would represent a dramatic expansion beyond rockets and satellite internet into consumer hardware and global telecommunications. This move could disrupt the entire mobile industry by combining satellite connectivity with custom hardware, potentially eliminating the need for traditional cellular infrastructure. The prototype was shown ahead of a potential IPO and is described as thinner than a current iPhone while running SpaceX's own operating system rather than Android or iOS. Shotwell indicated SpaceX is considering both building its own terrestrial network and partnering with existing cellular operators, suggesting a hybrid approach to coverage.

telegram · zaihuapd · Jul 5, 14:10

**Background**: Starlink currently provides satellite internet service primarily through dish terminals for home and remote area broadband. Its Direct-to-Cell technology, tested with partners like T-Mobile since 2024, allows standard smartphones to connect directly to low-Earth orbit satellites acting as orbiting cell towers, without hardware modifications. The direct-to-device satellite market is projected to surpass $10 billion by 2033, representing a major growth area for satellite communications companies.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2506.00283v6">Direct-to-Cell: A First Look into Starlink's Direct Satellite-to-Device ...</a></li>
<li><a href="https://nova.space/in-the-loop/direct-to-device-how-satellite-connectivity-is-transforming-global-connectivity/">D2D Satellite Connectivity: Transforming Global Coverage</a></li>
<li><a href="https://www.ugbulletin.co.ug/airtel-uganda-starts-testing-starlinks-direct-to-cell-technology/">Airtel Uganda starts testing Starlink 's direct - to - cell technology</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">Starlink</span> <span class="tag-badge">Telecommunications</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Emerging Tech</span></p>

---

<a id="item-7"></a>

## [GitHub Repo Collects Leaked System Prompts from Major AI Tools](https://github.com/asgeirtj/system_prompts_leaks) ⭐️ 8.0/10

A trending GitHub repository named 'asgeirtj/system_prompts_leaks' is actively collecting and regularly updating extracted system prompts from leading AI platforms. The repository claims to feature leaked prompts from tools like ChatGPT, Claude Code, Gemini, Grok, Cursor, and Copilot. This repository provides developers and researchers with a valuable resource to study the behavioral engineering, guardrails, and underlying instructions used by industry-leading LLMs. Analyzing these prompts offers unprecedented insights into how top AI companies configure their models to handle complex interactions and enforce safety measures. The collection includes prompts for various specific models and coding assistants, such as Claude Code, Codex, and VS Code integrations. These prompts are typically obtained through vulnerabilities like prompt injection, which tricks the AI into revealing its hidden system instructions.

ossinsight · asgeirtj · Jul 5, 20:00

**Background**: System prompts are the foundational, often confidential, instructions given to a Large Language Model (LLM) to dictate its behavior, tone, and safety guardrails. System prompt leakage is recognized as a significant security risk—often featured in the OWASP Top 10 for LLM Applications—because it exposes business logic and configurations that are not meant to be user-visible. Attackers often use prompt injection techniques to manipulate the model into ignoring its constraints and revealing these hidden instructions.

<details><summary>References</summary>
<ul>
<li><a href="https://witness.ai/blog/llm-system-prompt-leakage/">LLM System Prompt Leakage : Prevention Guide 2026 - WitnessAI</a></li>
<li><a href="https://owasp.org/www-community/attacks/PromptInjection">Prompt Injection - OWASP Foundation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">System Prompts</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Prompt Engineering</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Reverse Engineering</span></p>

---

<a id="item-8"></a>

## [Chrome DevTools MCP: Official Tool for AI Coding Agents](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐️ 8.0/10

The ChromeDevTools team has released an official integration called chrome-devtools-mcp, which enables AI coding agents to inspect, debug, and interact with web applications through Chrome DevTools. The project is written in TypeScript and has recently started gaining traction on GitHub, accumulating 17 stars in the past 24 hours. This tool represents a significant bridge between browser inspection capabilities and AI coding agents, addressing a critical need in the growing ecosystem of AI-assisted development. By leveraging the Model Context Protocol (MCP), it enables AI agents to directly access and manipulate web applications, potentially transforming how developers debug and optimize their code. The project follows the Model Context Protocol (MCP), an open standard introduced by Anthropic in November 2024 to standardize how AI systems integrate with external tools and data sources. It is built using TypeScript and provides coding agents with the ability to perform comprehensive web application inspection and debugging tasks.

ossinsight · ChromeDevTools · Jul 5, 20:00

**Background**: The Model Context Protocol (MCP) is an open-source standard introduced by Anthropic in November 2024, designed to standardize the way AI systems like large language models (LLMs) integrate and share data with external tools, systems, and data sources. MCP can be thought of as a 'USB-C port' for AI applications, enabling them to connect to data sources, tools, and workflows. Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.

<details><summary>References</summary>
<ul>
<li><a href="https://modelcontextprotocol.io/docs/getting-started/intro">What is the Model Context Protocol (MCP)?</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Chrome DevTools</span> <span class="tag-badge">MCP</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">TypeScript</span></p>

---