---
layout: default
title: "Horizon Summary: 2026-06-18 (EN)"
date: 2026-06-18
lang: en
---

> From 68 items, 11 important content pieces were selected

---

1. [10,000 GitHub Repositories Found Distributing Trojan Malware](#item-1) ⭐️ 9.0/10
2. [Hospitals and Universities Repurpose Existing Drugs at 90% Lower Cost](#item-2) ⭐️ 8.0/10
3. [Cornell's CS 6120: Advanced Compilers Available as Self-Guided Online Course](#item-3) ⭐️ 8.0/10
4. [Emacs 31 Approaches with New Daily Driver Features](#item-4) ⭐️ 8.0/10
5. [DeepSeek Introduces Multimodal Vision Capabilities](#item-5) ⭐️ 8.0/10
6. [Midjourney announces new AI medical imaging initiative](#item-6) ⭐️ 8.0/10
7. [Cloudflare Details Custom Automated Vulnerability Discovery Harness](#item-7) ⭐️ 8.0/10
8. [PeopleSoft PeopleTools Pre-Authentication RCE via PSIGW SSRF Chain](#item-8) ⭐️ 8.0/10
9. [Microsoft Reveals Mastra npm Supply Chain Attack Hitting 140+ Projects](#item-9) ⭐️ 8.0/10
10. [Apple and Intel Reach Preliminary Chip Foundry Agreement](#item-10) ⭐️ 8.0/10
11. [Xiaomi Open-Sources Miloco 2.0 Smart Home AI Agent](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [10,000 GitHub Repositories Found Distributing Trojan Malware](https://orchidfiles.com/github-repositories-distributing-malware/) ⭐️ 9.0/10

A security researcher has uncovered approximately 10,000 GitHub repositories actively distributing Trojan malware, exposing a massive scale of software supply chain vulnerabilities. These repositories employ tactics like frequent commit deletions and re-pushes every few hours to manipulate search rankings and appear prominently when AI coding agents search for dependencies. This discovery signals a paradigm shift in malware distribution: attackers are now optimizing for AI coding agents rather than human developers, exploiting the growing autonomy of tools like Copilot and Cursor that automatically search for and install packages. The attack surface has expanded exponentially as these agents make dependency decisions at machine speed, often with less scrutiny than a cautious human developer would apply. The malicious repositories share common traits including creation by freshly registered GitHub accounts and code that superficially appears legitimate, making automated filtering feasible but not trivial. Community analysis reveals the frequent commit churn is specifically designed to game the search algorithms that AI agents rely on, rather than to attract human attention.

hackernews · theorchid · Jun 18, 11:45 · [Discussion](https://news.ycombinator.com/item?id=48583928)

**Background**: A software supply chain attack occurs when an attacker injects malicious code into a component that other software depends on, compromising the larger system when the dependency is installed. GitHub, as the world's largest host of open-source code, has become an attractive platform for distributing malware through repositories that mimic legitimate projects. AI coding agents — autonomous or semi-autonomous tools built on large language models — increasingly handle tasks like searching for libraries, evaluating options, and installing dependencies on behalf of developers, creating a new vector that attackers can exploit at scale.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Supply_chain_attack">Supply chain attack - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_agent">AI agent</a></li>

</ul>
</details>

**Discussion**: Community members expressed frustration that GitHub does not appear to take the malware repository problem seriously enough, with one newsletter curator reporting regular encounters with trending malicious repos spanning crypto, NFTs, and KMS cracks. A particularly notable insight from the discussion is that the commit-churn pattern strongly indicates these repositories are purpose-built to deceive AI agents, not humans — representing a deliberate evolution in attack strategy. Commenters also shared cautionary tales, including a Disney engineer who was compromised after manually reviewing malicious code that looked legitimate, highlighting that even vigilant developers remain at risk.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">GitHub</span> <span class="tag-badge">Software Supply Chain</span> <span class="tag-badge">AI Agents</span></p>

---

<a id="item-2"></a>

## [Hospitals and Universities Repurpose Existing Drugs at 90% Lower Cost](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost) ⭐️ 8.0/10

Hospitals and universities are increasingly pursuing drug repurposing—finding new therapeutic uses for existing, often off-patent drugs—at costs up to 90% lower than developing new pharmaceuticals. This effort is being led by academic and clinical institutions rather than traditional pharmaceutical companies, filling a gap left by industry incentives that favor novel patented drugs. Drug repurposing has the potential to dramatically reduce healthcare costs and expand access to treatments, especially for rare diseases where pharmaceutical companies have little financial incentive to invest in new drug development. It also exposes structural flaws in the pharmaceutical patent system, where companies are incentivized to make minor molecular modifications to extend patents rather than maximize patient benefit. Specific examples cited include Bevacizumab (Avastin, ~$50/dose) being used off-label to treat macular degeneration instead of the molecularly similar Lucentis (~$1,500/dose), and Spravato (esketamine) being patented as a modified version of off-patent ketamine despite evidence suggesting it may be less effective. Because repurposed drugs often involve off-patent compounds, funding the necessary clinical trials for new regulatory approval remains a significant challenge without traditional pharmaceutical investment.

hackernews · giuliomagnifico · Jun 18, 10:33 · [Discussion](https://news.ycombinator.com/item?id=48583386)

**Background**: Drug repurposing (also called drug repositioning) is the process of identifying new therapeutic applications for existing pharmaceutical compounds that have already been approved for other conditions. Developing an entirely new drug typically costs billions of dollars and takes over a decade, whereas repurposed drugs already have established safety profiles, significantly reducing development time and cost. However, because many repurposed applications involve off-patent drugs, pharmaceutical companies often lack the financial incentive to fund the expensive clinical trials required for new regulatory approvals, leaving a gap that academic and nonprofit organizations are attempting to fill.

<details><summary>References</summary>
<ul>
<li><a href="https://www.elsevier.com/en-in/industry/drug-repurposing">Drug repurposing : approaches, methods and considerations | Elsevier</a></li>
<li><a href="https://blog.zealtyro.com/drug-repurposing-cuts-healthcare-costs/">Drug Repurposing : How Science is Cutting... - ZealTyro Blog</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12766319/">Drug Repurposing as an Effective Drug Discovery Strategy: A Critical...</a></li>

</ul>
</details>

**Discussion**: Commenters overwhelmingly view the current pharmaceutical incentive structure as broken, citing concrete examples like Avastin vs. Lucentis and Spravato vs. ketamine to illustrate how companies exploit patent loopholes at patients' expense. Some highlighted nonprofits like Cures Within Reach that fund repurposing research for rare diseases, while others raised concerns about Big Pharma's influence on medical schools and even search engine results, making it difficult for repurposing research to gain visibility and traction.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">healthcare</span> <span class="tag-badge">pharmaceuticals</span> <span class="tag-badge">drug-repurposing</span> <span class="tag-badge">economics</span> <span class="tag-badge">industry</span></p>

---

<a id="item-3"></a>

## [Cornell's CS 6120: Advanced Compilers Available as Self-Guided Online Course](https://www.cs.cornell.edu/courses/cs6120/2025fa/self-guided/) ⭐️ 8.0/10

Cornell University's CS 6120 course on advanced compilers is publicly available as a self-guided online resource, offering comprehensive materials covering modern compiler design topics. The course, taught by Adrian Sampson, includes lessons on intermediate representations, optimization passes, dataflow analysis, SSA form, and dynamic compilation techniques. This course provides free, high-quality educational content on an important but underrepresented topic in computer science curricula, making advanced compiler knowledge accessible to systems researchers and software engineers worldwide. Understanding compiler internals is increasingly valuable for performance-critical work in areas like machine learning infrastructure, language runtime design, and systems programming. The course covers topics including intermediate representations, classic optimizations like dead code elimination and constant propagation, dataflow analysis, SSA form, and dynamic compilation methods such as trace compilation. Community feedback from practitioners notes that the dynamic compilers section overemphasizes trace compilation, which has largely been abandoned in favor of tiering strategies, type feedback, and speculative optimization with deoptimization.

hackernews · ibobev · Jun 18, 11:04 · [Discussion](https://news.ycombinator.com/item?id=48583606)

**Background**: A compiler translates source code written in a programming language into machine code or an intermediate representation, and modern compilers use multi-stage pipelines with sophisticated optimization passes. Advanced compiler topics go beyond basic parsing and code generation to include intermediate representations like SSA (Static Single Assignment) form, which enables many powerful optimizations. Dynamic compilers and JIT (Just-In-Time) compilation generate optimized code at runtime using information gathered during program execution, with approaches evolving from trace-based compilation toward tiered compilation systems that balance compilation speed and code quality.

**Discussion**: Practitioner titzer criticizes the course's heavy focus on trace compilation, arguing it is a dead end that has been repeatedly abandoned in favor of type feedback, speculation, deoptimization, and tiered compilation approaches. Commenter j2kun questions whether the course content truly qualifies as "advanced," noting that topics like dead code elimination, dataflow analysis, and SSA form seem to belong in an introductory compilers course. Another commenter asks how the course compares to Nora Sandler's practical "Writing a C Compiler" guide.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">compilers</span> <span class="tag-badge">computer science</span> <span class="tag-badge">systems</span> <span class="tag-badge">online education</span> <span class="tag-badge">programming</span></p>

---

<a id="item-4"></a>

## [Emacs 31 Approaches with New Daily Driver Features](https://www.rahuljuliato.com/posts/emacs-31-around-the-corner) ⭐️ 8.0/10

The author shares their hands-on experience with the upcoming Emacs 31 release, detailing the new features and changes they have been using in their daily workflow. The post serves as a practical preview of what users can expect from the next iteration of this highly customizable text editor. Emacs remains a beloved, highly extensible tool for developers, and a major new release signals its continued adaptation to modern software development needs. The release is particularly relevant given the active community discussion around integrating modern AI tools like Claude into its mature, text-based configuration system, bridging the gap between vintage software and cutting-edge technology. A key highlight from the community is that Emacs' text-based configuration makes it incredibly receptive to modern AI agents, which can easily manage and update files like init.el. Furthermore, Emacs 31 continues the editor's philosophy of strictly opt-in features, ensuring stable workflows without forced UI changes, while maintaining its classic, terminal-optimized efficiency for displaying large amounts of code.

hackernews · frou_dh · Jun 18, 12:10 · [Discussion](https://news.ycombinator.com/item?id=48584135)

**Background**: Emacs is a family of text editors characterized by their extensibility and decades-long history, dating back to the 1970s. The editor is almost entirely customizable through Emacs Lisp, a programming language allowing users to modify everything from key bindings to complex application behaviors. Despite its age and steep learning curve compared to modern IDEs, it retains a dedicated user base that values keyboard-driven efficiency and complete ownership of their editing environment.

**Discussion**: Commenters passionately defended Emacs' enduring relevance, praising its speed, complete user control, and opt-in philosophy that prevents unwanted feature bloat. Several users highlighted that Emacs configuration is perfectly suited for modern AI agents, and with tools like Claude integrated, it now offers an AI-assisted development experience that rivals or surpasses newer editors like VSCode.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Emacs</span> <span class="tag-badge">Text Editors</span> <span class="tag-badge">Software Development</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">Open Source</span></p>

---

<a id="item-5"></a>

## [DeepSeek Introduces Multimodal Vision Capabilities](https://chat.deepseek.com/) ⭐️ 8.0/10

DeepSeek has integrated image understanding capabilities into its platform, enabling its AI models to process, analyze, and describe visual content. This marks a transition from a purely text-based interface to a multimodal system for its users. Adding vision capabilities brings DeepSeek closer to the performance and versatility of frontier models like GPT-4o and Gemini, significantly broadening its practical utility. This development allows the AI to tackle complex tasks that require visual context, such as image captioning and visual question answering. The newly introduced feature allows the model to comprehend and describe the contents of an image, but it does not support image generation or modification. Some users have also noted that recent updates have occasionally caused the model to output reasoning or responses in Chinese unexpectedly.

hackernews · RIshabh235 · Jun 18, 06:17 · [Discussion](https://news.ycombinator.com/item?id=48581458)

**Background**: DeepSeek is a prominent Chinese AI company that recently disrupted the industry by releasing highly efficient, open-weight large language models like DeepSeek-R1. Multimodal AI expands on these text-based foundations by integrating and processing multiple data types—such as images, audio, and video—simultaneously, which creates a more comprehensive and versatile artificial intelligence system.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek</a></li>
<li><a href="https://en.wikipedia.org/wiki/Multimodal_AI">Multimodal AI</a></li>

</ul>
</details>

**Discussion**: Commenters clarified that the update is strictly for visual understanding and lacks image generation or built-in speech recognition capabilities. Several users also reported an issue where the model unexpectedly switches to Chinese for its reasoning, while others suggested practical applications like pairing the API with local tools to cheaply generate HTML alt text.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Multimodal AI</span> <span class="tag-badge">Computer Vision</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-6"></a>

## [Midjourney announces new AI medical imaging initiative](https://www.midjourney.com/medical/blogpost) ⭐️ 8.0/10

Midjourney has launched a new initiative called Midjourney Medical, applying their AI image generation expertise to health data and medical imaging. They shared a video demonstration showcasing reconstructed ultrasound images that resemble low-resolution CT scans. This marks a surprising and major strategic pivot for a leading AI image generation company into the highly regulated health tech sector. The move could potentially democratize access to medical scanning but raises significant concerns regarding clinical viability and corporate focus. The initial demonstration focuses on reconstructing ultrasound data into more comprehensive visual formats, though experts note that ultrasound fundamentally differs from CT technology. Midjourney envisions a future where people casually get full-body scans at spas, a concept heavily criticized by healthcare professionals due to the high risk of false positives from harmless bodily quirks.

hackernews · ricochet11 · Jun 18, 01:59 · [Discussion](https://news.ycombinator.com/item?id=48579650)

**Background**: Midjourney is widely known for its powerful AI image generation platform used primarily in creative and artistic contexts. Medical imaging requires highly precise and reliable technology, often subjected to stringent regulatory approvals to ensure accurate diagnoses. Ultrasound and Computed Tomography (CT) are fundamentally different imaging modalities; ultrasound relies on sound waves and is highly operator-dependent, whereas CT uses X-rays to produce detailed cross-sectional images.

**Discussion**: The community response is highly engaged and mixed, featuring critical feedback from a practicing radiologist who emphasizes that ultrasound is fundamentally different from CT scans. Many users criticize Midjourney's vision of casual full-body scans, arguing that it could lead to unnecessary anxiety from false positives and clashes with a proactive healthcare philosophy. Furthermore, several commenters believe Midjourney's brand is too creatively focused, suggesting they should have spun off a separate company for this medical venture.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Medical Imaging</span> <span class="tag-badge">Midjourney</span> <span class="tag-badge">Health Tech</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-7"></a>

## [Cloudflare Details Custom Automated Vulnerability Discovery Harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness/) ⭐️ 8.0/10

Cloudflare published a detailed technical breakdown of their custom multi-stage vulnerability discovery harness and automated triage loop. The architecture uniquely leverages Large Language Models (LLMs) to triage security findings, implements state controls, and specifically routes around LLM context window limitations to reduce false positives. This demonstrates a practical, production-ready approach to integrating LLMs into complex security workflows, moving beyond simple bug scanning to autonomous triage. It provides a highly valuable blueprint for security engineering teams looking to scale their vulnerability management and reduce the manual effort required to filter out false positives. The architecture relies on a multi-stage automated triage loop that manages state controls to maintain context over extended workflows. To combat hallucinations and false positives, Cloudflare employs an adversarial review process and has developed specific routing techniques to handle LLM context window limits effectively.

rss · The Cloudflare Blog · Jun 18, 17:59

**Background**: Vulnerability triage is the initial assessment process that determines if a discovered security finding is valid and how urgent it is before prioritizing remediation. As automated scanning tools generate massive volumes of raw findings, human analysts often become overwhelmed, driving the adoption of AI-assisted triage loops. However, Large Language Models (LLMs) face inherent limitations like context window constraints and potential hallucinations, requiring advanced harness architectures to manage state and perform adversarial checks.

<details><summary>References</summary>
<ul>
<li><a href="https://apiiro.com/glossary/vulnerability-triage/">What Is Vulnerability Triage ? Challenges & Metrics</a></li>
<li><a href="https://dzone.com/articles/automating-dfir-triage-memory-forensics-llms">Automating the DFIR Triage Loop With Memory Forensics, LLMs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">vulnerability management</span> <span class="tag-badge">automation</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Cloudflare</span></p>

---

<a id="item-8"></a>

## [PeopleSoft PeopleTools Pre-Authentication RCE via PSIGW SSRF Chain](https://www.trendmicro.com/en_us/research/26/f/PeopleTools.html) ⭐️ 8.0/10

Security researchers have detailed a pre-authentication remote code execution (RCE) vulnerability chain in Oracle PeopleSoft PeopleTools. This exploit abuses the Integration Broker's PSIGW gateway using Server-Side Request Forgery (SSRF) to execute malicious code directly inside the application server's Java Virtual Machine (JVM). This vulnerability represents a severe security threat to any organization running Oracle PeopleSoft deployments, as it can be exploited without valid credentials. Furthermore, by executing the payload inside the JVM, attackers can seamlessly evade traditional behavioral and network security sensors. The attack leverages an SSRF vulnerability to target the PeopleSoft listening connector on the PSIGW gateway. This technique allows the malicious code to masquerade as legitimate application traffic, effectively bypassing security monitoring tools.

rss · Trend Micro Research， News， Perspectives · Jun 18, 00:00

**Background**: Oracle PeopleSoft is a widely used enterprise application software, with PeopleTools acting as its underlying proprietary middleware and architecture. The PeopleSoft Internet Architecture (PIA) includes an Integration Broker, which manages synchronous and asynchronous messaging between systems. The PSIGW (PeopleSoft Integration Gateway) is a critical component of this architecture that uses listening connectors to receive inbound messages from external nodes or remote gateways.

<details><summary>References</summary>
<ul>
<li><a href="https://www.trendmicro.com/en_us/research/26/f/PeopleTools.html">PeopleSoft PeopleTools Pre-Authentication RCE: A PSIGW SSRF...</a></li>
<li><a href="https://en.wikipedia.org/wiki/PeopleTools">PeopleTools - Wikipedia</a></li>
<li><a href="https://www.zutshigroup.com/PSOL/pt846/eng/psbooks/tibr/htm/tibr06.htm">Managing Integration Gateways</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">remote-code-execution</span> <span class="tag-badge">oracle-peoplesoft</span> <span class="tag-badge">ssrf</span></p>

---

<a id="item-9"></a>

## [Microsoft Reveals Mastra npm Supply Chain Attack Hitting 140+ Projects](https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/) ⭐️ 8.0/10

Microsoft's security team published a detailed analysis of the Mastra npm supply chain attack, in which a poisoned npm package embedded a malicious payload inside its postinstall script, ultimately compromising more than 140 downstream projects. The report also provides actionable detection, hunting, and defense guidance using Microsoft Defender and threat intelligence tooling. This incident underscores the persistent danger of npm postinstall scripts as a supply chain attack vector that can silently propagate malware across hundreds of dependent projects. With AI frameworks like Mastra rapidly gaining adoption among TypeScript developers, a single compromised package can have a cascading impact across the entire ecosystem. The attack exploited the postinstall lifecycle hook — a script npm automatically runs after installing a package — to execute hidden malicious code without the developer's knowledge. Microsoft recommends auditing dependency trees for unexpected scripts, restricting automatic script execution, and using tools like Microsoft Defender and threat intelligence feeds to identify and block malicious packages.

rss · Microsoft Security · Jun 18, 03:43

**Background**: npm's package. supports lifecycle scripts including preinstall, install, and postinstall, which run automatically during package installation. While useful for setup tasks, these scripts can be abused to silently execute arbitrary code, making them a favored vector for supply chain attacks. Mastra is an open-source TypeScript framework for building AI-powered applications and agents, developed by the team behind Gatsby, and it integrates with popular frameworks like Next.js, React, and Node.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.npmjs.com/cli/v11/using-npm/scripts/">How npm handles the " scripts " field</a></li>
<li><a href="https://mastra.ai/">TypeScript AI Agent Framework & Platform | Mastra</a></li>
<li><a href="https://semgrep.dev/blog/2026/rip-npm-postinstall-scripts-npm-v12-default-change/">RIP npm Postinstall Scripts : npm v12 Kills Auto Script ... | Semgrep</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">npm</span> <span class="tag-badge">supply-chain-security</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">malware</span> <span class="tag-badge">devsecops</span></p>

---

<a id="item-10"></a>

## [Apple and Intel Reach Preliminary Chip Foundry Agreement](https://t.me/zaihuapd/42031) ⭐️ 8.0/10

Apple and Intel have signed a preliminary agreement for Intel to manufacture chips for certain Apple devices, after negotiations lasting over a year. The specific products covered by the deal — whether iPhone, iPad, or Mac chips — have not yet been disclosed. This deal marks a significant step in Apple's supply chain diversification away from its near-total reliance on TSMC for custom silicon fabrication. It also represents a major validation of Intel's foundry business strategy, adding Apple to a client roster that already includes Nvidia and SpaceX. The agreement was heavily promoted by the US government, with the Commerce Secretary personally lobbying Apple CEO Tim Cook and other senior executives. Formal contracts were reportedly finalized in recent months, though manufacturing details such as process nodes, volumes, and timelines remain undisclosed.

telegram · zaihuapd · Jun 18, 09:19

**Background**: Apple has historically relied almost exclusively on TSMC to manufacture its custom A-series and M-series chips, making it one of TSMC's largest and most important customers. Intel has been aggressively building its Intel Foundry Services (IFS) division as part of its turnaround strategy under CEO Pat Gelsinger, aiming to become a leading-edge foundry competitor. The US government has been actively encouraging domestic semiconductor production through the CHIPS Act, which provides billions in subsidies to companies building chip manufacturing capacity in the United States.

<details><summary>References</summary>
<ul>
<li><a href="https://fulideng.com/news_hybk/90.html">半 导 体 行 业 政 策 前景分析：现状、趋势与未来 - 九游会</a></li>
<li><a href="https://www.azchinesenews1.com/static/content/XW/2025-01-16/1329642385173549056.html">特别报道：《 CHIPS 法 案 》提高 美 国 半 导 体 产 量 但成本高昂</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">Intel</span> <span class="tag-badge">semiconductor</span> <span class="tag-badge">chip manufacturing</span> <span class="tag-badge">supply chain</span></p>

---

<a id="item-11"></a>

## [Xiaomi Open-Sources Miloco 2.0 Smart Home AI Agent](https://github.com/XiaoMi/xiaomi-miloco) ⭐️ 8.0/10

Xiaomi has officially released Miloco 2.0, an open-source smart home solution that uses Mi Home cameras as audiovisual sensors and runs on Xiaomi's self-developed MiMo large language model as an OpenClaw plugin. The system introduces features like common-sense reasoning, identity recognition, family memory, household tasks, proactive intelligence, and a home dashboard, enabling it to actively observe, reason, and control all connected devices throughout the house. Miloco 2.0 represents a significant step in the AIoT space by bridging physical hardware with advanced LLM-driven reasoning, enabling truly proactive home automation rather than simple rule-based triggers. This open-source approach empowers developers and enthusiasts to build more intelligent, personalized smart home experiences while positioning Xiaomi as a leader in AI-powered home ecosystems. The project requires macOS or Linux (Windows via WSL), with a recommended 4 GB RAM and 256 GB storage, and users must bind a Xiaomi account with a MiMo API key. Perception and agent processing rely primarily on cloud-based large models, which will incur ongoing API costs, and the project is strictly limited to non-commercial use.

telegram · zaihuapd · Jun 18, 12:23

**Background**: MiMo is Xiaomi's self-developed large language model series designed to serve as the brain of agent systems, capable of orchestrating complex workflows and driving real-world tasks. OpenClaw is a plugin-based platform that extends AI agents with capabilities like model providers, agent harnesses, tools, speech, and media understanding. The combination of these technologies in Miloco 2.0 enables a smart home agent that goes beyond traditional voice assistants by using computer vision and natural language reasoning to understand and respond to home environments.

<details><summary>References</summary>
<ul>
<li><a href="https://hyperosinsider.com/xiaomi-miloco-2-0-released-before-hyperos-4-smart-ai-open-source-solution/">Xiaomi Miloco 2.0 Released Before HyperOS 4: Smart AI Open ...</a></li>
<li><a href="https://github.com/XiaoMi/xiaomi-miloco">Xiaomi Miloco - GitHub</a></li>
<li><a href="https://mimo.xiaomi.com/mimo-v2-pro">MiMo-V2-Pro | Xiaomi</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Smart Home</span> <span class="tag-badge">AI Agent</span> <span class="tag-badge">Xiaomi</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">IoT</span></p>

---