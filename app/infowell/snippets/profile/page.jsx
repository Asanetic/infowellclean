import { Suspense } from 'react';

import InfosnippetsProfile from '../uiControl/InfosnippetsProfile';

import { InteprateInfosnippetsEvent } from '../dataControl/InfosnippetsRequestHandler';

    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Info snippets profile"//searchParams?.mosyTitle || "Info snippets";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Info snippets profile`,
    description: 'infowell Info snippets',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}
                      

export default function InfosnippetsMainProfilePage() {

   return (
     <>
       <div className="main-wrapper">
          <div className="page-wrapper">
             <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
                 <InfosnippetsProfile 
                    dataIn={{ parentUseEffectKey: "initInfosnippetsProfile" }} 
                                           
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