---
layout: default
title: "Horizon Summary: 2026-08-31 (ZH)"
date: 2026-08-31
lang: zh
---

> 从 16 条内容中筛选出 1 条重要资讯。

---

1. [Spring Ring 攻击滥用微软 Teams 语音钓鱼入侵企业域控制器](#item-1) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Spring Ring 攻击滥用微软 Teams 语音钓鱼入侵企业域控制器](https://unit42.paloaltonetworks.com/spring-ring-voice-phishing-campaigns/) ⭐️ 8.0/10

Unit 42（Palo Alto Networks）披露了"Spring Ring"攻击活动，该活动自 2026 年 1 月持续至 4 月，攻击者滥用外部 Microsoft Teams 账号冒充内部 IT 支持人员。该行动针对多个行业至少 10 家公司的 150 多名员工，最终部署恶意软件并入侵企业域控制器。 Spring Ring 标志着攻击从被动的"点击即收割"式钓鱼演变为 Teams 内部的实时语音交互攻击，而 Teams 是被数亿企业用户隐式信任的协作工具。由于域控制器处于企业 Active Directory 的核心位置，一旦失陷，攻击者便可获得对整个 Windows 企业的管理控制权，进而操纵账户、部署恶意软件并大规模窃取数据。 通过将语音钓鱼直接融入 Teams 工作流，攻击者可以在通话中根据受害者的实时回应灵活调整攻击策略，使社会工程攻击的适应性大大增强。该活动专门滥用了 Teams 允许外部账号联系企业员工的机制，利用员工对熟悉企业通信渠道的信任，而非传统的电子邮件诱饵。

rss · Unit 42 · 8月31日 10:00

**背景**: 语音钓鱼（vishing）是一种社会工程攻击技术，攻击者通过语音通话诱骗受害者泄露凭据或执行危害安全的操作。Microsoft Teams 是被广泛部署的企业协作平台，其默认的外部访问设置可能允许外部用户联系企业员工——攻击者正是利用这一点伪装成合法的内部 IT 人员。域控制器是管理 Active Directory 的服务器，而 Active Directory 是 Windows 企业环境中集中的身份认证与授权系统，常被称为企业身份基础设施的"心脏"，因此域控制器一旦失陷后果极其严重。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unit42.paloaltonetworks.com/spring-ring-voice-phishing-campaigns/">Spring Ring : An Inside Look at Voice Phishing Campaigns in...</a></li>
<li><a href="https://www.hendryadrian.com/spring-ring-an-inside-look-at-voice-phishing-campaigns-in-microsoft-teams/">Spring Ring : An Inside Look At Voice Phishing Campaigns In...</a></li>
<li><a href="https://maxprotect.io/blogs/domain-controller-security-best-practices/">Domain Controller Security: Why Attackers Target AD</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">phishing</span> <span class="tag-badge">microsoft-teams</span> <span class="tag-badge">social-engineering</span></p>

---