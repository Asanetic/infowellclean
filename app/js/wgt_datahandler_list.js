
 var mosy_sql_roll_back_list_cols ="primkey:Primkey,roll_bk_key:Roll Bk Key,table_name:Table Name,roll_type:Roll Type,where_str:Where Str,roll_timestamp:Roll Timestamp,value_entries:Value Entries";

 var notification_manifest__list_cols ="primkey:Primkey,notific_key:Notific Key,notification_type:Notification Type,notification_state:Notification State,notification_icon:Notification Icon,notification_title:Notification Title,notification_link:Notification Link,notification_read_state:Notification Read State,notification_time_stamp:Notification Time Stamp,notif_remark:Notif Remark";



 var mosy_sql_roll_back_list_nodes=`<tr class="cpointer" onclick="mosy_card('Mosy Sql Roll Back Profile ', mosy_sql_roll_back_input_wgt(mosy_sql_roll_back_js_input,'mosy_sql_roll_back_update_btn:Update:check-circle',''), '');initialize_mosy_sql_roll_back(&quot where primkey='{{primkey}}'&quot;);push_newval('mosy_sql_roll_back_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{table_name}}</td>
<td scope="col">{{roll_type}}</td>
<td scope="col">{{where_str}}</td>
<td scope="col">{{roll_timestamp}}</td>
<td scope="col">{{value_entries}}</td>
</tr>`;


 var notification_manifest__list_nodes=`<tr class="cpointer" onclick="mosy_card('Notification Manifest  Profile ', notification_manifest__input_wgt(notification_manifest__js_input,'notification_manifest__update_btn:Update:check-circle',''), '');initialize_notification_manifest_(&quot where primkey='{{primkey}}'&quot;);push_newval('notification_manifest__uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{notification_type}}</td>
<td scope="col">{{notification_state}}</td>
<td scope="col">{{notification_icon}}</td>
<td scope="col">{{notification_title}}</td>
<td scope="col">{{notification_link}}</td>
<td scope="col">{{notification_read_state}}</td>
<td scope="col">{{notification_time_stamp}}</td>
<td scope="col">{{notif_remark}}</td>
</tr>`;



        var mosy_sql_roll_back_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="mosy_sql_roll_back_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Table Name</th>
             <th scope="col">Roll Type</th>
             <th scope="col">Where Str</th>
             <th scope="col">Roll Timestamp</th>
             <th scope="col">Value Entries</th>

		   </tr>
	    </thead>
	    <tbody id="mosy_sql_roll_back_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var notification_manifest__list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="notification_manifest__data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Notification Type</th>
             <th scope="col">Notification State</th>
             <th scope="col">Notification Icon</th>
             <th scope="col">Notification Title</th>
             <th scope="col">Notification Link</th>
             <th scope="col">Notification Read State</th>
             <th scope="col">Notification Time Stamp</th>
             <th scope="col">Notif Remark</th>

		   </tr>
	    </thead>
	    <tbody id="notification_manifest__tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
