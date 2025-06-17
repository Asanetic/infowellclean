'use client';

//React
import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
import ReactMarkdown from "react-markdown";

//components
import { MosyNotify ,closeMosyModal } from  "../../../MosyUtils/ActionModals";

import MosySnackWidget from '../../../MosyUtils/MosySnackWidget';

//basic utils
import { mosyScrollTo , deleteUrlParam, mosyFormInputHandler,mosyUrlParam , mosyNl2br } from '../../../MosyUtils/hiveUtils';

//data control and processors
import { inteprateReadlistFormAction, readlistProfileData , popDeleteDialog, InteprateReadlistEvent } from '../dataControl/ReadlistRequestHandler';

//state management
import { useReadlistState } from '../dataControl/ReadlistStateManager';


import  ReadlistList from './ReadlistList';


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

import {UserProfileCard} from '../../../components/ProfileLayout'


export default function ReadlistProfile({ dataIn = {}, dataOut = {} }) {
  
  //initiate data exchange manifest
  //incoming data from parent
  const {
    showNavigationIsle = true,
    customQueryStr = "",
    parentUseEffectKey = "",
    parentStateSetters=null,
    customProfileData={},
    hostParent="ReadlistMainProfilePage"
  } = dataIn;
  
  //outgoing data to parent
  const {
    setChildDataOut = () => {},
    setChildDataOutSignature = () => {},
  } = dataOut;
  
  
  //set default state values
  const settersOverrides  = {localEventSignature : parentUseEffectKey}
  
  //manage Readlist states
  const [stateItem, stateItemSetters] = useReadlistState(settersOverrides);
  const infosnippetsNode = stateItem.readlistNode
  
  // -- basic states --//
  const paramReadlistUptoken  = stateItem.readlistUptoken
  const readlistActionStatus = stateItem.readlistActionStatus
  const snackMessage = stateItem.snackMessage
  //const snackOnDone = stateItem.snackOnDone
  
  const localEventSignature = stateItem.localEventSignature
  
  const handleInputChange = mosyFormInputHandler(stateItemSetters.setReadlistNode);
  
  //use route navigation system
  const router = useRouter();
  
  //manage post form
  function postReadlistFormData(e) {
    
    MosyNotify({message: "Sending request",icon:"send"})
    
    inteprateReadlistFormAction(e, stateItemSetters).then(response=>{
      
      setChildDataOut({
        
        actionName : response.actionName,
        dataToken : response.newToken,
        actionsSource : "postReadlistFormData",
        setters :{
          
          childStateSetters: stateItemSetters,
          parentStateSetters: parentStateSetters
          
        }
        
      })
      
      mosyScrollTo("ReadlistProfileTray")
      closeMosyModal()
      
    })
    
  }
  
  useEffect(() => {
    
    readlistProfileData(customQueryStr, stateItemSetters, router, customProfileData)
    
    mosyScrollTo("ReadlistProfileTray")
    
    
  }, [localEventSignature]);
  
  
  
  //child queries use effect
  
  
  
  return (
    
    <div className="p-0 col-md-12 text-center row justify-content-center m-0  " id="ReadlistProfileTray">
      {/* ================== Start Feature Section========================== ------*/}
      
      
      <div className="col-md-11 rounded text-left p-2 mb-0  bg-white ">
        <form onSubmit={postReadlistFormData} encType="multipart/form-data" id="infosnippets_profile_form">
          
          <div className="row justify-content-center m-0 p-0 col-md-12" id="">
            
            <UserProfileCard
            navigationIsle={<div className='row justify-content-center col-md-12 m-0 p-0'>
              {/*    Navigation isle      */}
              <>{showNavigationIsle && (<div className="row justify-content-end m-0 p-0 col-md-12  p-3 bg-white hive_profile_navigation " id="">
                <div className="col-md-4 text-left p-0 hive_profile_nav_back_to_list_tray" id="">
                  
                  <Link href="./readlist" className="text-info hive_profile_nav_back_to_list"><i className="fa fa-arrow-left"></i> Back to list</Link>
                  
                </div>
                <div className="col-md-8 p-0 text-right hive_profile_nav_add_new_tray" id="">
                  
                  
                  {paramReadlistUptoken && (
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
                        actionData : {path: '../snippets/read', router : router , token : `{{primkey}}`, stateSetters : stateItemSetters , actionName:`load_profile`}
                      })
                      
                    }}
                    />
                  </>
                )}
                
                
                {paramReadlistUptoken && (
                  <button
                  type="button"
                  className="medium_btn border border-danger text-danger p-2 ml-3 mb-3 hive_profile_nav_del_btn"
                  onClick={() =>popDeleteDialog(paramReadlistUptoken, {childStateSetters: stateItemSetters, parentStateSetters: parentStateSetters} , router)}
                  
                  >
                  <i className='fa fa-trash'></i> Delete
                </button>)}
                
                
              </div>
            </div>)}</>
            <div className="col-md-12 pt-4 p-0 hive_profile_navigation_divider d-lg-none" id=""></div>
            {/*    Navigation isle      */}</div>}
            profileTitle={<div className='row justify-content-center col-md-12 m-0 p-0'>
              {/*    Title isle      */}
              <div className="col-md-12 pt-4 p-0 hive_profile_title_top d-lg-none" id=""></div>
              <h3 className="col-md-12 title_text text-left p-0 pt-3 hive_profile_title row justify-content-center m-0 ">
                <div className="col m-0 p-0 pb-3">
                  {infosnippetsNode?.primkey ? (  <span> Note / {infosnippetsNode?.tag || ""} / {infosnippetsNode?.title || ""}</span> ) :(<span> New Note </span>)}
                </div>
                <>{!showNavigationIsle && (<div className="col m-0 p-0 text-right ">
                  
                  {paramReadlistUptoken && (
                    <button
                    type="button"
                    className="medium_btn border border-danger text-danger p-2 ml-3 mb-3 hive_profile_nav_del_btn"
                    onClick={() =>popDeleteDialog(paramReadlistUptoken, {childStateSetters: stateItemSetters, parentStateSetters: parentStateSetters} )}
                    
                    >
                    <i className='fa fa-trash'></i> Delete
                  </button>)}
                  
                </div>)}</>
              </h3>
              {/*    Title isle      */}
              
            </div>}
            profilePic={`/api/mediaroom?media=${btoa(infosnippetsNode?.media || 'logo.png')}`}
            profileUploadBtn={<div className='p-3'></div>}
              mainContent={<div className='row justify-content-center col-md-12 m-0 p-0'>
                
                
                <div className="col-md-12 row justify-content-center m-0  p-0">
                  {/*    Input cells section isle      */}
                  <div className="col-md-12 row p-0 justify-content-center p-0 m-0">
                    <div className="col-md-12 row justify-content-center p-0 m-0">
                      <div className="col-md-12 row p-0 justify-content-center p-0 m-0">
                        
                        {infosnippetsNode?.primkey && (
                          <div className="form-group col-md-6 hive_data_cell  ">
                            <label >Title</label>
                            <div className="border border_set p-2 rounded_medium form-control pt-3" id="div_title" name="div_title" placeholder="Title">{infosnippetsNode?.title || ""}</div>
                          </div>)}
                          
                          {infosnippetsNode?.primkey && (
                            <div className="form-group col-md-6 hive_data_cell  ">
                              <label >Tag</label>
                              <div className="border border_set p-2 rounded_medium form-control pt-3" id="div_tag" name="div_tag" placeholder="Tag">{infosnippetsNode?.tag || ""}</div>
                            </div>)}
                            
                            {infosnippetsNode?.primkey && (
                              <div className="form-group col-md-12 hive_data_cell  ">
                                <label >Notes</label>
                                <div className="border border_set p-2 rounded_medium f pt-3" 
                                id="div_notes" name="div_notes" placeholder="Notes"><ReactMarkdown>{(infosnippetsNode?.notes || "")}</ReactMarkdown></div>
                              </div>)}
                              

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
                            
                            
                            <div className="col-md-12 text-center d-none">
                              <SubmitButtons tblName="infosnippets" extraClass="optional-custom-class" />
                            </div>
                          </div></div>
                          {/*    Input cells section isle      */}
                        </div>
                        
                        <section className="hive_control">
                          <input type="hidden" id="infosnippets_uptoken" name="infosnippets_uptoken" value={paramReadlistUptoken}/>
                          <input type="hidden" id="infosnippets_mosy_action" name="infosnippets_mosy_action" value={readlistActionStatus}/>
                        </section>
                        
                      </div>}
                      />
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
                      
                      <ReadlistList
                      key={`${customQueryStr}-${localEventSignature}`}
                      dataIn={{
                        parentStateSetters : stateItemSetters,
                        parentUseEffectKey : localEventSignature,
                        showNavigationIsle:false,
                        customQueryStr : btoa(`where tag ='${infosnippetsNode?.tag}' order by primkey desc `),
                        customProfilePath:""
                        
                      }}
                      
                      dataOut={{
                        setChildDataOut: InteprateReadlistEvent,
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
                {infosnippetsNode?.primkey && (
                  <section className="col-md-12 m-0 bg-white pt-5 p-0 ">
                    <h5 className="col-md-12 text-left  border-bottom pl-lg-1 text-muted mb-3"> {`More Notes`} </h5>
                    
                    <div className="col-md-12 p-2 text-right ">
                      <a href={`../snippets/list?infosnippets_mosyfilter`} className="cpointer"> View More  <i className="fa fa-arrow-right "></i></a>
                    </div>
                    
                    <ReadlistList
                    key={`${customQueryStr}-${localEventSignature}`}
                    dataIn={{
                      parentStateSetters : stateItemSetters,
                      parentUseEffectKey : localEventSignature,
                      showNavigationIsle:false,
                      customQueryStr : '',
                      customProfilePath:""
                      
                    }}
                    
                    dataOut={{
                      setChildDataOut: InteprateReadlistEvent,
                      setChildDataOutSignature: (sig) => console.log("Signature changed:", sig),
                    }}
                    />
                  </section>
                )}
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
        
