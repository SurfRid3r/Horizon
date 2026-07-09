---
layout: default
title: "Horizon Summary: 2026-07-09 (ZH)"
date: 2026-07-09
lang: zh
---

> 从 48 条内容中筛选出 14 条重要资讯。

---

1. [OpenAI 发布 GPT-5.6，在 ARC-AGI-3 基准测试中创下新纪录](#item-1) ⭐️ 10.0/10
2. [TypeScript 7.0 正式发布：Go 语言重写带来最高 12 倍速度提升](#item-2) ⭐️ 10.0/10
3. [SK 海力士以每份 149 美元定价，完成史上最大外企美股 IPO](#item-3) ⭐️ 9.0/10
4. [欧盟议会通过"聊天控制 1.0"，允许无证扫描私人信息](#item-4) ⭐️ 8.0/10
5. [腾讯发布 Apache 许可的 Hy3 模型：295B 参数 MoE，激活仅 21B](#item-5) ⭐️ 8.0/10
6. [Meta 推出 Muse Spark 1.1 智能体 AI 付费 API](#item-6) ⭐️ 8.0/10
7. [蜘蛛毒液多肽杀灭瓦螨而不伤蜜蜂](#item-7) ⭐️ 8.0/10
8. [Cloudflare 呼吁立即采用 ML-DSA 作为后量子签名算法](#item-8) ⭐️ 8.0/10
9. [微软详析 GigaWiper：融合多种恶意软件的破坏性后门](#item-9) ⭐️ 8.0/10
10. [蚂蚁灵波开源 LingBot-Video：全球首个 MoE 具身视频基模](#item-10) ⭐️ 8.0/10
11. [大疆未发布 EV50 垂直起降无人机创下 8861 米珠峰飞行纪录](#item-11) ⭐️ 8.0/10
12. [国家超算互联网核心节点郑州上线，提供超 10 万卡国产算力](#item-12) ⭐️ 8.0/10
13. [OpenAI 与战争部拟修订合同，禁止用 AI 监控本国公民](#item-13) ⭐️ 8.0/10
14. [中国存储芯片制造商 CXMT 将启动 43 亿美元 IPO](#item-14) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [OpenAI 发布 GPT-5.6，在 ARC-AGI-3 基准测试中创下新纪录](https://openai.com/index/gpt-5-6/) ⭐️ 10.0/10

OpenAI 正式发布了全新基础模型 GPT-5.6，该模型具备更强的用户意图理解能力，并能更好地保留原始图像细节。此外，其高努力级别的推理变体 Sol 成为首个成功破解 ARC-AGI-3 游戏的前沿模型，以 7.8%的成绩创下了新的最先进（SOTA）纪录。 作为被广泛使用的基础模型的重大迭代，GPT-5.6 突破了 AI 推理能力的边界，特别是在 ARC-AGI-3 基准测试中所展示的抽象问题解决能力。此次发布加剧了前沿 AI 实验室之间的竞争格局，并直接影响了依赖高级语义理解和多模态处理的开发者。 该模型引入了三个不同的推理努力级别——Luna、Terra 和 Sol，以满足不同的计算和成本需求。尽管 GPT-5.6 能更好地推断用户的潜在目标，但仍建议开发者明确指出重要约束和成功标准；值得注意的是，OpenAI 因竞品模型 Fable 5 倾向于拒绝回答问题，而将其排除在某些生物学基准测试之外。

hackernews · logickkk1 · 7月9日 17:04 · [社区讨论](https://news.ycombinator.com/item?id=48849066)

**背景**: ARC-AGI-3 是一个极具挑战性的基准测试，旨在测试人工智能系统获取新技能和解决抽象推理任务的能力，这些任务对人类来说通常很简单，但历来对 AI 而言十分困难。像 GPT-5.6 这样的基础模型是无数现代 AI 应用的核心基础设施，因此其在推理和多模态处理方面的迭代改进对更广泛的开发者生态系统至关重要。分级推理级别的引入使开发者能够针对特定用例，在延迟、成本和认知深度之间实现动态平衡。

**社区讨论**: 社区参与度极高，用户称赞了该模型增强的意图理解能力，并通过复杂的 3D 图像生成任务展示了其分级推理能力。然而，关于 GPT-5.6 的编码能力与 Anthropic 的 Claude Code 相比孰优孰劣仍存在争论，部分用户对 OpenAI 的基准比较表示怀疑，指出排除 Fable 5 等模型实际上让 GPT-5.6“不战而胜”。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">GPT-5.6</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">ARC-AGI</span></p>

---

<a id="item-2"></a>

## [TypeScript 7.0 正式发布：Go 语言重写带来最高 12 倍速度提升](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) ⭐️ 10.0/10

微软正式发布了 TypeScript 7.0，这是一个完全由 Go 语言重写的原生版本。此更新带来了快 8 到 12 倍的完整构建速度，引入了共享内存多线程功能，现在可通过 npm 直接安装。 使用 Go 语言重写 TypeScript 这一现代 Web 开发的基础技术，代表了一次重大的范式转变，将大幅提高全球开发者的生产力。巨大的性能提升和增强的多线程功能将显著减少无数 Web 项目的构建时间。 新版本引入了 --checkers 和 --builders 参数以自定义并行度，并提供了一个兼容包以便与 TypeScript 6 共存。但 Vue 和 Svelte 等嵌入式语言工具链由于其 API 尚未就绪，目前仍需使用旧版本。

telegram · zaihuapd · 7月9日 04:01

**背景**: 语言服务器协议（Language Server Protocol, 简称 LSP）是一个开放的、基于 JSON-RPC 的协议，用于源代码编辑器或集成开发环境（IDE）与提供代码补全和语法高亮等语言智能工具的服务器之间进行通信。TypeScript 7.0 利用基于 LSP 的全新语言服务器来提供更好的编辑器支持。像 Vue 和 Svelte 这样的框架使用嵌入式语言（例如 HTML 模板中的 TypeScript），并依赖特定的 API 与 TypeScript 编译器进行交互，以实现类型检查和语言服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://microsoft.github.io/language-server-protocol/">Official page for Language Server Protocol</a></li>
<li><a href="https://github.com/biomejs/biome/discussions/1691">Embedded language support (Vue, Svelte, Astro ...) · biomejs/biome · Discussion #1691</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">TypeScript</span> <span class="tag-badge">Golang</span> <span class="tag-badge">Compilers</span> <span class="tag-badge">Web Development</span> <span class="tag-badge">Performance</span></p>

---

<a id="item-3"></a>

## [SK 海力士以每份 149 美元定价，完成史上最大外企美股 IPO](https://www.bloomberg.com/news/articles/2026-07-09/sk-hynix-said-to-guide-us-offering-price-3-1-above-korea-close?srnd=homepage-americas) ⭐️ 9.0/10

SK 海力士计划将其美国 IPO 的每份美国存托凭证（ADR）定价为 149 美元，通过发行 1.779 亿份 ADR 筹集约 265 亿美元。此次发行获得超过七倍的超额认购，吸引了包括全球多头基金和主权财富基金在内的机构投资者的强劲需求。 作为外国公司在美国历史上规模最大的 IPO，此次上市代表着大规模资本流入，凸显了 AI 内存技术在全球金融市场中的战略重要性。SK 海力士在高带宽内存（HBM）领域的领导地位使此次发行成为半导体行业和更广泛 AI 硬件生态系统的标志性事件。 每份 ADR 149 美元的定价比 SK 海力士在韩国交易所的收盘价高出 3.1%。超过七倍的超额认购倍数显示出机构投资者极强的信心，尤其是那些寻求布局 AI 内存供应链的全球多头基金和主权财富基金。

telegram · Marcoview666 · 7月9日 14:18

**背景**: 美国存托凭证（ADR）是由美国银行发行的可转让证券，代表非美国公司的股份，使外国公司能够在美国证券交易所上市交易，而无需完全遵守美国监管要求。超额认购是指 IPO 中投资者需求超过可供股票数量的情况，通常表明市场信心强劲。SK 海力士是全球领先的半导体制造商之一，也是高带宽内存（HBM）的主要供应商，HBM 是 AI 加速器和数据中心 GPU 的关键组件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zh.wikipedia.org/zh-hans/美國存託憑證">美国存托凭证 - 维基百科，自由的百科全书</a></li>
<li><a href="https://wiki.mbalib.com/wiki/超额认购">超额认购 - MBA智库百科</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Finance</span> <span class="tag-badge">IPO</span> <span class="tag-badge">Financial Markets</span> <span class="tag-badge">AI Hardware</span></p>

---

<a id="item-4"></a>

## [欧盟议会通过"聊天控制 1.0"，允许无证扫描私人信息](https://www.patrick-breyer.de/en/eu-parliament-greenlights-chat-control-1-0-breyer-our-children-lose-out/) ⭐️ 8.0/10

尽管实际投反对票的人数多于赞成票，欧盟议会仍批准了"聊天控制 1.0"，允许美国科技公司在 2028 年前无需搜查令即可大规模扫描私人信息。由于未达到否决该动议所需的全体议员绝对多数票，这项充满争议的措施最终得以通过。 这项政策的转变对数字隐私和端到端加密造成了沉重打击，为大规模的无差别监控开创了先例。它直接影响了使用 Instagram、Discord、Snapchat 和 Gmail 等主流平台的数百万用户，剥夺了他们进行私密通信的权利。 该立法是在夏季休会前夕通过紧急程序重新提出的，导致 113 名议员缺席。虽然 314 票反对、276 票赞成，但由于未能达到阻止该提案所需的 361 票绝对多数，该提案按默认规则自动通过。

hackernews · rapnie · 7月9日 11:03 · [社区讨论](https://news.ycombinator.com/item?id=48843923)

**背景**: "聊天控制"（Chat Control）是指欧盟旨在通过扫描数字通信来查处儿童性虐待材料（CSAM）的提案。"聊天控制 1.0"特别允许公司自愿扫描电子邮件和社交平台上的私人信息等私信，从而绕过搜查令的要求。批评者长期以来一直警告，这种扫描机制会破坏端到端加密，并为更广泛的政府监控打开大门。

**社区讨论**: 社区成员对通过该法规所使用的议会手段感到愤怒，他们指出投票被策略性地安排在暑假前夕，以确保议员的高缺席率。评论者对这种策略破坏民主合法性深表担忧，并认为欧盟正沦为成员国通过在国内不受欢迎的监控法律的"替罪羊机制"。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Surveillance</span> <span class="tag-badge">EU Policy</span> <span class="tag-badge">Tech Regulation</span> <span class="tag-badge">Civil Liberties</span></p>

---

<a id="item-5"></a>

## [腾讯发布 Apache 许可的 Hy3 模型：295B 参数 MoE，激活仅 21B](https://hy.tencent.com/research/hy3) ⭐️ 8.0/10

腾讯混元团队发布了 Hy3 的完整版本，这是一个拥有 2950 亿参数的混合专家模型，但激活参数仅为 210 亿，并采用宽松的 Apache 2.0 许可证。该模型在大多数基准测试中击败了 GLM-5.2，尽管其规模只有后者的一半，目前可通过 OpenRouter 访问，输入 token 价格为每百万 0.063 美元，输出 token 价格为每百万 0.21 美元。 Hy3 代表了大型 AI 模型在效率方面的重大突破，在推理时仅使用顶级竞争对手一小部分的激活参数就能实现相当甚至更优的性能。这使得高质量 AI 推理对本地部署和成本敏感的应用变得更加可行，有可能颠覆那些认为前沿能力需要庞大计算资源的竞争对手的定价模式。 该模型采用混合专家架构，总参数量为 2950 亿，但推理时仅需激活 210 亿参数，另外还有一个 38 亿参数的 MTP（多 Token 预测）层。据报道，在重度量化下，该模型可以在约 96GB 以上内存的系统上运行，在本地部署场景中可与 DeepSeek V4 Flash 竞争。

hackernews · andai · 7月9日 15:27 · [社区讨论](https://news.ycombinator.com/item?id=48847552)

**背景**: 混合专家模型是一种神经网络架构，将输入数据的不同部分路由到不同的专门子网络（专家），使模型能够拥有庞大的总参数量同时保持高效的推理。对于给定的输入，只有相关的专家被激活，从而大幅降低计算成本。腾讯混元团队此前发布了 Hy3 的预览版，在收集了 50 多个产品的反馈后，现在推出了生产就绪的完整版本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/tencent/Hy3">tencent/Hy3 · Hugging Face</a></li>
<li><a href="https://venturebeat.com/technology/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding">Tencent's Apache-licensed Hy3 takes on GLM-5.2 at half the size — and wins everywhere except coding | VentureBeat</a></li>
<li><a href="https://openrouter.ai/tencent/hy3-preview">Hy3 preview - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**社区讨论**: 社区讨论对该模型令人印象深刻的能力体积比表示兴奋，一位用户指出它小得令人震惊，但在某些基准测试上可媲美甚至超越 DeepSeek V4 Pro。然而也有人担忧竞争格局的变化——Hy3 已从 OpenRouter 排行榜的第一名跌至第 8/9 名，其有效输入价格现在与 DeepSeek Flash V4 持平。多位评论者对本地部署的可行性表示了浓厚兴趣，特别是量化潜力和在约 96GB 以上内存系统上运行的可能性。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Tencent</span> <span class="tag-badge">OpenRouter</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-6"></a>

## [Meta 推出 Muse Spark 1.1 智能体 AI 付费 API](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) ⭐️ 8.0/10

Meta 宣布推出 Muse Spark 1.1，一款全新的智能体 AI 模型，通过付费 API 提供服务，标志着公司首次在 AI 模型直接商业化方面迈出重大一步。该消息由彭博社于 2026 年 7 月 9 日率先报道，同时发布了官方技术评估报告和开发者文档。 Meta 进入付费 AI API 市场表明这个此前由 OpenAI 和 Anthropic 主导的领域竞争正在加剧，而其激进定价可能加速前沿 AI 模型的商品化进程。这一战略转向也引发了关于 Meta 是否会在推出付费服务的同时继续其开放权重模型策略的疑问。 API 定价为每百万输入 token $1.25、每百万输出 token $4.5、缓存输入 token 每百万$0.15，具有极强的成本竞争力。社区成员对 Terminal-Bench 2.1 基准测试结果提出质疑，指出评估框架使用了 6 个 CPU 核心和 8GB 内存，可能违反了基准测试中规定的单任务资源上限，从而导致结果无效。

hackernews · ot · 7月9日 14:10 · [社区讨论](https://news.ycombinator.com/item?id=48846184)

**背景**: 智能体 AI 模型旨在自主使用终端命令、代码执行和 API 调用等工具执行多步骤任务，超越了简单的文本生成能力。Meta 此前一直专注于发布 LLaMA 系列等开放权重模型，因此推出付费 API 服务代表着向直接商业化的重要战略转向。企业级 AI API 市场一直在快速增长，各公司在模型质量、定价、速度和智能体能力等方面展开激烈竞争。

**社区讨论**: 评论者对基准测试的完整性提出了重大质疑，具体指出 Terminal-Bench 2.1 的评估可能因覆盖 CPU 和内存限制而违规。多位用户赞赏其定价具有颠覆性，其中一人建议 Meta 应扮演"搅局者"角色，通过将前沿模型商品化来削弱竞争对手。还有人观察到竞争格局已快速变化，Meta 和 xAI 正在挑战 OpenAI 和 Anthropic 被认为不可逆转的领先地位。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">LLM</span> <span class="tag-badge">API</span> <span class="tag-badge">Agentic Models</span></p>

---

<a id="item-7"></a>

## [蜘蛛毒液多肽杀灭瓦螨而不伤蜜蜂](https://connectsci.au/news/news-parent/9703/Spider-venom-kills-varroa-mites-without-harming) ⭐️ 8.0/10

研究人员发现蜘蛛毒液中的一种特定多肽能够有效杀死瓦螨——这种寄生螨严重威胁蜜蜂蜂群——同时不会对蜜蜂自身造成伤害。该多肽能选择性杀灭瓦螨，而蜜蜂则能在处理中存活。 瓦螨可以说是全球范围内威胁蜜蜂蜂群最具破坏性的单一害虫，对蜂群崩溃和养蜂业的经济损失负有重大责任。一种有针对性的生物处理方法可能会彻底改变害虫管理方式，减少对现有杀螨剂的依赖——现有药物会导致蜂蜜不可食用，且面临日益严重的螨虫抗药性问题。 这一发现的核心是蜘蛛毒液中的多肽成分，在测试中对瓦螨表现出选择性毒性，同时未对蜜蜂造成伤害。现有的处理方法如糖粉和化学杀螨剂存在实际局限：有些只能清除已出房蜜蜂身上的螨虫，有些则会污染蜂蜜，只能在季末使用。

hackernews · Jedd · 7月9日 05:14 · [社区讨论](https://news.ycombinator.com/item?id=48841259)

**背景**: Varroa destructor（瓦螨）是一种寄生于蜜蜂体表的外寄生虫，会削弱蜜蜂体质，并传播至少五种致命蜂病病毒，包括畸形翅病毒（DWV）。在温带气候中，未经积极管理的受感染蜂群通常会在 2 到 3 年内崩溃，使瓦螨成为对全球养蜂业经济影响最大的寄生虫。目前的管理依赖于监测、化学杀螨剂、纱网底板等机械方法，以及培育抗螨蜂种的繁育计划。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Varroa_mites">Varroa mites</a></li>

</ul>
</details>

**社区讨论**: 经验丰富的养蜂人指出，当前的螨虫管理已消耗约 80%的养蜂劳动力，且大多数化学处理会使蜂蜜不可食用，只能在季末使用。评论者还提到了替代方案，如 Paul Stamets 基于菌丝体的免疫增强研究和糖粉处理法，另有人提出了更宏观的生态问题：气候适应性强的本土蜂种是否最终能在农业授粉中替代非本土的蜜蜂。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">agriculture</span> <span class="tag-badge">biology</span> <span class="tag-badge">beekeeping</span> <span class="tag-badge">pest-control</span> <span class="tag-badge">ecology</span></p>

---

<a id="item-8"></a>

## [Cloudflare 呼吁立即采用 ML-DSA 作为后量子签名算法](https://blog.cloudflare.com/ml-dsa-will-have-to-do/) ⭐️ 8.0/10

Cloudflare 发布了对 NIST 目前正在评估的九种新后量子签名算法的详细分析，主张行业应立即部署 ML-DSA，而非等待这些未来的候选算法。ML-DSA 已于 2024 年 8 月被 NIST 标准化为 FIPS 204，是目前最成熟、最适合生产环境使用的方案。 由于"现在窃取、将来解密"的威胁，向后量子密码学的过渡刻不容缓——攻击者可以现在存储加密数据，等量子计算机成熟后再进行解密。Cloudflare 的建议为安全从业者提供了清晰、可操作的路径，而非在等待未来可能更好的算法时陷入决策瘫痪。 ML-DSA 基于 CRYSTALS-Dilithium 格基签名方案，是 NIST 于 2024 年 8 月 13 日最终确定为 FIPS 204 的三项标准之一。正在评估的九种新候选算法代表了替代方案（如基于哈希、基于编码和多变元方案），可以提供超越格基密码学的多样性，但距离标准化仍有数年时间。

rss · The Cloudflare Blog · 7月9日 14:00

**背景**: NIST 的后量子密码学标准化项目始于 2016 年，旨在开发能够抵御量子计算机攻击的密码标准——量子计算机可能破解 RSA 和 ECC 等广泛使用的公钥算法。经过多轮评估，NIST 于 2024 年 8 月发布了前三项最终后量子密码标准：FIPS 203（用于密钥建立的 ML-KEM）、FIPS 204（用于签名的 ML-DSA）和 FIPS 205（用于签名的 SLH-DSA）。NIST 目前正在评估更多签名候选算法，以扩展已标准化的后量子算法组合。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NIST_Post-Quantum_Cryptography_Standardization">NIST Post-Quantum Cryptography Standardization</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Post-Quantum Cryptography</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">NIST</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Network Security</span></p>

---

<a id="item-9"></a>

## [微软详析 GigaWiper：融合多种恶意软件的破坏性后门](https://www.microsoft.com/en-us/security/blog/2026/07/09/gigawiper-anatomy-of-a-destructive-backdoor-assembled-from-multiple-malware/) ⭐️ 8.0/10

微软威胁情报披露了一种名为 GigaWiper 的新型破坏性后门，该后门整合了多个此前相互独立的恶意软件家族的代码。这种新威胁的独特之处在于，它将恶意数据擦除和类似勒索软件的功能结合到了一个单一的操作平台中。 通过将纯粹的破坏性擦除攻击与出于经济动机的勒索软件策略相结合，这种混合威胁对组织的数据完整性和业务连续性构成了严重的双重风险。了解 GigaWiper 的构造方式对于网络安全专业人员开发有效的检测机制和防御策略以应对日益复杂的恶意软件至关重要。 微软的分析详细解剖了 GigaWiper 恶意软件如何将不同恶意代码库的功能拼接在一起。该报告还提供了可操作的指导和威胁情报，以帮助防御者识别、缓解和预防类似的擦除器与勒索软件组合攻击。

rss · Microsoft Security · 7月9日 15:00

**背景**: 擦除恶意软件是一类极具破坏性的恶意程序，旨在恶意擦除受感染计算机的硬盘或其他静态内存，从而永久删除数据和程序。与通过加密数据来勒索赎金的传统勒索软件不同，擦除器通常被纯粹用于破坏和瘫痪系统。GigaWiper 代表了一种演变，攻击者将这种破坏性的擦除行为与勒索软件的运行策略融合在了一起。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Wiper_(malware)">Wiper (malware)</a></li>
<li><a href="https://grokipedia.com/page/Wiper_(malware)">Wiper (malware)</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Malware Analysis</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Ransomware</span> <span class="tag-badge">Backdoor</span></p>

---

<a id="item-10"></a>

## [蚂蚁灵波开源 LingBot-Video：全球首个 MoE 具身视频基模](https://www.qbitai.com/2026/07/446458.html) ⭐️ 8.0/10

蚂蚁灵波开源了全球首个基于 MoE 架构的具身智能视频生成基础模型 LingBot-Video。该模型总参数量为 30B，生成时仅激活约 3B 参数，并在 RBench 基准测试中以 0.620 的总分超越了 Wan2.6 和 Seedance1.5 Pro 等模型。 此次开源为具身智能和机器人领域提供了一项高价值工具，成功平衡了大规模模型的容量与高推理效率。该模型基于 Apache 2.0 协议发布，将助力研究人员在机器人动作预测、仿真数据生成和世界模型等方向上取得重要进展。 LingBot-Video 采用了 DiT 与 MoE 结合的设计，并基于包含 7 万小时具身数据的画像引擎进行训练，场景涵盖灵巧操作和第一视角交互等。此外，模型引入了多维强化学习奖励系统，在美学和运动一致性之外，重点关注物理合理性与任务完成度。

telegram · zaihuapd · 7月9日 04:30

**背景**: 混合专家架构（MoE）是一种在推理过程中稀疏激活部分参数的模型设计，能够提升模型容量而不成比例地增加计算成本。具身智能旨在开发能与物理环境进行交互的系统，这类研究通常需要高质量的视频生成与仿真数据，以便安全高效地训练机器人智能体。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Embodied AI</span> <span class="tag-badge">Video Generation</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Robotics</span> <span class="tag-badge">Mixture of Experts (MoE)</span></p>

---

<a id="item-11"></a>

## [大疆未发布 EV50 垂直起降无人机创下 8861 米珠峰飞行纪录](https://www.163.com/dy/article/L1CUCV940514R9OJ.html) ⭐️ 8.0/10

大疆尚未发布的 EV50 垂直起降运载无人机在“巅峰使命”珠峰科考中，成功于珠峰北坡飞越 8861 米高空。在为期 12 天的任务中，它累计完成了 32 架次起降，并获取了海拔 8000 米以上的真实大气剖面数据。 这一壮举创下了全球同类公开测试中的最高飞行升限纪录，证明了该无人机在极端环境下卓越的可靠性。它展示了在高海拔科学考察以及包括长途货物运输在内的未来复杂物流场景中的巨大潜力。 EV50 采用复合翼设计，能够原地垂直起降并在起飞后切换为固定翼巡航。在此次科考中，它实现了连续爬升 3730 米并在返程时仍剩余 30% 电量，突显了其在未来百公里级物流场景中的出色能效。

telegram · zaihuapd · 7月9日 06:00

**背景**: 垂直起降（VTOL）无人机结合了多旋翼的垂直机动性与固定翼飞机的速度和航程。传统无人机通常难以应对珠穆朗玛峰海拔高度上的极寒、稀薄空气和强风。在 8861 米高空实现稳定飞行，需要在空气动力学、电池密度和电机效率方面取得重大突破，以克服低空气密度的挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DJI_M350">DJI M350</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DJI</span> <span class="tag-badge">Drones</span> <span class="tag-badge">UAV</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Robotics</span></p>

---

<a id="item-12"></a>

## [国家超算互联网核心节点郑州上线，提供超 10 万卡国产算力](https://36kr.com/newsflashes/3887797387344387) ⭐️ 8.0/10

7 月 9 日，在 2026 河南省人工智能大会上，国家超算互联网核心节点于郑州正式上线运行。该节点可对外提供超过 10 万卡规模的国产 AI 算力，是国家超算互联网平台上线以来接入的最大规模单体国产 AI 算力资源池。 该节点的部署标志着中国在建设大规模自主可控 AI 算力基础设施方面取得重大进展，有助于降低对外国加速芯片的依赖。它强化了全国算力资源统筹调度体系，为中国 AI 产业生态和国产芯片的规模化应用提供了关键的基础设施支撑。 该核心节点承担运营管理、资源调度等核心功能，同时整合供需对接、产业孵化等综合服务，以构建覆盖全国的计算资源统筹调度体系为目标。它旨在建立统一的框架，实现全国范围内国产 AI 算力的高效分配与共享。

telegram · zaihuapd · 7月9日 07:00

**背景**: 国家超算互联网是中国为创建覆盖全国的统一算力资源网络而推出的战略举措，旨在实现跨区域、跨机构的算力资源统筹调度与共享。在美国对高端 AI 芯片实施出口管制的背景下，中国一直在大力投资国产半导体替代方案，以构建自主可控的 AI 基础设施。文中的"卡"指的是 AI 加速卡——用于 AI 训练和推理工作负载的专用硬件，通常搭载来自国产厂商的 GPU 或其他专用 AI 芯片。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Supercomputing</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Domestic Chips</span> <span class="tag-badge">National Compute</span> <span class="tag-badge">Data Center</span></p>

---

<a id="item-13"></a>

## [OpenAI 与战争部拟修订合同，禁止用 AI 监控本国公民](https://t.me/zaihuapd/42459) ⭐️ 8.0/10

OpenAI 与美国战争部已同意在合作协议中增加反监控条款，该修改由首席执行官 Sam Altman 主动提议。新条款明确规定，严禁使用 AI 系统对美国公民进行蓄意监控，或利用商业获取的个人身份信息进行追踪。 此举为军事环境下 AI 的伦理部署确立了重要先兆，回应了公众对大规模监控的广泛担忧。这也突显了大型科技公司在参与国家安全利益的同时，试图在严格的隐私保护与公民自由之间寻求平衡。 修订后的协议明确禁止利用 AI 对美国公民进行蓄意监控，并禁止追踪商业获取的个人身份信息。值得注意的是，目前该协议的更新条款尚未正式签署。

telegram · zaihuapd · 7月9日 13:22

**背景**: 此前，OpenAI 调整了其使用政策，允许其 AI 模型用于军事和国家安全目的，这最初引发了关于潜在国内监控的强烈反对。近期，Anthropic 与战争部的一项类似合作协议也因类似的数据隐私道德争议而被暂停。这些事件突显了领先的 AI 开发商与政府国防机构之间在伦理护栏方面持续存在的紧张关系与谈判。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI政策</span> <span class="tag-badge">军事AI</span> <span class="tag-badge">隐私保护</span></p>

---

<a id="item-14"></a>

## [中国存储芯片制造商 CXMT 将启动 43 亿美元 IPO](https://www.bloomberg.com/news/articles/2026-07-09/memory-chipmaker-cxmt-to-launch-4-3-billion-china-ipo-next-week?srnd=homepage-asia) ⭐️ 8.0/10

CXMT Corp.（长鑫存储）将于下周在科创板开放其 IPO 的投资者认购，计划发行 66.88 亿股股票。该公司计划筹集至少 295 亿元人民币（约 43 亿美元），其中一半股份将预留给基石投资者。 在当前地缘政治紧张的背景下，此次超大规模的 IPO 将是对投资者对中国半导体行业信心的一次重大考验。它同时也巩固了 CXMT 作为中国在全球存储芯片行业中建立自主可控国内供应链的雄心壮志的象征地位。 如果全额行使超额配售权，此次交易的筹集金额可能超过 50 亿美元。通过在以科技股为主的科创板上市，CXMT 旨在利用国内资本为其在存储技术领域的扩张和研发提供强有力的资金支持。

telegram · Marcoview666 · 7月9日 07:23

**背景**: CXMT（长鑫存储）是中国领先的 DRAM（动态随机存取存储器）芯片制造商，在全球市场上与三星、SK 海力士和美光等老牌巨头竞争。在地缘政治紧张局势和出口管制的影响下，中国大力扶持其国内半导体产业，以减少对外国技术的依赖。上海科创板是一个类似于纳斯达克、专注于高科技企业的板块，为中国战略科技领域提供了关键的融资平台。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">CXMT</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">IPO</span> <span class="tag-badge">China</span> <span class="tag-badge">Memory Chips</span></p>

---