import { closeMosyCard } from "../../components/MosyCard";
import { MosyNotify, MosySnackWidget } from "../../MosyUtils/ActionModals";
import { mosyGetLSData, mosySetLSData } from "../../MosyUtils/hiveUtils";
import { MosyLiveSearch } from "./customUI";

export function syncWorkSchedule()
{
    //MosyNotify({message :"Holla"})
    MosyLiveSearch()
}


export async function chatWithGPT(userMessage = "") {
    try {

      const threadId = mosyGetLSData("info_chat_thread_id")
      const activeAgentId = mosyGetLSData("active_info_agent_id")

      
        ///MosySnackWidget({content :"Sending request..."})

      const res = await fetch("/api/infowell/smartassistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage , thread_id : threadId, agentId: activeAgentId}),
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch GPT response");
      }

      //closeMosyCard()

      const data = await res.json();
                        
      mosySetLSData("info_chat_thread_id", data.thread_id)
      
      return data.reply;
      
    } catch (error) {
      console.error("Chat error:", error.message);
      return `⚠️ Chat failed. ${error.message}`;
    }
  }
  