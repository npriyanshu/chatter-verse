import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

interface TipTapEditorProps {
    onChange: (value: any) => void;
    initialContent?: string;
    editable?: boolean;
  };

const TipTapEditor = ({onChange, initialContent, editable }:TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
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

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
