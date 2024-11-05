// Theme toggle functionality
// function toggleTheme() {
//     document.body.classList.toggle('dark-theme');
//     const themeToggle = document.getElementById('themeToggle');
//     themeToggle.classList.toggle('fa-moon');
//     themeToggle.classList.toggle('fa-sun');
// }

// Menu toggle for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    const menuToggleIcon = document.getElementById('menuToggle').querySelector('i');
    menuToggleIcon.classList.toggle('fa-bars');
    menuToggleIcon.classList.toggle('fa-xmark');
}
