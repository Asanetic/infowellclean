import { LiveSearchDropdown } from "./componentControl"
import { closeMosyCard, MosyCard } from "../../components/MosyCard";

import { magicRandomStr, mosyDeleteLSData, mosySetLSData, mosyGetLSData } from "../../MosyUtils/hiveUtils";
import { MosyNotify } from "../../MosyUtils/ActionModals";
import { chatWithGPT } from "./customFunctions";

//dynamic live search / organic live search 
export function MosyLiveSearch({
    api = "",
    tableName = "",
    displayField = "",
    valueField = "",
    actionName = "",
    actionData = {},
    title = "Search",
    onSelectFull = () => {},
  }) {
    let finalValeField = valueField || displayField;
  
    function handleOnSelect(dataRes) {
      // Call full payload regardless

      console.log(`Live search `, actionData , dataRes , actionName)
      onSelectFull(dataRes);
  
      // Perform mosyfilter logic
      if (actionName === "mosyfilter") {
        const router = actionData?.router;
        const qstrTemplate = actionData?.qstr || "";
        const stateSetters = actionData?.stateSetters
  
        // 💡 Replace placeholders like {{record_id}} with values from dataRes
        const newQstr = qstrTemplate.replace(/{{(.*?)}}/g, (match, fieldName) => {
          return (dataRes?.[fieldName] || "");
        });
        //console.log(`Live search `, newQstr , )

        // 🌐 Redirect with updated query string
        if (router && newQstr) {
            //router.push(`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`);
            window.location=`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`;
            stateSetters.setLocalEventSignature(magicRandomStr())
          closeMosyCard()
        }

        //customEventHandler(actionData)
      }

      if (actionName === "load_profile") {
        const router = actionData?.router;
        const qstrTemplate = actionData?.token || "";
        const stateSetters = actionData?.stateSetters
  
        // 💡 Replace placeholders like {{record_id}} with values from dataRes
        const newQstr = qstrTemplate.replace(/{{(.*?)}}/g, (match, fieldName) => {
          return (dataRes?.[fieldName] || "");
        });
  
        // 🌐 Redirect with updated query string
        if (router && newQstr) {
            //router.push(`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`);
            window.location=`${actionData?.path}?${tableName}_uptoken=${btoa(newQstr)}`;
            stateSetters.setLocalEventSignature(magicRandomStr())
          closeMosyCard()
        }

       / //customEventHandler(actionData)
      }      
    }
  
    // Render your card and LiveSearchDropdown
    MosyCard(
      "",
      <>
        <div className="col-md-12 text-left h4 m-0 pt-2 pl-0 pr-0 pb-2">
          <span className="m-0 p-0 label_text">{title}</span>
        </div>
  
        <LiveSearchDropdown
          apiEndpoint={api}
          tblName={tableName}
          inputName="qdata"
          hiddenInputName="qdataInput"
          valueField={finalValeField}
          displayField={displayField}
          label=""
          onSelect={(id) => console.log("Just the ID:", id)}
          onSelectFull={handleOnSelect}
          defaultColSize="col-md-12 hive_data_cell text-left m-0 p-0"
          context={{ hostParent: "hostParent" }}
          labelClassName="d-none"
        />
      </>
    );
  }
  
  export function loadSmartSearch() {
    MosyCard(
      "",
      <SmartChatUI/>
    );
  }

  export function SmartChatUI(newChat=true)
  {

    const responseBoxId = "qchat_response_box";
    const inputId = "txt_qchat";

    if(newChat){
     mosyDeleteLSData("info_chat_thread_id")
    }

   const chatAgent = mosyGetLSData("active_info_agent_name","Infowell")


    return (<>
      <div className="col-md-12 text-left h4 m-0 p-0">
        <span className="m-0 p-0 label_text">Agent : {chatAgent}</span>
      </div>

      {/* Response/chat bubbles area */}
      <div
          className="col-md-12 chat-box  mb-3 rounded cpointer"
          style={{ height: "300px", overflowY: "auto"}}
          id={responseBoxId}
          onClick={() => {
            const chatContent = document.getElementById(responseBoxId).innerText;
            navigator.clipboard.writeText(chatContent);
            alert("✅ Entire chat copied!");
          }}
        >
        </div>


      {/* Chat input at bottom */}
      <div className="col-md-12 d-flex align-items-end">
        <textarea
          className="form-control"
          id={inputId}
          style={{ resize: "none", minHeight : "100px" }}
          placeholder="Whats on your mind"
        ></textarea>

        <button
          className="btn ml-2 border pl-3 pr-3 btn-primary"
          style={{
            position: "absolute",
            bottom: "5px",
            right: "15px"
          }}
          onClick={async (event) => {
            const input = document.getElementById(inputId).value.trim();
            const responseBox = document.getElementById(responseBoxId);
            const goBtn = event.currentTarget;

            if (!input) return;

            // Show thinking bubble
            responseBox.innerHTML += `
              <div class="gpt-bubble-wrapper mt-3">
                <div class="user-bubble text-right">You : <br><br>**${input}** <br><br></div>
                <div class="gpt-bubble text-left mt-2"><i class='fa fa-spinner fa-spin'></i> Thinking...</div>
              </div>
            `;
            document.getElementById(inputId).value = "";
            responseBox.scrollTop = responseBox.scrollHeight;


            try {
              const reply = await chatWithGPT(input);
              const formattedReply = reply.replace(/(?:\r\n|\r|\n)/g, "<br>");
              
              // Replace spinner with actual reply
              const allBubbles = responseBox.querySelectorAll(".gpt-bubble");
              const lastBubble = allBubbles[allBubbles.length - 1];
              lastBubble.innerHTML = `SC : ${formattedReply}<br><br>`;
              lastBubble.setAttribute("title", "Click to copy");

              // Copy-to-clipboard support
              lastBubble.onclick = () => {
                navigator.clipboard.writeText(reply);
                lastBubble.innerHTML += `<div class="text-success small mt-2">✅ Copied!</div>`;
              };
            } catch (err) {
              const allBubbles = responseBox.querySelectorAll(".gpt-bubble");
              const lastBubble = allBubbles[allBubbles.length - 1];
              lastBubble.innerHTML = `<span class="text-danger">❌ GPT error: ${err.message}</span>`;
            }

            responseBox.scrollTop = responseBox.scrollHeight;
          }}
        >
          <i className="fa fa-paper-plane fa-x2"></i>
        </button>
      </div>
    </>)
  }

  export function activateAssistant({agentId ="", agentName=""})
  {
    mosySetLSData("active_info_agent_id", agentId)
    mosySetLSData("active_info_agent_name", agentName)

    MosyNotify({message : `Agent ${agentName} activated`, icon:"check-circle", iconColor : "text-success"})      

  }
  