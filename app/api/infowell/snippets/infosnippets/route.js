
//utils 
import { mosySqlInsert, mosySqlUpdate, base64Decode, mosyFlexSelect, mosyUploadFile, mosyDeleteFile, magicRandomStr } from '../../../apiUtils/dataControl/dataUtils';

import {InfosnippetsRowMutations} from './InfosnippetsRowMutations';

//be gate keeper and auth 
import { validateSelect } from '../../beMonitor';
import { processAuthToken } from '../../../auth/authManager';


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams.entries());

    const encodedMutations = searchParams.get('mutations');

    let mutationsObj = {};
    if (encodedMutations) {
      try {
        const decodedMutations = Buffer.from(encodedMutations, 'base64').toString('utf-8');
        mutationsObj = JSON.parse(decodedMutations);
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
      tbl: 'infosnippets',
      colstr: queryParams.colstr || 'Kg==', // default to *
      ...queryParams 
    };

    // 🧠 Clean up optional params if missing
    if (!enhancedParams.pagination) delete enhancedParams.pagination;
    if (!enhancedParams.q) delete enhancedParams.q;
    if (!enhancedParams.function_cols) enhancedParams.function_cols = '';

    let requestValid =validateSelect('infosnippets', queryParams, authData)

    if(!requestValid)
    {
      return Response.json(
        { status: 'error', message: 'Request is invalid' },
        { status: 400 }
      );

    }

    if(requestValid){
    
      const result = await mosyFlexSelect(enhancedParams, mutationsObj, InfosnippetsRowMutations);

      return Response.json({
        status: 'success',
        message: 'Infosnippets data retrieved',
        ...result,
      });
      
   }
  } catch (err) {
    console.error('GET Infosnippets failed:', err);
    return Response.json(
      { status: 'error', message: err.message },
      { status: 500 }
    );
  }
}



export async function POST(InfosnippetsRequest) {
  try {
    let body;
    let isMultipart = false;

    const contentType = InfosnippetsRequest.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      isMultipart = true;
      const formData = await InfosnippetsRequest.formData();

      // Convert FormData to plain object
      body = {};
      for (let [key, value] of formData.entries()) {
        body[key] = value;
      }

    } else {
      body = await InfosnippetsRequest.json();
    }
    
    
    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(InfosnippetsRequest);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    const InfosnippetsFormAction = body.infosnippets_mosy_action;
    const infosnippets_uptoken_value = base64Decode(body.infosnippets_uptoken);

		//--- Begin  infosnippets inputs array ---// 

const InfosnippetsInputsArr = {
  "media" : "?", 
  "title" : "?", 
  "tag" : "?", 
  "notes" : "?", 
  "date_created" : "?", 

};

//--- End infosnippets inputs array --//

    
    if (InfosnippetsFormAction === "add_infosnippets") 
    {
      
      const newId = magicRandomStr(7);
      InfosnippetsInputsArr.record_id = newId;
      
      // Insert into table Infosnippets
      const result = await mosySqlInsert("infosnippets", InfosnippetsInputsArr, body);

       
                // Now handle the file upload for media, if any
                if (body.txt_infosnippets_media) {
                  if(body["txt_infosnippets_media"].size>0){
                  try {
                    
                    const filePath = await mosyUploadFile(body[ "txt_infosnippets_media"], "media/infosnippets");
                    
                    InfosnippetsInputsArr.media = filePath; // Update file path in the database

                    // After file upload, update the database with the file path
                    await mosySqlUpdate("infosnippets", { media: filePath }, body, `primkey='${result.record_id}'`);                    					                    
                    let fileToDelete = body.media_infosnippets_media;
                      
                    //Delete file if need be

                  } catch (fileErr) {
                    console.error("File upload failed:", fileErr);
                    // You can either handle this error or return a partial success message
                  }
                }
               }

      return Response.json({
        status: 'success',
        message: result.message,
        infosnippets_uptoken: result.record_id
      });
      
    }
    
    if (InfosnippetsFormAction === "update_infosnippets") {
      
      // update table Infosnippets
      const result = await mosySqlUpdate("infosnippets", InfosnippetsInputsArr, body, `primkey='${infosnippets_uptoken_value}'`);


      
                // Now handle the file upload for media, if any
                if (body.txt_infosnippets_media) {
                  if(body["txt_infosnippets_media"].size>0){
                  try {
                    
                    const filePath = await mosyUploadFile(body[ "txt_infosnippets_media"], "media/infosnippets");
                    
                    InfosnippetsInputsArr.media = filePath; // Update file path in the database

                    // After file upload, update the database with the file path
                    await mosySqlUpdate("infosnippets", { media: filePath }, body, `primkey='${infosnippets_uptoken_value}'`);                    					                    
                    let fileToDelete = body.media_infosnippets_media;
                      
                    //Delete old file
mosyDeleteFile(fileToDelete);
// Log or store deleted file: fileToDelete

                  } catch (fileErr) {
                    console.error("File upload failed:", fileErr);
                    // You can either handle this error or return a partial success message
                  }
                }
               }

      return Response.json({
        status: 'success',
        message: result.message,
        infosnippets_uptoken: infosnippets_uptoken_value
      });
    }    

    // Optional: catch unrecognized actions
    return Response.json({
      status: 'error',
      message: `Invalid action: ${InfosnippetsFormAction}`
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