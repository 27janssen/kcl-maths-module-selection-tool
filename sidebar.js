// sidebar.js — inject sidebar into any page
// Usage: <script src="../sidebar.js"></script> or <script src="sidebar.js"></script>
// Call: renderSidebar('home' | 'selection' | 'modules' | 'builder' | 'about')

function renderSidebar(activeKey, rootPath) {
  rootPath = rootPath || '';
  const links = [
    { key: 'home',      label: 'Home',             icon: '~/',   href: rootPath + 'index.html' },
    { key: 'selection', label: 'Module Selection',  icon: '[]',   href: rootPath + 'selection.html' },
    { key: 'modules',   label: 'Module List',       icon: '::',   href: rootPath + 'module-list.html' },
    { key: 'builder',   label: 'Module Builder',    icon: '+/',   href: rootPath + 'builder.html' },
    { key: 'about',     label: 'About',             icon: '/>',   href: rootPath + 'about.html' },
  ];

  const html = `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-mark">KCL Mathematics</div>
        <div class="logo-name">Module Hub</div>
        <div class="logo-sub">Department of Mathematics</div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label">Navigation</div>
        ${links.map(l => `
          <a class="sidebar-link${l.key === activeKey ? ' active' : ''}" href="${l.href}">
            <span class="nav-icon">${l.icon}</span>
            ${l.label}
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="version">v1.0 · 2024–25</div>
      </div>
    </aside>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);
}
