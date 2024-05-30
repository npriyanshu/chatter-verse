"use client"
import {ChevronsDown} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Member } from "@prisma/client";

import ImpMessages from "./ui/ImpMessages";

export const ChatHadderToggle = ({
  socketQuery,
    member,
    channelId
}: {
  socketQuery: Record<string, string>;
    member:Member;
    channelId?: string;
}) => {

 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <ChevronsDown />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 flex gap-0 bg-white dark:bg-[#1b1b1d]">
        <div className="h-[70vh] w-[100vw] pl-[10vw] lg:pl-[8vw]">
        
        {/* important Messages   */}
        <ImpMessages  socketQuery={socketQuery}  member={member} channelId={channelId}  />
       
</div> 
      </SheetContent>
    </Sheet>
  )
}