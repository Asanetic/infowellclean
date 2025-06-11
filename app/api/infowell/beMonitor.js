import { base64Decode } from "../apiUtils/dataControl/dataUtils"

export function validateSelect(tblName, qParams) {

    let qstr ="booombs"
    if(qParams.q){
     qstr = base64Decode(qParams.q)
    }

    console.log(`validateSelect QSTR is ${qstr}` , qParams)

    let requestIsValid = true 

    if(tblName=="staff")
    {
        requestIsValid = true
    }
    
    return requestIsValid  

}

export function dataControlFilter()
{

}
