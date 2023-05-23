import { useState } from "react";
import { AppContext } from "./AppContext.jsx";
import Book from "./components/BookArea/Book.jsx";
import CodeArea from "./components/CodeArea/CodeArea.jsx";
import Header from "./components/Header.jsx";

import "./App.css";
import "./dark-theme.css";

export default function App() {
  const [code, setCode] = useState("fn main {\n    // Ваш код здесь\n}");

  const [theme, setTheme] = useState("dark");

  const [currentPage, setCurrentPage] = useState("ch1-1-hello-world");

  return (
    <AppContext.Provider
      value={{ code, setCode, theme, setTheme, currentPage, setCurrentPage }}
    >
      <Header className={`${theme}`} />
      <main className={`App ${theme}`}>
        <Book />
        <CodeArea />
      </main>
    </AppContext.Provider>
  );
}
