"use client";

import { ChatLoading } from "../skeletonComponent";

export const ChatMessagesLoader = () => {
 

  

  return (
    <div className="flex-1 flex flex-col py-4 overflow-y-auto">
  
      <div className="flex gap-6 mb-4 ml-7 flex-col-reverse mt-auto">
              <ChatLoading />
              <ChatLoading />
              <ChatLoading />     
              <ChatLoading />     
      </div>
    </div>
  )
}