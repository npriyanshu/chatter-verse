"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Priority } from "@prisma/client";
import { CircleEllipsis } from "lucide-react";

interface PriorityModalProps {
    updatePriority:(priorityName:Priority)=>Promise<Priority | void>
}


export function PriorityModal({updatePriority}:PriorityModalProps) {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent border-0 h-auto" variant="outline" size="icon">
     
        <CircleEllipsis className=" cursor-pointer  text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />

        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" relative lg:left-[80vw] top-[40vh] left-[40vw]">
        <DropdownMenuItem onClick={() => updatePriority("LOW")}>
          LOW
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updatePriority("MID")}>
          MID
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updatePriority("HIGH")}>
          HIGH
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    
  )
}

