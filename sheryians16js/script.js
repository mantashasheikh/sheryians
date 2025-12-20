const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const btn = document.querySelector('#toggleTheme');

/* Apply theme */
function applyTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
}

/* Get preferred theme */
function getPreferredTheme() {
    return localStorage.getItem('theme') ||
           (themeMedia.matches ? 'dark' : 'light');
}

/* Initial load */
applyTheme(getPreferredTheme());

/* Toggle button */
btn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark')
        ? 'light'
        : 'dark';

    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

/* Listen to system theme changes */
themeMedia.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
        applyTheme(themeMedia.matches ? 'dark' : 'light');
    }
});

