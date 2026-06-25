/* ============================================================
   portfolio/js/main.js — 全局交互逻辑
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollEffects();
  initActiveNavLink();
  initSmoothScroll();
});

/* ---------- 移动端汉堡菜单 ---------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    // 切换图标：三条线 ↔ X
    const icon = toggleBtn.querySelector('svg');
    if (mobileMenu.classList.contains('open')) {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    } else {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    }
  });

  // 点击菜单项后自动关闭
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const icon = toggleBtn.querySelector('svg');
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    });
  });
}

/* ---------- 滚动渐现动画 ---------- */
function initScrollEffects() {
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // 回到顶部按钮
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ---------- 当前页导航高亮 ---------- */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // 匹配当前页面路径
    if (currentPath.endsWith(href) ||
        (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
}

/* ---------- 平滑滚动（锚点跳转） ---------- */
function initSmoothScroll() {
  // 已由 CSS scroll-behavior: smooth 处理，此处保留作为增强
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------- 工具：为代码块注入简易语法高亮 ---------- */
function highlightCodeBlocks() {
  document.querySelectorAll('.code-block code').forEach(block => {
    let html = block.innerHTML;
    // 注释 (// ...)
    html = html.replace(/(\/\/.*$)/gm, '<span class="cm">$1</span>');
    // 字符串 ("..." 或 '...')
    html = html.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="str">$1</span>');
    // 预处理指令 (#include / #define)
    html = html.replace(/^(#\w+.*)$/gm, '<span class="pp">$1</span>');
    // C 关键字
    const keywords = /\b(void|int|char|float|double|uint8_t|uint16_t|uint32_t|uint64_t|size_t|static|const|volatile|extern|struct|enum|typedef|if|else|for|while|do|return|break|continue|switch|case|default|goto|sizeof|NULL|true|false|bool)\b/g;
    html = html.replace(keywords, '<span class="kw">$1</span>');
    // 数字
    html = html.replace(/\b(\d+\.?\d*|0x[0-9a-fA-F]+)\b/g, '<span class="num">$1</span>');
    // 函数调用 (标识符后跟括号)
    html = html.replace(/\b([a-zA-Z_]\w*)\s*\(/g, '<span class="fn">$1</span>(');

    block.innerHTML = html;
  });
}

// 在详情页自动调用
if (document.querySelector('.code-block code')) {
  highlightCodeBlocks();
}
