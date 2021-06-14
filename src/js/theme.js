const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

// дефолтная тема
function defaultTheme() {

  const defaultTheme = localStorage.getItem('Theme');

  if (defaultTheme === 'DARK') {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
   }
}
   


//смена темы со светлой на тёмную

 bodyRef.addEventListener('change', onThemeChenge);

function onThemeChenge(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);

    localStorage.setItem('Theme', Theme.DARK);
  }
  else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);

    localStorage.setItem('Theme', Theme.LIGHT);
  }
}