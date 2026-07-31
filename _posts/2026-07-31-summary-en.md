---
layout: default
title: "Horizon Summary: 2026-07-31 (EN)"
date: 2026-07-31
lang: en
---

> From 49 items, 9 important content pieces were selected

---

1. [Tesla Evaluates Sale of China Business, Potential SpaceX Merger](#item-1) ⭐️ 9.0/10
2. [DeepSeek V4 Official Release Set for Mid-July with Peak/Off-Peak API Pricing](#item-2) ⭐️ 9.0/10
3. [Cloudflare Introduces API for Provisioning Isolated Media over QUIC Relays](#item-3) ⭐️ 8.0/10
4. [Elastic Maps Hugging Face AI Breach Tactics to Existing Detection Rules](#item-4) ⭐️ 8.0/10
5. [TrojPix Turns HDMI Cables into 8Mbps Radio Transmitters for Air-Gapped Systems](#item-5) ⭐️ 8.0/10
6. [Huawei Open-Sources 92-Billion Parameter openPangu-2.0-Flash Model](#item-6) ⭐️ 8.0/10
7. [Anthropic to Legally Challenge US Department of War Supply Chain Risk Designation](#item-7) ⭐️ 8.0/10
8. [Trump Administration Weighs $100,000 Fee for International Students' OPT Program](#item-8) ⭐️ 8.0/10
9. [US Supreme Court Rejects AI Copyright Appeal, Upholding Human Authorship Rule](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Tesla Evaluates Sale of China Business, Potential SpaceX Merger](https://t.me/zaihuapd/42886) ⭐️ 9.0/10

According to The Wall Street Journal, Tesla is evaluating the potential sale or spinoff of its China business to mitigate geopolitical risks and facilitate a clearer separation between its U.S. and China operations. Sources indicate Elon Musk has directed executives to create a hard boundary—described as a "laser"—between the two operations, partly to enable a future merger with SpaceX. China is Tesla's second-largest market, making any restructuring of this scale a transformative event for the global automotive industry and a signal of how escalating U.S.-China tensions are forcing multinational corporations to rethink their operational footprints. A potential Tesla-SpaceX merger would combine two of the world's most valuable and technologically ambitious companies into a single entity spanning automotive, energy, aerospace, and telecommunications. Musk's primary concern appears to be ensuring the survivability of Tesla's U.S. operations in the event of a severe geopolitical conflict between the U.S. and China. The reported restructuring considerations reflect a strategic de-risking effort rather than an immediate transaction, and no specific timeline or buyer has been identified.

telegram · zaihuapd · Jul 31, 04:59

**Background**: Tesla operates a major Gigafactory in Shanghai that produces a significant portion of its global vehicle output, making its China operations deeply integrated into its worldwide supply chain. SpaceX, founded by Musk in 2002, is a separate aerospace company that has become dominant in satellite internet via Starlink and reusable rocket technology. Merging the two companies would require resolving significant regulatory, corporate governance, and shareholder complexities, and would likely face intense antitrust and national security scrutiny.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Tesla</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">geopolitics</span> <span class="tag-badge">corporate-restructuring</span> <span class="tag-badge">China</span></p>

---

<a id="item-2"></a>

## [DeepSeek V4 Official Release Set for Mid-July with Peak/Off-Peak API Pricing](https://t.me/zaihuapd/42888) ⭐️ 9.0/10

DeepSeek has announced that the official version of its V4 model will be released in mid-July, accompanied by a new peak and off-peak API pricing mechanism. Peak hours are defined as 9:00–12:00 and 14:00–18:00 Beijing time daily, with users notified by email 24 hours before any price adjustment. DeepSeek is one of the most influential open-weight LLM providers, and the official V4 release with tiered pricing will directly impact developers and the broader AI API market. The peak/off-peak model may incentivize users to shift workloads to off-peak hours, improving resource utilization while setting a precedent for dynamic pricing in the AI industry. For deepseek-v4-pro, cached input hits cost ¥0.025/M tokens off-peak and ¥0.05/M at peak; cache misses cost ¥3 and ¥6 respectively; output costs ¥6 off-peak and ¥12 at peak — effectively doubling during peak hours. A corresponding deepseek-v4-flash variant also exists with its own pricing tier.

telegram · zaihuapd · Jul 31, 05:50

**Background**: DeepSeek is a Hangzhou-based AI company known for developing high-performance, cost-effective open-weight large language models. Its previous models, such as DeepSeek-R1 and V3, achieved performance comparable to GPT-4 and o1 at a fraction of the training cost, reportedly leveraging Mixture of Experts (MoE) architecture. The V4 Preview has already been available on web, app, and API with enhanced Agent capabilities and top-tier reasoning. DeepSeek's models are released under open-source licenses like MIT, making them widely adopted in the developer community.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek</a></li>
<li><a href="https://www.deepseek.com/en/">DeepSeek</a></li>
<li><a href="https://deepseek.ai/pricing">DeepSeek Pricing 2026: V4 Flash & V4 Pro API Costs, Cache ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI Models</span> <span class="tag-badge">API Pricing</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

<a id="item-3"></a>

## [Cloudflare Introduces API for Provisioning Isolated Media over QUIC Relays](https://blog.cloudflare.com/moq-relays/) ⭐️ 8.0/10

Cloudflare released a new provisioning API that enables developers to create their own isolated Media over QUIC (MoQ) relays. This API also allows developers to explicitly control publishing and viewing permissions for these relays. This update provides a secure and scalable way for developers to build real-time media applications without the traditional constraints of WebRTC. By allowing permission controls on isolated relays, it addresses critical production and security requirements for modern streaming architectures. The API leverages Cloudflare's global network, where every server has already been turned into an MoQ relay. It uses MoQ, a next-generation live media protocol built on QUIC, which concurrently transmits media to avoid latency build-up during congestion.

rss · The Cloudflare Blog · Jul 31, 13:00

**Background**: Media over QUIC (MoQ) is a next-generation live media protocol designed to deliver real-time, WebRTC-like latency at a massive scale. Unlike traditional WebRTC, which involves complex session management, MoQ allows publishers to announce named media tracks that subscribers request via a relay network. The protocol utilizes modern web technologies like WebTransport and WebCodecs, while the relay network handles content distribution and caching without needing to understand the media itself.

<details><summary>References</summary>
<ul>
<li><a href="https://moq.dev/">Media over QUIC</a></li>
<li><a href="https://github.com/moq-dev/moq">GitHub - moq-dev/moq: Media over QUIC: Real-time latency at massive scale · GitHub</a></li>
<li><a href="https://blog.cloudflare.com/moq/">MoQ: Refactoring the Internet's real-time media stack | The Cloudflare Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Media over QUIC</span> <span class="tag-badge">MoQ</span> <span class="tag-badge">WebRTC</span> <span class="tag-badge">Networking</span></p>

---

<a id="item-4"></a>

## [Elastic Maps Hugging Face AI Breach Tactics to Existing Detection Rules](https://www.elastic.co/security-labs/ai-agent-attack-detection-hugging-face-breach) ⭐️ 8.0/10

Elastic Security Labs published a detailed analysis demonstrating that every stage of the recent Hugging Face breach — including worker RCE, credential harvesting, self-migrating C2 infrastructure, and GenAI-specific behaviors — can be detected using Elastic Defend and SIEM rules that are already shipping to customers. This analysis is significant because it bridges the gap between emerging AI-specific attack vectors and established defensive tooling, proving that organizations do not necessarily need entirely new security stacks to counter AI-driven threats. As autonomous AI agents increasingly target ML infrastructure, having concrete, mapped detection strategies provides immediate actionable value for security teams defending AI platforms. The breach involved a self-migrating C2 infrastructure where each relay contained the address of the next one, allowing the AI agent to automatically move if any endpoint was compromised. The initial intrusion chain leveraged remote-code loaders and configuration template injection in dataset processing pipelines on Hugging Face, and the attack was characterized as an 'agentic attacker' scenario that was automated and specifically targeted at AI infrastructure.

rss · Elastic Security Labs · Jul 31, 00:00

**Background**: Elastic Defend is an endpoint security integration within Elastic Security that combines behavioral detections, machine learning, and cross-domain correlation to uncover advanced threats spanning users, hosts, cloud, and network environments. SIEM (Security Information and Event Management) systems like Elastic's aggregate security telemetry from across an organization to provide centralized threat detection and response. The Hugging Face breach involved an external autonomous AI agent that executed a multi-stage attack against the platform's production infrastructure, representing a new class of automated, self-migrating threats specifically designed to target AI/ML systems.

<details><summary>References</summary>
<ul>
<li><a href="https://www.elastic.co/docs/reference/integrations/endpoint">Elastic Defend integration | Elastic integrations</a></li>
<li><a href="https://www.rescana.com/post/ai-driven-cyberattack-compromises-hugging-face-production-infrastructure-via-autonomous-agent-incident-analysis-and-miti">AI-Driven Cyberattack Compromises Hugging Face Production ...</a></li>
<li><a href="https://dev.to/anoymask/openai-and-hugging-face-autonomous-ai-agent-chains-zero-day-credentials-and-cloud-lateral-5c0c">OpenAI and Hugging Face : Autonomous AI Agent... - DEV Community</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">Threat Detection</span> <span class="tag-badge">Incident Response</span></p>

---

<a id="item-5"></a>

## [TrojPix Turns HDMI Cables into 8Mbps Radio Transmitters for Air-Gapped Systems](https://forum.butian.net/share/4955) ⭐️ 8.0/10

The TrojPix attack exploits the TMDS encoding mechanism of HDMI cables to turn them into 148.5MHz radio transmitters capable of exfiltrating data at speeds up to 8Mbps. This represents a massive breakthrough over previous air-gap side-channel attacks, which typically achieved data transmission rates of less than 1 bps. This development dramatically changes the threat model for air-gapped systems, proving that even highly isolated networks can be compromised from distances up to 208 meters, even through concrete walls. It highlights an urgent need for organizations handling highly sensitive information to rethink their physical security and electromagnetic shielding strategies. The attack manipulates the Least Significant Bit (LSB) of the blue color channel in displayed pixels, creating modulations that are invisible to the human eye but radiate as faint radio signals through the video cable. It operates through a six-step attack pipeline that involves compromising the machine, manipulating the display, transmitting the signal, and decoding it at a distance.

rss · 奇安信攻防社区 · Jul 31, 09:43

**Background**: Air-gap attacks are designed to breach systems that are physically isolated from unsecured networks, often relying on side-channels like electromagnetic, acoustic, or thermal emissions. HDMI uses Transition-Minimized Differential Signaling (TMDS) to transmit high-speed serial video data, which inadvertently causes the copper cables to act as antennas radiating electromagnetic waves at specific frequencies determined by the pixel clock. By carefully altering specific pixel values, attackers can modulate these emanations to carry hidden data.

<details><summary>References</summary>
<ul>
<li><a href="https://cybersecuritynews.com/trojpix-attack/">TrojPix Attacks allow Hackers to Access Data from air-gapped ...</a></li>
<li><a href="https://thehackernews.com/2026/07/new-trojpix-attack-leaks-data-from-air.html">New TrojPix Attack Leaks Data From Air-Gapped Systems via ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Transition-minimized_differential_signaling">Transition - minimized differential signaling - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Air-Gap Attack</span> <span class="tag-badge">Side-Channel Attack</span> <span class="tag-badge">Hardware Hacking</span> <span class="tag-badge">Data Exfiltration</span></p>

---

<a id="item-6"></a>

## [Huawei Open-Sources 92-Billion Parameter openPangu-2.0-Flash Model](https://t.me/zaihuapd/42889) ⭐️ 8.0/10

On June 30, Huawei released the openPangu-2.0-Flash model, an open-source artificial intelligence model featuring 92 billion parameters. The release includes model weights, basic inference code, and training operators, with the more powerful openPangu-2.0-Pro expected to debut in July. This release provides developers with access to a massive language model, expanding the open-source AI ecosystem. It also highlights Huawei's strategic focus on using Ascend-native frameworks for AI training and inference to bypass foreign hardware dependencies. The openPangu-2.0-Flash model is designed for native training and inference on Huawei's Ascend AI architecture. The upcoming Pro version is a Mixture of Experts (MoE) model with 505 billion total parameters, 18 billion activated parameters per token, and a massive 512K context window.

telegram · zaihuapd · Jul 31, 06:50

**Background**: openPangu is Huawei's open-source AI model brand, focusing on demonstrating best practices for training and running models on its proprietary Ascend AI chips. The Ascend platform serves as Huawei's strategic alternative to Nvidia GPUs, offering computing power across cloud and edge devices. By open-sourcing the Pangu series models, Huawei aims to foster a strong developer community around its domestic hardware and software ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/openpangu/openPangu-2.0-Flash">openpangu / openPangu -2.0-Flash · Hugging Face</a></li>
<li><a href="https://digg.com/tech/wmbgr5w3">Huawei Releases OpenPangu -2.0-Pro 505B MoE Model · Digg</a></li>
<li><a href="https://aiwiki.ai/wiki/pangu">Huawei PanGu | AI Wiki</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">open-source</span> <span class="tag-badge">large-language-models</span> <span class="tag-badge">huawei</span> <span class="tag-badge">pangu</span> <span class="tag-badge">AI-models</span></p>

---

<a id="item-7"></a>

## [Anthropic to Legally Challenge US Department of War Supply Chain Risk Designation](https://t.me/zaihuapd/42891) ⭐️ 8.0/10

On March 5, Anthropic CEO Dario Amodei announced that the company received a letter from the US Department of War the previous day designating Anthropic as a national security supply chain risk. Anthropic stated it does not believe the action has legal basis and will challenge it in court. This represents a major legal confrontation between one of the leading AI companies and the US government over national security designations, potentially setting precedents for how AI firms engage with defense agencies. The outcome could significantly impact how AI companies like Anthropic participate in government and national security contracts going forward. The designation has a narrow scope, applying only when customers use Claude directly for purposes related to Department of War contracts. Despite the legal dispute, Anthropic will continue providing its models and engineering support to the Department of War and national security community during a transition period at nominal cost.

telegram · zaihuapd · Jul 31, 08:00

**Background**: Anthropic is an American AI company best known for developing Claude, a family of large language models first released as a chatbot in March 2023. The company has positioned itself as focused on AI safety and has been increasingly involved in government and national security applications. Supply chain risk designations are typically used by government agencies to flag entities that may pose security concerns when integrated into critical government operations.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_(AI)">Claude ( AI ) - Wikipedia</a></li>
<li><a href="https://docs.anthropic.com/en/docs/about-claude/models">Models - Anthropic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">AI Regulation</span> <span class="tag-badge">Legal</span> <span class="tag-badge">National Security</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-8"></a>

## [Trump Administration Weighs $100,000 Fee for International Students' OPT Program](https://www.bloomberg.com/news/articles/2026-07-30/trump-weighs-100-000-fee-for-foreign-students-to-work-post-grad) ⭐️ 8.0/10

The Trump administration is reportedly considering imposing a $100,000 fee on international students who wish to participate in the Optional Practical Training (OPT) work program after graduation. While the White House states there are no imminent policy changes, officials have not denied that such discussions are taking place. This potential policy shift would create a prohibitive financial barrier that could heavily disrupt the talent pipeline for Silicon Valley, Wall Street, and academia. Furthermore, it threatens to severely impact universities that rely heavily on international student tuition and deter top global talent from studying in the U.S. Nearly 300,000 international students utilized the OPT program to stay and work in the U.S. last fall. This proposal is part of a broader effort to restrict student immigration, following a recent move by the Department of Homeland Security to limit student visa stays to four years and a similarly proposed H-1B visa fee that was ruled illegal by a federal judge in June.

telegram · zaihuapd · Jul 31, 09:00

**Background**: Optional Practical Training (OPT) is a program that allows F-1 international students to temporarily work in the United States in a job related to their field of study, typically for 12 months, with extensions available for STEM degrees. The H-1B visa is a separate non-immigrant employment category that allows U.S. employers to hire highly educated foreign professionals for specialty occupations. These pathways are vital for American tech companies and financial institutions to retain international talent graduating from U.S. universities.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Optional_Practical_Training">Optional Practical Training - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/H-1B_visa">H-1B visa - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">policy</span> <span class="tag-badge">immigration</span> <span class="tag-badge">international students</span> <span class="tag-badge">tech industry</span> <span class="tag-badge">OPT</span></p>

---

<a id="item-9"></a>

## [US Supreme Court Rejects AI Copyright Appeal, Upholding Human Authorship Rule](https://t.me/zaihuapd/42900) ⭐️ 8.0/10

The US Supreme Court declined on March 2 to hear an appeal from computer scientist Stephen Thaler, letting stand lower court rulings that artworks autonomously generated by his AI system DABUS cannot be copyrighted. This upholds the principle that US copyright law requires a human author. This decision sets a clear boundary for the generative AI industry: purely AI-generated works without meaningful human creative input remain unprotected by US copyright law. As tools like DALL-E, Midjourney, and Stable Diffusion proliferate, this ruling provides legal clarity for creators, companies, and courts navigating ownership of AI-assisted outputs. Thaler's case specifically involved visual artworks that he claimed were created entirely by DABUS (Device for the Autonomous Bootstrapping of Unified Sentience) without human creative direction. The US Copyright Office and multiple lower courts consistently ruled that the Copyright Act requires human authorship, a principle the Supreme Court has now effectively endorsed by declining review.

telegram · zaihuapd · Jul 31, 13:11

**Background**: DABUS (Device for the Autonomous Bootstrapping of Unified Sentience) is an AI system created by Dr. Stephen Thaler, designed to generate novel ideas and creations autonomously. Thaler has filed similar applications in multiple countries seeking to have AI recognized as an inventor or author, with mixed results globally. US copyright law has historically required human authorship, a doctrine tracing back to foundational cases and the Copyright Act itself, which refers to 'authors' and 'works of authorship' in human terms.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DABUS">DABUS - Wikipedia</a></li>
<li><a href="https://www.linkedin.com/pulse/can-ai-inventor-global-dabus-rulings-future-patent-law-devak-bhardwaj-0cuif">Can an AI Be an "Inventor"? The Global DABUS Rulings and the...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Copyright Law</span> <span class="tag-badge">Intellectual Property</span> <span class="tag-badge">Legal</span> <span class="tag-badge">DABUS</span></p>

---