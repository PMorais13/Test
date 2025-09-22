const html = document.documentElement;
const toggle = document.querySelector('[data-toggle-theme]');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

const updateButton = (isLight) => {
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', String(isLight));
  toggle.innerHTML = `${isLight ? '<span aria-hidden="true">☀︎</span> Modo Escuro' : '<span aria-hidden="true">☾</span> Modo Claro'}`;
};

const applyTheme = (theme, persist = true) => {
  html.setAttribute('data-theme', theme);
  const isLight = theme === 'light';
  updateButton(isLight);
  if (persist) {
    localStorage.setItem('pulse-theme', theme);
  }
};

const storedTheme = localStorage.getItem('pulse-theme');
const initialTheme = storedTheme || (prefersLight.matches ? 'light' : 'dark');
applyTheme(initialTheme, false);

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

prefersLight.addEventListener('change', (event) => {
  if (!localStorage.getItem('pulse-theme')) {
    applyTheme(event.matches ? 'light' : 'dark', false);
  }
});
