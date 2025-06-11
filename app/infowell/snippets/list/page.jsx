import { Suspense } from 'react';

import InfosnippetsList from '../uiControl/InfosnippetsList';

import { InteprateInfosnippetsEvent } from '../dataControl/InfosnippetsRequestHandler';
    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Info snippets"//searchParams?.mosyTitle || "Info snippets";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Info snippets`,
    description: 'infowell Info snippets',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}

export default function InfosnippetsMainListPage() {

return (
        <>
         <div className="main-wrapper">
           <div className="page-wrapper">
              <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
               
                    <InfosnippetsList  
                    
                     dataIn={{ parentUseEffectKey: "loadInfosnippetsList" }}
                       
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