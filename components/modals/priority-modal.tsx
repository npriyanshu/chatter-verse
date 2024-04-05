"use client"

import * as React from "react"
import { setMessagePriority } from "@/lib/setMessagePriority";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUp } from "lucide-react"

interface PriorityModalProps {
    socketUrl:string;
    socketQuery:Record<string,string>;
    id:string;
    memberId:string;
}

export function PriorityModal({socketUrl,socketQuery,id,memberId}:PriorityModalProps) {

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button className="bg-transparent border-0" variant="outline" size="icon">
    //     <ChevronsUp
    //             className="cursor-pointer w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
    //           />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuItem onClick={() => setMessagePriority( { 
    //               apiUrl: `${socketUrl}/${id}`,
    //               query: socketQuery,
    //              },id,memberId,"LOW")}>
    //       LOW
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setMessagePriority( { 
    //               apiUrl: `${socketUrl}/${id}`,
    //               query: socketQuery,
    //              },id,memberId,"MID")}>
    //       MID
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setMessagePriority( { 
    //               apiUrl: `${socketUrl}/${id}`,
    //               query: socketQuery,
    //              },id,memberId,"HIGH")}>
    //       HIGH
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>

    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="bg-transparent border-0" variant="outline" size="icon">
        
        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => {}}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => {}}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => {}}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    
  )
}

