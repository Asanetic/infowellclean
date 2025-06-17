'use client';

//data utils
import { mosyPostFormData, mosyGetData, mosyUrlParam, mosyUpdateUrlParam , deleteUrlParam, magicRandomStr, mosyGetLSData  } from '../../../MosyUtils/hiveUtils';

//components
import { MosyNotify , closeMosyModal, MosyAlertCard } from '../../../MosyUtils/ActionModals';

//generate data filter 
import { MosyFilterEngine } from '../../DataControl/MosyFilterEngine';

//custom event manager 
import { customEventHandler } from '../../DataControl/customDataFunction';

export async function insertAssistants() {
 //console.log(`Form assistants insert sent `)

  return await mosyPostFormData({
    formId: 'assistants_profile_form',
    url: '/api/infowell/ai/assistants',
    method: 'POST',
    isMultipart: true,
  });
}

export async function updateAssistants() {

  //console.log(`Form assistants update sent `)

  return await mosyPostFormData({
    formId: 'assistants_profile_form',
    url: '/api/infowell/ai/assistants',
    method: 'POST',
    isMultipart: true,
  });
}


 
export async function inteprateAssistantsFormAction(e, setters) {
  e.preventDefault();

  const form = e.target;
  const formDataObj = new FormData(form);
  const actionType = formDataObj.get('assistants_mosy_action');
 
 //console.log(`Form assistants submission received action : ${actionType}`)

  try {
    let result = null;
    let actionMessage ='Record added succesfully!';

    if (actionType === 'add_assistants') {

      actionMessage ='Record added succesfully!';

      result = await insertAssistants();
    }

    if (actionType === 'update_assistants') {

      actionMessage ='Record updated succesfully!';

      result = await updateAssistants();
    }

    if (result?.status === 'success') {
      
      const assistantsUptoken = btoa(result.assistants_uptoken || '');

      //set id key
      setters.setAssistantsUptoken(assistantsUptoken);
      
      //update url with new assistantsUptoken
      mosyUpdateUrlParam('assistants_uptoken', assistantsUptoken)

      setters.setAssistantsActionStatus('update_assistants')
    
      setters.setSnackMessage(actionMessage);

      return {
        status: 'success',
        message: actionMessage,
        newToken: assistantsUptoken,
        actionName : actionType,
        actionType : 'assistants_form_submission'
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


export async function initAssistantsProfileData(rawQstr) {

  //add the following data in response
  const rawMutations = {
     
  }
  

  MosyNotify({message : 'Refreshing Assistants' , icon:'refresh', addTimer:false})

  const encodedMutations = btoa(JSON.stringify(rawMutations));

  try {
    // Fetch the  data with the given key
    const response = await mosyGetData({
      endpoint: '/api/infowell/ai/assistants',
      params: { 
      q: btoa(rawQstr),         
      mutations: encodedMutations,
      fullQ : true
      },
    });

    // Handle the successful response
    if (response.status === 'success') {
      //console.log('ai Data:', response.data);  // Process the data

       closeMosyModal()

      return response.data?.[0] || {};  // Return the actual record

    } else {
          
      console.log('Error fetching ai data:', response.message);  // Handle error

      closeMosyModal()

      return {}
    }
  } catch (err) {

    closeMosyModal()

    console.log('Error:', err);
    return {}
  }
}


export async function DeleteAssistants(token = '') {

    try {
      MosyNotify({message:"Sending delete request",icon:"send", addTimer : false})
    
      const response = await mosyGetData({
        endpoint: '/api/infowell/ai/delete',
        params: { 
          _assistants_delete_record: (token), 
          },
      });

      console.log('Token DeleteAssistants '+token)
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


export async function getAssistantsListData(qstr = "") {
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
  const pageNo = mosyUrlParam('qassistants_page','0')
  const recordsPerPage = mosyGetLSData('systemDataLimit', '11')

  try {
    const response = await mosyGetData({
      endpoint: '/api/infowell/ai/assistants',
      params: { 
        q: qstr, 
        mutations: encodedMutations,
        fullQ : fullWhere,
        pagination : `l:qassistants_page:${recordsPerPage}:${pageNo}`
        },
    });

    if (response.status === 'success') {
      //console.log('ai Data:', response.data);
      return response; // ✅ Return the data
    } else {
      console.log('Error fetching ai data:', response);
      return []; // Safe fallback
    }
  } catch (err) {
    console.log('Error:', err);
    return []; //  Even safer fallback
  }
}


export async function loadAssistantsListData(customQueryStr, setters) {

    const gftAssistants = MosyFilterEngine('assistants', true);
    let finalFilterStr = btoa(gftAssistants);    

    if(customQueryStr!='')
    {
      finalFilterStr = customQueryStr;
    }

    setters.setAssistantsLoading(true);
    
    const assistantsListData = await getAssistantsListData(finalFilterStr);
    
    setters.setAssistantsLoading(false)
    setters.setAssistantsListData(assistantsListData?.data)

    setters.setAssistantsListPageCount(assistantsListData?.page_count)


    return assistantsListData

}
  
  
export async function assistantsProfileData(customQueryStr, setters, router, customProfileData={}) {

    const assistantsTokenId = mosyUrlParam('assistants_uptoken');
    
    const deleteParam = mosyUrlParam('assistants_delete');

    //manage  the staff_uptoken value  basically detect primkey
    let decodedAssistantsToken = '0';
    if (assistantsTokenId) {
      
      decodedAssistantsToken = atob(assistantsTokenId); // Decode the record_id
      setters.setAssistantsUptoken(assistantsTokenId);
      setters.setAssistantsActionStatus('update_assistants');
      
    }
    
    //override customQueryStr if there is an active staff_uptoken else use customQueryStr if any
    let rawAssistantsQueryStr =`where primkey ='${decodedAssistantsToken}'`
    if(customQueryStr!='')
    {
      rawAssistantsQueryStr = customQueryStr
    }

    const profileDataRecord = await initAssistantsProfileData(rawAssistantsQueryStr)

    if(deleteParam){
      popDeleteDialog(assistantsTokenId, setters, router)
    }
    
    // Merge with custom injected values (custom wins)
    const finalProfileData = {
      ...profileDataRecord,
      ...customProfileData,    
    };
      

    setters.setAssistantsNode(finalProfileData)
    
    


}
  
  

export function InteprateAssistantsEvent(data) {
     
  //console.log('🎯 Assistants Child gave us:', data);

  const actionName = data?.actionName

  const childActionName = { [actionName]: true };

  if(childActionName.select_assistants){

    if(data?.profile)
    {
      const router = data?.router
      
      const url = data?.url

      router.push(url, { scroll: false });

    }else{

    //const childStateSetters = data?.setters.childSetters

    const parentSetter = data?.setters.parentStateSetters 

    parentSetter?.setAssistantsCustomProfileQuery(data?.qstr)

    parentSetter?.setLocalEventSignature(magicRandomStr())
    parentSetter?.setParentUseEffectKey(magicRandomStr())
    
    mosyUpdateUrlParam('assistants_uptoken', btoa(data?.token))
    
    }
  }

  if(childActionName.add_assistants){

    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    console.log(`add assistants `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
      }
    }
     
  }

  if(childActionName.update_assistants){
    const stateSetter =data?.setters.childStateSetters
    const parentStateSetter =data?.setters.parentStateSetters

    console.log(`update assistants `, data?.setters)

    if(stateSetter.setLocalEventSignature){
     stateSetter?.setLocalEventSignature(magicRandomStr())
    }

    if(parentStateSetter){
      if(parentStateSetter.setLocalEventSignature){
        parentStateSetter?.setLocalEventSignature(magicRandomStr())
      }
    }
  }

  if(childActionName.delete_assistants){

    popDeleteDialog(btoa(data?.token), data?.setters)

 }

 //pass the the data to custom functions
 customEventHandler(data)
  
}


export function popDeleteDialog(deleteToken, setters, router, afterDeleteUrl='../ai/list')
{     

  console.log(`popDeleteDialog`, setters)
  const childSetters = setters?.childStateSetters
  
  MosyAlertCard({
  
    icon : "trash",
  
    message: "Are you sure you want to delete this record?",

    autoDismissOnClick : false,
  
    onYes: () => {
  
      DeleteAssistants(deleteToken).then(data=>{
  
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
       deleteUrlParam('assistants_delete');
        
    }
  
  });

}