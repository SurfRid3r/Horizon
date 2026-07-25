---
layout: default
title: "Horizon Summary: 2026-07-25 (ZH)"
date: 2026-07-25
lang: zh
---

> 从 23 条内容中筛选出 2 条重要资讯。

---

1. [上海携程因数据出境违规被罚 1000 万元](#item-1) ⭐️ 8.0/10
2. [开发者发布 iOS 27 usbliter8 越狱方案，目前仅支持 iPhone 11 Pro](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [上海携程因数据出境违规被罚 1000 万元](https://t.me/zaihuapd/42758) ⭐️ 8.0/10

6 月 13 日，上海网信办公示，上海携程商务有限公司因未落实数据出境安全评估要求、违法出境个人信息等行为，被罚款 1000 万元，并责令限期改正。企业受罚后已配合整改。 这是中国对大型互联网公司数据出境违规行为开出的最大罚单之一，标志着监管执法力度的显著升级。这向所有处理个人数据的企业发出了严厉警告：中国的数据出境安全框架，包括《个人信息保护法》和《数据安全法》下的强制评估要求，将得到严格执行。 处罚具体涉及两项违规：未落实数据出境安全评估要求和违法出境个人信息。公司被责令限期改正，监管机构表示将持续加大对民生领域互联网企业类似违法行为的执法力度。

telegram · zaihuapd · 7月25日 02:24

**背景**: 中国跨境数据传输的监管框架建立在三部基础法律之上：《网络安全法》、《数据安全法》和《个人信息保护法》。根据《数据出境安全评估办法》，企业在向境外提供特定类别的数据前，必须通过网信部门的安全评估，包括大批量个人信息和重要数据。评估流程由国家网信办进行实质审查并出具结论，即使通过评估后，企业仍需对数据出境进行持续的合规监管。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.pwccn.com/zh/issues/cybersecurity-and-data-privacy/joint-white-paper-on-compliance-cross-border-data-transfers-may2024.pdf">合规及跨 境 数 据 传输联合白皮书2024</a></li>
<li><a href="https://m.aitntnews.com/newDetail.html?newId=21218">想成为下一个 Manus，先把这些 出 海 合 规 问题处理好</a></li>
<li><a href="https://www.400hl.com/help/419.htm">400hl.com/help/419.htm</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Data Security</span> <span class="tag-badge">Data Privacy</span> <span class="tag-badge">Regulatory Compliance</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Data Transfer</span></p>

---

<a id="item-2"></a>

## [开发者发布 iOS 27 usbliter8 越狱方案，目前仅支持 iPhone 11 Pro](https://github.com/34306/usbliter8-fun) ⭐️ 8.0/10

GitHub 开发者 34306 公开了利用 usbliter8 SecureROM 漏洞为 iOS 27 越狱的完整概念验证方案，目前仅支持 iPhone 11 Pro。该方法需要借助搭载 RP2350 芯片的 Raspberry Pi Pico 2，将设备置入 PWN DFU 模式后刷入定制固件，并新增了绕过 USB 限制模式、沙盒执行限制和 AMFI 信任缓存检查的内核补丁。 这是首个公开演示的在 iOS 27 上实现代码执行的 SecureROM 漏洞利用方案，表明即使是带有 PAC 保护的现代启动 ROM 仍可能因细微的硬件缺陷而被攻破。该方案通过展示新颖的内核补丁和硬件漏洞利用技术，对 iOS 安全研究领域具有重要价值，但其高度破坏性限制了实际应用。 该漏洞利用方案基于 wh1te4ever 的 usbliter8 项目，专门针对 iPhone 11 Pro 中的 Apple A13 SoC，利用了 Synopsys DWC2 USB 控制器的硬件缺陷。该操作会抹除设备全部数据，并破坏 SEP、密码、WiFi、基带、蓝牙（仅部分可用）及全部 Apple 服务，仅适合在专用测试设备上使用。

telegram · zaihuapd · 7月25日 11:00

**背景**: SecureROM（启动 ROM）是在 CPU 复位后立即执行并加载引导程序的只读存储器，是 iOS 设备中关键的信任锚点；此处的漏洞无法通过软件更新修复。usbliter8 是由安全公司 Paradigm Shift 发现的系留式启动 ROM 漏洞，影响 Apple A12 和 A13 SoC，通过利用 USB 控制器的硬件缺陷实现操作系统加载前的完整代码执行。PWN DFU 模式是一种被篡改的设备固件升级状态，启动 ROM 已被攻破，允许研究者注入定制固件和内存磁盘。与著名的 checkm8 漏洞不同，usbliter8 可以在包含 PAC（指针认证码）保护的新款芯片上工作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/prdgmshift/usbliter8">GitHub - prdgmshift/ usbliter 8 : An A12/A13 SecureROM exploit · GitHub</a></li>
<li><a href="https://bbs.kanxue.com/thread-291757.htm">[原创] usbliter 8 --新型iPhone BootROM漏洞-IoT...</a></li>
<li><a href="https://linux.do/t/topic/2433719">出现了！checkm8以来首个 SecureROM 重大bug - 前沿快讯 - LINUX DO</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">iOS</span> <span class="tag-badge">越狱</span> <span class="tag-badge">网络安全</span> <span class="tag-badge">漏洞分析</span> <span class="tag-badge">概念验证</span></p>

---