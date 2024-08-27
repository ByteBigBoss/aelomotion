"use client"
import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

type editorProps = {
    CODE: string;
}

const Editor = ({CODE}:editorProps)=> {
  const [code, setCode] = useState(CODE);
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        backgroundColor: "#1A1A1A",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}

export default Editor;