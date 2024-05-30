import { Member } from "@prisma/client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import priorityMessagesFetch from "@/lib/fetchPriorityMessages";
import { MessageWithMemberWithProfile } from "../chat/chat-messages";
import { ChatItem } from "../chat/chat-item";
import { ScrollArea } from "./scroll-area";
const DATE_FORMAT = "d MMM yyyy, HH:mm";


const ImpMessages = ({
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
    <>

<ScrollArea className=" w-[80vw] h-[60vh] overflow-x-hidden overflow-y-auto flex flex-col-reverse gap-4 mt-7">
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
        </ScrollArea>
    
    </>
  )
}

export default ImpMessages