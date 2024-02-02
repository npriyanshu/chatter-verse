import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { NavigationItemLoader } from "./navigation-itemLoader";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

export const NavigationSidebarLoader = () => {
   

  return (
   <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3"
    >
      <Plus className="group-hover:text-white transition text-emerald-500" size={25} />
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />
      <ScrollArea className="flex-1 w-full">
          <div  className="mb-4">
            <NavigationItemLoader/>
          </div>
          <div  className="mb-4">
            <NavigationItemLoader/>
          </div>
          <div  className="mb-4">
            <NavigationItemLoader/>
          </div>
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    </div>  )
}