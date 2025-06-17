
//utils 
import { mosySqlInsert, mosySqlUpdate, base64Decode, mosyFlexSelect, mosyUploadFile, mosyDeleteFile, magicRandomStr } from '../../../apiUtils/dataControl/dataUtils';

import {ReadlistRowMutations} from './ReadlistRowMutations';

import listReadlistRowMutationsKeys from './ReadlistMutationKeys';

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
 
    const isEmpty = (obj) => !obj || Object.keys(obj).length === 0;
    const mutationsObj = isEmpty(requestedMutationsObj) ? listReadlistRowMutationsKeys : requestedMutationsObj;
    
    if(requestValid){
    
      const result = await mosyFlexSelect(enhancedParams, mutationsObj, ReadlistRowMutations);

      return Response.json({
        status: 'success',
        message: 'Readlist data retrieved',
        ...result,
      });
      
   }
  } catch (err) {
    console.error('GET Readlist failed:', err);
    return Response.json(
      { status: 'error', message: err.message },
      { status: 500 }
    );
  }
}



export async function POST(ReadlistRequest) {
  try {
    let body;
    let isMultipart = false;

    const contentType = ReadlistRequest.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      isMultipart = true;
      const formData = await ReadlistRequest.formData();

      // Convert FormData to plain object
      body = {};
      for (let [key, value] of formData.entries()) {
        body[key] = value;
      }

    } else {
      body = await ReadlistRequest.json();
    }
    
    
    const { valid: isTokenValid, reason: tokenError, data: authData } = processAuthToken(ReadlistRequest);
     
    if (!isTokenValid) {
      return Response.json(
        { status: 'unauthorized', message: tokenError },
        { status: 403 }
      );
    }
    
    const ReadlistFormAction = body.infosnippets_mosy_action;
    const infosnippets_uptoken_value = base64Decode(body.infosnippets_uptoken);

		//--- Begin  infosnippets inputs array ---// 

const ReadlistInputsArr = {
  "media" : "?", 
  "title" : "?", 
  "tag" : "?", 
  "notes" : "?", 
  "date_created" : "?", 

};

//--- End infosnippets inputs array --//

    
    if (ReadlistFormAction === "add_infosnippets") 
    {
      
      const newId = magicRandomStr(7);
      ReadlistInputsArr.record_id = newId;
      
      // Insert into table Readlist
      const result = await mosySqlInsert("infosnippets", ReadlistInputsArr, body);

       
                // Now handle the file upload for media, if any
                if (body.txt_infosnippets_media) {
                  if(body["txt_infosnippets_media"].size>0){
                  try {
                    
                    const filePath = await mosyUploadFile(body[ "txt_infosnippets_media"], "media/infosnippets");
                    
                    ReadlistInputsArr.media = filePath; // Update file path in the database

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
    
    if (ReadlistFormAction === "update_infosnippets") {
      
      // update table Readlist
      const result = await mosySqlUpdate("infosnippets", ReadlistInputsArr, body, `primkey='${infosnippets_uptoken_value}'`);


      
                // Now handle the file upload for media, if any
                if (body.txt_infosnippets_media) {
                  if(body["txt_infosnippets_media"].size>0){
                  try {
                    
                    const filePath = await mosyUploadFile(body[ "txt_infosnippets_media"], "media/infosnippets");
                    
                    ReadlistInputsArr.media = filePath; // Update file path in the database

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
      message: `Invalid action: ${ReadlistFormAction}`
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