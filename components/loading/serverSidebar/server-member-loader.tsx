import { Skeleton } from "@/components/ui/skeleton"


export const ServerMemberLoader = () => {

  
  return (
    <button
      className={"group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"}
    >
 <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className={`h-4 w-[150px]`} />
        </div>
    </div>
    </button>
  )
}