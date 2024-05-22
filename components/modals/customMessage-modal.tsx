"use client";



import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toolbar } from "../toolbar";
import axios from "axios";
import qs from "query-string";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Editor from "../editor";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { MessageTypes } from "@prisma/client";


type ValueTypes = {
  content: string;
  title: string;
  messageType: MessageTypes;
}

export const CustomMessageModal = () => {
  const router = useRouter();
  const { isOpen, onClose, type, data } = useModal();
  const [titleM, setTitleM] = useState<string>("Untitled");
  const [contentM, setContentM] = useState<string>(`[]`);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState<ValueTypes>({ content: "", title: "", messageType: "CUSTOM" });
  const { apiUrl, query } = data;



  const onChange = (cont: string) => {
    setContentM(cont);
  };


  const onSend = async () => {
    setIsLoading(true);
    try {
      const url = qs.stringifyUrl({
        url: apiUrl as string,
        query,
      });
      await axios.post(url, values);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
      setValues({ content: "", title: "", messageType: "CUSTOM" });
      onClose();
    }

  };



  useEffect(() => {
    setValues({ content: contentM, title: titleM, messageType: "CUSTOM" });
  }, [contentM, titleM]);

  const isModalOpen = isOpen && type === "customMessage";


  return (


    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-x-hidden overflow-y-auto max-w-[70vw] min-h-[80vh] max-h-[90vh]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Send Custom Message
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className=" h-[300px] max-h-[420px] overflow-x-hidden overflow-y-auto">
          {/* <Toolbar setTitleM={setTitleM} titleM={titleM} preview={false} /> */}
          <Editor
            onChange={onChange}
            initialContent={contentM}
          />
        </ScrollArea>

        <DialogFooter className="bg-gray-100 px-6 py-4">
          <Button variant="primary" onClick={() => onSend()} disabled={isLoading} >
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


