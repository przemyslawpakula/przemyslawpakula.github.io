document.addEventListener('DOMContentLoaded', () => {
    // Auto-Typing Effect for Name
    const nameElement = document.getElementById('name');
    const name = 'Przemysław Pakuła';
    let index = 0;

    function type() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();

    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        themeToggleBtn.textContent = body.classList.contains('dark-theme')
            ? 'Switch to Light Theme'
            : 'Switch to Dark Theme';
    });
});
