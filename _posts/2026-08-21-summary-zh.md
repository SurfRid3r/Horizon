---
layout: default
title: "Horizon Summary: 2026-08-21 (ZH)"
date: 2026-08-21
lang: zh
---

> 从 40 条内容中筛选出 5 条重要资讯。

---

1. [Anthropic 计划月底提交 IPO，目标追平或超越 SpaceX 862 亿美元纪录](#item-1) ⭐️ 9.0/10
2. [意外的 e164.arpa DNS 授权暴露数十万条电话路由查询记录](#item-2) ⭐️ 8.0/10
3. [美国公民因在边境删除手机数据面临重罪指控](#item-3) ⭐️ 8.0/10
4. [补丁逆向 CVE-2026-34621：从 swConn 原型污染到 trustedFunction 的 Adobe Reader 利用链复现](#item-4) ⭐️ 8.0/10
5. [法庭文件披露：Anthropic 秘密“巴拿马计划”破坏性扫描数百万册书籍训练 Claude](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic 计划月底提交 IPO，目标追平或超越 SpaceX 862 亿美元纪录](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-expects-to-match-spacex-s-record-ipo-size-or-top-it?srnd=homepage-asia) ⭐️ 9.0/10

Anthropic 计划最晚本月底提交 IPO 公开申报，目标募资规模追平甚至超过 SpaceX 的历史纪录 IPO——后者初始募资 750 亿美元，行使超额配售权（绿鞋机制）后最终达到 862 亿美元。这家公司 5 月融资后估值达 9650 亿美元，7 月底年化营收 650 亿美元，目前已向美国证监会秘密申报，并即将敲定超 100 亿美元的循环信贷。 若 Anthropic 超越 SpaceX 的纪录，2026 年美股 IPO 总融资额将刷新历史新高——截至 8 月 19 日已募资 1606 亿美元，距 2021 年 1952 亿美元的历史高点仅一步之遥。作为领先 OpenAI（预计 2027 年上市）登陆资本市场的顶级 AI 实验室，Anthropic 的上市将检验市场是否愿意以前所未有的规模为前沿 AI 的商业模式定价。 尽管调整后经营利润为正，Anthropic 2025 年净亏损仍接近 420 亿美元，主因是前沿模型的巨额算力成本，其中包括与 SpaceX 本身签订的数十亿美元算力采购协议。摩根士丹利、高盛和摩根大通牵头此次发行，公司还在考虑发行超级投票权股份，使持股仅约 2% 的 CEO 及联合创始人保留更高的公司控制权。

telegram · Marcoview666 · 8月21日 01:04

**背景**: '绿鞋'（超额配售选择权）允许承销商在 IPO 后额外发行一定数量的股票（通常最多 15%），用于稳定股价，这正是 SpaceX 最终募资 862 亿美元超过初始 750 亿美元的原因。秘密申报允许公司先向美国证监会（SEC）私下提交招股书草案，在监管机构完成审查前对竞争对手保密敏感财务细节。双层股权结构则赋予特定股东（通常是创始人）每股更多投票权，是科技公司创始人在上市后保持控制权的常见手段。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://edu.sse.com.cn/best/article/mcontent/c/4962467.shtml">上交所投教 | 关于“绿鞋 机 制 ” | 上海证券交易所 | 投资者教育</a></li>
<li><a href="https://zombit.info/anthropic-confidentially-submits-draft-s-1-to-the-sec/">Anthropic 秘 密 遞交 IPO 申 請，完成審查即可上市！ OpenAI...</a></li>
<li><a href="https://money.udn.com/money/story/5599/9554209?from=edn_next_story">OpenAI 秘 密 申 請 IPO ！ AI 三強掀上市競賽 | 國際焦點 | 國際 | 經濟日報</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">IPO</span> <span class="tag-badge">AI-industry</span> <span class="tag-badge">financial-markets</span> <span class="tag-badge">funding</span></p>

---

<a id="item-2"></a>

## [意外的 e164.arpa DNS 授权暴露数十万条电话路由查询记录](https://lina.sh/blog/hijacking-e164-arpa) ⭐️ 8.0/10

一位安全研究人员发现自己意外获得了 e164.arpa 区域一部分的 DNS 授权——这是将电话号码映射到互联网资源的 ENUM 基础设施——随后记录了数十万条真实的电话路由查询，其中包括暴露打到军事基地通话的查询。这篇文章既记录了授权失误是如何发生的，也记录了捕获的流量暴露了哪些敏感的拨号活动。 该事件暴露了一个基本被废弃的互联网基础设施如何悄无声息地泄露敏感的电话元数据（包括军事通信），原因在于没有人积极维护或监控它。它凸显了仍在承载真实生产流量的垂死协议中存在的系统性风险，也表明这类问题在被披露后往往遭到忽视，直到军方等高风险当事方牵涉其中。 ENUM 的原理是将反转的 E.164 号码转换为 DNS 域名（例如+1 555 42 42 变为 2.4.2.4.5.5.5.1.e164.arpa），其 NAPTR 记录可生成用于 VoIP 呼叫路由的 SIP URI，因此被授权区域流入的查询实际上暴露了各系统正在拨打的号码。值得注意的是，评论者指出 ENUM 并未完全消亡——它以私有的、基于 VPN 的部署形式存活，用于号码携转查询——而据报道作者并未因这一发现获得任何漏洞赏金或奖励。

hackernews · gavide · 8月21日 13:11 · [社区讨论](https://news.ycombinator.com/item?id=49387570)

**背景**: ENUM（电话号码映射）是 ITU/IETF 标准（RFC 6116），旨在通过将 E.164 电话号码表示为保留的 e164.arpa 区域下的 DNS 域名，把传统电话系统与互联网桥接起来。DNS 授权是将域名空间中某一部分的管理权从一个域名服务器移交给另一个域名服务器的机制——在本案例中，一次疏漏导致 e164.arpa 的一部分指向了研究人员自己的服务器。宏伟的公共 ENUM 愿景从未获得广泛采用，该基础设施已然衰败，但正如捕获的流量所示，一些系统仍在查询它，这意味着真实的拨号元数据仍在流经其中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telephone_number_mapping">Telephone number mapping - Wikipedia</a></li>
<li><a href="https://www.dnsinfozone.com/dns-delegation-explained/">DNS delegation explained - DNS Info Zone</a></li>
<li><a href="https://en.wikipedia.org/wiki/E.164">E . 164 - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者强调 ENUM 并未完全消亡——号码携转服务仍通过 VPN 向私有域名服务器提供 ENUM 查询——还有读者希望作者当时搭建 SIP 服务器，以验证这些查询是否转化为实际的呼叫接续，并提到了相关的 TRIP 协议。其他人则带着既好笑又不安的情绪反思这类漏洞如何多年无人察觉，指出直到军事基地牵涉其中才有组织认真对待，并惋惜作者未因这一发现获得任何奖励。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">DNS</span> <span class="tag-badge">ENUM</span> <span class="tag-badge">telephony</span> <span class="tag-badge">privacy</span></p>

---

<a id="item-3"></a>

## [美国公民因在边境删除手机数据面临重罪指控](https://www.nytimes.com/2026/08/21/us/politics/samuel-tunick-deleted-phone-felony.html) ⭐️ 8.0/10

据《纽约时报》2026 年 8 月 21 日报道，美国公民 Samuel Tunick 因在边境接受检查时删除自己手机中的数据而面临重罪指控。据报道，检方依据《美国法典》第 18 编第 1519 条等联邦妨碍司法条款，将该删除行为定性为销毁证据，而不仅仅是扣押设备。 将删除个人数据的行为定为犯罪，标志着数字隐私权利侵蚀的重大升级，实际上等于强制旅行者在边境保存并交出自己的整个数字生活。随着 CBP 在 2026 年更新并扩大设备搜查权限，此案开创的先例可能影响每年携带手机和笔记本跨越美国边境的数百万旅客。 根据《美国法典》第 18 编第 1519 条，以妨碍联邦调查为目的销毁或隐匿记录，最高可判处 20 年联邦监禁。依据宪法第四修正案的"边境搜查例外"，CBP 官员可以无证搜查电子设备；美国公民虽可合法拒绝解锁，但设备可能被扣押——而对删除数据本身提起重罪指控，将后果的严重程度推到了远超以往认知的水平。

hackernews · floathub · 8月21日 12:10 · [社区讨论](https://news.ycombinator.com/item?id=49386895)

**背景**: 宪法第四修正案的"边境搜查例外"使法院长期认定，在国际边境进行的"常规"搜查无需搜查令或个别怀疑即属合理，而"非常规"搜查则需要具体的违法嫌疑。CBP 的政策允许官员在入境口岸搜查手机和笔记本电脑；旅客可以拒绝解锁，但设备可能被扣押，非公民甚至可能被拒绝入境。Alasaad 诉讼及国会研究处的分析曾探讨电子设备搜查是否应适用更高的怀疑标准，法院对此仍存在分歧。在此背景下，本案的新颖之处在于：删除个人数据这一行为——以往最坏的后果不过是设备被扣押——如今本身就被以重罪起诉。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.congress.gov/crs_external_products/LSB/PDF/LSB10387/LSB10387.2.pdf">Do Warrantless Searches of Electronic Devices at the Border ...</a></li>
<li><a href="https://www.egattorneys.com/document-destruction">18 U . S . C . § 1519 : Federal Document Destruction Charges</a></li>
<li><a href="https://people.com/can-border-control-search-your-phone-understand-your-privacy-rights-when-entering-the-u-s-11703773">Can Border Control Search Your Phone? Understand Your Privacy...</a></li>

</ul>
</details>

**社区讨论**: 评论者提出了务实的应对方案：Zak 希望智能手机能像 PC 一样轻松地做镜像和恢复——过境前把手机刷成全新系统、加密备份存放在另一块硬盘上，交出一台干净设备并同意解锁手机；trollbridge 则建议返美的美国公民携带"一次性手机"，只装载登机牌和最少的媒体内容，并做好交出全部凭据的准备。btbuildem 提出了更悲观的反对观点：合法与否已经无关紧要，旅行者应认清美国已进入东德式监控时代的现实，只不过监控技术的侵入性要强大得多。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">digital-privacy</span> <span class="tag-badge">civil-liberties</span> <span class="tag-badge">border-security</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">legal-policy</span></p>

---

<a id="item-4"></a>

## [补丁逆向 CVE-2026-34621：从 swConn 原型污染到 trustedFunction 的 Adobe Reader 利用链复现](https://forum.butian.net/share/4995) ⭐️ 8.0/10

补天论坛发布的这篇技术文章逆向了 CVE-2026-34621 的补丁，并完整复现了 Adobe Reader 中的三原语利用链：起点是基于 swConn 的原型污染，终点是对 trustedFunction 的滥用。该研究紧随 Adobe 的紧急响应——2026 年 4 月三天内连发 APSB26-43 与 APSB26-44 两个安全公告——此前该漏洞的在野利用促使 CISA 将其列入 KEV 目录。 该文章完整揭示了在野利用的零日漏洞链机制，为防御者提供了补丁比对知识和检测思路，有助于识别类似的武器化 PDF。它还展示了 Adobe Reader 中 JavaScript 层面的缺陷如何从原型污染升级为特权函数滥用并突破 Acrobat 沙箱，对这款全球部署最广泛的文档阅读器的加固与缓解策略具有直接参考价值。 该利用链借助 Adobe Reader 内部 JavaScript API swConn 触发原型污染，随后滥用特权的 app.trustedFunction() 机制，以提升的权限调用本应受沙箱限制的 Acrobat API——对在野样本的相关取证分析显示，此类漏洞被用于采集受害者系统指纹，并通过 global.exec、global.get 等特权包装函数与 C2 服务器通信并外传数据。Adobe 的修复通过三天内连发的两个带外公告（APSB26-43 与 APSB26-44）交付，凸显了在野利用的紧迫性。

rss · 奇安信攻防社区 · 8月21日 09:40

**背景**: Adobe Reader 内嵌 JavaScript 引擎并提供丰富的文档 API，但部分“特权”功能（如文件系统访问、调用外部进程）仅允许在受信任上下文中调用，而 app.trustedFunction() 正是将普通函数提升为受信任函数的官方机制。原型污染是一类 JavaScript 漏洞，攻击者可篡改对象的原型，使所有继承该原型的对象（包括与安全相关的对象）获得攻击者可控的属性或方法。CISA 的已知被利用漏洞（KEV）目录收录经确认在野利用的漏洞，并要求美国联邦机构在严格限期内完成修复。在本事件中，恶意 PDF 利用 CVE-2026-34621 通过 swConn 实现原型污染，进而链式滥用 trustedFunction，实质上突破了 Acrobat 的 JavaScript 沙箱。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.threatlocker.com/blog/adobe-acrobat-reader-cve-2026-34621-active-exploitation-via-prototype-pollution">Adobe Acrobat Reader CVE: Active exploitation via prototype pollution</a></li>
<li><a href="https://github.com/sanchit-saini/acrobat-reader-escape">GitHub - sanchit-saini/acrobat-reader-escape: A proof-of ...</a></li>
<li><a href="https://gist.github.com/N3mes1s/9e55e8d781235ee256d5b3f6720222dd/6b044a79bb7f7f9b4ca0c230df1ed0fd1772fac4">Adobe Reader Zero-Day PDF Exploit - Full Forensic Analysis ... Using trusted functions - acrobatusers.com Adobe Reader Zero-Day PDF Exploit - Full Forensic Analysis ... Using Trusted Functions - pdfscripting.com</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Adobe Reader</span> <span class="tag-badge">exploit development</span> <span class="tag-badge">reverse engineering</span></p>

---

<a id="item-5"></a>

## [法庭文件披露：Anthropic 秘密“巴拿马计划”破坏性扫描数百万册书籍训练 Claude](https://t.me/zaihuapd/43305) ⭐️ 8.0/10

据《华盛顿邮报》报道的法庭文件，Anthropic 于 2024 年启动代号“Project Panama”（巴拿马计划）的秘密行动，投入数千万美元购买数百万册实体书，切掉书脊进行“破坏性扫描”并销毁原书，以此构建 Claude 模型的训练数据，且内部文件强调“不想让外界知道”。此外，在 Bartz 诉 Anthropic 的作者集体诉讼中，法官认定扫描训练可构成合理使用，但从 LibGen 等影子图书馆下载盗版数据的行为构成侵权，Anthropic 于 2025 年 8 月为此支付约 15 亿美元。 这是 AI 版权领域的里程碑式判决，为 AI 训练数据划定了更清晰的法律边界：具有转换性的训练本身可能构成合理使用，但获取并保留盗版副本的行为独立构成侵权。该裁决将深刻影响整个行业获取训练语料的方式，并为针对其他 AI 巨头的未决版权诉讼树立重要先例。 法官将受版权保护的书籍转化为 AI 输出的过程描述为“极具转换性”（spectacularly transformative），就训练本身认定构成合理使用；但同时认定 Anthropic 保留约 700 万册盗版书籍的中央书库独立侵犯作者权利，与训练问题无关。值得注意的是，被破坏性扫描的书籍是合法购买的副本，这正是该做法与侵权 的 LibGen 下载行为的关键区别。

telegram · zaihuapd · 8月21日 04:52

**背景**: LibGen（Library Genesis）是一个“影子图书馆”，未经出版商授权即提供学术文章和书籍的免费共享下载，因此成为 AI 训练语料的常见来源，但法律风险极高。本案（Bartz 诉 Anthropic）在美国加州北区联邦地区法院审理，作者们指控 Anthropic 既从盗版渠道下载数据，又大规模扫描购买的实体书，侵犯其版权。“合理使用”是美国的一项法律原则，允许在满足转换性等条件时未经许可有限使用受版权保护的作品。Anthropic 于 2025 年 8 月支付的约 15 亿美元针对的是侵权获取和保留盗版书籍的行为，而关于训练本身的合理使用认定得以保留。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ibtimes.co.uk/anthropic-secret-book-scanning-operation-1811155">Inside Project Panama , Anthropic 's Secret Effort To... | IBTimes UK</a></li>
<li><a href="https://distillation.technology/learn/is-ai-training-fair-use">Is AI Training Fair Use ? What Bartz v. Anthropic Actually</a></li>
<li><a href="https://en.wikipedia.org/wiki/Library_Genesis">Library Genesis - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI训练数据</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">版权诉讼</span> <span class="tag-badge">Claude</span> <span class="tag-badge">合理使用</span></p>

---