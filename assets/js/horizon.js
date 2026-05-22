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
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }
      if (/^(rss|reddit|github|hackernews|hn|telegram|ossinsight)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
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

    // ---- Wrap article items in cards ----
    // DOM: OL(TOC) → HR → P(empty) → H2(title+link) → content... → HR → P(empty) → H2 → ...
    var children = Array.from(mainContent.children);
    var groups = [];
    var currentGroup = null;
    var pastTOC = false;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      if (child === originalTOC) { pastTOC = true; continue; }
      if (!pastTOC) continue;

      if (child.tagName === 'HR') {
        if (currentGroup) { groups.push(currentGroup); currentGroup = null; }
        continue;
      }

      var isArticleH2 = child.tagName === 'H2' && child.querySelector('a[href^="http"]');

      if (isArticleH2) {
        if (currentGroup) groups.push(currentGroup);
        currentGroup = [child];
      } else if (currentGroup) {
        if (currentGroup.length === 0 && child.tagName === 'P' && child.textContent.trim() === '') continue;
        currentGroup.push(child);
      }
    }
    if (currentGroup) groups.push(currentGroup);

    groups.forEach(function (group) {
      var card = document.createElement('div');
      card.className = 'hz-item-card';
      group.forEach(function (el) { card.appendChild(el); });
      mainContent.appendChild(card);
    });

    // ---- Build layout ----
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

    originalTOC.classList.add('hz-original-toc');
    while (mainContent.firstChild) contentArea.appendChild(mainContent.firstChild);

    layout.appendChild(sidebar);
    layout.appendChild(contentArea);
    mainContent.appendChild(layout);

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
