"use client"
import {ChevronsDown} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import priorityMessagesFetch from "@/lib/fetchPriorityMessages";
import { Member } from "@prisma/client";
import { format } from "date-fns";
import { MessageWithMemberWithProfile } from "./chat/chat-messages";
import { ChatItem } from "./chat/chat-item";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

export const ChatHadderToggle = ({
  socketQuery,
    member,
    channelId
}: {
  socketQuery: Record<string, string>;
    member:Member;
    channelId?: string;
}) => {

  const [msgs,setMsgs] = useState<MessageWithMemberWithProfile[] | null>(null);

  const fetchMessages= async()=>{
    let data : MessageWithMemberWithProfile[] = await priorityMessagesFetch(member.id,channelId as string);
    setMsgs(data);
  }
  useEffect( ()=>{
    fetchMessages();
  },[channelId])
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <ChevronsDown />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 flex gap-0 bg-white dark:bg-[#1b1b1d]">
        <div className="h-[70vh]">
        
        {/* important Messages   */}
        <div className="flex flex-col-reverse mt-auto">
        {
msgs && msgs.map( 
(message)=>  <ChatItem 
key={message.id}
id={message.id}
currentMember={member}
messageType={message.messageType}
member={message.member}
content={message.content}
fileUrl={message.fileUrl}
deleted={message.deleted}
timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
isUpdated={message.updatedAt !== message.createdAt}
socketUrl={"/api/socket/messages"}
socketQuery={socketQuery}
type={"channel"}
/>
)
}

{
!msgs && (
  <p>Loading ... </p>
)
}

        </div>
</div> 
      </SheetContent>
    </Sheet>
  )
}