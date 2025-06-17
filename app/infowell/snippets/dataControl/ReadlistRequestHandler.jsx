'use client';

//data utils
import { mosyPostFormData, mosyGetData, mosyUrlParam, mosyUpdateUrlParam , deleteUrlParam, magicRandomStr, mosyGetLSData  } from '../../../MosyUtils/hiveUtils';

//components
import { MosyNotify , closeMosyModal, MosyAlertCard } from '../../../MosyUtils/ActionModals';

//generate data filter 
import { MosyFilterEngine } from '../../DataControl/MosyFilterEngine';

//custom event manager 
import { customEventHandler } from '../../DataControl/customDataFunction';

export async function insertReadlist() {
 //console.log(`Form infosnippets insert sent `)

  return await mosyPostFormData({
    formId: 'infosnippets_profile_form',
    url: '/api/infowell/snippets/readlist',
    method: 'POST',
    isMultipart: true,
  });
}

export async function updateReadlist() {

  //console.log(`Form infosnippets update sent `)

  return await mosyPostFormData({
    formId: 'infosnippets_profile_form',
    url: '/api/infowell/snippets/readlist',
    method: 'POST',
    isMultipart: true,
  });
}


 
export async function inteprateReadlistFormAction(e, setters) {
  e.preventDefault();

  const form = e.target;
  const formDataObj = new FormData(form);
  const actionType = formDataObj.get('infosnippets_mosy_action');
 
 //console.log(`Form infosnippets submission received action : ${actionType}`)

  try {
    let result = null;
    let actionMessage ='Record added succesfully!';

    if (actionType === 'add_infosnippets') {

      actionMessage ='Record added succesfully!';

      result = await insertReadlist();
    }

    if (actionType === 'update_infosnippets') {

      actionMessage ='Record updated succesfully!';

      result = await updateReadlist();
    }

    if (result?.status === 'success') {
      
      const infosnippetsUptoken = btoa(result.infosnippets_uptoken || '');

      //set id key
      setters.setReadlistUptoken(infosnippetsUptoken);
      
      //update url with new infosnippetsUptoken
      mosyUpdateUrlParam('infosnippets_uptoken', infosnippetsUptoken)

      setters.setReadlistActionStatus('update_infosnippets')
    
      setters.setSnackMessage(actionMessage);

      return {
        status: 'success',
        message: actionMessage,
        newToken: infosnippetsUptoken,
        actionName : actionType,
        actionType : 'infosnippets_form_submission'
      };
            
      
    } else {
      MosyNotify({message:"A small error occured. Kindly try again", iconColor :'text-danger'})
      
      return {
        status: 'error',
        message: result,
        actionName: actionType,
        newToken: null
      };
      
    }

  } catch (error) {
    console.error('Form error:', error);
    
    MosyNotify({message:`A small error occured.  ${error}`, iconColor :'text-danger'})
    
      return {
        status: 'error',
        message: result,
        actionName: actionType,
        newToken: null
      };
      
  } 
}


export async function initReadlistProfileData(rawQstr) {

  //add the following data in response
  const rawMutations = {
     
  }
  

  MosyNotify({message : 'Refreshing Read list' , icon:'refresh', addTimer:false})

  const encodedMutations = btoa(JSON.stringify(rawMutations));

  try {
    // Fetch the  data with the given key
    const response = await mosyGetData({
      endpoint: '/api/infowell/snippets/readlist',
      params: { 
      q: btoa(rawQstr),         
      mutations: encodedMutations,
      fullQ : true
      },
    });

    // Handle the successful response
    if (response.status === 'success') {
      //console.log('snippets Data:', response.data);  // Process the data

       closeMosyModal()

      return response.data?.[0] || {};  // Return the actual record

    } else {
          
      console.log('Error fetching snippets data:', response.message);  // Handle error

      closeMosyModal()

      return {}
    }
  } catch (err) {

    closeMosyModal()

    console.log('Error:', err);
    return {}
  }
}


export async function DeleteReadlist(token = '') {

    try {
      MosyNotify({message:"Sending delete request",icon:"send", addTimer : false})
    
      const response = await mosyGetData({
        endpoint: '/api/infowell/snippets/delete',
        params: { 
          _infosnippets_delete_record: (token), 
          },
      });

      console.log('Token DeleteReadlist '+token)
      if (response.status === 'success') {

        closeMosyModal();

        return response.data; // ✅ Return the data
      } else {
        console.error('Error deleting systemusers data:', response.message);
        closeMosyModal();
        
        return []; // Safe fallback
      }
    } catch (err) {
      console.error('Error:', err);
      closeMosyModal();
      
      return []; //  Even safer fallback
    }

}


