import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Underline from "@tiptap/extension-underline";
import Image from '@tiptap/extension-image'

interface TipTapEditorProps {
    onChange: (value: any) => void;
    initialContent?: string;
    editable?: boolean;
  };

const TipTapEditorShow = ({onChange, initialContent, editable }:TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit,Underline,Image],

    editorProps:{
      attributes:{
        class: " flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700"
      },
    },
    content: initialContent,

    editable: editable,
    onUpdate({editor}) {
        onChange(editor.getHTML());
    },
    
  });

  useEffect(() => {

    if (editor) {
      editor.setEditable( editable as boolean);
    }
  }, [editable]);

  if (!editor) {
    return null
  }


  return (
    <div>
    <EditorContent style={{whiteSpace:"pre-line"}}  editor={editor} />
  </div>
  );
};

export default TipTapEditorShow;
