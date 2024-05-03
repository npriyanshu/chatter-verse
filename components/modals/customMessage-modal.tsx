"use client";

// import axios from "axios";
// import qs from "query-string";
// import { 
//   Check,
//   Gavel,
//   Loader2,
//   MoreVertical, 
//   Shield, 
//   ShieldAlert, 
//   ShieldCheck,
//   ShieldQuestion
// } from "lucide-react";
// import { useState } from "react";
// import { MemberRole } from "@prisma/client";
// import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toolbar } from "../toolbar";
import Editor from "../editor";
import { useState } from "react";
import { Button } from "../ui/button";



export const CustomMessageModal = () => {
  // const router = useRouter();
  const { isOpen, onClose, type, data } = useModal();
  const [title, setTitle] = useState<string>("Untitled");
  const [content, setContent] = useState<string>(`[]`);



  const isModalOpen = isOpen && type === "customMessage";

  // getting server and role from data
  // const { server,role } = data as { server: ServerWithMembersWithProfiles, role:MemberRole };



  return (
    // <Dialog open={isModalOpen} onOpenChange={onClose}>
    //   <DialogContent className="bg-white text-black overflow-hidden min-w-[70vw] min-h-[95vh]">
    //     <DialogHeader className="pt-8 px-6">
    //       <DialogTitle className="text-2xl text-center font-bold">
    //         Send Custom Message
    //       </DialogTitle>
    //       <DialogDescription 
    //         className="text-center text-zinc-500"
    //       >
    //         write your custom messages
    //       </DialogDescription>
    //     </DialogHeader>
        
    //     <ScrollArea className=" max-h-[420px]">
    //     <Toolbar setTitle={setTitle} title={title}  />
    //     <Editor
    //       // onChange={()=>{}}
    //       initialContent={content}
    //       setContent={setContent}
    //     />
          
    //     </ScrollArea>
    //   </DialogContent>
    // </Dialog>

    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-x-hidden overflow-y-auto max-w-[70vw] min-h-[80vh] max-h-[90vh]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
          Send Custom Message
          </DialogTitle>
          {/* <DialogDescription className="text-center text-zinc-500">
          write your custom messages
          </DialogDescription> */}
        </DialogHeader>
        
        <ScrollArea className=" h-[300px] max-h-[420px] overflow-x-hidden overflow-y-auto">
         <Toolbar setTitle={setTitle} title={title}  />
         <Editor
          // onChange={()=>{}}
          initialContent={content}
          setContent={setContent}
        />
        </ScrollArea>
        
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" >  {/*disabled={isLoading} */} 
                Send
              </Button>
            </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


// initialData={{
//   id: "string",
//   content: "string",
//   title: "Untitled",
//   icon:  null,
//   fileUrl: null,
//   memberId: "string",
//   channelId: "string",
//   deleted: false,
//   priority: "LOW",
//   messageType: "CUSTOM",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// }}