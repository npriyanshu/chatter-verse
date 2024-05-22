"use client";

import React from "react";
import { useTheme } from "next-themes";
// import {
//   BlockNoteEditor,
//   // PartialBlock
// } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  // useCreateBlockNote
} from "@blocknote/react";


import "@blocknote/core/style.css";

import { useEdgeStore } from "../lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ 
      file
    });

    return response.url;
  }

  const editor = useBlockNote({
    editable,
    initialContent: 
      initialContent 
      ? JSON.parse(initialContent)
      : undefined,
    onEditorContentChange: (editor) => {
      // console.log(" editor :",editor);
      onChange(JSON.stringify(editor.topLevelBlocks,null,2));
      // console.log(editor.topLevelBlocks ? JSON.stringify(editor.topLevelBlocks) : false);
    },
    uploadFile: handleUpload
  })
  return (
    <div>

      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
      
    </div>
  )
}

export default Editor;
