// On page load
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme + '-mode');
btn.textContent = (savedTheme === 'light') ? 'Switch to Dark Mode' : 'Switch to Light Mode';

// On toggle
btn.addEventListener('click', () => {
  const isLight = body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  const theme = isLight ? 'dark' : 'light';
  btn.textContent = isLight ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  localStorage.setItem('theme', theme);
});
