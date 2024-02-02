import { 
  DropdownMenu, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
export const ServerHeaderLoader = () => {
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus:outline-none" 
        asChild
      >
        <button
          className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        >
          <Skeleton className=" h-4 w-[200px]" />
        </button>
      </DropdownMenuTrigger>
    
    </DropdownMenu>
  )
}