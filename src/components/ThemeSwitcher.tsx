import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme } from '../models/ThemeEntity';
import { selectCurrentTheme, switchTheme } from '../slices/ThemeSlice';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  const themeClassName = isDarkTheme(currentTheme) ? 'icon-sun' : 'icon-moon';

  useEffect(() => {
    if (isDarkTheme(currentTheme)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <button type='button' onClick={() => handleSwitchTheme()}>
      <i className={`icon icon-lg ${themeClassName}`}></i>
    </button>
  );
};
