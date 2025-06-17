import { Suspense } from 'react';

import InfosnippetsProfile from '../snippets/uiControl/InfosnippetsProfile';

import { InteprateInfosnippetsEvent } from '../snippets/dataControl/InfosnippetsRequestHandler';

import ChatHolder from './ChatHolder'

import { MosySpace, MosyTitleTag }  from '../UiControl/componentControl'
    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Info well smart chat"//searchParams?.mosyTitle || "Info snippets";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Info snippets profile`,
    description: 'infowell Info snippets',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}
                      

export default function smartChatParent() {

   return (
     <>
       <div className="main-wrapper">
          <div className="page-wrapper">
             <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
               <div className="col-md-12 row justify-content-center p-0 m-0 rounded text-left ">
               <div className="col-md-8 rounded text-left p-0  mb-0 bg-white ">
               <MosyTitleTag title='Smart chat'/>
                 <ChatHolder/>
                </div>
                </div>
                <MosySpace className="border-top m-3 border_set"/>
                 <InfosnippetsProfile 
                    dataIn={{ parentUseEffectKey: "initInfosnippetsProfile", showNavigationIsle : false }} 
                                           
                    dataOut={{
                       setChildDataOut: InteprateInfosnippetsEvent
                    }}   
                    
                 />
               </Suspense>
             </div>
           </div>
         </div>
       </>
     );
}