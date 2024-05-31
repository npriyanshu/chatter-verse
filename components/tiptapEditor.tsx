import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

interface TipTapEditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
  };

const TipTapEditor = ({ initialContent, editable }:TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editable: editable,
  });

  useEffect(() => {

    if (editor) {
      editor.setEditable( editable as boolean);
    }
  }, [editable]);

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
