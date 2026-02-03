document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const html = document.documentElement;

    const setLanguage = (lang) => {
        html.setAttribute('lang', lang);
        localStorage.setItem('preferred-lang', lang);
        updateToggleButton(lang);
    };

    const updateToggleButton = (lang) => {
        if (lang === 'en') {
            langToggle.textContent = 'PT';
        } else {
            langToggle.textContent = 'EN';
        }
    };

    // 1. Check localStorage
    let currentLang = localStorage.getItem('preferred-lang');

    // 2. If not in localStorage, check browser language
    if (!currentLang) {
        const browserLang = navigator.language.split('-')[0];
        currentLang = browserLang === 'pt' ? 'pt' : 'en';
    }

    // Initialize
    setLanguage(currentLang);

    // Click event
    langToggle.addEventListener('click', () => {
        const nextLang = html.getAttribute('lang') === 'en' ? 'pt' : 'en';
        setLanguage(nextLang);
    });
});
