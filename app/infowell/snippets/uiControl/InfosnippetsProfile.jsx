'use client';

//React
import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

//components
import { MosyAlertCard, MosyNotify ,closeMosyModal } from  "../../../MosyUtils/ActionModals";

import MosySnackWidget from '../../../MosyUtils/MosySnackWidget';

//basic utils
import { mosyScrollTo , deleteUrlParam, mosyFormInputHandler,mosyUrlParam  } from '../../../MosyUtils/hiveUtils';

//data control and processors
import { inteprateInfosnippetsFormAction, infosnippetsProfileData , popDeleteDialog, InteprateInfosnippetsEvent } from '../dataControl/InfosnippetsRequestHandler';

//state management
import { useInfosnippetsState } from '../dataControl/InfosnippetsStateManager';

import logo from '../../../img/logo/logo.png'; // outside public!

import  InfosnippetsList from './InfosnippetsList';

import {
  SubmitButtons,
  AddNewButton,
  LiveSearchDropdown,
  MosySmartField,
  MosyActionButton,
  SmartDropdown,
  MosyImageViewer,
  MosyFileUploadButton
} from '../../UiControl/componentControl';
import { MosyLiveSearch , loadSmartSearch  } from '../../UiControl/customUI';



export default function InfosnippetsProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="InfosnippetsMainProfilePage"
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey}
  
  //manage Infosnippets states
  const [stateItem, stateItemSetters] = useInfosnippetsState(settersOverrides);
  const infosnippetsNode = stateItem.infosnippetsNode
  
  // -- basic states --//
  const paramInfosnippetsUptoken  = stateItem.infosnippetsUptoken
  const infosnippetsActionStatus = stateItem.infosnippetsActionStatus
  const snackMessage = stateItem.snackMessage
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setInfosnippetsNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postInfosnippetsFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateInfosnippetsFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postInfosnippetsFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      mosyScrollTo("InfosnippetsProfileTray")
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    infosnippetsProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo("InfosnippetsProfileTray")
    
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="InfosnippetsProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-11 rounded text-left p-2 mb-0  bg-white ">
        <div className="col-md-12 p-2 pr-lg-4 pl-lg-4 m-0">
          <form onSubmit={postInfosnippetsFormData} encType="multipart/form-data" id="infosnippets_profile_form">
            
            {/*    Title isle      */}
            <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
            <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
              <div className="col m-0 p-0 pb-3">
                {infosnippetsNode?.primkey ? (  <span> Note / {infosnippetsNode?.tag || ""} / {infosnippetsNode?.title || ""}</span> ) :(<span> New Note </span>)}
              </div>
              <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                
                {paramInfosnippetsUptoken && (
                  <button
                  type="button"
                  className="medium_btn border border-danger text-danger p-2 ml-3 mb-3 hive_profile_nav_del_btn"
                  onClick={() =>popDeleteDialog(paramInfosnippetsUptoken, {childStateSetters: stateItemSetters, parentStateSetters: parentStateSetters} )}
                  
                  >
                  <i className='fa fa-trash'></i> Delete
                </button>)}
                
              </div>)}</>
            </h3>
            {/*    Title isle      */}
            
            
            
            {/*    Navigation isle      */}
            <>{showNavigationIsle && (<div className="row justify-content-end m-0 p-0 col-md-12  p-3 bg-white hive_profile_navigation " id="">
              <div className="col-md-4 text-left p-0 hive_profile_nav_back_to_list_tray" id="">
                
                <Link href="./list" className="text-info hive_profile_nav_back_to_list"><i className="fa fa-arrow-left"></i> Back to list</Link>
                
              </div>
              <div className="col-md-8 p-0 text-right hive_profile_nav_add_new_tray" id="">
                
                
                {paramInfosnippetsUptoken && (
                  <>
                  
                  <MosyActionButton
                  label=" Find notes"
                  icon="copy"
                  onClick={()=>{
                    MosyLiveSearch({
                      api:' /api/infowell/snippets/infosnippets',
                      displayField:'title',
                      tableName:'infosnippets',
                      actionName : 'load_profile',
                      title:'Search by title',
                      actionData : {path: '../snippets/profile', router : router , token : `{{primkey}}`, stateSetters : stateItemSetters , actionName:`load_profile`}
                    })
                    
                  }}
                  />
                  
                  <MosyActionButton
                  label=" Smart search"
                  icon="bolt"
                  onClick={()=>{loadSmartSearch()}}
                  />
                  
                </>
              )}
              
              
              {paramInfosnippetsUptoken && (
                <button
                type="button"
                className="medium_btn border border-danger text-danger p-2 ml-3 mb-3 hive_profile_nav_del_btn"
                onClick={() =>popDeleteDialog(paramInfosnippetsUptoken, {childStateSetters: stateItemSetters, parentStateSetters: parentStateSetters} , router)}
                
                >
                <i className='fa fa-trash'></i> Delete
              </button>)}
              
              {paramInfosnippetsUptoken && (
                
                <AddNewButton link="./profile" label="New Note " icon="plus-circle" />
                
              )}
              
            </div>
          </div>)}</>
          <div className="col-md-12 pt-4 p-0 hive_profile_navigation_divider d-lg-none" id=""></div>
          {/*    Navigation isle      */}
          <div className="row justify-content-center m-0 p-0 col-md-12" id="">
            {/*    Image section isle      */}
            
            <div className="col-md-6 mr-lg-5">
              
              <div className="col-md-12 p-0 text-center mb-3">
                <div className="col-md-12 m-2"><b>Media</b></div>
                <MosyImageViewer
                media={`/api/mediaroom?media=${btoa((infosnippetsNode?.media || ""))}`}
                mediaRoot={""}
                defaultLogo={logo.src}
                imageClass="rounded_avatar"
                />
                
                <MosyFileUploadButton
                tblName="infosnippets"
                attribute="media"
                />
                <input type="hidden" name="media_infosnippets_media" value={infosnippetsNode?.media || ""}/>
              </div>
              
              
            </div>
            {/*    Image section isle      */}
            
            {/*  //-------------    main content starts here  ------------------------------ */}
            
            
            
            <div className="col-md-12 row justify-content-center m-0  p-0">
              {/*    Input cells section isle      */}
              <div className="col-md-12 row p-0 justify-content-center p-0 m-0">
                <div className="col-md-12 row justify-content-center p-0 m-0">
                  <div className="col-md-12 row p-0 justify-content-center p-0 m-0">
                    
                    <MosySmartField
                    module="infosnippets"
                    field="title"
                    label="Title"
                    value={infosnippetsNode?.title || ""}
                    onChange={handleInputChange}
                    context={{ hostParent: hostParent  }}
                    inputOverrides={{}}
                    type="text"
                    cellOverrides={{additionalClass: "col-md-6 hive_data_cell "}}
                    />
                    
                    
                    <div className="form-group col-md-6 hive_data_cell ">
                      <label className="d-none">Tag</label>
                      
                      <SmartDropdown
                      apiEndpoint="/api/infowell/snippets/infosnippets"
                      idField="primkey"
                      labelField="tag"
                      inputName="txt_tag"
                      label="Tag"
                      onSelect={(val) => console.log('Selected:', val)}
                      defaultValue={infosnippetsNode?.tag || ""}
                      />
                    </div>
                    
                    
                    <MosySmartField
                    module="infosnippets"
                    field="notes"
                    label="Notes"
                    value={infosnippetsNode?.notes || ""}
                    onChange={handleInputChange}
                    context={{ hostParent: hostParent  }}
                    inputOverrides={{}}
                    type="textarea"
                    cellOverrides={{additionalClass: "col-md-12 hive_data_cell"}}
                    />
                    
                    
                    <MosySmartField
                    module="infosnippets"
                    field="date_created"
                    label="Date Created"
                    value={infosnippetsNode?.date_created || ""}
                    onChange={handleInputChange}
                    context={{ hostParent: hostParent  }}
                    inputOverrides={{}}
                    type="date"
                    cellOverrides={{additionalClass: "col-md-6 hive_data_cell "}}
                    />
                    
                  </div>
                  
                  <div className="col-md-12 text-center">
                    <SubmitButtons tblName="infosnippets" extraClass="optional-custom-class" />
                  </div>
                </div></div>
                {/*    Input cells section isle      */}
              </div>
              
              <section className="hive_control">
                <input type="hidden" id="infosnippets_uptoken" name="infosnippets_uptoken" value={paramInfosnippetsUptoken}/>
                <input type="hidden" id="infosnippets_mosy_action" name="infosnippets_mosy_action" value={infosnippetsActionStatus}/>
              </section>
              
              
            </div>
            
          </form>
          
          
          <div className="row justify-content-center m-0 pr-lg-1 pl-lg-1 pt-0 col-md-12" id="">
            {/*<hive_mini_list/>*/}
            
            
            
            <style jsx global>{`
            .data_list_section {
              display: none;
            }
            .bottom_tbl_handler{
              padding-bottom:70px!important;
            }
            `}
          </style>
          {infosnippetsNode?.primkey && (
            <section className="col-md-12 m-0 bg-white pt-5 p-0 ">
              <h5 className="col-md-12 text-left  border-bottom pl-lg-1 text-muted mb-3"> {`Related ${infosnippetsNode?.tag} Notes`} </h5>
              
              <div className="col-md-12 p-2 text-right ">
                <a href={`../snippets/list?infosnippets_mosyfilter=${btoa(`tag ='${infosnippetsNode?.tag}' order by primkey desc `)}`} className="cpointer"> View More  <i className="fa fa-arrow-right "></i></a>
              </div>
              
              <InfosnippetsList
              key={`${customQueryStr}-${localEventSignature}`}
              dataIn={{
                parentStateSetters : stateItemSetters,
                parentUseEffectKey : localEventSignature,
                showNavigationIsle:false,
                customQueryStr : btoa(`where tag ='${infosnippetsNode?.tag}' order by primkey desc `),
                customProfilePath:""
                
              }}
              
              dataOut={{
                setChildDataOut: InteprateInfosnippetsEvent,
                setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
              }}
              />
            </section>
          )}
          
          <style jsx global>{`
          .data_list_section {
            display: none;
          }
          .bottom_tbl_handler{
            padding-bottom:70px!important;
          }
          `}
        </style>
        
          <section className="col-md-12 m-0 bg-white pt-5 p-0 ">
            <h5 className="col-md-12 text-left  border-bottom pl-lg-1 text-muted mb-3"> {`More Notes`} </h5>
            
            <div className="col-md-12 p-2 text-right ">
              <a href={`../snippets/list?infosnippets_mosyfilter`} className="cpointer"> View More  <i className="fa fa-arrow-right "></i></a>
            </div>
            
            <InfosnippetsList
            key={`${customQueryStr}-${localEventSignature}`}
            dataIn={{
              parentStateSetters : stateItemSetters,
              parentUseEffectKey : localEventSignature,
              showNavigationIsle:false,
              customQueryStr : '',
              customProfilePath:""
              
            }}
            
            dataOut={{
              setChildDataOut: InteprateInfosnippetsEvent,
              setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
            }}
            />
          </section>
        
      </div>
    </div>
  </div>
  
  
  {/* snack notifications -- */}
  {snackMessage &&(
    <MosySnackWidget
    content={snackMessage}
    duration={5000}
    type="custom"
    onDone={() => {
      stateItemSetters.setSnackMessage("");
      stateItem.snackOnDone(); // Run whats inside onDone
      deleteUrlParam("snack_alert")
    }}
    
    />)}
    {/* snack notifications -- */}
    
    
    {/* ================== End Feature Section========================== ------*/}
  </div>
  
);

}

