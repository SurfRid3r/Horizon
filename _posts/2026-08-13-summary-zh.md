---
layout: default
title: "Horizon Summary: 2026-08-13 (ZH)"
date: 2026-08-13
lang: zh
---

> 从 41 条内容中筛选出 10 条重要资讯。

---

1. [Cerebras 与 OpenAI 推出 GPT-5.6 Sol Ultrafast 模式](#item-1) ⭐️ 9.0/10
2. [DeepSeek 发布 Harness 框架与 DeepSeek-V4-Pro-0813 权重](#item-2) ⭐️ 9.0/10
3. [OpenAI 升级 ChatGPT 至 GPT-5.6 系列并开放更多免费权限](#item-3) ⭐️ 9.0/10
4. [谷歌发布 Gemini 3.7 Flash，推理能力与效率大幅提升](#item-4) ⭐️ 8.0/10
5. [Spaghettifying DRAM：暴露新型底层内存攻击向量](#item-5) ⭐️ 8.0/10
6. [Weax 与 Sorry 勒索病毒利用管家婆 0day 漏洞，疑似 AI 挖掘](#item-6) ⭐️ 8.0/10
7. [特朗普签署备忘录允许私企开展政府背书的海外网络攻击](#item-7) ⭐️ 8.0/10
8. [Google DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](#item-8) ⭐️ 8.0/10
9. [长鑫存储市值超越腾讯，成为中国市值最高公司](#item-9) ⭐️ 8.0/10
10. [Google 发布 Gemini 3.6 Flash 并宣布 Gemini 4 已启动预训练](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Cerebras 与 OpenAI 推出 GPT-5.6 Sol Ultrafast 模式](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) ⭐️ 9.0/10

Cerebras 和 OpenAI 宣布为 GPT-5.6 Sol 大语言模型推出全新的“Ultrafast”模式，其推理速度比竞争模型快达 11 倍。此次合作利用了 Cerebras 专用的晶圆级硬件，大幅减少了复杂 AI 工作负载所需的时间。 这一突破大幅减少了复杂推理任务的延迟，通过实现近乎即时的智能体响应，有望彻底改变企业工作流、编码和科学研究。它标志着 AI 硬件领域的重大转变，证明了专用芯片在大规模推理方面能够超越传统的 GPU 集群。 在基准测试中，Ultrafast 模式下的 GPT-5.6 Sol 仅用 11 个多小时就完成了 2500 道 HLE 问题，而 Claude Fable 5 得出相同结论则需要 78 小时。然而，批评者指出，Cerebras 和 OpenAI 并未明确确认 Ultrafast 模式的输出是否与标准 GPT-5.6 Sol 模型保持完全的 1:1 一致性。

hackernews · pr337h4m · 8月13日 18:10 · [社区讨论](https://news.ycombinator.com/item?id=49289844)

**背景**: GPT-5.6 是 OpenAI 开发的一系列大语言模型，其中“Sol”是为复杂推理、编码和智能体工作流优化的旗舰版本。Cerebras 是一家 AI 硬件公司，以其晶圆级引擎（WSE）而闻名，这是一种旨在取代整个 GPU 集群以实现超快 AI 训练和推理的巨型芯片。通过在 Cerebras 硬件上运行 OpenAI 最强大的模型，此次合作旨在克服与大型 Transformer 模型相关的传统计算瓶颈。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6_Sol">GPT-5.6 Sol</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cerebras">Cerebras - Wikipedia</a></li>
<li><a href="https://openai.com/index/gpt-5-6/">GPT‑5.6: Frontier intelligence that scales with your ambition</a></li>

</ul>
</details>

**社区讨论**: 社区对速度的提升感到非常兴奋，许多用户指出，尽管更快的推理能极大地改善用户体验，但它在编码和智能体任务中的价值经常被低估。然而，对于基准测试的透明度也存在显著的怀疑态度；用户指出其遗漏了 Mimo v2.5-Pro 等快速竞品，并质疑 Ultrafast 模式是否为了速度而牺牲了输出的等价性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Inference</span> <span class="tag-badge">Cerebras</span></p>

---

<a id="item-2"></a>

## [DeepSeek 发布 Harness 框架与 DeepSeek-V4-Pro-0813 权重](https://mp.weixin.qq.com/s/mANdGRI4fO_sEbC1ECEoZQ) ⭐️ 9.0/10

DeepSeek 发布了名为“Harness”的开源框架，这是一个由 Cordis 驱动的智能体运行时，采用了“一切皆插件”的架构。此外，DeepSeek-V4-Pro-0813 的模型权重已在 Hugging Face 上公开发布。 V4-Pro 模型的发布为社区提供了一个拥有 1.6 万亿参数的巨型混合专家（MoE）模型，而 Harness 框架则为智能体开发提供了一种高度模块化的方法，挑战了现有的单体架构。这允许开发人员在不重启进程的情况下动态交换或热重载 UI、模型和工具等组件。 DeepSeek-V4-Pro 是一个混合专家（MoE）模型，拥有 1.6T 总参数（激活参数为 49B），并支持 100 万 token 的上下文长度。Harness 提供标准、PTC、极简和创造四种运行模式，并通过将所有模型输入、推理和工具调用记录在仅追加的会话日志中，确保了完全的可追溯性。

telegram · zaihuapd · 8月13日 12:39

**背景**: 混合专家（MoE）模型通过仅为给定 token 激活其参数的一个子集（专家）来提高效率，从而允许在不按比例增加计算成本的情况下实现庞大的总参数量。“智能体测试框架（Harness）”是一个运行时环境，负责管理 AI 模型如何与外部工具、内存和环境进行交互。此处使用的“一切皆插件”架构由 Cordis 驱动，该框架允许热加载和卸载插件，同时能干净地回滚其状态和副作用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek -ai/ deepseek - harness : DeepSeek Harness ...</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-pro">DeepSeek V4 Pro - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**社区讨论**: 社区对该框架的“可追溯”特性表示赞赏，该特性以未加密形式记录所有模型活动，一些人认为这是美国模型所缺乏的。然而，部分开发者表示出现了“插件疲劳”，或指出对于没有编程语言理论（PLT）知识的人来说，Cordis 框架底层的代数概念可能过于复杂。作者澄清这只是一个早期的开发者预览版，可能存在一些粗糙之处。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">LLM</span> <span class="tag-badge">开源</span> <span class="tag-badge">AI框架</span> <span class="tag-badge">模型权重</span></p>

---

<a id="item-3"></a>

## [OpenAI 升级 ChatGPT 至 GPT-5.6 系列并开放更多免费权限](https://t.me/zaihuapd/43176) ⭐️ 9.0/10

OpenAI 宣布对 ChatGPT 进行重大更新，将付费用户升级至 GPT-5.6 Sol 并新增控制思考深度的滑块，同时将免费用户默认模型升级至 GPT-5.6 Luna，下周起还可享受无限文本对话及用于应对复杂问题的新增 Think 按钮。 此次更新通过为付费用户提供高级推理控制，并赋予免费用户无限文本权限，显著提升了产品能力与可及性。这标志着 AI 模型处理复杂查询方式的重大转变，并大幅扩大了高端 AI 工具的用户群体。 GPT-5.6 Sol 提供更可靠的事实答案和更聚焦的回复，而快速且高性价比的 GPT-5.6 Luna 在金融、医疗和法律领域的提问中，其事实错误较前代模型有所减少。

telegram · zaihuapd · 8月13日 17:04

**背景**: GPT-5.6 是 OpenAI 开发的大型语言模型系列，包含按能力排序的 Luna、Terra 和 Sol 等变体。Luna 专为高并发任务设计，而 Sol 则专为复杂问题解决、编程和科学研究而构建。新增的“Think”按钮和推理滑块允许用户调整生成响应所用的处理能力，从而在速度和深度推理之间进行优化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6_Sol">GPT-5.6 Sol</a></li>
<li><a href="https://www.absolutegeeks.com/tech-news/openai-rolls-out-gpt-5-6-with-think-button-and-smarter-response-controls/">OpenAI rolls out GPT-5.6 with Think button and smarter response controls</a></li>
<li><a href="https://openrouter.ai/openai/gpt-5.6-luna">GPT - 5 . 6 Luna - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">ChatGPT</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Product Update</span></p>

---

<a id="item-4"></a>

## [谷歌发布 Gemini 3.7 Flash，推理能力与效率大幅提升](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

谷歌正式发布了 Gemini 3.7 Flash，这是 Gemini 3 模型家族的最新迭代版本，在核心推理基础上进行了算法改进，并支持可定制的思考配置，以平衡质量、成本和延迟。该模型在关键基准测试上显著超越了前代 3.6 Flash，包括 GDP.pdf（34.0% vs 22.0%）和 AutomationBench（30.4% vs 17.0%），展现出更强的复杂文档处理和实际业务工作流完成能力。 此次发布加剧了中端 AI 模型市场的竞争，在该市场中，成本效益和推理质量是对抗 OpenAI 的 GPT-5.6 Luna 和 Anthropic 的 Opus 5 等竞品的关键战场。对于金融、法律和生物科学等知识密集型领域，推理能力和准确性的提升可能使 Gemini 3.7 Flash 成为需要兼顾性能和经济推理成本的企业部署的有力选择。 Gemini 3.7 Flash 支持可定制的思考配置，允许开发者控制质量、成本和延迟之间的权衡，使其能够适应不同的使用场景。该模型可能仍然存在基础模型的一般局限性，如幻觉问题，谷歌表示正在持续改进越狱防御能力，并可能出现偶发的延迟或超时问题。

hackernews · thisisauserid · 8月13日 17:23 · [社区讨论](https://news.ycombinator.com/item?id=49289112)

**背景**: Gemini 是由 Google DeepMind 开发的多模态大语言模型家族，旨在处理文本、图像、音频、视频和代码。Flash 系列专为更低延迟、更高效率和更低成本而设计，与 Pro 系列相比，适合高吞吐量、生产级规模的应用场景。Gemini 3.7 Flash 将 Gemini 3 Pro 的推理能力与 Flash 系列的速度和成本优势相结合，定位为谷歌适用于广泛部署场景的多功能"主力"模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3.7 Flash - Model Card — Google DeepMind</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_(language_model)">Gemini (language model) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区情绪参差不齐但讨论热烈，多位用户进行了实践测试，如图像转 HTML 转换，其中 Gemini 3.7 Flash 在同等价位的竞品中表现出色，尽管 Anthropic 的 Opus 5 在该特定任务上仍然领先。定价比较是讨论的重点，部分用户认为 GPT-5.6 Luna 激进的定价和强劲的基准表现削弱了 Flash 的存在价值，而另一些人则指出 Flash 更适合作为 Terra 的竞品。多位评论者赞赏 Flash 系列与谷歌产品生态系统的协同效应，特别是在 AI 驱动的搜索场景中。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Gemini</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Google</span></p>

---

<a id="item-5"></a>

## [Spaghettifying DRAM：暴露新型底层内存攻击向量](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 8.0/10

安全研究员 Christopher Domas 发布了新技术，演示如何操纵现代 DRAM 配置以获取底层系统访问权限。该漏洞利用程序专门针对 AMD Family 16h CPU 上的 DRAM 控制器转换寄存器，这些寄存器处于暴露状态且无法被锁定。 这项研究突显了严重依赖复杂专有配置的现代内存系统中一个巨大且此前未被充分探索的攻击面。这对于游戏主机等高度封闭的安全生态系统尤为重要，在这些系统中，通过操纵 DRAM 获取 ring-0 访问权限可能会彻底破坏系统安全。 该技术是在 AMD Family 16h CPU 上开发和测试的，因为它们的数据手册明确记录了 DRAM 控制器的转换寄存器无法被锁定。该漏洞的出现是因为这些 DRAM 重映射选项出乎意料地暴露给了用户空间。

hackernews · matt_d · 8月13日 14:17 · [社区讨论](https://news.ycombinator.com/item?id=49286341)

**背景**: 动态随机存取存储器（DRAM）已经从由基本信号管理的简单配置演变成需要专有二进制大文件才能运行的高度复杂系统。现代 CPU 通过内部寄存器管理内存转换，并与 ring-0 等高特权执行级别以及 Intel ME 或 AMD PSP 等安全子系统密切交互。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=49286341">Spaghettifying DRAM | Hacker News</a></li>
<li><a href="https://www.tomshardware.com/news/blackhat-x86architecture-vulnerability-disclosed,29800.html">Old x86 Processor Design Flaw Vulnerability ... | Tom's Hardware</a></li>

</ul>
</details>

**社区讨论**: 社区对即将到来的 Black Hat 演讲抱有高度期待，并赞扬了 Christopher Domas 清晰解释复杂黑客概念的能力。评论者还指出，现代 DRAM 系统的极大复杂性固有地产生了巨大的攻击面，并担忧如果此技术获取了 ring-0 访问权限，Xbox 和 PlayStation 等安全系统可能会被攻破。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">dram</span> <span class="tag-badge">reverse-engineering</span> <span class="tag-badge">hardware</span> <span class="tag-badge">vulnerability</span></p>

---

<a id="item-6"></a>

## [Weax 与 Sorry 勒索病毒利用管家婆 0day 漏洞，疑似 AI 挖掘](https://forum.butian.net/share/4961) ⭐️ 8.0/10

一份详细的技术分析报告揭示了 Weax 和 Sorry 勒索病毒通过利用管家婆软件的 0day 漏洞攻击中国中小企业的完整攻击链路。分析人员怀疑攻击者可能利用了 AI 来挖掘该漏洞。 这一事件表明了一个令人担忧的趋势：AI 可能正在降低发现关键 0day 漏洞的门槛，极大增加了网络安全威胁。此外，针对管家婆这类核心 ERP 系统的攻击，可能会导致中小企业严重的运营中断和财务损失。 Solar 应急响应团队的报告剖析了从通过漏洞获取初始访问权限到数据加密的完整入侵路径。虽然以往的 Weax 攻击通常依赖 MSSQL 弱口令，但此次攻击链明确利用了管家婆软件中新发现的漏洞。

rss · 奇安信攻防社区 · 8月13日 09:00

**背景**: 勒索病毒是一种恶意软件，它通过加密受害者的文件并勒索赎金来获利。管家婆是中国广泛使用的 ERP 及财务管理软件，特别在中小企业的进销存管理方面非常普及。利用 AI 挖掘漏洞暗示了向自动化攻击性安全研究的转变，这可能会加速在老旧软件中发现漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gm7.org/archives/40108">Solar应急响应团队 2025勒索软件威胁态势报告（534起实战案例深度复盘 · 近六万字完整版） - 信息安全知识库</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">网络安全</span> <span class="tag-badge">勒索病毒</span> <span class="tag-badge">0day漏洞</span> <span class="tag-badge">应急响应</span> <span class="tag-badge">AI安全</span></p>

---

<a id="item-7"></a>

## [特朗普签署备忘录允许私企开展政府背书的海外网络攻击](https://www.bloomberg.com/news/articles/2026-08-13/trump-enlists-private-sector-to-boost-cyber-offensive-arsenal) ⭐️ 8.0/10

特朗普总统签署了一项备忘录，授权受监督的私营企业对针对美国人的外国跨国犯罪组织开展海外监控和网络攻击。国土安全部（DHS）将负责运行该项目，并与司法部（DOJ）协调监督工作。 该政策标志着美国网络战略的重大转变，正式将私营企业纳入国家支持的进攻性网络行动中。这可能会大幅扩展美国的进攻性网络安全能力，同时从根本上改变政府情报机构与私营企业之间的传统界限。 参与企业须维持至少 100 万美元的保证金或托管款，若不遵守合同约定，该款项将被没收。获得授权的私营实体在开展海外行动期间，必须处于联邦政府的直接控制和监督之下。

telegram · zaihuapd · 8月13日 05:10

**背景**: 进攻性网络行动传统上一直是军事和情报机构（如国家安全局和美国网络司令部）的专属领域。然而，跨国组织实施的网络犯罪和勒索软件攻击迅速升级，极大地消耗了政府资源。授权私营企业开展进攻性安全行动代表了一种虽有争议但务实的战略转变，旨在投射力量并在全球范围内瓦解威胁行为者。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Government Policy</span> <span class="tag-badge">Cyber Warfare</span> <span class="tag-badge">Offensive Security</span> <span class="tag-badge">Private Sector</span></p>

---

<a id="item-8"></a>

## [Google DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

2026 年 8 月 12 日，Google DeepMind 发布了大规模多语言手语转文字模型 SL2T，该模型使用超过 10 万小时、涵盖 50 多种手语的数据进行训练。从 2026 年 8 月 20 日起，该模型将率先在 Pixel 11 的 Gboard 和 Live Transcribe 上支持美国手语转英语，这是手语 AI 首次落地消费级产品。 SL2T 是无障碍技术领域的重要里程碑，让聋哑和重听用户能够使用母语——手语——与智能手机交互，就像语音 AI 让用户可以对着设备说话一样。该模型在主流消费产品中的落地，标志着手语正成为计算设备的一级输入方式，有望从根本上改变数百万手语用户日常使用技术的方式。 该模型在 FLEURS-ASL 基准上零样本得分 70 BLEURT，大幅超越此前所有纪录。为保护用户隐私，SL2T 仅处理手部和身体姿态关键点，不读取原始视频画面，确保实际视觉内容不会被捕获或传输。

telegram · zaihuapd · 8月13日 08:55

**背景**: SL2T 全称为 Sign-Language-to-Text（手语转文字），旨在实时将手语手势翻译成书面文字。FLEURS-ASL 是 FLORES/FLEURS 评估套件的扩展——后者最初用于文本和语音翻译评测——新增了美国手语（ASL）视频内容，为手语模型提供了标准化评测基准。BLEURT 是一种基于迁移学习（从 BERT 模型出发）的自动评估指标，用于衡量生成文本的流畅度以及与参考文本在语义上的一致性。Gboard 是谷歌的虚拟键盘应用，Live Transcribe 则是安卓平台上的实时字幕服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/">Putting sign language AI into users’ hands — Google DeepMind</a></li>
<li><a href="https://datanorth.ai/news/google-deepmind-releases-sl2t">Google DeepMind releases SL 2 T sign language AI - DataNorth</a></li>
<li><a href="https://aclanthology.org/2025.naacl-long.314/">FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation - ACL Anthology</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepMind</span> <span class="tag-badge">sign language AI</span> <span class="tag-badge">accessibility</span> <span class="tag-badge">SL2T</span> <span class="tag-badge">speech-to-text</span></p>

---

<a id="item-9"></a>

## [长鑫存储市值超越腾讯，成为中国市值最高公司](https://www.bloomberg.com/news/articles/2026-08-13/cxmt-overtakes-tencent-to-become-most-valuable-chinese-company) ⭐️ 8.0/10

长鑫存储近期在上海证券交易所上市后，市值达到约 5240 亿美元，超越腾讯约 5100 亿美元的估值。该公司上市首日股价暴涨 467%，此后继续上涨；而腾讯因大力投入 AI 导致股价当日再跌 4.5%，今年以来累计跌幅已超过 26%。 这一事件标志着中国科技行业格局的象征性转变——一家专注于 DRAM 的本土半导体制造商超越了长期占据主导地位的互联网巨头。它凸显了投资者对中国半导体自主化的热情正在重塑市场估值，并将资本从消费互联网引向硬件基础设施领域。 长鑫存储在上海证券交易所上市，股票代码为 688825，总部位于安徽省合肥市。该公司专注于 DRAM 存储芯片的设计、制造和测试，目前是中国最大、全球第四大的 DRAM 制造商，但也面临国际压力，包括 2026 年 6 月被美国国防部列入涉军企业名单。

telegram · zaihuapd · 8月13日 10:10

**背景**: 长鑫存储成立于 2016 年，是专注于 DRAM 的中国领先集成电路制造商，DRAM 是用于电脑、服务器和移动设备临时数据存储的关键芯片。DRAM 在全球半导体供应链中占据核心地位，长期由三星、SK 海力士和美光三大巨头主导。随着地缘政治紧张局势限制了中国获取先进芯片的渠道，以长鑫存储为代表的本土半导体企业获得了大量投资者关注和政府支持，以推动存储芯片生产的自主化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ChangXin_Memory_Technologies">ChangXin Memory Technologies - Wikipedia</a></li>
<li><a href="https://zh.wikipedia.org/zh-cn/长鑫存储">长鑫存储 - 维基百科，自由的百科全书</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">CXMT</span> <span class="tag-badge">Tencent</span> <span class="tag-badge">Market Capitalization</span> <span class="tag-badge">Finance</span></p>

---

<a id="item-10"></a>

## [Google 发布 Gemini 3.6 Flash 并宣布 Gemini 4 已启动预训练](https://t.me/zaihuapd/43177) ⭐️ 8.0/10

Google 发布了 Gemini 3.6 Flash，该模型较 3.5 Flash 输出 Token 减少 17%，通过更少的推理步骤和工具调用来完成多步任务。Google 同时透露 Gemini 4 已正式启动预训练阶段。 此次发布为开发者提供了更高效、更具成本效益的生产级模型选择，进一步巩固了 Google 在 AI 模型竞赛中的竞争力。Gemini 4 预训练的启动表明 Google 持续大力投入下一代模型的研发。 API 定价为每百万输入 Token 1.5 美元、每百万输出 Token 7.5 美元，模型知识截止日期更新至 2026 年 3 月。Google 同时还推出了面向高吞吐、低延迟场景优化的 Gemini 3.5 Flash 变体。

telegram · zaihuapd · 8月13日 17:32

**背景**: Gemini 是 Google DeepMind 开发的多模态大语言模型系列，包含 Pro、Flash 和 Flash Lite 等多个面向不同应用场景的变体。Flash 系列专为速度和成本效率而设计，适合大规模生产环境应用。预训练是大语言模型开发的基础阶段，模型在此阶段从海量数据中学习通用模式，随后再进行针对特定任务的微调。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://apimart.ai/zh/blog/gemini-3-6-flash-what-free-users-get">Gemini 3 . 6 Flash 发布：免费用户能得到什么 | APIMart</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_2.5_Flash_Image">Gemini 2.5 Flash Image</a></li>
<li><a href="https://www.glbgpt.com/hub/zh-hk/gemini-3-6-flash-review/">Gemini 3 . 6 快速評測：定價、效能測試與 API</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Google Gemini</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">API</span> <span class="tag-badge">Tech News</span></p>

---