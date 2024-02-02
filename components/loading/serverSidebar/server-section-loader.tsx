import { Skeleton } from "../../ui/skeleton";



export const ServerSectionLoader = () => {

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
<Skeleton className=" h-2 w-[100px]" />
      </p>
    </div>
  )
}