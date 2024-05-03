import {ChevronsDown} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const ChatHadderToggle = ({
    channelId
}: {
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
        <div className="h-[70vh]">
        
        {/* important Messages   */}
        </div>
        
      </SheetContent>
    </Sheet>
  )
}