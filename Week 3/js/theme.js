// Get the theme switch element
const themeSwitch = document.getElementById('theme-switch');

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSwitch.checked = savedTheme === 'dark-mode';
}

// Function to switch theme
function toggleTheme() {
    if (themeSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}

// Add event listener for the switch
themeSwitch.addEventListener('change', toggleTheme);
