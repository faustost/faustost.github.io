document.addEventListener('DOMContentLoaded', () => {
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
