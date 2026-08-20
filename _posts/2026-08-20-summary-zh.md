---
layout: default
title: "Horizon Summary: 2026-08-20 (ZH)"
date: 2026-08-20
lang: zh
---

> 从 31 条内容中筛选出 3 条重要资讯。

---

1. [AliExpress 静默 WebAudio 指纹识别破坏蓝牙多点连接](#item-1) ⭐️ 8.0/10
2. [恶意 arrayref crate 在构建时执行恶意载荷，Rust 官方发布安全回应](#item-2) ⭐️ 8.0/10
3. [Check Point 研究将 Defender 签名修复驱动 BTR.sys 武器化为内核操作原语](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [AliExpress 静默 WebAudio 指纹识别破坏蓝牙多点连接](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html) ⭐️ 8.0/10

laserphile.com 上的一篇博文记录了 AliExpress 通过 WebAudio API 播放无声音频来对访客进行浏览器指纹识别，而这种静默播放会让蓝牙多点连接设备把浏览器标签页误认为活跃的音频源，从而干扰耳机、助听器和车载系统的音频路由。该文引发了强烈共鸣，获得 748 分和 248 条评论，多位用户独立证实了类似的设备受干扰现象。 这一事件表明，隐蔽的指纹追踪不仅是抽象的隐私问题，还会对日常音频硬件（包括助听器这类医疗设备）造成用户可直接感知的实际破坏。该案例也为“将音频播放设为需授权的权限”提供了有力论据，并引发了关于平台应如何问责指纹追踪类应用和网站的讨论。 AudioContext 指纹识别无需权限提示且人耳听不到，因此浏览器的标签页扬声器图标通常不会标记它——要检测这种行为，浏览器需要对音频流进行真正的内容分析。用户还反映，即使 AliExpress 的 iOS 应用只是在后台运行，干扰仍会持续；而强制关闭或卸载该应用后，车载音频和助听器的异常会立即消失。

hackernews · emctech · 8月20日 10:08 · [社区讨论](https://news.ycombinator.com/item?id=49372583)

**背景**: WebAudio（AudioContext）指纹识别是一种追踪技术：网站播放一段人耳听不见的声音，并测量设备的音频硬件、驱动程序和浏览器音频栈对它的处理结果，其中的微小差异会形成独特的签名，无需 Cookie 或权限提示即可跨网站识别用户。蓝牙多点（multipoint）是一种让耳机或助听器同时保持与两台源设备连接的功能，并根据哪台设备具有音频优先级自动切换。当网页保持一条静默音频流打开时，多点切换逻辑可能将其误判为正在播放的音频，从而把音频设备从用户真正在听的内容上抢走。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://plisio.net/cybersecurity/browser-fingerprint">What Is a Browser Fingerprint and Can You Stop It?</a></li>
<li><a href="https://bscan.info/blog/audioFingerprinting">Audio Fingerprinting: The Sound of Tracking | bscan.info</a></li>
<li><a href="https://www.soundguys.com/bluetooth-multipoint-explained-28601/">What is Bluetooth multipoint? - SoundGuys</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍谴责这种行为，多位用户独立证实访问许多网站（尤其是 AliExpress）会干扰 Phonak/Kirkland 助听器、改变其环境噪声放大行为，甚至让车载音频系统误以为收到了语音指令；强制关闭或卸载该应用后问题随即消失。其他人则讨论补救措施：为什么浏览器的标签页扬声器图标不会标记静默音频、音频播放是否应像麦克风访问一样改为权限授权制，以及苹果是否应按照其封闭平台保护用户的承诺将此类应用从 App Store 下架。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">browser-fingerprinting</span> <span class="tag-badge">WebAudio</span> <span class="tag-badge">Bluetooth</span> <span class="tag-badge">security</span></p>

---

<a id="item-2"></a>

## [恶意 arrayref crate 在构建时执行恶意载荷，Rust 官方发布安全回应](https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/) ⭐️ 8.0/10

广受欢迎的 Rust crate arrayref 的一个恶意版本被发布到 crates.io，其构建脚本（build.rs）在编译时执行恶意代码，下载并运行远程载荷。Rust 官方随后发布了安全回应，最初报告被记录在 RustSec 公告数据库的 issue #3161 中。 这是一次针对 Rust 生态中广泛使用的 crate 的活跃供应链攻击，具体证明了任何依赖项的构建脚本都是能在开发者机器上执行的任意代码载体。此次事件以及随之而来的对 crates.io 处置方式的批评，对构建脚本限制和注册表安全事件响应政策具有重要启示意义。 在 Windows 上，恶意构建脚本会下载攻击者的远程载荷，将其写入 %TEMP%\rust-setup.ps1，并通过 wscript.exe 下的 VBScript 启动器运行——源码中的注释解释说，通过 WScript 的 ShellExecute 可以逃出 Cargo 的 job object，避免子进程让 cargo build 一直等待。事后，该恶意版本从 crates.io 上直接消失，既没有 yank 标记也没有发布安全公告，加剧了对其安全事件处置不力的批评。

hackernews · abhisek · 8月20日 13:23 · [社区讨论](https://news.ycombinator.com/item?id=49374269)

**背景**: Rust 的软件包被称为 crate，通过 crates.io 这个中央注册表分发，它是整个生态的包管理枢纽。Rust 的构建工具 Cargo 允许每个 crate 附带一个 build.rs 构建脚本，该脚本会在编译前于开发者机器上执行任意代码——通常用于生成代码或查找系统库——这使得任何依赖项的构建脚本都可能成为恶意软件的入侵渠道。由 Rust 安全代码工作组维护的 RustSec 公告数据库收录了针对 crates.io 上发布 crate 的安全公告，是社区追踪被入侵软件包的主要渠道。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://doc.rust-lang.org/cargo/reference/build-script-examples.html">Build Script Examples - The Cargo Book</a></li>
<li><a href="https://github.com/rustsec/advisory-db">GitHub - rustsec/advisory-db: Security advisory database for Rust crates published through crates.io · GitHub</a></li>
<li><a href="https://github.com/rust-lang/crates.io">GitHub - rust-lang/crates.io: The Rust package registry · GitHub</a></li>

</ul>
</details>

**社区讨论**: 评论者深入分析了恶意软件的规避技术，尤其是为逃出 Cargo 的 job object 而精心设计的 VBScript 启动器，使载荷不会阻塞构建过程。另一些评论者尖锐批评了 GitHub 和 crates.io 的事件响应，指出恶意版本无声无息地消失，既无 yank 标记也无安全公告，说明注册表对此类事件准备不足。还有一条讨论线索聚焦于依赖文化本身，有评论者主张采用'开箱即用'（batteries included）的标准库，以大幅减少开发者所需的第三方依赖数量。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">rust</span> <span class="tag-badge">supply-chain-security</span> <span class="tag-badge">malware</span> <span class="tag-badge">crates-io</span> <span class="tag-badge">package-management</span></p>

---

<a id="item-3"></a>

## [Check Point 研究将 Defender 签名修复驱动 BTR.sys 武器化为内核操作原语](https://research.checkpoint.com/2026/btr-reforged-weaponizing-defenders-remediation-driver-as-a-kernel-operation-primitive/) ⭐️ 8.0/10

Check Point Research 研究员 Jiří Vinopal 发布了首个完整分析，证明 Microsoft Defender 的签名修复驱动 BTR.sys（Boot Time Removal Tool）暴露了一个未公开的协议，攻击者可借其在 Ring 0 执行任意文件和注册表操作，且全程无需利用任何漏洞或进行内存破坏。该研究在拉斯维加斯的 Black Hat USA 2026 / DEF CON 34 上公布，并配套在 GitHub 上发布了攻击性概念验证工具 BTR_CLI。 该技术滥用的是信任而非漏洞，直接挑战了“微软签名的安全驱动即安全”这一根本假设——Windows 代码完整性机制和许多 EDR 产品都隐式信任此类驱动。它为攻击者提供了提权后以最高权限篡改文件、注册表乃至安全软件的原语，对 EDR 绕过手法和 Windows 内核安全加固都有重大影响。 整个攻击过程不涉及任何内存破坏：关键门槛在于驱动的调用方认证逻辑，PoC 工具 BTR_CLI 通过逆向并满足该认证，即可按需调用 Ring 0 的文件与注册表原语。值得注意的是，BTR.sys 并非首次被审视——与其配置错误相关的 CVE-2021-24092（一个存在 12 年的 Windows Defender 提权漏洞）直到 2021 年 4 月才被修复，凸显了该驱动设计中反复出现的薄弱环节。

rss · Check Point Research · 8月20日 13:07

**背景**: BTR.sys 是 Microsoft Defender 的“启动时移除工具”（Boot Time Removal Tool），一个内核模式驱动，用于在启动早期、用户态组件加载之前删除与恶意软件关联的文件和注册表项。“Ring 0”指 x86/x64 CPU 上最高特权的执行层级，Windows 内核和驱动运行于此，可不受限制地访问内存、硬件和系统资源。微软签名的驱动通常被 Windows 代码完整性机制和许多 EDR 产品视为可信二进制文件，因此滥用一个合法签名驱动的正常功能（而非利用漏洞）能够绕过这些安全控制。这类手法与 BYOVD（自带易受攻击驱动）攻击相关但不相同，因为此处被滥用的是 Defender 自身的合法能力，唯一的防线只是薄弱的调用方校验。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Dump-GUY/BTR_CLI">GitHub - Dump-GUY/BTR_CLI: Offensive PoC tool for BTR.sys - Microsoft Defender's Boot Time Removal Tool. Supporting material for the BTR Reforged research (Black Hat USA 2026 / DEF CON 34, Las Vegas). · GitHub</a></li>
<li><a href="https://socprime.com/blog/microsoft-addressed-a-12-years-old-privilege-escalation-vulnerability-in-windows-defender/">Microsoft Addressed a 12-Years-Old Privilege Escalation Vulnerability in Windows Defender | SOC Prime</a></li>
<li><a href="https://en.wikipedia.org/wiki/Protection_ring">Protection ring - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security-research</span> <span class="tag-badge">kernel-security</span> <span class="tag-badge">windows</span> <span class="tag-badge">microsoft-defender</span> <span class="tag-badge">threat-intelligence</span></p>

---