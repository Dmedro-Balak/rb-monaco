import CodeEditor from "./CodeEditor.jsx";

import "./CodeArea.css";
import OutputConsole from "./OutputConsole.jsx";

export default function CodeArea() {
  return (
    <div className="CodeArea">
      <CodeEditor />
      <OutputConsole />
    </div>
  );
}
