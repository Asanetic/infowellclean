import { Suspense } from 'react';

import ReadlistList from '../uiControl/ReadlistList';

import { InteprateReadlistEvent } from '../dataControl/ReadlistRequestHandler';
    
export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Read list"//searchParams?.mosyTitle || "Read list";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Read list`,
    description: 'infowell Read list',
    
    icons: {
      icon: "/logo.png"
    },    
  };
}

export default function ReadlistMainListPage() {

return (
        <>
         <div className="main-wrapper">
           <div className="page-wrapper">
              <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
               
                    <ReadlistList  
                    
                     dataIn={{ parentUseEffectKey: "loadReadlistList" }}
                       
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