---
layout: default
title: "Horizon Summary: 2026-07-25 (EN)"
date: 2026-07-25
lang: en
---

> From 23 items, 2 important content pieces were selected

---

1. [Shanghai Ctrip Fined 10 Million RMB for Illegal Cross-Border Data Transfers](#item-1) ⭐️ 8.0/10
2. [Developer Releases iOS 27 usbliter8 Jailbreak PoC for iPhone 11 Pro](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Shanghai Ctrip Fined 10 Million RMB for Illegal Cross-Border Data Transfers](https://t.me/zaihuapd/42758) ⭐️ 8.0/10

On June 13, the Shanghai Cyberspace Administration announced that Shanghai Ctrip Business Co., Ltd. was fined 10 million RMB for failing to implement data export security assessment requirements and illegally transferring personal information overseas. The company has since cooperated with rectification efforts following the penalty. This is one of the largest fines levied against a major Chinese internet company for cross-border data transfer violations, signaling a significant escalation in regulatory enforcement. It serves as a stark warning to all companies handling personal data that compliance with China's data export security framework — including mandatory assessments under the PIPL and Data Security Law — will be strictly enforced. The penalty specifically cites two violations: failure to conduct required data export security assessments and illegal overseas transfer of personal information. The company was ordered to rectify within a specified period, and regulators indicated they will continue to intensify enforcement against similar violations across livelihood-sector internet companies.

telegram · zaihuapd · Jul 25, 02:24

**Background**: China's cross-border data transfer regulatory framework is built on three foundational laws: the Cybersecurity Law, the Data Security Law, and the Personal Information Protection Law (PIPL). Under the Measures for Data Export Security Assessment, companies must undergo a security assessment by the Cyberspace Administration before exporting certain categories of data overseas, including personal information of large volumes and important data. The assessment process involves a substantive review by the national Cyberspace Administration, and even after approval, companies must maintain ongoing compliance monitoring of their data exports.

<details><summary>References</summary>
<ul>
<li><a href="https://www.pwccn.com/zh/issues/cybersecurity-and-data-privacy/joint-white-paper-on-compliance-cross-border-data-transfers-may2024.pdf">合规及跨 境 数 据 传输联合白皮书2024</a></li>
<li><a href="https://m.aitntnews.com/newDetail.html?newId=21218">想成为下一个 Manus，先把这些 出 海 合 规 问题处理好</a></li>
<li><a href="https://www.400hl.com/help/419.htm">400hl.com/help/419.htm</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Data Security</span> <span class="tag-badge">Data Privacy</span> <span class="tag-badge">Regulatory Compliance</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Data Transfer</span></p>

---

<a id="item-2"></a>

## [Developer Releases iOS 27 usbliter8 Jailbreak PoC for iPhone 11 Pro](https://github.com/34306/usbliter8-fun) ⭐️ 8.0/10

GitHub developer 34306 published a full iOS 27 jailbreak proof-of-concept leveraging the usbliter8 SecureROM exploit, currently limited to the iPhone 11 Pro. The method requires a Raspberry Pi Pico 2 (RP2350) to force the device into PWN DFU mode, flash custom firmware, and apply kernel patches including bypasses for USB restricted mode, sandbox execution limits, and AMFI trust cache checks. This is the first publicly demonstrated SecureROM exploit achieving code execution on iOS 27, showcasing that even modern boot ROMs with PAC protections remain vulnerable to subtle hardware defects. It provides significant value to the iOS security research community by demonstrating novel kernel patching and hardware exploitation techniques, though its destructive nature limits practical adoption. The exploit builds upon wh1te4ever's usbliter8 project and specifically targets the Apple A13 SoC in the iPhone 11 Pro by exploiting a hardware flaw in the Synopsys DWC2 USB controller. The operation wipes all device data and breaks SEP, passwords, WiFi, baseband, Bluetooth (partially functional), and all Apple services, making it suitable only for dedicated test devices.

telegram · zaihuapd · Jul 25, 11:00

**Background**: SecureROM (Boot ROM) is read-only memory that executes immediately after CPU reset and loads the bootloader, making it a critical trust anchor in iOS devices; vulnerabilities here cannot be patched via software updates. usbliter8 is a tethered bootrom exploit discovered by security firm Paradigm Shift that affects Apple A12 and A13 SoCs by leveraging a hardware defect in the USB controller, enabling full code execution before the OS loads. PWN DFU mode is a modified Device Firmware Upgrade state where the boot ROM has been compromised, allowing researchers to inject custom firmware and ramdisks. Unlike the famous checkm8 exploit, usbliter8 works on newer chips that include PAC (Pointer Authentication Codes) protections.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/prdgmshift/usbliter8">GitHub - prdgmshift/ usbliter 8 : An A12/A13 SecureROM exploit · GitHub</a></li>
<li><a href="https://bbs.kanxue.com/thread-291757.htm">[原创] usbliter 8 --新型iPhone BootROM漏洞-IoT...</a></li>
<li><a href="https://linux.do/t/topic/2433719">出现了！checkm8以来首个 SecureROM 重大bug - 前沿快讯 - LINUX DO</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">iOS</span> <span class="tag-badge">越狱</span> <span class="tag-badge">网络安全</span> <span class="tag-badge">漏洞分析</span> <span class="tag-badge">概念验证</span></p>

---