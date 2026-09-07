---
layout: default
title: "Horizon Summary: 2026-09-07 (EN)"
date: 2026-09-07
lang: en
---

> From 36 items, 4 important content pieces were selected

---

1. [Jensen Huang Declares GPT-6 Astra Marks the Arrival of AGI](#item-1) ⭐️ 9.0/10
2. [216 Million LG Smart TVs Caught Logging Audio with Screen Off](#item-2) ⭐️ 8.0/10
3. [Source-Code Analysis of Linux Kernel CVE-2026-31694 FUSE Directory Page Cache Overflow](#item-3) ⭐️ 8.0/10
4. [China's Supreme Court Clarifies Legal Liability for AI Face-Swapping and Algorithmic Price Discrimination](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Jensen Huang Declares GPT-6 Astra Marks the Arrival of AGI](https://mp.weixin.qq.com/s/PJp4LEoiZPYqz3Mclqr7xg) ⭐️ 9.0/10

NVIDIA CEO Jensen Huang stated that AGI has officially arrived with OpenAI's release of GPT-6 Astra, revealing that the model was trained on roughly 100,000 Grace Blackwell NVLink72 chips and congratulating the OpenAI team. OpenAI calls Astra a "generational leap" achieving state-of-the-art performance in computer operation, software engineering, cybersecurity, and scientific research, even as CEO Sam Altman dismisses AGI as a vaguely defined, irrelevant marketing term. This is a rare instance of a major chipmaker CEO explicitly declaring AGI achieved, paired with unusual disclosure of training infrastructure scale (~100,000 NVLink72 chips), signaling how quickly frontier compute clusters are growing. The open disagreement between Huang and Altman over whether AGI is even a meaningful concept exposes the industry's lack of consensus on defining such milestones, which affects policy, AI safety discussions, and public expectations. Grace Blackwell NVLink72 uses NVLink switches to interconnect 72 Blackwell GPUs into one coherent unit with up to 260 TB/s of aggregate GPU bandwidth, so ~100,000 such chips represent one of the largest disclosed training builds ever. OpenAI Chief Scientist Jakub Pachocki has acknowledged that monitoring model behavior becomes harder as capabilities increase—an important research priority—and the GPT-6 Astra release actually spans 6 models with different intelligence, performance, and pricing tiers.

telegram · zaihuapd · Sep 7, 04:54

**Background**: AGI (Artificial General Intelligence) refers to hypothetical systems that can understand, learn, and perform any intellectual task a human can, but there is no universally accepted technical benchmark for it—the Turing test was a 1950 thought experiment never designed as a practical measure, and even the standard academic definition remains open to interpretation. Grace Blackwell NVLink72 is NVIDIA's rack-scale architecture that links 72 Blackwell GPUs via NVLink into what Huang has called "the largest single chip in human history," purpose-built for training and inference on trillion-parameter models. Jensen Huang is NVIDIA's founder and CEO, and since NVIDIA GPUs dominate AI training infrastructure, his AGI declaration carries industry weight while also having an obvious commercial motivation.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nvidia.cn/data-center/nvlink/">NVLink 和 NVLink Switch：卓越的 HPC 数据中心平台 | NVIDIA</a></li>
<li><a href="https://www.icviews.cn/news/571/2">Grace Blackwell NVLink 72 是人类历史上最大的单 芯 片</a></li>
<li><a href="https://tw.stock.yahoo.com/news/openai-推-gpt-6-astra-002938483.html">OpenAI 推 GPT - 6 Astra 總裁稱 AI 能 力 已達人類水平 | Yahoo News</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AGI</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">GPT-6</span> <span class="tag-badge">NVIDIA</span> <span class="tag-badge">AI Hardware</span></p>

---

<a id="item-2"></a>

## [216 Million LG Smart TVs Caught Logging Audio with Screen Off](https://www.youtube.com/watch?v=6IFVTcM28KA) ⭐️ 8.0/10

A video exposé revealed that LG Smart TVs—potentially up to 216 million devices—continue logging audio even when the screen is off, and actively snoop on other devices connected to the local network. The findings, reported by Notebookcheck, triggered a highly engaged Hacker News discussion (569 comments, 215 points) centered on privacy rights and possible wiretap law violations. This affects up to 216 million devices in homes worldwide, where TVs can capture conversations of household members and guests who never consented, potentially violating wiretap laws such as the Electronic Communications Privacy Act. It also highlights how consumer electronics have quietly become pervasive surveillance devices, with manufacturers attempting to shift legal liability onto users through onerous contract terms. LG's terms of service place the burden on owners to obtain consent from any third parties whose voices may be captured and to notify household members and guests of possible eavesdropping—effectively making users contractually responsible for the TV's surveillance. Some owners have resorted to extreme countermeasures, such as opening the TV's back panel and physically unplugging the WiFi/Bluetooth module, since declining the terms disables all network functions.

hackernews · treve · Sep 7, 00:22 · [Discussion](https://news.ycombinator.com/item?id=49592375)

**Background**: Smart TVs commonly employ Automatic Content Recognition (ACR), a technology that uses audio or visual signals to identify what is playing on the screen—essentially monitoring viewing habits for advertising and measurement purposes. The local-network snooping typically relies on discovery protocols like SSDP (Simple Service Discovery Protocol), part of the UPnP standard, which lets devices find other equipment such as media servers, printers, and smart-home gadgets on a home network. In the U.S., the Electronic Communications Privacy Act (ECPA) and state wiretap laws make it illegal to intentionally intercept oral and electronic communications, which is why capturing audio of non-consenting guests could create legal exposure for both LG and TV owners.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol">Simple Service Discovery Protocol - Wikipedia</a></li>
<li><a href="https://bja.ojp.gov/program/it/privacy-civil-liberties/authorities/statutes/1285">Electronic Communications Privacy Act of 1986 ( ECPA ) | Bureau of...</a></li>

</ul>
</details>

**Discussion**: Commenters expressed alarm at LG's contract terms requiring owners to obtain consent from third parties whose voices may be captured, with some arguing this likely conflicts with all-party-consent wiretap statutes since guests and household members never agreed to be recorded. Several users shared personal countermeasures—keeping network functions disabled for years or physically unplugging the WiFi/Bluetooth chip—with one noting they were once ridiculed by friends for such paranoia but now feel vindicated. Broader sentiment reflected frustration that refusing to buy such devices or stripping out offending components seems to be the only effective response left to privacy-conscious consumers.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">smart-tv</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">consumer-electronics</span> <span class="tag-badge">security</span></p>

---

<a id="item-3"></a>

## [Source-Code Analysis of Linux Kernel CVE-2026-31694 FUSE Directory Page Cache Overflow](https://forum.butian.net/share/5026) ⭐️ 8.0/10

A detailed source-code-level analysis of CVE-2026-31694 has been published on Qi'anxin's Butian forum, covering a high-severity local privilege escalation vulnerability in the Linux kernel caused by a page cache overflow in FUSE directory handling. The write-up walks through the kernel code paths involved to explain the bug's root cause and exploitation logic. Linux kernel LPE flaws affect virtually every Linux deployment—servers, desktops, and containers—allowing an unprivileged local user to gain root and fully compromise the host. FUSE is particularly sensitive because it is specifically designed to let non-privileged users mount their own filesystems, meaning the vulnerable code is reachable in many common configurations. The analysis traces the flaw to how the kernel manages the page cache during FUSE directory reads, where the overflow can corrupt kernel memory and be leveraged for privilege escalation. Since this article is the primary public disclosure for the issue, readers should consult the original write-up for specifics such as affected kernel versions, triggering conditions, and patch status.

rss · 奇安信攻防社区 · Sep 7, 10:04

**Background**: FUSE (Filesystem in Userspace) is a kernel interface that lets non-privileged users implement their own filesystems in userspace; it consists of the fuse.ko kernel module, the libfuse userspace library, and the fusermount utility, with secure non-privileged mounts being one of its most important features. The page cache is the core mechanism Linux uses to speed up file I/O by keeping file contents in RAM, with the buffer cache unified into the page cache since 1999. A local privilege escalation (LPE) vulnerability allows an attacker who already has a low-privilege account on a machine to elevate to root and fully control it, and memory-corruption bugs such as overflows in kernel subsystems are a classic route to achieving this.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Filesystem_in_Userspace">Filesystem in Userspace - Wikipedia</a></li>
<li><a href="https://www.kernel.org/doc/html/next/filesystems/fuse.html">FUSE — The Linux Kernel documentation</a></li>
<li><a href="https://baike.baidu.com/item/本地提权/7775328">本地提权_百度百科</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">linux-kernel</span> <span class="tag-badge">vulnerability-analysis</span> <span class="tag-badge">privilege-escalation</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-4"></a>

## [China's Supreme Court Clarifies Legal Liability for AI Face-Swapping and Algorithmic Price Discrimination](https://www.cnr.cn/news/20260907/t20260907_527806795.shtml) ⭐️ 8.0/10

On September 7, China's Supreme People's Court issued a judicial interpretation on AI-related dispute cases, organized into 5 parts and 24 articles covering AI face-swapping, algorithmic price discrimination, AI-powered impersonation for endorsements, autonomous driving, and intellectual property. It specifies that creating identifiable faces or voices without consent may constitute personality rights infringement, that algorithmic price discrimination harming users' rights must carry liability, and that punitive damages may be supported when AI impersonation induces consumption. This is one of the most comprehensive judicial frameworks for civil AI disputes in one of the world's largest AI markets, giving courts concrete liability rules for deepfake, pricing algorithm, and privacy cases that previously lacked clear adjudication standards. It directly affects AI companies, platform operators, and consumer protection enforcement, significantly raising compliance stakes for anyone deploying generative AI services in China. The interpretation also regulates AI-enabled "doxxing" (网络开盒) and "human flesh search" (人肉搜索) activities that violate natural persons' privacy rights, and addresses liability questions involving autonomous driving and intellectual property. As a judicial interpretation issued by the Supreme People's Court, it carries binding legal effect that courts nationwide must follow when applying the law in specific cases.

telegram · zaihuapd · Sep 7, 09:32

**Background**: A judicial interpretation (司法解释) in China is issued by the Supreme People's Court to clarify how existing laws apply to concrete cases, and it has binding judicial effect that all courts must follow when adjudicating. "Algorithmic price discrimination" (算法杀熟, literally "using algorithms to exploit familiar customers") refers to platforms profiling users with big data and then charging loyal or higher-spending customers higher prices for the same product or service — in essence, abusing algorithms to unfairly extract consumer value. "网络开盒" (network doxxing) is essentially "human flesh search plus cyber violence": illegally digging up and publishing a person's private information online to incite harassment, a growing form of cyberbullying in China. Building on China's existing regulatory stack — such as the Personal Information Protection Law and rules on algorithmic recommendation and deep synthesis — this interpretation translates those principles into courtroom-usable liability rules.

<details><summary>References</summary>
<ul>
<li><a href="http://paper.people.com.cn/rmlt/pc/content/202509/16/content_30112899.html">规制“大数据杀熟”：算法向上向善的治理进路 - 人民日报</a></li>
<li><a href="https://xinwen.bjd.com.cn/content/s6669b8d8e4b035c6ca5eaf35.html">比“ 人 肉 搜 索 ”更恶劣！ 焦点访谈起底新式 网 暴“ 开 盒 挂 人 ”</a></li>
<li><a href="https://m.gaodun.com/wenda/chuji/102575.html">司法解释是什么-高顿精选回答</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI regulation</span> <span class="tag-badge">legal framework</span> <span class="tag-badge">deepfakes</span> <span class="tag-badge">algorithmic discrimination</span> <span class="tag-badge">China tech policy</span></p>

---