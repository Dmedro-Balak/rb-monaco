import { useContext } from "react";
import { AppContext } from "../../AppContext";

import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const { code } = useContext(AppContext);

  return (
    <Editor
      height="75%"
      width="100%"
      theme="vs-dark"
      defaultLanguage="rust"
      value={code.includes("main") ? code : "fn main {\n    " + code + "}"}
      options={{
        tabSize: 4,
        minimap: {
          enabled: false,
        },
        fontSize: "18",
      }}
    />
  );
}
