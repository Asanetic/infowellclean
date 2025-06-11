 
//===============Start Mosy queries-============ 

    //Start get  account_urls Data ===============
    
      function get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")
      {
        mosyflex_sel("account_urls", account_urls_colstr, account_urls_filter_col , account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination,req_url);
        
      }
    //End get  account_urls Data ===============

    //Start insert  account_urls Data ===============

	function add_account_urls(account_urls_cols, account_urls_vals, account_urls_callback_function_string)
    {
		
        mosyajax_create_data("account_urls", account_urls_cols, account_urls_vals, account_urls_callback_function_string);
     }
     
    //End insert  account_urls Data ===============

    
    //Start update  account_urls Data ===============

    function update_account_urls(account_urls_update_str, account_urls_where_str, account_urls_callback_function_string){
    
		mosyajax_update("account_urls", account_urls_update_str, account_urls_where_str, account_urls_callback_function_string)
    
    }
    //end  update  account_urls Data ===============

	//Start drop  account_urls Data ===============
    function account_urls_drop(account_urls_where_str, account_urls_callback_function_string)
    {
        mosyajax_drop("account_urls", account_urls_where_str, account_urls_callback_function_string)

    }
	//End drop  account_urls Data ===============
    
    function initialize_account_urls(qstr="", account_urls_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var account_urls_token_query =qstr;
      if(qstr=="")
      {
       var account_urls_token_query_param="";
       var account_urls_js_uptoken=mosy_get_param("account_urls_uptoken");
       //alert(account_urls_js_uptoken);
       if(account_urls_js_uptoken!==undefined)
       {
       
        account_urls_token_query_param = atob(account_urls_js_uptoken);
       }
        account_urls_token_query = " where primkey='"+(account_urls_token_query_param)+"'";
        
           if (document.getElementById("account_urls_uptoken") !==null) {
           	if(document.getElementById("account_urls_uptoken").value!="")
            {
            
            var account_urls_atob_tbl_key =atob(document.getElementById("account_urls_uptoken").value);
            
                   
            account_urls_token_query = " where primkey='"+(account_urls_atob_tbl_key)+"'";

            }
           }
      }
      
      var account_urls_push_ui_data_to =account_urls_callback_function_string;
      if(account_urls_callback_function_string=="")
      {
      account_urls_push_ui_data_to = "add_account_urls_ui_data";
      }
                
      console.log(account_urls_token_query+" -- "+account_urls_js_uptoken);

	  //alert(account_urls_push_ui_data_to);

     get_account_urls("*", account_urls_token_query, "primkey", "blackhole", account_urls_push_ui_data_to, "", "", req_url);
     
     ///get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")
    }
    
    function add_account_urls_ui_data(account_urls_server_resp) 
    {
    
    ///alert(account_urls_server_resp);
    
    var json_decoded_str=JSON.parse(account_urls_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load account_urls data on the fly ==============
    
	var gft_account_urls_str="(record_id LIKE '%{{qaccount_urls}}%' OR  url_name LIKE '%{{qaccount_urls}}%' OR  url LIKE '%{{qaccount_urls}}%' OR  description LIKE '%{{qaccount_urls}}%' OR  hive_site_id LIKE '%{{qaccount_urls}}%' OR  hive_site_name LIKE '%{{qaccount_urls}}%')";
    
    function  gft_account_urls(qaccount_urls_str)
    {
        	var clean_account_urls_filter_str=gft_account_urls_str.replace(/{{qaccount_urls}}/g, magic_clean_str(qaccount_urls_str));
            
            return  clean_account_urls_filter_str;

    }
    
    function load_account_urls(account_urls_qstr, account_urls_where_str, account_urls_ret_cols, account_urls_user_function, account_urls_result_function, account_urls_data_tray, req_url="")
    {
    
    var faccount_urls_result_function="push_result";
      
    if(account_urls_result_function!="")
    {
          var faccount_urls_result_function=account_urls_result_function;

    }
    	var clean_account_urls_filter_str=gft_account_urls_str.replace(/{{qaccount_urls}}/g, magic_clean_str(account_urls_qstr));
        
        var faccount_urls_where_str=" where "+clean_account_urls_filter_str;

    if(account_urls_where_str!="")
    {
          var faccount_urls_where_str=" "+account_urls_where_str;

    }
       
      get_account_urls("*", faccount_urls_where_str, account_urls_ret_cols, account_urls_user_function, faccount_urls_result_function, account_urls_data_tray,"",req_url);
      ////get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")
    }
    ///=============== load account_urls data on the fly ==============


 ///=quick load 
 
function qkload_account_urls(qstr, push_fun="", ui_card="", and_query="", additional_cols="", account_urls_pagination="",req_url="")
{

	var account_urls_list_nodes_str=account_urls_list_nodes;
  
   if(ui_card!="")
   {
      account_urls_list_nodes_str=ui_card;
   }
   
   var account_urls_qret_fun="push_grid_result:account_urls_tbl_list";
   
   if(push_fun!="")
   {
    account_urls_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_account_urls("*", ajaxw+" ("+gft_account_urls(qstr)+") "+combined_query+"  order by primkey desc ", account_urls_list_cols+additional_cols_str, "",account_urls_qret_fun, "c=>"+account_urls_list_nodes_str, account_urls_pagination, req_url);
   ///get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_account_urls(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_account_urls("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="") 

}


//qddata
function qaccount_urls_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_account_urls("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")    

}



//sum 

function sum_account_urls(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_account_urls("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_account_urls(account_urls_colstr, account_urls_filter_col, account_urls_cols, account_urls_node_function_name, account_urls_callback_function_string, account_urls_ui_tag, account_urls_pagination, req_url="")

}


///request handlers 

  
  function conf_del_account_urls_(account_urls_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'account_urls_rem_(\''+account_urls_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_account_urls_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   account_urls_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_account_urls_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   account_urls_updt_(formid,"",response_fun,req_url)
 }
}

function account_urls_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "account_urls_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function account_urls_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "account_urls_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function account_urls_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteaccount_urls&account_urls_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_account_urls_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('account_urls')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  affiliate_commissions Data ===============
    
      function get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")
      {
        mosyflex_sel("affiliate_commissions", affiliate_commissions_colstr, affiliate_commissions_filter_col , affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination,req_url);
        
      }
    //End get  affiliate_commissions Data ===============

    //Start insert  affiliate_commissions Data ===============

	function add_affiliate_commissions(affiliate_commissions_cols, affiliate_commissions_vals, affiliate_commissions_callback_function_string)
    {
		
        mosyajax_create_data("affiliate_commissions", affiliate_commissions_cols, affiliate_commissions_vals, affiliate_commissions_callback_function_string);
     }
     
    //End insert  affiliate_commissions Data ===============

    
    //Start update  affiliate_commissions Data ===============

    function update_affiliate_commissions(affiliate_commissions_update_str, affiliate_commissions_where_str, affiliate_commissions_callback_function_string){
    
		mosyajax_update("affiliate_commissions", affiliate_commissions_update_str, affiliate_commissions_where_str, affiliate_commissions_callback_function_string)
    
    }
    //end  update  affiliate_commissions Data ===============

	//Start drop  affiliate_commissions Data ===============
    function affiliate_commissions_drop(affiliate_commissions_where_str, affiliate_commissions_callback_function_string)
    {
        mosyajax_drop("affiliate_commissions", affiliate_commissions_where_str, affiliate_commissions_callback_function_string)

    }
	//End drop  affiliate_commissions Data ===============
    
    function initialize_affiliate_commissions(qstr="", affiliate_commissions_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var affiliate_commissions_token_query =qstr;
      if(qstr=="")
      {
       var affiliate_commissions_token_query_param="";
       var affiliate_commissions_js_uptoken=mosy_get_param("affiliate_commissions_uptoken");
       //alert(affiliate_commissions_js_uptoken);
       if(affiliate_commissions_js_uptoken!==undefined)
       {
       
        affiliate_commissions_token_query_param = atob(affiliate_commissions_js_uptoken);
       }
        affiliate_commissions_token_query = " where primkey='"+(affiliate_commissions_token_query_param)+"'";
        
           if (document.getElementById("affiliate_commissions_uptoken") !==null) {
           	if(document.getElementById("affiliate_commissions_uptoken").value!="")
            {
            
            var affiliate_commissions_atob_tbl_key =atob(document.getElementById("affiliate_commissions_uptoken").value);
            
                   
            affiliate_commissions_token_query = " where primkey='"+(affiliate_commissions_atob_tbl_key)+"'";

            }
           }
      }
      
      var affiliate_commissions_push_ui_data_to =affiliate_commissions_callback_function_string;
      if(affiliate_commissions_callback_function_string=="")
      {
      affiliate_commissions_push_ui_data_to = "add_affiliate_commissions_ui_data";
      }
                
      console.log(affiliate_commissions_token_query+" -- "+affiliate_commissions_js_uptoken);

	  //alert(affiliate_commissions_push_ui_data_to);

     get_affiliate_commissions("*", affiliate_commissions_token_query, "primkey", "blackhole", affiliate_commissions_push_ui_data_to, "", "", req_url);
     
     ///get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")
    }
    
    function add_affiliate_commissions_ui_data(affiliate_commissions_server_resp) 
    {
    
    ///alert(affiliate_commissions_server_resp);
    
    var json_decoded_str=JSON.parse(affiliate_commissions_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load affiliate_commissions data on the fly ==============
    
	var gft_affiliate_commissions_str="(record_id LIKE '%{{qaffiliate_commissions}}%' OR  affiliate LIKE '%{{qaffiliate_commissions}}%' OR  amount LIKE '%{{qaffiliate_commissions}}%' OR  date_earned LIKE '%{{qaffiliate_commissions}}%' OR  client LIKE '%{{qaffiliate_commissions}}%' OR  package LIKE '%{{qaffiliate_commissions}}%' OR  remark LIKE '%{{qaffiliate_commissions}}%' OR  approval_status LIKE '%{{qaffiliate_commissions}}%')";
    
    function  gft_affiliate_commissions(qaffiliate_commissions_str)
    {
        	var clean_affiliate_commissions_filter_str=gft_affiliate_commissions_str.replace(/{{qaffiliate_commissions}}/g, magic_clean_str(qaffiliate_commissions_str));
            
            return  clean_affiliate_commissions_filter_str;

    }
    
    function load_affiliate_commissions(affiliate_commissions_qstr, affiliate_commissions_where_str, affiliate_commissions_ret_cols, affiliate_commissions_user_function, affiliate_commissions_result_function, affiliate_commissions_data_tray, req_url="")
    {
    
    var faffiliate_commissions_result_function="push_result";
      
    if(affiliate_commissions_result_function!="")
    {
          var faffiliate_commissions_result_function=affiliate_commissions_result_function;

    }
    	var clean_affiliate_commissions_filter_str=gft_affiliate_commissions_str.replace(/{{qaffiliate_commissions}}/g, magic_clean_str(affiliate_commissions_qstr));
        
        var faffiliate_commissions_where_str=" where "+clean_affiliate_commissions_filter_str;

    if(affiliate_commissions_where_str!="")
    {
          var faffiliate_commissions_where_str=" "+affiliate_commissions_where_str;

    }
       
      get_affiliate_commissions("*", faffiliate_commissions_where_str, affiliate_commissions_ret_cols, affiliate_commissions_user_function, faffiliate_commissions_result_function, affiliate_commissions_data_tray,"",req_url);
      ////get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")
    }
    ///=============== load affiliate_commissions data on the fly ==============


 ///=quick load 
 
function qkload_affiliate_commissions(qstr, push_fun="", ui_card="", and_query="", additional_cols="", affiliate_commissions_pagination="",req_url="")
{

	var affiliate_commissions_list_nodes_str=affiliate_commissions_list_nodes;
  
   if(ui_card!="")
   {
      affiliate_commissions_list_nodes_str=ui_card;
   }
   
   var affiliate_commissions_qret_fun="push_grid_result:affiliate_commissions_tbl_list";
   
   if(push_fun!="")
   {
    affiliate_commissions_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_affiliate_commissions("*", ajaxw+" ("+gft_affiliate_commissions(qstr)+") "+combined_query+"  order by primkey desc ", affiliate_commissions_list_cols+additional_cols_str, "",affiliate_commissions_qret_fun, "c=>"+affiliate_commissions_list_nodes_str, affiliate_commissions_pagination, req_url);
   ///get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_affiliate_commissions(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_affiliate_commissions("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="") 

}


//qddata
function qaffiliate_commissions_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_affiliate_commissions("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")    

}



//sum 

function sum_affiliate_commissions(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_affiliate_commissions("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_affiliate_commissions(affiliate_commissions_colstr, affiliate_commissions_filter_col, affiliate_commissions_cols, affiliate_commissions_node_function_name, affiliate_commissions_callback_function_string, affiliate_commissions_ui_tag, affiliate_commissions_pagination, req_url="")

}


///request handlers 

  
  function conf_del_affiliate_commissions_(affiliate_commissions_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'affiliate_commissions_rem_(\''+affiliate_commissions_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_affiliate_commissions_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   affiliate_commissions_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_affiliate_commissions_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   affiliate_commissions_updt_(formid,"",response_fun,req_url)
 }
}

function affiliate_commissions_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "affiliate_commissions_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function affiliate_commissions_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "affiliate_commissions_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function affiliate_commissions_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteaffiliate_commissions&affiliate_commissions_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_affiliate_commissions_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('affiliate_commissions')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  affiliates Data ===============
    
      function get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")
      {
        mosyflex_sel("affiliates", affiliates_colstr, affiliates_filter_col , affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination,req_url);
        
      }
    //End get  affiliates Data ===============

    //Start insert  affiliates Data ===============

	function add_affiliates(affiliates_cols, affiliates_vals, affiliates_callback_function_string)
    {
		
        mosyajax_create_data("affiliates", affiliates_cols, affiliates_vals, affiliates_callback_function_string);
     }
     
    //End insert  affiliates Data ===============

    
    //Start update  affiliates Data ===============

    function update_affiliates(affiliates_update_str, affiliates_where_str, affiliates_callback_function_string){
    
		mosyajax_update("affiliates", affiliates_update_str, affiliates_where_str, affiliates_callback_function_string)
    
    }
    //end  update  affiliates Data ===============

	//Start drop  affiliates Data ===============
    function affiliates_drop(affiliates_where_str, affiliates_callback_function_string)
    {
        mosyajax_drop("affiliates", affiliates_where_str, affiliates_callback_function_string)

    }
	//End drop  affiliates Data ===============
    
    function initialize_affiliates(qstr="", affiliates_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var affiliates_token_query =qstr;
      if(qstr=="")
      {
       var affiliates_token_query_param="";
       var affiliates_js_uptoken=mosy_get_param("affiliates_uptoken");
       //alert(affiliates_js_uptoken);
       if(affiliates_js_uptoken!==undefined)
       {
       
        affiliates_token_query_param = atob(affiliates_js_uptoken);
       }
        affiliates_token_query = " where primkey='"+(affiliates_token_query_param)+"'";
        
           if (document.getElementById("affiliates_uptoken") !==null) {
           	if(document.getElementById("affiliates_uptoken").value!="")
            {
            
            var affiliates_atob_tbl_key =atob(document.getElementById("affiliates_uptoken").value);
            
                   
            affiliates_token_query = " where primkey='"+(affiliates_atob_tbl_key)+"'";

            }
           }
      }
      
      var affiliates_push_ui_data_to =affiliates_callback_function_string;
      if(affiliates_callback_function_string=="")
      {
      affiliates_push_ui_data_to = "add_affiliates_ui_data";
      }
                
      console.log(affiliates_token_query+" -- "+affiliates_js_uptoken);

	  //alert(affiliates_push_ui_data_to);

     get_affiliates("*", affiliates_token_query, "primkey", "blackhole", affiliates_push_ui_data_to, "", "", req_url);
     
     ///get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")
    }
    
    function add_affiliates_ui_data(affiliates_server_resp) 
    {
    
    ///alert(affiliates_server_resp);
    
    var json_decoded_str=JSON.parse(affiliates_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load affiliates data on the fly ==============
    
	var gft_affiliates_str="(record_id LIKE '%{{qaffiliates}}%' OR  name LIKE '%{{qaffiliates}}%' OR  tel LIKE '%{{qaffiliates}}%' OR  email LIKE '%{{qaffiliates}}%' OR  code LIKE '%{{qaffiliates}}%' OR  password LIKE '%{{qaffiliates}}%' OR  photo LIKE '%{{qaffiliates}}%' OR  date_registered LIKE '%{{qaffiliates}}%' OR  category LIKE '%{{qaffiliates}}%' OR  remark LIKE '%{{qaffiliates}}%')";
    
    function  gft_affiliates(qaffiliates_str)
    {
        	var clean_affiliates_filter_str=gft_affiliates_str.replace(/{{qaffiliates}}/g, magic_clean_str(qaffiliates_str));
            
            return  clean_affiliates_filter_str;

    }
    
    function load_affiliates(affiliates_qstr, affiliates_where_str, affiliates_ret_cols, affiliates_user_function, affiliates_result_function, affiliates_data_tray, req_url="")
    {
    
    var faffiliates_result_function="push_result";
      
    if(affiliates_result_function!="")
    {
          var faffiliates_result_function=affiliates_result_function;

    }
    	var clean_affiliates_filter_str=gft_affiliates_str.replace(/{{qaffiliates}}/g, magic_clean_str(affiliates_qstr));
        
        var faffiliates_where_str=" where "+clean_affiliates_filter_str;

    if(affiliates_where_str!="")
    {
          var faffiliates_where_str=" "+affiliates_where_str;

    }
       
      get_affiliates("*", faffiliates_where_str, affiliates_ret_cols, affiliates_user_function, faffiliates_result_function, affiliates_data_tray,"",req_url);
      ////get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")
    }
    ///=============== load affiliates data on the fly ==============


 ///=quick load 
 
function qkload_affiliates(qstr, push_fun="", ui_card="", and_query="", additional_cols="", affiliates_pagination="",req_url="")
{

	var affiliates_list_nodes_str=affiliates_list_nodes;
  
   if(ui_card!="")
   {
      affiliates_list_nodes_str=ui_card;
   }
   
   var affiliates_qret_fun="push_grid_result:affiliates_tbl_list";
   
   if(push_fun!="")
   {
    affiliates_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_affiliates("*", ajaxw+" ("+gft_affiliates(qstr)+") "+combined_query+"  order by primkey desc ", affiliates_list_cols+additional_cols_str, "",affiliates_qret_fun, "c=>"+affiliates_list_nodes_str, affiliates_pagination, req_url);
   ///get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_affiliates(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_affiliates("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="") 

}


//qddata
function qaffiliates_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_affiliates("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")    

}



//sum 

function sum_affiliates(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_affiliates("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_affiliates(affiliates_colstr, affiliates_filter_col, affiliates_cols, affiliates_node_function_name, affiliates_callback_function_string, affiliates_ui_tag, affiliates_pagination, req_url="")

}


///request handlers 

  
  function conf_del_affiliates_(affiliates_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'affiliates_rem_(\''+affiliates_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_affiliates_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   affiliates_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_affiliates_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   affiliates_updt_(formid,"",response_fun,req_url)
 }
}

function affiliates_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "affiliates_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function affiliates_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "affiliates_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function affiliates_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteaffiliates&affiliates_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_affiliates_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('affiliates')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  client_list Data ===============
    
      function get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")
      {
        mosyflex_sel("client_list", client_list_colstr, client_list_filter_col , client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination,req_url);
        
      }
    //End get  client_list Data ===============

    //Start insert  client_list Data ===============

	function add_client_list(client_list_cols, client_list_vals, client_list_callback_function_string)
    {
		
        mosyajax_create_data("client_list", client_list_cols, client_list_vals, client_list_callback_function_string);
     }
     
    //End insert  client_list Data ===============

    
    //Start update  client_list Data ===============

    function update_client_list(client_list_update_str, client_list_where_str, client_list_callback_function_string){
    
		mosyajax_update("client_list", client_list_update_str, client_list_where_str, client_list_callback_function_string)
    
    }
    //end  update  client_list Data ===============

	//Start drop  client_list Data ===============
    function client_list_drop(client_list_where_str, client_list_callback_function_string)
    {
        mosyajax_drop("client_list", client_list_where_str, client_list_callback_function_string)

    }
	//End drop  client_list Data ===============
    
    function initialize_client_list(qstr="", client_list_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var client_list_token_query =qstr;
      if(qstr=="")
      {
       var client_list_token_query_param="";
       var client_list_js_uptoken=mosy_get_param("client_list_uptoken");
       //alert(client_list_js_uptoken);
       if(client_list_js_uptoken!==undefined)
       {
       
        client_list_token_query_param = atob(client_list_js_uptoken);
       }
        client_list_token_query = " where primkey='"+(client_list_token_query_param)+"'";
        
           if (document.getElementById("client_list_uptoken") !==null) {
           	if(document.getElementById("client_list_uptoken").value!="")
            {
            
            var client_list_atob_tbl_key =atob(document.getElementById("client_list_uptoken").value);
            
                   
            client_list_token_query = " where primkey='"+(client_list_atob_tbl_key)+"'";

            }
           }
      }
      
      var client_list_push_ui_data_to =client_list_callback_function_string;
      if(client_list_callback_function_string=="")
      {
      client_list_push_ui_data_to = "add_client_list_ui_data";
      }
                
      console.log(client_list_token_query+" -- "+client_list_js_uptoken);

	  //alert(client_list_push_ui_data_to);

     get_client_list("*", client_list_token_query, "primkey", "blackhole", client_list_push_ui_data_to, "", "", req_url);
     
     ///get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")
    }
    
    function add_client_list_ui_data(client_list_server_resp) 
    {
    
    ///alert(client_list_server_resp);
    
    var json_decoded_str=JSON.parse(client_list_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load client_list data on the fly ==============
    
	var gft_client_list_str="(record_id LIKE '%{{qclient_list}}%' OR  client_name LIKE '%{{qclient_list}}%' OR  tel LIKE '%{{qclient_list}}%' OR  email LIKE '%{{qclient_list}}%' OR  username LIKE '%{{qclient_list}}%' OR  active_service LIKE '%{{qclient_list}}%' OR  device_type LIKE '%{{qclient_list}}%' OR  operating_system LIKE '%{{qclient_list}}%' OR  device_key LIKE '%{{qclient_list}}%' OR  macaddress LIKE '%{{qclient_list}}%' OR  reffered_by LIKE '%{{qclient_list}}%' OR  commission_amount LIKE '%{{qclient_list}}%' OR  date_registered LIKE '%{{qclient_list}}%' OR  package_amount LIKE '%{{qclient_list}}%' OR  expiring_on LIKE '%{{qclient_list}}%' OR  account_status LIKE '%{{qclient_list}}%' OR  user_pic LIKE '%{{qclient_list}}%' OR  city LIKE '%{{qclient_list}}%' OR  town LIKE '%{{qclient_list}}%' OR  client_group LIKE '%{{qclient_list}}%' OR  trial_service_date LIKE '%{{qclient_list}}%' OR  remark LIKE '%{{qclient_list}}%')";
    
    function  gft_client_list(qclient_list_str)
    {
        	var clean_client_list_filter_str=gft_client_list_str.replace(/{{qclient_list}}/g, magic_clean_str(qclient_list_str));
            
            return  clean_client_list_filter_str;

    }
    
    function load_client_list(client_list_qstr, client_list_where_str, client_list_ret_cols, client_list_user_function, client_list_result_function, client_list_data_tray, req_url="")
    {
    
    var fclient_list_result_function="push_result";
      
    if(client_list_result_function!="")
    {
          var fclient_list_result_function=client_list_result_function;

    }
    	var clean_client_list_filter_str=gft_client_list_str.replace(/{{qclient_list}}/g, magic_clean_str(client_list_qstr));
        
        var fclient_list_where_str=" where "+clean_client_list_filter_str;

    if(client_list_where_str!="")
    {
          var fclient_list_where_str=" "+client_list_where_str;

    }
       
      get_client_list("*", fclient_list_where_str, client_list_ret_cols, client_list_user_function, fclient_list_result_function, client_list_data_tray,"",req_url);
      ////get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")
    }
    ///=============== load client_list data on the fly ==============


 ///=quick load 
 
function qkload_client_list(qstr, push_fun="", ui_card="", and_query="", additional_cols="", client_list_pagination="",req_url="")
{

	var client_list_list_nodes_str=client_list_list_nodes;
  
   if(ui_card!="")
   {
      client_list_list_nodes_str=ui_card;
   }
   
   var client_list_qret_fun="push_grid_result:client_list_tbl_list";
   
   if(push_fun!="")
   {
    client_list_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_client_list("*", ajaxw+" ("+gft_client_list(qstr)+") "+combined_query+"  order by primkey desc ", client_list_list_cols+additional_cols_str, "",client_list_qret_fun, "c=>"+client_list_list_nodes_str, client_list_pagination, req_url);
   ///get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_client_list(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_client_list("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="") 

}


//qddata
function qclient_list_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_client_list("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")    

}



//sum 

function sum_client_list(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_client_list("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_client_list(client_list_colstr, client_list_filter_col, client_list_cols, client_list_node_function_name, client_list_callback_function_string, client_list_ui_tag, client_list_pagination, req_url="")

}


///request handlers 

  
  function conf_del_client_list_(client_list_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'client_list_rem_(\''+client_list_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_client_list_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   client_list_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_client_list_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   client_list_updt_(formid,"",response_fun,req_url)
 }
}

function client_list_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "client_list_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function client_list_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "client_list_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function client_list_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteclient_list&client_list_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_client_list_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('client_list')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  client_service_list Data ===============
    
      function get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")
      {
        mosyflex_sel("client_service_list", client_service_list_colstr, client_service_list_filter_col , client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination,req_url);
        
      }
    //End get  client_service_list Data ===============

    //Start insert  client_service_list Data ===============

	function add_client_service_list(client_service_list_cols, client_service_list_vals, client_service_list_callback_function_string)
    {
		
        mosyajax_create_data("client_service_list", client_service_list_cols, client_service_list_vals, client_service_list_callback_function_string);
     }
     
    //End insert  client_service_list Data ===============

    
    //Start update  client_service_list Data ===============

    function update_client_service_list(client_service_list_update_str, client_service_list_where_str, client_service_list_callback_function_string){
    
		mosyajax_update("client_service_list", client_service_list_update_str, client_service_list_where_str, client_service_list_callback_function_string)
    
    }
    //end  update  client_service_list Data ===============

	//Start drop  client_service_list Data ===============
    function client_service_list_drop(client_service_list_where_str, client_service_list_callback_function_string)
    {
        mosyajax_drop("client_service_list", client_service_list_where_str, client_service_list_callback_function_string)

    }
	//End drop  client_service_list Data ===============
    
    function initialize_client_service_list(qstr="", client_service_list_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var client_service_list_token_query =qstr;
      if(qstr=="")
      {
       var client_service_list_token_query_param="";
       var client_service_list_js_uptoken=mosy_get_param("client_service_list_uptoken");
       //alert(client_service_list_js_uptoken);
       if(client_service_list_js_uptoken!==undefined)
       {
       
        client_service_list_token_query_param = atob(client_service_list_js_uptoken);
       }
        client_service_list_token_query = " where primkey='"+(client_service_list_token_query_param)+"'";
        
           if (document.getElementById("client_service_list_uptoken") !==null) {
           	if(document.getElementById("client_service_list_uptoken").value!="")
            {
            
            var client_service_list_atob_tbl_key =atob(document.getElementById("client_service_list_uptoken").value);
            
                   
            client_service_list_token_query = " where primkey='"+(client_service_list_atob_tbl_key)+"'";

            }
           }
      }
      
      var client_service_list_push_ui_data_to =client_service_list_callback_function_string;
      if(client_service_list_callback_function_string=="")
      {
      client_service_list_push_ui_data_to = "add_client_service_list_ui_data";
      }
                
      console.log(client_service_list_token_query+" -- "+client_service_list_js_uptoken);

	  //alert(client_service_list_push_ui_data_to);

     get_client_service_list("*", client_service_list_token_query, "primkey", "blackhole", client_service_list_push_ui_data_to, "", "", req_url);
     
     ///get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")
    }
    
    function add_client_service_list_ui_data(client_service_list_server_resp) 
    {
    
    ///alert(client_service_list_server_resp);
    
    var json_decoded_str=JSON.parse(client_service_list_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load client_service_list data on the fly ==============
    
	var gft_client_service_list_str="(record_id LIKE '%{{qclient_service_list}}%' OR  service_name LIKE '%{{qclient_service_list}}%' OR  client_name LIKE '%{{qclient_service_list}}%' OR  date_added LIKE '%{{qclient_service_list}}%' OR  expiry_date LIKE '%{{qclient_service_list}}%' OR  amount LIKE '%{{qclient_service_list}}%' OR  status LIKE '%{{qclient_service_list}}%' OR  remark LIKE '%{{qclient_service_list}}%' OR  hive_site_id LIKE '%{{qclient_service_list}}%' OR  hive_site_name LIKE '%{{qclient_service_list}}%')";
    
    function  gft_client_service_list(qclient_service_list_str)
    {
        	var clean_client_service_list_filter_str=gft_client_service_list_str.replace(/{{qclient_service_list}}/g, magic_clean_str(qclient_service_list_str));
            
            return  clean_client_service_list_filter_str;

    }
    
    function load_client_service_list(client_service_list_qstr, client_service_list_where_str, client_service_list_ret_cols, client_service_list_user_function, client_service_list_result_function, client_service_list_data_tray, req_url="")
    {
    
    var fclient_service_list_result_function="push_result";
      
    if(client_service_list_result_function!="")
    {
          var fclient_service_list_result_function=client_service_list_result_function;

    }
    	var clean_client_service_list_filter_str=gft_client_service_list_str.replace(/{{qclient_service_list}}/g, magic_clean_str(client_service_list_qstr));
        
        var fclient_service_list_where_str=" where "+clean_client_service_list_filter_str;

    if(client_service_list_where_str!="")
    {
          var fclient_service_list_where_str=" "+client_service_list_where_str;

    }
       
      get_client_service_list("*", fclient_service_list_where_str, client_service_list_ret_cols, client_service_list_user_function, fclient_service_list_result_function, client_service_list_data_tray,"",req_url);
      ////get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")
    }
    ///=============== load client_service_list data on the fly ==============


 ///=quick load 
 
function qkload_client_service_list(qstr, push_fun="", ui_card="", and_query="", additional_cols="", client_service_list_pagination="",req_url="")
{

	var client_service_list_list_nodes_str=client_service_list_list_nodes;
  
   if(ui_card!="")
   {
      client_service_list_list_nodes_str=ui_card;
   }
   
   var client_service_list_qret_fun="push_grid_result:client_service_list_tbl_list";
   
   if(push_fun!="")
   {
    client_service_list_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_client_service_list("*", ajaxw+" ("+gft_client_service_list(qstr)+") "+combined_query+"  order by primkey desc ", client_service_list_list_cols+additional_cols_str, "",client_service_list_qret_fun, "c=>"+client_service_list_list_nodes_str, client_service_list_pagination, req_url);
   ///get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_client_service_list(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_client_service_list("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="") 

}


//qddata
function qclient_service_list_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_client_service_list("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")    

}



//sum 

function sum_client_service_list(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_client_service_list("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_client_service_list(client_service_list_colstr, client_service_list_filter_col, client_service_list_cols, client_service_list_node_function_name, client_service_list_callback_function_string, client_service_list_ui_tag, client_service_list_pagination, req_url="")

}


///request handlers 

  
  function conf_del_client_service_list_(client_service_list_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'client_service_list_rem_(\''+client_service_list_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_client_service_list_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   client_service_list_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_client_service_list_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   client_service_list_updt_(formid,"",response_fun,req_url)
 }
}

function client_service_list_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "client_service_list_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function client_service_list_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "client_service_list_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function client_service_list_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteclient_service_list&client_service_list_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_client_service_list_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('client_service_list')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  message_templates Data ===============
    
      function get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")
      {
        mosyflex_sel("message_templates", message_templates_colstr, message_templates_filter_col , message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination,req_url);
        
      }
    //End get  message_templates Data ===============

    //Start insert  message_templates Data ===============

	function add_message_templates(message_templates_cols, message_templates_vals, message_templates_callback_function_string)
    {
		
        mosyajax_create_data("message_templates", message_templates_cols, message_templates_vals, message_templates_callback_function_string);
     }
     
    //End insert  message_templates Data ===============

    
    //Start update  message_templates Data ===============

    function update_message_templates(message_templates_update_str, message_templates_where_str, message_templates_callback_function_string){
    
		mosyajax_update("message_templates", message_templates_update_str, message_templates_where_str, message_templates_callback_function_string)
    
    }
    //end  update  message_templates Data ===============

	//Start drop  message_templates Data ===============
    function message_templates_drop(message_templates_where_str, message_templates_callback_function_string)
    {
        mosyajax_drop("message_templates", message_templates_where_str, message_templates_callback_function_string)

    }
	//End drop  message_templates Data ===============
    
    function initialize_message_templates(qstr="", message_templates_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var message_templates_token_query =qstr;
      if(qstr=="")
      {
       var message_templates_token_query_param="";
       var message_templates_js_uptoken=mosy_get_param("message_templates_uptoken");
       //alert(message_templates_js_uptoken);
       if(message_templates_js_uptoken!==undefined)
       {
       
        message_templates_token_query_param = atob(message_templates_js_uptoken);
       }
        message_templates_token_query = " where primkey='"+(message_templates_token_query_param)+"'";
        
           if (document.getElementById("message_templates_uptoken") !==null) {
           	if(document.getElementById("message_templates_uptoken").value!="")
            {
            
            var message_templates_atob_tbl_key =atob(document.getElementById("message_templates_uptoken").value);
            
                   
            message_templates_token_query = " where primkey='"+(message_templates_atob_tbl_key)+"'";

            }
           }
      }
      
      var message_templates_push_ui_data_to =message_templates_callback_function_string;
      if(message_templates_callback_function_string=="")
      {
      message_templates_push_ui_data_to = "add_message_templates_ui_data";
      }
                
      console.log(message_templates_token_query+" -- "+message_templates_js_uptoken);

	  //alert(message_templates_push_ui_data_to);

     get_message_templates("*", message_templates_token_query, "primkey", "blackhole", message_templates_push_ui_data_to, "", "", req_url);
     
     ///get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")
    }
    
    function add_message_templates_ui_data(message_templates_server_resp) 
    {
    
    ///alert(message_templates_server_resp);
    
    var json_decoded_str=JSON.parse(message_templates_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load message_templates data on the fly ==============
    
	var gft_message_templates_str="(record_id LIKE '%{{qmessage_templates}}%' OR  template_name LIKE '%{{qmessage_templates}}%' OR  message_subject LIKE '%{{qmessage_templates}}%' OR  message_template LIKE '%{{qmessage_templates}}%' OR  template_code LIKE '%{{qmessage_templates}}%')";
    
    function  gft_message_templates(qmessage_templates_str)
    {
        	var clean_message_templates_filter_str=gft_message_templates_str.replace(/{{qmessage_templates}}/g, magic_clean_str(qmessage_templates_str));
            
            return  clean_message_templates_filter_str;

    }
    
    function load_message_templates(message_templates_qstr, message_templates_where_str, message_templates_ret_cols, message_templates_user_function, message_templates_result_function, message_templates_data_tray, req_url="")
    {
    
    var fmessage_templates_result_function="push_result";
      
    if(message_templates_result_function!="")
    {
          var fmessage_templates_result_function=message_templates_result_function;

    }
    	var clean_message_templates_filter_str=gft_message_templates_str.replace(/{{qmessage_templates}}/g, magic_clean_str(message_templates_qstr));
        
        var fmessage_templates_where_str=" where "+clean_message_templates_filter_str;

    if(message_templates_where_str!="")
    {
          var fmessage_templates_where_str=" "+message_templates_where_str;

    }
       
      get_message_templates("*", fmessage_templates_where_str, message_templates_ret_cols, message_templates_user_function, fmessage_templates_result_function, message_templates_data_tray,"",req_url);
      ////get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")
    }
    ///=============== load message_templates data on the fly ==============


 ///=quick load 
 
function qkload_message_templates(qstr, push_fun="", ui_card="", and_query="", additional_cols="", message_templates_pagination="",req_url="")
{

	var message_templates_list_nodes_str=message_templates_list_nodes;
  
   if(ui_card!="")
   {
      message_templates_list_nodes_str=ui_card;
   }
   
   var message_templates_qret_fun="push_grid_result:message_templates_tbl_list";
   
   if(push_fun!="")
   {
    message_templates_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_message_templates("*", ajaxw+" ("+gft_message_templates(qstr)+") "+combined_query+"  order by primkey desc ", message_templates_list_cols+additional_cols_str, "",message_templates_qret_fun, "c=>"+message_templates_list_nodes_str, message_templates_pagination, req_url);
   ///get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_message_templates(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_message_templates("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="") 

}


//qddata
function qmessage_templates_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_message_templates("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")    

}



//sum 

function sum_message_templates(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_message_templates("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_message_templates(message_templates_colstr, message_templates_filter_col, message_templates_cols, message_templates_node_function_name, message_templates_callback_function_string, message_templates_ui_tag, message_templates_pagination, req_url="")

}


///request handlers 

  
  function conf_del_message_templates_(message_templates_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'message_templates_rem_(\''+message_templates_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_message_templates_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   message_templates_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_message_templates_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   message_templates_updt_(formid,"",response_fun,req_url)
 }
}

function message_templates_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "message_templates_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function message_templates_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "message_templates_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function message_templates_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemessage_templates&message_templates_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_message_templates_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('message_templates')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  messaging Data ===============
    
      function get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")
      {
        mosyflex_sel("messaging", messaging_colstr, messaging_filter_col , messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination,req_url);
        
      }
    //End get  messaging Data ===============

    //Start insert  messaging Data ===============

	function add_messaging(messaging_cols, messaging_vals, messaging_callback_function_string)
    {
		
        mosyajax_create_data("messaging", messaging_cols, messaging_vals, messaging_callback_function_string);
     }
     
    //End insert  messaging Data ===============

    
    //Start update  messaging Data ===============

    function update_messaging(messaging_update_str, messaging_where_str, messaging_callback_function_string){
    
		mosyajax_update("messaging", messaging_update_str, messaging_where_str, messaging_callback_function_string)
    
    }
    //end  update  messaging Data ===============

	//Start drop  messaging Data ===============
    function messaging_drop(messaging_where_str, messaging_callback_function_string)
    {
        mosyajax_drop("messaging", messaging_where_str, messaging_callback_function_string)

    }
	//End drop  messaging Data ===============
    
    function initialize_messaging(qstr="", messaging_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var messaging_token_query =qstr;
      if(qstr=="")
      {
       var messaging_token_query_param="";
       var messaging_js_uptoken=mosy_get_param("messaging_uptoken");
       //alert(messaging_js_uptoken);
       if(messaging_js_uptoken!==undefined)
       {
       
        messaging_token_query_param = atob(messaging_js_uptoken);
       }
        messaging_token_query = " where primkey='"+(messaging_token_query_param)+"'";
        
           if (document.getElementById("messaging_uptoken") !==null) {
           	if(document.getElementById("messaging_uptoken").value!="")
            {
            
            var messaging_atob_tbl_key =atob(document.getElementById("messaging_uptoken").value);
            
                   
            messaging_token_query = " where primkey='"+(messaging_atob_tbl_key)+"'";

            }
           }
      }
      
      var messaging_push_ui_data_to =messaging_callback_function_string;
      if(messaging_callback_function_string=="")
      {
      messaging_push_ui_data_to = "add_messaging_ui_data";
      }
                
      console.log(messaging_token_query+" -- "+messaging_js_uptoken);

	  //alert(messaging_push_ui_data_to);

     get_messaging("*", messaging_token_query, "primkey", "blackhole", messaging_push_ui_data_to, "", "", req_url);
     
     ///get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")
    }
    
    function add_messaging_ui_data(messaging_server_resp) 
    {
    
    ///alert(messaging_server_resp);
    
    var json_decoded_str=JSON.parse(messaging_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load messaging data on the fly ==============
    
	var gft_messaging_str="(messageid LIKE '%{{qmessaging}}%' OR  receiver_contacts LIKE '%{{qmessaging}}%' OR  reciver_names LIKE '%{{qmessaging}}%' OR  message_type LIKE '%{{qmessaging}}%' OR  site_id LIKE '%{{qmessaging}}%' OR  group_name LIKE '%{{qmessaging}}%' OR  message_date LIKE '%{{qmessaging}}%' OR  sent_state LIKE '%{{qmessaging}}%' OR  msg_read_state LIKE '%{{qmessaging}}%' OR  subject LIKE '%{{qmessaging}}%' OR  message_label LIKE '%{{qmessaging}}%' OR  about LIKE '%{{qmessaging}}%' OR  sms_cost LIKE '%{{qmessaging}}%' OR  page_count LIKE '%{{qmessaging}}%' OR  hive_site_id LIKE '%{{qmessaging}}%' OR  hive_site_name LIKE '%{{qmessaging}}%' OR  custom_dictionary LIKE '%{{qmessaging}}%' OR  message_signature LIKE '%{{qmessaging}}%')";
    
    function  gft_messaging(qmessaging_str)
    {
        	var clean_messaging_filter_str=gft_messaging_str.replace(/{{qmessaging}}/g, magic_clean_str(qmessaging_str));
            
            return  clean_messaging_filter_str;

    }
    
    function load_messaging(messaging_qstr, messaging_where_str, messaging_ret_cols, messaging_user_function, messaging_result_function, messaging_data_tray, req_url="")
    {
    
    var fmessaging_result_function="push_result";
      
    if(messaging_result_function!="")
    {
          var fmessaging_result_function=messaging_result_function;

    }
    	var clean_messaging_filter_str=gft_messaging_str.replace(/{{qmessaging}}/g, magic_clean_str(messaging_qstr));
        
        var fmessaging_where_str=" where "+clean_messaging_filter_str;

    if(messaging_where_str!="")
    {
          var fmessaging_where_str=" "+messaging_where_str;

    }
       
      get_messaging("*", fmessaging_where_str, messaging_ret_cols, messaging_user_function, fmessaging_result_function, messaging_data_tray,"",req_url);
      ////get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")
    }
    ///=============== load messaging data on the fly ==============


 ///=quick load 
 
function qkload_messaging(qstr, push_fun="", ui_card="", and_query="", additional_cols="", messaging_pagination="",req_url="")
{

	var messaging_list_nodes_str=messaging_list_nodes;
  
   if(ui_card!="")
   {
      messaging_list_nodes_str=ui_card;
   }
   
   var messaging_qret_fun="push_grid_result:messaging_tbl_list";
   
   if(push_fun!="")
   {
    messaging_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_messaging("*", ajaxw+" ("+gft_messaging(qstr)+") "+combined_query+"  order by primkey desc ", messaging_list_cols+additional_cols_str, "",messaging_qret_fun, "c=>"+messaging_list_nodes_str, messaging_pagination, req_url);
   ///get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_messaging(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_messaging("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="") 

}


//qddata
function qmessaging_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_messaging("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")    

}



//sum 

function sum_messaging(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_messaging("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_messaging(messaging_colstr, messaging_filter_col, messaging_cols, messaging_node_function_name, messaging_callback_function_string, messaging_ui_tag, messaging_pagination, req_url="")

}


///request handlers 

  
  function conf_del_messaging_(messaging_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'messaging_rem_(\''+messaging_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_messaging_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   messaging_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_messaging_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   messaging_updt_(formid,"",response_fun,req_url)
 }
}

function messaging_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "messaging_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function messaging_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "messaging_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function messaging_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemessaging&messaging_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_messaging_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('messaging')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  mosy_sql_roll_back Data ===============
    
      function get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
      {
        mosyflex_sel("mosy_sql_roll_back", mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col , mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination,req_url);
        
      }
    //End get  mosy_sql_roll_back Data ===============

    //Start insert  mosy_sql_roll_back Data ===============

	function add_mosy_sql_roll_back(mosy_sql_roll_back_cols, mosy_sql_roll_back_vals, mosy_sql_roll_back_callback_function_string)
    {
		
        mosyajax_create_data("mosy_sql_roll_back", mosy_sql_roll_back_cols, mosy_sql_roll_back_vals, mosy_sql_roll_back_callback_function_string);
     }
     
    //End insert  mosy_sql_roll_back Data ===============

    
    //Start update  mosy_sql_roll_back Data ===============

    function update_mosy_sql_roll_back(mosy_sql_roll_back_update_str, mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string){
    
		mosyajax_update("mosy_sql_roll_back", mosy_sql_roll_back_update_str, mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)
    
    }
    //end  update  mosy_sql_roll_back Data ===============

	//Start drop  mosy_sql_roll_back Data ===============
    function mosy_sql_roll_back_drop(mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)
    {
        mosyajax_drop("mosy_sql_roll_back", mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)

    }
	//End drop  mosy_sql_roll_back Data ===============
    
    function initialize_mosy_sql_roll_back(qstr="", mosy_sql_roll_back_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var mosy_sql_roll_back_token_query =qstr;
      if(qstr=="")
      {
       var mosy_sql_roll_back_token_query_param="";
       var mosy_sql_roll_back_js_uptoken=mosy_get_param("mosy_sql_roll_back_uptoken");
       //alert(mosy_sql_roll_back_js_uptoken);
       if(mosy_sql_roll_back_js_uptoken!==undefined)
       {
       
        mosy_sql_roll_back_token_query_param = atob(mosy_sql_roll_back_js_uptoken);
       }
        mosy_sql_roll_back_token_query = " where primkey='"+(mosy_sql_roll_back_token_query_param)+"'";
        
           if (document.getElementById("mosy_sql_roll_back_uptoken") !==null) {
           	if(document.getElementById("mosy_sql_roll_back_uptoken").value!="")
            {
            
            var mosy_sql_roll_back_atob_tbl_key =atob(document.getElementById("mosy_sql_roll_back_uptoken").value);
            
                   
            mosy_sql_roll_back_token_query = " where primkey='"+(mosy_sql_roll_back_atob_tbl_key)+"'";

            }
           }
      }
      
      var mosy_sql_roll_back_push_ui_data_to =mosy_sql_roll_back_callback_function_string;
      if(mosy_sql_roll_back_callback_function_string=="")
      {
      mosy_sql_roll_back_push_ui_data_to = "add_mosy_sql_roll_back_ui_data";
      }
                
      console.log(mosy_sql_roll_back_token_query+" -- "+mosy_sql_roll_back_js_uptoken);

	  //alert(mosy_sql_roll_back_push_ui_data_to);

     get_mosy_sql_roll_back("*", mosy_sql_roll_back_token_query, "primkey", "blackhole", mosy_sql_roll_back_push_ui_data_to, "", "", req_url);
     
     ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
    }
    
    function add_mosy_sql_roll_back_ui_data(mosy_sql_roll_back_server_resp) 
    {
    
    ///alert(mosy_sql_roll_back_server_resp);
    
    var json_decoded_str=JSON.parse(mosy_sql_roll_back_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load mosy_sql_roll_back data on the fly ==============
    
	var gft_mosy_sql_roll_back_str="(roll_bk_key LIKE '%{{qmosy_sql_roll_back}}%' OR  table_name LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_type LIKE '%{{qmosy_sql_roll_back}}%' OR  where_str LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_timestamp LIKE '%{{qmosy_sql_roll_back}}%' OR  value_entries LIKE '%{{qmosy_sql_roll_back}}%')";
    
    function  gft_mosy_sql_roll_back(qmosy_sql_roll_back_str)
    {
        	var clean_mosy_sql_roll_back_filter_str=gft_mosy_sql_roll_back_str.replace(/{{qmosy_sql_roll_back}}/g, magic_clean_str(qmosy_sql_roll_back_str));
            
            return  clean_mosy_sql_roll_back_filter_str;

    }
    
    function load_mosy_sql_roll_back(mosy_sql_roll_back_qstr, mosy_sql_roll_back_where_str, mosy_sql_roll_back_ret_cols, mosy_sql_roll_back_user_function, mosy_sql_roll_back_result_function, mosy_sql_roll_back_data_tray, req_url="")
    {
    
    var fmosy_sql_roll_back_result_function="push_result";
      
    if(mosy_sql_roll_back_result_function!="")
    {
          var fmosy_sql_roll_back_result_function=mosy_sql_roll_back_result_function;

    }
    	var clean_mosy_sql_roll_back_filter_str=gft_mosy_sql_roll_back_str.replace(/{{qmosy_sql_roll_back}}/g, magic_clean_str(mosy_sql_roll_back_qstr));
        
        var fmosy_sql_roll_back_where_str=" where "+clean_mosy_sql_roll_back_filter_str;

    if(mosy_sql_roll_back_where_str!="")
    {
          var fmosy_sql_roll_back_where_str=" "+mosy_sql_roll_back_where_str;

    }
       
      get_mosy_sql_roll_back("*", fmosy_sql_roll_back_where_str, mosy_sql_roll_back_ret_cols, mosy_sql_roll_back_user_function, fmosy_sql_roll_back_result_function, mosy_sql_roll_back_data_tray,"",req_url);
      ////get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
    }
    ///=============== load mosy_sql_roll_back data on the fly ==============


 ///=quick load 
 
function qkload_mosy_sql_roll_back(qstr, push_fun="", ui_card="", and_query="", additional_cols="", mosy_sql_roll_back_pagination="",req_url="")
{

	var mosy_sql_roll_back_list_nodes_str=mosy_sql_roll_back_list_nodes;
  
   if(ui_card!="")
   {
      mosy_sql_roll_back_list_nodes_str=ui_card;
   }
   
   var mosy_sql_roll_back_qret_fun="push_grid_result:mosy_sql_roll_back_tbl_list";
   
   if(push_fun!="")
   {
    mosy_sql_roll_back_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_mosy_sql_roll_back("*", ajaxw+" ("+gft_mosy_sql_roll_back(qstr)+") "+combined_query+"  order by primkey desc ", mosy_sql_roll_back_list_cols+additional_cols_str, "",mosy_sql_roll_back_qret_fun, "c=>"+mosy_sql_roll_back_list_nodes_str, mosy_sql_roll_back_pagination, req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_mosy_sql_roll_back(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_mosy_sql_roll_back("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="") 

}


//qddata
function qmosy_sql_roll_back_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_mosy_sql_roll_back("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")    

}



//sum 

function sum_mosy_sql_roll_back(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_mosy_sql_roll_back("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")

}


///request handlers 

  
  function conf_del_mosy_sql_roll_back_(mosy_sql_roll_back_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'mosy_sql_roll_back_rem_(\''+mosy_sql_roll_back_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_mosy_sql_roll_back_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   mosy_sql_roll_back_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_mosy_sql_roll_back_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   mosy_sql_roll_back_updt_(formid,"",response_fun,req_url)
 }
}

function mosy_sql_roll_back_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosy_sql_roll_back_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function mosy_sql_roll_back_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosy_sql_roll_back_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function mosy_sql_roll_back_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemosy_sql_roll_back&mosy_sql_roll_back_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_mosy_sql_roll_back_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('mosy_sql_roll_back')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  mosycomms_array Data ===============
    
      function get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")
      {
        mosyflex_sel("mosycomms_array", mosycomms_array_colstr, mosycomms_array_filter_col , mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination,req_url);
        
      }
    //End get  mosycomms_array Data ===============

    //Start insert  mosycomms_array Data ===============

	function add_mosycomms_array(mosycomms_array_cols, mosycomms_array_vals, mosycomms_array_callback_function_string)
    {
		
        mosyajax_create_data("mosycomms_array", mosycomms_array_cols, mosycomms_array_vals, mosycomms_array_callback_function_string);
     }
     
    //End insert  mosycomms_array Data ===============

    
    //Start update  mosycomms_array Data ===============

    function update_mosycomms_array(mosycomms_array_update_str, mosycomms_array_where_str, mosycomms_array_callback_function_string){
    
		mosyajax_update("mosycomms_array", mosycomms_array_update_str, mosycomms_array_where_str, mosycomms_array_callback_function_string)
    
    }
    //end  update  mosycomms_array Data ===============

	//Start drop  mosycomms_array Data ===============
    function mosycomms_array_drop(mosycomms_array_where_str, mosycomms_array_callback_function_string)
    {
        mosyajax_drop("mosycomms_array", mosycomms_array_where_str, mosycomms_array_callback_function_string)

    }
	//End drop  mosycomms_array Data ===============
    
    function initialize_mosycomms_array(qstr="", mosycomms_array_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var mosycomms_array_token_query =qstr;
      if(qstr=="")
      {
       var mosycomms_array_token_query_param="";
       var mosycomms_array_js_uptoken=mosy_get_param("mosycomms_array_uptoken");
       //alert(mosycomms_array_js_uptoken);
       if(mosycomms_array_js_uptoken!==undefined)
       {
       
        mosycomms_array_token_query_param = atob(mosycomms_array_js_uptoken);
       }
        mosycomms_array_token_query = " where primkey='"+(mosycomms_array_token_query_param)+"'";
        
           if (document.getElementById("mosycomms_array_uptoken") !==null) {
           	if(document.getElementById("mosycomms_array_uptoken").value!="")
            {
            
            var mosycomms_array_atob_tbl_key =atob(document.getElementById("mosycomms_array_uptoken").value);
            
                   
            mosycomms_array_token_query = " where primkey='"+(mosycomms_array_atob_tbl_key)+"'";

            }
           }
      }
      
      var mosycomms_array_push_ui_data_to =mosycomms_array_callback_function_string;
      if(mosycomms_array_callback_function_string=="")
      {
      mosycomms_array_push_ui_data_to = "add_mosycomms_array_ui_data";
      }
                
      console.log(mosycomms_array_token_query+" -- "+mosycomms_array_js_uptoken);

	  //alert(mosycomms_array_push_ui_data_to);

     get_mosycomms_array("*", mosycomms_array_token_query, "primkey", "blackhole", mosycomms_array_push_ui_data_to, "", "", req_url);
     
     ///get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")
    }
    
    function add_mosycomms_array_ui_data(mosycomms_array_server_resp) 
    {
    
    ///alert(mosycomms_array_server_resp);
    
    var json_decoded_str=JSON.parse(mosycomms_array_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load mosycomms_array data on the fly ==============
    
	var gft_mosycomms_array_str="(messageid LIKE '%{{qmosycomms_array}}%' OR  receiver_contacts LIKE '%{{qmosycomms_array}}%' OR  reciver_names LIKE '%{{qmosycomms_array}}%' OR  message_type LIKE '%{{qmosycomms_array}}%' OR  site_id LIKE '%{{qmosycomms_array}}%' OR  group_name LIKE '%{{qmosycomms_array}}%' OR  message_date LIKE '%{{qmosycomms_array}}%' OR  sent_state LIKE '%{{qmosycomms_array}}%' OR  msg_read_state LIKE '%{{qmosycomms_array}}%' OR  subject LIKE '%{{qmosycomms_array}}%' OR  message_label LIKE '%{{qmosycomms_array}}%' OR  message LIKE '%{{qmosycomms_array}}%' OR  delvery_receipt LIKE '%{{qmosycomms_array}}%' OR  mosycomms_dictionary LIKE '%{{qmosycomms_array}}%' OR  sms_cost LIKE '%{{qmosycomms_array}}%' OR  page_count LIKE '%{{qmosycomms_array}}%' OR  hive_site_id LIKE '%{{qmosycomms_array}}%' OR  hive_site_name LIKE '%{{qmosycomms_array}}%')";
    
    function  gft_mosycomms_array(qmosycomms_array_str)
    {
        	var clean_mosycomms_array_filter_str=gft_mosycomms_array_str.replace(/{{qmosycomms_array}}/g, magic_clean_str(qmosycomms_array_str));
            
            return  clean_mosycomms_array_filter_str;

    }
    
    function load_mosycomms_array(mosycomms_array_qstr, mosycomms_array_where_str, mosycomms_array_ret_cols, mosycomms_array_user_function, mosycomms_array_result_function, mosycomms_array_data_tray, req_url="")
    {
    
    var fmosycomms_array_result_function="push_result";
      
    if(mosycomms_array_result_function!="")
    {
          var fmosycomms_array_result_function=mosycomms_array_result_function;

    }
    	var clean_mosycomms_array_filter_str=gft_mosycomms_array_str.replace(/{{qmosycomms_array}}/g, magic_clean_str(mosycomms_array_qstr));
        
        var fmosycomms_array_where_str=" where "+clean_mosycomms_array_filter_str;

    if(mosycomms_array_where_str!="")
    {
          var fmosycomms_array_where_str=" "+mosycomms_array_where_str;

    }
       
      get_mosycomms_array("*", fmosycomms_array_where_str, mosycomms_array_ret_cols, mosycomms_array_user_function, fmosycomms_array_result_function, mosycomms_array_data_tray,"",req_url);
      ////get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")
    }
    ///=============== load mosycomms_array data on the fly ==============


 ///=quick load 
 
function qkload_mosycomms_array(qstr, push_fun="", ui_card="", and_query="", additional_cols="", mosycomms_array_pagination="",req_url="")
{

	var mosycomms_array_list_nodes_str=mosycomms_array_list_nodes;
  
   if(ui_card!="")
   {
      mosycomms_array_list_nodes_str=ui_card;
   }
   
   var mosycomms_array_qret_fun="push_grid_result:mosycomms_array_tbl_list";
   
   if(push_fun!="")
   {
    mosycomms_array_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_mosycomms_array("*", ajaxw+" ("+gft_mosycomms_array(qstr)+") "+combined_query+"  order by primkey desc ", mosycomms_array_list_cols+additional_cols_str, "",mosycomms_array_qret_fun, "c=>"+mosycomms_array_list_nodes_str, mosycomms_array_pagination, req_url);
   ///get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_mosycomms_array(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_mosycomms_array("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="") 

}


//qddata
function qmosycomms_array_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_mosycomms_array("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")    

}



//sum 

function sum_mosycomms_array(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_mosycomms_array("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_mosycomms_array(mosycomms_array_colstr, mosycomms_array_filter_col, mosycomms_array_cols, mosycomms_array_node_function_name, mosycomms_array_callback_function_string, mosycomms_array_ui_tag, mosycomms_array_pagination, req_url="")

}


///request handlers 

  
  function conf_del_mosycomms_array_(mosycomms_array_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'mosycomms_array_rem_(\''+mosycomms_array_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_mosycomms_array_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   mosycomms_array_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_mosycomms_array_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   mosycomms_array_updt_(formid,"",response_fun,req_url)
 }
}

function mosycomms_array_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosycomms_array_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function mosycomms_array_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosycomms_array_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function mosycomms_array_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemosycomms_array&mosycomms_array_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_mosycomms_array_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('mosycomms_array')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  mosycomms_settings Data ===============
    
      function get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")
      {
        mosyflex_sel("mosycomms_settings", mosycomms_settings_colstr, mosycomms_settings_filter_col , mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination,req_url);
        
      }
    //End get  mosycomms_settings Data ===============

    //Start insert  mosycomms_settings Data ===============

	function add_mosycomms_settings(mosycomms_settings_cols, mosycomms_settings_vals, mosycomms_settings_callback_function_string)
    {
		
        mosyajax_create_data("mosycomms_settings", mosycomms_settings_cols, mosycomms_settings_vals, mosycomms_settings_callback_function_string);
     }
     
    //End insert  mosycomms_settings Data ===============

    
    //Start update  mosycomms_settings Data ===============

    function update_mosycomms_settings(mosycomms_settings_update_str, mosycomms_settings_where_str, mosycomms_settings_callback_function_string){
    
		mosyajax_update("mosycomms_settings", mosycomms_settings_update_str, mosycomms_settings_where_str, mosycomms_settings_callback_function_string)
    
    }
    //end  update  mosycomms_settings Data ===============

	//Start drop  mosycomms_settings Data ===============
    function mosycomms_settings_drop(mosycomms_settings_where_str, mosycomms_settings_callback_function_string)
    {
        mosyajax_drop("mosycomms_settings", mosycomms_settings_where_str, mosycomms_settings_callback_function_string)

    }
	//End drop  mosycomms_settings Data ===============
    
    function initialize_mosycomms_settings(qstr="", mosycomms_settings_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var mosycomms_settings_token_query =qstr;
      if(qstr=="")
      {
       var mosycomms_settings_token_query_param="";
       var mosycomms_settings_js_uptoken=mosy_get_param("mosycomms_settings_uptoken");
       //alert(mosycomms_settings_js_uptoken);
       if(mosycomms_settings_js_uptoken!==undefined)
       {
       
        mosycomms_settings_token_query_param = atob(mosycomms_settings_js_uptoken);
       }
        mosycomms_settings_token_query = " where primkey='"+(mosycomms_settings_token_query_param)+"'";
        
           if (document.getElementById("mosycomms_settings_uptoken") !==null) {
           	if(document.getElementById("mosycomms_settings_uptoken").value!="")
            {
            
            var mosycomms_settings_atob_tbl_key =atob(document.getElementById("mosycomms_settings_uptoken").value);
            
                   
            mosycomms_settings_token_query = " where primkey='"+(mosycomms_settings_atob_tbl_key)+"'";

            }
           }
      }
      
      var mosycomms_settings_push_ui_data_to =mosycomms_settings_callback_function_string;
      if(mosycomms_settings_callback_function_string=="")
      {
      mosycomms_settings_push_ui_data_to = "add_mosycomms_settings_ui_data";
      }
                
      console.log(mosycomms_settings_token_query+" -- "+mosycomms_settings_js_uptoken);

	  //alert(mosycomms_settings_push_ui_data_to);

     get_mosycomms_settings("*", mosycomms_settings_token_query, "primkey", "blackhole", mosycomms_settings_push_ui_data_to, "", "", req_url);
     
     ///get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")
    }
    
    function add_mosycomms_settings_ui_data(mosycomms_settings_server_resp) 
    {
    
    ///alert(mosycomms_settings_server_resp);
    
    var json_decoded_str=JSON.parse(mosycomms_settings_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load mosycomms_settings data on the fly ==============
    
	var gft_mosycomms_settings_str="(record_id LIKE '%{{qmosycomms_settings}}%' OR  company_name LIKE '%{{qmosycomms_settings}}%' OR  company_email LIKE '%{{qmosycomms_settings}}%' OR  hive_site_id LIKE '%{{qmosycomms_settings}}%' OR  hive_site_name LIKE '%{{qmosycomms_settings}}%')";
    
    function  gft_mosycomms_settings(qmosycomms_settings_str)
    {
        	var clean_mosycomms_settings_filter_str=gft_mosycomms_settings_str.replace(/{{qmosycomms_settings}}/g, magic_clean_str(qmosycomms_settings_str));
            
            return  clean_mosycomms_settings_filter_str;

    }
    
    function load_mosycomms_settings(mosycomms_settings_qstr, mosycomms_settings_where_str, mosycomms_settings_ret_cols, mosycomms_settings_user_function, mosycomms_settings_result_function, mosycomms_settings_data_tray, req_url="")
    {
    
    var fmosycomms_settings_result_function="push_result";
      
    if(mosycomms_settings_result_function!="")
    {
          var fmosycomms_settings_result_function=mosycomms_settings_result_function;

    }
    	var clean_mosycomms_settings_filter_str=gft_mosycomms_settings_str.replace(/{{qmosycomms_settings}}/g, magic_clean_str(mosycomms_settings_qstr));
        
        var fmosycomms_settings_where_str=" where "+clean_mosycomms_settings_filter_str;

    if(mosycomms_settings_where_str!="")
    {
          var fmosycomms_settings_where_str=" "+mosycomms_settings_where_str;

    }
       
      get_mosycomms_settings("*", fmosycomms_settings_where_str, mosycomms_settings_ret_cols, mosycomms_settings_user_function, fmosycomms_settings_result_function, mosycomms_settings_data_tray,"",req_url);
      ////get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")
    }
    ///=============== load mosycomms_settings data on the fly ==============


 ///=quick load 
 
function qkload_mosycomms_settings(qstr, push_fun="", ui_card="", and_query="", additional_cols="", mosycomms_settings_pagination="",req_url="")
{

	var mosycomms_settings_list_nodes_str=mosycomms_settings_list_nodes;
  
   if(ui_card!="")
   {
      mosycomms_settings_list_nodes_str=ui_card;
   }
   
   var mosycomms_settings_qret_fun="push_grid_result:mosycomms_settings_tbl_list";
   
   if(push_fun!="")
   {
    mosycomms_settings_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_mosycomms_settings("*", ajaxw+" ("+gft_mosycomms_settings(qstr)+") "+combined_query+"  order by primkey desc ", mosycomms_settings_list_cols+additional_cols_str, "",mosycomms_settings_qret_fun, "c=>"+mosycomms_settings_list_nodes_str, mosycomms_settings_pagination, req_url);
   ///get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_mosycomms_settings(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_mosycomms_settings("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="") 

}


//qddata
function qmosycomms_settings_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_mosycomms_settings("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")    

}



//sum 

function sum_mosycomms_settings(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_mosycomms_settings("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_mosycomms_settings(mosycomms_settings_colstr, mosycomms_settings_filter_col, mosycomms_settings_cols, mosycomms_settings_node_function_name, mosycomms_settings_callback_function_string, mosycomms_settings_ui_tag, mosycomms_settings_pagination, req_url="")

}


///request handlers 

  
  function conf_del_mosycomms_settings_(mosycomms_settings_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'mosycomms_settings_rem_(\''+mosycomms_settings_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_mosycomms_settings_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   mosycomms_settings_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_mosycomms_settings_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   mosycomms_settings_updt_(formid,"",response_fun,req_url)
 }
}

function mosycomms_settings_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosycomms_settings_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function mosycomms_settings_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosycomms_settings_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function mosycomms_settings_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemosycomms_settings&mosycomms_settings_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_mosycomms_settings_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('mosycomms_settings')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  page_manifest_ Data ===============
    
      function get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")
      {
        mosyflex_sel("page_manifest_", page_manifest__colstr, page_manifest__filter_col , page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination,req_url);
        
      }
    //End get  page_manifest_ Data ===============

    //Start insert  page_manifest_ Data ===============

	function add_page_manifest_(page_manifest__cols, page_manifest__vals, page_manifest__callback_function_string)
    {
		
        mosyajax_create_data("page_manifest_", page_manifest__cols, page_manifest__vals, page_manifest__callback_function_string);
     }
     
    //End insert  page_manifest_ Data ===============

    
    //Start update  page_manifest_ Data ===============

    function update_page_manifest_(page_manifest__update_str, page_manifest__where_str, page_manifest__callback_function_string){
    
		mosyajax_update("page_manifest_", page_manifest__update_str, page_manifest__where_str, page_manifest__callback_function_string)
    
    }
    //end  update  page_manifest_ Data ===============

	//Start drop  page_manifest_ Data ===============
    function page_manifest__drop(page_manifest__where_str, page_manifest__callback_function_string)
    {
        mosyajax_drop("page_manifest_", page_manifest__where_str, page_manifest__callback_function_string)

    }
	//End drop  page_manifest_ Data ===============
    
    function initialize_page_manifest_(qstr="", page_manifest__callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var page_manifest__token_query =qstr;
      if(qstr=="")
      {
       var page_manifest__token_query_param="";
       var page_manifest__js_uptoken=mosy_get_param("page_manifest__uptoken");
       //alert(page_manifest__js_uptoken);
       if(page_manifest__js_uptoken!==undefined)
       {
       
        page_manifest__token_query_param = atob(page_manifest__js_uptoken);
       }
        page_manifest__token_query = " where primkey='"+(page_manifest__token_query_param)+"'";
        
           if (document.getElementById("page_manifest__uptoken") !==null) {
           	if(document.getElementById("page_manifest__uptoken").value!="")
            {
            
            var page_manifest__atob_tbl_key =atob(document.getElementById("page_manifest__uptoken").value);
            
                   
            page_manifest__token_query = " where primkey='"+(page_manifest__atob_tbl_key)+"'";

            }
           }
      }
      
      var page_manifest__push_ui_data_to =page_manifest__callback_function_string;
      if(page_manifest__callback_function_string=="")
      {
      page_manifest__push_ui_data_to = "add_page_manifest__ui_data";
      }
                
      console.log(page_manifest__token_query+" -- "+page_manifest__js_uptoken);

	  //alert(page_manifest__push_ui_data_to);

     get_page_manifest_("*", page_manifest__token_query, "primkey", "blackhole", page_manifest__push_ui_data_to, "", "", req_url);
     
     ///get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")
    }
    
    function add_page_manifest__ui_data(page_manifest__server_resp) 
    {
    
    ///alert(page_manifest__server_resp);
    
    var json_decoded_str=JSON.parse(page_manifest__server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load page_manifest_ data on the fly ==============
    
	var gft_page_manifest__str="(manikey LIKE '%{{qpage_manifest_}}%' OR  page_group LIKE '%{{qpage_manifest_}}%' OR  site_id LIKE '%{{qpage_manifest_}}%' OR  page_url LIKE '%{{qpage_manifest_}}%' OR  hive_site_id LIKE '%{{qpage_manifest_}}%' OR  hive_site_name LIKE '%{{qpage_manifest_}}%' OR  project_id LIKE '%{{qpage_manifest_}}%' OR  project_name LIKE '%{{qpage_manifest_}}%')";
    
    function  gft_page_manifest_(qpage_manifest__str)
    {
        	var clean_page_manifest__filter_str=gft_page_manifest__str.replace(/{{qpage_manifest_}}/g, magic_clean_str(qpage_manifest__str));
            
            return  clean_page_manifest__filter_str;

    }
    
    function load_page_manifest_(page_manifest__qstr, page_manifest__where_str, page_manifest__ret_cols, page_manifest__user_function, page_manifest__result_function, page_manifest__data_tray, req_url="")
    {
    
    var fpage_manifest__result_function="push_result";
      
    if(page_manifest__result_function!="")
    {
          var fpage_manifest__result_function=page_manifest__result_function;

    }
    	var clean_page_manifest__filter_str=gft_page_manifest__str.replace(/{{qpage_manifest_}}/g, magic_clean_str(page_manifest__qstr));
        
        var fpage_manifest__where_str=" where "+clean_page_manifest__filter_str;

    if(page_manifest__where_str!="")
    {
          var fpage_manifest__where_str=" "+page_manifest__where_str;

    }
       
      get_page_manifest_("*", fpage_manifest__where_str, page_manifest__ret_cols, page_manifest__user_function, fpage_manifest__result_function, page_manifest__data_tray,"",req_url);
      ////get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")
    }
    ///=============== load page_manifest_ data on the fly ==============


 ///=quick load 
 
function qkload_page_manifest_(qstr, push_fun="", ui_card="", and_query="", additional_cols="", page_manifest__pagination="",req_url="")
{

	var page_manifest__list_nodes_str=page_manifest__list_nodes;
  
   if(ui_card!="")
   {
      page_manifest__list_nodes_str=ui_card;
   }
   
   var page_manifest__qret_fun="push_grid_result:page_manifest__tbl_list";
   
   if(push_fun!="")
   {
    page_manifest__qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_page_manifest_("*", ajaxw+" ("+gft_page_manifest_(qstr)+") "+combined_query+"  order by primkey desc ", page_manifest__list_cols+additional_cols_str, "",page_manifest__qret_fun, "c=>"+page_manifest__list_nodes_str, page_manifest__pagination, req_url);
   ///get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_page_manifest_(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_page_manifest_("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="") 

}


//qddata
function qpage_manifest__ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_page_manifest_("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")    

}



//sum 

function sum_page_manifest_(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_page_manifest_("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_page_manifest_(page_manifest__colstr, page_manifest__filter_col, page_manifest__cols, page_manifest__node_function_name, page_manifest__callback_function_string, page_manifest__ui_tag, page_manifest__pagination, req_url="")

}


///request handlers 

  
  function conf_del_page_manifest__(page_manifest__data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'page_manifest__rem_(\''+page_manifest__data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_page_manifest__ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   page_manifest__ins_(formid,"",response_fun,req_url)
 }
}

function mosy_page_manifest__updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   page_manifest__updt_(formid,"",response_fun,req_url)
 }
}

function page_manifest__ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "page_manifest__insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function page_manifest__updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "page_manifest__update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function page_manifest__rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletepage_manifest_&page_manifest__uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_page_manifest__updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('page_manifest_')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  paybill_disbursments Data ===============
    
      function get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")
      {
        mosyflex_sel("paybill_disbursments", paybill_disbursments_colstr, paybill_disbursments_filter_col , paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination,req_url);
        
      }
    //End get  paybill_disbursments Data ===============

    //Start insert  paybill_disbursments Data ===============

	function add_paybill_disbursments(paybill_disbursments_cols, paybill_disbursments_vals, paybill_disbursments_callback_function_string)
    {
		
        mosyajax_create_data("paybill_disbursments", paybill_disbursments_cols, paybill_disbursments_vals, paybill_disbursments_callback_function_string);
     }
     
    //End insert  paybill_disbursments Data ===============

    
    //Start update  paybill_disbursments Data ===============

    function update_paybill_disbursments(paybill_disbursments_update_str, paybill_disbursments_where_str, paybill_disbursments_callback_function_string){
    
		mosyajax_update("paybill_disbursments", paybill_disbursments_update_str, paybill_disbursments_where_str, paybill_disbursments_callback_function_string)
    
    }
    //end  update  paybill_disbursments Data ===============

	//Start drop  paybill_disbursments Data ===============
    function paybill_disbursments_drop(paybill_disbursments_where_str, paybill_disbursments_callback_function_string)
    {
        mosyajax_drop("paybill_disbursments", paybill_disbursments_where_str, paybill_disbursments_callback_function_string)

    }
	//End drop  paybill_disbursments Data ===============
    
    function initialize_paybill_disbursments(qstr="", paybill_disbursments_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var paybill_disbursments_token_query =qstr;
      if(qstr=="")
      {
       var paybill_disbursments_token_query_param="";
       var paybill_disbursments_js_uptoken=mosy_get_param("paybill_disbursments_uptoken");
       //alert(paybill_disbursments_js_uptoken);
       if(paybill_disbursments_js_uptoken!==undefined)
       {
       
        paybill_disbursments_token_query_param = atob(paybill_disbursments_js_uptoken);
       }
        paybill_disbursments_token_query = " where primkey='"+(paybill_disbursments_token_query_param)+"'";
        
           if (document.getElementById("paybill_disbursments_uptoken") !==null) {
           	if(document.getElementById("paybill_disbursments_uptoken").value!="")
            {
            
            var paybill_disbursments_atob_tbl_key =atob(document.getElementById("paybill_disbursments_uptoken").value);
            
                   
            paybill_disbursments_token_query = " where primkey='"+(paybill_disbursments_atob_tbl_key)+"'";

            }
           }
      }
      
      var paybill_disbursments_push_ui_data_to =paybill_disbursments_callback_function_string;
      if(paybill_disbursments_callback_function_string=="")
      {
      paybill_disbursments_push_ui_data_to = "add_paybill_disbursments_ui_data";
      }
                
      console.log(paybill_disbursments_token_query+" -- "+paybill_disbursments_js_uptoken);

	  //alert(paybill_disbursments_push_ui_data_to);

     get_paybill_disbursments("*", paybill_disbursments_token_query, "primkey", "blackhole", paybill_disbursments_push_ui_data_to, "", "", req_url);
     
     ///get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")
    }
    
    function add_paybill_disbursments_ui_data(paybill_disbursments_server_resp) 
    {
    
    ///alert(paybill_disbursments_server_resp);
    
    var json_decoded_str=JSON.parse(paybill_disbursments_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load paybill_disbursments data on the fly ==============
    
	var gft_paybill_disbursments_str="(trxkey LIKE '%{{qpaybill_disbursments}}%' OR  trx_id LIKE '%{{qpaybill_disbursments}}%' OR  trx_date LIKE '%{{qpaybill_disbursments}}%' OR  trx_month_year LIKE '%{{qpaybill_disbursments}}%' OR  trx_remark LIKE '%{{qpaybill_disbursments}}%' OR  amount LIKE '%{{qpaybill_disbursments}}%' OR  trx_type LIKE '%{{qpaybill_disbursments}}%' OR  business_id LIKE '%{{qpaybill_disbursments}}%' OR  client_id LIKE '%{{qpaybill_disbursments}}%' OR  admin_id LIKE '%{{qpaybill_disbursments}}%' OR  TransactionType LIKE '%{{qpaybill_disbursments}}%' OR  BusinessShortCode LIKE '%{{qpaybill_disbursments}}%' OR  BillRefNumber LIKE '%{{qpaybill_disbursments}}%' OR  InvoiceNumber LIKE '%{{qpaybill_disbursments}}%' OR  OrgAccountBalance LIKE '%{{qpaybill_disbursments}}%' OR  ThirdPartyTransID LIKE '%{{qpaybill_disbursments}}%' OR  MSISDN LIKE '%{{qpaybill_disbursments}}%' OR  FirstName LIKE '%{{qpaybill_disbursments}}%' OR  MiddleName LIKE '%{{qpaybill_disbursments}}%' OR  LastName LIKE '%{{qpaybill_disbursments}}%' OR  trx_msg LIKE '%{{qpaybill_disbursments}}%' OR  account_id LIKE '%{{qpaybill_disbursments}}%' OR  used_status LIKE '%{{qpaybill_disbursments}}%' OR  filter_date LIKE '%{{qpaybill_disbursments}}%' OR  flw_id LIKE '%{{qpaybill_disbursments}}%' OR  flag_state LIKE '%{{qpaybill_disbursments}}%' OR  reconciled LIKE '%{{qpaybill_disbursments}}%' OR  trx_timestamp LIKE '%{{qpaybill_disbursments}}%' OR  hive_site_id LIKE '%{{qpaybill_disbursments}}%' OR  hive_site_name LIKE '%{{qpaybill_disbursments}}%')";
    
    function  gft_paybill_disbursments(qpaybill_disbursments_str)
    {
        	var clean_paybill_disbursments_filter_str=gft_paybill_disbursments_str.replace(/{{qpaybill_disbursments}}/g, magic_clean_str(qpaybill_disbursments_str));
            
            return  clean_paybill_disbursments_filter_str;

    }
    
    function load_paybill_disbursments(paybill_disbursments_qstr, paybill_disbursments_where_str, paybill_disbursments_ret_cols, paybill_disbursments_user_function, paybill_disbursments_result_function, paybill_disbursments_data_tray, req_url="")
    {
    
    var fpaybill_disbursments_result_function="push_result";
      
    if(paybill_disbursments_result_function!="")
    {
          var fpaybill_disbursments_result_function=paybill_disbursments_result_function;

    }
    	var clean_paybill_disbursments_filter_str=gft_paybill_disbursments_str.replace(/{{qpaybill_disbursments}}/g, magic_clean_str(paybill_disbursments_qstr));
        
        var fpaybill_disbursments_where_str=" where "+clean_paybill_disbursments_filter_str;

    if(paybill_disbursments_where_str!="")
    {
          var fpaybill_disbursments_where_str=" "+paybill_disbursments_where_str;

    }
       
      get_paybill_disbursments("*", fpaybill_disbursments_where_str, paybill_disbursments_ret_cols, paybill_disbursments_user_function, fpaybill_disbursments_result_function, paybill_disbursments_data_tray,"",req_url);
      ////get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")
    }
    ///=============== load paybill_disbursments data on the fly ==============


 ///=quick load 
 
function qkload_paybill_disbursments(qstr, push_fun="", ui_card="", and_query="", additional_cols="", paybill_disbursments_pagination="",req_url="")
{

	var paybill_disbursments_list_nodes_str=paybill_disbursments_list_nodes;
  
   if(ui_card!="")
   {
      paybill_disbursments_list_nodes_str=ui_card;
   }
   
   var paybill_disbursments_qret_fun="push_grid_result:paybill_disbursments_tbl_list";
   
   if(push_fun!="")
   {
    paybill_disbursments_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_paybill_disbursments("*", ajaxw+" ("+gft_paybill_disbursments(qstr)+") "+combined_query+"  order by primkey desc ", paybill_disbursments_list_cols+additional_cols_str, "",paybill_disbursments_qret_fun, "c=>"+paybill_disbursments_list_nodes_str, paybill_disbursments_pagination, req_url);
   ///get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_paybill_disbursments(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_paybill_disbursments("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="") 

}


//qddata
function qpaybill_disbursments_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_paybill_disbursments("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")    

}



//sum 

function sum_paybill_disbursments(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_paybill_disbursments("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_paybill_disbursments(paybill_disbursments_colstr, paybill_disbursments_filter_col, paybill_disbursments_cols, paybill_disbursments_node_function_name, paybill_disbursments_callback_function_string, paybill_disbursments_ui_tag, paybill_disbursments_pagination, req_url="")

}


///request handlers 

  
  function conf_del_paybill_disbursments_(paybill_disbursments_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'paybill_disbursments_rem_(\''+paybill_disbursments_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_paybill_disbursments_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   paybill_disbursments_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_paybill_disbursments_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   paybill_disbursments_updt_(formid,"",response_fun,req_url)
 }
}

function paybill_disbursments_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "paybill_disbursments_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function paybill_disbursments_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "paybill_disbursments_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function paybill_disbursments_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletepaybill_disbursments&paybill_disbursments_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_paybill_disbursments_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('paybill_disbursments')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  payment_confirmations Data ===============
    
      function get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")
      {
        mosyflex_sel("payment_confirmations", payment_confirmations_colstr, payment_confirmations_filter_col , payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination,req_url);
        
      }
    //End get  payment_confirmations Data ===============

    //Start insert  payment_confirmations Data ===============

	function add_payment_confirmations(payment_confirmations_cols, payment_confirmations_vals, payment_confirmations_callback_function_string)
    {
		
        mosyajax_create_data("payment_confirmations", payment_confirmations_cols, payment_confirmations_vals, payment_confirmations_callback_function_string);
     }
     
    //End insert  payment_confirmations Data ===============

    
    //Start update  payment_confirmations Data ===============

    function update_payment_confirmations(payment_confirmations_update_str, payment_confirmations_where_str, payment_confirmations_callback_function_string){
    
		mosyajax_update("payment_confirmations", payment_confirmations_update_str, payment_confirmations_where_str, payment_confirmations_callback_function_string)
    
    }
    //end  update  payment_confirmations Data ===============

	//Start drop  payment_confirmations Data ===============
    function payment_confirmations_drop(payment_confirmations_where_str, payment_confirmations_callback_function_string)
    {
        mosyajax_drop("payment_confirmations", payment_confirmations_where_str, payment_confirmations_callback_function_string)

    }
	//End drop  payment_confirmations Data ===============
    
    function initialize_payment_confirmations(qstr="", payment_confirmations_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var payment_confirmations_token_query =qstr;
      if(qstr=="")
      {
       var payment_confirmations_token_query_param="";
       var payment_confirmations_js_uptoken=mosy_get_param("payment_confirmations_uptoken");
       //alert(payment_confirmations_js_uptoken);
       if(payment_confirmations_js_uptoken!==undefined)
       {
       
        payment_confirmations_token_query_param = atob(payment_confirmations_js_uptoken);
       }
        payment_confirmations_token_query = " where primkey='"+(payment_confirmations_token_query_param)+"'";
        
           if (document.getElementById("payment_confirmations_uptoken") !==null) {
           	if(document.getElementById("payment_confirmations_uptoken").value!="")
            {
            
            var payment_confirmations_atob_tbl_key =atob(document.getElementById("payment_confirmations_uptoken").value);
            
                   
            payment_confirmations_token_query = " where primkey='"+(payment_confirmations_atob_tbl_key)+"'";

            }
           }
      }
      
      var payment_confirmations_push_ui_data_to =payment_confirmations_callback_function_string;
      if(payment_confirmations_callback_function_string=="")
      {
      payment_confirmations_push_ui_data_to = "add_payment_confirmations_ui_data";
      }
                
      console.log(payment_confirmations_token_query+" -- "+payment_confirmations_js_uptoken);

	  //alert(payment_confirmations_push_ui_data_to);

     get_payment_confirmations("*", payment_confirmations_token_query, "primkey", "blackhole", payment_confirmations_push_ui_data_to, "", "", req_url);
     
     ///get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")
    }
    
    function add_payment_confirmations_ui_data(payment_confirmations_server_resp) 
    {
    
    ///alert(payment_confirmations_server_resp);
    
    var json_decoded_str=JSON.parse(payment_confirmations_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load payment_confirmations data on the fly ==============
    
	var gft_payment_confirmations_str="(record_id LIKE '%{{qpayment_confirmations}}%' OR  result_type LIKE '%{{qpayment_confirmations}}%' OR  result_code LIKE '%{{qpayment_confirmations}}%' OR  result_desc LIKE '%{{qpayment_confirmations}}%' OR  originator_conversation_id LIKE '%{{qpayment_confirmations}}%' OR  conversation_id LIKE '%{{qpayment_confirmations}}%' OR  transaction_id LIKE '%{{qpayment_confirmations}}%' OR  transaction_amount LIKE '%{{qpayment_confirmations}}%' OR  transaction_receipt LIKE '%{{qpayment_confirmations}}%' OR  recipient_registered LIKE '%{{qpayment_confirmations}}%' OR  charges_paid_funds LIKE '%{{qpayment_confirmations}}%' OR  receiver_public_name LIKE '%{{qpayment_confirmations}}%' OR  transaction_date_time LIKE '%{{qpayment_confirmations}}%' OR  utility_funds LIKE '%{{qpayment_confirmations}}%' OR  working_funds LIKE '%{{qpayment_confirmations}}%' OR  queue_timeout_url LIKE '%{{qpayment_confirmations}}%' OR  created_at LIKE '%{{qpayment_confirmations}}%' OR  hive_site_id LIKE '%{{qpayment_confirmations}}%' OR  hive_site_name LIKE '%{{qpayment_confirmations}}%')";
    
    function  gft_payment_confirmations(qpayment_confirmations_str)
    {
        	var clean_payment_confirmations_filter_str=gft_payment_confirmations_str.replace(/{{qpayment_confirmations}}/g, magic_clean_str(qpayment_confirmations_str));
            
            return  clean_payment_confirmations_filter_str;

    }
    
    function load_payment_confirmations(payment_confirmations_qstr, payment_confirmations_where_str, payment_confirmations_ret_cols, payment_confirmations_user_function, payment_confirmations_result_function, payment_confirmations_data_tray, req_url="")
    {
    
    var fpayment_confirmations_result_function="push_result";
      
    if(payment_confirmations_result_function!="")
    {
          var fpayment_confirmations_result_function=payment_confirmations_result_function;

    }
    	var clean_payment_confirmations_filter_str=gft_payment_confirmations_str.replace(/{{qpayment_confirmations}}/g, magic_clean_str(payment_confirmations_qstr));
        
        var fpayment_confirmations_where_str=" where "+clean_payment_confirmations_filter_str;

    if(payment_confirmations_where_str!="")
    {
          var fpayment_confirmations_where_str=" "+payment_confirmations_where_str;

    }
       
      get_payment_confirmations("*", fpayment_confirmations_where_str, payment_confirmations_ret_cols, payment_confirmations_user_function, fpayment_confirmations_result_function, payment_confirmations_data_tray,"",req_url);
      ////get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")
    }
    ///=============== load payment_confirmations data on the fly ==============


 ///=quick load 
 
function qkload_payment_confirmations(qstr, push_fun="", ui_card="", and_query="", additional_cols="", payment_confirmations_pagination="",req_url="")
{

	var payment_confirmations_list_nodes_str=payment_confirmations_list_nodes;
  
   if(ui_card!="")
   {
      payment_confirmations_list_nodes_str=ui_card;
   }
   
   var payment_confirmations_qret_fun="push_grid_result:payment_confirmations_tbl_list";
   
   if(push_fun!="")
   {
    payment_confirmations_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_payment_confirmations("*", ajaxw+" ("+gft_payment_confirmations(qstr)+") "+combined_query+"  order by primkey desc ", payment_confirmations_list_cols+additional_cols_str, "",payment_confirmations_qret_fun, "c=>"+payment_confirmations_list_nodes_str, payment_confirmations_pagination, req_url);
   ///get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_payment_confirmations(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_payment_confirmations("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="") 

}


//qddata
function qpayment_confirmations_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_payment_confirmations("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")    

}



//sum 

function sum_payment_confirmations(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_payment_confirmations("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_payment_confirmations(payment_confirmations_colstr, payment_confirmations_filter_col, payment_confirmations_cols, payment_confirmations_node_function_name, payment_confirmations_callback_function_string, payment_confirmations_ui_tag, payment_confirmations_pagination, req_url="")

}


///request handlers 

  
  function conf_del_payment_confirmations_(payment_confirmations_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'payment_confirmations_rem_(\''+payment_confirmations_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_payment_confirmations_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   payment_confirmations_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_payment_confirmations_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   payment_confirmations_updt_(formid,"",response_fun,req_url)
 }
}

function payment_confirmations_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "payment_confirmations_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function payment_confirmations_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "payment_confirmations_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function payment_confirmations_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletepayment_confirmations&payment_confirmations_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_payment_confirmations_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('payment_confirmations')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  phonebook Data ===============
    
      function get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")
      {
        mosyflex_sel("phonebook", phonebook_colstr, phonebook_filter_col , phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination,req_url);
        
      }
    //End get  phonebook Data ===============

    //Start insert  phonebook Data ===============

	function add_phonebook(phonebook_cols, phonebook_vals, phonebook_callback_function_string)
    {
		
        mosyajax_create_data("phonebook", phonebook_cols, phonebook_vals, phonebook_callback_function_string);
     }
     
    //End insert  phonebook Data ===============

    
    //Start update  phonebook Data ===============

    function update_phonebook(phonebook_update_str, phonebook_where_str, phonebook_callback_function_string){
    
		mosyajax_update("phonebook", phonebook_update_str, phonebook_where_str, phonebook_callback_function_string)
    
    }
    //end  update  phonebook Data ===============

	//Start drop  phonebook Data ===============
    function phonebook_drop(phonebook_where_str, phonebook_callback_function_string)
    {
        mosyajax_drop("phonebook", phonebook_where_str, phonebook_callback_function_string)

    }
	//End drop  phonebook Data ===============
    
    function initialize_phonebook(qstr="", phonebook_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var phonebook_token_query =qstr;
      if(qstr=="")
      {
       var phonebook_token_query_param="";
       var phonebook_js_uptoken=mosy_get_param("phonebook_uptoken");
       //alert(phonebook_js_uptoken);
       if(phonebook_js_uptoken!==undefined)
       {
       
        phonebook_token_query_param = atob(phonebook_js_uptoken);
       }
        phonebook_token_query = " where primkey='"+(phonebook_token_query_param)+"'";
        
           if (document.getElementById("phonebook_uptoken") !==null) {
           	if(document.getElementById("phonebook_uptoken").value!="")
            {
            
            var phonebook_atob_tbl_key =atob(document.getElementById("phonebook_uptoken").value);
            
                   
            phonebook_token_query = " where primkey='"+(phonebook_atob_tbl_key)+"'";

            }
           }
      }
      
      var phonebook_push_ui_data_to =phonebook_callback_function_string;
      if(phonebook_callback_function_string=="")
      {
      phonebook_push_ui_data_to = "add_phonebook_ui_data";
      }
                
      console.log(phonebook_token_query+" -- "+phonebook_js_uptoken);

	  //alert(phonebook_push_ui_data_to);

     get_phonebook("*", phonebook_token_query, "primkey", "blackhole", phonebook_push_ui_data_to, "", "", req_url);
     
     ///get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")
    }
    
    function add_phonebook_ui_data(phonebook_server_resp) 
    {
    
    ///alert(phonebook_server_resp);
    
    var json_decoded_str=JSON.parse(phonebook_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load phonebook data on the fly ==============
    
	var gft_phonebook_str="(contact_id LIKE '%{{qphonebook}}%' OR  name LIKE '%{{qphonebook}}%' OR  email LIKE '%{{qphonebook}}%' OR  tel LIKE '%{{qphonebook}}%' OR  profile_photo LIKE '%{{qphonebook}}%' OR  username LIKE '%{{qphonebook}}%' OR  site_id LIKE '%{{qphonebook}}%' OR  hive_site_id LIKE '%{{qphonebook}}%' OR  hive_site_name LIKE '%{{qphonebook}}%')";
    
    function  gft_phonebook(qphonebook_str)
    {
        	var clean_phonebook_filter_str=gft_phonebook_str.replace(/{{qphonebook}}/g, magic_clean_str(qphonebook_str));
            
            return  clean_phonebook_filter_str;

    }
    
    function load_phonebook(phonebook_qstr, phonebook_where_str, phonebook_ret_cols, phonebook_user_function, phonebook_result_function, phonebook_data_tray, req_url="")
    {
    
    var fphonebook_result_function="push_result";
      
    if(phonebook_result_function!="")
    {
          var fphonebook_result_function=phonebook_result_function;

    }
    	var clean_phonebook_filter_str=gft_phonebook_str.replace(/{{qphonebook}}/g, magic_clean_str(phonebook_qstr));
        
        var fphonebook_where_str=" where "+clean_phonebook_filter_str;

    if(phonebook_where_str!="")
    {
          var fphonebook_where_str=" "+phonebook_where_str;

    }
       
      get_phonebook("*", fphonebook_where_str, phonebook_ret_cols, phonebook_user_function, fphonebook_result_function, phonebook_data_tray,"",req_url);
      ////get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")
    }
    ///=============== load phonebook data on the fly ==============


 ///=quick load 
 
function qkload_phonebook(qstr, push_fun="", ui_card="", and_query="", additional_cols="", phonebook_pagination="",req_url="")
{

	var phonebook_list_nodes_str=phonebook_list_nodes;
  
   if(ui_card!="")
   {
      phonebook_list_nodes_str=ui_card;
   }
   
   var phonebook_qret_fun="push_grid_result:phonebook_tbl_list";
   
   if(push_fun!="")
   {
    phonebook_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_phonebook("*", ajaxw+" ("+gft_phonebook(qstr)+") "+combined_query+"  order by primkey desc ", phonebook_list_cols+additional_cols_str, "",phonebook_qret_fun, "c=>"+phonebook_list_nodes_str, phonebook_pagination, req_url);
   ///get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_phonebook(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_phonebook("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="") 

}


//qddata
function qphonebook_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_phonebook("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")    

}



//sum 

function sum_phonebook(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_phonebook("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_phonebook(phonebook_colstr, phonebook_filter_col, phonebook_cols, phonebook_node_function_name, phonebook_callback_function_string, phonebook_ui_tag, phonebook_pagination, req_url="")

}


///request handlers 

  
  function conf_del_phonebook_(phonebook_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'phonebook_rem_(\''+phonebook_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_phonebook_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   phonebook_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_phonebook_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   phonebook_updt_(formid,"",response_fun,req_url)
 }
}

function phonebook_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "phonebook_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function phonebook_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "phonebook_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function phonebook_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletephonebook&phonebook_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_phonebook_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('phonebook')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  reconciliations Data ===============
    
      function get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")
      {
        mosyflex_sel("reconciliations", reconciliations_colstr, reconciliations_filter_col , reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination,req_url);
        
      }
    //End get  reconciliations Data ===============

    //Start insert  reconciliations Data ===============

	function add_reconciliations(reconciliations_cols, reconciliations_vals, reconciliations_callback_function_string)
    {
		
        mosyajax_create_data("reconciliations", reconciliations_cols, reconciliations_vals, reconciliations_callback_function_string);
     }
     
    //End insert  reconciliations Data ===============

    
    //Start update  reconciliations Data ===============

    function update_reconciliations(reconciliations_update_str, reconciliations_where_str, reconciliations_callback_function_string){
    
		mosyajax_update("reconciliations", reconciliations_update_str, reconciliations_where_str, reconciliations_callback_function_string)
    
    }
    //end  update  reconciliations Data ===============

	//Start drop  reconciliations Data ===============
    function reconciliations_drop(reconciliations_where_str, reconciliations_callback_function_string)
    {
        mosyajax_drop("reconciliations", reconciliations_where_str, reconciliations_callback_function_string)

    }
	//End drop  reconciliations Data ===============
    
    function initialize_reconciliations(qstr="", reconciliations_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var reconciliations_token_query =qstr;
      if(qstr=="")
      {
       var reconciliations_token_query_param="";
       var reconciliations_js_uptoken=mosy_get_param("reconciliations_uptoken");
       //alert(reconciliations_js_uptoken);
       if(reconciliations_js_uptoken!==undefined)
       {
       
        reconciliations_token_query_param = atob(reconciliations_js_uptoken);
       }
        reconciliations_token_query = " where primkey='"+(reconciliations_token_query_param)+"'";
        
           if (document.getElementById("reconciliations_uptoken") !==null) {
           	if(document.getElementById("reconciliations_uptoken").value!="")
            {
            
            var reconciliations_atob_tbl_key =atob(document.getElementById("reconciliations_uptoken").value);
            
                   
            reconciliations_token_query = " where primkey='"+(reconciliations_atob_tbl_key)+"'";

            }
           }
      }
      
      var reconciliations_push_ui_data_to =reconciliations_callback_function_string;
      if(reconciliations_callback_function_string=="")
      {
      reconciliations_push_ui_data_to = "add_reconciliations_ui_data";
      }
                
      console.log(reconciliations_token_query+" -- "+reconciliations_js_uptoken);

	  //alert(reconciliations_push_ui_data_to);

     get_reconciliations("*", reconciliations_token_query, "primkey", "blackhole", reconciliations_push_ui_data_to, "", "", req_url);
     
     ///get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")
    }
    
    function add_reconciliations_ui_data(reconciliations_server_resp) 
    {
    
    ///alert(reconciliations_server_resp);
    
    var json_decoded_str=JSON.parse(reconciliations_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load reconciliations data on the fly ==============
    
	var gft_reconciliations_str="(trxkey LIKE '%{{qreconciliations}}%' OR  trx_id LIKE '%{{qreconciliations}}%' OR  trx_date LIKE '%{{qreconciliations}}%' OR  trx_month_year LIKE '%{{qreconciliations}}%' OR  trx_remark LIKE '%{{qreconciliations}}%' OR  amount LIKE '%{{qreconciliations}}%' OR  trx_type LIKE '%{{qreconciliations}}%' OR  business_id LIKE '%{{qreconciliations}}%' OR  client_id LIKE '%{{qreconciliations}}%' OR  admin_id LIKE '%{{qreconciliations}}%' OR  TransactionType LIKE '%{{qreconciliations}}%' OR  BusinessShortCode LIKE '%{{qreconciliations}}%' OR  BillRefNumber LIKE '%{{qreconciliations}}%' OR  InvoiceNumber LIKE '%{{qreconciliations}}%' OR  OrgAccountBalance LIKE '%{{qreconciliations}}%' OR  ThirdPartyTransID LIKE '%{{qreconciliations}}%' OR  MSISDN LIKE '%{{qreconciliations}}%' OR  FirstName LIKE '%{{qreconciliations}}%' OR  MiddleName LIKE '%{{qreconciliations}}%' OR  LastName LIKE '%{{qreconciliations}}%' OR  trx_msg LIKE '%{{qreconciliations}}%' OR  account_id LIKE '%{{qreconciliations}}%' OR  used_status LIKE '%{{qreconciliations}}%' OR  filter_date LIKE '%{{qreconciliations}}%' OR  flag_state LIKE '%{{qreconciliations}}%' OR  reconciled LIKE '%{{qreconciliations}}%' OR  hive_site_id LIKE '%{{qreconciliations}}%' OR  hive_site_name LIKE '%{{qreconciliations}}%')";
    
    function  gft_reconciliations(qreconciliations_str)
    {
        	var clean_reconciliations_filter_str=gft_reconciliations_str.replace(/{{qreconciliations}}/g, magic_clean_str(qreconciliations_str));
            
            return  clean_reconciliations_filter_str;

    }
    
    function load_reconciliations(reconciliations_qstr, reconciliations_where_str, reconciliations_ret_cols, reconciliations_user_function, reconciliations_result_function, reconciliations_data_tray, req_url="")
    {
    
    var freconciliations_result_function="push_result";
      
    if(reconciliations_result_function!="")
    {
          var freconciliations_result_function=reconciliations_result_function;

    }
    	var clean_reconciliations_filter_str=gft_reconciliations_str.replace(/{{qreconciliations}}/g, magic_clean_str(reconciliations_qstr));
        
        var freconciliations_where_str=" where "+clean_reconciliations_filter_str;

    if(reconciliations_where_str!="")
    {
          var freconciliations_where_str=" "+reconciliations_where_str;

    }
       
      get_reconciliations("*", freconciliations_where_str, reconciliations_ret_cols, reconciliations_user_function, freconciliations_result_function, reconciliations_data_tray,"",req_url);
      ////get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")
    }
    ///=============== load reconciliations data on the fly ==============


 ///=quick load 
 
function qkload_reconciliations(qstr, push_fun="", ui_card="", and_query="", additional_cols="", reconciliations_pagination="",req_url="")
{

	var reconciliations_list_nodes_str=reconciliations_list_nodes;
  
   if(ui_card!="")
   {
      reconciliations_list_nodes_str=ui_card;
   }
   
   var reconciliations_qret_fun="push_grid_result:reconciliations_tbl_list";
   
   if(push_fun!="")
   {
    reconciliations_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_reconciliations("*", ajaxw+" ("+gft_reconciliations(qstr)+") "+combined_query+"  order by primkey desc ", reconciliations_list_cols+additional_cols_str, "",reconciliations_qret_fun, "c=>"+reconciliations_list_nodes_str, reconciliations_pagination, req_url);
   ///get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_reconciliations(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_reconciliations("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="") 

}


//qddata
function qreconciliations_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_reconciliations("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")    

}



//sum 

function sum_reconciliations(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_reconciliations("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_reconciliations(reconciliations_colstr, reconciliations_filter_col, reconciliations_cols, reconciliations_node_function_name, reconciliations_callback_function_string, reconciliations_ui_tag, reconciliations_pagination, req_url="")

}


///request handlers 

  
  function conf_del_reconciliations_(reconciliations_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'reconciliations_rem_(\''+reconciliations_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_reconciliations_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   reconciliations_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_reconciliations_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   reconciliations_updt_(formid,"",response_fun,req_url)
 }
}

function reconciliations_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "reconciliations_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function reconciliations_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "reconciliations_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function reconciliations_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletereconciliations&reconciliations_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_reconciliations_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('reconciliations')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  send_list Data ===============
    
      function get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")
      {
        mosyflex_sel("send_list", send_list_colstr, send_list_filter_col , send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination,req_url);
        
      }
    //End get  send_list Data ===============

    //Start insert  send_list Data ===============

	function add_send_list(send_list_cols, send_list_vals, send_list_callback_function_string)
    {
		
        mosyajax_create_data("send_list", send_list_cols, send_list_vals, send_list_callback_function_string);
     }
     
    //End insert  send_list Data ===============

    
    //Start update  send_list Data ===============

    function update_send_list(send_list_update_str, send_list_where_str, send_list_callback_function_string){
    
		mosyajax_update("send_list", send_list_update_str, send_list_where_str, send_list_callback_function_string)
    
    }
    //end  update  send_list Data ===============

	//Start drop  send_list Data ===============
    function send_list_drop(send_list_where_str, send_list_callback_function_string)
    {
        mosyajax_drop("send_list", send_list_where_str, send_list_callback_function_string)

    }
	//End drop  send_list Data ===============
    
    function initialize_send_list(qstr="", send_list_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var send_list_token_query =qstr;
      if(qstr=="")
      {
       var send_list_token_query_param="";
       var send_list_js_uptoken=mosy_get_param("send_list_uptoken");
       //alert(send_list_js_uptoken);
       if(send_list_js_uptoken!==undefined)
       {
       
        send_list_token_query_param = atob(send_list_js_uptoken);
       }
        send_list_token_query = " where primkey='"+(send_list_token_query_param)+"'";
        
           if (document.getElementById("send_list_uptoken") !==null) {
           	if(document.getElementById("send_list_uptoken").value!="")
            {
            
            var send_list_atob_tbl_key =atob(document.getElementById("send_list_uptoken").value);
            
                   
            send_list_token_query = " where primkey='"+(send_list_atob_tbl_key)+"'";

            }
           }
      }
      
      var send_list_push_ui_data_to =send_list_callback_function_string;
      if(send_list_callback_function_string=="")
      {
      send_list_push_ui_data_to = "add_send_list_ui_data";
      }
                
      console.log(send_list_token_query+" -- "+send_list_js_uptoken);

	  //alert(send_list_push_ui_data_to);

     get_send_list("*", send_list_token_query, "primkey", "blackhole", send_list_push_ui_data_to, "", "", req_url);
     
     ///get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")
    }
    
    function add_send_list_ui_data(send_list_server_resp) 
    {
    
    ///alert(send_list_server_resp);
    
    var json_decoded_str=JSON.parse(send_list_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load send_list data on the fly ==============
    
	var gft_send_list_str="(send_list_key LIKE '%{{qsend_list}}%' OR  send_list_name LIKE '%{{qsend_list}}%' OR  site_id LIKE '%{{qsend_list}}%' OR  contact_id LIKE '%{{qsend_list}}%' OR  contact_names LIKE '%{{qsend_list}}%' OR  mobile LIKE '%{{qsend_list}}%' OR  email LIKE '%{{qsend_list}}%' OR  ref_no LIKE '%{{qsend_list}}%' OR  group_name LIKE '%{{qsend_list}}%' OR  date_created LIKE '%{{qsend_list}}%' OR  description LIKE '%{{qsend_list}}%' OR  active_state LIKE '%{{qsend_list}}%' OR  service_id LIKE '%{{qsend_list}}%' OR  service_name LIKE '%{{qsend_list}}%' OR  hive_site_id LIKE '%{{qsend_list}}%' OR  hive_site_name LIKE '%{{qsend_list}}%' OR  entry_context LIKE '%{{qsend_list}}%')";
    
    function  gft_send_list(qsend_list_str)
    {
        	var clean_send_list_filter_str=gft_send_list_str.replace(/{{qsend_list}}/g, magic_clean_str(qsend_list_str));
            
            return  clean_send_list_filter_str;

    }
    
    function load_send_list(send_list_qstr, send_list_where_str, send_list_ret_cols, send_list_user_function, send_list_result_function, send_list_data_tray, req_url="")
    {
    
    var fsend_list_result_function="push_result";
      
    if(send_list_result_function!="")
    {
          var fsend_list_result_function=send_list_result_function;

    }
    	var clean_send_list_filter_str=gft_send_list_str.replace(/{{qsend_list}}/g, magic_clean_str(send_list_qstr));
        
        var fsend_list_where_str=" where "+clean_send_list_filter_str;

    if(send_list_where_str!="")
    {
          var fsend_list_where_str=" "+send_list_where_str;

    }
       
      get_send_list("*", fsend_list_where_str, send_list_ret_cols, send_list_user_function, fsend_list_result_function, send_list_data_tray,"",req_url);
      ////get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")
    }
    ///=============== load send_list data on the fly ==============


 ///=quick load 
 
function qkload_send_list(qstr, push_fun="", ui_card="", and_query="", additional_cols="", send_list_pagination="",req_url="")
{

	var send_list_list_nodes_str=send_list_list_nodes;
  
   if(ui_card!="")
   {
      send_list_list_nodes_str=ui_card;
   }
   
   var send_list_qret_fun="push_grid_result:send_list_tbl_list";
   
   if(push_fun!="")
   {
    send_list_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_send_list("*", ajaxw+" ("+gft_send_list(qstr)+") "+combined_query+"  order by primkey desc ", send_list_list_cols+additional_cols_str, "",send_list_qret_fun, "c=>"+send_list_list_nodes_str, send_list_pagination, req_url);
   ///get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_send_list(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_send_list("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="") 

}


//qddata
function qsend_list_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_send_list("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")    

}



//sum 

function sum_send_list(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_send_list("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_send_list(send_list_colstr, send_list_filter_col, send_list_cols, send_list_node_function_name, send_list_callback_function_string, send_list_ui_tag, send_list_pagination, req_url="")

}


///request handlers 

  
  function conf_del_send_list_(send_list_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'send_list_rem_(\''+send_list_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_send_list_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   send_list_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_send_list_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   send_list_updt_(formid,"",response_fun,req_url)
 }
}

function send_list_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "send_list_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function send_list_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "send_list_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function send_list_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesend_list&send_list_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_send_list_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('send_list')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  services Data ===============
    
      function get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")
      {
        mosyflex_sel("services", services_colstr, services_filter_col , services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination,req_url);
        
      }
    //End get  services Data ===============

    //Start insert  services Data ===============

	function add_services(services_cols, services_vals, services_callback_function_string)
    {
		
        mosyajax_create_data("services", services_cols, services_vals, services_callback_function_string);
     }
     
    //End insert  services Data ===============

    
    //Start update  services Data ===============

    function update_services(services_update_str, services_where_str, services_callback_function_string){
    
		mosyajax_update("services", services_update_str, services_where_str, services_callback_function_string)
    
    }
    //end  update  services Data ===============

	//Start drop  services Data ===============
    function services_drop(services_where_str, services_callback_function_string)
    {
        mosyajax_drop("services", services_where_str, services_callback_function_string)

    }
	//End drop  services Data ===============
    
    function initialize_services(qstr="", services_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var services_token_query =qstr;
      if(qstr=="")
      {
       var services_token_query_param="";
       var services_js_uptoken=mosy_get_param("services_uptoken");
       //alert(services_js_uptoken);
       if(services_js_uptoken!==undefined)
       {
       
        services_token_query_param = atob(services_js_uptoken);
       }
        services_token_query = " where primkey='"+(services_token_query_param)+"'";
        
           if (document.getElementById("services_uptoken") !==null) {
           	if(document.getElementById("services_uptoken").value!="")
            {
            
            var services_atob_tbl_key =atob(document.getElementById("services_uptoken").value);
            
                   
            services_token_query = " where primkey='"+(services_atob_tbl_key)+"'";

            }
           }
      }
      
      var services_push_ui_data_to =services_callback_function_string;
      if(services_callback_function_string=="")
      {
      services_push_ui_data_to = "add_services_ui_data";
      }
                
      console.log(services_token_query+" -- "+services_js_uptoken);

	  //alert(services_push_ui_data_to);

     get_services("*", services_token_query, "primkey", "blackhole", services_push_ui_data_to, "", "", req_url);
     
     ///get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")
    }
    
    function add_services_ui_data(services_server_resp) 
    {
    
    ///alert(services_server_resp);
    
    var json_decoded_str=JSON.parse(services_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load services data on the fly ==============
    
	var gft_services_str="(record_id LIKE '%{{qservices}}%' OR  service_name LIKE '%{{qservices}}%' OR  service_code LIKE '%{{qservices}}%' OR  purchase_price LIKE '%{{qservices}}%' OR  selling_price LIKE '%{{qservices}}%' OR  service_type LIKE '%{{qservices}}%' OR  remark LIKE '%{{qservices}}%' OR  commission LIKE '%{{qservices}}%' OR  profit LIKE '%{{qservices}}%' OR  onboarding_commission LIKE '%{{qservices}}%')";
    
    function  gft_services(qservices_str)
    {
        	var clean_services_filter_str=gft_services_str.replace(/{{qservices}}/g, magic_clean_str(qservices_str));
            
            return  clean_services_filter_str;

    }
    
    function load_services(services_qstr, services_where_str, services_ret_cols, services_user_function, services_result_function, services_data_tray, req_url="")
    {
    
    var fservices_result_function="push_result";
      
    if(services_result_function!="")
    {
          var fservices_result_function=services_result_function;

    }
    	var clean_services_filter_str=gft_services_str.replace(/{{qservices}}/g, magic_clean_str(services_qstr));
        
        var fservices_where_str=" where "+clean_services_filter_str;

    if(services_where_str!="")
    {
          var fservices_where_str=" "+services_where_str;

    }
       
      get_services("*", fservices_where_str, services_ret_cols, services_user_function, fservices_result_function, services_data_tray,"",req_url);
      ////get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")
    }
    ///=============== load services data on the fly ==============


 ///=quick load 
 
function qkload_services(qstr, push_fun="", ui_card="", and_query="", additional_cols="", services_pagination="",req_url="")
{

	var services_list_nodes_str=services_list_nodes;
  
   if(ui_card!="")
   {
      services_list_nodes_str=ui_card;
   }
   
   var services_qret_fun="push_grid_result:services_tbl_list";
   
   if(push_fun!="")
   {
    services_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_services("*", ajaxw+" ("+gft_services(qstr)+") "+combined_query+"  order by primkey desc ", services_list_cols+additional_cols_str, "",services_qret_fun, "c=>"+services_list_nodes_str, services_pagination, req_url);
   ///get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_services(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_services("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="") 

}


//qddata
function qservices_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_services("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")    

}



//sum 

function sum_services(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_services("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_services(services_colstr, services_filter_col, services_cols, services_node_function_name, services_callback_function_string, services_ui_tag, services_pagination, req_url="")

}


///request handlers 

  
  function conf_del_services_(services_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'services_rem_(\''+services_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_services_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   services_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_services_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   services_updt_(formid,"",response_fun,req_url)
 }
}

function services_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "services_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function services_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "services_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function services_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteservices&services_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_services_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('services')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  system_role_bundles Data ===============
    
      function get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")
      {
        mosyflex_sel("system_role_bundles", system_role_bundles_colstr, system_role_bundles_filter_col , system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination,req_url);
        
      }
    //End get  system_role_bundles Data ===============

    //Start insert  system_role_bundles Data ===============

	function add_system_role_bundles(system_role_bundles_cols, system_role_bundles_vals, system_role_bundles_callback_function_string)
    {
		
        mosyajax_create_data("system_role_bundles", system_role_bundles_cols, system_role_bundles_vals, system_role_bundles_callback_function_string);
     }
     
    //End insert  system_role_bundles Data ===============

    
    //Start update  system_role_bundles Data ===============

    function update_system_role_bundles(system_role_bundles_update_str, system_role_bundles_where_str, system_role_bundles_callback_function_string){
    
		mosyajax_update("system_role_bundles", system_role_bundles_update_str, system_role_bundles_where_str, system_role_bundles_callback_function_string)
    
    }
    //end  update  system_role_bundles Data ===============

	//Start drop  system_role_bundles Data ===============
    function system_role_bundles_drop(system_role_bundles_where_str, system_role_bundles_callback_function_string)
    {
        mosyajax_drop("system_role_bundles", system_role_bundles_where_str, system_role_bundles_callback_function_string)

    }
	//End drop  system_role_bundles Data ===============
    
    function initialize_system_role_bundles(qstr="", system_role_bundles_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var system_role_bundles_token_query =qstr;
      if(qstr=="")
      {
       var system_role_bundles_token_query_param="";
       var system_role_bundles_js_uptoken=mosy_get_param("system_role_bundles_uptoken");
       //alert(system_role_bundles_js_uptoken);
       if(system_role_bundles_js_uptoken!==undefined)
       {
       
        system_role_bundles_token_query_param = atob(system_role_bundles_js_uptoken);
       }
        system_role_bundles_token_query = " where primkey='"+(system_role_bundles_token_query_param)+"'";
        
           if (document.getElementById("system_role_bundles_uptoken") !==null) {
           	if(document.getElementById("system_role_bundles_uptoken").value!="")
            {
            
            var system_role_bundles_atob_tbl_key =atob(document.getElementById("system_role_bundles_uptoken").value);
            
                   
            system_role_bundles_token_query = " where primkey='"+(system_role_bundles_atob_tbl_key)+"'";

            }
           }
      }
      
      var system_role_bundles_push_ui_data_to =system_role_bundles_callback_function_string;
      if(system_role_bundles_callback_function_string=="")
      {
      system_role_bundles_push_ui_data_to = "add_system_role_bundles_ui_data";
      }
                
      console.log(system_role_bundles_token_query+" -- "+system_role_bundles_js_uptoken);

	  //alert(system_role_bundles_push_ui_data_to);

     get_system_role_bundles("*", system_role_bundles_token_query, "primkey", "blackhole", system_role_bundles_push_ui_data_to, "", "", req_url);
     
     ///get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")
    }
    
    function add_system_role_bundles_ui_data(system_role_bundles_server_resp) 
    {
    
    ///alert(system_role_bundles_server_resp);
    
    var json_decoded_str=JSON.parse(system_role_bundles_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load system_role_bundles data on the fly ==============
    
	var gft_system_role_bundles_str="(record_id LIKE '%{{qsystem_role_bundles}}%' OR  bundle_id LIKE '%{{qsystem_role_bundles}}%' OR  bundle_name LIKE '%{{qsystem_role_bundles}}%' OR  remark LIKE '%{{qsystem_role_bundles}}%' OR  hive_site_id LIKE '%{{qsystem_role_bundles}}%' OR  hive_site_name LIKE '%{{qsystem_role_bundles}}%')";
    
    function  gft_system_role_bundles(qsystem_role_bundles_str)
    {
        	var clean_system_role_bundles_filter_str=gft_system_role_bundles_str.replace(/{{qsystem_role_bundles}}/g, magic_clean_str(qsystem_role_bundles_str));
            
            return  clean_system_role_bundles_filter_str;

    }
    
    function load_system_role_bundles(system_role_bundles_qstr, system_role_bundles_where_str, system_role_bundles_ret_cols, system_role_bundles_user_function, system_role_bundles_result_function, system_role_bundles_data_tray, req_url="")
    {
    
    var fsystem_role_bundles_result_function="push_result";
      
    if(system_role_bundles_result_function!="")
    {
          var fsystem_role_bundles_result_function=system_role_bundles_result_function;

    }
    	var clean_system_role_bundles_filter_str=gft_system_role_bundles_str.replace(/{{qsystem_role_bundles}}/g, magic_clean_str(system_role_bundles_qstr));
        
        var fsystem_role_bundles_where_str=" where "+clean_system_role_bundles_filter_str;

    if(system_role_bundles_where_str!="")
    {
          var fsystem_role_bundles_where_str=" "+system_role_bundles_where_str;

    }
       
      get_system_role_bundles("*", fsystem_role_bundles_where_str, system_role_bundles_ret_cols, system_role_bundles_user_function, fsystem_role_bundles_result_function, system_role_bundles_data_tray,"",req_url);
      ////get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")
    }
    ///=============== load system_role_bundles data on the fly ==============


 ///=quick load 
 
function qkload_system_role_bundles(qstr, push_fun="", ui_card="", and_query="", additional_cols="", system_role_bundles_pagination="",req_url="")
{

	var system_role_bundles_list_nodes_str=system_role_bundles_list_nodes;
  
   if(ui_card!="")
   {
      system_role_bundles_list_nodes_str=ui_card;
   }
   
   var system_role_bundles_qret_fun="push_grid_result:system_role_bundles_tbl_list";
   
   if(push_fun!="")
   {
    system_role_bundles_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_system_role_bundles("*", ajaxw+" ("+gft_system_role_bundles(qstr)+") "+combined_query+"  order by primkey desc ", system_role_bundles_list_cols+additional_cols_str, "",system_role_bundles_qret_fun, "c=>"+system_role_bundles_list_nodes_str, system_role_bundles_pagination, req_url);
   ///get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_system_role_bundles(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_system_role_bundles("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="") 

}


//qddata
function qsystem_role_bundles_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_system_role_bundles("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")    

}



//sum 

function sum_system_role_bundles(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_system_role_bundles("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_system_role_bundles(system_role_bundles_colstr, system_role_bundles_filter_col, system_role_bundles_cols, system_role_bundles_node_function_name, system_role_bundles_callback_function_string, system_role_bundles_ui_tag, system_role_bundles_pagination, req_url="")

}


///request handlers 

  
  function conf_del_system_role_bundles_(system_role_bundles_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'system_role_bundles_rem_(\''+system_role_bundles_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_system_role_bundles_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   system_role_bundles_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_system_role_bundles_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   system_role_bundles_updt_(formid,"",response_fun,req_url)
 }
}

function system_role_bundles_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_role_bundles_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function system_role_bundles_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_role_bundles_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function system_role_bundles_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesystem_role_bundles&system_role_bundles_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_system_role_bundles_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('system_role_bundles')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  system_users Data ===============
    
      function get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")
      {
        mosyflex_sel("system_users", system_users_colstr, system_users_filter_col , system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination,req_url);
        
      }
    //End get  system_users Data ===============

    //Start insert  system_users Data ===============

	function add_system_users(system_users_cols, system_users_vals, system_users_callback_function_string)
    {
		
        mosyajax_create_data("system_users", system_users_cols, system_users_vals, system_users_callback_function_string);
     }
     
    //End insert  system_users Data ===============

    
    //Start update  system_users Data ===============

    function update_system_users(system_users_update_str, system_users_where_str, system_users_callback_function_string){
    
		mosyajax_update("system_users", system_users_update_str, system_users_where_str, system_users_callback_function_string)
    
    }
    //end  update  system_users Data ===============

	//Start drop  system_users Data ===============
    function system_users_drop(system_users_where_str, system_users_callback_function_string)
    {
        mosyajax_drop("system_users", system_users_where_str, system_users_callback_function_string)

    }
	//End drop  system_users Data ===============
    
    function initialize_system_users(qstr="", system_users_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var system_users_token_query =qstr;
      if(qstr=="")
      {
       var system_users_token_query_param="";
       var system_users_js_uptoken=mosy_get_param("system_users_uptoken");
       //alert(system_users_js_uptoken);
       if(system_users_js_uptoken!==undefined)
       {
       
        system_users_token_query_param = atob(system_users_js_uptoken);
       }
        system_users_token_query = " where primkey='"+(system_users_token_query_param)+"'";
        
           if (document.getElementById("system_users_uptoken") !==null) {
           	if(document.getElementById("system_users_uptoken").value!="")
            {
            
            var system_users_atob_tbl_key =atob(document.getElementById("system_users_uptoken").value);
            
                   
            system_users_token_query = " where primkey='"+(system_users_atob_tbl_key)+"'";

            }
           }
      }
      
      var system_users_push_ui_data_to =system_users_callback_function_string;
      if(system_users_callback_function_string=="")
      {
      system_users_push_ui_data_to = "add_system_users_ui_data";
      }
                
      console.log(system_users_token_query+" -- "+system_users_js_uptoken);

	  //alert(system_users_push_ui_data_to);

     get_system_users("*", system_users_token_query, "primkey", "blackhole", system_users_push_ui_data_to, "", "", req_url);
     
     ///get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")
    }
    
    function add_system_users_ui_data(system_users_server_resp) 
    {
    
    ///alert(system_users_server_resp);
    
    var json_decoded_str=JSON.parse(system_users_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load system_users data on the fly ==============
    
	var gft_system_users_str="(user_id LIKE '%{{qsystem_users}}%' OR  name LIKE '%{{qsystem_users}}%' OR  email LIKE '%{{qsystem_users}}%' OR  tel LIKE '%{{qsystem_users}}%' OR  login_password LIKE '%{{qsystem_users}}%' OR  ref_id LIKE '%{{qsystem_users}}%' OR  regdate LIKE '%{{qsystem_users}}%' OR  user_no LIKE '%{{qsystem_users}}%' OR  user_pic LIKE '%{{qsystem_users}}%' OR  user_gender LIKE '%{{qsystem_users}}%' OR  last_seen LIKE '%{{qsystem_users}}%' OR  about LIKE '%{{qsystem_users}}%' OR  hive_site_id LIKE '%{{qsystem_users}}%' OR  hive_site_name LIKE '%{{qsystem_users}}%' OR  auth_token LIKE '%{{qsystem_users}}%' OR  token_status LIKE '%{{qsystem_users}}%' OR  token_expiring_in LIKE '%{{qsystem_users}}%' OR  project_id LIKE '%{{qsystem_users}}%' OR  project_name LIKE '%{{qsystem_users}}%')";
    
    function  gft_system_users(qsystem_users_str)
    {
        	var clean_system_users_filter_str=gft_system_users_str.replace(/{{qsystem_users}}/g, magic_clean_str(qsystem_users_str));
            
            return  clean_system_users_filter_str;

    }
    
    function load_system_users(system_users_qstr, system_users_where_str, system_users_ret_cols, system_users_user_function, system_users_result_function, system_users_data_tray, req_url="")
    {
    
    var fsystem_users_result_function="push_result";
      
    if(system_users_result_function!="")
    {
          var fsystem_users_result_function=system_users_result_function;

    }
    	var clean_system_users_filter_str=gft_system_users_str.replace(/{{qsystem_users}}/g, magic_clean_str(system_users_qstr));
        
        var fsystem_users_where_str=" where "+clean_system_users_filter_str;

    if(system_users_where_str!="")
    {
          var fsystem_users_where_str=" "+system_users_where_str;

    }
       
      get_system_users("*", fsystem_users_where_str, system_users_ret_cols, system_users_user_function, fsystem_users_result_function, system_users_data_tray,"",req_url);
      ////get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")
    }
    ///=============== load system_users data on the fly ==============


 ///=quick load 
 
function qkload_system_users(qstr, push_fun="", ui_card="", and_query="", additional_cols="", system_users_pagination="",req_url="")
{

	var system_users_list_nodes_str=system_users_list_nodes;
  
   if(ui_card!="")
   {
      system_users_list_nodes_str=ui_card;
   }
   
   var system_users_qret_fun="push_grid_result:system_users_tbl_list";
   
   if(push_fun!="")
   {
    system_users_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_system_users("*", ajaxw+" ("+gft_system_users(qstr)+") "+combined_query+"  order by primkey desc ", system_users_list_cols+additional_cols_str, "",system_users_qret_fun, "c=>"+system_users_list_nodes_str, system_users_pagination, req_url);
   ///get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_system_users(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_system_users("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="") 

}


//qddata
function qsystem_users_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_system_users("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")    

}



//sum 

function sum_system_users(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_system_users("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_system_users(system_users_colstr, system_users_filter_col, system_users_cols, system_users_node_function_name, system_users_callback_function_string, system_users_ui_tag, system_users_pagination, req_url="")

}


///request handlers 

  
  function conf_del_system_users_(system_users_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'system_users_rem_(\''+system_users_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_system_users_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   system_users_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_system_users_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   system_users_updt_(formid,"",response_fun,req_url)
 }
}

function system_users_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_users_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function system_users_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_users_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function system_users_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesystem_users&system_users_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_system_users_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('system_users')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  transactions Data ===============
    
      function get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")
      {
        mosyflex_sel("transactions", transactions_colstr, transactions_filter_col , transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination,req_url);
        
      }
    //End get  transactions Data ===============

    //Start insert  transactions Data ===============

	function add_transactions(transactions_cols, transactions_vals, transactions_callback_function_string)
    {
		
        mosyajax_create_data("transactions", transactions_cols, transactions_vals, transactions_callback_function_string);
     }
     
    //End insert  transactions Data ===============

    
    //Start update  transactions Data ===============

    function update_transactions(transactions_update_str, transactions_where_str, transactions_callback_function_string){
    
		mosyajax_update("transactions", transactions_update_str, transactions_where_str, transactions_callback_function_string)
    
    }
    //end  update  transactions Data ===============

	//Start drop  transactions Data ===============
    function transactions_drop(transactions_where_str, transactions_callback_function_string)
    {
        mosyajax_drop("transactions", transactions_where_str, transactions_callback_function_string)

    }
	//End drop  transactions Data ===============
    
    function initialize_transactions(qstr="", transactions_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var transactions_token_query =qstr;
      if(qstr=="")
      {
       var transactions_token_query_param="";
       var transactions_js_uptoken=mosy_get_param("transactions_uptoken");
       //alert(transactions_js_uptoken);
       if(transactions_js_uptoken!==undefined)
       {
       
        transactions_token_query_param = atob(transactions_js_uptoken);
       }
        transactions_token_query = " where primkey='"+(transactions_token_query_param)+"'";
        
           if (document.getElementById("transactions_uptoken") !==null) {
           	if(document.getElementById("transactions_uptoken").value!="")
            {
            
            var transactions_atob_tbl_key =atob(document.getElementById("transactions_uptoken").value);
            
                   
            transactions_token_query = " where primkey='"+(transactions_atob_tbl_key)+"'";

            }
           }
      }
      
      var transactions_push_ui_data_to =transactions_callback_function_string;
      if(transactions_callback_function_string=="")
      {
      transactions_push_ui_data_to = "add_transactions_ui_data";
      }
                
      console.log(transactions_token_query+" -- "+transactions_js_uptoken);

	  //alert(transactions_push_ui_data_to);

     get_transactions("*", transactions_token_query, "primkey", "blackhole", transactions_push_ui_data_to, "", "", req_url);
     
     ///get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")
    }
    
    function add_transactions_ui_data(transactions_server_resp) 
    {
    
    ///alert(transactions_server_resp);
    
    var json_decoded_str=JSON.parse(transactions_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load transactions data on the fly ==============
    
	var gft_transactions_str="(trxkey LIKE '%{{qtransactions}}%' OR  trx_id LIKE '%{{qtransactions}}%' OR  trx_date LIKE '%{{qtransactions}}%' OR  trx_month_year LIKE '%{{qtransactions}}%' OR  trx_remark LIKE '%{{qtransactions}}%' OR  amount LIKE '%{{qtransactions}}%' OR  trx_type LIKE '%{{qtransactions}}%' OR  business_id LIKE '%{{qtransactions}}%' OR  client_id LIKE '%{{qtransactions}}%' OR  admin_id LIKE '%{{qtransactions}}%' OR  TransactionType LIKE '%{{qtransactions}}%' OR  BusinessShortCode LIKE '%{{qtransactions}}%' OR  BillRefNumber LIKE '%{{qtransactions}}%' OR  InvoiceNumber LIKE '%{{qtransactions}}%' OR  OrgAccountBalance LIKE '%{{qtransactions}}%' OR  ThirdPartyTransID LIKE '%{{qtransactions}}%' OR  MSISDN LIKE '%{{qtransactions}}%' OR  FirstName LIKE '%{{qtransactions}}%' OR  MiddleName LIKE '%{{qtransactions}}%' OR  LastName LIKE '%{{qtransactions}}%' OR  trx_msg LIKE '%{{qtransactions}}%' OR  account_id LIKE '%{{qtransactions}}%' OR  used_status LIKE '%{{qtransactions}}%' OR  filter_date LIKE '%{{qtransactions}}%' OR  flw_id LIKE '%{{qtransactions}}%' OR  flag_state LIKE '%{{qtransactions}}%' OR  reconciled LIKE '%{{qtransactions}}%' OR  trx_timestamp LIKE '%{{qtransactions}}%' OR  hive_site_id LIKE '%{{qtransactions}}%' OR  hive_site_name LIKE '%{{qtransactions}}%')";
    
    function  gft_transactions(qtransactions_str)
    {
        	var clean_transactions_filter_str=gft_transactions_str.replace(/{{qtransactions}}/g, magic_clean_str(qtransactions_str));
            
            return  clean_transactions_filter_str;

    }
    
    function load_transactions(transactions_qstr, transactions_where_str, transactions_ret_cols, transactions_user_function, transactions_result_function, transactions_data_tray, req_url="")
    {
    
    var ftransactions_result_function="push_result";
      
    if(transactions_result_function!="")
    {
          var ftransactions_result_function=transactions_result_function;

    }
    	var clean_transactions_filter_str=gft_transactions_str.replace(/{{qtransactions}}/g, magic_clean_str(transactions_qstr));
        
        var ftransactions_where_str=" where "+clean_transactions_filter_str;

    if(transactions_where_str!="")
    {
          var ftransactions_where_str=" "+transactions_where_str;

    }
       
      get_transactions("*", ftransactions_where_str, transactions_ret_cols, transactions_user_function, ftransactions_result_function, transactions_data_tray,"",req_url);
      ////get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")
    }
    ///=============== load transactions data on the fly ==============


 ///=quick load 
 
function qkload_transactions(qstr, push_fun="", ui_card="", and_query="", additional_cols="", transactions_pagination="",req_url="")
{

	var transactions_list_nodes_str=transactions_list_nodes;
  
   if(ui_card!="")
   {
      transactions_list_nodes_str=ui_card;
   }
   
   var transactions_qret_fun="push_grid_result:transactions_tbl_list";
   
   if(push_fun!="")
   {
    transactions_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_transactions("*", ajaxw+" ("+gft_transactions(qstr)+") "+combined_query+"  order by primkey desc ", transactions_list_cols+additional_cols_str, "",transactions_qret_fun, "c=>"+transactions_list_nodes_str, transactions_pagination, req_url);
   ///get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_transactions(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_transactions("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="") 

}


//qddata
function qtransactions_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_transactions("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")    

}



//sum 

function sum_transactions(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_transactions("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_transactions(transactions_colstr, transactions_filter_col, transactions_cols, transactions_node_function_name, transactions_callback_function_string, transactions_ui_tag, transactions_pagination, req_url="")

}


///request handlers 

  
  function conf_del_transactions_(transactions_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'transactions_rem_(\''+transactions_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_transactions_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   transactions_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_transactions_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   transactions_updt_(formid,"",response_fun,req_url)
 }
}

function transactions_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "transactions_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function transactions_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "transactions_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function transactions_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletetransactions&transactions_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_transactions_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('transactions')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  user_bundle_role_functions Data ===============
    
      function get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")
      {
        mosyflex_sel("user_bundle_role_functions", user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col , user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination,req_url);
        
      }
    //End get  user_bundle_role_functions Data ===============

    //Start insert  user_bundle_role_functions Data ===============

	function add_user_bundle_role_functions(user_bundle_role_functions_cols, user_bundle_role_functions_vals, user_bundle_role_functions_callback_function_string)
    {
		
        mosyajax_create_data("user_bundle_role_functions", user_bundle_role_functions_cols, user_bundle_role_functions_vals, user_bundle_role_functions_callback_function_string);
     }
     
    //End insert  user_bundle_role_functions Data ===============

    
    //Start update  user_bundle_role_functions Data ===============

    function update_user_bundle_role_functions(user_bundle_role_functions_update_str, user_bundle_role_functions_where_str, user_bundle_role_functions_callback_function_string){
    
		mosyajax_update("user_bundle_role_functions", user_bundle_role_functions_update_str, user_bundle_role_functions_where_str, user_bundle_role_functions_callback_function_string)
    
    }
    //end  update  user_bundle_role_functions Data ===============

	//Start drop  user_bundle_role_functions Data ===============
    function user_bundle_role_functions_drop(user_bundle_role_functions_where_str, user_bundle_role_functions_callback_function_string)
    {
        mosyajax_drop("user_bundle_role_functions", user_bundle_role_functions_where_str, user_bundle_role_functions_callback_function_string)

    }
	//End drop  user_bundle_role_functions Data ===============
    
    function initialize_user_bundle_role_functions(qstr="", user_bundle_role_functions_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var user_bundle_role_functions_token_query =qstr;
      if(qstr=="")
      {
       var user_bundle_role_functions_token_query_param="";
       var user_bundle_role_functions_js_uptoken=mosy_get_param("user_bundle_role_functions_uptoken");
       //alert(user_bundle_role_functions_js_uptoken);
       if(user_bundle_role_functions_js_uptoken!==undefined)
       {
       
        user_bundle_role_functions_token_query_param = atob(user_bundle_role_functions_js_uptoken);
       }
        user_bundle_role_functions_token_query = " where primkey='"+(user_bundle_role_functions_token_query_param)+"'";
        
           if (document.getElementById("user_bundle_role_functions_uptoken") !==null) {
           	if(document.getElementById("user_bundle_role_functions_uptoken").value!="")
            {
            
            var user_bundle_role_functions_atob_tbl_key =atob(document.getElementById("user_bundle_role_functions_uptoken").value);
            
                   
            user_bundle_role_functions_token_query = " where primkey='"+(user_bundle_role_functions_atob_tbl_key)+"'";

            }
           }
      }
      
      var user_bundle_role_functions_push_ui_data_to =user_bundle_role_functions_callback_function_string;
      if(user_bundle_role_functions_callback_function_string=="")
      {
      user_bundle_role_functions_push_ui_data_to = "add_user_bundle_role_functions_ui_data";
      }
                
      console.log(user_bundle_role_functions_token_query+" -- "+user_bundle_role_functions_js_uptoken);

	  //alert(user_bundle_role_functions_push_ui_data_to);

     get_user_bundle_role_functions("*", user_bundle_role_functions_token_query, "primkey", "blackhole", user_bundle_role_functions_push_ui_data_to, "", "", req_url);
     
     ///get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")
    }
    
    function add_user_bundle_role_functions_ui_data(user_bundle_role_functions_server_resp) 
    {
    
    ///alert(user_bundle_role_functions_server_resp);
    
    var json_decoded_str=JSON.parse(user_bundle_role_functions_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load user_bundle_role_functions data on the fly ==============
    
	var gft_user_bundle_role_functions_str="(record_id LIKE '%{{quser_bundle_role_functions}}%' OR  bundle_id LIKE '%{{quser_bundle_role_functions}}%' OR  bundle_name LIKE '%{{quser_bundle_role_functions}}%' OR  role_id LIKE '%{{quser_bundle_role_functions}}%' OR  role_name LIKE '%{{quser_bundle_role_functions}}%' OR  remark LIKE '%{{quser_bundle_role_functions}}%' OR  hive_site_id LIKE '%{{quser_bundle_role_functions}}%' OR  hive_site_name LIKE '%{{quser_bundle_role_functions}}%')";
    
    function  gft_user_bundle_role_functions(quser_bundle_role_functions_str)
    {
        	var clean_user_bundle_role_functions_filter_str=gft_user_bundle_role_functions_str.replace(/{{quser_bundle_role_functions}}/g, magic_clean_str(quser_bundle_role_functions_str));
            
            return  clean_user_bundle_role_functions_filter_str;

    }
    
    function load_user_bundle_role_functions(user_bundle_role_functions_qstr, user_bundle_role_functions_where_str, user_bundle_role_functions_ret_cols, user_bundle_role_functions_user_function, user_bundle_role_functions_result_function, user_bundle_role_functions_data_tray, req_url="")
    {
    
    var fuser_bundle_role_functions_result_function="push_result";
      
    if(user_bundle_role_functions_result_function!="")
    {
          var fuser_bundle_role_functions_result_function=user_bundle_role_functions_result_function;

    }
    	var clean_user_bundle_role_functions_filter_str=gft_user_bundle_role_functions_str.replace(/{{quser_bundle_role_functions}}/g, magic_clean_str(user_bundle_role_functions_qstr));
        
        var fuser_bundle_role_functions_where_str=" where "+clean_user_bundle_role_functions_filter_str;

    if(user_bundle_role_functions_where_str!="")
    {
          var fuser_bundle_role_functions_where_str=" "+user_bundle_role_functions_where_str;

    }
       
      get_user_bundle_role_functions("*", fuser_bundle_role_functions_where_str, user_bundle_role_functions_ret_cols, user_bundle_role_functions_user_function, fuser_bundle_role_functions_result_function, user_bundle_role_functions_data_tray,"",req_url);
      ////get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")
    }
    ///=============== load user_bundle_role_functions data on the fly ==============


 ///=quick load 
 
function qkload_user_bundle_role_functions(qstr, push_fun="", ui_card="", and_query="", additional_cols="", user_bundle_role_functions_pagination="",req_url="")
{

	var user_bundle_role_functions_list_nodes_str=user_bundle_role_functions_list_nodes;
  
   if(ui_card!="")
   {
      user_bundle_role_functions_list_nodes_str=ui_card;
   }
   
   var user_bundle_role_functions_qret_fun="push_grid_result:user_bundle_role_functions_tbl_list";
   
   if(push_fun!="")
   {
    user_bundle_role_functions_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_user_bundle_role_functions("*", ajaxw+" ("+gft_user_bundle_role_functions(qstr)+") "+combined_query+"  order by primkey desc ", user_bundle_role_functions_list_cols+additional_cols_str, "",user_bundle_role_functions_qret_fun, "c=>"+user_bundle_role_functions_list_nodes_str, user_bundle_role_functions_pagination, req_url);
   ///get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_user_bundle_role_functions(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_user_bundle_role_functions("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="") 

}


//qddata
function quser_bundle_role_functions_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_user_bundle_role_functions("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")    

}



//sum 

function sum_user_bundle_role_functions(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_user_bundle_role_functions("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_user_bundle_role_functions(user_bundle_role_functions_colstr, user_bundle_role_functions_filter_col, user_bundle_role_functions_cols, user_bundle_role_functions_node_function_name, user_bundle_role_functions_callback_function_string, user_bundle_role_functions_ui_tag, user_bundle_role_functions_pagination, req_url="")

}


///request handlers 

  
  function conf_del_user_bundle_role_functions_(user_bundle_role_functions_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'user_bundle_role_functions_rem_(\''+user_bundle_role_functions_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_user_bundle_role_functions_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   user_bundle_role_functions_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_user_bundle_role_functions_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   user_bundle_role_functions_updt_(formid,"",response_fun,req_url)
 }
}

function user_bundle_role_functions_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "user_bundle_role_functions_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function user_bundle_role_functions_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "user_bundle_role_functions_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function user_bundle_role_functions_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteuser_bundle_role_functions&user_bundle_role_functions_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_user_bundle_role_functions_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('user_bundle_role_functions')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  user_manifest_ Data ===============
    
      function get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")
      {
        mosyflex_sel("user_manifest_", user_manifest__colstr, user_manifest__filter_col , user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination,req_url);
        
      }
    //End get  user_manifest_ Data ===============

    //Start insert  user_manifest_ Data ===============

	function add_user_manifest_(user_manifest__cols, user_manifest__vals, user_manifest__callback_function_string)
    {
		
        mosyajax_create_data("user_manifest_", user_manifest__cols, user_manifest__vals, user_manifest__callback_function_string);
     }
     
    //End insert  user_manifest_ Data ===============

    
    //Start update  user_manifest_ Data ===============

    function update_user_manifest_(user_manifest__update_str, user_manifest__where_str, user_manifest__callback_function_string){
    
		mosyajax_update("user_manifest_", user_manifest__update_str, user_manifest__where_str, user_manifest__callback_function_string)
    
    }
    //end  update  user_manifest_ Data ===============

	//Start drop  user_manifest_ Data ===============
    function user_manifest__drop(user_manifest__where_str, user_manifest__callback_function_string)
    {
        mosyajax_drop("user_manifest_", user_manifest__where_str, user_manifest__callback_function_string)

    }
	//End drop  user_manifest_ Data ===============
    
    function initialize_user_manifest_(qstr="", user_manifest__callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var user_manifest__token_query =qstr;
      if(qstr=="")
      {
       var user_manifest__token_query_param="";
       var user_manifest__js_uptoken=mosy_get_param("user_manifest__uptoken");
       //alert(user_manifest__js_uptoken);
       if(user_manifest__js_uptoken!==undefined)
       {
       
        user_manifest__token_query_param = atob(user_manifest__js_uptoken);
       }
        user_manifest__token_query = " where primkey='"+(user_manifest__token_query_param)+"'";
        
           if (document.getElementById("user_manifest__uptoken") !==null) {
           	if(document.getElementById("user_manifest__uptoken").value!="")
            {
            
            var user_manifest__atob_tbl_key =atob(document.getElementById("user_manifest__uptoken").value);
            
                   
            user_manifest__token_query = " where primkey='"+(user_manifest__atob_tbl_key)+"'";

            }
           }
      }
      
      var user_manifest__push_ui_data_to =user_manifest__callback_function_string;
      if(user_manifest__callback_function_string=="")
      {
      user_manifest__push_ui_data_to = "add_user_manifest__ui_data";
      }
                
      console.log(user_manifest__token_query+" -- "+user_manifest__js_uptoken);

	  //alert(user_manifest__push_ui_data_to);

     get_user_manifest_("*", user_manifest__token_query, "primkey", "blackhole", user_manifest__push_ui_data_to, "", "", req_url);
     
     ///get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")
    }
    
    function add_user_manifest__ui_data(user_manifest__server_resp) 
    {
    
    ///alert(user_manifest__server_resp);
    
    var json_decoded_str=JSON.parse(user_manifest__server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load user_manifest_ data on the fly ==============
    
	var gft_user_manifest__str="(admin_mkey LIKE '%{{quser_manifest_}}%' OR  user_id LIKE '%{{quser_manifest_}}%' OR  user_name LIKE '%{{quser_manifest_}}%' OR  role_id LIKE '%{{quser_manifest_}}%' OR  site_id LIKE '%{{quser_manifest_}}%' OR  role_name LIKE '%{{quser_manifest_}}%' OR  hive_site_id LIKE '%{{quser_manifest_}}%' OR  hive_site_name LIKE '%{{quser_manifest_}}%' OR  project_id LIKE '%{{quser_manifest_}}%' OR  project_name LIKE '%{{quser_manifest_}}%')";
    
    function  gft_user_manifest_(quser_manifest__str)
    {
        	var clean_user_manifest__filter_str=gft_user_manifest__str.replace(/{{quser_manifest_}}/g, magic_clean_str(quser_manifest__str));
            
            return  clean_user_manifest__filter_str;

    }
    
    function load_user_manifest_(user_manifest__qstr, user_manifest__where_str, user_manifest__ret_cols, user_manifest__user_function, user_manifest__result_function, user_manifest__data_tray, req_url="")
    {
    
    var fuser_manifest__result_function="push_result";
      
    if(user_manifest__result_function!="")
    {
          var fuser_manifest__result_function=user_manifest__result_function;

    }
    	var clean_user_manifest__filter_str=gft_user_manifest__str.replace(/{{quser_manifest_}}/g, magic_clean_str(user_manifest__qstr));
        
        var fuser_manifest__where_str=" where "+clean_user_manifest__filter_str;

    if(user_manifest__where_str!="")
    {
          var fuser_manifest__where_str=" "+user_manifest__where_str;

    }
       
      get_user_manifest_("*", fuser_manifest__where_str, user_manifest__ret_cols, user_manifest__user_function, fuser_manifest__result_function, user_manifest__data_tray,"",req_url);
      ////get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")
    }
    ///=============== load user_manifest_ data on the fly ==============


 ///=quick load 
 
function qkload_user_manifest_(qstr, push_fun="", ui_card="", and_query="", additional_cols="", user_manifest__pagination="",req_url="")
{

	var user_manifest__list_nodes_str=user_manifest__list_nodes;
  
   if(ui_card!="")
   {
      user_manifest__list_nodes_str=ui_card;
   }
   
   var user_manifest__qret_fun="push_grid_result:user_manifest__tbl_list";
   
   if(push_fun!="")
   {
    user_manifest__qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_user_manifest_("*", ajaxw+" ("+gft_user_manifest_(qstr)+") "+combined_query+"  order by primkey desc ", user_manifest__list_cols+additional_cols_str, "",user_manifest__qret_fun, "c=>"+user_manifest__list_nodes_str, user_manifest__pagination, req_url);
   ///get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_user_manifest_(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_user_manifest_("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="") 

}


//qddata
function quser_manifest__ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_user_manifest_("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")    

}



//sum 

function sum_user_manifest_(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_user_manifest_("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_user_manifest_(user_manifest__colstr, user_manifest__filter_col, user_manifest__cols, user_manifest__node_function_name, user_manifest__callback_function_string, user_manifest__ui_tag, user_manifest__pagination, req_url="")

}


///request handlers 

  
  function conf_del_user_manifest__(user_manifest__data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'user_manifest__rem_(\''+user_manifest__data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_user_manifest__ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   user_manifest__ins_(formid,"",response_fun,req_url)
 }
}

function mosy_user_manifest__updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   user_manifest__updt_(formid,"",response_fun,req_url)
 }
}

function user_manifest__ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "user_manifest__insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function user_manifest__updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "user_manifest__update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function user_manifest__rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteuser_manifest_&user_manifest__uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_user_manifest__updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('user_manifest_')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  withdrawal_requests Data ===============
    
      function get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")
      {
        mosyflex_sel("withdrawal_requests", withdrawal_requests_colstr, withdrawal_requests_filter_col , withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination,req_url);
        
      }
    //End get  withdrawal_requests Data ===============

    //Start insert  withdrawal_requests Data ===============

	function add_withdrawal_requests(withdrawal_requests_cols, withdrawal_requests_vals, withdrawal_requests_callback_function_string)
    {
		
        mosyajax_create_data("withdrawal_requests", withdrawal_requests_cols, withdrawal_requests_vals, withdrawal_requests_callback_function_string);
     }
     
    //End insert  withdrawal_requests Data ===============

    
    //Start update  withdrawal_requests Data ===============

    function update_withdrawal_requests(withdrawal_requests_update_str, withdrawal_requests_where_str, withdrawal_requests_callback_function_string){
    
		mosyajax_update("withdrawal_requests", withdrawal_requests_update_str, withdrawal_requests_where_str, withdrawal_requests_callback_function_string)
    
    }
    //end  update  withdrawal_requests Data ===============

	//Start drop  withdrawal_requests Data ===============
    function withdrawal_requests_drop(withdrawal_requests_where_str, withdrawal_requests_callback_function_string)
    {
        mosyajax_drop("withdrawal_requests", withdrawal_requests_where_str, withdrawal_requests_callback_function_string)

    }
	//End drop  withdrawal_requests Data ===============
    
    function initialize_withdrawal_requests(qstr="", withdrawal_requests_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var withdrawal_requests_token_query =qstr;
      if(qstr=="")
      {
       var withdrawal_requests_token_query_param="";
       var withdrawal_requests_js_uptoken=mosy_get_param("withdrawal_requests_uptoken");
       //alert(withdrawal_requests_js_uptoken);
       if(withdrawal_requests_js_uptoken!==undefined)
       {
       
        withdrawal_requests_token_query_param = atob(withdrawal_requests_js_uptoken);
       }
        withdrawal_requests_token_query = " where primkey='"+(withdrawal_requests_token_query_param)+"'";
        
           if (document.getElementById("withdrawal_requests_uptoken") !==null) {
           	if(document.getElementById("withdrawal_requests_uptoken").value!="")
            {
            
            var withdrawal_requests_atob_tbl_key =atob(document.getElementById("withdrawal_requests_uptoken").value);
            
                   
            withdrawal_requests_token_query = " where primkey='"+(withdrawal_requests_atob_tbl_key)+"'";

            }
           }
      }
      
      var withdrawal_requests_push_ui_data_to =withdrawal_requests_callback_function_string;
      if(withdrawal_requests_callback_function_string=="")
      {
      withdrawal_requests_push_ui_data_to = "add_withdrawal_requests_ui_data";
      }
                
      console.log(withdrawal_requests_token_query+" -- "+withdrawal_requests_js_uptoken);

	  //alert(withdrawal_requests_push_ui_data_to);

     get_withdrawal_requests("*", withdrawal_requests_token_query, "primkey", "blackhole", withdrawal_requests_push_ui_data_to, "", "", req_url);
     
     ///get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")
    }
    
    function add_withdrawal_requests_ui_data(withdrawal_requests_server_resp) 
    {
    
    ///alert(withdrawal_requests_server_resp);
    
    var json_decoded_str=JSON.parse(withdrawal_requests_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load withdrawal_requests data on the fly ==============
    
	var gft_withdrawal_requests_str="(record_id LIKE '%{{qwithdrawal_requests}}%' OR  affiliate LIKE '%{{qwithdrawal_requests}}%' OR  amount LIKE '%{{qwithdrawal_requests}}%' OR  date_requested LIKE '%{{qwithdrawal_requests}}%' OR  approval_status LIKE '%{{qwithdrawal_requests}}%' OR  amount_sent LIKE '%{{qwithdrawal_requests}}%' OR  payment_ref LIKE '%{{qwithdrawal_requests}}%' OR  date_sent LIKE '%{{qwithdrawal_requests}}%' OR  remark LIKE '%{{qwithdrawal_requests}}%')";
    
    function  gft_withdrawal_requests(qwithdrawal_requests_str)
    {
        	var clean_withdrawal_requests_filter_str=gft_withdrawal_requests_str.replace(/{{qwithdrawal_requests}}/g, magic_clean_str(qwithdrawal_requests_str));
            
            return  clean_withdrawal_requests_filter_str;

    }
    
    function load_withdrawal_requests(withdrawal_requests_qstr, withdrawal_requests_where_str, withdrawal_requests_ret_cols, withdrawal_requests_user_function, withdrawal_requests_result_function, withdrawal_requests_data_tray, req_url="")
    {
    
    var fwithdrawal_requests_result_function="push_result";
      
    if(withdrawal_requests_result_function!="")
    {
          var fwithdrawal_requests_result_function=withdrawal_requests_result_function;

    }
    	var clean_withdrawal_requests_filter_str=gft_withdrawal_requests_str.replace(/{{qwithdrawal_requests}}/g, magic_clean_str(withdrawal_requests_qstr));
        
        var fwithdrawal_requests_where_str=" where "+clean_withdrawal_requests_filter_str;

    if(withdrawal_requests_where_str!="")
    {
          var fwithdrawal_requests_where_str=" "+withdrawal_requests_where_str;

    }
       
      get_withdrawal_requests("*", fwithdrawal_requests_where_str, withdrawal_requests_ret_cols, withdrawal_requests_user_function, fwithdrawal_requests_result_function, withdrawal_requests_data_tray,"",req_url);
      ////get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")
    }
    ///=============== load withdrawal_requests data on the fly ==============


 ///=quick load 
 
function qkload_withdrawal_requests(qstr, push_fun="", ui_card="", and_query="", additional_cols="", withdrawal_requests_pagination="",req_url="")
{

	var withdrawal_requests_list_nodes_str=withdrawal_requests_list_nodes;
  
   if(ui_card!="")
   {
      withdrawal_requests_list_nodes_str=ui_card;
   }
   
   var withdrawal_requests_qret_fun="push_grid_result:withdrawal_requests_tbl_list";
   
   if(push_fun!="")
   {
    withdrawal_requests_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_withdrawal_requests("*", ajaxw+" ("+gft_withdrawal_requests(qstr)+") "+combined_query+"  order by primkey desc ", withdrawal_requests_list_cols+additional_cols_str, "",withdrawal_requests_qret_fun, "c=>"+withdrawal_requests_list_nodes_str, withdrawal_requests_pagination, req_url);
   ///get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_withdrawal_requests(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_withdrawal_requests("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="") 

}


//qddata
function qwithdrawal_requests_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_withdrawal_requests("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")    

}



//sum 

function sum_withdrawal_requests(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_withdrawal_requests("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_withdrawal_requests(withdrawal_requests_colstr, withdrawal_requests_filter_col, withdrawal_requests_cols, withdrawal_requests_node_function_name, withdrawal_requests_callback_function_string, withdrawal_requests_ui_tag, withdrawal_requests_pagination, req_url="")

}


///request handlers 

  
  function conf_del_withdrawal_requests_(withdrawal_requests_data_key, after_delete="blackhole",  cancel_function="blackhole()", push_to="alert_box")
  {


    magic_yes_no_alert('Delete record?', push_to, 'withdrawal_requests_rem_(\''+withdrawal_requests_data_key+'\', \''+after_delete+'\')', cancel_function)

  }


function mosy_withdrawal_requests_ins_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form",req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
      magic_message("Processing", "dialog_box")

   withdrawal_requests_ins_(formid,"",response_fun,req_url)
 }
}

function mosy_withdrawal_requests_updt_fun(response_fun="blackhole", required_container="mosy_form", formid="mosy_form", req_url="")
{
 if(mosy_required_form_inputs(required_container)==1)
 {
   magic_message("Processing", "dialog_box")
   withdrawal_requests_updt_(formid,"",response_fun,req_url)
 }
}

function withdrawal_requests_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "withdrawal_requests_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function withdrawal_requests_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "withdrawal_requests_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function withdrawal_requests_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletewithdrawal_requests&withdrawal_requests_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_withdrawal_requests_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('withdrawal_requests')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
  //===============End Mosy queries-============
function mosy_msdn_event(event) {
  const target = event.target;
  const mosy_msdnElement = target.closest('.mosy_msdn');

  if (mosy_msdnElement) {
    const arguments = mosy_msdnElement.getAttribute('data-mosy_msdn');
    eval(arguments);
    event.stopPropagation(); // stop the event from propagating further up the tree
  }
}

// Add an onclick event listener to the parent element using event delegation
document.body.addEventListener('click', mosy_msdn_event);

// Define a function to handle the click event
function mosy_tup_event(event) {
  
  const target = event.target;
  if (target.classList.contains('mosy_tup')) {
    const arguments = target.getAttribute('data-mosy_tup');
    eval(arguments);    
    event.stopPropagation(); // stop the event from propagating further up the tree
  }
  
}

// Add an onkeyup event listener to the parent element using event delegation
document.body.addEventListener('keyup', mosy_tup_event);

  
var def_ajax_url ="./ajaxreqhandler.php";

function mosy_ajax_url(url="")
{
 if(url=="")
 {
  url=def_ajax_url;
 }
 
 return url;
}

var ajax_url = mosy_ajax_url(def_ajax_url);

var mosyajax_sql_url=ajax_url;
   //Ajax Manager
function mosyflex_sel(tbl, colstr, filter_col , cols, node_function_name, callback_function_string, ui_tag, pagination="", req_url="")
{
//alert(filter_col);
///alert(pagination);
///alert(req_url);
    
    if(req_url=="")
    {
     req_url=ajax_url;
    }

    var clean_ui1=ui_tag.replace(/</g, "{{<}}");
    var clean_ui2=clean_ui1.replace(/>/g, "{{>}}");
    var clean_ui3=clean_ui2.replace(/onclick/g, "{{on click}}");
    var clean_ui4=clean_ui3.replace(/onkeyup/g, "{{on keyup}}");
    var clean_ui5=clean_ui4.replace(/onchange/g, "{{on change}}");
    var clean_ui=btoa(clean_ui5);
    
  	var pagination_token=1;
    var pagination_name=pagination;
    
    if(pagination.indexOf(":") >= 0)
  	{
      pagination_token_expl=pagination.split(":");
      pagination_token=pagination_token_expl[1];
      pagination_name=pagination_token_expl[0];
    }
    
  
    var json_params_str={"mosyajax_sql_data":filter_col, "colstr":colstr, "cols":cols, "node_function_name":node_function_name, "tbl":tbl, "ui_tag":clean_ui,"pagination":pagination_name};
   
  	//alert(clean_ui);
  
  //alert(pagination_name);
  //alert(pagination_token);
  
    if(pagination_token>1)
    {
		mosy_ajax_post(req_url+"?"+pagination_name+"="+btoa(pagination_token), json_params_str, callback_function_string, "");
    }else{
		mosy_ajax_post(req_url, json_params_str, callback_function_string, "");

    }
}


function mosy_next_page(elem_id)
{
  if(get_newval(elem_id)=="")
  {
  	push_newval(elem_id,0)
  }
  var next_token_no=parseInt(get_newval(elem_id))+1;
  
  push_newval(elem_id, next_token_no);
  
  return next_token_no;
}

function mosy_prev_page(elem_id)
{
  if(get_newval(elem_id)=="")
  {
  	push_newval(elem_id,0)
  }
  var next_token_no=parseInt(get_newval(elem_id))-1;
  
  if(next_token_no<=0)
  {
  next_token_no=1;
  }
  
  push_newval(elem_id, next_token_no);
  
  return next_token_no;
}

function push_result(server_resp, additional_callbacks)
{
  //alert(server_resp);
  
  var str_to_display=server_resp+'<div class="col-md-12 p-0 text-right"><span class="badge cpointer" style="font-size:10px;"><i class="fa fa-times-circle"></i> Close</span></div>';
  
  if(server_resp.toString().trim()=='')
  {
  	var str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray"> <div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-6 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div> </div>';
  }
  
  
  if (document.getElementById(additional_callbacks) !==null) {
        
  document.getElementById(additional_callbacks).style.display="block";
  document.getElementById(additional_callbacks).innerHTML=str_to_display;
        
    }else{
          
    document.getElementById("result").innerHTML=server_resp;

    };
}



function push_grid_result(server_resp, additional_callbacks)
{
  //alert(server_resp);
  
  var str_to_display=server_resp;
  
  var tbl_col_str="";
  var tbl_colspan ="";
  var elem_id=additional_callbacks;

  var empty_state_str="";
  
  if(additional_callbacks.indexOf(":") >= 0)
  {
     tbl_col_str=additional_callbacks.split(":");
     
     tbl_colspan=tbl_col_str[1];
     
     elem_id=tbl_col_str[0];

	if(typeof tbl_col_str[2] !== 'undefined') 
    {
     var empty_state_str = tbl_col_str[2];
    }

  }
///alert(additional_callbacks);
  if(server_resp.toString().trim()=='')
  {
  	if(tbl_colspan!="")
    {
      	var str_to_display='<tr class=" no_data_tray_grid" > <td colspan="'+tbl_colspan+'" style="text-align:center;"><div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div></td> </tr>';
    if(empty_state_str!="")
    {
    var str_to_display =window[empty_state_str];
    
    }
    }else{
        
  	var str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray_grid" > <div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div> </div>';
    
    if(empty_state_str!="")
    {
    var str_to_display =window[empty_state_str];
    
    }
    }
  }
  
  
  if (document.getElementById(elem_id) !==null) {
        
  ///document.getElementById(elem_id).style.display="block";
  document.getElementById(elem_id).innerHTML=str_to_display;
        
    }else{
          
    document.getElementById("result").innerHTML=server_resp;

    };
}

function mosy_empty_state(top_msg="", btm_msg="", tbl_colspan="")
{

    var str_to_display="";

  	if(tbl_colspan!="")
    {
      	var str_to_display='<tr class=" no_data_tray_grid " > <td colspan="'+tbl_colspan+'" style="text-align:center;">'+top_msg+'<hr><div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"> '+btm_msg+'</div></td> </tr>';
 
    }else{
        
  	 str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray_grid" > <div class=" text-wrap col-md-12">'+top_msg+'<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"> '+btm_msg+'</div> </div>';
    
 
    }


///alert(str_to_display);

  return str_to_display;

}


function push_val(arrkeys, arrvalues)
{
    var r = {},i;
    
    for (let i = 0; i < arrkeys.length; i++) {
        r[arrkeys[i]] = arrvalues[i];
      document.getElementById(arrvalues[i]).value=[arrkeys[i]];
    }

}

    function qddata(server_resp,callbacks)
    {
    //alert(server_resp);
    var retjson = JSON.parse(server_resp)[0];
    
        ///alert(retjson.name);


    return retjson;
    
    
    }
function mosy_ajax_post(post_url, json_params, callback_function_string, additional_callbacks)
{

	/////alert(post_url);

	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = additional_callbacks;
    
      try {
        
        const jsonObject = JSON.parse(callback_function_string);
        

         fcall_back_function = jsonObject.cbfun;

         fadditional_callbacks = callback_function_string;
            
        console.log("Valid JSON");
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        console.log("Invalid JSON:"+callback_function_string);
        
        if(callback_function_string.indexOf(":") >= 0)
        {         
             split_call_back=callback_function_string.split(/:(.*)/s);

             fcall_back_function = split_call_back[0];

             fadditional_callbacks = split_call_back[1];

        }        
        
      }
    
    if (document.getElementById(fadditional_callbacks) !==null) {
      ////  document.getElementById(fadditional_callbacks).style.display="block";
    	///document.getElementById(fadditional_callbacks).innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... '+document.getElementById(fadditional_callbacks).innerHTML;
        
    }
    
       if (document.getElementById("ajax_spinner") !==null) 
       {
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... ';

       }else{
       	mosy_snack_wgt("Processing request...", "top", "ajax_snack", "200px", "ajax_snack_id", "#000",  "#fff", "");
    
    	mosytoggle_class("ajax_snack_id", "show");
        
       }
       
       
  	var formData = ((json_params)); //Array 
  
      $.ajax({ 
      url: post_url,
      type: "POST",
      data:formData,

      success: function (data) 
      {
        //alert(data);
       if (document.getElementById("ajax_spinner") !==null) 
       {
       
         var result_response_='<i class="fa fa-info-circle"></i> Request Processed Succesfully.';
		
        	if(data=='')
            {
            
        		var result_response_='<i class="fa fa-info-circle"></i> No data .';
            
            }
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML=result_response_;

       } 
       
       push_html("ajax_snack", "");                                          

        window[fcall_back_function](data, fadditional_callbacks);

      }

  })
  
}  


   //Ajax Manager

function mosyajax_create_data(tbl, tbl_cols, tbl_vals, callback_function_string)
{
  ///alert(tbl_cols+" - "+tbl_vals);
  
    var json_params_str={"mosyajax_create":"ok", "tbl_cols":tbl_cols, "tbl_vals":tbl_vals, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}

   //Ajax Exe
function mosyajax_update(tbl, update_str, where_str, callback_function_string)
{
  //alert(update_str);
  
    var json_params_str={"mosyajax_update":"ok", "update_str":update_str, "where_str":where_str, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}

function mosyajax_drop(tbl, where_str, callback_function_string)
{
  //alert(where_str);
  
    var json_params_str={"mosyajax_drop":"ok", "where_str":where_str, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}


function mosyajax_get(getstr, callback_function_string,req_url="")
{
    if(req_url=="")
    {
     req_url=ajax_url;
    }

	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = "";

      try {
        
        const jsonObject = JSON.parse(callback_function_string);
        

         fcall_back_function = jsonObject.cbfun;

         fadditional_callbacks = callback_function_string;
            
        console.log("Valid JSON");
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        console.log("Invalid JSON:"+callback_function_string);
        
        if(callback_function_string.indexOf(":") >= 0)
        {
             split_call_back = callback_function_string.split(":");

             fcall_back_function = split_call_back[0];

             fadditional_callbacks = split_call_back[1];

        }        
        
      }
    
       if (document.getElementById("ajax_spinner") !==null) 
       {
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... ';

       }else{
       	mosy_snack_wgt("Processing request...", "top", "ajax_snack", "200px", "ajax_snack_id", "#000",  "#fff", "");
    
    	mosytoggle_class("ajax_snack_id", "show");
        
       }
       

    $.ajax({
      url: req_url+"?"+getstr,
      type: 'GET',
      success: function(res) {
 
       if (document.getElementById("ajax_spinner") !==null) 
       {
       
         var result_response_='<i class="fa fa-info-circle"></i> Request Processed Succesfully.';
		
        	if(data=='')
            {
            
        		var result_response_='<i class="fa fa-info-circle"></i> No data .';
            
            }
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML=result_response_;

       } 
       
       push_html("ajax_snack", "");                                       

            //alert(res);
        window[fcall_back_function](res, fadditional_callbacks);

          }
      });
}


function mosy_validate_required(required_inp=null, show_dial='yes')
{
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+"</b><br>";
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, "False")=="False")
      {
      
       var required_state="1";
      
      }else{
      
        var required_state="0";
        if(show_dial=='yes')
        {

          magic_message(validate_msg, 'dialog_box');

        }
      }
  
  return required_state ;
}

function mosy_form_data(form_id,  save_action, callback_function_string, additional_callbacks, required_inp="",req_url="")
{

    if(req_url=="")
    {
     req_url=ajax_url;
    }
    
	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = additional_callbacks;
    
    if(callback_function_string.indexOf(":") >= 0)
    {
		var split_call_back = callback_function_string.split(":");
        
		var fcall_back_function = split_call_back[0];
        
        var fadditional_callbacks = split_call_back[1];
    
    }
    
    
	var formData = new FormData(document.getElementById(form_id));
  
    if (document.getElementById("ajax_spinner") !==null) {
        
    	document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... ';
        
    }
    
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
   ///alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
    {

	formData.append(save_action, "ok");
	formData.append('mosyrequest_type', "ajax");
        $.ajax({
            type: "POST",
            url: req_url,
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            success: function(data){
                  if (document.getElementById("ajax_spinner") !==null) {
        
                      document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-check-circle"></i> Request Processed Succesfully. <span class="badge badge-primary btn_neo"><i class="fa fa-thumbs-up"></i> OK </span>';

                  }
              ///alert(data);
        		window[fcall_back_function](data, fadditional_callbacks);
            },
	    complete: function(){
			//alert("Data uploaded successfully.");
	    },
	    error: function (jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	    } 
        });
      // Display the key/value pairs
      for (var pair of formData.entries()) {
          ///console.log(pair[0]+ ", " + pair[1]); 
      }
        	  
     }else{
        magic_message(validate_msg, 'dialog_box');
      }
      
      
}

function blackhole(data)
{

}

function show_password(input_name) 
{
  var x = document.getElementById(input_name);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function get_newval(elemid)
{
    if (document.getElementById(elemid) !==null) {

	  return document.getElementById(elemid).value;
    }else{
  
  return "";
  }
}

function mosy_response(server_resp, callbacks)
{

	alert("server_resp"+server_resp+" -- Callbacks "+callbacks);

}

function get_html(elemid)
{
    if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).innerHTML;
  }else{
  
  return "";
  }
}

function get_src(elemid)
{
  if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).src;
  }else{
  
  return "";
  }
}

function get_href(elemid)
{
  if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).href;
  }else{
  
  return "";
  }
}


function push_ddown(server_items, selelem)
{

	$('#'+selelem+' option:not(:first)').remove();

	document.getElementById(selelem).innerHTML=document.getElementById(selelem).innerHTML+server_items;

}
//========= formart to num =================

function tonum(req_number, decplc=0)
{

///alert(req_number);

n = parseFloat(req_number).toFixed(decplc)
var withCommas = Number(n).toLocaleString('en');


return withCommas;
}

//========= formart to num =================

function mosy_qstr(string, query_str)
{
    
   if(string.indexOf(query_str)==-1)
    {
      
      var q_str_state="False";
      
    }else{
    
	  var q_str_state="True";
     
	}
    
  return q_str_state;
    
}
function mosy_refresh(new_location)
{

var new_location_str=window.location.href;

  window.location=new_location_str.replace("table_alert", "tbl_alert_old");

}

function mosy_srefresh(server_resp, new_location)
{

  window.location=new_location;

}
////////////////// ===================  js action listener ================  

  var _js_msdn=document.querySelectorAll('js_msdn');
  
  _js_msdn.forEach(el => el.addEventListener('click', event => {
  
  var _mosy_jsmsdn_event_trgt= event.currentTarget;

  
	 _mosy_jsmsdn_jsaction="";
	 _mosy_jsmsdn_arg="";
     
  if (!_mosy_jsmsdn_event_trgt.hasAttribute("data-mosy_js")) 
  {
    // data attribute doesnt exist
  }else{
  
	 _mosy_jsmsdn_jsaction=_mosy_jsmsdn_event_trgt.getAttribute("data-mosy_js");
	 _mosy_jsmsdn_arg=_mosy_jsmsdn_event_trgt.getAttribute("data-_mosy_jsmsdn_arg");
     
  }

     window[_mosy_jsmsdn_jsaction](_mosy_jsmsdn_arg);

  
}));
  
  
  
////////////////// ==================  js action listener ================  



function pop_filter_tray (data_src, card_title, where_str_req,cols,returnfun)
{
  magic_screen(pop_data_filter_card, "alert_box");
        
  var where_str =" and "+(where_str_req);
  var where_str_inp =" and "+magic_clean_str(where_str_req);
  
  if(where_str_req=="")
  {
    var where_str="";
    var where_str_inp ="";
  }
  
  var load_data_set ="load_"+data_src;
  var gft_data_str="gft_"+data_src;
  ///alert(where_str);
  window[load_data_set]("", ajaxw+" "+window[gft_data_str]("")+where_str, cols, returnfun, "push_result:result","card");
  
  //alert(cols);
  var textbox ='<input type="text" class="form-control" onkeyup="'+load_data_set+'(this.value, \''+ajaxw+' \'+'+gft_data_str+'(this.value)+\''+where_str_inp+'\', \''+magic_clean_str(cols)+'\', \''+returnfun+'\', \'push_result:result\',\'card\')" placeholder="Type your search here"/>';
        
  document.getElementById('card_title').innerHTML=card_title;
  document.getElementById('dope_text').innerHTML=textbox;

        
}


function mosytoggle_elem(elemid, new_val)
{
  if(new_val=='')
  {
  if(document.getElementById(elemid).style.display!='none')
  {
    document.getElementById(elemid).style.display='none';
  }else{
    document.getElementById(elemid).style.display='block';
  }
  }else{
    document.getElementById(elemid).style.display=new_val;
  }
}

function tray_uptoken(datakey,callbacks)
{
  
  window.location=callbacks[0]+'?'+callbacks[1]+'_uptoken='+btoa(datakey[0]);
}

var pop_data_filter_card=`
    <h5><i class="fa fa-search mr-2"></i><span id="card_title"></span></h5>
	<hr>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  	<div id="dope_text" class="col-md-12"></div>
	<div id="result" class="col-md-12" style="max-height:300px; overflow-y:auto;" onclick="this.style.display='none'"></div>
    
  	<div id="r" class="col-md-12 row justify-content-center m-0 p-0 mt-3">
    	<a href="" class="badge border border_set p-2 rounded text-primary col-md-5 mr-lg-3" id="pop_tray_location"> 
        	View All <i class="fa fa-arrow-right"></i> 
        </a>
    	<a href="" class="badge border border_set p-2 rounded text-primary col-md-5" id="new_pop_tray_location"> 
        	<i class="fa fa-plus" id="newclass"></i> 
        	<span id="new_record_label"> Add new </span> 
        </a>
    </div>
  </div>`;
  
function push_link(new_link,anchor_el)
{

	//alert(new_link);
	document.getElementById(anchor_el).href=new_link;

}


function push_html(elemid, new_val="")
{
    if (document.getElementById(elemid) !==null) {

	  document.getElementById(elemid).innerHTML=(new_val);
      
      }
}

function nl_to_br(str)
{

	return str.replace(/(?:\r\n|\r|\n)/g, "<br>");

}

function br_to_nl(str)
{

	return str.replace(/(<br>)/g, "\n");

}

function push_newval(elemid, new_val="")
{
    if (document.getElementById(elemid) !==null) {

  		document.getElementById(elemid).value=(new_val);
  
  }
}

function push_src(elemid, new_val="")
{
	  if (document.getElementById(elemid) !==null) 
      {

	  		document.getElementById(elemid).src=new_val;
      
      }
}

function mosytoggle_class(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    document.getElementById(elemid).classList.remove(new_class);
  }else{
    document.getElementById(elemid).classList.add(new_class);
  }
  
}

function mosytoggle_addclass(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    //document.getElementById(elemid).classList.remove(new_class);
  }else{
    document.getElementById(elemid).classList.add(new_class);
  }
  
}

function mosytoggle_remclass(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    document.getElementById(elemid).classList.remove(new_class);
  }
  
}


function mosyhide_elem(elemid, new_class="")
{
    var curr_class="none";
    if(new_class!="")
    {
    curr_class=new_class;
    }
    	
   if (document.getElementById(elemid) !==null) 
   {
   	document.getElementById(elemid).style.display=curr_class;
   }
}

function mosyshow_elem(elemid, new_class="")
{
    var curr_class="block";
    if(new_class!="")
    {
    curr_class=new_class;
    }
   if (document.getElementById(elemid) !==null) 
   {
   	document.getElementById(elemid).style.display=curr_class;
   }
}

function mosy_get_param(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}




function mosy_push_data_class(class_name,data)
{    
	var elem_state ="false";
    ///alert(class_name);
    
    if (document.getElementsByClassName(class_name)[0] !==null) 
    {
      elem_state="true";

     var slides = document.getElementsByClassName(class_name);
     for (var i = 0; i < slides.length; i++) 
     {
	  var elemid = document.getElementsByClassName(class_name)[i].id;
      

	 console.log(elemid+" state "+ elem_state);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }else if(elem_type=='select')
      {
        ///alert("select found "+elemid+" vals"+get_html(elemid));
      var remove_dup_item=get_html(elemid).replace( "<option>"+data+"</option>","")
       push_html(elemid, "<option>"+data+"</option>"+remove_dup_item);
        

      }else if(elem_type=='img')
      {
        push_src(elemid, data);
      }else if(elem_type=='a')
      {
        push_link(elemid, data);
      }else{
      push_newval(elemid, data);
      push_html(elemid, data);
      }
  
  }
  
  console.log(elemid+" state "+ elem_state);
 }  
}

function mosy_push_data(elemid,data)
{
	var elem_state ="false";
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      

      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }else if(elem_type=='select')
      {
        ///alert("select found "+elemid+" vals"+get_html(elemid));
      var remove_dup_item=get_html(elemid).replace( "<option>"+data+"</option>","")
       push_html(elemid, "<option>"+data+"</option>"+remove_dup_item);
        

      }else if(elem_type=='img')
      {
        push_src(elemid, data);
      }else if(elem_type=='a')
      {
        push_link(elemid, data);
      }else{
      push_newval(elemid, data);
      push_html(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  
}

function check_elem(elemid)
{
    if (document.getElementById(elemid) ===null) 
    {
    alert("element_"+elemid+" Not available");
    }
}

function push_shtml(server_res, callback)
{
  
  magic_message(callback, "dialog_box");
  
}



function mosy_push_serv_resp(_server_resp, elemid_str)
{

///alert(_server_resp);

	var elem_state ="false";
    var elemid=elemid_str;
  
    var data = _server_resp;
              
    ////console.log(elemid+" state "+ elem_state+" serep "+_server_resp);

    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      push_html(elemid, data);      
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  return _server_resp;
}


function mosy_push_num_ddata(_server_resp, elemid_str)
{
	//alert(_server_resp);
    
	var elem_state ="false";
    var elemid=",,";    
    var json_decoded_str=JSON.parse(_server_resp)[0];
        
    var data_str=elemid_str;
    
    var data = json_decoded_str[data_str];

    if(elemid_str.indexOf("|") >= 0)
    {
		var elemid_arr = elemid_str.split("|");
        
		 elemid = (elemid_arr[0]);
        
          data_str = elemid_arr[1];
          
          console.log(elemid+" state "+ data_str+" serep "+_server_resp);

         data = tonum(json_decoded_str[data_str]);
        
    }
    
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
            
      push_html(elemid, data);
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  return json_decoded_str;
}

function mosy_push_ddata(_server_resp, elemid_str)
{

///alert(_server_resp);

	var elem_state ="false";
    var elemid=",,";    
    var json_decoded_str=JSON.parse(_server_resp)[0];
        
    var data_str=elemid_str;
    

    if(elemid_str.indexOf("|") >= 0)
    {
		var elemid_arr = elemid_str.split("|");
        
		 elemid = elemid_arr[0];
        
          data_str = elemid_arr[1];
          

         var data = json_decoded_str[data_str];
        
    }else{

		var data = json_decoded_str[data_str];

    }
              
    console.log(elemid+" state "+ data_str+" serep "+_server_resp);

    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      push_html(elemid, data);      
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  return json_decoded_str;
}

function dope_token(token_url="", token_key="")
{
window.history.replaceState(null, null, "?"+token_url+"="+token_key+"");
}

function mosyrename_elem(elemid, newname)
{
    if (document.getElementById(elemid) !==null) 
    {
      document.getElementById(elemid).id=newname;
      document.getElementById(newname).setAttribute("name",newname);
    }
}
///////////////  slide show 
function mosy_slide_wgt(image_arr_n_captions, img_style, img_class, extra_attr, slide_indicators_yes_no)
{
  
const rem_array = image_arr_n_captions.slice(0, 0).concat(image_arr_n_captions.slice(0+1, image_arr_n_captions.length));
  
var curr_slide_id =magic_random_str(10);
    
var img_string =  image_arr_n_captions[0];
var caption_str = ""
var caption_str_div="";
var datakey = "";
  
if(image_arr_n_captions[0].includes(":"))
{
 img_string =  image_arr_n_captions[0].substring(0, image_arr_n_captions[0].indexOf(':')); 
 datakey_1 = image_arr_n_captions[0].substring(image_arr_n_captions[0].indexOf(':')+1); 
 datakey = datakey_1.substring(0, datakey_1.indexOf(':'));
 datakey_2 = datakey_1.substring(datakey_1.indexOf(':')+1);
 caption_str = datakey_2.substring(datakey_2.indexOf(':'));
 caption_str_div=`<div class="col-md-12 text-center  pb-4"> ${caption_str} </div>`;
}
  ///alert("dkey1 -- "+datakey_2);
 var slide_node="";
 var slidecounter="";
 var i=0;
  
 if(slide_indicators_yes_no=='yes')
 {
   slidecounter=`<li data-target="#slide_s${curr_slide_id}" data-slide-to="0" class="active"></li>`;
 }
 for(img_arr of rem_array)
 {
   i++;
   
	if(slide_indicators_yes_no=='yes'){
 slidecounter+=`
        <li data-target="#slide_s${curr_slide_id}" data-slide-to="${i}" class="active"></li>
   `;  
    }
   
   var loop_img_string =  img_arr;
   var loop_caption_str = "";
   var loop_caption_str_div="";
   var loop_datakey="";
   
   if(img_arr.includes(":")){
 	loop_img_string =  img_arr.substring(0, img_arr.indexOf(':')); 
 	loop_datakey_1 = img_arr.substring(img_arr.indexOf(':')+1); 
 	loop_datakey = loop_datakey_1.substring(0, loop_datakey_1.indexOf(':'));
 	loop_datakey_2 = loop_datakey_1.substring(loop_datakey_1.indexOf(':')+1);
 	loop_caption_str = loop_datakey_2.substring(loop_datakey_2.indexOf(':'));
 	loop_caption_str_div=`<div class="col-md-12 text-center  pb-4"> ${loop_caption_str} </div>`;
   }
   
   slide_node+=`   
            <!-- carousel item -->
            <div class="carousel-item">
             <div class="row pt-3 justify-content-center">
     			${loop_caption_str_div}
               <div  class="col-md-12 pr-0 w-100">
               <img src="${loop_img_string}" style="${img_style}" class="${img_class}" ${extra_attr} data-idkey="${loop_datakey}"/>
               </div>
             </div>
           </div>
           <!-- carousel item -->`;
   
 }
  
var slide_tray=`
      <!--------------- Start carousel ---------->
      <div id="slide_s${curr_slide_id}" class="carousel slide w-100" data-ride="carousel" data-interval="2000">
        <ol class="carousel-indicators mt-2">
  		${slidecounter}
        </ol>
        <!-- carousel inner -->
          <div class="carousel-inner">
            <!-- carousel item -->
            <div class="carousel-item active">
             <div class="row pt-3 justify-content-center">
          	   ${caption_str_div}
               <div  class="col-md-12 pr-0 w-100">
               <img src="${img_string}" style="${img_style}" class="${img_class}" ${extra_attr} data-idkey="${datakey}"/>
               </div>
             </div>
           </div>
           <!-- carousel item -->
		   ${slide_node}
            <!-- carousel inner -->
            <a class="carousel-control-prev" href="#slide_s${curr_slide_id}" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#slide_s${curr_slide_id}" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a> 
          </div>
             
      </div>
      <!--------------- End carousel ---------->
        `;
  
return [slide_tray, curr_slide_id];  
}
///////////////  slide show 

//////////////  image alert 
function mosy_img_pop(img_src,img_style, img_class,  extra_attr, slide_show_yes_no)
{
  var img_tray=
    `
    <img src="${img_src}" style="${img_style}" class="${img_class}"/>
    
    `;
  
  if(slide_show_yes_no=='yes')
  {
    
    var pop_tray_carousel = mosy_slide_wgt(img_src, img_style, img_class, extra_attr)[0];
    
    magic_screen(pop_tray_carousel, 'alert_box');
    
  }else{
  	magic_screen(img_tray, 'alert_box');
  }
  
}  

//////////////  image alert \

function mosy_snack_wgt(content, curr_position, push_to, snack_pos, snackid, color, bg, onclick_fun)
{
              
var snack_cont=`
<style>
/* The snackbar - position it at the bottom and in the middle of the screen */
#${snackid} {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background:${bg}; /* Black background color */
  color: ${color}; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 9999; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  ${curr_position}: ${snack_pos}; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#${snackid}.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {${curr_position}: 0; opacity: 0;}
  to {${curr_position}: ${snack_pos}; opacity: 1;}
}

@keyframes fadein {
  from {${curr_position}: 0; opacity: 0;}
  to {${curr_position}: ${snack_pos}; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {${curr_position}: ${snack_pos}; opacity: 1;}
  to {${curr_position}: 0; opacity: 0;}
}

@keyframes fadeout {
  from {${curr_position}: ${snack_pos}; opacity: 1;}
  to {${curr_position}: 0; opacity: 0;}
}
</style>
  
  <div id="${snackid}" onclick="${onclick_fun};push_html('${push_to}', '')">${content}</div>

  `;


push_html(push_to, snack_cont);


} 

function new_location(new_location_str)
{
window.location=new_location_str;
}

function mosy_reload()
{
   document.location.reload()

} 

function glass_modal()
{
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("background-color", "transparent", "important");;
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("border-top", "0px solid", "important");;
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("border", "0px solid", "important");;
}

function mosy_card(card_title="", card_content, attach_To)
{
	var mosy_card_title="";
    if(card_title!="")
    {
    var mosy_card_title=`
                          <!-- Start  Title ribbon-->
                      <h5 class="col-md-12 row p-2 justify-content-center p-0 m-0 ">
                        <div class="col-md-2 bg-dark mb-3 mb-lg-0 mt-lg-3" style="height: 1px"></div>
                        <div class="col-md-8 text-center"><b> ${card_title}</b></div>
                        <div class="col-md-2 bg-dark mt-3" style="height: 1px"></div>
                      </h5>
                      <!-- End Title ribbon--> 
    `;
    }
    var link_pop=`
    <div class="row justify-content-center m-0 p-0 col-md-12">
						${mosy_card_title}
                      <div class="row justify-content-center m-0 p-0 col-md-12 mt-3 mb-3">
                        ${card_content}
                      </div>
      </div>
    </div>

    `;

    if(attach_To=='' || attach_To==undefined)
    {
    magic_screen(link_pop, 'alert_box');
    }else{
      push_html(attach_To, link_pop);
    }

    return link_pop;
 
}

  
function filter_by_date(card_title,filter_link,filter_col,and_query='',trailing_space="")
{

//alert(card_title+"-fl-"+filter_link+"- colstr -"+filter_col+"- and q -"+and_query+"- trsp  -"+trailing_space+"- inptype-"+input_type);
 var def_date = mosy_ymd();

var pop_filter_date=`
    <h5>Filter by <span id="filter_title"> ${card_title} </span></h5>
  <div class="row justify-content-center m-0 p-0 col-md-12">
	<div class="form-group col-md-6">
		<label >Start Date</label>
		<input class="form-control" id="txt_start_date" name="" value="${def_date}" placeholder="Your Name" type="date">
	</div>
  	<div class="form-group col-md-6">
		<label >End Date</label>
		<input class="form-control" id="txt_end_date"  name="" value="${def_date}" placeholder="Your Name" type="date">
	</div>
    <input type="hidden" id="txt_mosy_filter_q" value="${filter_col}" />
    <input type="hidden" id="txt_mosy_and_query" value="${and_query}" />
  <div class="col-md-7 cpointer btn_neoo2 btn-primary text-center" onclick=" go_to_date('${filter_link}', get_newval('txt_start_date'), get_newval('txt_end_date'), get_newval('txt_mosy_filter_q'), get_newval('txt_mosy_and_query'), '${trailing_space}', '')"><i class="fa fa-arrow-right"></i> Proceed </div>
  </div>
  `;
  
  mosy_card('', pop_filter_date);
  
  return pop_filter_date;
  
}

/////=========  mosy filter date 

  
function filter_by_datetime(card_title,filter_link,filter_col,and_query='',trailing_space="",def_inp_date_="")
{

/////alert(card_title+"-fl-"+filter_link+"- colstr -"+filter_col+"- and q -"+and_query+"- trsp  -"+trailing_space+"- def date -"+def_inp_date_);

var pop_filter_date=`
    <h5>Filter by <span id="filter_title"> ${card_title} </span></h5>
  <div class="row justify-content-center m-0 p-0 col-md-12">
	<div class="form-group col-md-6">
		<label >Start Date</label>
		<input class="form-control" id="txt_start_date" name="" value="${def_inp_date_}" placeholder="Your Name" type="datetime-local">
	</div>
  	<div class="form-group col-md-6">
		<label >End Date</label>
		<input class="form-control" id="txt_end_date"  name="" value="${def_inp_date_}" placeholder="Your Name" type="datetime-local">
	</div>
    <input type="hidden" id="txt_mosy_filter_q" value="${filter_col}" />
    <input type="hidden" id="txt_mosy_and_query" value="${and_query}" />
  <div class="col-md-7 cpointer btn_neoo2 btn-primary text-center" onclick=" go_to_date('${filter_link}', get_newval('txt_start_date'), get_newval('txt_end_date'), get_newval('txt_mosy_filter_q'), get_newval('txt_mosy_and_query'), '${trailing_space}', 'datetime')"><i class="fa fa-arrow-right"></i> Proceed </div>
  </div>
  `;
  
  mosy_card('', pop_filter_date);
  
  return pop_filter_date;
  
}
//==========================================

function go_to_date(filter_link, start_date, end_date, filter_col, and_query, trailing_space, input_type="date")
{
  
  if(input_type=="datetime")
  {
  var filter_location=filter_link+"="+btoa(trailing_space+""+filter_col+" >='" +start_date+"' AND "+filter_col+"<='" +end_date+ "' "+and_query+" ");  
  }else{
    var filter_location=filter_link+"="+btoa(trailing_space+"DATE_FORMAT("+filter_col+", '%Y-%m-%d') >='" +start_date+"' AND DATE_FORMAT("+filter_col+", '%Y-%m-%d') <='" +end_date+ "' "+and_query+" ")+"&mosy_start_date="+btoa(start_date)+"&mosy_end_date="+btoa(end_date);  

  }
  
  ///alert(filter_location);
  ///console.log(filter_location);
  window.location=filter_location;
  
}

function mosy_ymd(date='', time='') 
{

 if(date=="")
 {
  var today = new Date();
 }else{
  var today = date;
 }
 
 var curr_date = new Date().toISOString().slice(0, 10);
 
 var curr_time_date = curr_date+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
 if(time!="")
 {
  return curr_time_date;
 }else{
 return curr_date;
 }
}


function mosy_modal(modal_content, attach_To="alert_box", parent_id="")
{

  if(attach_To=="")
  {
  	attach_To="alert_box"
  }
  var mosy_modal_tray =`
  <div class="col-md-12 mosy_modal rounded_big p-0 m-0 bg-white shadow  border border_set ">
    <div class="col-md-12 pt-2 text-right"><span class="cpointer "  onclick="push_html('${attach_To}','')"><i class="fa fa-times-circle"></i></span></div>
    <div class="row justify-content-center m-0 p-0 col-md-12" id="${parent_id}">
    	${modal_content}
    </div>
  </div>`;

  ///alert(mosy_modal_tray);

  push_html(attach_To, mosy_modal_tray);

  return mosy_modal_tray;

}


  function mosy_print_elem(print_div,doc_title="", header_layout="",print_footer="") 
  {
  
  		var print_title=`
        <h3 class="col-md-12 p-3">${doc_title}</h3>
        `;
        //Get the HTML of div
        var divElements = header_layout+print_title+document.getElementById(print_div).innerHTML+print_footer;
        //Get the HTML of whole page
        var oldPage = document.body.innerHTML;
        //Reset the pages HTML with divs HTML only
        document.body.innerHTML = 
          `<html><head><title></title>
          <style>
            body{
            background-color:#fff!important;
            }
            .table thead th 
            {
              white-space: nowrap;
              padding: 1px;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
              font-size: 12px;
            }
            .table tbody td 
            {
              white-space: nowrap;
              padding: 1px;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
              font-size: 12px;
            }
            a{
            color:#000;
            }  
			.table_cell_dropdown:hover .table_cell_dropdown-content{display:none}
            tr:hover .table_cell_dropdown-content{display:none}              
           </style>
          </head>
         <body>` + 
          divElements + "</body>";
        //Print Page
        window.print();
        //Restore orignal HTML
        document.body.innerHTML = oldPage;
        mosy_reload();

    }


function mosy_decode_json(json_server_resp, arr_node)
{
  var decode_resp=JSON.parse(json_server_resp);
    
  if(arr_node.indexOf("|") >= 0)
  {
   
   		var elemid_arr = arr_node.split("|");
        
		var elemid = (elemid_arr[1]);
        
        var data_str = elemid_arr[0]; 
    
        mosy_push_data(elemid, decode_resp[data_str]);
        
        var ret_data = decode_resp[data_str];
  }else{
    
	var ret_data = decode_resp[arr_node];
    
  }
  
  return ret_data ;
  ////alert(decode_resp[arr_node]);
}


function mosy_push_sdata(_server_resp, elemid_str)
{

///alert(_server_resp);

	var elem_state ="false";
    var elemid=elemid_str;    

    var data= _server_resp;
  
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      push_html(elemid, data);      
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  ////return json_decoded_str;
}

function mosy_pop_window(market_location)
{
  window.open(atob(market_location), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1300,height=900");
    
}

function mosy_ajax_list(parent_id, label, qfunction, loop_id,height_class="max_height_70vh")
{
    var html_qloc= `
    <div class="row justify-content-center m-0 p-0 col-md-12 ">
    <input type="text" placeholder="${label}"  class="form-control mb-2" id="txt_q_${loop_id}" name="txt_q_${loop_id}" onkeyup="window['${qfunction}'](this.value)"/>
    </div>
    <div class="row justify-content-center m-0 p-0 col-md-12 ${height_class}" id="${loop_id}" style=""></div>`;
  
   mosy_card("", html_qloc,parent_id);
  
   window[qfunction]("")  
}



function mosy_countdown(push_to, count_to="17")
{
    var timeLeft = count_to;
  
    var timerId = setInterval(countdown, 1000);
    
    function countdown() 
    {
      if (timeLeft == -1) {
        
        clearTimeout(timerId);
        
      } else {
        push_html(push_to, timeLeft);
        timeLeft--;
      }
    }
  
  return timerId;

}


function mosy_delete_get_pram(param)
{
    // Get the URLSearchParams object from the current URL
  const urlParams = new URLSearchParams(window.location.search);

  // Check if the param parameter exists in the URL
  if (urlParams.has(param)) {
    // Delete the param parameter
    urlParams.delete(param);

    // Update the URL without the deleted parameter
    window.history.replaceState({}, "", `${location.pathname}?${urlParams}`);
  }
  
}

function mosy_update_get_param(param, newval)
{
  
      // Get the URLSearchParams object from the current URL
    const urlParams = new URLSearchParams(window.location.search);

    // Check if the "param" parameter exists in the URL
    if (urlParams.has(param)) {
      // Get the value of the param parameter
      const paramValue = urlParams.get(param);

      // Update the param parameter with a new value
      urlParams.set(param, newval);

      // Update the URL with the new parameter value
    } else {
      // Append the param parameter with a new value
      urlParams.append(param,newval);
    }

  window.history.replaceState({}, "", `${location.pathname}?${urlParams}`);

  
}


function mosy_required_form_inputs_required(form_id)
{
  var elements = document.getElementById(form_id).elements;
  var input_arr=[];
  
  for (var i = 0, element; element = elements[i++];) {

    if(element.hasAttribute('required'))
    {
      //do your stuff
      input_arr.push(element.id);
      
      console.log(" elent "+element.id)
    }
  }
  
 return mosy_validate_required(input_arr);

}


function mosy_required_form_inputs(elemid)
{
const divElement = document.getElementById(elemid);
const formElements = divElement.querySelectorAll("*");

var input_arr=[];

formElements.forEach((element) => {
  // Do something with each form element

    if(element.hasAttribute('required'))
    {
      //do your stuff
      input_arr.push(element.id);
      
      console.log(" elent "+element.id)
    }

});

 return mosy_validate_required(input_arr);

}
//<--ncgh-->
