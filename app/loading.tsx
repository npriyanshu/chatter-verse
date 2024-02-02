import ChatLayout from "@/components/loading/chatLoader/chat-layout"
import { NavigationSidebarLoader } from "@/components/loading/navigationBarLoader/navigation-sidebarLoader"
import { ServerSidebarLoader } from "@/components/loading/serverSidebar/server-sidebar-loader"

const loading = () => {
  return (
    <div className="h-full">
    <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
      <NavigationSidebarLoader />
    </div>
    <main className="md:pl-[72px] h-full">
   
    <div className="h-full">
      <div 
      className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebarLoader  />
      </div>
      <main className="h-full md:pl-60">
    
<ChatLayout />
      </main>
    </div>
    </main>
  </div>
  )
}

export default loading