---
layout: default
title: "Horizon Summary: 2026-05-25 (EN)"
date: 2026-05-25
lang: en
---

> From 28 items, 4 important content pieces were selected

---

1. [Constraint Decay: LLM Agents Fail in Backend Code Generation](#item-1) ⭐️ 8.0/10
2. [Armin Ronacher Criticizes AI-Generated Issue Reports](#item-2) ⭐️ 8.0/10
3. [PapersWithCode Adds Multi-Metric Support and External Paper Submissions](#item-3) ⭐️ 8.0/10
4. [Telegram 12.6.5 on APKPure contains spyware backdoor](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Constraint Decay: LLM Agents Fail in Backend Code Generation](https://arxiv.org/abs/2605.06445) ⭐️ 8.0/10

A new research paper identifies 'constraint decay,' where LLM coding agents struggle to adhere to architectural rules as they accumulate during multi-file backend code generation. The study found that assertion pass rates drop by approximately 30 percentage points as architectural, ORM, and framework constraints pile up. This finding highlights a critical limitation for using AI agents in production environments, distinguishing them from their success in rapid prototyping. It suggests that while LLMs are powerful for unconstrained tasks, their reliability decreases significantly when required to maintain strict structural consistency across complex systems. The performance drop is particularly concentrated in convention-heavy frameworks, indicating that strict stylistic and structural rules challenge current models. Researchers noted that they did not fully test frontier models due to cost constraints, leaving room for investigation into whether more advanced models exhibit the same fragility.

hackernews · wek · May 24, 12:55 · [Discussion](https://news.ycombinator.com/item?id=48256912)

**Background**: LLM coding agents are AI systems designed to write and modify code, often used to automate software development tasks. Backend code generation involves creating server-side logic, databases, and APIs, which typically requires following specific architectural patterns to ensure the system is maintainable and scalable.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2605.06445">Constraint decay : The Fragility of LLM Agents in Backend Code...</a></li>
<li><a href="https://agentpatterns.ai/verification/constraint-decay-backend-agents/">Constraint Decay in Backend Code Generation - AgentPatterns.ai</a></li>

</ul>
</details>

**Discussion**: Commenters generally validated the findings based on personal experience, noting that managing constraints becomes difficult in complex projects, though some suggested providing constraints incrementally rather than all at once. Discussions also critiqued the study for omitting frontier models and drew parallels to 'calcification,' where code patterns become rigid over time.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">Code Generation</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">AI Research</span> <span class="tag-badge">System Design</span></p>

---

<a id="item-2"></a>

## [Armin Ronacher Criticizes AI-Generated Issue Reports](https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything) ⭐️ 8.0/10

Armin Ronacher criticized the trend of users submitting AI-generated issue reports, arguing they obscure real problems with confident inaccuracies. He advocates for a strict, human-observed format focusing on commands, expectations, actual results, and logs to improve debugging efficiency. This highlights a growing friction point in open-source maintenance where AI-generated noise wastes developer time and hinders problem-solving. It emphasizes the need for human-centric communication to ensure technical issues are resolved accurately. Ronacher specifically noted that AI often produces fake minimal reproducible examples and incorrect root cause analyses. He proposes a four-point structure for issue reports to strip away AI-induced hallucinations and focus on raw observation.

rss · Simon Willison · May 24, 18:46

**Background**: Armin Ronacher is a prominent open-source developer known for creating the Flask web framework and Jinja2 templating engine. Issue reports are the primary method users and developers employ to track bugs or request features in software projects, often hosted on platforms like GitHub.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">AI Impact</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">Developer Experience</span> <span class="tag-badge">Community</span></p>

---

<a id="item-3"></a>

## [PapersWithCode Adds Multi-Metric Support and External Paper Submissions](https://www.reddit.com/r/MachineLearning/comments/1tmawv5/paperswithcode_new_features_week_1_p/) ⭐️ 8.0/10

Hugging Face's revived PapersWithCode platform now supports multiple metrics per benchmark and allows submissions of papers from sources beyond arXiv. These updates were announced one week after the site's relaunch to track state-of-the-art AI performance. Multi-metric support allows researchers to evaluate models more holistically by considering factors like speed alongside accuracy, addressing a critical need for practical deployment. The revival of this platform restores a centralized resource for tracking AI progress, which is essential for the research community. The Open ASR Leaderboard now displays both Word Error Rate (WER) and Inverse Real-Time Factor (RTFx) to measure accuracy and speed, respectively. Users can submit papers from GitHub repos, blog posts, or BioRxiv, and the system will automatically enrich them with relevant tags and metadata.

reddit · r/MachineLearning · NielsRogge · May 24, 12:31

**Background**: PapersWithCode is a repository linking academic papers to their code implementations and benchmark results, helping track State-of-the-Art (SOTA) performance in AI. It was previously shut down but has been revived by Hugging Face to continue serving the machine learning community. Metrics like Word Error Rate (WER) measure transcription accuracy, while Inverse Real-Time Factor (RTFx) measures processing speed relative to audio duration.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/learn/audio-course/chapter5/evaluation">Evaluation metrics for ASR · Hugging Face</a></li>
<li><a href="https://en.wikipedia.org/wiki/Word_error_rate">Word error rate - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The community responded positively to the updates, praising the quick progress and requesting features like a paper claiming mechanism to edit metadata. Users also inquired about the platform's advantages over Hugging Face's daily papers section and noted the absence of certain domains like 'Graph'.

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">PapersWithCode</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">SOTA Tracking</span></p>

---

<a id="item-4"></a>

## [Telegram 12.6.5 on APKPure contains spyware backdoor](https://x.com/EricParker/status/2058411298195661221) ⭐️ 8.0/10

A repackaged version of Telegram 12.6.5 found on APKPure contains a spyware backdoor named DataCollector. This malicious code steals extensive user data, including chats, location, and files, and exfiltrates them to a specific C2 server. This supply chain attack poses a severe privacy risk to users who downloaded the app from a third-party source instead of official stores. It highlights the dangers of APK repackaging, where legitimate apps are modified to include malware without users' knowledge. The malware is injected via classes3.dex and consists of over 3,000 lines of code, encrypting stolen data using AES-GCM before transmission. The compromised data includes chat history, contacts, photos, documents, GPS location, and SIM card details sent to IP 38.190.225.166.

telegram · zaihuapd · May 24, 11:38

**Background**: APK repackaging is a process where attackers decompile a legitimate Android application, modify its code to include malicious payloads, and then re-sign it to appear authentic. A Command and Control (C2) server is a centralized computer used by attackers to issue commands to infected devices and receive stolen data. AES-GCM is an authenticated encryption algorithm that ensures data confidentiality and integrity, often used by malware to hide the contents of exfiltrated data.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/tum-i4/Repackman">tum-i4/Repackman: A Tool for the Automatic Repackaging of Android ...</a></li>
<li><a href="https://otx.alienvault.com/pulse/67af17c16b6d67934e379485">JavaScript to Command-and-Control ( C 2 ) Server Malware - LevelBlue...</a></li>
<li><a href="https://medium.com/@thomas_40553/how-to-secure-encrypt-and-decrypt-data-within-the-browser-with-aes-gcm-and-pbkdf2-057b839c96b6">The Ultimate Developer’s Guide to AES - GCM : Encrypt and... | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Supply Chain Attack</span> <span class="tag-badge">Mobile Security</span> <span class="tag-badge">Telegram</span></p>

---