export async function getReadlistListData(qstr = "") {
   let fullWhere = true
  if(qstr=='')
  {
   fullWhere = false 
   qstr=btoa(' order by primkey desc')
  }
  
  //add the following data in response
  const rawMutations = {
     
  }
  
  const encodedMutations = btoa(JSON.stringify(rawMutations));

  //manage pagination 
  const pageNo = mosyUrlParam('qinfosnippets_page','0')
  const recordsPerPage = mosyGetLSData('systemDataLimit', '11')

  try {
    const response = await mosyGetData({
      endpoint: '/api/infowell/snippets/readlist',
      params: { 
        q: qstr, 
        mutations: encodedMutations,
        fullQ : fullWhere,
        pagination : `l:qinfosnippets_page:${recordsPerPage}:${pageNo}`
        },
    });

    if (response.status === 'success') {
      //console.log('snippets Data:', response.data);
      return response; // ✅ Return the data
    } else {
      console.log('Error fetching snippets data:', response);
      return []; // Safe fallback
    }
  } catch (err) {
    console.log('Error:', err);
    return []; //  Even safer fallback
  }
}


export async function loadReadlistListData(customQueryStr, setters) {

    const gftReadlist = MosyFilterEngine('infosnippets', true);
    let finalFilterStr = btoa(gftReadlist);    

    if(customQueryStr!='')
    {
      finalFilterStr = customQueryStr;
    }

    setters.setReadlistLoading(true);
    
    const readlistListData = await getReadlistListData(finalFilterStr);
    
    setters.setReadlistLoading(false)
    setters.setReadlistListData(readlistListData?.data)

    setters.setReadlistListPageCount(readlistListData?.page_count)


    return readlistListData

}
  
  
export async function readlistProfileData(customQueryStr, setters, router, customProfileData={}) {

    const readlistTokenId = mosyUrlParam('infosnippets_uptoken');
    
    const deleteParam = mosyUrlParam('infosnippets_delete');

    //manage  the staff_uptoken value  basically detect primkey
    let decodedReadlistToken = '0';
    if (readlistTokenId) {
      
      decodedReadlistToken = atob(readlistTokenId); // Decode the record_id
      setters.setReadlistUptoken(readlistTokenId);
      setters.setReadlistActionStatus('update_infosnippets');
      
    }
    
    //override customQueryStr if there is an active staff_uptoken else use customQueryStr if any
    let rawReadlistQueryStr =`where primkey ='${decodedReadlistToken}'`
    if(customQueryStr!='')
    {
      rawReadlistQueryStr = customQueryStr
    }

    const profileDataRecord = await initReadlistProfileData(rawReadlistQueryStr)

    if(deleteParam){
      popDeleteDialog(readlistTokenId, setters, router)
    }
    
    // Merge with custom injected values (custom wins)
    const finalProfileData = {
      ...profileDataRecord,
      ...customProfileData,    
    };
      

    setters.setReadlistNode(finalProfileData)
    
    


}
  
  

export function InteprateReadlistEvent(data) {
     
  //console.log('🎯 Readlist Child gave us:', data);

  const actionName = data?.actionName

  const childActionName = { [actionName]: true };

  if(childActionName.select_infosnippets){

    if(data?.profile)
    {
      const router = data?.router
      
      const url = data?.url

      router.push(url, { scroll: false });

    }else{

    //const childStateSetters = data?.setters.childSetters

    const parentSetter = data?.setters.parentStateSetters 

    parentSetter?.setReadlistCustomProfileQuery(data?.qstr)

    parentSetter?.setLocalEventSignature(magicRandomStr())
    parentSetter?.setParentUseEffectKey(magicRandomStr())
    
    mosyUpdateUrlParam('infosnippets_uptoken', btoa(data?.token))
    
    }
  }

  if(childActionName.add_infosnippets){

    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    console.log(`add infosnippets `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
      }
    }
     
  }

  if(childActionName.update_infosnippets){
    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    console.log(`update infosnippets `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
      }
    }
  }

  if(childActionName.delete_infosnippets){

    popDeleteDialog(btoa(data?.token), data?.setters)

 }

 //pass the the data to custom functions
 customEventHandler(data)
  
}


export function popDeleteDialog(deleteToken, setters, router, afterDeleteUrl='../snippets/readlist')
{     

  console.log(`popDeleteDialog`, setters)
  const childSetters = setters?.childStateSetters
  
  MosyAlertCard({
  
    icon : "trash",
  
    message: "Are you sure you want to delete this record?",

    autoDismissOnClick : false,
  
    onYes: () => {
  
      DeleteReadlist(deleteToken).then(data=>{
  
        childSetters?.setSnackMessage("Record deleted succesfully!")
        childSetters?.setParentUseEffectKey(magicRandomStr());
        childSetters?.setLocalEventSignature(magicRandomStr());

        if(router){
          router.push(`${afterDeleteUrl}?snack_alert=Record Deleted successfully!`)
        }
                  
      })
  
    },
  
    onNo: () => {
  
      // Remove the param from the URL
       closeMosyModal()
       deleteUrlParam('infosnippets_delete');
        
    }
  
  });

}