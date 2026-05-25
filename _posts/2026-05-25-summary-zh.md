---
layout: default
title: "Horizon Summary: 2026-05-25 (ZH)"
date: 2026-05-25
lang: zh
---

> From 28 items, 4 important content pieces were selected

---

1. [约束衰减：LLM 代理在后端代码生成中的脆弱性](#item-1) ⭐️ 8.0/10
2. [Armin Ronacher 批评 AI 生成的错误报告](#item-2) ⭐️ 8.0/10
3. [PapersWithCode 新增多指标支持与外部论文提交功能](#item-3) ⭐️ 8.0/10
4. [APKPure 上的 Telegram 12.6.5 版本植入间谍后门](#item-4) ⭐️ 8.0/10

---

## [约束衰减：LLM 代理在后端代码生成中的脆弱性](https://arxiv.org/abs/2605.06445) {: #"item-1" } ⭐️ 8.0/10

一项新研究论文指出了“约束衰减”现象，即 LLM 编码代理在生成多文件后端代码时，随着架构、ORM 和框架约束的累积，难以遵守这些规则。研究发现，随着这些约束的堆积，断言通过率下降了约 30 个百分点。 这一发现凸显了在生产环境中使用 AI 代理的一个关键局限性，将其在快速原型设计中的成功区分开来。这表明，虽然 LLM 在不受限制的任务中很强大，但在需要跨复杂系统维持严格结构一致性时，其可靠性会显著下降。 性能下降主要集中在约定繁重的框架中，表明严格的风格和结构规则对当前模型构成了挑战。研究人员指出，由于成本限制，他们没有完全测试前沿模型，这为更先进的模型是否表现出同样的脆弱性留下了研究空间。

hackernews · wek · May 24, 12:55 · [社区讨论](https://news.ycombinator.com/item?id=48256912)

**背景**: LLM 编码代理是旨在编写和修改代码的 AI 系统，通常用于自动化软件开发任务。后端代码生成涉及创建服务器端逻辑、数据库和 API，这通常需要遵循特定的架构模式，以确保系统的可维护性和可扩展性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2605.06445">Constraint decay : The Fragility of LLM Agents in Backend Code...</a></li>
<li><a href="https://agentpatterns.ai/verification/constraint-decay-backend-agents/">Constraint Decay in Backend Code Generation - AgentPatterns.ai</a></li>

</ul>
</details>

**社区讨论**: 评论者根据个人经验普遍验证了这些发现，指出在复杂项目中管理约束变得困难，尽管有些人建议逐步提供约束而不是一次性提供。讨论还批评了该研究省略了前沿模型，并将其与“钙化”现象进行了类比，即代码模式随时间变得僵化。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">Code Generation</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">AI Research</span> <span class="tag-badge">System Design</span></p>

---

## [Armin Ronacher 批评 AI 生成的错误报告](https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything) {: #"item-2" } ⭐️ 8.0/10

Armin Ronacher 批评了用户提交 AI 生成 Issue 报告的趋势，认为这些报告用自信但不准确的内容掩盖了真正的问题。他提倡一种严格的、由人类观察者填写的格式，重点关注运行的命令、预期结果、实际结果和日志，以提高调试效率。 这凸显了开源维护中一个日益严重的摩擦点，即 AI 生成的噪音浪费了开发者的时间并阻碍了问题的解决。它强调了以人为中心的沟通对于确保技术问题得到准确解决的重要性。 Ronacher 特别指出，AI 经常生成虚假的最小复现示例和错误的根本原因分析。他提议为 Issue 报告采用四点结构，以消除 AI 产生的幻觉，专注于原始观察。

rss · Simon Willison · May 24, 18:46

**背景**: Armin Ronacher 是一位杰出的开源开发者，以创建 Flask Web 框架和 Jinja2 模板引擎而闻名。Issue 报告是用户和开发者用来跟踪软件项目中的错误或请求功能的主要方法，通常托管在 GitHub 等平台上。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">AI Impact</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">Developer Experience</span> <span class="tag-badge">Community</span></p>

---

## [PapersWithCode 新增多指标支持与外部论文提交功能](https://www.reddit.com/r/MachineLearning/comments/1tmawv5/paperswithcode_new_features_week_1_p/) {: #"item-3" } ⭐️ 8.0/10

Hugging Face 复活的 PapersWithCode 平台现在支持每个基准测试使用多个指标，并允许提交来自 arXiv 以外来源的论文。这些更新是在该网站重新上线一周后宣布的，旨在追踪最先进的人工智能性能。 多指标支持允许研究人员通过考虑速度和准确性等因素来更全面地评估模型，满足了实际部署的关键需求。该平台的复兴恢复了一个追踪 AI 进展的集中式资源，这对研究社区至关重要。 Open ASR 排行榜现在显示词错误率 (WER) 和逆实时因子 (RTFx)，分别用于衡量准确性和速度。用户可以从 GitHub 仓库、博客文章或 BioRxiv 提交论文，系统将自动用相关标签和元数据对其进行丰富。

reddit · r/MachineLearning · NielsRogge · May 24, 12:31

**背景**: PapersWithCode 是一个将学术论文与其代码实现及基准测试结果联系起来的存储库，有助于追踪人工智能的最先进 (SOTA) 性能。它之前已被关闭，但被 Hugging Face 复活，以继续为机器学习社区服务。词错误率 (WER) 等指标衡量转录准确性，而逆实时因子 (RTFx) 则衡量相对于音频持续时间的处理速度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/learn/audio-course/chapter5/evaluation">Evaluation metrics for ASR · Hugging Face</a></li>
<li><a href="https://en.wikipedia.org/wiki/Word_error_rate">Word error rate - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区对这些更新反应积极，称赞了快速进展，并请求增加论文认领机制等功能以编辑元数据。用户还询问了该平台相对于 Hugging Face 每日论文部分的优势，并指出缺少“Graph”等某些领域。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">PapersWithCode</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">SOTA Tracking</span></p>

---

## [APKPure 上的 Telegram 12.6.5 版本植入间谍后门](https://x.com/EricParker/status/2058411298195661221) {: #"item-4" } ⭐️ 8.0/10

APKPure 上发现的 Telegram 12.6.5 重新打包版本包含一个名为 DataCollector 的间谍软件后门。该恶意代码窃取包括聊天记录、位置和文件在内的广泛用户数据，并将其外传至特定的 C2 服务器。 这次供应链攻击给从第三方来源而非官方商店下载该应用的用户带来了严重的隐私风险。它凸显了 APK 重新打包的危险性，即合法应用在用户不知情的情况下被修改以包含恶意软件。 该恶意软件通过 classes3.dex 注入，包含超过 3000 行代码，在传输前使用 AES-GCM 加密被盗数据。泄露的数据包括聊天记录、通讯录、照片、文档、GPS 定位和 SIM 卡详细信息，这些数据被发送至 IP 38.190.225.166。

telegram · zaihuapd · May 24, 11:38

**背景**: APK 重新打包是攻击者反编译合法 Android 应用、修改其代码以包含恶意负载，然后重新签名使其看起来真实的过程。命令与控制（C2）服务器是攻击者用来向受感染设备发送命令并接收被盗数据的集中式计算机。AES-GCM 是一种认证加密算法，可确保数据的机密性和完整性，常被恶意软件用来隐藏外传数据的内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/tum-i4/Repackman">tum-i4/Repackman: A Tool for the Automatic Repackaging of Android ...</a></li>
<li><a href="https://otx.alienvault.com/pulse/67af17c16b6d67934e379485">JavaScript to Command-and-Control ( C 2 ) Server Malware - LevelBlue...</a></li>
<li><a href="https://medium.com/@thomas_40553/how-to-secure-encrypt-and-decrypt-data-within-the-browser-with-aes-gcm-and-pbkdf2-057b839c96b6">The Ultimate Developer’s Guide to AES - GCM : Encrypt and... | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Supply Chain Attack</span> <span class="tag-badge">Mobile Security</span> <span class="tag-badge">Telegram</span></p>

---