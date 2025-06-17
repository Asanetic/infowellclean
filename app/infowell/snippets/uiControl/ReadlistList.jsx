'use client';
//React
import { useEffect, useState ,Fragment } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

//custom utils
import { deleteUrlParam, magicTrimText, mosyUrlParam, mosyFormatDateOnly , mosyFormatDateTime} from "../../../MosyUtils/hiveUtils"

import { mosyFilterUrl } from "../../DataControl/MosyFilterEngine";


//components
import {
  MosySmartDropdownActions,
  AddNewButton,
  MosyImageViewer ,
  MosyActionButton,
  MosyGridRowOptions,
  MosyPaginationUi
} from "../../UiControl/componentControl";

import MosySnackWidget from '../../../MosyUtils/MosySnackWidget';

//data
import { loadReadlistListData, popDeleteDialog, InteprateReadlistEvent  } from '../dataControl/ReadlistRequestHandler';

//state management
import { useReadlistState } from '../dataControl/ReadlistStateManager';

import logo from '../../../img/logo/logo.png'; // outside public!

import { MosyLiveSearch } from '../../UiControl/customUI';

export default function ReadlistList({ dataIn = {}, dataOut = {} }) {
  
  //incoming data in from parent
  const {
    customQueryStr = "",
    customProfilePath="../snippets/read",
    showDataControlSections = true,
    parentUseEffectKey = "",
    parentStateSetters=null,
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
  
  const localEventSignature = stateItem.localEventSignature
  const snackMessage = stateItem.snackMessage
  const snackOnDone = stateItem.snackOnDone
  
  //use route navigation system if need be
  const router = useRouter();
  
  useEffect(() => {
    
    const snackUrlAlert = mosyUrlParam("snack_alert")
    if(snackUrlAlert)
    {
      stateItemSetters.setSnackMessage(snackUrlAlert)
    }
    
    loadReadlistListData(customQueryStr, stateItemSetters);
    
  }, [localEventSignature]);
  
  
  return (
    
    <div className="col-md-12 bg-white p-0 main_list_container  " style={{marginTop: "0px", paddingBottom: "0px"}}>
      <form method="post" onSubmit={()=>{mosyFilterUrl({tableName:"infosnippets", keyword:stateItem.readlistQuerySearchStr})}} encType="multipart/form-data">
      
      {showDataControlSections && (<div className="row justify-content-end col-md-12 text-right pt-3 pb-3 data_list_section ml-0 mr-0 mb-3 border-bottom pr-0 pl-0" id="">
        <div className="col-md-6 p-0 text-left pt-3 hive_list_title">
          <h6 className="text-muted"><b> Read list </b></h6>
        </div>
        <div className="col-md-6 p-0 text-right hive_list_search_tray">
          <input type="text" id="txt_infosnippets" name="txt_infosnippets" className="custom-search-input form-control" placeholder="Search in Read list "
          onChange={(e) => stateItemSetters.setReadlistQuerySearchStr(e.target.value)}
          />
          <button className="custom-search-botton" id="qinfosnippets_btn" name="qinfosnippets_btn" type="submit"><i className="fa fa-search mr-1"></i> Go </button>
        </div>
        <div className="col-md-12 pt-5 p-0 hive_list_search_divider" id=""></div>
        <div className="row justify-content-end m-0 p-0 col-md-12 hive_list_action_btn_tray" id="">
          <div className="col-md-5 d-none p-0 text-left hive_list_nav_left_ribbon" id="">
          </div>
          <div className="col-md-12 p-0 hive_list_nav_right_ribbon" id="">
            {/*--<navgation_buttons/>--*/}
            
            <MosyActionButton
            label=" Search by tag"
            icon="tag"
            onClick={()=>{
              MosyLiveSearch({
                api:' /api/infowell/snippets/infosnippets',
                displayField:'tag',
                tableName:'infosnippets',
                actionName : 'mosyfilter',
                title:'Search by tag',
                actionData : {path: '../snippets/readlist', router : router , qstr : `tag='{{tag}}'`, stateSetters : stateItemSetters}
              })
              
            }}
            />
            
            <MosyActionButton
            label=" Search by title"
            icon="bolt"
            onClick={()=>{
              MosyLiveSearch({
                api:' /api/infowell/snippets/infosnippets',
                displayField:'title',
                tableName:'infosnippets',
                actionName : 'mosyfilter',
                title:'Search by title',
                actionData : {path: '../snippets/readlist', router : router , qstr : `primkey='{{primkey}}'`, stateSetters : stateItemSetters}
              })
              
            }}
            />
            
            <a href="readlist" className="medium_btn border border_set btn-white hive_list_nav_refresh ml-3"><i className="fa fa-refresh mr-1 "></i> Refresh </a>
            
            <AddNewButton link={customProfilePath} label="New Note " icon="plus-circle" />
          </div>
        </div>
      </div> )}
      
      
      <div className="table-responsive  data-tables bg-white bottom_tbl_handler">
        
        <table className="table table-hover  text-left printTarget" id="infosnippets_data_table">
          <thead className="text-uppercase">
            <tr>
              <th scope="col">#</th>
              <th>Media</th>
              <th scope="col"><b>Title</b></th>
              <th scope="col"><b>Tag</b></th>
              <th scope="col"><b>Notes</b></th>
              <th scope="col"><b>Date Created</b></th>
              
            </tr>
            
          </thead>
          <tbody>
            {stateItem.readlistLoading ? (
              <tr>
                <th scope="col">#</th>
                <td colSpan="5" className="text-muted">
                  <h5 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-spinner fa-spin"></i> Loading Read list ...</h5>
                </td>
              </tr>
            ) : stateItem.readlistListData?.length > 0 ? (
              stateItem.readlistListData.map((listinfosnippets_result, index) => (
                <Fragment key={`_row_${listinfosnippets_result.primkey}`}>
                  <tr key={listinfosnippets_result.primkey}>
                    <td>
                      <div className="table_cell_dropdown">
                        <div className="table_cell_dropbtn"><b>{listinfosnippets_result.row_count}</b></div>
                        <div className="table_cell_dropdown-content">
                          <MosySmartDropdownActions
                          tblName="infosnippets"
                          setters={{
                            
                            childStateSetters: stateItemSetters,
                            parentStateSetters: parentStateSetters
                            
                          }}
                          
                          attributes={`${listinfosnippets_result.primkey}:${customProfilePath}:false`}
                          callBack={(incomingRequest) => {setChildDataOut(incomingRequest) }}
                          
                          />
                          
                        </div>
                      </div>
                    </td>
                    
                    <td>
                      <MosyImageViewer
                      media={`/api/mediaroom?media=${btoa((listinfosnippets_result.media || ""))}`}
                      mediaRoot={""}
                      defaultLogo={logo.src}
                      imageClass="small_thumbnail"
                      />
                    </td>
                    <td scope="col"><span title={listinfosnippets_result.title}>{magicTrimText(listinfosnippets_result.title, 70)}</span></td>
                    <td scope="col"><span title={listinfosnippets_result.tag}>{magicTrimText(listinfosnippets_result.tag, 70)}</span></td>
                    <td scope="col"><span title={listinfosnippets_result.notes}>{magicTrimText(listinfosnippets_result.notes, 70)}</span></td>
                    <td scope="col"><span title={listinfosnippets_result.date_created}>{mosyFormatDateOnly(listinfosnippets_result.date_created)}</span></td>
                    
                  </tr>
                  
                </Fragment>
                
              ))
              
            ) : (
              
              <tr><td colSpan="6" className="text-muted">
                
                
                <div className="col-md-12 text-center mt-4">
                  <h6 className="col-md-12 text-center p-3 mb-5 text-muted"><i className="fa fa-search"></i> Sorry, no infosnippets records found</h6>
                  
                  <AddNewButton link={customProfilePath} label="New Note " icon="plus-circle" />
                  <div className="col-md-12 pt-5 " id=""></div>
                </div>
              </td></tr>
              
            )}
          </tbody>
        </table>
        
        <MosyPaginationUi
        tblName="infosnippets"
        totalPages={stateItem.readlistListPageCount}
        stateItemSetters={stateItemSetters}
        />
      </div>
      
      
    </form>
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
    </div>
  );
  
}

