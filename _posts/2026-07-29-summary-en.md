---
layout: default
title: "Horizon Summary: 2026-07-29 (EN)"
date: 2026-07-29
lang: en
---

> From 53 items, 11 important content pieces were selected

---

1. [Critical Unauthenticated RCE Vulnerability Discovered in JetBrains TeamCity](#item-1) ⭐️ 10.0/10
2. [Mitchell Hashimoto Announces Superlogical for Terminal and Agentic App Integration](#item-2) ⭐️ 9.0/10
3. [OpenAI's Hardware Roadmap: AI Speaker and Phone Target 2027 Launch](#item-3) ⭐️ 9.0/10
4. [Russia's FSB Charges Telegram Founder Pavel Durov with Assisting Terrorism](#item-4) ⭐️ 9.0/10
5. [TurboFieldfare: Running Gemma 4 26B in 2 GB RAM on M-series Macs](#item-5) ⭐️ 8.0/10
6. [Document-Borne AI Worms Can Self-Propagate Through Copilot for Word](#item-6) ⭐️ 8.0/10
7. [Dysphoria Botnet Infects 200,000+ Devices with Blockchain-Hidden C2](#item-7) ⭐️ 8.0/10
8. [Claude Shared Conversation Links Indexed by Search Engines, Exposing Private Data](#item-8) ⭐️ 8.0/10
9. [Nvidia Notifies AIC Partners of GPU Price Hikes; Shipments Halted](#item-9) ⭐️ 8.0/10
10. [Report Reveals Hugging Face Widely Exploited for Deepfake Nudity](#item-10) ⭐️ 8.0/10
11. [Nvidia Stock and Credit Default Swaps Show Unprecedented Divergence](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Critical Unauthenticated RCE Vulnerability Discovered in JetBrains TeamCity](https://www.rapid7.com/blog/post/etr-cve-2026-63077-critical-unauthenticated-remote-code-execution-in-jetbrains-teamcity) ⭐️ 10.0/10

On July 27, 2026, JetBrains disclosed CVE-2026-63077, a critical vulnerability with a CVSS score of 9.8 affecting all versions of TeamCity On-Premises. This unauthenticated remote code execution flaw exploits the agent polling protocol via the deserialization of untrusted data. This vulnerability allows unauthenticated remote attackers to bypass authentication, execute arbitrary operating system commands, read stored credentials, and compromise the integrity of CI/CD pipelines. As TeamCity is a widely used CI/CD platform, successful exploitation poses a severe risk to the software supply chain, requiring immediate mitigation. Organizations are urged to update to the fixed versions (2025.11.7 or 2026.1.3) or apply JetBrains' security patch plugin for versions 2017.1 and later. TeamCity Cloud customers are unaffected, but administrators should restrict network access as a defense-in-depth measure while prioritizing immediate upgrades.

rss · Rapid7 Cybersecurity Blog · Jul 29, 16:16

**Background**: JetBrains TeamCity is a continuous integration and continuous deployment (CI/CD) platform that helps automate software building, testing, and deployment. The server communicates with build agents using an "agent polling protocol," where agents establish an HTTP(S) connection to periodically check for pending tasks. Deserialization of untrusted data (CWE-502) occurs when an application reconstructs an object from maliciously crafted input without proper validation, often leading to arbitrary code execution.

<details><summary>References</summary>
<ul>
<li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html">Deserialization - OWASP Cheat Sheet Series</a></li>
<li><a href="https://www.jetbrains.com/help/teamcity/install-and-start-teamcity-agents.html">Install and Start TeamCity Agents | TeamCity On-Premises</a></li>
<li><a href="https://www.jetbrains.com/zh-cn/teamcity/features/build-automation/">构建自动化 – 功能 | JetBrains TeamCity</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">CVE</span> <span class="tag-badge">JetBrains TeamCity</span> <span class="tag-badge">RCE</span></p>

---

<a id="item-2"></a>

## [Mitchell Hashimoto Announces Superlogical for Terminal and Agentic App Integration](https://www.superlogical.com/) ⭐️ 9.0/10

Mitchell Hashimoto, co-founder of HashiCorp and creator of the Ghostty terminal emulator, has announced Superlogical, a new company building an advanced platform for terminal and agentic application integration on top of libghostty. The team already includes veterans from HashiCorp, Vercel, Poolside, and Heroku, and the company is actively hiring. This represents a significant bet on the future of terminal-based workflows at a time when AI coding agents are proliferating but lack unified integration infrastructure. By building on the open-source libghostty and committing to upstream contributions, Superlogical could become a central platform that bridges traditional terminal applications with modern agentic workflows, potentially reshaping how developers interact with AI agents. Ghostty ownership has been transferred to a non-profit, and Superlogical will consume the same MIT-licensed libghostty components available to everyone, continuing to upstream shared terminal work. The company's hiring page itself is notable — accessible via `ssh superlogical.jobs`, displaying job descriptions directly in the terminal, showcasing the platform's philosophy.

hackernews · yan · Jul 29, 15:41 · [Discussion](https://news.ycombinator.com/item?id=49098965)

**Background**: Ghostty is a modern, fast terminal emulator created by Mitchell Hashimoto, and libghostty is its embeddable library form designed to let any application embed a fully functional terminal emulator. Mitchell Hashimoto is widely respected in the software engineering community as the co-founder of HashiCorp, the company behind tools like Terraform, Vault, and Consul. The terminal ecosystem has historically been fragmented, with various terminal protocols and wrappers requiring individual support, making integration efforts challenging.

<details><summary>References</summary>
<ul>
<li><a href="https://mitchellh.com/writing/superlogical">Superlogical – Mitchell Hashimoto</a></li>
<li><a href="https://mitchellh.com/writing/libghostty-is-coming">Libghostty Is Coming – Mitchell Hashimoto</a></li>
<li><a href="https://daily.dev/posts/mitchell-hashimoto-starts-superlogical-beginning-with-a-terminal-multiplexer-eaqqccwhc">Mitchell Hashimoto starts Superlogical, beginning with a...</a></li>

</ul>
</details>

**Discussion**: Commenters drew parallels to historical component technologies like COM/OLE/ActiveX, noting that Superlogical aims to solve a similar integration problem but in a modern terminal and agentic context. The open-source governance model — transferring Ghostty to a non-profit while building Superlogical on top — was widely praised as an exemplary approach to commercial open-source. Several commenters also compared it to emerging agentic multiplexer tools and highlighted the potential value of centralizing the fragmented terminal ecosystem.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Development Tools</span> <span class="tag-badge">Terminal</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Mitchell Hashimoto</span></p>

---

<a id="item-3"></a>

## [OpenAI's Hardware Roadmap: AI Speaker and Phone Target 2027 Launch](https://www.macrumors.com/2026/07/28/openai-first-devices/) ⭐️ 9.0/10

OpenAI's hardware roadmap is taking shape, with a screenless, ChatGPT-powered portable AI speaker developed with Jony Ive slated for an early 2027 launch at a price of $200 to $300. Furthermore, the production timeline for OpenAI's AI phone has been accelerated to the first half of 2027, with an estimated 30 million units shipping between 2027 and 2028. This marks a massive strategic expansion by OpenAI into consumer electronics, potentially disrupting the post-smartphone hardware market currently dominated by Apple. It also highlights the escalating industry rivalry, as evidenced by Apple's ongoing trade secret lawsuit against OpenAI. The hardware initiative stems from OpenAI's $6.5 billion acquisition of io Products and the recruitment of over 400 former Apple employees. Future roadmap items also include smart glasses, smart lights, and earphones, though Apple's July 10 lawsuit over alleged trade secret theft could significantly impact these plans.

telegram · zaihuapd · Jul 29, 04:13

**Background**: io Products is an AI hardware company founded in 2024 by Jony Ive and other former Apple executives, which OpenAI acquired in May 2025 to lead its hardware development. Following the acquisition, Jony Ive and his design firm LoveFrom remained independent but took on deep design and creative responsibilities across OpenAI. Apple subsequently filed a federal lawsuit accusing OpenAI of stealing trade secrets and breaching contracts to develop its own consumer hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Io_(company)">io (company) - Wikipedia</a></li>
<li><a href="https://openai.com/sam-and-jony/">A letter from Sam & Jony - OpenAI</a></li>
<li><a href="https://www.lawnews.co.uk/sector-insights/legal-tech/the-apple-openai-trade-secrets-lawsuit-is-bigger-than-you-think-and-heres-why/">The Apple OpenAI Trade Secrets Lawsuit Is Bigger... - Law News</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Consumer Electronics</span> <span class="tag-badge">Jony Ive</span> <span class="tag-badge">Apple</span></p>

---

<a id="item-4"></a>

## [Russia's FSB Charges Telegram Founder Pavel Durov with Assisting Terrorism](https://www.interfax.ru/russia/1106228) ⭐️ 9.0/10

On July 29, Russia's Federal Security Service (FSB) filed criminal charges against Telegram founder Pavel Durov under Article 205.1 of the Russian Criminal Code for assisting terrorist activities and placed him on an international wanted list. The FSB alleges that Telegram's management refused to delete channels, groups, and bots used by Ukrainian intelligence and extremist organizations to coordinate sabotage, terrorist attacks, and cyber fraud within Russia. This move highlights the escalating tensions between state security agencies and global encrypted communication platforms over content moderation, user privacy, and censorship. The international arrest warrant for the founder of a platform used by hundreds of millions worldwide sets a significant precedent for how governments legally pursue tech executives who resist censorship demands. The charges specifically cite Telegram's refusal to comply with takedown requests for specific channels and bots that the FSB claims facilitated terrorism and cyber fraud. The FSB alleges this non-compliance resulted in numerous casualties, including women and children, and billions of rubles in damages.

telegram · zaihuapd · Jul 29, 05:56

**Background**: The Federal Security Service (FSB) is Russia's principal security agency and the main successor to the Soviet KGB, responsible for counterintelligence, antiterrorism, and internal security. Article 205.1 of the Russian Criminal Code specifically addresses assisting terrorist activities, which can include public justification of terrorism or providing resources to terrorist organizations. Telegram is a cloud-based instant messaging service known for its strong encryption and relatively hands-off content moderation, making it a popular tool for both activists and, controversially, illicit actors.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Federal_Security_Service">Federal Security Service - Wikipedia</a></li>
<li><a href="https://www.unodc.org/cld/en//legislation/rus/the_criminal_code_of_the_russian_federation_russianenglish/chapter_24/article_205.1_-_205.3/article_205.1_-_205.3.html?lng=en">Article 205.1 - 205.3</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Pavel Durov</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Freedom of Speech</span></p>

---

<a id="item-5"></a>

## [TurboFieldfare: Running Gemma 4 26B in 2 GB RAM on M-series Macs](https://github.com/drumih/turbo-fieldfare) ⭐️ 8.0/10

TurboFieldfare is an open-source Swift and Metal inference engine that runs the 4-bit quantized Gemma 4 26B-A4B-IT model in approximately 2 GB of RAM on any Apple Silicon Mac, including 8 GB models. It achieves this by keeping only the shared model layers and KV cache in RAM while streaming the required MoE routed experts on-demand from the SSD, achieving 5–6 tok/s on an 8 GB M2 MacBook Air and 31–35 tok/s on an M5 MacBook Pro. This project demonstrates a practical solution to the growing problem of insufficient RAM for running large language models on consumer devices, an especially relevant issue for Apple Silicon Macs where memory is unified but often limited. By leveraging the Mixture-of-Experts architecture to stream only active experts from SSD, it opens the door to running multi-billion-parameter models on low-RAM hardware that was previously considered incapable of such tasks. The engine maintains an expert cache and uses bounded parallel `pread` calls to overlap SSD reads with GPU computation of the shared model layers, mitigating the latency gap between SSD and RAM. It also includes an experimental OpenAI-compatible local server with streaming and tool-call support, and the author documented over 100 experiments in the GitHub repo, most of which failed before arriving at the working design.

hackernews · gitpusher42 · Jul 29, 15:05 · [Discussion](https://news.ycombinator.com/item?id=49098510)

**Background**: Gemma 4 26B-A4B-IT is a Mixture-of-Experts (MoE) model from Google DeepMind where 'A4B' indicates approximately 4 billion active parameters per token out of 26 billion total. In MoE architectures, only a subset of expert sub-networks is activated for each token, meaning the full set of weights is never needed simultaneously. Traditional inference engines load the entire model into RAM, which becomes impractical when the model's quantized weights (e.g., ~14 GB for 4-bit Gemma 4 26B) exceed available memory after accounting for the OS, applications, and KV cache. TurboFieldfare exploits the MoE sparsity by keeping only the always-active shared expert and routing infrastructure in RAM, fetching the routed experts from SSD on demand.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/drumih/turbo-fieldfare">GitHub - drumih/turbo-fieldfare: Gemma 4 26B-A4B inference in ~2 GB of ...</a></li>
<li><a href="https://huggingface.co/google/gemma-4-26B-A4B-it">google/gemma-4-26B-A4B-it · Hugging Face</a></li>
<li><a href="https://research.google/blog/mixture-of-experts-with-expert-choice-routing/">Mixture-of-Experts with Expert Choice Routing - Google Research</a></li>

</ul>
</details>

**Discussion**: Community members raised important security concerns, with one user running an automated security review of the Swift source code. Several commenters compared the approach to llama.cpp's mmap capability and questioned why conventional inference engines load the entire model into memory by default. Others shared practical tips for compiling on older macOS versions and discussed the performance trade-offs of the SSD streaming approach versus traditional memory-resident inference.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">On-Device AI</span> <span class="tag-badge">Apple Silicon</span> <span class="tag-badge">Swift</span> <span class="tag-badge">Memory Optimization</span></p>

---

<a id="item-6"></a>

## [Document-Borne AI Worms Can Self-Propagate Through Copilot for Word](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/) ⭐️ 8.0/10

Security researchers have demonstrated that malicious prompt injection instructions embedded in externally shared Word documents can hijack Copilot for Word, causing it to alter drafted or edited documents and propagate the attack to new documents without user knowledge. This creates a self-replicating AI worm that spreads through widely used productivity software, and at the time of publication no robust mitigation for this broader vulnerability class is available. This exposes a fundamental vulnerability class in AI agents integrated into productivity tools used by millions of people daily, potentially enabling self-propagating malware epidemics similar to traditional computer worms. As AI assistants like Copilot are granted increasing access to local files, emails, and system resources, the blast radius of a successful exploitation grows significantly, threatening data integrity and confidentiality across organizations. The attack exploits a phenomenon known as 'context collapse,' where the LLM cannot distinguish legitimate user instructions from malicious prompts embedded in the data it processes, allowing hidden instructions (such as those using Unicode tricks or invisible white text) to execute arbitrary commands. The worm can propagate not only across documents but also through connected services, and community members note that the fundamental architectural issue of mixing instructions with data means no robust fix exists in current LLM architectures.

hackernews · Canopy9560 · Jul 29, 11:44 · [Discussion](https://news.ycombinator.com/item?id=49096188)

**Background**: Prompt injection is a cybersecurity exploit where innocuous-looking inputs are designed to override a model's intended instructions and cause unintended behavior, such as leaking sensitive data or executing unauthorized actions. AI worms represent a new class of malware that uses self-replicating prompt injections to spread infections through interconnected GenAI applications, functioning similarly to how the Morris Worm self-replicated across networked systems in 1988. Context collapse occurs when an AI system cannot distinguish between instructions from different sources—the user's legitimate prompt versus hidden instructions embedded in document content—which is an inherent feature of current LLM architectures since all text input is treated equivalently.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection - Wikipedia</a></li>
<li><a href="https://www.sentinelone.com/cybersecurity-101/cybersecurity/ai-worms/">AI Worms Explained: Adaptive Malware Threats - SentinelOne</a></li>
<li><a href="https://www.ibm.com/think/topics/prompt-injection">What is a prompt injection attack? - IBM</a></li>

</ul>
</details>

**Discussion**: The community discussion reflects deep concern about the inherent unsafety of current LLM architectures, with multiple commenters agreeing that the fundamental mixing of instructions with data makes this vulnerability class unfixable without an architectural paradigm shift. Several commenters raised alarming escalation scenarios, including worms spreading through GitHub comments that could steal cryptocurrency wallets, while one user noted they had uninstalled Copilot entirely and disabled AI in all local applications as a defensive measure against these confusion attacks.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Prompt Injection</span> <span class="tag-badge">Copilot</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Context Collapse</span></p>

---

<a id="item-7"></a>

## [Dysphoria Botnet Infects 200,000+ Devices with Blockchain-Hidden C2](https://blog.xlab.qianxin.com/botnet-rising-star-the-evolution-and-in-depth-technical-analysis-of-dysphoria/) ⭐️ 8.0/10

A joint report by CNCERT and QiAnXin XLab reveals that the Dysphoria botnet, first detected in March 2026, has rapidly infected over 200,000 devices worldwide and undergone multiple variant iterations within just a few months. The botnet represents a significant evolution from the earlier jackskid and fbot malware families, incorporating blockchain-based command-and-control infrastructure using Ethereum (ENS) and Solana (SNS) domains. Dysphoria's rapid spread to 200,000 nodes and its use of blockchain domains for C2 concealment represent a troubling escalation in botnet sophistication, making detection and takedown significantly more difficult for defenders. The botnet's DDoS and traffic relay capabilities pose immediate threats to network infrastructure globally, while its fast iteration cycle demonstrates the operator's ability to quickly adapt and evade security measures. Dysphoria resolves ENS/SNS blockchain records to extract hidden command server IPs from disguised IPv6 strings, and employs a modified RC4 encryption scheme to protect its code strings. The malware is primarily used for distributed denial-of-service (DDoS) attacks and traffic relay operations across compromised devices.

rss · 奇安信 X 实验室 · Jul 29, 02:09

**Background**: A botnet is a network of compromised internet-connected devices controlled by a central attacker, typically used for large-scale DDoS attacks, spam campaigns, or traffic relay. Command-and-control (C2) servers are the infrastructure that botmasters use to issue instructions to infected nodes, and concealing these servers is critical for botnet survival. Blockchain-based domain systems like Ethereum Name Service (ENS) and Solana Name Service (SNS) allow attackers to store and resolve IP addresses on decentralized ledgers, making takedowns extremely difficult since no single authority controls the records. CNCERT/CC is China's national computer emergency response team responsible for cybersecurity threat coordination.

<details><summary>References</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/new-dysphoria-ddos-botnet-spreads-to-200k-devices-worldwide/">New Dysphoria DDoS botnet spreads to 200k devices worldwide</a></li>
<li><a href="https://www.cointrust.com/ethereum-news/dysphoria-botnet-hides-command-servers-using-ethereum-and-solana-domains">Dysphoria Botnet Hides Command Servers Using Ethereum and...</a></li>
<li><a href="https://news-pravda.com/russia/2026/07/29/2477568.html">Dysphoria botnet shifts C2 concealment to blockchain domains</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">Malware Analysis</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Vulnerabilities</span></p>

---

<a id="item-8"></a>

## [Claude Shared Conversation Links Indexed by Search Engines, Exposing Private Data](https://t.me/zaihuapd/42830) ⭐️ 8.0/10

Anthropic's Claude platform is experiencing a severe privacy vulnerability where shared conversation links lack the "noindex" meta tag. Consequently, Google and other search engines have indexed these conversations, making highly sensitive user data like API keys, cryptocurrency wallets, and Social Security Numbers publicly searchable. This privacy breach exposes extremely sensitive personal and corporate data, potentially leading to identity theft, financial loss, and unauthorized system access. It underscores persistent security blind spots in AI platforms, mirroring a similar issue ChatGPT faced about a year ago. Because Anthropic has not yet resolved the vulnerability, users should immediately navigate to the "Shared Conversations" management page in their settings and manually delete any shared links containing personal or financial information. Utilizing the HTML robots meta tag with the "noindex" value is a standard practice that requests automated Internet bots to avoid indexing a web page.

telegram · zaihuapd · Jul 29, 02:40

**Background**: A "noindex" tag is a value of the HTML robots meta tag that requests automated Internet bots avoid indexing a web page so it won't appear in search results. An API key is a secret unique identifier used to authenticate and authorize a user, developer, or calling program to an API. If these keys are exposed on public search engines via shared conversations, malicious actors could exploit them to access protected systems or incur unauthorized billing charges.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Noindexing">Noindexing</a></li>
<li><a href="https://en.wikipedia.org/wiki/API_key">API key</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">privacy</span> <span class="tag-badge">claude</span> <span class="tag-badge">anthropic</span> <span class="tag-badge">data-leak</span></p>

---

<a id="item-9"></a>

## [Nvidia Notifies AIC Partners of GPU Price Hikes; Shipments Halted](https://t.me/zaihuapd/42834) ⭐️ 8.0/10

Nvidia has issued a price increase notification to all AIC (Add-in Card) partners, covering both Blackwell flagship products with GDDR7 memory and GeForce consumer-grade products with GDDR6 memory. In response, major graphics card manufacturers have sealed their warehouses and suspended external shipments, with RTX 50 series supply tightening further from late July. This price adjustment represents a significant supply chain disruption that will directly affect consumer pricing, developer hardware procurement costs, and the broader PC market. The decision also reflects Nvidia's shift away from bundling memory with GPU chips, forcing AIC partners to independently procure memory amid ongoing shortages and escalating GDDR7 production costs. Supply chain sources indicate that memory cost increases amount to approximately $76 for 8GB cards, $114 for 12GB cards, and $152 for 16GB cards. Specific pricing policies will be finalized in August, while GPU supply to AIC partners has already been reduced by an estimated 15-20%, with some partners like ASUS reportedly halting production of certain models such as the RTX 5070 Ti.

telegram · zaihuapd · Jul 29, 03:54

**Background**: AIC (Add-in Card) partners are manufacturers that produce graphics cards using Nvidia GPU chips, typically purchasing both the GPU and memory as a bundled package from Nvidia. Nvidia previously sourced memory from Samsung, Micron, or SK Hynix and bundled it with GPU chips for AIC partners, but ongoing memory shortages have made this model unsustainable. The Blackwell architecture is Nvidia's latest GPU microarchitecture, announced at GTC 2024 in March 2024, succeeding the Hopper and Ada Lovelace architectures, with flagship products using the newer GDDR7 memory standard that offers significantly higher bandwidth than the previous GDDR6.

<details><summary>References</summary>
<ul>
<li><a href="http://www.phpxs.com/post/13729/">英 伟 达 显卡涨价在即： 英 伟 达 停止在捆绑显存 要求 AIC ...</a></li>
<li><a href="https://www.3dhome.cn/blog_detail/86.html">3dhome.cn/blog_detail/86.html</a></li>
<li><a href="https://en.wikipedia.org/wiki/Nvidia_Blackwell">Nvidia Blackwell</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">GPU</span> <span class="tag-badge">硬件</span> <span class="tag-badge">供应链</span> <span class="tag-badge">价格变动</span></p>

---

<a id="item-10"></a>

## [Report Reveals Hugging Face Widely Exploited for Deepfake Nudity](https://www.theverge.com/ai-artificial-intelligence/971723/hugging-face-nudify-deepfake-undress-women-children) ⭐️ 8.0/10

On July 28, European non-profit AI Forensics published a report revealing that Hugging Face's platform is being massively exploited to generate non-consensual deepfake pornography. Testing showed that seven of the top nine image-editing models could easily "undress" women with simple prompts, and a honeypot space set up by researchers received over 1,000 requests in seven days, with 73% involving sexual content and nearly 7% targeting children. This report exposes a severe safety and moderation gap on one of the world's largest open-source AI model hosting platforms, directly contradicting its own policies against non-consensual sexual content and minor exploitation. It highlights the urgent tension between open-source AI accessibility and the need for effective guardrails, potentially pressuring the entire open-source ecosystem to adopt stronger content filtering measures. Researchers found that no elaborate prompt engineering was needed to bypass safeguards — simple text prompts sufficed to generate explicit imagery from the top-ranked models. AI Forensics recommended that Hugging Face implement prompt-level filtering and output scanning mechanisms to block harmful image generation at the platform level.

telegram · zaihuapd · Jul 29, 08:20

**Background**: Hugging Face is a major open-source platform hosting over 500,000 machine learning models, datasets, and applications, widely regarded as the central hub for the AI research community. AI Forensics is a European non-profit organization founded in 2021 that investigates influential and opaque algorithmic systems to hold technology platforms accountable. A honeypot, in cybersecurity terminology, is a decoy system designed to attract and monitor malicious activity, which researchers used here to measure the volume and nature of harmful requests on the platform.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/">Hugging Face – The AI community building the future.</a></li>
<li><a href="https://aiforensics.org/about">AIForensics</a></li>
<li><a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">Honeypot (computing) - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">Deepfake</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">Content Moderation</span> <span class="tag-badge">Open Source AI</span></p>

---

<a id="item-11"></a>

## [Nvidia Stock and Credit Default Swaps Show Unprecedented Divergence](https://www.zerohedge.com/markets/chart-jensen-huang-does-not-want-you-see) ⭐️ 8.0/10

A massive divergence has emerged between Nvidia's stock price, which remains near all-time highs, and its Credit Default Swaps (CDS), which nearly doubled in a single week. This split highlights growing credit market concerns over a 'circular financing' ecosystem where Nvidia allegedly helps provide massive financing to AI clients like OpenAI and SK Group to purchase its own chips. This divergence signals a potential systemic risk in the AI industry, where demand might be artificially inflated through interconnected corporate financing rather than genuine end-user needs. If this opaque financing chain breaks, it could trigger cascading defaults, credit rating downgrades, and a severe correction in AI infrastructure valuations. Credit investors are deeply concerned that massive capital expenditures are destroying free cash flow, with the industry's free cash flow inflection point not expected until the second half of 2027. Meanwhile, stock investors remain focused on top-line revenue growth, ignoring the mounting debt burden and the low transparency of off-balance-sheet transactions.

telegram · Marcoview666 · Jul 29, 07:56

**Background**: Credit Default Swaps (CDS) function as a type of insurance against a company's debt default, meaning rapidly rising CDS spreads indicate that the credit market perceives a significantly higher risk of default. 'Circular financing' refers to a closed-loop funding mechanism where a supplier provides capital or guarantees to buyers, enabling them to purchase the supplier's products. In the AI sector, massive infrastructure costs force cash-burning start-ups with low credit ratings to rely on highly-rated entities like Nvidia and cloud providers to back their debt issuance.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Credit Default Swaps</span> <span class="tag-badge">Systemic Risk</span> <span class="tag-badge">Financial Analysis</span></p>

---