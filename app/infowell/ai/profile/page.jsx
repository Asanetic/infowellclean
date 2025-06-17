import { Suspense } from 'react';

import AssistantsProfile from '../uiControl/AssistantsProfile';

import { InteprateAssistantsEvent } from '../dataControl/AssistantsRequestHandler';

    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Assistants profile"//searchParams?.mosyTitle || "Assistants";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Assistants profile`,
    description: 'infowell Assistants',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}
                      

export default function AssistantsMainProfilePage() {

   return (
     <>
       <div className="main-wrapper">
          <div className="page-wrapper">
             <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
                 <AssistantsProfile 
                    dataIn={{ parentUseEffectKey: "initAssistantsProfile" }} 
                                           
                    dataOut={{
                       setChildDataOut: InteprateAssistantsEvent
                    }}   
                    
                 />
               </Suspense>
             </div>
           </div>
         </div>
       </>
     );
}