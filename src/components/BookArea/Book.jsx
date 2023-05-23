import { useState, useEffect, useContext } from "react";
import CodeHighlight from "./CodeHighlight";

import Markdown from "markdown-to-jsx";

import "./Book.css";
import { AppContext } from "../../AppContext";

export default function Book() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    import(`../../MD/${currentPage}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setCurrentPage(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <article className="Book">
      <Markdown
        options={{
          overrides: {
            Code: {
              component: CodeHighlight,
            },
          },
        }}
      >
        {currentPage}
      </Markdown>
    </article>
  );
}
