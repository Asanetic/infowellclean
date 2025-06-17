import { Suspense } from 'react';

import ReadlistProfile from '../uiControl/ReadlistProfile';

import { InteprateReadlistEvent } from '../dataControl/ReadlistRequestHandler';

    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Read list profile"//searchParams?.mosyTitle || "Read list";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Read list profile`,
    description: 'infowell Read list',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}
                      

export default function ReadlistMainProfilePage() {

   return (
     <>
       <div className="main-wrapper">
          <div className="page-wrapper">
             <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
                 <ReadlistProfile 
                    dataIn={{ parentUseEffectKey: "initReadlistProfile" }} 
                                           
                    dataOut={{
                       setChildDataOut: InteprateReadlistEvent
                    }}   
                    
                 />
               </Suspense>
             </div>
           </div>
         </div>
       </>
     );
}