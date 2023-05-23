import { useContext } from "react";
import { AppContext } from "../../AppContext";

import { Prism as SyntaxHighligther } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ReactComponent as Logo } from "../../assets/run-icon.svg";
import "./CodeHighlight.css";

export default function CodeHighlight({ children, language }) {
  const { setCode } = useContext(AppContext);

  return (
    <div className="CodeHighlight">
      {language == "rust" ? (
        <button onClick={() => setCode(String(children))}>
          <Logo height="20px" width="20px" />
        </button>
      ) : null}
      <SyntaxHighligther style={vscDarkPlus} language={language}>
        {children}
      </SyntaxHighligther>
    </div>
  );
}
