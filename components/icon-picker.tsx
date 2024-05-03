"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
};

export const IconPicker = ({
  onChange,
  children,
  asChild
}: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap

  const themeMap = {
    "dark": Theme.DARK,
    "light": Theme.LIGHT
  };

  const theme = themeMap[currentTheme];

  return (
    // <Popover>
    //   <PopoverTrigger asChild={asChild}>
    //     {children}
    //   </PopoverTrigger>
    //   <PopoverContent className="p-0 w-full border-none shadow-none relative bottom-[40vh]">
    //     <EmojiPicker
    //       height={350}
    
    //       theme={theme}
    //       onEmojiClick={(data) => onChange(data.emoji)}
    //     />
    //   </PopoverContent>
    // </Popover>

        <Popover>
      <PopoverTrigger asChild={asChild}>
         {children} 
      </PopoverTrigger>
      <PopoverContent 
        // side="right" 
        // sideOffset={40}
        className="p-0 w-full border-none shadow-none"
        // className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
      >
        <EmojiPicker
          onEmojiClick={(emoji) => onChange(emoji.emoji)}
          theme={theme}
        />
      </PopoverContent>
    </Popover>
  );
};
