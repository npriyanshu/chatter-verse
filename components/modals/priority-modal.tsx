"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUp } from "lucide-react";
import { Priority } from "@prisma/client";


interface PriorityModalProps {
    updatePriority:(priorityName:Priority)=>Promise<Priority | void>
}

export function PriorityModal({updatePriority}:PriorityModalProps) {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent border-0" variant="outline" size="icon">
        <ChevronsUp
                className="cursor-pointer w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
              />
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

