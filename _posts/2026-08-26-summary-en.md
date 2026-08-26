---
layout: default
title: "Horizon Summary: 2026-08-26 (EN)"
date: 2026-08-26
lang: en
---

> From 51 items, 7 important content pieces were selected

---

1. [AWS Acquires DuckLabs, Company Behind DuckDB; Foundation Keeps Open-Source IP](#item-1) ⭐️ 9.0/10
2. [Qwen3.8-Flash-Next: 125B Model With 51B N-gram Embeddings Beats Dense 27B](#item-2) ⭐️ 9.0/10
3. [DeepSeek-V4-Pro Officially Launches with Peak/Off-Peak API Pricing](#item-3) ⭐️ 9.0/10
4. [Microsoft Details Real-World Attacks on Exposed LiteLLM AI Gateways](#item-4) ⭐️ 8.0/10
5. [FalconForce Research: Forged ETW Telemetry Can Deceive Analysts and Blind EDRs](#item-5) ⭐️ 8.0/10
6. [CVE-2026-8933: Ubuntu snap-confine Security Hardening Introduced Root Privilege Escalation](#item-6) ⭐️ 8.0/10
7. [Zhipu Confirms Ox Alpha as New GLM Iteration, Doubling DeepSeek's Usage](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [AWS Acquires DuckLabs, Company Behind DuckDB; Foundation Keeps Open-Source IP](https://ducklabs.com/news/2026/08/26/ducklabs-to-join-aws) ⭐️ 9.0/10

On August 26, 2026, AWS announced its acquisition of DuckLabs, the commercial company behind the DuckDB analytical database. Crucially, all intellectual property of open-source DuckDB remains with the independent nonprofit DuckDB Foundation, and the projects will continue under the MIT license. DuckDB has become one of the most widely adopted embedded analytical databases, embedded in countless data tools and pipelines, so Amazon's influence over its core development team could reshape the project's direction and community trust. The acquisition also highlights the broader tension between commercial consolidation of open-source infrastructure and independent governance. The DuckLabs team will continue working in open source, and the DuckDB Foundation plans to set up a stakeholder advisory board that can influence the direction of the projects. Peter Boncz, the CWI representative on the Foundation, confirmed that the foundation "holds all IP of open-source DuckDB, and will continue to do so."

hackernews · onderkalaci · Aug 26, 12:59 · [Discussion](https://news.ycombinator.com/item?id=49448321)

**Background**: DuckDB is an open-source, in-process (embedded) columnar SQL database optimized for fast analytical (OLAP) queries over large datasets, and it is widely used by data scientists and engineers from environments like Python and R. It was created by Mark Raasveldt and Hannes Mühleisen at Centrum Wiskunde & Informatica (CWI) in the Netherlands and first released in 2019. DuckLabs is the commercial company spun out of CWI to support DuckDB's development, while the nonprofit DuckDB Foundation independently holds the project's IP — a governance split that now insulates the open-source code from this acquisition.

<details><summary>References</summary>
<ul>
<li><a href="https://duckdb.org/2026/08/26/ducklabs-to-join-aws">DuckLabs to Join AWS, Projects to Remain Open Source – DuckDB</a></li>
<li><a href="https://motherduck.com/blog/duckdb-amazon/">DuckDB outgrows its nest | MotherDuck</a></li>
<li><a href="https://en.wikipedia.org/wiki/DuckDB">DuckDB - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community reaction is mixed: commenters congratulated the founders on their exit while worrying that Amazon "has the least regard for keeping technically interesting projects alive" and may bulldoze DuckDB in a future re-org. Several pointed out the headline is misleading — AWS bought DuckLabs, not DuckDB itself, whose IP stays with the Foundation — and others recommended alternatives such as Apache DataFusion, noting it integrates better into Rust applications.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AWS</span> <span class="tag-badge">DuckDB</span> <span class="tag-badge">acquisition</span> <span class="tag-badge">open-source</span> <span class="tag-badge">databases</span></p>

---

<a id="item-2"></a>

## [Qwen3.8-Flash-Next: 125B Model With 51B N-gram Embeddings Beats Dense 27B](https://qwen.ai/blog?id=qwen3.8-flash-next) ⭐️ 9.0/10

Alibaba's Qwen team released Qwen3.8-Flash-Next, a model combining a 125B-parameter main model with an additional 51B N-gram embeddings, activating only 6B parameters per token. It reportedly beats the larger Qwen3.8 dense 27B model while running at usable speeds on consumer hardware such as MacBooks. This release demonstrates a novel architecture that trades memory capacity for compute efficiency, making frontier-level quality accessible for self-hosting on consumer machines. As one of the most widely-used open-source LLM families, Qwen's architectural innovation could shape how future open models balance total capacity against inference cost. The total parameter count is roughly 176B (125B main model plus 51B N-gram embeddings), raising quantization questions — one commenter doubts a 4-bit quant would fit under 100GB or run in 128GB of unified memory. Early llama.cpp experiments using an iq4_xs quantization on merged tentative branches achieved 23.54 tokens/sec, versus high-30s tokens/sec for the 3.8 dense 27B on the same setup.

hackernews · tosh · Aug 26, 12:52 · [Discussion](https://news.ycombinator.com/item?id=49448210)

**Background**: Traditional dense language models activate all parameters for every token, so compute cost grows proportionally with model size. Sparse architectures like Mixture of Experts (MoE) decouple this: a large total parameter count provides more knowledge capacity, while a routing mechanism activates only a small subset per token, keeping inference fast. N-gram language models are a classical statistical approach that predicts the next word from a fixed-size window of preceding words; supplementing a transformer with N-gram embeddings follows this same philosophy of trading memory for compute.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Word_n-gram_language_model">Word n-gram language model - Wikipedia</a></li>
<li><a href="https://theorempath.com/topics/mixture-of-experts">Mixture of Experts (MoE). Sparse Scaling for LLMs | TheoremPath</a></li>
<li><a href="https://gate.ai/blog/dense-model-vs.-moe-model-what-are-the-differences-in-model-architecture">Dense Model vs . MoE Model : What Are the Differences in Model ...</a></li>

</ul>
</details>

**Discussion**: Commenters were surprised the model beats the 3.8 dense 27B so cleanly, with one marveling at how fast LLM progress has moved — self-hosting a frontier-class model at 30 tok/s on a $5k MacBook. Technical discussion centered on self-hosting practicalities such as quantizing the ~176B total parameters, memory requirements, and llama.cpp support, with one user sharing a patched build running at 23.54 tok/s. There was also humor about hoping the model reasons more directly instead of 'overthinking' like smaller models.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Qwen</span> <span class="tag-badge">open-source</span> <span class="tag-badge">machine-learning</span> <span class="tag-badge">self-hosting</span></p>

---

<a id="item-3"></a>

## [DeepSeek-V4-Pro Officially Launches with Peak/Off-Peak API Pricing](https://t.me/zaihuapd/43417) ⭐️ 9.0/10

DeepSeek has officially released V4-Pro simultaneously on its app, web platform, and API under the model name deepseek-v4-pro, with calling methods unchanged. The release enhances Agent capabilities, natively supports the Responses API format for Codex compatibility, adds low/high/max thinking tiers to both V4-Pro and V4-Flash, and introduces peak/off-peak API pricing effective August 17, 2026, where off-peak rates are half of peak-hour prices. DeepSeek is one of the most widely used model families, so a major version release with stronger Agent capabilities directly affects a large ecosystem of developers and downstream applications. Native Responses API support means tools built for OpenAI's agent stack, such as Codex, can switch to DeepSeek with minimal code changes, while peak/off-peak pricing introduces utility-style demand management that could reshape how batch AI workloads are scheduled. According to the announced rules, peak hours are 9:00–12:00 and 14:00–18:00 Beijing time, with all other hours billed at half the peak rate; notably, reports indicate that even off-peak prices rose compared to previous levels, with some cache-hit input rates increasing substantially. The three thinking tiers (low/high/max) give developers explicit control over trading reasoning depth against latency and cost.

telegram · zaihuapd · Aug 26, 08:02

**Background**: The Responses API is OpenAI's newer API format designed for agents and assistants, offering simplified input, status tracking, and background task support for stateful, multi-step workflows. Codex is OpenAI's coding agent that runs locally in the terminal and IDE, and it expects the Responses API format—so DeepSeek natively supporting it means Codex users can point the tool directly at DeepSeek models. Peak/off-peak pricing is a demand-management model borrowed from utilities like electricity, where capacity-constrained high-demand windows cost more, incentivizing users to shift flexible workloads to cheaper hours. DeepSeek is reportedly the first major LLM provider to adopt time-based API pricing at this scale, and it later adjusted the rules so weekends are billed entirely at off-peak rates.

<details><summary>References</summary>
<ul>
<li><a href="https://cn.technode.com/post/2026-08-14/deepseek-api-peak-off-peak-pricing/">DeepSeek API 空闲时段也涨 价 ，部分 价 格最高涨12倍 - 动点科技</a></li>
<li><a href="https://vermal.mintlify.app/api-formats/openai-responses">OpenAI Responses API for agentic workflows</a></li>
<li><a href="https://github.com/openai/codex">GitHub - openai / codex : Lightweight coding agent that runs in your...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">LLM Release</span> <span class="tag-badge">API Pricing</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Model Update</span></p>

---

<a id="item-4"></a>

## [Microsoft Details Real-World Attacks on Exposed LiteLLM AI Gateways](https://www.microsoft.com/en-us/security/blog/2026/08/26/when-ai-infrastructure-becomes-target-securing-gateways-control-points/) ⭐️ 8.0/10

Microsoft Threat Intelligence published an analysis of real-world attacks against exposed AI workloads, documenting threat actors exploiting LiteLLM gateways to harvest credentials, establish persistence, and run cryptomining operations. As enterprises scale AI deployments, gateways that centrally hold API keys for dozens of models have become high-value single points of compromise, and breaching one can expose credentials across an entire LLM fleet. The report signals that AI infrastructure—often deployed rapidly with weak defaults—is now firmly on attackers' radar, with direct financial motives like cryptomining. The observed attack chain combines LiteLLM gateway exploitation with credential harvesting, persistence techniques, and cryptomining, showing that attackers monetize AI infrastructure directly rather than only abusing LLM tokens for inference. Because LiteLLM is widely deployed open-source software, the findings underscore the need to harden gateway configurations, protect stored keys, and monitor for anomalous activity.

rss · Microsoft Security · Aug 26, 16:43

**Background**: LiteLLM is a popular open-source AI gateway that provides a unified interface and proxy to more than 100 LLM providers, which means it typically stores API keys and routing credentials for an organization's entire model fleet. An exposed gateway therefore acts as a security and governance chokepoint: attackers who reach its admin interfaces or databases can harvest those keys and pivot to provider accounts. Microsoft Threat Intelligence is the company's team that tracks nation-state and criminal threat actors and publishes defensive guidance based on attacks it observes in the wild.

<details><summary>References</summary>
<ul>
<li><a href="https://www.litellm.ai/">LiteLLM — Open-Source AI Gateway & LLM Proxy</a></li>
<li><a href="https://github.com/BerriAI/litellm">GitHub - BerriAI/ litellm : The fastest, litest AI Gateway . Rust core with...</a></li>
<li><a href="https://blog.silentgrid.com/llm-gateway-security-testing/">Are You Testing Your LLM Gateway Like Any Other Critical...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">threat intelligence</span> <span class="tag-badge">LiteLLM</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">infrastructure security</span></p>

---

<a id="item-5"></a>

## [FalconForce Research: Forged ETW Telemetry Can Deceive Analysts and Blind EDRs](https://medium.com/falconforce/im-in-your-logs-now-deceiving-analysts-and-blinding-edrs-6adada699be6?source=rss-5ca7329adb2b------2) ⭐️ 8.0/10

Olaf Hartong of FalconForce published research demonstrating techniques to generate forged ETW telemetry that makes security systems believe events happened when they actually did not. The research further shows how flooding or breaking telemetry streams can prevent EDR products like Microsoft Defender for Endpoint from seeing real malicious activity at all. This work challenges the foundational assumption that endpoint telemetry is trustworthy, with serious implications for detection engineering, threat hunting, and incident response. Any cloud-connected EDR that relies heavily on ETW — not just MDE — is impacted by this same class of problems. The research covers ETW telemetry trust, event capping, fake events, and buffer behavior, and notes that Microsoft's own documentation states ETW was designed for performance monitoring and debugging rather than security. The same technique has a legitimate defensive use case: generating realistic telemetry to verify detection rules without repeatedly running destructive, noisy, or unreliable real attacks.

rss · Stories by Olaf Hartong on Medium · Aug 26, 08:06

**Background**: Event Tracing for Windows (ETW) is a telemetry mechanism deeply integrated into Windows, consisting of providers that generate events, consumers that receive them, trace sessions that connect the two, and kernel components handling the logistics. Endpoint Detection and Response (EDR) products run lightweight agents on workstations, laptops, and servers, continuously monitoring endpoints for suspicious activity, and many rely heavily on real-time ETW sessions for their detection data. Because security was never part of ETW's original design goals, some of its design decisions carry security implications that defenders have only recently begun to grapple with.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Endpoint_detection_and_response">Endpoint detection and response - Wikipedia</a></li>
<li><a href="https://cyberacademy.net/resources/encyclopedia/edr">EDR : Endpoint Detection and Response · Cyber Academy</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">EDR-evasion</span> <span class="tag-badge">detection-engineering</span> <span class="tag-badge">telemetry-spoofing</span> <span class="tag-badge">threat-hunting</span></p>

---

<a id="item-6"></a>

## [CVE-2026-8933: Ubuntu snap-confine Security Hardening Introduced Root Privilege Escalation](https://forum.butian.net/share/5002) ⭐️ 8.0/10

Qi An Xin published a technical analysis of CVE-2026-8933, revealing that Canonical's security hardening of snap-confine — replacing the setuid-root binary with a file-capabilities-based minimal privilege model — inadvertently introduced two attack paths based on FUSE races and symlink races. As a result, a normal local user can escalate privileges to root on default Ubuntu 24.04/25.10/26.04 installations, while the older setuid-root version is ironically unaffected. The vulnerability affects default Ubuntu installations, meaning a large number of desktop and server systems are exposed to local privilege escalation to full root without any unusual configuration. More broadly, it is a cautionary tale for the industry: a privilege-reduction refactor designed to shrink the attack surface can itself create new race-condition attack windows, a lesson valuable to security practitioners and distribution maintainers alike. The exploit abuses TOCTOU race conditions (CWE-367) during snap sandbox initialization: by combining a FUSE race with a symlink race, an attacker can make snap-confine bind-mount attacker-controlled files as root, achieving arbitrary code execution in a privileged context. Although the capabilities model restricts some privileged operations compared to full setuid-root, the residual race windows in the new code path are sufficient to reach full root.

rss · 奇安信攻防社区 · Aug 26, 09:00

**Background**: snap-confine is the helper program that sets up the sandbox environment for snap packages on Ubuntu, and it historically ran with the setuid-root bit, meaning it always executed with full root privileges. Linux file capabilities were introduced to provide finer-grained control than setuid, granting a program only the specific privileges it needs instead of full root. However, splitting a monolithic root privilege into capability-gated code paths can introduce new logic and timing bugs, such as TOCTOU (time-of-check to time-of-use) race conditions where an attacker swaps a file for a symlink between the program's check and its use. Canonical's move to a minimal-capability model for snap-confine was intended to reduce the damage if the tool were ever compromised.

<details><summary>References</summary>
<ul>
<li><a href="https://www.penligent.ai/hackinglabs/cve-2026-8933/">CVE-2026-8933: Ubuntu snap - confine Local Privilege Escalation and...</a></li>
<li><a href="https://securitybrief.com.au/story/ubuntu-snap-flaw-lets-local-users-hijack-root-access">Ubuntu snap flaw lets local users hijack root access</a></li>
<li><a href="https://cwe.mitre.org/data/definitions/367.html?ref=ctrlaltnod.com">CWE - CWE-367: Time -of- check Time -of- use ( TOCTOU ) Race ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">privilege-escalation</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Ubuntu</span> <span class="tag-badge">Linux</span></p>

---

<a id="item-7"></a>

## [Zhipu Confirms Ox Alpha as New GLM Iteration, Doubling DeepSeek's Usage](https://www.bloomberg.com/news/articles/2026-08-26/china-s-z-ai-made-ox-alpha-stealth-model-that-rivals-deepseek?srnd=phx-technology) ⭐️ 8.0/10

Zhipu AI (Z.ai) confirmed to Bloomberg on Wednesday that the mysteriously launched Ox Alpha model is a new iteration of its GLM series, adding that it would release the model's weights. The model has rocketed to #1 on OpenRouter's usage charts, with usage more than double that of DeepSeek during its ongoing free preview period. This marks a significant competitive shift in the LLM landscape, as a Chinese model overtakes DeepSeek — itself a former viral disruptor — on one of the most-watched neutral usage platforms. The stealth-launch strategy clearly generated massive organic developer demand, and the coming pricing announcement could put further pressure on the ongoing industry price war. The free preview is expected to last about a week, with pricing not yet announced; Zhipu said the codename is inspired by a recently released hit movie in China (《牛来》, roughly 'Ox Comes'). Zhipu had just released its GLM-5.3 flagship earlier this month, claiming it rivals Anthropic's Fable 5 on certain benchmarks, and community fingerprinting had previously guessed Ox Alpha might be GLM-5.4 or GLM-5.3 Flash.

telegram · zaihuapd · Aug 26, 09:33

**Background**: Zhipu AI is a Chinese AI company incubated from Tsinghua University's Knowledge Engineering Group (KEG Lab), best known for its open-source GLM (General Language Model) series, and it completed its listing in January of this year. OpenRouter is a unified API aggregator that routes requests to a wide range of models and is widely watched as a real-time proxy for model popularity, serving 250,000+ apps and over 4.2 million users. Stealth launches — where an unidentified model appears on inference platforms without attribution — have become a viral marketing tactic in the AI industry, and OpenRouter usage share is considered a credible demand signal because it reflects real developer and application traffic rather than self-reported benchmarks.

<details><summary>References</summary>
<ul>
<li><a href="https://wallstreetcn.com/articles/3780350">智 谱 “认领”神秘AI 模 型 Ox Alpha “牛来”，使用量已达DeepSeek...</a></li>
<li><a href="https://tg.okhk.net/posts/11079">智 谱 确认神秘“牛来” 模 型 为 GLM ... | OKHK</a></li>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>

</ul>
</details>

**Discussion**: The news item itself contains no comment thread, but per search results, the stealth launch had already sparked heated community speculation before the confirmation, with users fingerprinting the model and guessing it was likely GLM-5.4 or GLM-5.3 Flash, with the hype even drawing comparisons involving Google's Gemini and SpaceX.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Zhipu AI</span> <span class="tag-badge">GLM</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">OpenRouter</span></p>

---