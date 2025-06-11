
  
  
////========================= start mosy_sql_roll_back inputs widget 

function mosy_sql_roll_back_input_wgt(input_array, button, title)
{
 var input_policy={"txt_table_name":"Table Name:text:col-md-4","txt_roll_type":"Roll Type:text:col-md-4","txt_where_str":"Where Str:text:col-md-4","txt_roll_timestamp":"Roll Timestamp:text:col-md-4","txt_value_entries":"Value Entries:text:col-md-4",};
 if(title=="")
 {
 title ="Mosy Sql Roll Back";
 }
 var input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
  
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
    
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }

  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  
  input_cell+=`
    <div class="col-md-12 text-center">
    <button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>
    </div>
    
    </div>`;
  
  return input_cell;
}
  

  
  
  
////========================= start notification_manifest_ inputs widget 

function notification_manifest__input_wgt(input_array, button, title)
{
 var input_policy={"txt_notification_type":"Notification Type:text:col-md-4","txt_notification_state":"Notification State:text:col-md-4","txt_notification_icon":"Notification Icon:text:col-md-4","txt_notification_title":"Notification Title:text:col-md-4","txt_notification_link":"Notification Link:text:col-md-4","txt_notification_read_state":"Notification Read State:text:col-md-4","txt_notification_time_stamp":"Notification Time Stamp:text:col-md-4","txt_notif_remark":"Notif Remark:text:col-md-4",};
 if(title=="")
 {
 title ="Notification Manifest ";
 }
 var input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
  
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
    
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }

  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  
  input_cell+=`
    <div class="col-md-12 text-center">
    <button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>
    </div>
    
    </div>`;
  
  return input_cell;
}
  

  