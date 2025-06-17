
//utils 
import { mosySqlInsert, mosySqlUpdate, base64Decode, mosyFlexSelect, mosyUploadFile, mosyDeleteFile, magicRandomStr } from '../../../apiUtils/dataControl/dataUtils';

import {AssistantsRowMutations} from './AssistantsRowMutations';

import listAssistantsRowMutationsKeys from './AssistantsMutationKeys';

//be gate keeper and auth 
import { validateSelect } from '../../beMonitor';
import { processAuthToken } from '../../../auth/authManager';


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams.entries());

    const encodedMutations = searchParams.get('mutations');

    let requestedMutationsObj = {};
    if (encodedMutations) {
      try {
        const decodedMutations = Buffer.from(encodedMutations, 'base64').toString('utf-8');
        requestedMutationsObj = JSON.parse(decodedMutations);
      } catch (err) {
        console.error('Mutation decode failed:', err);
      }
    }

    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(request);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    

    // ✅ Provide default fallbacks
    const enhancedParams = {
      tbl: 'assistants',
      colstr: queryParams.colstr || 'Kg==', // default to *
      ...queryParams 
    };

    // 🧠 Clean up optional params if missing
    if (!enhancedParams.pagination) delete enhancedParams.pagination;
    if (!enhancedParams.q) delete enhancedParams.q;
    if (!enhancedParams.function_cols) enhancedParams.function_cols = '';

    let requestValid =validateSelect('assistants', queryParams, authData)

    if(!requestValid)
    {
      return Response.json(
        { status: 'error', message: 'Request is invalid' },
        { status: 400 }
      );

    }
 
    const isEmpty = (obj) => !obj || Object.keys(obj).length === 0;
    const mutationsObj = isEmpty(requestedMutationsObj) ? listAssistantsRowMutationsKeys : requestedMutationsObj;
    
    if(requestValid){
    
      const result = await mosyFlexSelect(enhancedParams, mutationsObj, AssistantsRowMutations);

      return Response.json({
        status: 'success',
        message: 'Assistants data retrieved',
        ...result,
      });
      
   }
  } catch (err) {
    console.error('GET Assistants failed:', err);
    return Response.json(
      { status: 'error', message: err.message },
      { status: 500 }
    );
  }
}



export async function POST(AssistantsRequest) {
  try {
    let body;
    let isMultipart = false;

    const contentType = AssistantsRequest.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      isMultipart = true;
      const formData = await AssistantsRequest.formData();

      // Convert FormData to plain object
      body = {};
      for (let [key, value] of formData.entries()) {
        body[key] = value;
      }

    } else {
      body = await AssistantsRequest.json();
    }
    
    
    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(AssistantsRequest);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    const AssistantsFormAction = body.assistants_mosy_action;
    const assistants_uptoken_value = base64Decode(body.assistants_uptoken);

		//--- Begin  assistants inputs array ---// 

const AssistantsInputsArr = {
  "name" : "?", 
  "assitant_id" : "?", 
  "remark" : "?", 
  "status" : "?", 

};

//--- End assistants inputs array --//

    
    if (AssistantsFormAction === "add_assistants") 
    {
      
      const newId = magicRandomStr(7);
      AssistantsInputsArr.record_id = newId;
      
      // Insert into table Assistants
      const result = await mosySqlInsert("assistants", AssistantsInputsArr, body);

       

      return Response.json({
        status: 'success',
        message: result.message,
        assistants_uptoken: result.record_id
      });
      
    }
    
    if (AssistantsFormAction === "update_assistants") {
      
      // update table Assistants
      const result = await mosySqlUpdate("assistants", AssistantsInputsArr, body, `primkey='${assistants_uptoken_value}'`);


      

      return Response.json({
        status: 'success',
        message: result.message,
        assistants_uptoken: assistants_uptoken_value
      });
    }    

    // Optional: catch unrecognized actions
    return Response.json({
      status: 'error',
      message: `Invalid action: ${AssistantsFormAction}`
    }, { status: 400 });

  } catch (err) {
    console.error(`Request failed:`, err);
    return Response.json(
      { status: 'error', 
      message: `Data Post error ${err.message}` },
      { status: 500 }
    );
  }
}