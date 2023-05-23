import "./Header.css";
import "../dark-theme.css";

import { ReactComponent as Menu } from "../assets/menu-icon.svg";
import { ReactComponent as Theme } from "../assets/theme-icon.svg";
import { ReactComponent as User } from "../assets/user-icon.svg";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Header() {
  const { theme } = useContext(AppContext);
  const { setTheme } = useContext(AppContext);

  return (
    <header className={`Header ${theme}`}>
      <div className="wrap">
        <button>
          <Menu width="20px" height="20px" />
        </button>
        <button
          onClick={() => {
            setTheme(theme == "dark" ? "light" : "dark");
          }}
        >
          <Theme width="20px" height="20px" />
        </button>
      </div>

      <h1 className="Name">Язык программирования Rust</h1>

      <div className="User">
        <button text-align="center">
          <User width="100%" height="20px" />
        </button>
      </div>
    </header>
  );
}
