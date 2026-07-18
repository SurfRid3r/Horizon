---
layout: default
title: "Horizon Summary: 2026-07-18 (EN)"
date: 2026-07-18
lang: en
---

> From 33 items, 9 important content pieces were selected

---

1. [GPT-5.6 Reportedly Closes 30-Year Gap in Convex Optimization via Prompt](#item-1) ⭐️ 9.0/10
2. [DPRK hackers hide malware in SVG images during fake coding interviews](#item-2) ⭐️ 9.0/10
3. [Critical "wp2shell" RCE Vulnerability Found in WordPress Core](#item-3) ⭐️ 9.0/10
4. [Moonshot AI Releases Kimi K3: Open-Source 2.8T Model Tops Frontend Code Arena](#item-4) ⭐️ 9.0/10
5. [OpenRouter Reportedly Fields Multi-Billion Dollar Acquisition Interest](#item-5) ⭐️ 9.0/10
6. [LG Monitors Silently Install Software Through Windows Update](#item-6) ⭐️ 8.0/10
7. [Sebastian Raschka Explains How LLMs Learn Adjustable Reasoning Effort Modes](#item-7) ⭐️ 8.0/10
8. [Meta Eyes $10B AI Compute Lease Deal with Anthropic](#item-8) ⭐️ 8.0/10
9. [Trump Administration Considers FINRA-Like Agency to Vet Top AI Models](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [GPT-5.6 Reportedly Closes 30-Year Gap in Convex Optimization via Prompt](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ⭐️ 9.0/10

A researcher reportedly used GPT-5.6, specifically the ChatGPT Pro tier, to close a 30-year-old gap in convex optimization theory related to the efficient handling of non-smooth convex, Lipschitz functions. This was achieved through a single prompt rather than an extended iterative research process. This represents a potential paradigm shift in mathematical research, where AI can now tackle problems that have resisted human effort for decades, suggesting that AI may become a primary tool in theoretical computer science and mathematics. It also raises urgent questions about how the research community should restructure its efforts when AI can rapidly solve 'low-hanging' and 'medium-hanging' problems. The problem involves establishing upper bounds on the time complexity for optimizing convex, Lipschitz functions, where the restriction to a spherical domain is not a true limitation since variable substitution can map any bounded domain. Community members noted this was accomplished using ChatGPT Pro (a multi-agent system) rather than the Ultra tier, and that while significant, the conjecture is somewhat more niche than the cyclic double cover conjecture recently proved by OpenAI.

hackernews · mbustamanter · Jul 18, 13:00 · [Discussion](https://news.ycombinator.com/item?id=48957779)

**Background**: Convex optimization is a subfield of mathematical optimization focused on minimizing convex functions over convex sets, and it underpins many areas of machine learning, engineering, and operations research. While many convex optimization problems admit polynomial-time algorithms, questions about the precise complexity bounds for specific classes of problems—particularly non-smooth convex functions—have remained open for decades. The ability to determine how quickly optimization problems can be solved (time complexity upper and lower bounds) is fundamental to theoretical computer science, as it defines the limits of what is computationally achievable.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Convex_optimization">Convex optimization - Wikipedia</a></li>
<li><a href="https://asibiont.com/en/blog/kak-gpt-5-6-zakryl-30-letniy-probel-v-vypukloy-optimizatsii-razbor-keysa">GPT-5.6 Used a Prompt to Close a 30 - Year Gap in Convex ...</a></li>
<li><a href="https://haltmal.com/learning-knowledge-work/gpt-5-6-used-a-prompt-to-close-a-30-year-gap-in-convex-optimization/">GPT-5.6 Used A Prompt To Close A 30 - Year Gap In Convex ...</a></li>

</ul>
</details>

**Discussion**: Community members with domain expertise confirmed the result is a genuine contribution, though somewhat niche compared to OpenAI's recent cyclic double cover proof. A major debate emerged about the future of math and TCS research, with some arguing that junior researchers will lose the training ground of solving simpler problems, paralleling concerns in software development. Technical discussion also focused on the distinction between ChatGPT Pro's multi-agent approach and the Ultra tier's dynamic workflow orchestration.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Convex Optimization</span> <span class="tag-badge">Research</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-2"></a>

## [DPRK hackers hide malware in SVG images during fake coding interviews](https://www.elastic.co/security-labs/contagious-interview-malware-svg-steganography) ⭐️ 9.0/10

DPRK-aligned threat actors operating under the campaign name 'Contagious Interview' are using SVG steganography to conceal malware within seemingly benign flag images during fake developer job interviews. The embedded malware successfully bypassed detection by every major antivirus vendor, allowing attackers to backdoor developer machines and steal credentials. This campaign represents a significant escalation in social engineering tactics aimed directly at software developers, a high-value target group with access to source code, infrastructure, and enterprise systems. The complete evasion of traditional antivirus solutions demonstrates that file-type-aware threat detection is now essential, and developers must treat coding interview files with the same caution as any untrusted input. The attackers weaponized Scalable Vector Graphics (SVG) files, an XML-based format that supports embedded JavaScript, to conceal malicious payloads using steganographic techniques. During fake interviews, candidates were asked to solve coding challenges involving these SVG flag images, which when opened or processed would execute hidden malware that established backdoor access and harvested credentials.

rss · Elastic Security Labs · Jul 18, 00:00

**Background**: Steganography is a technique used in cybersecurity to hide malicious code or sensitive data inside ordinary digital files such as images, audio, or text, making the payload extremely difficult for traditional security tools to detect. SVG files are particularly attractive to attackers because, unlike raster image formats (e.g., PNG, JPEG), they are XML documents that can natively contain executable JavaScript and arbitrary code. The 'Contagious Interview' campaign aligns with a broader pattern of DPRK cyber operations that target the technology sector for financial gain and intelligence collection, often through elaborate social engineering schemes posing as recruiters or employers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cloudflare.com/cloudforce-one/research/svgs-the-hackers-canvas/">SVGs: the hacker's canvas | Cloudflare</a></li>
<li><a href="https://cybersecuritynews.com/threat-actors-using-weaponized-svg-files/">Threat Actors Using Weaponized SVG Files to Redirect Users to Malicious ...</a></li>
<li><a href="https://www.kaspersky.com/resource-center/definitions/what-is-steganography">What Is Steganography & How Does It Work?</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Steganography</span> <span class="tag-badge">Social Engineering</span> <span class="tag-badge">Software Development</span></p>

---

<a id="item-3"></a>

## [Critical "wp2shell" RCE Vulnerability Found in WordPress Core](https://www.rapid7.com/blog/post/etr-cve-2026-63030-wp2shell-a-critical-remote-code-execution-vulnerability-in-wordpress-core) ⭐️ 9.0/10

Rapid7 disclosed CVE-2026-63030, also known as "wp2shell," a critical unauthenticated remote code execution vulnerability in WordPress Core reported on July 17, 2026. The vulnerability impacts WordPress versions 6.9.0 through 7.0.1 and has been patched in versions 6.9.5 and 7.0.2. As WordPress is one of the most widely deployed content management systems globally, this flaw endangers millions of websites by allowing complete system compromise without requiring any valid credentials. The unauthenticated nature of the attack means administrators must treat this as an urgent priority to prevent widespread exploitation. Exploitation occurs remotely through the WordPress REST API batch endpoint, specifically targeting default installations that lack a persistent object cache. While technical exploit details are currently withheld, researchers warn that AI models could soon generate a public proof-of-concept due to the open-source nature of WordPress.

rss · Rapid7 Cybersecurity Blog · Jul 17, 22:23

**Background**: Remote Code Execution (RCE) is a severe class of vulnerability where attackers run arbitrary commands on a host system. The "wp2shell" vulnerability involves a sophisticated chain of two critical bugs related to REST API batch-route confusion, rather than a single isolated flaw. The WordPress REST API is an interface that allows applications to interact with the site's data, but inadequate handling of batch requests in this case opened the door to exploitation.

<details><summary>References</summary>
<ul>
<li><a href="https://privacyneedle.com/tech-security/wordpress-wp2shell-vulnerability/">WordPress wp 2 shell Vulnerability : Critical Security Update</a></li>
<li><a href="https://tufztech.com/critical-wp2shell-vulnerability-exposes-hundreds-of-millions-of-wordpress-sites-to-unauthenticated-remote-code-execution/">Critical ' wp 2 shell ' Vulnerability Exposes Hundreds of Millions of...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">WordPress</span> <span class="tag-badge">RCE</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-4"></a>

## [Moonshot AI Releases Kimi K3: Open-Source 2.8T Model Tops Frontend Code Arena](https://t.me/zaihuapd/42637) ⭐️ 9.0/10

Moonshot AI has launched Kimi K3, the world's first open-source model with 2.8 trillion parameters, featuring a novel Delta Attention architecture and Attention Residuals. It dramatically jumped from 18th place (with K2.6) to 1st place on the Frontend Code Arena benchmark, scoring 1679 points and beating Fable 5. This release establishes a new state-of-the-art for open-source AI capabilities, proving that openly available models can outperform leading proprietary systems in complex coding tasks. The massive leap in coding performance and native multimodal capabilities signals a potential paradigm shift, heavily impacting developers and the broader open-source ecosystem. Kimi K3 is built on a Hybrid MoE architecture interleaving 3 Kimi Delta Attention (KDA) layers for every 1 Full Attention (MLA) layer, providing an optimal trade-off between throughput and validation loss. It also utilizes Attention Residuals to replace fixed addition with softmax attention over preceding layer outputs, solving the long-standing representation dilution issue in transformer PreNorm setups, while supporting a 1 million token context window.

telegram · zaihuapd · Jul 18, 02:29

**Background**: Delta Attention (KDA) is an expressive linear attention module that forms part of a hybrid architecture, offering higher efficiency than traditional full attention without sacrificing performance. Attention Residuals (AttnRes) is a recent architectural modification that fixes a decade-old flaw in how transformer residual connections aggregate information, preventing earlier representations from being diluted in deep networks. The Frontend Code Arena is a third-party benchmark where developers blindly evaluate and rank models based on their frontend coding capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2510.26692">Kimi Linear: An Expressive, Efficient Attention Architecture</a></li>
<li><a href="https://toknow.ai/posts/attention-residuals-moonshot-ai-kimi-drop-in-fix-prenorm-dilution/">Attention Residuals : A Drop-In Fix for How Every LLM Stacks Its...</a></li>
<li><a href="https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/">Kimi K3 Benchmarks vs Fable 5, GPT-5.6 & Opus</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">large-language-models</span> <span class="tag-badge">open-source</span> <span class="tag-badge">MoE</span> <span class="tag-badge">code-generation</span> <span class="tag-badge">Moonshot-AI</span></p>

---

<a id="item-5"></a>

## [OpenRouter Reportedly Fields Multi-Billion Dollar Acquisition Interest](https://www.theinformation.com/articles/startup-openrouter-fields-multi-billion-dollar-takeover-interest) ⭐️ 9.0/10

AI model routing platform OpenRouter has been approached by multiple large tech companies expressing interest in a potential acquisition, with a reported valuation that could exceed its approximately $1.3 billion post-money valuation from its Series B round in May 2025. OpenRouter is a critical piece of AI infrastructure that serves approximately 8 million users and routes over 400 models, making any acquisition a significant consolidation event in the AI ecosystem. A takeover by a major tech company could reshape how developers access and switch between competing AI models, potentially affecting vendor neutrality and pricing. OpenRouter raised $113 million in its Series B round led by CapitalG (Alphabet's growth investment arm), with a post-money valuation of roughly $1.3 billion — more than double its $547 million Series A valuation from June 2024. The platform processes approximately 100 trillion tokens monthly and has reached an annualized revenue run rate of about $50 million as of early 2026.

telegram · zaihuapd · Jul 18, 03:45

**Background**: OpenRouter is an AI model routing platform that provides developers with a unified API to access over 400 AI models from various providers including OpenAI, Anthropic, Google, and open-source alternatives. Instead of integrating with each model provider separately, developers can use OpenRouter as a single gateway to switch between models, compare outputs, and optimize for cost and performance. The concept of 'model routing' has become increasingly important as the AI landscape fragments across numerous specialized models, each with different strengths, pricing, and availability.

<details><summary>References</summary>
<ul>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>
<li><a href="https://aipure.ai/cn/products/openrouter-ai">OpenRouter ：评论、功能、价格、指南和替代方案</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenRouter</span> <span class="tag-badge">AI</span> <span class="tag-badge">Acquisition</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Startups</span></p>

---

<a id="item-6"></a>

## [LG Monitors Silently Install Software Through Windows Update](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent) ⭐️ 8.0/10

LG monitors have been found to silently install unsandboxed software via Windows Update without user consent when connected through an HDMI cable. This issue affects users who plug in a new LG monitor as well as those who already own older models. This highlights a significant security and privacy vulnerability where hardware peripherals can bypass user consent to install persistent software with full system and internet access. It exposes a broader flaw in Windows device metadata handling that could potentially be abused by malicious peripherals. The installed software runs at startup, operates with full OS privileges without any sandboxing, and executes simply by plugging in the display. Users can prevent this by disabling the automatic download of applications associated with device metadata via the Group Policy Editor (`gpedit.msc`) or by altering device installation settings in `sysdm.cpl`.

hackernews · baranul · Jul 18, 10:21 · [Discussion](https://news.ycombinator.com/item?id=48956688)

**Background**: When display devices like monitors are connected via interfaces such as HDMI or DisplayPort, Windows automatically queries the Windows Update catalog for compatible drivers and manufacturer applications. While this mechanism is intended to streamline the user experience by automatically installing appropriate drivers, hardware manufacturers can exploit it to push potentially unwanted software.

<details><summary>References</summary>
<ul>
<li><a href="https://asibiont.com/en/blog/monitory-lg-tayno-ustanavlivayut-po-cherez-windows-update-bez-vashego-soglasiya-chto-proiskhodit-i-kak-zashchititsya">LG Monitors Silently Install Software Through Windows Update ...</a></li>

</ul>
</details>

**Discussion**: Community members emphasize that the situation is worse than it sounds, as the silently installed software gains full, unsandboxed system access and runs with every boot. Many commenters blame Microsoft's flawed driver consent model rather than just LG, likening it to the old USB 'AutoRun' malware issue, and provide practical workarounds to block automatic installation via Group Policy.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Windows</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">System Administration</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-7"></a>

## [Sebastian Raschka Explains How LLMs Learn Adjustable Reasoning Effort Modes](https://magazine.sebastianraschka.com/p/controlling-reasoning-effort-in-llms) ⭐️ 8.0/10

Sebastian Raschka published a detailed article explaining how Large Language Models can be trained to support low-, medium-, and high-effort reasoning modes, where the learned effort mode determines how the model allocates its reasoning tokens. The article also covers training methods that could potentially reduce token usage by 30–50% by allowing models to dynamically switch reasoning depth at inference time. Controlling reasoning effort is a critical capability for making reasoning models more efficient and practical, as it avoids the "overthinking" problem where advanced models waste compute on simple problems. This approach directly impacts deployment costs, latency, and the accessibility of reasoning-capable LLMs across different use cases. The distinction between effort mode and token budget is central: the learned effort mode governs how the model strategically uses its reasoning tokens, while the budget places a hard constraint on how long the reasoning trace can continue. OpenAI's o3-mini has implemented a similar approach with built-in reasoning effort settings that change how intensively the model thinks before responding.

rss · Ahead of AI · Jul 18, 11:16

**Background**: Test-time compute has emerged as a key dimension for improving LLM reasoning, with research showing that optimally scaling test-time compute can allow smaller models to outperform 14x larger models on certain problems. Difficulty-adaptive reasoning methods have been developed to allocate reasoning effort, sampling budget, and exploration depth based on the estimated difficulty of an input. However, studies have also revealed that on simple problems, advanced reasoning models can paradoxically perform worse than simpler models due to a phenomenon called "overthinking."

<details><summary>References</summary>
<ul>
<li><a href="https://magazine.sebastianraschka.com/p/controlling-reasoning-effort-in-llms">How LLMs Learn Low -, Medium -, and High - Effort Reasoning Modes</a></li>
<li><a href="https://gentic.news/article/llms-learn-to-switch-reasoning">LLMs Learn to Switch Reasoning Effort at… | gentic.news</a></li>
<li><a href="https://arxiv.org/abs/2408.03314">[2408.03314] Scaling LLM Test - Time Compute Optimally can be More...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Reasoning</span> <span class="tag-badge">Deep Learning</span></p>

---

<a id="item-8"></a>

## [Meta Eyes $10B AI Compute Lease Deal with Anthropic](https://www.nytimes.com/2026/07/17/technology/meta-anthropic-ai-computing-power.html) ⭐️ 8.0/10

Meta is in early-stage negotiations with AI startup Anthropic to lease its AI data center computing power in a potential two-year, $10 billion deal. Anthropic proposed the arrangement in June, and under the terms discussed, it would pay monthly while both parties retain the right to exit the agreement early. A deal of this magnitude underscores the extreme scarcity of AI computing power and signals a shift where infrastructure-rich tech giants can monetize excess capacity. For Meta, it offers a new revenue stream to offset its planned $145 billion spending this year—much of it on AI and data centers—and helps ease investor pressure over its massive capital expenditures. The negotiations are still at an early stage and may not result in a final agreement, according to people familiar with the matter. Anthropic would pay on a monthly basis under the proposed terms, and both companies would have the flexibility to exit the deal early, suggesting a structure designed to manage the uncertainty of AI demand.

telegram · zaihuapd · Jul 18, 01:14

**Background**: AI computing power—primarily powered by GPUs like NVIDIA's H100—has become a critical and scarce resource as companies race to train and deploy large language models. Meta is one of the largest buyers of AI chips and has committed to spending up to $145 billion this year, with significant portions allocated to AI infrastructure and data center construction. Anthropic, founded by former OpenAI researchers and backed by Amazon, is the maker of the Claude AI assistant and requires massive compute resources to compete with rivals like OpenAI's GPT series. Leasing compute from Meta would represent an alternative to building or buying dedicated infrastructure, an increasingly attractive option given supply constraints in the AI chip market.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">算力</span> <span class="tag-badge">商业新闻</span></p>

---

<a id="item-9"></a>

## [Trump Administration Considers FINRA-Like Agency to Vet Top AI Models](https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models) ⭐️ 8.0/10

The Trump administration is reviewing a proposal to create an independent regulatory agency, modeled after the Financial Industry Regulatory Authority (FINRA), to vet the safety of advanced AI models. Spearheaded by Treasury Secretary Scott Bessent, the framework aims to address Wall Street's cybersecurity concerns and Silicon Valley's dissatisfaction with ad-hoc government controls. This proposal represents a significant policy shift towards an industry self-regulatory model for AI, potentially replacing ad-hoc interventions with a structured framework. It would directly impact leading AI companies like OpenAI and Anthropic by providing a more predictable compliance pathway for their top-tier models. The proposed agency would report to the Securities and Exchange Commission (SEC) and is currently being reviewed by White House Chief of Staff Susie Wiles. The plan aligns with a recent suggestion by Google DeepMind CEO Demis Hassabis for an industry-funded independent regulator, though President Trump has not yet seen the proposal and details may change.

telegram · zaihuapd · Jul 18, 05:45

**Background**: FINRA is a Congressionally authorized non-profit self-regulatory organization (SRO) that oversees brokerage firms in the US, operating to protect investors and ensure market integrity. Recently, tech companies have clashed with government regulators over AI safety; both Anthropic and OpenAI have objected to government demands to modify or restrict the release of their latest models.

<details><summary>References</summary>
<ul>
<li><a href="https://baike.baidu.com/item/美国金融业监管局/9213493">美国金融业监管局_百度百科</a></li>
<li><a href="https://www.winzheng.com/article/anthropic-ai-safety-warning-backfires-government-recall">安 全 警告反噬？ Anthropic 最强 AI 遭 政 府 强制下架 | 赢 政 天下</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Regulation</span> <span class="tag-badge">US Policy</span> <span class="tag-badge">Government</span> <span class="tag-badge">Artificial Intelligence</span></p>

---