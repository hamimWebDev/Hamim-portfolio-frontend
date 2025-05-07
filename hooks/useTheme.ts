import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '@/redux/slices/themeSlice';
import { RootState } from '@/redux/store';

export const useTheme = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  // Effect to set initial theme based on localStorage or system preference
  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      dispatch(setTheme(savedTheme === 'dark'));
    } else {
      // If no saved preference, use system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setTheme(prefersDarkMode));
    }
  }, [dispatch]);

  // Effect to apply theme changes to the DOM and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return {
    darkMode,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};

export default useTheme;