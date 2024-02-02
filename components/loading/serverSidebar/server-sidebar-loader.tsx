
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ServerHeaderLoader } from "./server-header-loader";
import { ServerSearchLoader } from "./server-search-loader";
import { ServerSectionLoader } from "./server-section-loader";
import { ServerChannelLoader } from "./server-channel-loader";
import { ServerMemberLoader } from "./server-member-loader";



export const ServerSidebarLoader = () => {

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeaderLoader/>
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearchLoader/>
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
          <div className="mb-2">
            <ServerSectionLoader
                          />
            <div className="space-y-[2px]">
                <ServerChannelLoader
                    />
            </div>
          </div>
          <div className="mb-2">
            <ServerSectionLoader/>
            <div className="space-y-[2px]">
                <ServerChannelLoader/>
            </div>
          </div>
          <div className="mb-2">
            <ServerSectionLoader/>
            <div className="space-y-[2px]">
                <ServerChannelLoader/>
            </div>
          </div>
          <div className="mb-2">
            <ServerSectionLoader/>
            <div className="space-y-[2px]">
                <ServerMemberLoader />
                <ServerMemberLoader />
                <ServerMemberLoader />
            </div>
          </div>
  
      </ScrollArea>
    </div>
  )
}