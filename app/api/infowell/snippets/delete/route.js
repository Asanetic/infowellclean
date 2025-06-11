
import { mosySqlDelete , base64Decode , mosyQddata , mosyDeleteFile } from '../../../apiUtils/dataControl/dataUtils';

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const deleteToken = searchParams.get('_infosnippets_delete_record');
  const deleteTokenDecode = base64Decode(deleteToken);

  if (deleteToken) {
    // 👇 Customize table and WHERE clause here
    const table = 'infosnippets'; // Replace with your actual table
    
     
          
          const deleteAttachedMedia = await mosyQddata('infosnippets', 'primkey', deleteTokenDecode);
          
          const fileToDelete = deleteAttachedMedia?.media
         
          mosyDeleteFile(fileToDelete);
    
    const whereStr = `WHERE primkey = '${deleteTokenDecode}'`;

    const res = await mosySqlDelete(table, whereStr);

    if (res.status === 'success') {
      return Response.json({ status: 'success', rowsAffected: res.affectedRows });
    } else {
      return Response.json({ status: 'error', message: res.message }, { status: 500 });
    }
  }

  return Response.json({ status: 'idle', message: 'No action performed' });
  
}