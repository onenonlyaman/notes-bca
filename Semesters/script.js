const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  body.classList.toggle('dark-theme', theme === 'dark');
  if (theme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none'; 1 
  }
}
function getSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
}
const savedTheme = getSavedTheme();
setTheme(savedTheme);
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
  setTheme(currentTheme);
});