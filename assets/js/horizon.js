(function () {
  'use strict';

  // ====== SCORE BADGES ======
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  // ====== SEMANTIC ELEMENTS ======
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();
      if (/^(rss|reddit|github|hackernews|hn|telegram|ossinsight)\s*·/i.test(text)) {
        p.classList.add('source-line');
      }
    });
  }

  // ====== SIDEBAR TOC ======
  function buildSidebarTOC() {
    var mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    var originalTOC = mainContent.querySelector('ol');
    if (!originalTOC) return;

    var tocLinks = originalTOC.querySelectorAll('a[href^="#item-"]');
    if (tocLinks.length < 3) return;

    document.body.classList.add('hz-has-toc');

    // Collect TOC items
    var tocItems = [];
    tocLinks.forEach(function (link) {
      var text = link.textContent;
      var href = link.getAttribute('href');
      var scoreMatch = text.match(/(\d+(?:\.\d+)?)$/);
      var title = text.replace(/\s*\d+(?:\.\d+)?$/, '').trim();
      var tier = 'low';
      var scoreVal = null;
      if (scoreMatch) {
        scoreVal = scoreMatch[1];
        var s = parseFloat(scoreVal);
        if (s >= 9) tier = 'high';
        else if (s >= 7) tier = 'good';
        else if (s >= 5) tier = 'mid';
      }
      tocItems.push({ href: href, title: title, score: scoreVal, tier: tier });
    });

    // ---- Build sidebar + layout FIRST (before modifying children) ----
    var layout = document.createElement('div');
    layout.className = 'hz-layout';

    var sidebar = document.createElement('aside');
    sidebar.className = 'hz-sidebar';
    sidebar.id = 'hz-sidebar';

    var sidebarTitle = document.createElement('div');
    sidebarTitle.className = 'hz-sidebar-title';
    sidebarTitle.textContent = '📑 目录';
    sidebar.appendChild(sidebarTitle);

    var tocList = document.createElement('ul');
    tocList.className = 'hz-toc-list';

    tocItems.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = item.href;
      if (item.score !== null) {
        var scoreSpan = document.createElement('span');
        scoreSpan.className = 'hz-toc-score score-badge';
        scoreSpan.setAttribute('data-tier', item.tier);
        scoreSpan.textContent = item.score;
        a.appendChild(scoreSpan);
        a.appendChild(document.createTextNode(' ' + item.title));
      } else {
        a.textContent = item.title;
      }
      li.appendChild(a);
      tocList.appendChild(li);
    });
    sidebar.appendChild(tocList);

    var contentArea = document.createElement('div');
    contentArea.className = 'hz-content';

    // ---- Scan mainContent children and build cards ----
    // Jekyll DOM order: blockquote → hr → ol(TOC) → hr → [P(anchor) → H2 → content... → hr] × N → footer
    var children = Array.from(mainContent.children);
    var tocIndex = children.indexOf(originalTOC);
    var footerEl = mainContent.querySelector('.site-footer');

    // Elements before TOC (blockquote, hr) → keep as-is in contentArea
    var headerElements = [];
    var itemElements = [];  // collected elements for current card
    var cards = [];
    var collecting = false;

    for (var i = tocIndex + 1; i < children.length; i++) {
      var child = children[i];

      // Stop at footer
      if (child === footerEl) break;

      // Skip HR separators (they delineate items, not content)
      if (child.tagName === 'HR') {
        // Flush current card if any
        if (itemElements.length > 0) {
          cards.push(itemElements);
          itemElements = [];
        }
        continue;
      }

      // Skip empty P that only contains an anchor <a id="item-N"></a>
      if (child.tagName === 'P' && child.textContent.trim() === '') {
        continue;
      }

      // Detect article H2 (contains external link)
      var isArticleH2 = child.tagName === 'H2' && child.querySelector('a[href^="http"]');

      if (isArticleH2) {
        // Flush previous card
        if (itemElements.length > 0) {
          cards.push(itemElements);
          itemElements = [];
        }
        itemElements.push(child);
        collecting = true;
      } else if (collecting) {
        // Content belonging to current article
        itemElements.push(child);
      }
      // Elements between TOC and first H2 (shouldn't exist normally) are ignored
    }
    // Flush last card
    if (itemElements.length > 0) {
      cards.push(itemElements);
    }

    // ---- Assemble contentArea ----
    // 1. Header elements (blockquote)
    for (var h = 0; h < tocIndex; h++) {
      if (children[h].tagName !== 'HR') {
        contentArea.appendChild(children[h]);
      }
    }

    // 2. Hidden original TOC
    originalTOC.classList.add('hz-original-toc');
    contentArea.appendChild(originalTOC);

    // 3. Cards — add item-N anchor id to H2 for TOC jump
    cards.forEach(function (group, idx) {
      var card = document.createElement('div');
      card.className = 'hz-item-card';
      group.forEach(function (el) { card.appendChild(el); });
      // Set card id to item-N for TOC anchor navigation
      var itemId = 'item-' + (idx + 1);
      card.id = itemId;
      contentArea.appendChild(card);
    });

    // 4. Footer stays in mainContent (outside layout)
    // layout = sidebar + contentArea
    layout.appendChild(sidebar);
    layout.appendChild(contentArea);

    // Clear mainContent and rebuild: layout + footer
    while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
    mainContent.appendChild(layout);
    if (footerEl) mainContent.appendChild(footerEl);

    // Mobile toggle
    var toggleBtn = document.createElement('button');
    toggleBtn.className = 'hz-sidebar-toggle';
    toggleBtn.innerHTML = '📑';
    toggleBtn.title = '目录';
    document.body.appendChild(toggleBtn);

    var backdrop = document.createElement('div');
    backdrop.className = 'hz-backdrop';
    backdrop.id = 'hz-backdrop';
    document.body.appendChild(backdrop);

    toggleBtn.addEventListener('click', function () {
      sidebar.classList.toggle('hz-mobile-open');
      backdrop.classList.toggle('hz-mobile-open');
    });
    backdrop.addEventListener('click', function () {
      sidebar.classList.remove('hz-mobile-open');
      backdrop.classList.remove('hz-mobile-open');
    });
    tocList.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        sidebar.classList.remove('hz-mobile-open');
        backdrop.classList.remove('hz-mobile-open');
      }
    });

    setupScrollSpy(tocList);
  }

  // ====== SCROLL SPY ======
  function setupScrollSpy(tocList) {
    var links = tocList.querySelectorAll('a');
    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) sections.push({ el: el, link: link });
    });
    if (!sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('hz-active'); });
          var section = sections.find(function (s) { return s.el === entry.target; });
          if (section) {
            section.link.classList.add('hz-active');
            section.link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s.el); });
    if (sections.length) sections[0].link.classList.add('hz-active');
  }

  // ====== LANGUAGE TOGGLE ======
  function setupLanguageToggle() {
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    var btnEn = document.createElement('button'); btnEn.textContent = 'EN'; btnEn.type = 'button';
    var btnZh = document.createElement('button'); btnZh.textContent = '中文'; btnZh.type = 'button';
    toggle.appendChild(btnEn); toggle.appendChild(btnZh);
    document.body.insertBefore(toggle, document.body.firstChild);

    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) {}
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) { btnEn.classList.toggle('active', lang === 'en'); btnZh.classList.toggle('active', lang === 'zh'); }
    var zhSection = document.getElementById('lang-zh'); var enSection = document.getElementById('lang-en');
    function showSection(lang) { if (!zhSection || !enSection) return; enSection.classList.toggle('hidden', lang !== 'en'); zhSection.classList.toggle('hidden', lang !== 'zh'); }
    function switchArticleLang(lang) {
      var path = window.location.pathname; var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) target = path.replace(/-zh(\.html)?$/, '-en$1');
      else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) target = path.replace(/-en(\.html)?$/, '-zh$1');
      if (target) window.location.href = target;
    }
    function setLang(lang) { currentLang = lang; updateButtons(lang); try { localStorage.setItem('horizon-lang', lang); } catch (e) {} if (zhSection && enSection) showSection(lang); else switchArticleLang(lang); }
    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });
    updateButtons(currentLang);
    if (zhSection && enSection) showSection(currentLang);
  }

  // ====== INIT ======
  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    buildSidebarTOC();
    setupLanguageToggle();
  });
})();
