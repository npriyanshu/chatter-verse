
import { Skeleton } from "@/components/ui/skeleton";
export const NavigationItemLoader = () => {
  return (
    
      <button
        className="group relative flex items-center"
      >
        <div className={
          "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"} />
        <div className={
          "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden"}>
      <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </button>
  )
}