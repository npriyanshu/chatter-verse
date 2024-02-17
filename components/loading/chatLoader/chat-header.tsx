import { Skeleton } from "@/components/ui/skeleton";
import { Hash } from "lucide-react";


export const ChatHeaderLoader = () => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />  
        <Skeleton className="h-8 w-8 md:h-8 md:w-8 mr-3"
        />
    
      <Skeleton className=" h-4 w-6 md:h-2 md:w-4 dark:text-white" />
       
    </div>
  )
}