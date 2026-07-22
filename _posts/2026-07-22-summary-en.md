---
layout: default
title: "Horizon Summary: 2026-07-22 (EN)"
date: 2026-07-22
lang: en
---

> From 49 items, 15 important content pieces were selected

---

1. [Terence Tao's ChatGPT Analysis of the Jacobian Conjecture Counterexample](#item-1) ⭐️ 9.0/10
2. [5-Step Attack Chain in n8n Achieves RCE Via Public Form](#item-2) ⭐️ 9.0/10
3. [Complete Reverse Engineering and Exploitation of fast 1.2.83: @JSONType Annotation Bypass Chain](#item-3) ⭐️ 9.0/10
4. [Hugging Face Discloses Autonomous AI Agent Breach; Commercial LLMs Refuse Forensics Assistance](#item-4) ⭐️ 9.0/10
5. [Major AI Coding Agents Hit by Novel Sandbox Escape Vulnerabilities](#item-5) ⭐️ 9.0/10
6. [Moonshot AI Targets $50 Billion Valuation in Pre-IPO Round](#item-6) ⭐️ 9.0/10
7. [Bento: Entire PowerPoint in one HTML file (edit, view, collaborate)](#item-7) ⭐️ 8.0/10
8. [Intense Debate Over Passkey User Experience and Cross-Device Friction](#item-8) ⭐️ 8.0/10
9. [LG to Ban Residential Proxy SDKs from Smart TV Apps](#item-9) ⭐️ 8.0/10
10. [Agentless Threat Detection Guide for Virtual Appliances](#item-10) ⭐️ 8.0/10
11. [Elastic Security Labs Details wp2shell WordPress Pre-Auth RCE Detection](#item-11) ⭐️ 8.0/10
12. [Email Modification Flaw to Account Takeover: API Attack Chain Analysis](#item-12) ⭐️ 8.0/10
13. [Claude Code Beta Gains Direct Control of iOS Simulator](#item-13) ⭐️ 8.0/10
14. [Microsoft Considers Integrating DeepSeek into Copilot Cowork to Reduce Costs](#item-14) ⭐️ 8.0/10
15. [Anthropic Launches 'Teach Claude a Skill' Feature for Task Automation](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Terence Tao's ChatGPT Analysis of the Jacobian Conjecture Counterexample](https://chatgpt.com/share/6a5fdc7a-d6f8-83e8-bbea-8deb42cfed56) ⭐️ 9.0/10

Renowned mathematician Terence Tao shared a fascinating ChatGPT conversation where he expertly guides the AI through the analysis of a specific counterexample to the Jacobian Conjecture. The discussion centers on a structured polynomial map announced by Levent Alpöge in July 2026, demonstrating a masterclass in interactive mathematical exploration. This conversation highlights the powerful synergy between top-tier domain experts and Large Language Models (LLMs), showing precisely how expert prompting can unlock deep mathematical insights. It serves as a practical blueprint for how professionals can leverage AI for complex research, contrasting sharply with the less effective interactions typical of layperson users. The analyzed counterexample consists of a polynomial map F: C³ → C³ with a constant Jacobian determinant of -2 and a fiber containing three points. Tao guides the AI by repeatedly suggesting specific simplifications and using dense, field-specific terminology to verify the mathematical machinery.

hackernews · gmays · Jul 22, 17:30 · [Discussion](https://news.ycombinator.com/item?id=49010345)

**Background**: The Jacobian Conjecture is a famous open problem in mathematics which posits that any polynomial function with a non-zero constant Jacobian determinant must have a polynomial inverse. While trivial for one dimension, it remained unproven for higher dimensions and became notorious for numerous false proofs. In July 2026, mathematician Levent Alpöge overturned this long-standing assumption by presenting an explicit counterexample in dimension three.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jacobian_conjecture">Jacobian conjecture</a></li>
<li><a href="https://www.explainx.ai/blog/fable-5-jacobian-conjecture-counterexample-alpoge-july-2026">Fable 5 Jacobian Conjecture Claim — July 2026 | explainx.ai Blog</a></li>

</ul>
</details>

**Discussion**: Commenters were struck by the structural beauty of the specific counterexample and Tao's ability to systematically guide the AI through simplifications. The consensus is that Tao's expert-level prompting—relying heavily on jargon and iterative refinement—is exactly what allows him to extract profound insights from the model, a technique vastly different from how laypeople interact with AI.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">Prompt Engineering</span> <span class="tag-badge">Research</span></p>

---

<a id="item-2"></a>

## [5-Step Attack Chain in n8n Achieves RCE Via Public Form](https://xz.aliyun.com/news/92554) ⭐️ 9.0/10

A recent technical analysis details a critical 5-step attack chain in n8n version 1.65.0 that achieves remote code execution (RCE) and root access through a public form endpoint. The exploit takes under three seconds to complete and includes fully open-source proof-of-concept (PoC) scripts and detection tools. This vulnerability represents a severe threat to the security posture of organizations relying on n8n for workflow automation, as it can lead to total server compromise from a simple exposed form. DevOps and security teams must urgently audit their deployments, as an attacker can chain these inherent logic flaws to bypass authentication and execute malicious code. The five-step attack chain proceeds from arbitrary file reading to extract the encryption key, which is then used to forge a JWT token and take over the admin account. The attacker subsequently utilizes expression injection to escape the JavaScript sandbox, ultimately escalating to full remote code execution.

rss · 先知安全技术社区 · Jul 22, 03:08

**Background**: n8n is an open-source workflow automation platform designed to connect various apps, APIs, and services into automated pipelines. In n8n, expressions are dynamically executed as JavaScript to compute values during workflows, which can lead to sandbox escapes if not properly secured. Additionally, the platform relies on JSON Web Tokens (JWT) for authentication and encryption keys to secure sensitive data, meaning a compromised key allows attackers to forge elevated administrative tokens.

<details><summary>References</summary>
<ul>
<li><a href="https://n8n.io/">AI Workflow Automation Platform - n 8 n</a></li>
<li><a href="https://www.striga.ai/research/breaking-n8n-expression-sandbox">Breaking n8n's Expression Sandbox into Remote Code Execution</a></li>
<li><a href="https://zeropath.com/blog/cve-2025-41672-jwt-token-forgery-default-certificates">CVE-2025-41672: Critical JWT Token Forgery via Default... | ZeroPath</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">n8n</span> <span class="tag-badge">Penetration Testing</span></p>

---

<a id="item-3"></a>

## [Complete Reverse Engineering and Exploitation of fast 1.2.83: @JSONType Annotation Bypass Chain](https://forum.butian.net/share/4992) ⭐️ 9.0/10

Security researcher Kirill Firsov disclosed a novel deserialization exploit chain targeting fast versions 1.2.66 through 1.2.83. The exploit specifically leverages the @JSONType annotation to ingeniously bypass the library's `checkAutoType` defenses and achieve code execution. This is a critical security breakthrough because it successfully bypasses the stringent security restrictions implemented in relatively recent versions of fast, a library widely used across the Java ecosystem. Any Java applications relying on these affected versions are at severe risk of remote code execution (RCE) attacks. The exploit chain targets versions released after fast introduced the `checkAutoType` mechanism in version 1.2.25 to block arbitrary class loading. By manipulating the deserialization process via the `@JSONType` annotation, the researcher was able to ultimately trigger `defineClass` to inject and execute malicious bytecode.

rss · 奇安信攻防社区 · Jul 22, 14:14

**Background**: Fast is a high-performance JSON library developed by Alibaba, but its historical autoType feature allowed attackers to instantiate arbitrary classes, leading to severe Remote Code Execution vulnerabilities. To mitigate this, fast introduced the `checkAutoType` security mechanism in version 1.2.25 to maintain an internal blacklist and whitelist of allowed classes. In Java exploitation, the `ClassLoader.defineClass()` method is frequently targeted by attackers to dynamically load malicious classes from raw bytes and execute arbitrary code once security checks are bypassed.

<details><summary>References</summary>
<ul>
<li><a href="https://cloud.tencent.cn/developer/article/2485929">FastJson checkAutoType 安 全 机 制 研究-腾讯云开发者社区-腾讯云</a></li>
<li><a href="https://ttulka.medium.com/insecure-deserialization-explained-with-examples-in-java-b599b662599f">Insecure Deserialization Explained With Examples In Java | by Tomas Tulka | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Java</span> <span class="tag-badge">Fast</span> <span class="tag-badge">Reverse Engineering</span></p>

---

<a id="item-4"></a>

## [Hugging Face Discloses Autonomous AI Agent Breach; Commercial LLMs Refuse Forensics Assistance](https://t.me/zaihuapd/42701) ⭐️ 9.0/10

Hugging Face disclosed a severe security incident where attackers utilized an autonomous AI agent to exploit two code execution vulnerabilities (a remote-code dataset loader and a template injection) within their dataset processing pipeline. During the incident response, the team discovered that commercial LLMs refused to assist in forensic analysis due to their built-in safety guardrails. This event marks a significant escalation in cybersecurity, demonstrating how autonomous AI agents can conduct complex, multi-phase attacks for lateral movement and data exfiltration at an unprecedented scale. Furthermore, the refusal of commercial LLMs to aid in forensic analysis highlights a critical conflict between AI safety alignment and the legitimate needs of security professionals defending against such attacks. The attackers drove the AI agent to execute tens of thousands of operations over a weekend, successfully moving laterally across multiple internal clusters to steal subsets of internal datasets and service credentials. Hugging Face confirmed that all public-facing models, datasets, and Spaces remained untampered with, and the software supply chain was verified as uncompromised.

telegram · zaihuapd · Jul 22, 00:46

**Background**: Autonomous AI agents in cybersecurity can leverage large language models to reason, plan, and execute multi-step attacks with minimal human intervention. In this breach, the initial foothold was established by treating "data" as "code"—exploiting dataset loaders and template engines that blur the line between data processing and arbitrary code execution. While AI safety guardrails are designed to prevent malicious use, they often lack the context to distinguish between a malicious actor writing malware and a security researcher analyzing an attack, leading to false positive refusals.

<details><summary>References</summary>
<ul>
<li><a href="https://thakicloud.github.io/en/news/huggingface-agentic-ai-breach/">Hugging Face Wasn’t Breached by a Human, but by an Autonomous...</a></li>
<li><a href="https://cybermagazine.com/news/ai-agents-drive-first-large-scale-autonomous-cyberattack">AI Agents Drive First Large-Scale Autonomous Cyberattack | Cybersecurity Magazine</a></li>
<li><a href="https://dev.to/coridev/how-an-autonomous-agent-breached-hugging-face-and-what-a-rag-poisoning-filter-would-have-stopped-2361">How an Autonomous Agent Breached Hugging Face — And What...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">Cyberattack</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-5"></a>

## [Major AI Coding Agents Hit by Novel Sandbox Escape Vulnerabilities](https://www.bleepingcomputer.com/news/security/cursor-codex-gemini-cli-antigravity-hit-by-sandbox-escapes/) ⭐️ 9.0/10

Security research firm Pillar Security disclosed sandbox escape vulnerabilities in four major AI coding agents—Cursor, OpenAI Codex, Google Gemini CLI, and Antigravity—where attackers use indirect prompt injections embedded in open-source repositories to trick AI agents into writing malicious files that are subsequently executed by local toolchains outside the sandbox. Vendors have already begun pushing fixes, including Cursor version 3.0.0 and Codex CLI v0.95.0. This vulnerability represents a critical paradigm shift in AI security: attackers do not need to directly breach sandbox isolation, but instead exploit the implicit trust that local IDE and CLI tools place in files generated within the sandbox, enabling arbitrary code execution on developers' machines. It exposes a fundamental architectural blind spot and signals that sandbox isolation alone is no longer sufficient to secure AI-assisted development workflows. The attack exploits design blind spots such as whitelists that only validate command names and privileged services exposed outside the sandbox, with attackers embedding malicious prompts in README files, issues, dependencies, or code diffs to induce the AI to write seemingly legitimate configuration files or virtual environment scripts. Google downgraded two Antigravity vulnerabilities, reasoning that exploitation requires social engineering to trick users into trusting malicious repositories.

telegram · zaihuapd · Jul 22, 08:08

**Background**: Indirect prompt injection is an attack technique where adversaries embed malicious instructions in external content—such as documents, web pages, or code repositories—that a GenAI system may access and process, causing the AI to unknowingly execute attacker-controlled actions. AI coding agents like Cursor, Codex, and Gemini CLI operate within sandboxed environments designed to isolate their actions from the host system by restricting file access, network calls, and command execution. A sandbox escape occurs when an attacker bypasses these isolation boundaries to execute unauthorized code on the host machine, and in this case the escape is achieved not by breaking the sandbox itself but by leveraging trusted local tools that blindly consume sandbox-generated files.

<details><summary>References</summary>
<ul>
<li><a href="https://hitechub.com/sandbox-escapes-attack-on-cursor-codex-gemini-cli-and-antigravity/">Sandbox Escapes : Attack on Cursor, Codex, Gemini CLI... - Hitechub</a></li>
<li><a href="https://www.crowdstrike.com/en-us/blog/indirect-prompt-injection-attacks-hidden-ai-risks/">Indirect Prompt Injection Attacks: Hidden AI Risks</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Sandbox Escape</span> <span class="tag-badge">Prompt Injection</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">AI Coding Agents</span></p>

---

<a id="item-6"></a>

## [Moonshot AI Targets $50 Billion Valuation in Pre-IPO Round](https://www.bloomberg.com/news/articles/2026-07-21/china-s-moonshot-in-talks-on-pre-ipo-funds-at-50-billion-value?srnd=homepage-asia) ⭐️ 9.0/10

Moonshot AI is preparing to begin talks in August for its final pre-IPO funding round, targeting a valuation of up to $50 billion ahead of a planned Hong Kong listing. This follows a summer funding round that valued the company at $31.5 billion and comes after the company's annual recurring revenue (ARR) reached $300 million in June, driven by the launch of its 2.8-trillion-parameter Kimi K3 model. The reported $50 billion valuation would cement Moonshot AI as one of the world's most valuable AI companies and signal massive investor confidence in China's AI sector. The sixfold daily sales increase since the Kimi K3 launch demonstrates strong commercial adoption of trillion-scale language models and could accelerate the broader industry trend toward mega-model deployment. Kimi K3 is Moonshot AI's flagship 2.8-trillion-parameter model built on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes), featuring a context window of up to 1,048,576 tokens. Since the model's launch, Moonshot's daily sales have increased by at least six times, pushing ARR to $300 million as of June, with the company now moving from a $31.5 billion valuation toward a potential $50 billion target.

telegram · Marcoview666 · Jul 22, 01:30

**Background**: Moonshot AI is a Chinese AI laboratory known for its Kimi series of large language models, which compete with models from companies like OpenAI and Anthropic. Pre-IPO funding rounds are typically the final fundraising stage before a company goes public, allowing it to strengthen its financial position and validate its valuation with investors. Trillion-parameter models represent the cutting edge of AI research, requiring significant computational resources but enabling more sophisticated reasoning, coding, and multimodal capabilities. Moonshot AI previously raised a summer round at a $31.5 billion valuation, making the jump to a potential $50 billion a significant escalation.

<details><summary>References</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://developers.cloudflare.com/ai/models/moonshotai/kimi-k3/">Kimi K 3 ( Moonshot AI ) · Cloudflare AI docs · Cloudflare AI docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Funding & IPO</span> <span class="tag-badge">Kimi K3</span> <span class="tag-badge">Large Language Models</span></p>

---

<a id="item-7"></a>

## [Bento: Entire PowerPoint in one HTML file (edit, view, collaborate)](https://bento.page/slides/) ⭐️ 8.0/10

Bento is a single HTML presentation tool that packs editing, viewing, and live collaboration into an offline file of around 560KB. It leverages a base64 application blob and DecompressionStream to run its logic entirely client-side without needing to fetch external resources. It bridges the gap between AI-generated web slides and easily editable documents by enabling completely local-first operations without installations or cloud logins. This represents a significant shift towards lightweight, single-file web apps that can effectively replace bloated enterprise presentation software. The slide data is stored as a plain JSON block at the top of the file, making it highly readable and easy for AI coding harnesses to modify. To enable live collaboration without compromising data privacy, the tool uses an encrypted blind relay that routes only ciphertext without ever seeing the actual content.

hackernews · starfallg · Jul 22, 15:19 · [Discussion](https://news.ycombinator.com/item?id=49008211)

**Background**: Local-first software prioritizes storing data on the user's own device rather than remote servers, allowing for offline operation without internet connectivity. AI coding assistants, such as Anthropic's Claude Code, are increasingly used to generate frontend web apps, though users often struggle to manually tweak the generated code. Concepts like an encrypted blind relay facilitate end-to-end encryption by ensuring the server only acts as a blind transport layer for ciphertext.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Local-first_software">Local-first software</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://dev.to/iamjephter/building-a-blind-relay-in-rust-with-tauri-at-the-edge-57gp">Architecting a Blind Relay : E2EE Clipboard Sync... - DEV Community</a></li>

</ul>
</details>

**Discussion**: The creator explained the clever technical implementation, utilizing a JSON data block and a base64 blob with DecompressionStream to keep the file size small. Users praised its corporate niche potential, noting that local web apps can bypass rigid IT departments, though some noted performance limitations when stressed with heavy concurrent loads during collaboration.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">web-dev</span> <span class="tag-badge">local-first</span> <span class="tag-badge">productivity</span> <span class="tag-badge">presentation</span> <span class="tag-badge">developer-tools</span></p>

---

<a id="item-8"></a>

## [Intense Debate Over Passkey User Experience and Cross-Device Friction](https://twitter.com/nikitabier/status/2079787406300266743) ⭐️ 8.0/10

A prominent tech founder sparked a massive online debate by criticizing the user experience design of passkeys, arguing they fundamentally confuse average consumers. The discussion highlights the ongoing friction between the security benefits of passwordless authentication and the reality of managing credentials across multiple devices and browsers. Passkeys are the industry-standard push to eliminate password vulnerabilities, but their success hinges entirely on mainstream user adoption. If cross-platform usability remains fragmented by ecosystem lock-in or confusing synchronization, it could severely delay the transition away from traditional passwords. Passkeys rely on public-key cryptography, where a website stores a public key and the user's device holds the private key to sign login challenges. While ecosystems like Apple iCloud or Google sync these keys seamlessly, users operating across mixed platforms (like Windows PCs and iPhones) or utilizing third-party password managers often encounter synchronization blind spots.

hackernews · ksec · Jul 22, 14:25 · [Discussion](https://news.ycombinator.com/item?id=49007374)

**Background**: Passkeys are a replacement for passwords designed to be phishing-resistant by utilizing WebAuthn standards and public-key cryptography. Instead of remembering a string of characters, users authenticate using biometrics (like Face ID) or device PINs, which unlocks a cryptographic key stored on their device. To make this convenient, tech giants synchronize these private keys across their specific cloud ecosystems, though true cross-platform sharing is still evolving.

<details><summary>References</summary>
<ul>
<li><a href="https://bitwarden.com/blog/how-do-passkeys-work/">How do passkeys work ? | Bitwarden</a></li>
<li><a href="https://mojoauth.com/blog/cross-device-passkey-sync-icloud-google-1password">Cross Device Passkey Sync Explained: iCloud Keychain, Google...</a></li>

</ul>
</details>

**Discussion**: The community is highly divided: technical users complain about the friction of syncing passkeys across various devices, browsers, and password managers like LastPass or Bitwarden. Conversely, others argue that passkeys are actually phenomenal for the average consumer—especially those entrenched in a single ecosystem like Apple's—because the prompt for Face ID is intuitive, suggesting the confusion mainly affects engineers who deliberately mix-and-match platforms.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Passkeys</span> <span class="tag-badge">Authentication</span> <span class="tag-badge">User Experience</span> <span class="tag-badge">Security</span> <span class="tag-badge">Passwordless</span></p>

---

<a id="item-9"></a>

## [LG to Ban Residential Proxy SDKs from Smart TV Apps](https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/) ⭐️ 8.0/10

LG is moving to ban residential proxy Software Development Kits (SDKs) from its smart TV applications to prevent the devices from being covertly used as proxy nodes for malicious networks. This is significant because it addresses a major security and privacy issue in the IoT ecosystem, protecting consumers from having their bandwidth hijacked and preventing their devices from being used for large-scale spam or cyberattacks. The issue highlights the danger of malware SDKs embedded in seemingly legitimate apps, with commenters noting that a significant percentage of apps on LG's platform were found to contain these covert proxy integrations.

hackernews · DemiGuru · Jul 22, 01:52 · [Discussion](https://news.ycombinator.com/item?id=49000864)

**Background**: A residential proxy routes internet traffic through IP addresses provided by Internet Service Providers (ISPs) to private homes, making the traffic appear to originate from a legitimate user. Proxy providers often distribute SDKs to app developers to secretly build these networks, leveraging the device owner's internet connection and bandwidth without their explicit consent.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/@datajournal/what-are-residential-proxies-67023101f356">What Are Residential Proxies ? Detailed Guide 2025 | Medium</a></li>
<li><a href="https://oxylabs.io/blog/what-is-residential-proxy">What is a Residential Proxy & How it Works?</a></li>
<li><a href="https://iproyal.com/blog/what-is-residential-proxy/">What Is a Residential Proxy and How Does It Work?</a></li>

</ul>
</details>

**Discussion**: The discussion reflects strong frustration with modern smart TV user experiences and the difficulty of finding non-smart displays. Commenters are alarmed by the high percentage of apps containing malware SDKs and view residential proxies as a severe threat that enables spam and social media manipulation, often calling for regulatory intervention.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Smart TV</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Residential Proxies</span> <span class="tag-badge">IoT</span> <span class="tag-badge">Privacy</span></p>

---

<a id="item-10"></a>

## [Agentless Threat Detection Guide for Virtual Appliances](https://www.wiz.io/blog/agentless-threat-hunting-fortigate) ⭐️ 8.0/10

Wiz released a step-by-step technical guide detailing how to implement continuous, agentless threat detection for virtual appliances. The approach specifically focuses on mapping appliance event logs directly to real-world cyber campaigns. Virtual appliances often operate as black boxes in cloud environments, creating significant security blind spots for security teams. This agentless monitoring approach provides critical visibility and the context needed to investigate activities associated with high-profile threat actors without the overhead of deploying traditional agents. The guide outlines a researcher's methodology for mapping proprietary appliance event logs to known threat behaviors. It leverages Wiz's Agentless Workload Detection to illuminate cloud blind spots and conduct continuous monitoring.

rss · Wiz Blog | RSS feed · Jul 22, 14:24

**Background**: Virtual appliances, such as firewalls and routers deployed in cloud environments, often run customized operating systems that make installing traditional security agents difficult or impossible. Agentless security scanning solves this by querying the underlying cloud infrastructure and storage directly to analyze the workload. This provides deep context for incident response teams without requiring any changes to the protected environment.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wiz.io/blog/agentless-visibility-uncovering-cloud-blind-spots">Agentless Visibility: Uncovering Cloud Blind Spots | Wiz Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloud Security</span> <span class="tag-badge">Threat Detection</span> <span class="tag-badge">Agentless</span> <span class="tag-badge">Virtual Appliances</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-11"></a>

## [Elastic Security Labs Details wp2shell WordPress Pre-Auth RCE Detection](https://www.elastic.co/security-labs/wp2shell-wordpress-rce-detection-elastic-defend) ⭐️ 8.0/10

Elastic Security Labs has published a detailed end-to-end analysis of the 'wp2shell' WordPress Remote Code Execution (RCE) chain, including walkthroughs of detection rules, Indicators of Compromise (IOCs), and threat hunting guidance using Elastic Defend. The wp2shell chain exploits two WordPress core vulnerabilities, tracked as CVE-2026-63030 and CVE-2026-60137, which allow attackers to drop a plugin and execute commands without authentication. This is a critical security event because wp2shell represents one of the most significant unauthenticated WordPress core RCE vulnerabilities in nearly a decade, requiring no plugins or themes to be installed. As WordPress powers a massive portion of the internet, this attack chain presents a severe risk to millions of websites, making actionable detection engineering and threat intelligence essential for defenders. The wp2shell attack chain leverages two core vulnerabilities, CVE-2026-63030 and CVE-2026-60137, allowing an unauthenticated attacker to achieve remote code execution. Elastic provides specific detection rules and IOCs to identify the exploitation attempts, including malicious request patterns that a Web Application Firewall (WAF) can also be configured to block.

rss · Elastic Security Labs · Jul 23, 00:00

**Background**: Remote Code Execution (RCE) is a type of vulnerability that allows an attacker to execute arbitrary code on a target system, often leading to full server compromise. A 'pre-auth' or 'unauthenticated' RCE is particularly dangerous because it can be exploited without requiring any valid user credentials. WordPress is the world's most popular Content Management System (CMS), making vulnerabilities in its core software a high-value target for attackers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.picussecurity.com/resource/blog/cve-2026-63030-and-cve-2026-60137-wp2shell-wordpress-rce-explained">CVE-2026-63030 and CVE-2026-60137 ( wp 2 shell ): WordPress RCE...</a></li>
<li><a href="https://www.wordfence.com/blog/2026/07/wp2shell-aftermath-the-first-critical-unauthenticated-wordpress-core-rce-in-nearly-a-decade/">wp 2 shell Aftermath: The First Critical Unauthenticated WordPress ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">wordpress</span> <span class="tag-badge">remote-code-execution</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">detection-engineering</span></p>

---

<a id="item-12"></a>

## [Email Modification Flaw to Account Takeover: API Attack Chain Analysis](https://xz.aliyun.com/news/92552) ⭐️ 8.0/10

A security researcher successfully reverse-engineered a Webpack-bundled Angular SPA to extract over 150 REST API endpoints and signing algorithms for a campus academic system. This revealed a critical flaw where the server completely failed to validate API request signatures, allowing the researcher to construct a complete account takeover chain via unauthenticated email modifications. This analysis highlights how a single overlooked validation flaw can be chained across different platforms (mobile to PC) to cause severe account takeovers. It demonstrates the critical importance of server-side API security and the dangers of relying solely on client-side obfuscation or validation for modern single-page applications. The exploit chain involves bypassing the client-side signature checks in the mobile API to modify bound email addresses without authorization. Once the email is changed, the attacker can use the standard PC password reset flow to gain full control of the account, while an additional information leak was found in the student course query interface.

rss · 先知安全技术社区 · Jul 22, 00:30

**Background**: Webpack is a standard module bundler for JavaScript applications that packages various resources, including API logic, into static assets that can be reverse-engineered. Modern web apps often use API signatures where the client generates a cryptographic hash of request parameters to prove integrity, but this is only effective if the server strictly validates the signature. If the server skips validation or relies solely on the client to enforce security rules, attackers can easily manipulate requests to bypass controls.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnblogs.com/zichliang/p/17517073.html">JS 逆 向 实战19——通杀 webpack 逆 向 - 始識 - 博客园</a></li>
<li><a href="https://juejin.cn/post/6961614763868553229">(精华) 2020年6月29日 C#类库 接口 签 名 校 验 using...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Web Security</span> <span class="tag-badge">Account Takeover</span> <span class="tag-badge">API Security</span> <span class="tag-badge">Reverse Engineering</span> <span class="tag-badge">Vulnerability Analysis</span></p>

---

<a id="item-13"></a>

## [Claude Code Beta Gains Direct Control of iOS Simulator](https://www.macrumors.com/2026/07/21/claude-code-ios-simulator/) ⭐️ 8.0/10

Anthropic has launched a public beta of Claude Code for macOS that directly integrates with Apple's iOS Simulator. This allows the AI to autonomously open the simulator, observe the UI in real time, and interact with applications to iteratively build and test them. This integration significantly accelerates mobile development workflows by enabling an AI agent to autonomously handle app building and UI testing. By cleverly bypassing traditional system-level accessibility permissions through direct simulator control, it streamlines the testing process for iOS developers. The feature operates locally via a built-in panel within Claude Code and requires Xcode with the iOS platform installed, completely avoiding the need for macOS Accessibility or Screen Recording permissions. However, simulator screenshots are sent to Anthropic and retained according to standard conversation policies, prompting official advice against logging into real user accounts.

telegram · zaihuapd · Jul 22, 02:55

**Background**: Claude Code is Anthropic's agentic command-line interface tool designed to understand codebases, edit files, and run commands directly from the terminal. Previously, Anthropic introduced a "computer use" feature allowing Claude to interact with desktop environments by taking screenshots and moving cursors, which often required elevated system permissions. Apple's iOS Simulator, bundled with Xcode, is the standard tool developers use to prototype and test iOS applications on their Macs.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.anthropic.com/en/docs/claude-code/cli-reference">CLI reference - Anthropic</a></li>
<li><a href="https://www.anthropic.com/news/3-5-models-and-computer-use">Introducing computer use , a new Claude 3.5 Sonnet, and Claude...</a></li>
<li><a href="https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators">Installing Xcode and Simulators | Apple Developer Documentation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">AI Coding</span> <span class="tag-badge">iOS Simulator</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Mobile Development</span></p>

---

<a id="item-14"></a>

## [Microsoft Considers Integrating DeepSeek into Copilot Cowork to Reduce Costs](https://t.me/zaihuapd/42710) ⭐️ 8.0/10

Microsoft is exploring the integration of a self-fine-tuned DeepSeek V4 model or other open-source alternatives into its Copilot Cowork enterprise tool within weeks. Additionally, the company is shifting Copilot Cowork to a compute-based usage billing model to manage the escalating operational costs caused by heavy users. This move signals a major shift by a leading cloud provider towards leveraging open-source models to make enterprise AI tools economically sustainable. It highlights the growing industry challenge of balancing high user productivity with the massive infrastructure costs of scaling generative AI. If implemented, customers will have the option to choose the DeepSeek model, which will be fully hosted on Microsoft Azure to ensure data remains within the Microsoft cloud. This setup will be governed by enterprise security and compliance controls, offering a much cheaper alternative to existing Anthropic and OpenAI models.

telegram · zaihuapd · Jul 22, 07:18

**Background**: Copilot Cowork is an AI assistant within Microsoft 365 that automates tasks, coordinates workflows, and turns user intent into actions across various applications. DeepSeek V4 is a powerful open-source Mixture-of-Experts (MoE) language model known for its massive parameter scale and long context window, making it highly capable yet potentially more cost-efficient to run.

<details><summary>References</summary>
<ul>
<li><a href="https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/">Copilot Cowork: A new way of getting work done | Microsoft 365 Blog</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>
<li><a href="https://www.microsoft.com/en-us/microsoft-365-copilot/cowork">Copilot Cowork: Automate Tasks and Workflows | Microsoft</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Copilot</span> <span class="tag-badge">Enterprise AI</span> <span class="tag-badge">Open Source Models</span></p>

---

<a id="item-15"></a>

## [Anthropic Launches 'Teach Claude a Skill' Feature for Task Automation](https://www.androidauthority.com/claude-cowork-record-skills-feature-3689919/) ⭐️ 8.0/10

Anthropic introduced a new 'Teach Claude a skill' feature within its Claude Cowork desktop application. Users can now record their screen while explaining a task, allowing Claude to learn the workflow, save it as a reusable skill, and automatically execute it in the future without repeated prompts. This development significantly advances AI-driven task automation by allowing Claude to act as a proactive digital colleague rather than just a conversational chatbot. It streamlines repetitive workflows like organizing spreadsheets or renaming files, saving time for professionals and enhancing overall productivity. To use this feature, users click the '+' icon in the Cowork chat box, select 'Record a Skill', and provide a screen recording with audio explanations. The feature is currently rolling out exclusively to Pro, Max, and Team subscription tiers.

telegram · zaihuapd · Jul 22, 09:09

**Background**: Claude is a series of large language models developed by Anthropic, designed to handle a wide range of conversational and analytical tasks. Claude Cowork is an AI agent built for non-technical tasks that can access user folders on macOS to read, create, and edit files asynchronously. By introducing "Skills," Anthropic allows users to create saved instruction packages that teach the AI how to autonomously handle specific classes of recurring tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Claude_Cowork">Claude Cowork</a></li>
<li><a href="https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork">Get started with Claude Cowork | Claude Help Center</a></li>
<li><a href="https://github.com/ComposioHQ/awesome-claude-skills">GitHub - ComposioHQ/awesome- claude - skills : A curated list of...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Claude</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Task Automation</span> <span class="tag-badge">Productivity</span></p>

---