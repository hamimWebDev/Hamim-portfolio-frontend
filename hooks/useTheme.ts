import { RootState } from "@/redux/store";
import { setTheme } from "@/redux/themeSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export const useTheme = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  // Effect to enforce dark mode
  useEffect(() => {
    dispatch(setTheme(true)); // Always set dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, [dispatch]);

  return {
    darkMode,
  };
};

export default useTheme;
