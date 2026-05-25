---
layout: default
title: "Horizon Summary: 2026-05-24 (EN)"
date: 2026-05-24
lang: en
---

> From 23 items, 5 important content pieces were selected

---

1. [Memory costs now dominate AI chip component expenses](#item-1) ⭐️ 8.0/10
2. [Microsoft open-sources earliest DOS source code recovered from paper](#item-2) ⭐️ 8.0/10
3. [16-byte audio-visual demo 'Wake up! 16b' released](#item-3) ⭐️ 8.0/10
4. [Armin Ronacher advocates for human-written issue reports over AI](#item-4) ⭐️ 8.0/10
5. [Malicious Telegram 12.6.5 Found on APKPure with Spyware Backdoor](#item-5) ⭐️ 8.0/10

---

## [Memory costs now dominate AI chip component expenses](https://epoch.ai/data-insights/ai-chip-component-cost-shares) {: #"item-1" } ⭐️ 8.0/10

Recent analysis reveals that memory expenses now constitute nearly two-thirds of the total component costs for AI chips. This shift highlights a significant change in the economic structure of AI hardware manufacturing. This cost dominance impacts the entire industry roadmap and supply chain, potentially slowing down AI deployment due to high prices. It emphasizes the critical role of memory manufacturers and suggests potential for future cost reductions if supply meets demand. The cost increase is driven by the demand for High Bandwidth Memory (HBM), a 3D-stacked memory architecture essential for feeding data to thousands of GPU cores in modern accelerators. Experts suggest that hardware costs could drop significantly once DRAM supply catches up with the current demand spike.

hackernews · intelkishan · May 24, 16:31 · [Discussion](https://news.ycombinator.com/item?id=48258684)

**Background**: AI accelerators require specialized memory architectures to handle massive data throughput efficiently, unlike general-purpose chips. High Bandwidth Memory (HBM) is used to solve bandwidth bottlenecks by stacking memory dies vertically. As AI models grow in complexity, the demand for faster and more abundant memory has surged, increasing its share of the total bill of materials.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://medium.com/@loomy.sjyoo/bandwidth-is-not-coordination-why-hbm-still-isnt-a-brain-87371964be99">Bandwidth Is Not Coordination: Why HBM Still Isn’t a Brain | Medium</a></li>
<li><a href="https://www.ibm.com/think/topics/ai-accelerator">What is an AI accelerator? - IBM</a></li>

</ul>
</details>

**Discussion**: Commenters discussed the high barriers to entry for new memory manufacturers due to extensive IP patent wars and licensing costs. There was speculation about potential cost reductions as supply stabilizes and debates on whether hyperscalers should vertically integrate by building their own fabs.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Economics</span> <span class="tag-badge">Memory</span> <span class="tag-badge">Supply Chain</span></p>

---

## [Microsoft open-sources earliest DOS source code recovered from paper](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/) {: #"item-2" } ⭐️ 8.0/10

Microsoft has released the source code for the earliest known version of DOS (86-DOS), which was painstakingly recovered from paper printouts by historians. This code, originally developed by Tim Paterson of Seattle Computer Products, is now available for public viewing. This release preserves a critical piece of computing history, allowing developers and historians to study the foundation of the IBM PC era. It highlights the technical simplicity of early systems and the origins of Microsoft's dominance in the software industry. The recovery process was difficult because modern OCR software struggled with the decades-old printouts, requiring manual transcription by the "DOS Disassembly Group". The release also includes the BASIC interpreter, which was Microsoft's primary product focus before operating systems.

hackernews · DamnInteresting · May 24, 01:21 · [Discussion](https://news.ycombinator.com/item?id=48253386)

**Background**: 86-DOS, internally known as QDOS (Quick and Dirty Operating System), was developed by Seattle Computer Products for Intel 8086-based computers. It was designed to be similar to CP/M, making it easy to port existing software, and was later licensed and purchased by Microsoft to become MS-DOS.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/86-DOS">86-DOS</a></li>

</ul>
</details>

**Discussion**: Commenters expressed gratitude to Microsoft for preserving history and noted the significance of the accompanying BASIC interpreter. There was also a sense of awe regarding the era's technical efficiency, where a few thousand lines of assembly code could launch a company.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">History</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">DOS</span> <span class="tag-badge">Systems Programming</span></p>

---

## [16-byte audio-visual demo 'Wake up! 16b' released](https://hellmood.111mb.de/wake_up_16b_writeup.html) {: #"item-3" } ⭐️ 8.0/10

A technical writeup was published detailing the creation of 'Wake up! 16b,' a functional audio-visual demo compressed into just 16 bytes of machine code. This release pushes the boundaries of size-coding by successfully incorporating both sound and graphics within a footprint smaller than previous 32-byte limits. This achievement is considered a masterpiece of extreme optimization that inspires the demoscene community to explore the limits of low-level programming. It demonstrates how creative assembly coding can produce complex multimedia experiences from almost non-existent resources. The demo relies on precise assembly instructions to manipulate hardware registers directly, generating audio and visuals without external assets. It targets specific architectures where such minimal code execution is possible, showcasing a deep understanding of the underlying hardware.

hackernews · MaximilianEmel · May 24, 00:30 · [Discussion](https://news.ycombinator.com/item?id=48253060)

**Background**: The demoscene is a computer art subculture focused on producing demos, which are self-contained programs that generate audiovisual presentations to show off programming, visual art, and musical skills. Size-coding is a specific discipline within this scene where developers compete to create the most impressive effects within extremely strict file size limits. These programs are measured by their total size in opcode bytes and are often presented as executable binaries.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Demoscene">Demoscene</a></li>
<li><a href="http://www.sizecoding.org/wiki/Main_Page">SizeCoding</a></li>

</ul>
</details>

**Discussion**: Community members expressed high appreciation for the technical feat, noting that it surpasses previous 32-byte demos which lacked sound. Some users initially confused the title with a 16-billion parameter language model, while others shared links to related mathematical visualizations and size-coding projects.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">demoscene</span> <span class="tag-badge">assembly</span> <span class="tag-badge">optimization</span> <span class="tag-badge">size-coding</span> <span class="tag-badge">graphics</span></p>

---

## [Armin Ronacher advocates for human-written issue reports over AI](https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything) {: #"item-4" } ⭐️ 8.0/10

Armin Ronacher criticized the trend of users submitting AI-generated issue reports, arguing that they often obscure real problems with confident inaccuracies and fake minimal reproducible examples. He explicitly requested that issue reports be condensed to simple, factual human observations of what command was run, what was expected, what happened instead, and the exact error logs. This perspective highlights a significant degradation in the quality of open-source communication channels caused by the indiscriminate use of LLMs, which wastes maintainers' time on debugging AI hallucinations. It serves as a crucial guideline for the developer community on maintaining efficiency and accuracy in bug reporting workflows. Ronacher noted that AI-generated reports often include incorrect root cause analysis, suggested implementation strategies based on wrong analogies, and long lists of irrelevant error classes. He argues that stripping away the AI's interpretation to reveal only the raw human observations is the most effective way to help maintainers diagnose and fix bugs.

rss · Simon Willison · May 24, 18:46

**Background**: In software development, particularly within open-source projects, a 'Minimal Reproducible Example' (MRE) is a small, self-contained piece of code that demonstrates a bug, allowing maintainers to verify and fix the issue efficiently. Recently, users have begun utilizing Large Language Models (LLMs) to draft these reports, but the AI often adds unnecessary complexity or hallucinates details that do not match the user's actual experience.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Minimal_reproducible_example">Minimal reproducible example</a></li>
<li><a href="https://stackoverflow.com/help/minimal-reproducible-example">How to create a Minimal, Reproducible Example - Help Center</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">AI Impact</span> <span class="tag-badge">Software Maintenance</span> <span class="tag-badge">Debugging</span> <span class="tag-badge">Developer Experience</span></p>

---

## [Malicious Telegram 12.6.5 Found on APKPure with Spyware Backdoor](https://x.com/EricParker/status/2058411298195661221) {: #"item-5" } ⭐️ 8.0/10

A trojanized version of Telegram 12.6.5 distributed on APKPure contains a spyware backdoor named DataCollector that steals sensitive user data. The malicious app exfiltrates chats, contacts, and location to a specific C2 server after encryption. This supply chain attack targets users of a popular messaging app via a widely used third-party store, putting their privacy and security at severe risk. It highlights the dangers of downloading apps from unofficial sources where verification processes are weaker than official channels. The malware is injected as a 3000+ line DEX file named classes3.dex and uses AES-GCM encryption to send data to IP 38.190.225.166. It compromises extensive data including full chat history, photo albums, documents, GPS location, and SIM card information.

telegram · zaihuapd · May 24, 11:38

**Background**: Android apps can be repackaged by attackers who decompile the original APK, inject malicious code, and re-sign it with a new key. This process allows the distribution of trojanized applications through third-party stores that may not verify the original signature. Once installed, the malware communicates with a Command and Control (C2) server to receive instructions and upload stolen data.

<details><summary>References</summary>
<ul>
<li><a href="https://mas.owasp.org/MASTG/techniques/android/MASTG-TECH-0039.html">MASTG-TECH-0039: Repackaging & Re - Signing - OWASP Mobile...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Botnet">Botnet - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Android</span> <span class="tag-badge">Telegram</span> <span class="tag-badge">Supply Chain</span></p>

---