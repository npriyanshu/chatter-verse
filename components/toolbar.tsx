import { type Editor } from "@tiptap/react";
import {useCallback} from "react";

import {
Bold,
Strikethrough,
Italic,
List,
ListOrdered,
Heading2,
Underline,
ImageIcon,
Undo,
Redo,
Paintbrush,
// Code,
} from "lucide-react";


interface ToolbarProps {
  editor:Editor | null;
  content?:string,
};

export const Toolbar = ({
  editor,
  content
}: ToolbarProps) => {

  const addImage = useCallback(() => {
    const url = window.prompt('Enter Image URL')

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])


  if(!editor) return null;

  return (
    <div className="px-4 py3 rounded-tl-md rounded-tr-md flex justify-center items-center gap-5 w-full h-[50px] bg-black flex-wrap border border-x-gray-700 ">
      <div className=" flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">

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
          <Underline className="w-5 h-5" />
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

        {/* unordered list button */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        
        className={
          editor.isActive("bulletList") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <List className="w-5 h-5" />
        </button>

        {/* ordered no list button */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        
        className={
          editor.isActive("orderedList") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <ListOrdered className="w-5 h-5" />
        </button>

        {/* Image button */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          addImage();
        }}
        
        className={
          editor.isActive("blockquote") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <ImageIcon className="w-5 h-5" />
        </button>

        {/* code button */}
        {/* <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().setCode().run();
        }}
        
        className={
          editor.isActive("code") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Code className="w-5 h-5" />
        </button> */}

        {/* color picker */}

        <input
        type="color"
        onChange={event => {
          const target = event.target as HTMLInputElement;
          editor.chain().focus().setColor(target.value).run();
        }}
        value={editor.getAttributes('textStyle').color || '#fa0303'} // Default to black if no color set
        data-testid="setColor"
      />

      <button
        onClick={() => editor.chain().focus().unsetColor().run()}
        data-testid="unsetColor"
        
        className={
          editor.isActive("undo") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
      >
        <Paintbrush className="w-5 h-5" />
      </button>

        

        {/* undo button */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        
        className={
          editor.isActive("undo") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Undo className="w-5 h-5" />
        </button>

        {/* redo button */}
        <button
        onClick={(e)=>{
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        
        className={
          editor.isActive("redo") ? "text-white bg-sky-700 p-2 rounded-lg" : "text-gray-400"
        }  
        >
          <Redo className="w-5 h-5" />
        </button>

      </div>
    
    </div>
  )
}