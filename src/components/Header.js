import React, { useEffect, useState } from 'react'
import Logo from '../assets/mon_avatar.webp';

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("taskmate-theme")) || "light");

  useEffect(()=> {
    localStorage.setItem("taskmate-theme", JSON.stringify(theme));
    document.documentElement.classList = theme;
  }, [theme]);

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className={theme === "light" ? "light activeTheme" : "light"} onClick={()=> setTheme("light")}></span>
            <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={()=> setTheme("medium")}></span>
            <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={()=> setTheme("dark")}></span>
            <span className={theme === "gradient" ? "gradient activeTheme" : "gradient"} onClick={()=> setTheme("gradient")}></span>
        </div>
    </header>
  )
}
