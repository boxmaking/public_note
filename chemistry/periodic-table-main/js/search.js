// js/search.js — 站内搜索功能

document.addEventListener('DOMContentLoaded', () => {
  const input    = document.getElementById('navSearch');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) { dropdown.classList.add('hidden'); return; }

    const results = ELEMENTS.filter(e =>
      e.name.includes(q) ||
      e.symbol.toLowerCase().includes(q) ||
      e.nameEn.toLowerCase().includes(q) ||
      String(e.z).startsWith(q)
    ).slice(0, 8);

    if (results.length === 0) { dropdown.classList.add('hidden'); return; }

    dropdown.innerHTML = results.map(el => {
      const catColor = getCatColor(el.category);
      return `
        <div class="search-item" onclick="window.location.href='element.html?z=${el.z}'">
          <div class="search-item-symbol cat-${el.category}" style="background:${catColor};color:#fff">
            ${el.symbol}
          </div>
          <div class="search-item-info">
            <div class="search-item-name">${el.name} ${el.radioactive ? '☢' : ''}</div>
            <div class="search-item-sub">Z=${el.z} · ${el.nameEn} · ${CATEGORY_CN[el.category] || ''}</div>
          </div>
        </div>
      `;
    }).join('');
    dropdown.classList.remove('hidden');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (!q) return;
      const el = ELEMENTS.find(e2 =>
        e2.name === q || e2.symbol.toLowerCase() === q.toLowerCase() ||
        String(e2.z) === q
      ) || ELEMENTS.find(e2 =>
        e2.name.includes(q) || e2.symbol.toLowerCase().includes(q.toLowerCase())
      );
      if (el) window.location.href = `element.html?z=${el.z}`;
    }
    if (e.key === 'Escape') { dropdown.classList.add('hidden'); input.blur(); }
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
});

function getCatColor(cat) {
  const map = {
    'alkali-metal':    '#e74c3c',
    'alkaline-earth':  '#e67e22',
    'transition':      '#3498db',
    'post-transition': '#2ecc71',
    'metalloid':       '#1abc9c',
    'nonmetal':        '#9b59b6',
    'halogen':         '#f39c12',
    'noble-gas':       '#e91e8c',
    'lanthanide':      '#00bcd4',
    'actinide':        '#ff5722',
  };
  return map[cat] || '#555';
}
