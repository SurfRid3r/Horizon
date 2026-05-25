---
layout: default
title: "Horizon Summary: 2026-05-23 (ZH)"
date: 2026-05-23
lang: zh
---

> From 14 items, 6 important content pieces were selected

---

1. [Anthropic 的 Project Glasswing 发现逾万高危漏洞](#item-1) ⭐️ 9.0/10
2. [苹果开源 corecrypto 库，附带形式化验证的后量子算法](#item-2) ⭐️ 9.0/10
3. [微软内部部署 Anthropic 的 Claude Code](#item-3) ⭐️ 9.0/10
4. [AI 需求引发内存短缺，导致消费电子产品价格上涨](#item-4) ⭐️ 8.0/10
5. [微软财报显示 OpenAI 单季度亏损 115 亿美元](#item-5) ⭐️ 8.0/10
6. [我国日均 Token 调用量两年激增超千倍达 140 万亿](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic 的 Project Glasswing 发现逾万高危漏洞](https://www.anthropic.com/research/glasswing-initial-update) ⭐️ 9.0/10

Anthropic 的 Project Glasswing 利用 Claude Mythos Preview 模型在一个月内识别了超过 10,000 个关键软件漏洞。该项目在已审查的漏洞中实现了 90.6% 的真阳性率，Cloudflare 等合作伙伴报告称发现速度提高了十倍。 这一发展将网络安全的瓶颈从发现漏洞转移到了人工验证和修补的能力上。这凸显了一个关键挑战，即 AI 驱动的漏洞发现速度现已超过了行业修复它们的能力。 该倡议扫描了数千个开源项目，发现了 6,202 个高危漏洞，并与约 50 个合作伙伴进行了协作。Anthropic 已与开源安全基金会合作，并发布了 Claude Security 工具，以帮助企业应对这一涌入的漏洞。

telegram · zaihuapd · May 23, 03:16

**背景**: Project Glasswing 是一项围绕 Claude Mythos Preview 构建的防御性网络安全倡议，该模型是一个目前仅向关键行业合作伙伴开放的通用前沿模型。开源安全基金会（OpenSSF）是 Linux 基金会下的一个跨行业倡议，致力于提高开源软件的安全性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing : Securing critical software for the AI era \ Anthropic</a></li>
<li><a href="https://hivesecurity.gitlab.io/blog/project-glasswing-anthropic-claude-mythos-cybersecurity/">Project Glasswing : Anthropic 's AI That Finds... — Hive Security</a></li>
<li><a href="https://thenewstack.io/openssf-open-source-security-members/">"Morally repugnant shortsightedness": Why open source security ...</a></li>

</ul>
</details>

**社区讨论**: 合作伙伴报告称发现速度显著加快，而开源维护者则对应接不暇表示担忧，请求减缓漏洞报告的速度，以便留出时间进行修补。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability Detection</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Open Source</span></p>

---

<a id="item-2"></a>

## [苹果开源 corecrypto 库，附带形式化验证的后量子算法](https://security.apple.com/blog/formal-verification-corecrypto/) ⭐️ 9.0/10

5 月 22 日，苹果开源了其 corecrypto 库，其中包含后量子 ML-KEM 和 ML-DSA 算法的实现。此次发布包括端到端的形式化验证证明，确保 C 代码和优化的 ARM64 汇编严格遵守 NIST 标准。 这一举措通过针对运行在超过 25 亿台活跃设备上的加密代码应用严格的数学证明，为软件保障树立了新的行业标准。它通过向社区提供经过验证的、可投入生产的实现和工具，加速了抗量子安全性的采用。 苹果发布了定制验证工具和一个 Isabelle 定理证明器库，允许独立专家评估这些证明。该库目前保障 iMessage 和 VPN 等服务的安全，以应对未来量子计算机破解当前加密的威胁。

telegram · zaihuapd · May 23, 04:49

**背景**: 后量子密码学是指被认为能够抵御量子计算机攻击的密码算法。ML-KEM (FIPS 203) 用于密钥封装，而 ML-DSA (FIPS 204) 用于数字签名，取代了 RSA 和 ECDSA 等易受攻击的标准。形式化验证涉及使用数学方法证明系统的实现与其规范相匹配，即使在汇编语言等复杂的底层代码中也能确保正确性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://billatnapier.medium.com/get-used-to-three-boring-acronyms-ml-kem-ml-dsa-and-slh-dsa-0156b6ab82c5">Get Used to Three Boring Acronyms: ML - KEM , ML - DSA and... | Medium</a></li>
<li><a href="https://www.wolfssl.com/ml-kem-versus-ml-dsa/">ML - KEM Versus ML - DSA - wolfSSL</a></li>
<li><a href="https://en.wikipedia.org/wiki/Isabelle_(proof_assistant)">Isabelle (proof assistant) - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Post-Quantum Cryptography</span> <span class="tag-badge">Formal Verification</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Apple Security</span></p>

---

<a id="item-3"></a>

## [微软内部部署 Anthropic 的 Claude Code](https://t.me/zaihuapd/41535) ⭐️ 9.0/10

微软正在向其 CoreAI 团队以及 Windows 和 Microsoft 365 等主要产品组推广 Anthropic 的 Claude Code。工程师被要求将其与 GitHub Copilot 进行对比，而非技术员工则被鼓励使用该工具进行原型设计。 这一举措意义重大，因为微软是 OpenAI 的主要投资者，却正在内部积极采用竞争对手的工具。这凸显了 AI 编程领域的激烈竞争，并表明微软正在对 Claude Code 进行基准测试，以改进或补充其自有的 GitHub Copilot。 该指令专门针对 CoreAI 团队以及负责 Windows、Microsoft 365 和 Outlook 体验的部门。员工必须提供反馈，直接对比 Claude Code 与 GitHub Copilot 的功能。

telegram · zaihuapd · May 23, 06:05

**背景**: Claude Code 是 Anthropic 开发的一款智能体编程工具，它在终端内运行，能够理解代码库并执行工程任务。微软的 CoreAI 是由 Jay Parikh 领导的一个新工程部门，旨在推动公司开发者工具和平台工具的 AI 创新。GitHub Copilot 是微软现有的 AI 代码补全工具，由 OpenAI 的模型提供支持。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://www.anthropic.com/news/claude-3-7-sonnet">Claude 3.7 Sonnet and Claude Code \ Anthropic</a></li>
<li><a href="https://www.linkedin.com/posts/businessinsider_microsoft-ai-orgchart-activity-7336807067569025024-tonJ">Microsoft 's CoreAI team led by Jay Parikh | Business... | LinkedIn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">AI Coding</span> <span class="tag-badge">Claude</span> <span class="tag-badge">GitHub Copilot</span></p>

---

<a id="item-4"></a>

## [AI 需求引发内存短缺，导致消费电子产品价格上涨](https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything) ⭐️ 8.0/10

AI 数据中心对 HBM 内存的大量需求正在转移有限的制造产能，导致消费电子产品（如智能手机和笔记本电脑）的价格在未来几年可能大幅上涨。 这一供应链瓶颈意味着消费者将面临更高的硬件成本，可能导致廉价智能手机等平价设备变得稀缺。这凸显了 AI 繁荣如何直接影响数据中心以外的更广泛的电子产品市场。 HBM 的晶圆产能分配预计将在 2026 年底从总量的 2% 上升到 20%。关键在于，生产 1GB HBM 所消耗的晶圆产能是生产 1GB DDR 或 LPDDR 的三倍以上。

rss · Simon Willison · May 22, 22:01

**背景**: 全球内存制造业仅由三家主要公司主导，其晶圆加工能力是有限的。HBM（高带宽内存）是 AI GPU 必需的高性能 3D 堆叠内存，而 DDR 和 LPDDR 则是用于计算机和智能手机的标准内存。由于生产 HBM 每千兆字节消耗的晶圆面积远多于标准内存，增加 HBM 产量会直接减少消费电子设备的可用供应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://www.rambus.com/blogs/hbm3-everything-you-need-to-know/">High Bandwidth Memory ( HBM ): Everything You Need to... - Rambus</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">AI</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Economics</span></p>

---

<a id="item-5"></a>

## [微软财报显示 OpenAI 单季度亏损 115 亿美元](https://t.me/zaihuapd/41537) ⭐️ 8.0/10

微软最新财报披露，OpenAI 单季度净亏损约 115 亿美元，这一数字是基于微软 27% 的持股比例及其 31 亿美元的净利润减少额计算得出的。该亏损规模几乎是 OpenAI 上半年 43 亿美元营收的三倍。 这一巨额亏损凸显了训练和运行先进 AI 模型所需的极高资本密集度，引发了人们对当前 AI 繁荣长期可持续性的质疑。这表明，即使营收增长迅速，领先的 AI 公司仍面临巨大的财务压力。 该计算基于微软的权益法投资，其中微软 31 亿美元的净利润减少额对应了 OpenAI 的亏损。微软已向这家 AI 初创公司投入了承诺的 130 亿美元中的 116 亿美元。

telegram · zaihuapd · May 23, 07:40

**背景**: 微软向 OpenAI 投入了巨资，将其技术集成到 Copilot 和 Bing 等产品中，并持有大量但非控股的股份。根据权益法会计准则，投资者需在自己的财务报表中记录被投资企业的损益份额，这解释了为何 OpenAI 的亏损会直接影响微软的收益。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">AI Economics</span> <span class="tag-badge">Financial Report</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

<a id="item-6"></a>

## [我国日均 Token 调用量两年激增超千倍达 140 万亿](https://t.me/zaihuapd/41542) ⭐️ 8.0/10

国家数据局披露，我国日均 Token 调用量在今年 3 月已突破 140 万亿。这一数字相比两年前增长了超过 1000 倍，显示出惊人的增长速度。 这一爆发式增长凸显了大语言模型在我国的快速普及和商业化进程。这标志着围绕 Token 这一可计量、可交易单元的 AI 新价值体系正在加速形成。 Token 是大模型处理信息的最小单元，具有可计量、可定价和可交易的特征。这一激增反映了数据要素市场化配置改革的推进，以及高质量数据供给体系的建立。

telegram · zaihuapd · May 23, 14:36

**背景**: 在人工智能领域，Token 是模型处理语言和数据的基本构建块，由将大段文本分解而成。随着 AI 智能体执行推理和规划等复杂任务，它们会消耗大量的 Token，这使得 Token 成为衡量 AI 行业计算工作和经济价值的关键指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/ai-tokens-explained/">What Are AI Tokens ? The Language and Currency... | NVIDIA Blog</a></li>
<li><a href="https://www.horivista.com/post/beyond-power-why-tokens-are-becoming-the-new-currency-of-ai">Beyond Power: Why Tokens Are Becoming the New Currency of AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI/ML</span> <span class="tag-badge">Industry Statistics</span> <span class="tag-badge">China AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Token Economy</span></p>

---