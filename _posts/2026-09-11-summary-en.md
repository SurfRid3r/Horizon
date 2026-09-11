---
layout: default
title: "Horizon Summary: 2026-09-11 (EN)"
date: 2026-09-11
lang: en
---

> From 49 items, 7 important content pieces were selected

---

1. [Terence Tao Warns of Severe AI Misalignment in Mathematics](#item-1) ⭐️ 9.0/10
2. [GitLab Patches CVSS 10.0 Flaw Allowing Unauthenticated Arbitrary File Read](#item-2) ⭐️ 9.0/10
3. [OpenAI Launches Agents API Public Beta for Production-Grade Cloud Agents](#item-3) ⭐️ 9.0/10
4. [OpenAI Launches GPT-Live-1 Full-Duplex Speech Model in Its API](#item-4) ⭐️ 8.0/10
5. [DeepSeek Releases V4.1 Flash: 552B Multimodal Causal-Encoder-Decoder Model](#item-5) ⭐️ 8.0/10
6. [Anthropic Threat Report Names Seven Chinese AI Labs Over Claude Distillation](#item-6) ⭐️ 8.0/10
7. [Anthropic Report Alleges Moonshot AI Secretly Routed Kimi Requests to Claude](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Terence Tao Warns of Severe AI Misalignment in Mathematics](https://mathandai.org/) ⭐️ 9.0/10

Terence Tao and other leading mathematicians published a declaration (mathandai.org) and a blog post dated September 2026 warning of a 'severe misalignment' of AI in mathematics, arguing that OpenAI-style methods chase proof generation without regard for human understanding. The Economist reported that top mathematicians are outraged by OpenAI's methods, and the story drew an exceptionally substantive Hacker News discussion with 276 comments and 187 points. Tao is one of the world's most influential living mathematicians, so his sharp intervention signals deep unease at the very top of the discipline about how AI labs operate. The dispute strikes at the core of mathematical culture—credit assignment, verification, and the value of human understanding—and previews conflicts likely to spread to other research fields as AI capabilities grow. The mathematicians' core objection is that AI systems are being optimized to solve open problems (for benchmarks or publicity) rather than to produce explanations humans can verify and learn from, destroying the traditional yardstick—solving open problems—by which mathematical contribution has been measured. Commenters note the credit problem is irreversible in practice: as one put it, 'the cat is already out of the bag' regarding these models' capabilities, even without AI labs spending millions more.

hackernews · meredydd · Sep 11, 17:45 · [Discussion](https://news.ycombinator.com/item?id=49662371)

**Background**: Mathematics has traditionally advanced through proofs that human experts verify and internalize, and solving famous open problems has long served as the discipline's currency of reputation and credit. Recent AI models, including OpenAI's systems, have begun producing long and increasingly capable proofs that are difficult for humans to check or comprehend, threatening the social process by which mathematics is validated. The episode echoes earlier controversies such as Mochizuki's claimed proof of the abc conjecture, where the community was faced with a huge, arguably incomprehensible argument and responded with skepticism, conferences, and papers attempting to digest it.

**Discussion**: The Hacker News discussion was notably substantive: one mathematician drew parallels to Mochizuki's abc conjecture saga, suggesting an enormous incomprehensible AI proof of the Riemann Hypothesis might paradoxically generate conferences, papers, and talks as the community digests it. Another argued AI has destroyed not mathematicians' ability to build understanding, but the yardstick (solving open problems) used to measure contribution, while a commenter likened Tao's critique to Baudelaire's 19th-century attack on photography as a mechanical craft. A dissenting view held that making human understanding irrelevant is precisely the goal of AI mathematics, so the letter will fall on deaf ears at AI labs.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">mathematics</span> <span class="tag-badge">Terence Tao</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">research ethics</span></p>

---

<a id="item-2"></a>

## [GitLab Patches CVSS 10.0 Flaw Allowing Unauthenticated Arbitrary File Read](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-3-2-released/) ⭐️ 9.0/10

On September 10, GitLab released emergency patch versions 19.3.2, 19.2.6, and 19.1.8 to fix CVE-2026-85706, which carries the maximum CVSS score of 10.0. Under specific conditions, the flaw lets unauthenticated attackers exploit path-constraint and authentication weaknesses in the repository commits API to read arbitrary files on the GitLab server. A perfect CVSS 10.0 score combined with unauthenticated arbitrary file read poses severe risk to the large population of self-hosted GitLab instances, which typically hold proprietary source code, CI/CD secrets, and configuration files. Leaked files could expose credentials and keys that enable further attacks, making immediate patching essential for any organization running its own instance. Affected versions span 18.7 through before 19.1.8, 19.2 before 19.2.6, and 19.3 before 19.3.2; GitLab.com is already patched and GitLab Dedicated users need to take no action. The flaw was reported by researcher s3ntago via HackerOne, and while GitLab has not disclosed the specific preconditions, no public PoC exists and there is no evidence of in-the-wild exploitation.

telegram · zaihuapd · Sep 11, 11:05

**Background**: GitLab is a widely used DevOps platform that combines Git repository hosting with CI/CD pipelines, and many organizations run self-managed instances on their own infrastructure. The repository commits API is a REST endpoint that CI/CD pipelines, automation scripts, and third-party integrations rely on to interact with version control data. CVSS (Common Vulnerability Scoring System) is an industry-standard 0-to-10 scale for rating vulnerability severity, where 10.0 represents the most critical level. A PoC (Proof of Concept) is verification code demonstrating that a vulnerability is real, and its current absence lowers—but does not eliminate—short-term exploitation risk.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.gitlab.com/api/commits/">Documentation for the REST API for Git commits in GitLab .</a></li>
<li><a href="https://thecybersecguru.com/news/gitlab-cve-2026-85706-cvss-10-path-traversal/">GitLab CVE-2026-85706: Critical CVSS... | The CyberSec Guru</a></li>
<li><a href="https://gist.github.com/caoya171193579/0662f16eeedf51a9307e01069a2bedf1">一些相关的安全术语，比如：VUL、CVE、Exp、 PoC 等。 · GitHub</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">安全漏洞</span> <span class="tag-badge">GitLab</span> <span class="tag-badge">CVE</span> <span class="tag-badge">应急补丁</span> <span class="tag-badge">DevOps</span></p>

---

<a id="item-3"></a>

## [OpenAI Launches Agents API Public Beta for Production-Grade Cloud Agents](https://openai.com/index/introducing-the-agents-api/) ⭐️ 9.0/10

On September 10, 2026, OpenAI launched the Agents API in public beta, enabling developers to create production-grade cloud agents with a single API call, with a choice of OpenAI's hosted sandbox, their own infrastructure, or partner environments. Built on the open-source Codex harness, the API supports long-session context compression, tool search, parallel tool calls, and sub-agent collaboration, with no extra fees during beta beyond the tokens and tools agents consume. This launch represents a significant shift in how developers build and deploy AI agents, abstracting away infrastructure and orchestration plumbing so teams can focus on agent logic. By bundling flexible execution environments, context compression, and sub-agent orchestration into one API, OpenAI positions itself to capture the emerging agent platform market and intensifies competition with existing agent frameworks. During the public beta there are no additional charges — users only pay for the tokens and tools their agents actually use. Developers can run agents in OpenAI's hosted sandbox, on their own infrastructure, or in partner environments, and long-running sessions are sustained through automatic context compression rather than hitting model context limits.

telegram · zaihuapd · Sep 11, 11:12

**Background**: The Codex harness is the underlying execution framework that OpenAI open-sourced in August 2026 under the Apache-2.0 license at github.com/openai/codex; it powers the Codex App, CLI, and IDE extensions by managing the loop between the model, tools, and environment. Context compression refers to techniques that reduce the number of tokens sent to an LLM before inference while preserving task-critical information, which lets agents sustain long-running sessions. Sub-agent collaboration is a multi-agent pattern in which a main agent delegates subtasks to specialized child agents and merges their results — well suited to parallelizable work, though multi-agent systems can be slower, costlier, and harder to debug when misapplied.

<details><summary>References</summary>
<ul>
<li><a href="https://segmentfault.com/a/1190000048185190">人工 智 能 - 刚刚！ Codex Harness 全面 开 源 ： OpenAI ...</a></li>
<li><a href="https://learnagent.wiki/agent/cards/context-compression">上 下 文 压 缩 （ Context Compression ... | Learn Agent 知识库</a></li>
<li><a href="https://blog.liuzijian.com/post/2026/07/27/langgraph-multi-agent/">LangGraph Multi Agent 多 智 能 体 协 作 - Liu Zijian's Blog | 一个技术博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Agents API</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">LLM</span> <span class="tag-badge">API</span></p>

---

<a id="item-4"></a>

## [OpenAI Launches GPT-Live-1 Full-Duplex Speech Model in Its API](https://openai.com/index/introducing-gpt-live-1-in-the-api/) ⭐️ 8.0/10

OpenAI launched GPT-Live-1 on its API, a full-duplex realtime speech model that can listen and speak simultaneously, support natural interruptions and background noise, sustain long conversations, and power phone-based voice agents. OpenAI claims a 30 percentage point improvement over GPT-Realtime-2.1 on the Full Duplex Bench, with the API voice frontend priced at $0.05 per minute. Full-duplex speech with natural interruption handling closes a major gap between AI voice assistants and human conversation, making voice agents genuinely viable for phone customer service and other real-time applications. The hybrid architecture—a cheap voice frontend delegating complex reasoning and tool calls to backend models—could significantly reshape the economics of building voice agents. The model can offload complex reasoning and tool calls to backend models while handling the voice frontend at $0.05/min, and OpenAI also released a GPT-Live-1 mini variant and is rolling out GPT-Live in ChatGPT. The headline 30pp improvement is OpenAI's own claim on Full Duplex Bench, a turn-taking benchmark, rather than an independent evaluation.

telegram · zaihuapd · Sep 11, 03:09

**Background**: Traditional voice assistants use a cascaded pipeline: they wait for the user to finish, transcribe the audio to text, run a language model, and then synthesize speech back, which makes natural turn-taking and interruptions impossible. Full-duplex speech models instead listen and speak at the same time, so they can sense when a user wants to barge in, handle overlapping speech, and respond with human-like timing. Full Duplex Bench is a benchmark specifically designed to evaluate these turn-taking capabilities in full-duplex spoken dialogue models. Delegating reasoning to backend models means the speech layer stays fast and cheap while heavy computation happens asynchronously.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-live-1-in-the-api/">Build more natural voice experiences with GPT ‑ Live ‑ 1 in the... | OpenAI</a></li>
<li><a href="https://full-duplex-bench.github.io/">Full - Duplex - Bench : A Benchmark for Full - duplex Spoken Dialogue...</a></li>
<li><a href="https://opewatson.com/casearchive/notes/Full-Duplex+Speech+Models">Full - Duplex Speech Models | Ope Watson</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Speech AI</span> <span class="tag-badge">Realtime API</span> <span class="tag-badge">Voice Agents</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-5"></a>

## [DeepSeek Releases V4.1 Flash: 552B Multimodal Causal-Encoder-Decoder Model](https://t.me/zaihuapd/43770) ⭐️ 8.0/10

DeepSeek officially released V4.1 Flash, the smallest model in its brand-new architecture series, featuring a 552B-parameter Causal-Encoder-Decoder structure with sparse activations of 8B for input and 16B for output. The model natively supports multimodal vision understanding and is now live on the DeepSeek API under the model name deepseek-flash, with new pricing taking effect September 10, 2026. This marks the debut of DeepSeek's new Causal-Encoder-Decoder architecture series, a notable architectural departure from the decoder-only designs that dominate today's LLM landscape, while native multimodal support brings vision understanding directly into the base model. The sparse MoE design delivers strong capability at a fraction of the inference cost, continuing DeepSeek's mission to make frontier-level AI faster, stronger, and more affordable for developers. According to the Hugging Face model card, V4.1 Flash is a multimodal Mixture-of-Experts model with 552B backbone parameters, supporting contexts of up to one million tokens, and it natively processes images and text while generating text autoregressively. Notable operational changes include the retirement of the older V4-Flash and V4-Flash-Vision-Exp models, and after September 14, 2026, deepseek-v4-pro API requests will be rerouted.

telegram · zaihuapd · Sep 11, 11:32

**Background**: Most modern LLMs are built on decoder-only architectures that generate text autoregressively, whereas encoder-decoder designs (like the original Transformer) separate input understanding from output generation, and hybrid prefix-decoder approaches such as GLM-130B encode the prefix bidirectionally before decoding. Mixture-of-Experts (MoE) models rely on sparse activation: a router activates only a small subset of expert networks per token, so a 552B-parameter model like V4.1 Flash computes with only ~8B/16B active parameters at a time, greatly reducing inference cost. "Native multimodal" means vision understanding is built into the base model itself rather than added through a separate vision-expert variant.

<details><summary>References</summary>
<ul>
<li><a href="https://www.deepseek.com/en/news/deepseek-v4-1-flash/">Introducing DeepSeek - V 4 . 1 - Flash : smarter, faster, more efficient.</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash">deepseek -ai/ DeepSeek - V 4 . 1 - Flash · Hugging Face</a></li>
<li><a href="https://lmstudio.ai/models/deepseek-v4.1-flash">DeepSeek V 4 . 1 Flash</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Models</span> <span class="tag-badge">Multimodal</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-6"></a>

## [Anthropic Threat Report Names Seven Chinese AI Labs Over Claude Distillation](https://t.me/zaihuapd/43773) ⭐️ 8.0/10

Anthropic's latest threat intelligence report discloses that since February it has identified and blocked seven Chinese AI labs conducting large-scale 'distillation' of Claude, directly naming Alibaba, Zhipu, Xiaomi, SenseTime, and MiniMax. Alibaba's operation was the largest, generating over 151 million interactions between May and July — peaking at nearly 3 million per day — which Anthropic says was used to train Qwen 3.5, 3.6, and 3.7, including for reinforcement learning environments and model architecture work. This is a rare instance of a leading US AI lab publicly naming major Chinese tech companies, sharply escalating debates over terms-of-service enforcement, AI intellectual property protection, and US-China AI competition. The findings could influence US policy discussions on safeguarding frontier model outputs and reshape how AI providers detect and enforce usage restrictions. The report alleges that SenseTime's distillation pipeline included Claude transcripts purchased from third-party data vendors, and that MiniMax built a proxy network through a shell company offering only Anthropic and OpenAI models. Anthropic also noted that stolen API keys from customer environments were exploited in some misuse cases, although its own systems were not compromised.

telegram · zaihuapd · Sep 11, 15:33

**Background**: Model distillation is a standard AI training technique in which a smaller 'student' model is trained to reproduce the outputs of a larger 'teacher' model, transferring much of the capability at far lower cost — it is not inherently improper, and labs routinely distill their own models. However, Anthropic's terms of service prohibit using Claude outputs to train competing models, making third-party distillation of Claude a contractual violation. Qwen is Alibaba's flagship open-weight large language model family, with the fifth-generation Qwen 3.5 released in early 2026 as a 397B-parameter mixture-of-experts model. Threat intelligence reports like this one are part of Anthropic's ongoing effort to document and disrupt what it considers misuse of its models.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/threat-intelligence-report-september-2026">Countering misuse of AI: September 2026 / Anthropic \ Anthropic</a></li>
<li><a href="https://www.unite.ai/anthropic-details-disrupted-claude-misuse-across-seven-harm-areas/">Anthropic Details Disrupted Claude Misuse Across Seven Harm Areas</a></li>
<li><a href="https://www.aol.com/articles/explainer-ai-model-distillation-why-060104000.html">Explainer-What is AI model distillation and why is it becoming... - AOL</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">model-distillation</span> <span class="tag-badge">industry-competition</span> <span class="tag-badge">US-China-AI</span></p>

---

<a id="item-7"></a>

## [Anthropic Report Alleges Moonshot AI Secretly Routed Kimi Requests to Claude](https://www.anthropic.com/threat-intelligence-report-september-2026) ⭐️ 8.0/10

Anthropic's September 2026 threat intelligence report alleges that Moonshot AI did not use its own Kimi models to handle customer requests, but instead silently forwarded requests to Claude and presented Claude's responses to users who believed they were using Kimi. The report also documents cases where sensitive corporate documents from a Chinese tech company and CCTV surveillance footage from hundreds of Chengdu cameras covering PLA facilities and CETC subsidiaries ended up being processed through Claude via such model chaining. The findings expose a hidden form of "model substitution" in the AI industry, where users are deceived about which model actually processes their data, undermining trust in model providers and raising serious questions about cross-border data flows. The documented cases, including PLA-linked surveillance analysis of CCTV data, also highlight how AI models can be misused for targeted surveillance and how sensitive data can leak to foreign providers without the original users' knowledge. In one case, an employee at a Chinese tech company mistakenly believed they were using DeepSeek to analyze internal documents, and that service relayed the data to Claude — meaning the company almost certainly did not know its flagship AI project specifications and strategic goals were reaching Claude. In another, a user assessed as likely PLA-affiliated loaded surveillance data targeting specific individuals from a CCTV repository of hundreds of Chengdu cameras spanning PLA facilities, CETC subsidiaries, and a large state-owned enterprise, asking the model to detect abnormal behavior of tracked persons.

telegram · Marcoview666 · Sep 11, 07:22

**Background**: Moonshot AI is a Beijing-based AI startup founded in 2023, best known for its Kimi series of models, with a founding team whose technical roots include Transformer-XL, RoPE, and Mooncake. Anthropic's report covers case studies of threat actors disrupted between December 2025 and August 2026 across seven areas of harm, from cyber operations to biological misuse. The phenomenon at issue is "model chaining" or API relaying, where one AI service forwards requests to another provider's model — here, requests nominally served by Kimi or DeepSeek were ultimately processed by Claude, which is how Anthropic could observe the underlying traffic. CETC (China Electronics Technology Group Corporation), one of the entities whose facilities appeared in the surveillance data, is China's third-largest electronics and IT company after Huawei and Lenovo.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/threat-intelligence-report-september-2026">Countering misuse of AI: September 2026 / Anthropic \ Anthropic</a></li>
<li><a href="https://vocus.cc/article/6a868f02fd89780001a5047b">2026 Kimi AI 教學｜ Kimi K3 是什麼、怎麼用、價格與 模 型 總整理</a></li>
<li><a href="https://www.nodeloc.com/t/topic/108288">Anthropic 的“ 威 胁 情 报 报 告 ”，更像一份公关稿 - AI - NodeLoc</a></li>

</ul>
</details>

**Discussion**: The original post is an enthusiastic Telegram repost ("太精彩了" — "how fascinating") with no substantive comment thread of its own. Related online discussions show polarized reactions: some readers found the report highly entertaining ("the most amusing news of the day"), while critics on forums like NodeLoc argued that Anthropic's "threat intelligence report" reads more like a PR piece than genuine intelligence, suggesting the sensational framing warrants some caution about verification.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI安全</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">威胁情报</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">数据隐私</span></p>

---