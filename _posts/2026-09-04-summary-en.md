---
layout: default
title: "Horizon Summary: 2026-09-04 (EN)"
date: 2026-09-04
lang: en
---

> From 39 items, 4 important content pieces were selected

---

1. [Anthropic Announces Work on Formalizing Fermat's Last Theorem](#item-1) ⭐️ 9.0/10
2. [Reported 'GPT-6 Astra' Release Claims Top Benchmark Scores; Authenticity Unverified](#item-2) ⭐️ 9.0/10
3. [DeepSeek Plans 160,000-Chip Huawei Ascend Cluster in Inner Mongolia](#item-3) ⭐️ 8.0/10
4. [Anthropic Nears $15 Billion Revolving Credit Facility Ahead of Landmark IPO](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic Announces Work on Formalizing Fermat's Last Theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem) ⭐️ 9.0/10

On September 4, 2026, Anthropic Research announced work on formalizing Fermat's Last Theorem (FLT), publishing the effort on its research site. The announcement signals a serious attempt to translate Andrew Wiles' roughly 130-page proof into a machine-verifiable formal proof, though the bare announcement does not specify how much of the proof has been completed. Fermat's Last Theorem is one of the most famous problems in number theory, and Wiles' proof rests on deep 20th-century mathematics—modular forms, elliptic curves, and the Taniyama-Shimura (modularity) conjecture—that has long resisted complete computer formalization. A credible AI-assisted formalization would mark a paradigm shift in automated theorem proving, comparable to or beyond AlphaProof's IMO-level results, and could transform how research-level mathematics is verified and produced. Because the provided item is a bare announcement title, the exact scope remains unclear—whether the full proof has been formalized or only milestones reached, and which proof assistant (such as Lean) was used. Formalizing FLT is far harder than typical Lean projects, since it requires extensive infrastructure for elliptic curves, modular forms, and Galois representations, much of which the mathlib community has only built up in recent years.

rss · Anthropic Research · Sep 4, 00:00

**Background**: Fermat's Last Theorem asserts that no three positive integers a, b, c satisfy a^n + b^n = c^n for any integer n > 2; it was conjectured by Pierre de Fermat around 1637 and finally proved by Andrew Wiles (with Richard Taylor) in 1994-1995. The proof proceeds by establishing the semistable case of the Taniyama-Shimura conjecture linking elliptic curves and modular forms, spanning well over one hundred pages of advanced mathematics. A proof assistant such as Lean enables human-machine collaboration on proofs that are checked for logical correctness down to the axioms, and the community-driven mathlib library aims to formalize a unified body of mathematics in Lean. Recent efforts like LeanDojo have coupled large language models with Lean for AI-driven formal theorem proving, making landmark formalization projects increasingly tractable.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Proof_assistant">Proof assistant - Wikipedia</a></li>
<li><a href="https://www.mathlumen.com/articles/formal-proofs-lean-mathematics">The Formal Proof Revolution: How Lean Is Rebuilding... | MathLumen</a></li>
<li><a href="https://leandojo.org/">AI -Driven Formal Theorem Proving in the Lean Ecosystem</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">formal-mathematics</span> <span class="tag-badge">theorem-proving</span> <span class="tag-badge">AI-research</span> <span class="tag-badge">number-theory</span> <span class="tag-badge">Anthropic</span></p>

---

<a id="item-2"></a>

## [Reported 'GPT-6 Astra' Release Claims Top Benchmark Scores; Authenticity Unverified](https://t.me/zaihuapd/43596) ⭐️ 9.0/10

According to a Telegram relay channel, OpenAI has released GPT-6 Astra, described as its most intelligent and best-aligned model to date, with claimed scores of 98% on FrontierMath Tier 4, 99.9% on ARC-AGI-3, and 100% on ExploitBench, plus a claimed research contribution pushing the prime gap upper bound to 186. The reported API pricing is $10 per million input tokens and $50 per million output tokens, with separate cache read/write charges and a fast mode reaching up to 2.5x standard processing speed. If authentic, this would be a landmark flagship release with record-breaking math, reasoning, and safety benchmark results that could reshape the frontier-model landscape and reset expectations for AI-assisted mathematical research. However, the report originates from an unofficial relay channel rather than OpenAI's official channels, and several details are anomalous — 'Astra' is Google DeepMind's branding, and a 100% ExploitBench score far exceeds the current leaderboard leader (~78%) — so verification is essential before treating the news as fact. The claimed scores would be extraordinary: FrontierMath Tier 4 consists of research-level problems close to what professional mathematicians tackle, ARC-AGI-3 tests interactive agentic reasoning in novel environments, and the current ExploitBench leader scores only 0.780, making a 100% claim highly suspicious. The pricing details (separate cache charges, a 2.5x fast mode) and the prime-gap contribution (an upper bound of 186) also lack any official corroboration from OpenAI.

telegram · zaihuapd · Sep 3, 23:54

**Background**: FrontierMath, maintained by Epoch AI, is a benchmark of hundreds of original, exceptionally challenging mathematics problems crafted and vetted by expert mathematicians, with Tier 4 being the hardest tier approaching professional research-level work. ARC-AGI-3 is an interactive reasoning benchmark that challenges AI agents to explore novel environments, acquire goals on the fly, build adaptable world models, and learn continuously across multi-turn settings. ExploitBench is an open-source AI security benchmark whose first release, v8-bench, launched in May 2026 and grades models on finding exploits in V8, the JavaScript/WebAssembly engine inside Chrome, Edge, and Node.js, against production V8 with the security sandbox enabled. Prime gaps — the intervals between consecutive primes — are a classic number theory topic, so an AI model genuinely tightening the known upper bound would constitute a notable scientific contribution.

<details><summary>References</summary>
<ul>
<li><a href="https://epoch.ai/benchmarks/frontiermath-tier-4-v2">FrontierMath Tier 4 (v2) | Epoch AI</a></li>
<li><a href="https://arcprize.org/arc-agi/3">ARC - AGI - 3</a></li>
<li><a href="https://llm-stats.com/benchmarks/exploitbench">ExploitBench Leaderboard | LLM Stats</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">GPT-6</span> <span class="tag-badge">LLM</span> <span class="tag-badge">benchmarks</span> <span class="tag-badge">AI-research</span></p>

---

<a id="item-3"></a>

## [DeepSeek Plans 160,000-Chip Huawei Ascend Cluster in Inner Mongolia](https://www.bloomberg.com/news/articles/2026-09-04/deepseek-plans-big-huawei-ai-chip-order-to-power-new-data-center) ⭐️ 8.0/10

According to Bloomberg, DeepSeek plans to deploy at least 160,000 Huawei Ascend 950DT chips at a new mega data center in Inner Mongolia to run its models, which would rank among the largest known Huawei AI chip clusters. However, because shortages of high-end memory and other components may cap this year's 950DT output at only a few hundred thousand units, fulfilling the order could take more than a year. The move signals DeepSeek's massive compute expansion built on domestic chips at a time when US export restrictions limit access to NVIDIA's top GPUs, cementing Huawei's Ascend lineup as a credible large-scale alternative for frontier AI training and inference. A cluster of this scale could reshape China's AI compute landscape and deepen the systemic pressure that the DeepSeek-plus-Huawei combination already places on NVIDIA in the Chinese market. The Ascend 950DT, unveiled in August 2026, is tuned for inference decode and training workloads: it uses Huawei's self-developed HBM (HiZQ 2.0) with 144GB memory capacity, 4TB/s memory bandwidth (2.5x the previous generation's 1.6TB/s), 2TB/s interconnect bandwidth, and 486 TFLOPS of FP16 compute. Actual deployment timelines remain uncertain and hinge on Huawei's ability to secure sufficient memory components.

telegram · zaihuapd · Sep 4, 11:02

**Background**: DeepSeek is a Chinese AI lab famous for its high-efficiency open-weight models, and it is increasingly turning to domestic chips as US export controls restrict access to NVIDIA's most advanced GPUs. Huawei's Ascend series is China's leading domestic AI accelerator line, and Huawei packages these chips into its Atlas-series AI computing solutions. The 950DT variant specifically targets inference decode and training scenarios that demand high memory access and interconnect bandwidth. Building hyperscale data centers in Inner Mongolia is a common strategy in China, leveraging the region's abundant land, power, and cooling resources.

<details><summary>References</summary>
<ul>
<li><a href="https://post.smzdm.com/p/apq4vq00/">让DeepSeek V4更强大 华 为 N 腾 950 DT 芯 片 8月问世：自研HBM...</a></li>
<li><a href="https://caifuhao.eastmoney.com/news/20260611190520764384120">昇 腾 950 来袭，最核心10家企业梳理_财富号_东方财富网</a></li>
<li><a href="https://m.21jingji.com/article/20260717/herald/5ad90b573648444c183fea4752a207e8.html">WAIC上的算力重器： 华 为 昇 腾 950超节点真机现身 - 21财经</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">华为昇腾</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">数据中心</span></p>

---

<a id="item-4"></a>

## [Anthropic Nears $15 Billion Revolving Credit Facility Ahead of Landmark IPO](https://www.bloomberg.com/news/articles/2026-09-03/anthropic-nears-finalizing-15-billion-pre-ipo-credit-facility?srnd=homepage-asia) ⭐️ 8.0/10

According to people familiar with the matter, Anthropic PBC is close to finalizing a plan to expand its revolving credit facility to $15 billion, clearing a key obstacle before submitting its high-profile IPO filing. Morgan Stanley is leading the financing process, with Goldman Sachs, JPMorgan, and Citi playing major roles, while Barclays, Wells Fargo, Bank of America, Deutsche Bank, RBC, and UBS are also expected to participate. This is a critical pre-IPO milestone for one of the world's leading AI companies, signaling that Anthropic's public listing is imminent and could rival or even exceed SpaceX's offering in scale. The near-universal participation of major Wall Street banks underscores strong institutional confidence in AI companies and will likely shape broader capital-market appetite for AI investments. The developer of the Claude chatbot is reportedly seeking to raise funds in its IPO comparable to or exceeding SpaceX's offering, and companies typically finalize revolving credit arrangements before formally notifying banks of their listing plans. Notably, the four lead lenders — Morgan Stanley, Goldman Sachs, JPMorgan, and Citi — are also expected to lead the IPO itself.

telegram · Marcoview666 · Sep 4, 00:53

**Background**: A revolving credit facility is a flexible form of bank credit that allows a borrower to draw down, repay, and re-borrow funds up to an approved limit, making it a common liquidity backstop for large companies. Anthropic is a Delaware Public Benefit Corporation (PBC), a for-profit corporate structure that obligates the company to balance shareholder returns with its stated mission of responsibly developing advanced AI for the long-term benefit of humanity. Establishing a large credit line before going public is standard practice, as it reassures investors about liquidity and cements banking relationships ahead of the listing.

<details><summary>References</summary>
<ul>
<li><a href="https://www.qidulp.com/article/p/3323">双语金融术语： Revolving Loan Facility （ 循 环 贷 款） - 旗渡翻译</a></li>
<li><a href="https://www.anthropic.com/company">Company \ Anthropic</a></li>
<li><a href="https://vocus.cc/article/69ee9624fd897800015cbd37">把理想寫進 公 司 章程：從 Patagonia 到 Anthropic ，看懂 PBC ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">IPO</span> <span class="tag-badge">AI Industry</span> <span class="tag-badge">Financing</span> <span class="tag-badge">Capital Markets</span></p>

---