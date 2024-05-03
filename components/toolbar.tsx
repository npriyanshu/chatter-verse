"use client";

import { ElementRef, useRef, useState } from "react";
import { ImageIcon, Smile, X } from "lucide-react";
// import { useMutation } from "convex/react";
import TextareaAutosize from "react-textarea-autosize";

// import { useCoverImage } from "@/hooks/use-cover-image";
// import { Doc } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
// import { api } from "@/convex/_generated/api";

import { IconPicker } from "./icon-picker";
import { Message } from "@prisma/client";

interface ToolbarProps {
  title: string;
  setTitle :(value : string)=>void;
  preview?: boolean;
};

export const Toolbar = ({
  title,
  setTitle,
  preview
}: ToolbarProps) => {
  const inputRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  // const [icon, setIcon] = useState(initialData.icon);
  const [asChild, setAsChild] = useState<boolean>(false);

  // const update = useMutation(api.documents.update);
  // const removeIcon = useMutation(api.documents.removeIcon);

  // const coverImage = useCoverImage();

  const enableInput = () => {
    if (preview) return;

    setIsEditing(true);
    setTimeout(() => {
      // setValue(title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => setIsEditing(false);

  const onInput = (value: string) => {
    // setValue(value);
    setTitle(value);
    // update({
    //   id: initialData._id,
    //   title: value || "Untitled"
    // });
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      disableInput();
    }
  };

  // const onIconSelect = (icon: string) => {
  //   initialData.icon = icon;
  //   setIcon(icon)
  //   setAsChild(false);
  //   // update({
  //   //   id: initialData._id,
  //   //   icon,
  //   // });
  // };

  // const onRemoveIcon = () => {
  //   initialData.icon = null;
  //   setIcon(null);
  //   console.log("done");
  //   // removeIcon({
  //   //   id: initialData._id
  //   // })
  // }

  return (
    <div className="pl-[54px] group relative">
      {/* {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={onIconSelect}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>
          <Button
            onClick={()=>onRemoveIcon()}
            className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )} */}
      {/* {!!initialData.icon && preview && (
        <p className="text-6xl pt-6">
          {icon}
        </p>
      )} */}
      {/* <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
        {!initialData.icon && !preview && (
          <IconPicker asChild onChange={onIconSelect}>
            <Button
            onClick={()=>setAsChild(true)}
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add icon
            </Button>
          </IconPicker>
        )}
    
      </div> */}
     {isEditing && !preview ? (
        <TextareaAutosize
          ref={inputRef}
          onBlur={disableInput}
          onKeyDown={onKeyDown}
          value={title}
          onChange={(e) => onInput(e.target.value)}
          className="text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
        />
      ) : (
        <div
          onClick={enableInput}
          className="pb-[11.5px] text-5xl font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF]"
        >
          {title}
        </div>
      )} 
    </div>
  )
}