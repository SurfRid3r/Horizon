---
layout: default
title: "Horizon Summary: 2026-08-28 (ZH)"
date: 2026-08-28
lang: zh
---

> 从 43 条内容中筛选出 4 条重要资讯。

---

1. [PaperCut NG/MF 零日漏洞链遭在野利用，厂商紧急发布补丁](#item-1) ⭐️ 9.0/10
2. [Anthropic 开放模型硬件标准预览，AI 可安全操控实验设备](#item-2) ⭐️ 8.0/10
3. [腾讯混元发布 Hy4 preview 开源模型，盲测小胜 GLM-5.3 与 Kimi K3](#item-3) ⭐️ 8.0/10
4. [AI 需求推动长鑫存储营收暴增十倍，上半年实现巨额盈利](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [PaperCut NG/MF 零日漏洞链遭在野利用，厂商紧急发布补丁](https://www.rapid7.com/blog/post/etr-papercut-ng-mf-critical-zero-day-exploited-in-the-wild) ⭐️ 9.0/10

2026 年 8 月 27 日，PaperCut Software 发布紧急安全公告，确认 PaperCut NG/MF 正遭到在野攻击；8 月 28 日，厂商为该漏洞链中的两个漏洞分配了编号：CVE-2026-81578（身份验证绕过，CVSSv4 8.8）和 CVE-2026-82078（数据库连接器中不安全的动态类加载，CVSSv4 9.4）。在一位大学客户的安全团队与取证应急响应团队协助复现漏洞后，PaperCut 于当日 02:10 AEST 为 25 和 26 版本发布了紧急补丁，随后又发布了 24 版本的补丁。 这是影响企业和教育环境中广泛部署的打印管理软件的严重零日漏洞链，且正被在野利用，未打补丁且暴露于互联网的应用服务器面临即刻被攻陷的风险。厂商已确认发生客户安全事件并将其视为安全紧急事件，各组织必须立即修补或限制访问。 该漏洞链将无需身份验证的认证绕过（CWE-306）与通过外部可控输入进行的不安全动态类加载（CWE-470，即“不安全反射”）相结合，其中评分 9.4 的第二个漏洞以高权限为前提，而这一前提恰好由第一个漏洞提供。将 PaperCut 应用服务器的 Web 管理界面暴露于公网的服务器应被优先修复；此外，PaperCut 此前曾在 2023 年因 CVE-2023-27350 遭到攻击。

rss · Rapid7 Cybersecurity Blog · 8月28日 10:09

**背景**: PaperCut NG 和 PaperCut MF 是企业、学校等组织用来跟踪、控制和保护打印活动的打印管理平台，其应用服务器组件提供可通过 Web 访问的管理和应用功能，一旦暴露于互联网便成为高价值攻击目标。零日漏洞是指在遭到利用时尚不被厂商知晓或没有可用修复方案的缺陷，使防御方完全没有准备时间。CVSS（通用漏洞评分系统，当前版本为 4.0）是业界标准的 0 到 10 分严重性评分体系，用于帮助组织确定修补工作的优先级。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.papercut.com/help/manuals/ng-mf/common/example/">Implementation by example | PaperCut</a></li>
<li><a href="https://en.wikipedia.org/wiki/Zero-day_vulnerability">Zero-day vulnerability - Wikipedia</a></li>
<li><a href="https://nvd.nist.gov/vuln-metrics/cvss">NVD - Vulnerability Metrics</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">zero-day</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">PaperCut</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-2"></a>

## [Anthropic 开放模型硬件标准预览，AI 可安全操控实验设备](https://www.anthropic.com/news/model-hardware-standard-research-preview) ⭐️ 8.0/10

Anthropic 开放了模型硬件标准（MHS）研究预览，该共享规范让 Claude 等 AI 智能体通过标准化的“读取”和“写入”驱动，安全地发现并操控显微镜、液体处理器、机械臂和激光系统等物理设备。首批合作方包括基因泰克、卡内基梅隆大学和量子计算公司 QuEra，设备集成时间从数周甚至数月缩短到几小时甚至几分钟。 该标准用统一接口取代了缓慢的逐设备定制集成，是 AI 驱动的科学仪器、先进制造与机器人自动化的重要一步。如果按计划被广泛采用并开源，将加速“自驱动实验室”的发展，并让 AI 智能体的能力从软件世界延伸到物理世界。 QuEra 报告称，其接入 MHS 的 AI 控制器可在 99.3% 的情况下无需人工干预即可恢复中性原子量子计算机的激光锁定。该标准最初由 Anthropic 与 HHMI Janelia 研究园区合作发起，Anthropic 计划在完成安全评估后将其开源——目前仍是研究预览版，而非最终定稿并被广泛采用的标准。

telegram · zaihuapd · 8月28日 01:38

**背景**: 传统上，将 AI 或自动化软件连接到实验室设备需要针对每台设备进行定制集成，通常耗费数周甚至数月的工程工作量。MHS 通过提供带标准化“读取”和“写入”驱动的共享规范解决了这一问题，使 AI 智能体无需定制代码即可操控任何符合标准的设备。这契合了更广泛的“自驱动实验室”趋势：机器人负责合成与表征，而 AI 模型决定下一步实验方向。首批合作方之一的 QuEra 是一家总部位于波士顿的公司，专注于构建容错中性原子量子计算机，其激光系统需要持续稳定控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/news/model-hardware-standard-research-preview">Previewing the Model Hardware Standard \ Anthropic</a></li>
<li><a href="https://www.modelhardwarestandard.com/">Model Hardware Standard</a></li>
<li><a href="https://en.wikipedia.org/wiki/QuEra_Computing_Inc.">QuEra Computing Inc. - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">hardware integration</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">robotics</span> <span class="tag-badge">quantum computing</span></p>

---

<a id="item-3"></a>

## [腾讯混元发布 Hy4 preview 开源模型，盲测小胜 GLM-5.3 与 Kimi K3](https://mp.weixin.qq.com/s/ymr3X878B8oa2XP15CH8TQ) ⭐️ 8.0/10

2026 年 8 月 28 日，腾讯混元发布迄今最强开源模型 Hy4 preview，总参数量 770B、活跃参数 49B（MoE 架构），上下文窗口达 1M token。在 203 个工程任务的盲评中，Hy4 preview 以 2.99 分小胜 GLM 5.3（2.92）与 Kimi K3（2.94），现已上线腾讯云、GitHub、HuggingFace、ModelScope、AtomGit 及 OpenRouter 等渠道。 此次发布加剧了中国头部 AI 实验室在开源前沿的竞争，腾讯称这是其测得的最大代际能力提升。Hy4 preview 主攻长周期软件工程、文档办公与科学研究，这些领域对百万级上下文与强大的智能体编码能力日益关键，将直接影响开发者与企业的模型选型。 架构上，78 层骨干网络的首层采用标准密集 FFN，其余 77 层采用 MoE，每层含 256 个路由专家和 1 个共享专家。API 定价为每 1M tokens 输入 0.834 美元、输出 2.501 美元；盲测领先幅度较小（2.99 对 2.92/2.94），其实际优势仍有待第三方独立验证。

telegram · zaihuapd · 8月28日 06:11

**背景**: 混合专家（MoE）模型拥有庞大的总参数量，但每个 token 仅激活其中一小部分，用显存换取更低的推理成本——Hy4 preview 在 770B 总参数中仅激活 49B。竞品也采用同样思路：Kimi K3 在约 2.8T 参数中激活约 3.7%，GLM-5.3 约 753B 参数，因此活跃参数比总参数量更能反映推理成本。1M token 的上下文窗口让模型能一次性处理完整代码库或长篇文档，对真实工程任务至关重要。盲评由人类评审在不知晓模型身份的情况下打分，通常被认为比厂商自报的基准测试更可信。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Tencent-Hunyuan/Hy4-preview">GitHub - Tencent-Hunyuan/Hy4-preview</a></li>
<li><a href="https://hy.tencent.ai/research/hy4-preview?langVersion=en">Introducing Hy4 preview - Tencent Hy</a></li>
<li><a href="https://tech.bixoto.com/glm-5-3-vs-kimi-k3-753b-vs-2-8t-the-older-weights-just-won-on-points/">GLM - 5 . 3 vs Kimi K 3 : 753B vs 2.8T. The Older... - Bixoto Tech Blog</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Tencent Hunyuan</span> <span class="tag-badge">open-source models</span> <span class="tag-badge">model release</span> <span class="tag-badge">benchmarks</span></p>

---

<a id="item-4"></a>

## [AI 需求推动长鑫存储营收暴增十倍，上半年实现巨额盈利](https://www.bloomberg.com/news/articles/2026-08-28/chinese-chipmaker-cxmt-s-sales-jump-10-fold-as-ai-demand-soars) ⭐️ 8.0/10

中国 DRAM 制造商长鑫存储（CXMT）公布上半年营收达 1503 亿元人民币，净利润 776 亿元人民币，较去年同期的亏损实现大幅逆转，营收在 AI 需求激增下增长约十倍。公司表示全球 DRAM 供应受限的趋势将延续至下半年，其下一代 LPDDR6 内存产品正按计划推进量产。 这一业绩标志着全球存储芯片格局的重大转变——一家中国 DRAM 厂商抓住了 AI 驱动下内存短缺的红利，长鑫存储的市值已超越腾讯，成为中国最有价值的公司。这同时表明中国在半导体自给自足方面取得实质性进展，降低了对三星、SK 海力士和美光等海外存储巨头的依赖。 管理层将业绩暴增归因于全球 DRAM 供应受限，并预计供应紧张态势将延续至下半年；面向移动和 AI 设备的下一代低功耗内存标准 LPDDR6 正按计划量产。公司股价自上市以来持续上涨，市值已超过腾讯控股。

telegram · Marcoview666 · 8月28日 15:01

**背景**: 长鑫存储（CXMT）于 2016 年在合肥成立，如今已成长为中国最大的 DRAM 制造商，产能大致位居全球第四。该公司设计并生产 DDR5、LPDDR5X、DDR4 和 LPDDR4X 等内存芯片，广泛应用于手机、个人电脑、平板和服务器。DRAM 是计算机和数据中心的主力内存，AI 训练与推理的爆发大幅推高了内存需求，而传统存储大厂扩产缓慢，导致供应趋紧。LPDDR6 是 JEDEC 定义的下一代低功耗 DRAM 标准，主要用于智能手机等对功耗敏感的设备。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cxmt.com/en/">About cxmt - cxmt</a></li>
<li><a href="https://aiwiki.ai/wiki/cxmt">CXMT ( ChangXin Memory Technologies ) | AI Wiki</a></li>
<li><a href="https://chinaidb.com/companies/cxmt/">CXMT ( ChangXin Memory ) — China AI Index</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">semiconductors</span> <span class="tag-badge">DRAM</span> <span class="tag-badge">CXMT</span> <span class="tag-badge">AI hardware</span> <span class="tag-badge">China tech</span></p>

---