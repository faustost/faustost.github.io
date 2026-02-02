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

    // Memento Mori: Year Progress
    const updateYearProgress = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 1); // Jan 1st
        const end = new Date(now.getFullYear() + 1, 0, 1); // Next Jan 1st
        
        const total = end - start;
        const passed = now - start;
        const percentage = (passed / total) * 100;
        
        const bar = document.getElementById('year-progress');
        const text = document.getElementById('year-text');
        
        if (bar && text) {
            bar.style.width = `${percentage.toFixed(1)}%`;
            text.textContent = `${now.getFullYear()} is ${percentage.toFixed(1)}% complete`;
        }
    };

    updateYearProgress();
});
