'use client';

//data utils
import { mosyPostFormData, mosyGetData, mosyUrlParam, mosyUpdateUrlParam , deleteUrlParam, magicRandomStr, mosyGetLSData  } from '../../../MosyUtils/hiveUtils';

//components
import { MosyNotify , closeMosyModal, MosyAlertCard } from '../../../MosyUtils/ActionModals';

//generate data filter 
import { MosyFilterEngine } from '../../DataControl/MosyFilterEngine';

//custom event manager 
import { customEventHandler } from '../../DataControl/customDataFunction';

export async function insertInfosnippets() {
 //console.log(`Form infosnippets insert sent `)

  return await mosyPostFormData({
    formId: 'infosnippets_profile_form',
    url: '/api/infowell/snippets/infosnippets',
    method: 'POST',
    isMultipart: true,
  });
}

export async function updateInfosnippets() {

  //console.log(`Form infosnippets update sent `)

  return await mosyPostFormData({
    formId: 'infosnippets_profile_form',
    url: '/api/infowell/snippets/infosnippets',
    method: 'POST',
    isMultipart: true,
  });
}


 
export async function inteprateInfosnippetsFormAction(e, setters) {
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

      result = await insertInfosnippets();
    }

    if (actionType === 'update_infosnippets') {

      actionMessage ='Record updated succesfully!';

      result = await updateInfosnippets();
    }

    if (result?.status === 'success') {
      
      const infosnippetsUptoken = btoa(result.infosnippets_uptoken || '');

      //set id key
      setters.setInfosnippetsUptoken(infosnippetsUptoken);
      
      //update url with new infosnippetsUptoken
      mosyUpdateUrlParam('infosnippets_uptoken', infosnippetsUptoken)

      setters.setInfosnippetsActionStatus('update_infosnippets')
    
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


export async function initInfosnippetsProfileData(rawQstr) {

  //add the following data in response
  const rawMutations = {
     
  }
  

  MosyNotify({message : 'Refreshing Info snippets' , icon:'refresh', addTimer:false})

  const encodedMutations = btoa(JSON.stringify(rawMutations));

  try {
    // Fetch the  data with the given key
    const response = await mosyGetData({
      endpoint: '/api/infowell/snippets/infosnippets',
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


export async function DeleteInfosnippets(token = '') {

    try {
      MosyNotify({message:"Sending delete request",icon:"send", addTimer : false})
    
      const response = await mosyGetData({
        endpoint: '/api/infowell/snippets/delete',
        params: { 
          _infosnippets_delete_record: (token), 
          },
      });

      console.log('Token DeleteInfosnippets '+token)
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


export async function getInfosnippetsListData(qstr = "") {
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
      endpoint: '/api/infowell/snippets/infosnippets',
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


export async function loadInfosnippetsListData(customQueryStr, setters) {

    const gftInfosnippets = MosyFilterEngine('infosnippets', true);
    let finalFilterStr = btoa(gftInfosnippets);    

    if(customQueryStr!='')
    {
      finalFilterStr = customQueryStr;
    }

    setters.setInfosnippetsLoading(true);
    
    const infosnippetsListData = await getInfosnippetsListData(finalFilterStr);
    
    setters.setInfosnippetsLoading(false)
    setters.setInfosnippetsListData(infosnippetsListData?.data)

    setters.setInfosnippetsListPageCount(infosnippetsListData?.page_count)


    return infosnippetsListData

}
  
  
export async function infosnippetsProfileData(customQueryStr, setters, router, customProfileData={}) {

    const infosnippetsTokenId = mosyUrlParam('infosnippets_uptoken');
    
    const deleteParam = mosyUrlParam('infosnippets_delete');

    //manage  the staff_uptoken value  basically detect primkey
    let decodedInfosnippetsToken = '0';
    if (infosnippetsTokenId) {
      
      decodedInfosnippetsToken = atob(infosnippetsTokenId); // Decode the record_id
      setters.setInfosnippetsUptoken(infosnippetsTokenId);
      setters.setInfosnippetsActionStatus('update_infosnippets');
      
    }
    
    //override customQueryStr if there is an active staff_uptoken else use customQueryStr if any
    let rawInfosnippetsQueryStr =`where primkey ='${decodedInfosnippetsToken}'`
    if(customQueryStr!='')
    {
      rawInfosnippetsQueryStr = customQueryStr
    }

    const profileDataRecord = await initInfosnippetsProfileData(rawInfosnippetsQueryStr)

    if(deleteParam){
      popDeleteDialog(infosnippetsTokenId, setters, router)
    }
    
    // Merge with custom injected values (custom wins)
    const finalProfileData = {
      ...profileDataRecord,
      ...customProfileData,    
    };
      

    setters.setInfosnippetsNode(finalProfileData)
    
    


}
  
  

export function InteprateInfosnippetsEvent(data) {
     
  //console.log('🎯 Infosnippets Child gave us:', data);

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

    parentSetter?.setInfosnippetsCustomProfileQuery(data?.qstr)

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


export function popDeleteDialog(deleteToken, setters, router, afterDeleteUrl='../snippets/list')
{     

  console.log(`popDeleteDialog`, setters)
  const childSetters = setters?.childStateSetters
  
  MosyAlertCard({
  
    icon : "trash",
  
    message: "Are you sure you want to delete this record?",

    autoDismissOnClick : false,
  
    onYes: () => {
  
      DeleteInfosnippets(deleteToken).then(data=>{
  
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