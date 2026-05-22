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

  // ====== MOBILE HELPERS ======
  function isMobile() {
    return window.innerWidth <= 860;
  }

  function openSidebar(sidebar, backdrop) {
    sidebar.classList.add('hz-mobile-open');
    backdrop.classList.add('hz-mobile-open');
    document.body.classList.add('hz-sidebar-open');
  }

  function closeSidebar(sidebar, backdrop) {
    sidebar.classList.remove('hz-mobile-open');
    backdrop.classList.remove('hz-mobile-open');
    document.body.classList.remove('hz-sidebar-open');
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

    // Close button (mobile)
    var closeBtn = document.createElement('button');
    closeBtn.className = 'hz-sidebar-close';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', '关闭目录');
    sidebar.appendChild(closeBtn);

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
    var children = Array.from(mainContent.children);
    var tocIndex = children.indexOf(originalTOC);
    var footerEl = mainContent.querySelector('.site-footer');

    // Elements before TOC (blockquote, hr) → keep as-is in contentArea
    var headerElements = [];
    var itemElements = [];
    var cards = [];
    var collecting = false;

    for (var i = tocIndex + 1; i < children.length; i++) {
      var child = children[i];

      if (child === footerEl) break;

      if (child.tagName === 'HR') {
        if (itemElements.length > 0) {
          cards.push(itemElements);
          itemElements = [];
        }
        continue;
      }

      if (child.tagName === 'P' && child.textContent.trim() === '') {
        continue;
      }

      var isArticleH2 = child.tagName === 'H2' && child.querySelector('a[href^="http"]');

      if (isArticleH2) {
        if (itemElements.length > 0) {
          cards.push(itemElements);
          itemElements = [];
        }
        itemElements.push(child);
        collecting = true;
      } else if (collecting) {
        itemElements.push(child);
      }
    }
    if (itemElements.length > 0) {
      cards.push(itemElements);
    }

    // ---- Assemble contentArea ----
    for (var h = 0; h < tocIndex; h++) {
      if (children[h].tagName !== 'HR') {
        contentArea.appendChild(children[h]);
      }
    }

    originalTOC.classList.add('hz-original-toc');
    contentArea.appendChild(originalTOC);

    cards.forEach(function (group, idx) {
      var card = document.createElement('div');
      card.className = 'hz-item-card';
      group.forEach(function (el) { card.appendChild(el); });
      var itemId = 'item-' + (idx + 1);
      var h2 = card.querySelector('h2');
      if (!h2 || h2.id !== itemId) {
        card.id = itemId;
      }
      contentArea.appendChild(card);
    });

    layout.appendChild(sidebar);
    layout.appendChild(contentArea);

    while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
    mainContent.appendChild(layout);
    if (footerEl) mainContent.appendChild(footerEl);

    // ---- Mobile toggle button ----
    var toggleBtn = document.createElement('button');
    toggleBtn.className = 'hz-sidebar-toggle';
    toggleBtn.innerHTML = '📑';
    toggleBtn.title = '目录';
    toggleBtn.setAttribute('aria-label', '打开目录');
    document.body.appendChild(toggleBtn);

    var backdrop = document.createElement('div');
    backdrop.className = 'hz-backdrop';
    backdrop.id = 'hz-backdrop';
    document.body.appendChild(backdrop);

    // Toggle handlers
    toggleBtn.addEventListener('click', function () {
      if (sidebar.classList.contains('hz-mobile-open')) {
        closeSidebar(sidebar, backdrop);
      } else {
        openSidebar(sidebar, backdrop);
      }
    });

    closeBtn.addEventListener('click', function () {
      closeSidebar(sidebar, backdrop);
    });

    backdrop.addEventListener('click', function () {
      closeSidebar(sidebar, backdrop);
    });

    // Close sidebar on TOC link click (mobile)
    tocList.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        closeSidebar(sidebar, backdrop);
      }
    });

    // Swipe right to close sidebar on mobile
    var touchStartX = 0;
    sidebar.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    sidebar.addEventListener('touchmove', function (e) {
      var dx = e.touches[0].clientX - touchStartX;
      if (dx < -60) {
        closeSidebar(sidebar, backdrop);
      }
    }, { passive: true });

    // Close sidebar on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('hz-mobile-open')) {
        closeSidebar(sidebar, backdrop);
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
            // Only auto-scroll TOC on desktop (sidebar visible)
            if (!isMobile()) {
              section.link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
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
