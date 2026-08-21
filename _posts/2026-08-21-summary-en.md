---
layout: default
title: "Horizon Summary: 2026-08-21 (EN)"
date: 2026-08-21
lang: en
---

> From 40 items, 5 important content pieces were selected

---

1. [Anthropic Targets Record IPO to Match or Exceed SpaceX's $86.2 Billion Raise](#item-1) ⭐️ 9.0/10
2. [Accidental e164.arpa DNS Delegation Exposed Hundreds of Thousands of Phone Routing Queries](#item-2) ⭐️ 8.0/10
3. [US Citizen Faces Felony Charges for Deleting Phone Data at Border](#item-3) ⭐️ 8.0/10
4. [Patch Diffing CVE-2026-34621: From swConn Prototype Pollution to trustedFunction Chain in Adobe Reader](#item-4) ⭐️ 8.0/10
5. [Court Documents Reveal Anthropic's Project Panama: Millions of Books Destructively Scanned for Claude](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Anthropic Targets Record IPO to Match or Exceed SpaceX's $86.2 Billion Raise](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-expects-to-match-spacex-s-record-ipo-size-or-top-it?srnd=homepage-asia) ⭐️ 9.0/10

Anthropic plans to publicly file its IPO by the end of this month, aiming to raise an amount that matches or exceeds SpaceX's record IPO, which initially raised $75 billion and reached $86.2 billion after the overallotment (greenshoe) option was exercised. The company, valued at $965 billion after its May funding round with $65 billion in annualized revenue as of late July, has already confidentially filed with the SEC and is finalizing a revolving credit facility of over $10 billion. If Anthropic surpasses SpaceX's record, total US IPO proceeds in 2026 would hit an all-time high, as $160.6 billion has already been raised through August 19, within reach of the 2021 record of $195.2 billion. As one of the top AI labs going public ahead of OpenAI's expected 2027 listing, Anthropic's debut will test whether capital markets are willing to underwrite frontier AI economics at an unprecedented scale. Despite positive adjusted operating profit, Anthropic's net loss for 2025 approached $42 billion, driven by enormous compute costs for frontier models, including a multi-billion-dollar compute purchase agreement with SpaceX itself. Morgan Stanley, Goldman Sachs, and JPMorgan are leading the offering, and the company is considering issuing super-voting shares so that the CEO and co-founders, who hold only about 2% of equity, can retain control.

telegram · Marcoview666 · Aug 21, 01:04

**Background**: The 'greenshoe' (overallotment) option lets underwriters sell additional shares after an IPO, typically up to 15% more, to stabilize the stock price, which is why SpaceX's final raise of $86.2 billion exceeded its initial $75 billion. A confidential filing allows a company to submit its draft registration statement to the SEC privately, keeping sensitive financial details hidden from competitors until the regulator completes its review. A dual-class share structure gives certain shareholders (often founders) shares carrying multiple votes each, a common mechanism used by tech founders to retain control after going public.

<details><summary>References</summary>
<ul>
<li><a href="https://edu.sse.com.cn/best/article/mcontent/c/4962467.shtml">上交所投教 | 关于“绿鞋 机 制 ” | 上海证券交易所 | 投资者教育</a></li>
<li><a href="https://zombit.info/anthropic-confidentially-submits-draft-s-1-to-the-sec/">Anthropic 秘 密 遞交 IPO 申 請，完成審查即可上市！ OpenAI...</a></li>
<li><a href="https://money.udn.com/money/story/5599/9554209?from=edn_next_story">OpenAI 秘 密 申 請 IPO ！ AI 三強掀上市競賽 | 國際焦點 | 國際 | 經濟日報</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">IPO</span> <span class="tag-badge">AI-industry</span> <span class="tag-badge">financial-markets</span> <span class="tag-badge">funding</span></p>

---

<a id="item-2"></a>

## [Accidental e164.arpa DNS Delegation Exposed Hundreds of Thousands of Phone Routing Queries](https://lina.sh/blog/hijacking-e164-arpa) ⭐️ 8.0/10

A security researcher discovered she had accidentally received DNS delegation for a portion of the e164.arpa zone — the ENUM infrastructure that maps telephone numbers to internet resources — and subsequently logged hundreds of thousands of live phone call routing queries, including queries revealing calls to military bases. The writeup documents both how the delegation mishap occurred and what the captured traffic exposed about sensitive dialing activity. The incident exposes how a largely abandoned piece of internet infrastructure can silently leak sensitive telephony metadata — including military communications — because nobody is actively maintaining or monitoring it. It highlights the systemic risk in moribund protocols that still carry live production traffic, and shows how disclosure of such issues can be ignored until high-stakes victims like the military become involved. ENUM works by translating reversed E.164 numbers into DNS names (e.g. +1 555 42 42 becomes 2.4.2.4.5.5.5.1.e164.arpa) whose NAPTR records can yield SIP URIs for VoIP call routing, so the delegated zone's incoming queries effectively revealed which numbers systems were dialing. Notably, commenters point out ENUM is not fully dead — it survives in private, VPN-based deployments used for number-porting lookups — and the author reportedly received no bug bounty or reward for the discovery.

hackernews · gavide · Aug 21, 13:11 · [Discussion](https://news.ycombinator.com/item?id=49387570)

**Background**: ENUM (tElephone NUmber Mapping) is an ITU/IETF standard (RFC 6116) designed to bridge the traditional telephone system with the internet by expressing E.164 phone numbers as DNS domain names under the reserved e164.arpa zone. DNS delegation is the mechanism by which authority over a slice of the domain namespace is handed from one nameserver to another — in this case, a lapse caused part of e164.arpa to point at the researcher's own servers. The grand public ENUM vision never achieved widespread adoption and the infrastructure has decayed, yet as the captured traffic demonstrated, some systems still query it, meaning live dialing metadata continues to flow through it.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telephone_number_mapping">Telephone number mapping - Wikipedia</a></li>
<li><a href="https://www.dnsinfozone.com/dns-delegation-explained/">DNS delegation explained - DNS Info Zone</a></li>
<li><a href="https://en.wikipedia.org/wiki/E.164">E . 164 - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters emphasized that ENUM is not entirely dead — number-porting services still offer ENUM queries to private nameservers over VPNs — and one reader wished the author had set up a SIP server to see whether the queries translated into actual call terminations, citing the related TRIP protocol. Others reflected with a mix of amusement and unease on how such holes can persist unnoticed for years, observed that no serious organization engaged until military bases were implicated, and lamented that the author received no reward for the discovery.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">DNS</span> <span class="tag-badge">ENUM</span> <span class="tag-badge">telephony</span> <span class="tag-badge">privacy</span></p>

---

<a id="item-3"></a>

## [US Citizen Faces Felony Charges for Deleting Phone Data at Border](https://www.nytimes.com/2026/08/21/us/politics/samuel-tunick-deleted-phone-felony.html) ⭐️ 8.0/10

On August 21, 2026, the New York Times reported that Samuel Tunick, a US citizen, is facing felony charges for deleting data from his own phone during a border encounter with authorities. The prosecution reportedly treats the deletion as obstruction — destruction of evidence — under federal statutes such as 18 U.S.C. § 1519, rather than merely seizing the device. Criminalizing the deletion of one's own data marks a major escalation in the erosion of digital privacy rights, effectively compelling travelers to preserve and surrender their entire digital lives at the border. With CBP's updated 2026 policy expanding device search authority, the precedent could affect the millions of travelers who cross US borders each year with smartphones and laptops. Under 18 U.S.C. § 1519, destroying or concealing records with intent to impede a federal investigation carries up to 20 years in federal prison. Under the Fourth Amendment's border search exception, CBP officers may conduct warrantless searches of electronic devices; US citizens can legally refuse to unlock a device, though the device may be seized — meaning felony charges for deletion push the stakes far beyond the previously known consequences of refusal.

hackernews · floathub · Aug 21, 12:10 · [Discussion](https://news.ycombinator.com/item?id=49386895)

**Background**: The "border search exception" to the Fourth Amendment lets courts treat routine searches at international borders as reasonable without a warrant or individualized suspicion, while "nonroutine" searches require particularized suspicion. CBP policy permits officers to search phones and laptops at ports of entry; travelers can refuse to unlock devices, but refusal may lead to device seizure, and non-citizens may be denied entry. Litigation such as Alasaad and Congressional Research Service analyses have examined whether digital device searches deserve heightened suspicion requirements, and courts remain divided on the question. Against this backdrop, this case is novel because the act of deleting one's own data — previously at worst a reason for seizure — is now itself being prosecuted as a felony.

<details><summary>References</summary>
<ul>
<li><a href="https://www.congress.gov/crs_external_products/LSB/PDF/LSB10387/LSB10387.2.pdf">Do Warrantless Searches of Electronic Devices at the Border ...</a></li>
<li><a href="https://www.egattorneys.com/document-destruction">18 U . S . C . § 1519 : Federal Document Destruction Charges</a></li>
<li><a href="https://people.com/can-border-control-search-your-phone-understand-your-privacy-rights-when-entering-the-u-s-11703773">Can Border Control Search Your Phone? Understand Your Privacy...</a></li>

</ul>
</details>

**Discussion**: Commenters proposed practical workarounds: Zak wished smartphones could be imaged and restored as easily as PCs (wipe to a fresh OS before the border, keep the encrypted backup on a separate drive, hand over a clean device and consent to unlocking the phone), while trollbridge advised returning US citizens to carry burner phones loaded only with boarding passes and minimal media, prepared to share credentials. btbuildem offered a bleaker counterpoint, arguing that being legally right no longer matters and that travelers should treat the US as having entered an East Germany-style surveillance era, except with far more invasive technology.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">digital-privacy</span> <span class="tag-badge">civil-liberties</span> <span class="tag-badge">border-security</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">legal-policy</span></p>

---

<a id="item-4"></a>

## [Patch Diffing CVE-2026-34621: From swConn Prototype Pollution to trustedFunction Chain in Adobe Reader](https://forum.butian.net/share/4995) ⭐️ 8.0/10

A technical deep-dive published on the Butian Forum reverse engineers the patches for CVE-2026-34621 and fully reconstructs a three-primitive exploit chain in Adobe Reader, starting from swConn-based prototype pollution and ending in trustedFunction abuse. The research follows Adobe's emergency response — two security bulletins, APSB26-43 and APSB26-44, issued within three days in April 2026 — after active exploitation prompted CISA to add the CVE to its KEV catalog. The article exposes the complete mechanics of an actively exploited zero-day chain, giving defenders patch-diffing knowledge and detection insights for identifying similar weaponized PDFs. It also demonstrates how JavaScript-level flaws in Adobe Reader can escalate from prototype pollution into privileged-function abuse that escapes the Acrobat sandbox, directly informing hardening and mitigation strategies for one of the world's most widely deployed document readers. The chain leverages swConn, an internal Adobe Reader JavaScript API, to trigger prototype pollution, then abuses the privileged app.trustedFunction() mechanism to invoke normally sandboxed Acrobat APIs with elevated rights — related forensic analyses of in-the-wild samples show such exploits fingerprint victims and exfiltrate data to C2 servers via privileged wrappers like global.exec and global.get. Adobe's fix was delivered across two out-of-band bulletins (APSB26-43 and APSB26-44) released within three days of each other, underscoring the urgency of the active exploitation.

rss · 奇安信攻防社区 · Aug 21, 09:40

**Background**: Adobe Reader embeds a JavaScript engine that exposes rich document APIs, but certain "privileged" functions — such as file-system access or launching external processes — are restricted to trusted contexts, and app.trustedFunction() is the official mechanism for elevating a normal function to that trusted level. Prototype pollution is a class of JavaScript vulnerability in which an attacker corrupts an object's prototype, causing all inheriting objects, including security-relevant ones, to gain attacker-controlled properties or methods. The CISA Known Exploited Vulnerabilities (KEV) catalog lists flaws confirmed to be exploited in the wild and obligates US federal agencies to remediate them within a strict deadline. In this incident, malicious PDFs exploited CVE-2026-34621 to achieve prototype pollution via swConn, chained into trustedFunction abuse that effectively broke the Acrobat JavaScript sandbox.

<details><summary>References</summary>
<ul>
<li><a href="https://www.threatlocker.com/blog/adobe-acrobat-reader-cve-2026-34621-active-exploitation-via-prototype-pollution">Adobe Acrobat Reader CVE: Active exploitation via prototype pollution</a></li>
<li><a href="https://github.com/sanchit-saini/acrobat-reader-escape">GitHub - sanchit-saini/acrobat-reader-escape: A proof-of ...</a></li>
<li><a href="https://gist.github.com/N3mes1s/9e55e8d781235ee256d5b3f6720222dd/6b044a79bb7f7f9b4ca0c230df1ed0fd1772fac4">Adobe Reader Zero-Day PDF Exploit - Full Forensic Analysis ... Using trusted functions - acrobatusers.com Adobe Reader Zero-Day PDF Exploit - Full Forensic Analysis ... Using Trusted Functions - pdfscripting.com</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Adobe Reader</span> <span class="tag-badge">exploit development</span> <span class="tag-badge">reverse engineering</span></p>

---

<a id="item-5"></a>

## [Court Documents Reveal Anthropic's Project Panama: Millions of Books Destructively Scanned for Claude](https://t.me/zaihuapd/43305) ⭐️ 8.0/10

Court documents reported by The Washington Post reveal that Anthropic launched a covert 2024 initiative called "Project Panama," spending tens of millions of dollars to buy millions of physical books, slice off their spines for high-speed scanning, and destroy them to build training data for Claude, with internal files stressing the company did not want the outside world to know. Separately, in the Bartz v. Anthropic authors' lawsuit, a judge ruled that training on scanned books could qualify as fair use, but Anthropic's downloads from shadow libraries like LibGen infringed copyright, leading to a roughly $1.5 billion payment in August 2025. This is a landmark copyright ruling that draws a clearer legal boundary for AI training data: transformative training itself may qualify as fair use, but acquiring and retaining pirated copies constitutes independent infringement. The decision will shape how AI companies across the industry source training corpora and sets an influential precedent for pending copyright suits against other major AI developers. The judge described the transformation of copyrighted books into AI outputs as "spectacularly transformative," granting fair use on the training itself, while holding that Anthropic's retention of a central library of roughly seven million pirated books infringed authors' rights regardless of training. Notably, the destructively scanned books were legally purchased copies, which is what distinguished that practice from the infringing LibGen downloads.

telegram · zaihuapd · Aug 21, 04:52

**Background**: LibGen (Library Genesis) is a "shadow library" that provides free, unauthorized file-sharing access to scholarly articles and books, making it a common but legally risky source of AI training data. The case, Bartz v. Anthropic, was heard in the US Northern District of California, where authors sued over both pirated downloads and the scanning of purchased books. "Fair use" is a US legal doctrine that permits limited use of copyrighted material without permission, depending on factors such as how transformative the new use is. Anthropic's roughly $1.5 billion payment in August 2025 covered the infringing acquisition and retention of pirated books, while the fair-use finding on training itself was preserved.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ibtimes.co.uk/anthropic-secret-book-scanning-operation-1811155">Inside Project Panama , Anthropic 's Secret Effort To... | IBTimes UK</a></li>
<li><a href="https://distillation.technology/learn/is-ai-training-fair-use">Is AI Training Fair Use ? What Bartz v. Anthropic Actually</a></li>
<li><a href="https://en.wikipedia.org/wiki/Library_Genesis">Library Genesis - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI训练数据</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">版权诉讼</span> <span class="tag-badge">Claude</span> <span class="tag-badge">合理使用</span></p>

---