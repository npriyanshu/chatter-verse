import { Skeleton } from "../../ui/skeleton"

export const ServerChannelLoader = ( ) => {


  return (
    <button
      className={"group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"}
    >
      <p className={"line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition" }>
        <Skeleton className="h-5 w-[200px]" />
      </p>
 
    </button>
  )
}