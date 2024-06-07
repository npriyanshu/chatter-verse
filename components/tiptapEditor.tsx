import React, { useEffect } from 'react';
import {BubbleMenu, useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Underline from "@tiptap/extension-underline";
import { Toolbar } from './toolbar';
import Image from '@tiptap/extension-image'
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Bold, Heading2, Italic, Strikethrough,Underline as UnderlineIco, } from 'lucide-react';

interface TipTapEditorProps {
    onChange: (value: any) => void;
    initialContent?: string;
    editable?: boolean;
  };

const TipTapEditor = ({onChange, initialContent, editable }:TipTapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit,
      Underline,
      Image,
      Color,
      TextStyle,
    ],

    editorProps:{
      attributes:{
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none dark:text-white flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700"
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
    <div className=' relative'>
      <Toolbar editor={editor} content={initialContent} />

  {
    editor && <BubbleMenu className='w-[200px] flex gap-4 justify-center items-center ' editor={editor}  tippyOptions={{ duration: 100 }}>
     
{/* bold */}
<button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        
        className={
          editor.isActive("bold") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Bold className="w-5 h-5" />
        </button>

        {/* italic  */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        
        className={
          editor.isActive("italic") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Italic className="w-5 h-5" />
        </button>


        {/* underline  */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        
        className={
          editor.isActive("underline") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <UnderlineIco className="w-5 h-5" />
        </button>

        {/* strikethrough  */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        
        className={
          editor.isActive("strike") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Strikethrough className="w-5 h-5" />
        </button>

        {/* heading 2  */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleHeading({level:2}).run();
        }}
        
        className={
          editor.isActive("heading",{level :2}) ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Heading2 className="w-5 h-5" />
        </button>

  </BubbleMenu>
  }

    <EditorContent style={{whiteSpace:"pre-line"}}  editor={editor} />
  </div>
  );
};

export default TipTapEditor;
