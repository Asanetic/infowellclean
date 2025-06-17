"use client";
import { SmartChatUI } from "../UiControl/customUI";

export default function Chatui()
{
    return (
        <>            
        <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="InfosnippetsProfileTray">
            {/* ================== Start Feature Section========================== ------*/}
                    
            <div className="col-md-11 rounded text-left p-2 mb-0 bg-white ">
                <SmartChatUI/>
            </div>
          </div>
        </>
    )
}