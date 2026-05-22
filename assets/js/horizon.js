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
    // Only run on article pages (have the ordered TOC list)
    var mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    // Find the original TOC: the first <ol> after the blockquote+hr
    var originalTOC = mainContent.querySelector('ol');
    if (!originalTOC) return;

    // Check it has links to #item- anchors
    var tocLinks = originalTOC.querySelectorAll('a[href^="#item-"]');
    if (tocLinks.length < 3) return;

    // Mark body for layout
    document.body.classList.add('hz-has-toc');

    // Create layout wrapper
    var layout = document.createElement('div');
    layout.className = 'hz-layout';

    // Create sidebar
    var sidebar = document.createElement('aside');
    sidebar.className = 'hz-sidebar';
    sidebar.id = 'hz-sidebar';

    var sidebarTitle = document.createElement('div');
    sidebarTitle.className = 'hz-sidebar-title';
    sidebarTitle.textContent = '📑 目录';
    sidebar.appendChild(sidebarTitle);

    var tocList = document.createElement('ul');
    tocList.className = 'hz-toc-list';

    tocLinks.forEach(function (link) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = link.getAttribute('href');
      a.textContent = link.textContent;

      // Extract score from text for color coding
      var scoreMatch = link.textContent.match(/(\d+(?:\.\d+)?)$/);
      if (scoreMatch) {
        var score = parseFloat(scoreMatch[1]);
        var tier;
        if (score >= 9) tier = 'high';
        else if (score >= 7) tier = 'good';
        else if (score >= 5) tier = 'mid';
        else tier = 'low';

        var scoreSpan = document.createElement('span');
        scoreSpan.className = 'hz-toc-score score-badge';
        scoreSpan.setAttribute('data-tier', tier);
        scoreSpan.textContent = scoreMatch[1];

        // Clean the text (remove the score part)
        var textNode = document.createTextNode(link.textContent.replace(/\s*\d+(?:\.\d+)?$/, '') + ' ');
        a.textContent = '';
        a.appendChild(scoreSpan);
        a.appendChild(textNode);
      }

      li.appendChild(a);
      tocList.appendChild(li);
    });

    sidebar.appendChild(tocList);

    // Create content area
    var contentArea = document.createElement('div');
    contentArea.className = 'hz-content';

    // Hide original TOC
    originalTOC.classList.add('hz-original-toc');

    // Wrap content items in cards
    wrapItemsInCards(mainContent);

    // Move all children from mainContent to contentArea
    while (mainContent.firstChild) {
      contentArea.appendChild(mainContent.firstChild);
    }

    layout.appendChild(sidebar);
    layout.appendChild(contentArea);
    mainContent.appendChild(layout);

    // Mobile toggle button
    var toggleBtn = document.createElement('button');
    toggleBtn.className = 'hz-sidebar-toggle';
    toggleBtn.innerHTML = '📑';
    toggleBtn.title = '目录';
    document.body.appendChild(toggleBtn);

    // Mobile backdrop
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

    // Click TOC link: close mobile sidebar
    tocList.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        sidebar.classList.remove('hz-mobile-open');
        backdrop.classList.remove('hz-mobile-open');
      }
    });

    // Scroll spy: highlight current section
    setupScrollSpy(tocList);
  }

  // ====== WRAP ITEMS IN CARDS ======
  function wrapItemsInCards(container) {
    // Each article item starts with <a id="item-N"></a> followed by <h2>, content, <hr>
    var anchors = container.querySelectorAll('a[id^="item-"]');
    anchors.forEach(function (anchor) {
      var card = document.createElement('div');
      card.className = 'hz-item-card';

      // Collect siblings until next anchor or hr
      var node = anchor;
      var siblings = [];
      while (node) {
        var next = node.nextSibling;
        siblings.push(node);
        // Stop at <hr> that's a separator between items
        if (node.nodeType === 1 && node.tagName === 'HR') {
          node.parentNode.removeChild(node);
          break;
        }
        // Stop if next is another item anchor
        if (next && next.nodeType === 1 && next.tagName === 'A' && next.id && next.id.match(/^item-/)) {
          node = next;
          break;
        }
        node = next;
      }

      // Move collected nodes into card
      siblings.forEach(function (n) {
        // Skip the trailing <hr>
        if (n.nodeType === 1 && n.tagName === 'HR') return;
        card.appendChild(n);
      });

      // Insert card where anchor was
      anchor.parentNode.insertBefore(card, anchor);
    });
  }

  // ====== SCROLL SPY ======
  function setupScrollSpy(tocList) {
    var links = tocList.querySelectorAll('a');
    var sections = [];

    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) sections.push({ id: id, el: el, link: link });
    });

    if (!sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Remove active from all
          links.forEach(function (l) { l.classList.remove('hz-active'); });
          // Add to current
          var section = sections.find(function (s) { return s.el === entry.target; });
          if (section) {
            section.link.classList.add('hz-active');
            // Scroll sidebar to show active item
            section.link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });
    }, {
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(function (s) {
      observer.observe(s.el);
    });

    // Activate first on load
    if (sections.length) {
      sections[0].link.classList.add('hz-active');
    }
  }

  // ====== LANGUAGE TOGGLE ======
  function setupLanguageToggle() {
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    document.body.insertBefore(toggle, document.body.firstChild);

    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }

  // ====== INIT ======
  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    buildSidebarTOC();
    setupLanguageToggle();
  });
})();
