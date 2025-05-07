import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMood, setIsDarkMood] = useLocalStorageState(false, "isDarkMood");
  useEffect(
    function () {
      if (isDarkMood) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMood]
  );
  function toggleDarkMood() {
    setIsDarkMood((isDark) => !isDark);
  }
  return (
    <DarkMoodContext.Provider value={{ isDarkMood, toggleDarkMood }}>
      {children}
    </DarkMoodContext.Provider>
  );
}

function useDarkMood() {
  const context = useContext(DarkMoodContext);
  if (context === undefined)
    throw new Error("dark mood was used outside dark mood provider");

  return context;
}

export { DarkMoodProvider, useDarkMood };
