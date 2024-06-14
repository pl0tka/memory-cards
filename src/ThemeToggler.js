import { useEffect } from 'react';
import themes from './themes.js';
import { PiSunFill } from 'react-icons/pi';
// import { PiMoonStarsLight } from 'react-icons/pi';
import { PiMoonLight } from 'react-icons/pi';

const setTheme = (theme) => {
  window.localStorage.setItem('theme', theme);
  const root = document.querySelector(':root');
  Object.keys(themes[theme]).forEach((key) => {
    root.style.setProperty(key, themes[theme][key]);
  });
};

function ThemeToggler() {
  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') || 'light');
  }, []);

  return (
    <button
      onClick={() =>
        setTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')
      }
      className="theme-toggler"
    >
      <PiSunFill className="icon icon-light" />
      <PiMoonLight className="icon icon-dark" />
    </button>
  );
}

export default ThemeToggler;
