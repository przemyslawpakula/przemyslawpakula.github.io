document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const fullName = 'Przemysław Pakuła';
    let index = 0;

    function typeEffect() {
        if (index < fullName.length) {
            nameElement.textContent += fullName.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();

    const themeToggle = document.getElementById('theme-toggle');
    const pdfExport = document.getElementById('pdf-export');
    const body = document.body;

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    pdfExport.addEventListener('click', () => {
        window.print();
    });
});
