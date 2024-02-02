"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const JoinModal = () => {
  const router = useRouter();
  const { isOpen, onClose, type} = useModal();

  const isModalOpen = isOpen && type === "joinServer";
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");




  const onclick =  () => {
    try {
      setIsLoading(true);
      router.push(input);
      router.refresh();
      onClose();
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label
            className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
          >
            Server invite link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={isLoading}
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
              onChange={(e)=>{setInput(e.target.value); }}
              value={input}
            />
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <Button 
              disabled={isLoading}
              onClick={onClose}
              variant="ghost"
            >
              Cancel
            </Button>
            <Button 
              disabled={isLoading}
              variant="primary"
              onClick={onclick}
            >
              Join
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}