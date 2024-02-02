import { ChatInputLoader } from "./chat-input";
import { ChatMessagesLoader } from "./chat-messages";
import { ChatHeaderLoader } from "./chat-header";



const ChatLayout = async () => {


  return ( 
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeaderLoader />
        <>
          <ChatMessagesLoader          />
          <ChatInputLoader
          />
        </>
    </div>
   );
}
 
export default ChatLayout;