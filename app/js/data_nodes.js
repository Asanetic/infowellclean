

var curl_url =primary_domain;
  
var mosy_limit = 100;

///account_urls data_nodes 
  var account_urls_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{url_name}}|{{url}}|{{description}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start account_urls search columns 
   
   var data_nodes_gft_account_urls_str="(primkey LIKE '%{{qaccount_urls}}%' OR  record_id LIKE '%{{qaccount_urls}}%' OR  url_name LIKE '%{{qaccount_urls}}%' OR  url LIKE '%{{qaccount_urls}}%' OR  description LIKE '%{{qaccount_urls}}%' OR  hive_site_id LIKE '%{{qaccount_urls}}%' OR  hive_site_name LIKE '%{{qaccount_urls}}%')";
    
    function  data_nodes_gft_account_urls(qaccount_urls_str)
    {
        	var data_nodes_clean_account_urls_filter_str=data_nodes_gft_account_urls_str.replace(/{{qaccount_urls}}/g, magic_clean_str(qaccount_urls_str));
            
            return  data_nodes_clean_account_urls_filter_str;

    }
       ///end account_urls search columns 

  function mosy_account_urls_ui_node (account_urls_json_data, account_urls_load_to, account_urls_cols_, account_urls_template_ui)
  {
     ////alert(account_urls_template_ui);
     var account_urls_cols_fun_cols_str ="";
     
     if(typeof account_urls_cols_fun_cols !== "undefined")
      {
        account_urls_cols_fun_cols_str=account_urls_cols_fun_cols;
        
        ///alert(account_urls_cols_fun_cols)
      } 
      
     var account_urls_ui__ = mosy_list_render_(account_urls_json_data, account_urls_cols_fun_cols_str+account_urls_cols_, account_urls_template_ui) 

     ////push_html(account_urls_load_to, account_urls_ui__)  

     push_grid_result(account_urls_ui__, account_urls_load_to)
  }
  
 
 ///////
 
 var account_urls_auto_function= '{"cbfun":"process_account_urls_json_data","_data_isle":"account_urls_data_isle","_pagination_isle":"account_urls_pagination_isle","_data_template":"account_urls_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_account_urls"}';

 
 
 ///============ auto renders 
 
 
function mosy_account_urls_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", account_urls_pagination_prefix_="__pgnt_account_urls", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("account_urls", btoa(qstr))
  }else{
    mosy_delete_get_pram("account_urls")
  }
  
  if(mosy_get_param("account_urls")!==undefined)
  {
    qstr=atob(mosy_get_param("account_urls"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:account_urls_page_no:"+mosy_limit;
  }
  
  ///account_urls_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_account_urls_json_data","_data_isle":"account_urls_data_isle","_pagination_isle":"account_urls_pagination_isle","_data_template":"account_urls_data_template","_payload_str":"req","_pagination_prefix":"'+account_urls_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_account_urls_(response_fun," where "+gft_account_urls(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, account_urls_pagination_prefix_)
  
}


  
  function autoprocess_account_urls_json_data(account_urls_server_resp)
  {  
    mosy_account_urls_ui_node(account_urls_server_resp, "account_urls_data_isle", account_urls_data_nodes, account_urls_data_template,"", "l:account_urls_page_no:15")
    mosy_paginate_api(account_urls_server_resp, "account_urls_page_no", "account_urls_pagination_isle", "15")
  }
  
  function process_account_urls_json_data(account_urls_server_resp, account_urls_callback="")
  {  
      var account_urls_data_isle="account_urls_data_isle";
      var account_urls_data_node_template=account_urls_data_template;
      var account_urls_pagination_isle="account_urls_pagination_isle";
      var account_urls_payload_str="";
      var account_urls__pagination_prefix_str="__pgnt_account_urls";
      
       ///alert(account_urls_callback)
       ///alert(account_urls_server_resp)
       ///console.log(account_urls_server_resp)
              
      try {
        
           const account_urls_jsonObject = JSON.parse(account_urls_callback);
        
           account_urls_data_isle=account_urls_jsonObject._data_isle;
           account_urls_data_node_template=window[account_urls_jsonObject._data_template];
           account_urls_pagination_isle=account_urls_jsonObject._pagination_isle;
           account_urls_payload_str=account_urls_jsonObject._payload_str;
           account_urls__pagination_prefix_str=account_urls_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+account_urls_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+account_urls_callback);
        
         if(account_urls_callback.indexOf(",") >= 0)
         {
              account_urls_data_handler_ui =account_urls_callback.split(",");                                 

              if(account_urls_data_handler_ui[0]!=undefined){ account_urls_data_isle=account_urls_data_handler_ui[0];}

              if(account_urls_data_handler_ui[1]!=undefined){account_urls_data_node_template =window[account_urls_data_handler_ui[1]];}

              if(account_urls_data_handler_ui[2]!=undefined){ account_urls_pagination_isle=account_urls_data_handler_ui[2]};

              if(account_urls_data_handler_ui[3]!=undefined){ account_urls_payload_str=btoa(account_urls_data_handler_ui[3])};
              
              if(account_urls_data_handler_ui[4]!=undefined){ account_urls__pagination_prefix_str=btoa(account_urls_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+account_urls_data_isle)
       
            mosy_account_urls_ui_node(account_urls_server_resp, account_urls_data_isle, account_urls_data_nodes, account_urls_data_node_template,"", "l:account_urls_page_no:"+mosy_limit)                       
            
             if(account_urls_payload_str==="req")
             {
                
                mosy_paginate_api(account_urls_server_resp, "account_urls_page_no", account_urls_pagination_isle, "process_account_urls_json_data", account_urls__pagination_prefix_str)

             }
           
  }
    

function mosyrender_account_urls_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_account_urls", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:account_urls_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _account_urls_payload="mosyget_&tbl=account_urls&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_account_urls_payload+curl_url)
  
  var _account_urls_pagination_json = '{"_payload":"'+_account_urls_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _account_urls_payload_input = document.createElement("input");
                _account_urls_payload_input.setAttribute('type', 'hidden');
                _account_urls_payload_input.setAttribute('name',_txt_payload);
                _account_urls_payload_input.setAttribute('id', _txt_payload);

                // Add the _account_urls_payload_input element to the DOM
                document.body.appendChild(_account_urls_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _account_urls_pagination_json)
  mosyajax_get(_account_urls_payload, response_fun, req_url);
  
  return _account_urls_payload;
  
}


function mginitialize_account_urls(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _account_urls_payload="mosyget_&tbl=account_urls&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_account_urls_payload, response_fun, req_url);


}

 

///affiliate_commissions data_nodes 
  var affiliate_commissions_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{affiliate}}|{{amount}}|{{date_earned}}|{{client}}|{{package}}|{{remark}}|{{approval_status}}';


   
   ///start affiliate_commissions search columns 
   
   var data_nodes_gft_affiliate_commissions_str="(primkey LIKE '%{{qaffiliate_commissions}}%' OR  record_id LIKE '%{{qaffiliate_commissions}}%' OR  affiliate LIKE '%{{qaffiliate_commissions}}%' OR  amount LIKE '%{{qaffiliate_commissions}}%' OR  date_earned LIKE '%{{qaffiliate_commissions}}%' OR  client LIKE '%{{qaffiliate_commissions}}%' OR  package LIKE '%{{qaffiliate_commissions}}%' OR  remark LIKE '%{{qaffiliate_commissions}}%' OR  approval_status LIKE '%{{qaffiliate_commissions}}%')";
    
    function  data_nodes_gft_affiliate_commissions(qaffiliate_commissions_str)
    {
        	var data_nodes_clean_affiliate_commissions_filter_str=data_nodes_gft_affiliate_commissions_str.replace(/{{qaffiliate_commissions}}/g, magic_clean_str(qaffiliate_commissions_str));
            
            return  data_nodes_clean_affiliate_commissions_filter_str;

    }
       ///end affiliate_commissions search columns 

  function mosy_affiliate_commissions_ui_node (affiliate_commissions_json_data, affiliate_commissions_load_to, affiliate_commissions_cols_, affiliate_commissions_template_ui)
  {
     ////alert(affiliate_commissions_template_ui);
     var affiliate_commissions_cols_fun_cols_str ="";
     
     if(typeof affiliate_commissions_cols_fun_cols !== "undefined")
      {
        affiliate_commissions_cols_fun_cols_str=affiliate_commissions_cols_fun_cols;
        
        ///alert(affiliate_commissions_cols_fun_cols)
      } 
      
     var affiliate_commissions_ui__ = mosy_list_render_(affiliate_commissions_json_data, affiliate_commissions_cols_fun_cols_str+affiliate_commissions_cols_, affiliate_commissions_template_ui) 

     ////push_html(affiliate_commissions_load_to, affiliate_commissions_ui__)  

     push_grid_result(affiliate_commissions_ui__, affiliate_commissions_load_to)
  }
  
 
 ///////
 
 var affiliate_commissions_auto_function= '{"cbfun":"process_affiliate_commissions_json_data","_data_isle":"affiliate_commissions_data_isle","_pagination_isle":"affiliate_commissions_pagination_isle","_data_template":"affiliate_commissions_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_affiliate_commissions"}';

 
 
 ///============ auto renders 
 
 
function mosy_affiliate_commissions_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", affiliate_commissions_pagination_prefix_="__pgnt_affiliate_commissions", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("affiliate_commissions", btoa(qstr))
  }else{
    mosy_delete_get_pram("affiliate_commissions")
  }
  
  if(mosy_get_param("affiliate_commissions")!==undefined)
  {
    qstr=atob(mosy_get_param("affiliate_commissions"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:affiliate_commissions_page_no:"+mosy_limit;
  }
  
  ///affiliate_commissions_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_affiliate_commissions_json_data","_data_isle":"affiliate_commissions_data_isle","_pagination_isle":"affiliate_commissions_pagination_isle","_data_template":"affiliate_commissions_data_template","_payload_str":"req","_pagination_prefix":"'+affiliate_commissions_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_affiliate_commissions_(response_fun," where "+gft_affiliate_commissions(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, affiliate_commissions_pagination_prefix_)
  
}


  
  function autoprocess_affiliate_commissions_json_data(affiliate_commissions_server_resp)
  {  
    mosy_affiliate_commissions_ui_node(affiliate_commissions_server_resp, "affiliate_commissions_data_isle", affiliate_commissions_data_nodes, affiliate_commissions_data_template,"", "l:affiliate_commissions_page_no:15")
    mosy_paginate_api(affiliate_commissions_server_resp, "affiliate_commissions_page_no", "affiliate_commissions_pagination_isle", "15")
  }
  
  function process_affiliate_commissions_json_data(affiliate_commissions_server_resp, affiliate_commissions_callback="")
  {  
      var affiliate_commissions_data_isle="affiliate_commissions_data_isle";
      var affiliate_commissions_data_node_template=affiliate_commissions_data_template;
      var affiliate_commissions_pagination_isle="affiliate_commissions_pagination_isle";
      var affiliate_commissions_payload_str="";
      var affiliate_commissions__pagination_prefix_str="__pgnt_affiliate_commissions";
      
       ///alert(affiliate_commissions_callback)
       ///alert(affiliate_commissions_server_resp)
       ///console.log(affiliate_commissions_server_resp)
              
      try {
        
           const affiliate_commissions_jsonObject = JSON.parse(affiliate_commissions_callback);
        
           affiliate_commissions_data_isle=affiliate_commissions_jsonObject._data_isle;
           affiliate_commissions_data_node_template=window[affiliate_commissions_jsonObject._data_template];
           affiliate_commissions_pagination_isle=affiliate_commissions_jsonObject._pagination_isle;
           affiliate_commissions_payload_str=affiliate_commissions_jsonObject._payload_str;
           affiliate_commissions__pagination_prefix_str=affiliate_commissions_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+affiliate_commissions_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+affiliate_commissions_callback);
        
         if(affiliate_commissions_callback.indexOf(",") >= 0)
         {
              affiliate_commissions_data_handler_ui =affiliate_commissions_callback.split(",");                                 

              if(affiliate_commissions_data_handler_ui[0]!=undefined){ affiliate_commissions_data_isle=affiliate_commissions_data_handler_ui[0];}

              if(affiliate_commissions_data_handler_ui[1]!=undefined){affiliate_commissions_data_node_template =window[affiliate_commissions_data_handler_ui[1]];}

              if(affiliate_commissions_data_handler_ui[2]!=undefined){ affiliate_commissions_pagination_isle=affiliate_commissions_data_handler_ui[2]};

              if(affiliate_commissions_data_handler_ui[3]!=undefined){ affiliate_commissions_payload_str=btoa(affiliate_commissions_data_handler_ui[3])};
              
              if(affiliate_commissions_data_handler_ui[4]!=undefined){ affiliate_commissions__pagination_prefix_str=btoa(affiliate_commissions_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+affiliate_commissions_data_isle)
       
            mosy_affiliate_commissions_ui_node(affiliate_commissions_server_resp, affiliate_commissions_data_isle, affiliate_commissions_data_nodes, affiliate_commissions_data_node_template,"", "l:affiliate_commissions_page_no:"+mosy_limit)                       
            
             if(affiliate_commissions_payload_str==="req")
             {
                
                mosy_paginate_api(affiliate_commissions_server_resp, "affiliate_commissions_page_no", affiliate_commissions_pagination_isle, "process_affiliate_commissions_json_data", affiliate_commissions__pagination_prefix_str)

             }
           
  }
    

function mosyrender_affiliate_commissions_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_affiliate_commissions", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:affiliate_commissions_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _affiliate_commissions_payload="mosyget_&tbl=affiliate_commissions&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_affiliate_commissions_payload+curl_url)
  
  var _affiliate_commissions_pagination_json = '{"_payload":"'+_affiliate_commissions_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _affiliate_commissions_payload_input = document.createElement("input");
                _affiliate_commissions_payload_input.setAttribute('type', 'hidden');
                _affiliate_commissions_payload_input.setAttribute('name',_txt_payload);
                _affiliate_commissions_payload_input.setAttribute('id', _txt_payload);

                // Add the _affiliate_commissions_payload_input element to the DOM
                document.body.appendChild(_affiliate_commissions_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _affiliate_commissions_pagination_json)
  mosyajax_get(_affiliate_commissions_payload, response_fun, req_url);
  
  return _affiliate_commissions_payload;
  
}


function mginitialize_affiliate_commissions(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _affiliate_commissions_payload="mosyget_&tbl=affiliate_commissions&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_affiliate_commissions_payload, response_fun, req_url);


}

 

///affiliates data_nodes 
  var affiliates_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{name}}|{{tel}}|{{email}}|{{code}}|{{password}}|{{photo}}|{{date_registered}}|{{category}}|{{remark}}';


   
   ///start affiliates search columns 
   
   var data_nodes_gft_affiliates_str="(primkey LIKE '%{{qaffiliates}}%' OR  record_id LIKE '%{{qaffiliates}}%' OR  name LIKE '%{{qaffiliates}}%' OR  tel LIKE '%{{qaffiliates}}%' OR  email LIKE '%{{qaffiliates}}%' OR  code LIKE '%{{qaffiliates}}%' OR  password LIKE '%{{qaffiliates}}%' OR  photo LIKE '%{{qaffiliates}}%' OR  date_registered LIKE '%{{qaffiliates}}%' OR  category LIKE '%{{qaffiliates}}%' OR  remark LIKE '%{{qaffiliates}}%')";
    
    function  data_nodes_gft_affiliates(qaffiliates_str)
    {
        	var data_nodes_clean_affiliates_filter_str=data_nodes_gft_affiliates_str.replace(/{{qaffiliates}}/g, magic_clean_str(qaffiliates_str));
            
            return  data_nodes_clean_affiliates_filter_str;

    }
       ///end affiliates search columns 

  function mosy_affiliates_ui_node (affiliates_json_data, affiliates_load_to, affiliates_cols_, affiliates_template_ui)
  {
     ////alert(affiliates_template_ui);
     var affiliates_cols_fun_cols_str ="";
     
     if(typeof affiliates_cols_fun_cols !== "undefined")
      {
        affiliates_cols_fun_cols_str=affiliates_cols_fun_cols;
        
        ///alert(affiliates_cols_fun_cols)
      } 
      
     var affiliates_ui__ = mosy_list_render_(affiliates_json_data, affiliates_cols_fun_cols_str+affiliates_cols_, affiliates_template_ui) 

     ////push_html(affiliates_load_to, affiliates_ui__)  

     push_grid_result(affiliates_ui__, affiliates_load_to)
  }
  
 
 ///////
 
 var affiliates_auto_function= '{"cbfun":"process_affiliates_json_data","_data_isle":"affiliates_data_isle","_pagination_isle":"affiliates_pagination_isle","_data_template":"affiliates_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_affiliates"}';

 
 
 ///============ auto renders 
 
 
function mosy_affiliates_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", affiliates_pagination_prefix_="__pgnt_affiliates", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("affiliates", btoa(qstr))
  }else{
    mosy_delete_get_pram("affiliates")
  }
  
  if(mosy_get_param("affiliates")!==undefined)
  {
    qstr=atob(mosy_get_param("affiliates"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:affiliates_page_no:"+mosy_limit;
  }
  
  ///affiliates_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_affiliates_json_data","_data_isle":"affiliates_data_isle","_pagination_isle":"affiliates_pagination_isle","_data_template":"affiliates_data_template","_payload_str":"req","_pagination_prefix":"'+affiliates_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_affiliates_(response_fun," where "+gft_affiliates(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, affiliates_pagination_prefix_)
  
}


  
  function autoprocess_affiliates_json_data(affiliates_server_resp)
  {  
    mosy_affiliates_ui_node(affiliates_server_resp, "affiliates_data_isle", affiliates_data_nodes, affiliates_data_template,"", "l:affiliates_page_no:15")
    mosy_paginate_api(affiliates_server_resp, "affiliates_page_no", "affiliates_pagination_isle", "15")
  }
  
  function process_affiliates_json_data(affiliates_server_resp, affiliates_callback="")
  {  
      var affiliates_data_isle="affiliates_data_isle";
      var affiliates_data_node_template=affiliates_data_template;
      var affiliates_pagination_isle="affiliates_pagination_isle";
      var affiliates_payload_str="";
      var affiliates__pagination_prefix_str="__pgnt_affiliates";
      
       ///alert(affiliates_callback)
       ///alert(affiliates_server_resp)
       ///console.log(affiliates_server_resp)
              
      try {
        
           const affiliates_jsonObject = JSON.parse(affiliates_callback);
        
           affiliates_data_isle=affiliates_jsonObject._data_isle;
           affiliates_data_node_template=window[affiliates_jsonObject._data_template];
           affiliates_pagination_isle=affiliates_jsonObject._pagination_isle;
           affiliates_payload_str=affiliates_jsonObject._payload_str;
           affiliates__pagination_prefix_str=affiliates_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+affiliates_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+affiliates_callback);
        
         if(affiliates_callback.indexOf(",") >= 0)
         {
              affiliates_data_handler_ui =affiliates_callback.split(",");                                 

              if(affiliates_data_handler_ui[0]!=undefined){ affiliates_data_isle=affiliates_data_handler_ui[0];}

              if(affiliates_data_handler_ui[1]!=undefined){affiliates_data_node_template =window[affiliates_data_handler_ui[1]];}

              if(affiliates_data_handler_ui[2]!=undefined){ affiliates_pagination_isle=affiliates_data_handler_ui[2]};

              if(affiliates_data_handler_ui[3]!=undefined){ affiliates_payload_str=btoa(affiliates_data_handler_ui[3])};
              
              if(affiliates_data_handler_ui[4]!=undefined){ affiliates__pagination_prefix_str=btoa(affiliates_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+affiliates_data_isle)
       
            mosy_affiliates_ui_node(affiliates_server_resp, affiliates_data_isle, affiliates_data_nodes, affiliates_data_node_template,"", "l:affiliates_page_no:"+mosy_limit)                       
            
             if(affiliates_payload_str==="req")
             {
                
                mosy_paginate_api(affiliates_server_resp, "affiliates_page_no", affiliates_pagination_isle, "process_affiliates_json_data", affiliates__pagination_prefix_str)

             }
           
  }
    

function mosyrender_affiliates_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_affiliates", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:affiliates_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _affiliates_payload="mosyget_&tbl=affiliates&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_affiliates_payload+curl_url)
  
  var _affiliates_pagination_json = '{"_payload":"'+_affiliates_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _affiliates_payload_input = document.createElement("input");
                _affiliates_payload_input.setAttribute('type', 'hidden');
                _affiliates_payload_input.setAttribute('name',_txt_payload);
                _affiliates_payload_input.setAttribute('id', _txt_payload);

                // Add the _affiliates_payload_input element to the DOM
                document.body.appendChild(_affiliates_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _affiliates_pagination_json)
  mosyajax_get(_affiliates_payload, response_fun, req_url);
  
  return _affiliates_payload;
  
}


function mginitialize_affiliates(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _affiliates_payload="mosyget_&tbl=affiliates&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_affiliates_payload, response_fun, req_url);


}

 

///client_list data_nodes 
  var client_list_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{client_name}}|{{tel}}|{{email}}|{{username}}|{{active_service}}|{{device_type}}|{{operating_system}}|{{device_key}}|{{macaddress}}|{{reffered_by}}|{{commission_amount}}|{{date_registered}}|{{package_amount}}|{{expiring_on}}|{{account_status}}|{{user_pic}}|{{city}}|{{town}}|{{client_group}}|{{trial_service_date}}|{{remark}}';


   
   ///start client_list search columns 
   
   var data_nodes_gft_client_list_str="(primkey LIKE '%{{qclient_list}}%' OR  record_id LIKE '%{{qclient_list}}%' OR  client_name LIKE '%{{qclient_list}}%' OR  tel LIKE '%{{qclient_list}}%' OR  email LIKE '%{{qclient_list}}%' OR  username LIKE '%{{qclient_list}}%' OR  active_service LIKE '%{{qclient_list}}%' OR  device_type LIKE '%{{qclient_list}}%' OR  operating_system LIKE '%{{qclient_list}}%' OR  device_key LIKE '%{{qclient_list}}%' OR  macaddress LIKE '%{{qclient_list}}%' OR  reffered_by LIKE '%{{qclient_list}}%' OR  commission_amount LIKE '%{{qclient_list}}%' OR  date_registered LIKE '%{{qclient_list}}%' OR  package_amount LIKE '%{{qclient_list}}%' OR  expiring_on LIKE '%{{qclient_list}}%' OR  account_status LIKE '%{{qclient_list}}%' OR  user_pic LIKE '%{{qclient_list}}%' OR  city LIKE '%{{qclient_list}}%' OR  town LIKE '%{{qclient_list}}%' OR  client_group LIKE '%{{qclient_list}}%' OR  trial_service_date LIKE '%{{qclient_list}}%' OR  remark LIKE '%{{qclient_list}}%')";
    
    function  data_nodes_gft_client_list(qclient_list_str)
    {
        	var data_nodes_clean_client_list_filter_str=data_nodes_gft_client_list_str.replace(/{{qclient_list}}/g, magic_clean_str(qclient_list_str));
            
            return  data_nodes_clean_client_list_filter_str;

    }
       ///end client_list search columns 

  function mosy_client_list_ui_node (client_list_json_data, client_list_load_to, client_list_cols_, client_list_template_ui)
  {
     ////alert(client_list_template_ui);
     var client_list_cols_fun_cols_str ="";
     
     if(typeof client_list_cols_fun_cols !== "undefined")
      {
        client_list_cols_fun_cols_str=client_list_cols_fun_cols;
        
        ///alert(client_list_cols_fun_cols)
      } 
      
     var client_list_ui__ = mosy_list_render_(client_list_json_data, client_list_cols_fun_cols_str+client_list_cols_, client_list_template_ui) 

     ////push_html(client_list_load_to, client_list_ui__)  

     push_grid_result(client_list_ui__, client_list_load_to)
  }
  
 
 ///////
 
 var client_list_auto_function= '{"cbfun":"process_client_list_json_data","_data_isle":"client_list_data_isle","_pagination_isle":"client_list_pagination_isle","_data_template":"client_list_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_client_list"}';

 
 
 ///============ auto renders 
 
 
function mosy_client_list_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", client_list_pagination_prefix_="__pgnt_client_list", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("client_list", btoa(qstr))
  }else{
    mosy_delete_get_pram("client_list")
  }
  
  if(mosy_get_param("client_list")!==undefined)
  {
    qstr=atob(mosy_get_param("client_list"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:client_list_page_no:"+mosy_limit;
  }
  
  ///client_list_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_client_list_json_data","_data_isle":"client_list_data_isle","_pagination_isle":"client_list_pagination_isle","_data_template":"client_list_data_template","_payload_str":"req","_pagination_prefix":"'+client_list_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_client_list_(response_fun," where "+gft_client_list(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, client_list_pagination_prefix_)
  
}


  
  function autoprocess_client_list_json_data(client_list_server_resp)
  {  
    mosy_client_list_ui_node(client_list_server_resp, "client_list_data_isle", client_list_data_nodes, client_list_data_template,"", "l:client_list_page_no:15")
    mosy_paginate_api(client_list_server_resp, "client_list_page_no", "client_list_pagination_isle", "15")
  }
  
  function process_client_list_json_data(client_list_server_resp, client_list_callback="")
  {  
      var client_list_data_isle="client_list_data_isle";
      var client_list_data_node_template=client_list_data_template;
      var client_list_pagination_isle="client_list_pagination_isle";
      var client_list_payload_str="";
      var client_list__pagination_prefix_str="__pgnt_client_list";
      
       ///alert(client_list_callback)
       ///alert(client_list_server_resp)
       ///console.log(client_list_server_resp)
              
      try {
        
           const client_list_jsonObject = JSON.parse(client_list_callback);
        
           client_list_data_isle=client_list_jsonObject._data_isle;
           client_list_data_node_template=window[client_list_jsonObject._data_template];
           client_list_pagination_isle=client_list_jsonObject._pagination_isle;
           client_list_payload_str=client_list_jsonObject._payload_str;
           client_list__pagination_prefix_str=client_list_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+client_list_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+client_list_callback);
        
         if(client_list_callback.indexOf(",") >= 0)
         {
              client_list_data_handler_ui =client_list_callback.split(",");                                 

              if(client_list_data_handler_ui[0]!=undefined){ client_list_data_isle=client_list_data_handler_ui[0];}

              if(client_list_data_handler_ui[1]!=undefined){client_list_data_node_template =window[client_list_data_handler_ui[1]];}

              if(client_list_data_handler_ui[2]!=undefined){ client_list_pagination_isle=client_list_data_handler_ui[2]};

              if(client_list_data_handler_ui[3]!=undefined){ client_list_payload_str=btoa(client_list_data_handler_ui[3])};
              
              if(client_list_data_handler_ui[4]!=undefined){ client_list__pagination_prefix_str=btoa(client_list_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+client_list_data_isle)
       
            mosy_client_list_ui_node(client_list_server_resp, client_list_data_isle, client_list_data_nodes, client_list_data_node_template,"", "l:client_list_page_no:"+mosy_limit)                       
            
             if(client_list_payload_str==="req")
             {
                
                mosy_paginate_api(client_list_server_resp, "client_list_page_no", client_list_pagination_isle, "process_client_list_json_data", client_list__pagination_prefix_str)

             }
           
  }
    

function mosyrender_client_list_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_client_list", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:client_list_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _client_list_payload="mosyget_&tbl=client_list&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_client_list_payload+curl_url)
  
  var _client_list_pagination_json = '{"_payload":"'+_client_list_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _client_list_payload_input = document.createElement("input");
                _client_list_payload_input.setAttribute('type', 'hidden');
                _client_list_payload_input.setAttribute('name',_txt_payload);
                _client_list_payload_input.setAttribute('id', _txt_payload);

                // Add the _client_list_payload_input element to the DOM
                document.body.appendChild(_client_list_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _client_list_pagination_json)
  mosyajax_get(_client_list_payload, response_fun, req_url);
  
  return _client_list_payload;
  
}


function mginitialize_client_list(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _client_list_payload="mosyget_&tbl=client_list&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_client_list_payload, response_fun, req_url);


}

 

///client_service_list data_nodes 
  var client_service_list_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{service_name}}|{{client_name}}|{{date_added}}|{{expiry_date}}|{{amount}}|{{status}}|{{remark}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start client_service_list search columns 
   
   var data_nodes_gft_client_service_list_str="(primkey LIKE '%{{qclient_service_list}}%' OR  record_id LIKE '%{{qclient_service_list}}%' OR  service_name LIKE '%{{qclient_service_list}}%' OR  client_name LIKE '%{{qclient_service_list}}%' OR  date_added LIKE '%{{qclient_service_list}}%' OR  expiry_date LIKE '%{{qclient_service_list}}%' OR  amount LIKE '%{{qclient_service_list}}%' OR  status LIKE '%{{qclient_service_list}}%' OR  remark LIKE '%{{qclient_service_list}}%' OR  hive_site_id LIKE '%{{qclient_service_list}}%' OR  hive_site_name LIKE '%{{qclient_service_list}}%')";
    
    function  data_nodes_gft_client_service_list(qclient_service_list_str)
    {
        	var data_nodes_clean_client_service_list_filter_str=data_nodes_gft_client_service_list_str.replace(/{{qclient_service_list}}/g, magic_clean_str(qclient_service_list_str));
            
            return  data_nodes_clean_client_service_list_filter_str;

    }
       ///end client_service_list search columns 

  function mosy_client_service_list_ui_node (client_service_list_json_data, client_service_list_load_to, client_service_list_cols_, client_service_list_template_ui)
  {
     ////alert(client_service_list_template_ui);
     var client_service_list_cols_fun_cols_str ="";
     
     if(typeof client_service_list_cols_fun_cols !== "undefined")
      {
        client_service_list_cols_fun_cols_str=client_service_list_cols_fun_cols;
        
        ///alert(client_service_list_cols_fun_cols)
      } 
      
     var client_service_list_ui__ = mosy_list_render_(client_service_list_json_data, client_service_list_cols_fun_cols_str+client_service_list_cols_, client_service_list_template_ui) 

     ////push_html(client_service_list_load_to, client_service_list_ui__)  

     push_grid_result(client_service_list_ui__, client_service_list_load_to)
  }
  
 
 ///////
 
 var client_service_list_auto_function= '{"cbfun":"process_client_service_list_json_data","_data_isle":"client_service_list_data_isle","_pagination_isle":"client_service_list_pagination_isle","_data_template":"client_service_list_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_client_service_list"}';

 
 
 ///============ auto renders 
 
 
function mosy_client_service_list_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", client_service_list_pagination_prefix_="__pgnt_client_service_list", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("client_service_list", btoa(qstr))
  }else{
    mosy_delete_get_pram("client_service_list")
  }
  
  if(mosy_get_param("client_service_list")!==undefined)
  {
    qstr=atob(mosy_get_param("client_service_list"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:client_service_list_page_no:"+mosy_limit;
  }
  
  ///client_service_list_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_client_service_list_json_data","_data_isle":"client_service_list_data_isle","_pagination_isle":"client_service_list_pagination_isle","_data_template":"client_service_list_data_template","_payload_str":"req","_pagination_prefix":"'+client_service_list_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_client_service_list_(response_fun," where "+gft_client_service_list(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, client_service_list_pagination_prefix_)
  
}


  
  function autoprocess_client_service_list_json_data(client_service_list_server_resp)
  {  
    mosy_client_service_list_ui_node(client_service_list_server_resp, "client_service_list_data_isle", client_service_list_data_nodes, client_service_list_data_template,"", "l:client_service_list_page_no:15")
    mosy_paginate_api(client_service_list_server_resp, "client_service_list_page_no", "client_service_list_pagination_isle", "15")
  }
  
  function process_client_service_list_json_data(client_service_list_server_resp, client_service_list_callback="")
  {  
      var client_service_list_data_isle="client_service_list_data_isle";
      var client_service_list_data_node_template=client_service_list_data_template;
      var client_service_list_pagination_isle="client_service_list_pagination_isle";
      var client_service_list_payload_str="";
      var client_service_list__pagination_prefix_str="__pgnt_client_service_list";
      
       ///alert(client_service_list_callback)
       ///alert(client_service_list_server_resp)
       ///console.log(client_service_list_server_resp)
              
      try {
        
           const client_service_list_jsonObject = JSON.parse(client_service_list_callback);
        
           client_service_list_data_isle=client_service_list_jsonObject._data_isle;
           client_service_list_data_node_template=window[client_service_list_jsonObject._data_template];
           client_service_list_pagination_isle=client_service_list_jsonObject._pagination_isle;
           client_service_list_payload_str=client_service_list_jsonObject._payload_str;
           client_service_list__pagination_prefix_str=client_service_list_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+client_service_list_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+client_service_list_callback);
        
         if(client_service_list_callback.indexOf(",") >= 0)
         {
              client_service_list_data_handler_ui =client_service_list_callback.split(",");                                 

              if(client_service_list_data_handler_ui[0]!=undefined){ client_service_list_data_isle=client_service_list_data_handler_ui[0];}

              if(client_service_list_data_handler_ui[1]!=undefined){client_service_list_data_node_template =window[client_service_list_data_handler_ui[1]];}

              if(client_service_list_data_handler_ui[2]!=undefined){ client_service_list_pagination_isle=client_service_list_data_handler_ui[2]};

              if(client_service_list_data_handler_ui[3]!=undefined){ client_service_list_payload_str=btoa(client_service_list_data_handler_ui[3])};
              
              if(client_service_list_data_handler_ui[4]!=undefined){ client_service_list__pagination_prefix_str=btoa(client_service_list_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+client_service_list_data_isle)
       
            mosy_client_service_list_ui_node(client_service_list_server_resp, client_service_list_data_isle, client_service_list_data_nodes, client_service_list_data_node_template,"", "l:client_service_list_page_no:"+mosy_limit)                       
            
             if(client_service_list_payload_str==="req")
             {
                
                mosy_paginate_api(client_service_list_server_resp, "client_service_list_page_no", client_service_list_pagination_isle, "process_client_service_list_json_data", client_service_list__pagination_prefix_str)

             }
           
  }
    

function mosyrender_client_service_list_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_client_service_list", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:client_service_list_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _client_service_list_payload="mosyget_&tbl=client_service_list&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_client_service_list_payload+curl_url)
  
  var _client_service_list_pagination_json = '{"_payload":"'+_client_service_list_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _client_service_list_payload_input = document.createElement("input");
                _client_service_list_payload_input.setAttribute('type', 'hidden');
                _client_service_list_payload_input.setAttribute('name',_txt_payload);
                _client_service_list_payload_input.setAttribute('id', _txt_payload);

                // Add the _client_service_list_payload_input element to the DOM
                document.body.appendChild(_client_service_list_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _client_service_list_pagination_json)
  mosyajax_get(_client_service_list_payload, response_fun, req_url);
  
  return _client_service_list_payload;
  
}


function mginitialize_client_service_list(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _client_service_list_payload="mosyget_&tbl=client_service_list&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_client_service_list_payload, response_fun, req_url);


}

 

///message_templates data_nodes 
  var message_templates_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{template_name}}|{{message_subject}}|{{message_template}}|{{template_code}}';


   
   ///start message_templates search columns 
   
   var data_nodes_gft_message_templates_str="(primkey LIKE '%{{qmessage_templates}}%' OR  record_id LIKE '%{{qmessage_templates}}%' OR  template_name LIKE '%{{qmessage_templates}}%' OR  message_subject LIKE '%{{qmessage_templates}}%' OR  message_template LIKE '%{{qmessage_templates}}%' OR  template_code LIKE '%{{qmessage_templates}}%')";
    
    function  data_nodes_gft_message_templates(qmessage_templates_str)
    {
        	var data_nodes_clean_message_templates_filter_str=data_nodes_gft_message_templates_str.replace(/{{qmessage_templates}}/g, magic_clean_str(qmessage_templates_str));
            
            return  data_nodes_clean_message_templates_filter_str;

    }
       ///end message_templates search columns 

  function mosy_message_templates_ui_node (message_templates_json_data, message_templates_load_to, message_templates_cols_, message_templates_template_ui)
  {
     ////alert(message_templates_template_ui);
     var message_templates_cols_fun_cols_str ="";
     
     if(typeof message_templates_cols_fun_cols !== "undefined")
      {
        message_templates_cols_fun_cols_str=message_templates_cols_fun_cols;
        
        ///alert(message_templates_cols_fun_cols)
      } 
      
     var message_templates_ui__ = mosy_list_render_(message_templates_json_data, message_templates_cols_fun_cols_str+message_templates_cols_, message_templates_template_ui) 

     ////push_html(message_templates_load_to, message_templates_ui__)  

     push_grid_result(message_templates_ui__, message_templates_load_to)
  }
  
 
 ///////
 
 var message_templates_auto_function= '{"cbfun":"process_message_templates_json_data","_data_isle":"message_templates_data_isle","_pagination_isle":"message_templates_pagination_isle","_data_template":"message_templates_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_message_templates"}';

 
 
 ///============ auto renders 
 
 
function mosy_message_templates_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", message_templates_pagination_prefix_="__pgnt_message_templates", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("message_templates", btoa(qstr))
  }else{
    mosy_delete_get_pram("message_templates")
  }
  
  if(mosy_get_param("message_templates")!==undefined)
  {
    qstr=atob(mosy_get_param("message_templates"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:message_templates_page_no:"+mosy_limit;
  }
  
  ///message_templates_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_message_templates_json_data","_data_isle":"message_templates_data_isle","_pagination_isle":"message_templates_pagination_isle","_data_template":"message_templates_data_template","_payload_str":"req","_pagination_prefix":"'+message_templates_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_message_templates_(response_fun," where "+gft_message_templates(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, message_templates_pagination_prefix_)
  
}


  
  function autoprocess_message_templates_json_data(message_templates_server_resp)
  {  
    mosy_message_templates_ui_node(message_templates_server_resp, "message_templates_data_isle", message_templates_data_nodes, message_templates_data_template,"", "l:message_templates_page_no:15")
    mosy_paginate_api(message_templates_server_resp, "message_templates_page_no", "message_templates_pagination_isle", "15")
  }
  
  function process_message_templates_json_data(message_templates_server_resp, message_templates_callback="")
  {  
      var message_templates_data_isle="message_templates_data_isle";
      var message_templates_data_node_template=message_templates_data_template;
      var message_templates_pagination_isle="message_templates_pagination_isle";
      var message_templates_payload_str="";
      var message_templates__pagination_prefix_str="__pgnt_message_templates";
      
       ///alert(message_templates_callback)
       ///alert(message_templates_server_resp)
       ///console.log(message_templates_server_resp)
              
      try {
        
           const message_templates_jsonObject = JSON.parse(message_templates_callback);
        
           message_templates_data_isle=message_templates_jsonObject._data_isle;
           message_templates_data_node_template=window[message_templates_jsonObject._data_template];
           message_templates_pagination_isle=message_templates_jsonObject._pagination_isle;
           message_templates_payload_str=message_templates_jsonObject._payload_str;
           message_templates__pagination_prefix_str=message_templates_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+message_templates_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+message_templates_callback);
        
         if(message_templates_callback.indexOf(",") >= 0)
         {
              message_templates_data_handler_ui =message_templates_callback.split(",");                                 

              if(message_templates_data_handler_ui[0]!=undefined){ message_templates_data_isle=message_templates_data_handler_ui[0];}

              if(message_templates_data_handler_ui[1]!=undefined){message_templates_data_node_template =window[message_templates_data_handler_ui[1]];}

              if(message_templates_data_handler_ui[2]!=undefined){ message_templates_pagination_isle=message_templates_data_handler_ui[2]};

              if(message_templates_data_handler_ui[3]!=undefined){ message_templates_payload_str=btoa(message_templates_data_handler_ui[3])};
              
              if(message_templates_data_handler_ui[4]!=undefined){ message_templates__pagination_prefix_str=btoa(message_templates_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+message_templates_data_isle)
       
            mosy_message_templates_ui_node(message_templates_server_resp, message_templates_data_isle, message_templates_data_nodes, message_templates_data_node_template,"", "l:message_templates_page_no:"+mosy_limit)                       
            
             if(message_templates_payload_str==="req")
             {
                
                mosy_paginate_api(message_templates_server_resp, "message_templates_page_no", message_templates_pagination_isle, "process_message_templates_json_data", message_templates__pagination_prefix_str)

             }
           
  }
    

function mosyrender_message_templates_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_message_templates", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:message_templates_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _message_templates_payload="mosyget_&tbl=message_templates&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_message_templates_payload+curl_url)
  
  var _message_templates_pagination_json = '{"_payload":"'+_message_templates_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _message_templates_payload_input = document.createElement("input");
                _message_templates_payload_input.setAttribute('type', 'hidden');
                _message_templates_payload_input.setAttribute('name',_txt_payload);
                _message_templates_payload_input.setAttribute('id', _txt_payload);

                // Add the _message_templates_payload_input element to the DOM
                document.body.appendChild(_message_templates_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _message_templates_pagination_json)
  mosyajax_get(_message_templates_payload, response_fun, req_url);
  
  return _message_templates_payload;
  
}


function mginitialize_message_templates(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _message_templates_payload="mosyget_&tbl=message_templates&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_message_templates_payload, response_fun, req_url);


}

 

///messaging data_nodes 
  var messaging_data_nodes ='{{row_count}}|{{primkey}}|{{messageid}}|{{receiver_contacts}}|{{reciver_names}}|{{message_type}}|{{site_id}}|{{group_name}}|{{message_date}}|{{sent_state}}|{{msg_read_state}}|{{subject}}|{{message_label}}|{{about}}|{{sms_cost}}|{{page_count}}|{{hive_site_id}}|{{hive_site_name}}|{{custom_dictionary}}|{{message_signature}}';


   
   ///start messaging search columns 
   
   var data_nodes_gft_messaging_str="(primkey LIKE '%{{qmessaging}}%' OR  messageid LIKE '%{{qmessaging}}%' OR  receiver_contacts LIKE '%{{qmessaging}}%' OR  reciver_names LIKE '%{{qmessaging}}%' OR  message_type LIKE '%{{qmessaging}}%' OR  site_id LIKE '%{{qmessaging}}%' OR  group_name LIKE '%{{qmessaging}}%' OR  message_date LIKE '%{{qmessaging}}%' OR  sent_state LIKE '%{{qmessaging}}%' OR  msg_read_state LIKE '%{{qmessaging}}%' OR  subject LIKE '%{{qmessaging}}%' OR  message_label LIKE '%{{qmessaging}}%' OR  about LIKE '%{{qmessaging}}%' OR  sms_cost LIKE '%{{qmessaging}}%' OR  page_count LIKE '%{{qmessaging}}%' OR  hive_site_id LIKE '%{{qmessaging}}%' OR  hive_site_name LIKE '%{{qmessaging}}%' OR  custom_dictionary LIKE '%{{qmessaging}}%' OR  message_signature LIKE '%{{qmessaging}}%')";
    
    function  data_nodes_gft_messaging(qmessaging_str)
    {
        	var data_nodes_clean_messaging_filter_str=data_nodes_gft_messaging_str.replace(/{{qmessaging}}/g, magic_clean_str(qmessaging_str));
            
            return  data_nodes_clean_messaging_filter_str;

    }
       ///end messaging search columns 

  function mosy_messaging_ui_node (messaging_json_data, messaging_load_to, messaging_cols_, messaging_template_ui)
  {
     ////alert(messaging_template_ui);
     var messaging_cols_fun_cols_str ="";
     
     if(typeof messaging_cols_fun_cols !== "undefined")
      {
        messaging_cols_fun_cols_str=messaging_cols_fun_cols;
        
        ///alert(messaging_cols_fun_cols)
      } 
      
     var messaging_ui__ = mosy_list_render_(messaging_json_data, messaging_cols_fun_cols_str+messaging_cols_, messaging_template_ui) 

     ////push_html(messaging_load_to, messaging_ui__)  

     push_grid_result(messaging_ui__, messaging_load_to)
  }
  
 
 ///////
 
 var messaging_auto_function= '{"cbfun":"process_messaging_json_data","_data_isle":"messaging_data_isle","_pagination_isle":"messaging_pagination_isle","_data_template":"messaging_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_messaging"}';

 
 
 ///============ auto renders 
 
 
function mosy_messaging_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", messaging_pagination_prefix_="__pgnt_messaging", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("messaging", btoa(qstr))
  }else{
    mosy_delete_get_pram("messaging")
  }
  
  if(mosy_get_param("messaging")!==undefined)
  {
    qstr=atob(mosy_get_param("messaging"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:messaging_page_no:"+mosy_limit;
  }
  
  ///messaging_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_messaging_json_data","_data_isle":"messaging_data_isle","_pagination_isle":"messaging_pagination_isle","_data_template":"messaging_data_template","_payload_str":"req","_pagination_prefix":"'+messaging_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_messaging_(response_fun," where "+gft_messaging(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, messaging_pagination_prefix_)
  
}


  
  function autoprocess_messaging_json_data(messaging_server_resp)
  {  
    mosy_messaging_ui_node(messaging_server_resp, "messaging_data_isle", messaging_data_nodes, messaging_data_template,"", "l:messaging_page_no:15")
    mosy_paginate_api(messaging_server_resp, "messaging_page_no", "messaging_pagination_isle", "15")
  }
  
  function process_messaging_json_data(messaging_server_resp, messaging_callback="")
  {  
      var messaging_data_isle="messaging_data_isle";
      var messaging_data_node_template=messaging_data_template;
      var messaging_pagination_isle="messaging_pagination_isle";
      var messaging_payload_str="";
      var messaging__pagination_prefix_str="__pgnt_messaging";
      
       ///alert(messaging_callback)
       ///alert(messaging_server_resp)
       ///console.log(messaging_server_resp)
              
      try {
        
           const messaging_jsonObject = JSON.parse(messaging_callback);
        
           messaging_data_isle=messaging_jsonObject._data_isle;
           messaging_data_node_template=window[messaging_jsonObject._data_template];
           messaging_pagination_isle=messaging_jsonObject._pagination_isle;
           messaging_payload_str=messaging_jsonObject._payload_str;
           messaging__pagination_prefix_str=messaging_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+messaging_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+messaging_callback);
        
         if(messaging_callback.indexOf(",") >= 0)
         {
              messaging_data_handler_ui =messaging_callback.split(",");                                 

              if(messaging_data_handler_ui[0]!=undefined){ messaging_data_isle=messaging_data_handler_ui[0];}

              if(messaging_data_handler_ui[1]!=undefined){messaging_data_node_template =window[messaging_data_handler_ui[1]];}

              if(messaging_data_handler_ui[2]!=undefined){ messaging_pagination_isle=messaging_data_handler_ui[2]};

              if(messaging_data_handler_ui[3]!=undefined){ messaging_payload_str=btoa(messaging_data_handler_ui[3])};
              
              if(messaging_data_handler_ui[4]!=undefined){ messaging__pagination_prefix_str=btoa(messaging_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+messaging_data_isle)
       
            mosy_messaging_ui_node(messaging_server_resp, messaging_data_isle, messaging_data_nodes, messaging_data_node_template,"", "l:messaging_page_no:"+mosy_limit)                       
            
             if(messaging_payload_str==="req")
             {
                
                mosy_paginate_api(messaging_server_resp, "messaging_page_no", messaging_pagination_isle, "process_messaging_json_data", messaging__pagination_prefix_str)

             }
           
  }
    

function mosyrender_messaging_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_messaging", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:messaging_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _messaging_payload="mosyget_&tbl=messaging&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_messaging_payload+curl_url)
  
  var _messaging_pagination_json = '{"_payload":"'+_messaging_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _messaging_payload_input = document.createElement("input");
                _messaging_payload_input.setAttribute('type', 'hidden');
                _messaging_payload_input.setAttribute('name',_txt_payload);
                _messaging_payload_input.setAttribute('id', _txt_payload);

                // Add the _messaging_payload_input element to the DOM
                document.body.appendChild(_messaging_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _messaging_pagination_json)
  mosyajax_get(_messaging_payload, response_fun, req_url);
  
  return _messaging_payload;
  
}


function mginitialize_messaging(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _messaging_payload="mosyget_&tbl=messaging&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_messaging_payload, response_fun, req_url);


}

 

///mosy_sql_roll_back data_nodes 
  var mosy_sql_roll_back_data_nodes ='{{row_count}}|{{primkey}}|{{roll_bk_key}}|{{table_name}}|{{roll_type}}|{{where_str}}|{{roll_timestamp}}|{{value_entries}}';


   
   ///start mosy_sql_roll_back search columns 
   
   var data_nodes_gft_mosy_sql_roll_back_str="(primkey LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_bk_key LIKE '%{{qmosy_sql_roll_back}}%' OR  table_name LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_type LIKE '%{{qmosy_sql_roll_back}}%' OR  where_str LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_timestamp LIKE '%{{qmosy_sql_roll_back}}%' OR  value_entries LIKE '%{{qmosy_sql_roll_back}}%')";
    
    function  data_nodes_gft_mosy_sql_roll_back(qmosy_sql_roll_back_str)
    {
        	var data_nodes_clean_mosy_sql_roll_back_filter_str=data_nodes_gft_mosy_sql_roll_back_str.replace(/{{qmosy_sql_roll_back}}/g, magic_clean_str(qmosy_sql_roll_back_str));
            
            return  data_nodes_clean_mosy_sql_roll_back_filter_str;

    }
       ///end mosy_sql_roll_back search columns 

  function mosy_mosy_sql_roll_back_ui_node (mosy_sql_roll_back_json_data, mosy_sql_roll_back_load_to, mosy_sql_roll_back_cols_, mosy_sql_roll_back_template_ui)
  {
     ////alert(mosy_sql_roll_back_template_ui);
     var mosy_sql_roll_back_cols_fun_cols_str ="";
     
     if(typeof mosy_sql_roll_back_cols_fun_cols !== "undefined")
      {
        mosy_sql_roll_back_cols_fun_cols_str=mosy_sql_roll_back_cols_fun_cols;
        
        ///alert(mosy_sql_roll_back_cols_fun_cols)
      } 
      
     var mosy_sql_roll_back_ui__ = mosy_list_render_(mosy_sql_roll_back_json_data, mosy_sql_roll_back_cols_fun_cols_str+mosy_sql_roll_back_cols_, mosy_sql_roll_back_template_ui) 

     ////push_html(mosy_sql_roll_back_load_to, mosy_sql_roll_back_ui__)  

     push_grid_result(mosy_sql_roll_back_ui__, mosy_sql_roll_back_load_to)
  }
  
 
 ///////
 
 var mosy_sql_roll_back_auto_function= '{"cbfun":"process_mosy_sql_roll_back_json_data","_data_isle":"mosy_sql_roll_back_data_isle","_pagination_isle":"mosy_sql_roll_back_pagination_isle","_data_template":"mosy_sql_roll_back_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_mosy_sql_roll_back"}';

 
 
 ///============ auto renders 
 
 
function mosy_mosy_sql_roll_back_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", mosy_sql_roll_back_pagination_prefix_="__pgnt_mosy_sql_roll_back", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("mosy_sql_roll_back", btoa(qstr))
  }else{
    mosy_delete_get_pram("mosy_sql_roll_back")
  }
  
  if(mosy_get_param("mosy_sql_roll_back")!==undefined)
  {
    qstr=atob(mosy_get_param("mosy_sql_roll_back"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:mosy_sql_roll_back_page_no:"+mosy_limit;
  }
  
  ///mosy_sql_roll_back_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_mosy_sql_roll_back_json_data","_data_isle":"mosy_sql_roll_back_data_isle","_pagination_isle":"mosy_sql_roll_back_pagination_isle","_data_template":"mosy_sql_roll_back_data_template","_payload_str":"req","_pagination_prefix":"'+mosy_sql_roll_back_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_mosy_sql_roll_back_(response_fun," where "+gft_mosy_sql_roll_back(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, mosy_sql_roll_back_pagination_prefix_)
  
}


  
  function autoprocess_mosy_sql_roll_back_json_data(mosy_sql_roll_back_server_resp)
  {  
    mosy_mosy_sql_roll_back_ui_node(mosy_sql_roll_back_server_resp, "mosy_sql_roll_back_data_isle", mosy_sql_roll_back_data_nodes, mosy_sql_roll_back_data_template,"", "l:mosy_sql_roll_back_page_no:15")
    mosy_paginate_api(mosy_sql_roll_back_server_resp, "mosy_sql_roll_back_page_no", "mosy_sql_roll_back_pagination_isle", "15")
  }
  
  function process_mosy_sql_roll_back_json_data(mosy_sql_roll_back_server_resp, mosy_sql_roll_back_callback="")
  {  
      var mosy_sql_roll_back_data_isle="mosy_sql_roll_back_data_isle";
      var mosy_sql_roll_back_data_node_template=mosy_sql_roll_back_data_template;
      var mosy_sql_roll_back_pagination_isle="mosy_sql_roll_back_pagination_isle";
      var mosy_sql_roll_back_payload_str="";
      var mosy_sql_roll_back__pagination_prefix_str="__pgnt_mosy_sql_roll_back";
      
       ///alert(mosy_sql_roll_back_callback)
       ///alert(mosy_sql_roll_back_server_resp)
       ///console.log(mosy_sql_roll_back_server_resp)
              
      try {
        
           const mosy_sql_roll_back_jsonObject = JSON.parse(mosy_sql_roll_back_callback);
        
           mosy_sql_roll_back_data_isle=mosy_sql_roll_back_jsonObject._data_isle;
           mosy_sql_roll_back_data_node_template=window[mosy_sql_roll_back_jsonObject._data_template];
           mosy_sql_roll_back_pagination_isle=mosy_sql_roll_back_jsonObject._pagination_isle;
           mosy_sql_roll_back_payload_str=mosy_sql_roll_back_jsonObject._payload_str;
           mosy_sql_roll_back__pagination_prefix_str=mosy_sql_roll_back_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+mosy_sql_roll_back_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+mosy_sql_roll_back_callback);
        
         if(mosy_sql_roll_back_callback.indexOf(",") >= 0)
         {
              mosy_sql_roll_back_data_handler_ui =mosy_sql_roll_back_callback.split(",");                                 

              if(mosy_sql_roll_back_data_handler_ui[0]!=undefined){ mosy_sql_roll_back_data_isle=mosy_sql_roll_back_data_handler_ui[0];}

              if(mosy_sql_roll_back_data_handler_ui[1]!=undefined){mosy_sql_roll_back_data_node_template =window[mosy_sql_roll_back_data_handler_ui[1]];}

              if(mosy_sql_roll_back_data_handler_ui[2]!=undefined){ mosy_sql_roll_back_pagination_isle=mosy_sql_roll_back_data_handler_ui[2]};

              if(mosy_sql_roll_back_data_handler_ui[3]!=undefined){ mosy_sql_roll_back_payload_str=btoa(mosy_sql_roll_back_data_handler_ui[3])};
              
              if(mosy_sql_roll_back_data_handler_ui[4]!=undefined){ mosy_sql_roll_back__pagination_prefix_str=btoa(mosy_sql_roll_back_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+mosy_sql_roll_back_data_isle)
       
            mosy_mosy_sql_roll_back_ui_node(mosy_sql_roll_back_server_resp, mosy_sql_roll_back_data_isle, mosy_sql_roll_back_data_nodes, mosy_sql_roll_back_data_node_template,"", "l:mosy_sql_roll_back_page_no:"+mosy_limit)                       
            
             if(mosy_sql_roll_back_payload_str==="req")
             {
                
                mosy_paginate_api(mosy_sql_roll_back_server_resp, "mosy_sql_roll_back_page_no", mosy_sql_roll_back_pagination_isle, "process_mosy_sql_roll_back_json_data", mosy_sql_roll_back__pagination_prefix_str)

             }
           
  }
    

function mosyrender_mosy_sql_roll_back_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_mosy_sql_roll_back", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:mosy_sql_roll_back_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _mosy_sql_roll_back_payload="mosyget_&tbl=mosy_sql_roll_back&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_mosy_sql_roll_back_payload+curl_url)
  
  var _mosy_sql_roll_back_pagination_json = '{"_payload":"'+_mosy_sql_roll_back_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _mosy_sql_roll_back_payload_input = document.createElement("input");
                _mosy_sql_roll_back_payload_input.setAttribute('type', 'hidden');
                _mosy_sql_roll_back_payload_input.setAttribute('name',_txt_payload);
                _mosy_sql_roll_back_payload_input.setAttribute('id', _txt_payload);

                // Add the _mosy_sql_roll_back_payload_input element to the DOM
                document.body.appendChild(_mosy_sql_roll_back_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _mosy_sql_roll_back_pagination_json)
  mosyajax_get(_mosy_sql_roll_back_payload, response_fun, req_url);
  
  return _mosy_sql_roll_back_payload;
  
}


function mginitialize_mosy_sql_roll_back(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _mosy_sql_roll_back_payload="mosyget_&tbl=mosy_sql_roll_back&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_mosy_sql_roll_back_payload, response_fun, req_url);


}

 

///mosycomms_array data_nodes 
  var mosycomms_array_data_nodes ='{{row_count}}|{{primkey}}|{{messageid}}|{{receiver_contacts}}|{{reciver_names}}|{{message_type}}|{{site_id}}|{{group_name}}|{{message_date}}|{{sent_state}}|{{msg_read_state}}|{{subject}}|{{message_label}}|{{message}}|{{delvery_receipt}}|{{mosycomms_dictionary}}|{{sms_cost}}|{{page_count}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start mosycomms_array search columns 
   
   var data_nodes_gft_mosycomms_array_str="(primkey LIKE '%{{qmosycomms_array}}%' OR  messageid LIKE '%{{qmosycomms_array}}%' OR  receiver_contacts LIKE '%{{qmosycomms_array}}%' OR  reciver_names LIKE '%{{qmosycomms_array}}%' OR  message_type LIKE '%{{qmosycomms_array}}%' OR  site_id LIKE '%{{qmosycomms_array}}%' OR  group_name LIKE '%{{qmosycomms_array}}%' OR  message_date LIKE '%{{qmosycomms_array}}%' OR  sent_state LIKE '%{{qmosycomms_array}}%' OR  msg_read_state LIKE '%{{qmosycomms_array}}%' OR  subject LIKE '%{{qmosycomms_array}}%' OR  message_label LIKE '%{{qmosycomms_array}}%' OR  message LIKE '%{{qmosycomms_array}}%' OR  delvery_receipt LIKE '%{{qmosycomms_array}}%' OR  mosycomms_dictionary LIKE '%{{qmosycomms_array}}%' OR  sms_cost LIKE '%{{qmosycomms_array}}%' OR  page_count LIKE '%{{qmosycomms_array}}%' OR  hive_site_id LIKE '%{{qmosycomms_array}}%' OR  hive_site_name LIKE '%{{qmosycomms_array}}%')";
    
    function  data_nodes_gft_mosycomms_array(qmosycomms_array_str)
    {
        	var data_nodes_clean_mosycomms_array_filter_str=data_nodes_gft_mosycomms_array_str.replace(/{{qmosycomms_array}}/g, magic_clean_str(qmosycomms_array_str));
            
            return  data_nodes_clean_mosycomms_array_filter_str;

    }
       ///end mosycomms_array search columns 

  function mosy_mosycomms_array_ui_node (mosycomms_array_json_data, mosycomms_array_load_to, mosycomms_array_cols_, mosycomms_array_template_ui)
  {
     ////alert(mosycomms_array_template_ui);
     var mosycomms_array_cols_fun_cols_str ="";
     
     if(typeof mosycomms_array_cols_fun_cols !== "undefined")
      {
        mosycomms_array_cols_fun_cols_str=mosycomms_array_cols_fun_cols;
        
        ///alert(mosycomms_array_cols_fun_cols)
      } 
      
     var mosycomms_array_ui__ = mosy_list_render_(mosycomms_array_json_data, mosycomms_array_cols_fun_cols_str+mosycomms_array_cols_, mosycomms_array_template_ui) 

     ////push_html(mosycomms_array_load_to, mosycomms_array_ui__)  

     push_grid_result(mosycomms_array_ui__, mosycomms_array_load_to)
  }
  
 
 ///////
 
 var mosycomms_array_auto_function= '{"cbfun":"process_mosycomms_array_json_data","_data_isle":"mosycomms_array_data_isle","_pagination_isle":"mosycomms_array_pagination_isle","_data_template":"mosycomms_array_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_mosycomms_array"}';

 
 
 ///============ auto renders 
 
 
function mosy_mosycomms_array_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", mosycomms_array_pagination_prefix_="__pgnt_mosycomms_array", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("mosycomms_array", btoa(qstr))
  }else{
    mosy_delete_get_pram("mosycomms_array")
  }
  
  if(mosy_get_param("mosycomms_array")!==undefined)
  {
    qstr=atob(mosy_get_param("mosycomms_array"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:mosycomms_array_page_no:"+mosy_limit;
  }
  
  ///mosycomms_array_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_mosycomms_array_json_data","_data_isle":"mosycomms_array_data_isle","_pagination_isle":"mosycomms_array_pagination_isle","_data_template":"mosycomms_array_data_template","_payload_str":"req","_pagination_prefix":"'+mosycomms_array_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_mosycomms_array_(response_fun," where "+gft_mosycomms_array(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, mosycomms_array_pagination_prefix_)
  
}


  
  function autoprocess_mosycomms_array_json_data(mosycomms_array_server_resp)
  {  
    mosy_mosycomms_array_ui_node(mosycomms_array_server_resp, "mosycomms_array_data_isle", mosycomms_array_data_nodes, mosycomms_array_data_template,"", "l:mosycomms_array_page_no:15")
    mosy_paginate_api(mosycomms_array_server_resp, "mosycomms_array_page_no", "mosycomms_array_pagination_isle", "15")
  }
  
  function process_mosycomms_array_json_data(mosycomms_array_server_resp, mosycomms_array_callback="")
  {  
      var mosycomms_array_data_isle="mosycomms_array_data_isle";
      var mosycomms_array_data_node_template=mosycomms_array_data_template;
      var mosycomms_array_pagination_isle="mosycomms_array_pagination_isle";
      var mosycomms_array_payload_str="";
      var mosycomms_array__pagination_prefix_str="__pgnt_mosycomms_array";
      
       ///alert(mosycomms_array_callback)
       ///alert(mosycomms_array_server_resp)
       ///console.log(mosycomms_array_server_resp)
              
      try {
        
           const mosycomms_array_jsonObject = JSON.parse(mosycomms_array_callback);
        
           mosycomms_array_data_isle=mosycomms_array_jsonObject._data_isle;
           mosycomms_array_data_node_template=window[mosycomms_array_jsonObject._data_template];
           mosycomms_array_pagination_isle=mosycomms_array_jsonObject._pagination_isle;
           mosycomms_array_payload_str=mosycomms_array_jsonObject._payload_str;
           mosycomms_array__pagination_prefix_str=mosycomms_array_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+mosycomms_array_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+mosycomms_array_callback);
        
         if(mosycomms_array_callback.indexOf(",") >= 0)
         {
              mosycomms_array_data_handler_ui =mosycomms_array_callback.split(",");                                 

              if(mosycomms_array_data_handler_ui[0]!=undefined){ mosycomms_array_data_isle=mosycomms_array_data_handler_ui[0];}

              if(mosycomms_array_data_handler_ui[1]!=undefined){mosycomms_array_data_node_template =window[mosycomms_array_data_handler_ui[1]];}

              if(mosycomms_array_data_handler_ui[2]!=undefined){ mosycomms_array_pagination_isle=mosycomms_array_data_handler_ui[2]};

              if(mosycomms_array_data_handler_ui[3]!=undefined){ mosycomms_array_payload_str=btoa(mosycomms_array_data_handler_ui[3])};
              
              if(mosycomms_array_data_handler_ui[4]!=undefined){ mosycomms_array__pagination_prefix_str=btoa(mosycomms_array_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+mosycomms_array_data_isle)
       
            mosy_mosycomms_array_ui_node(mosycomms_array_server_resp, mosycomms_array_data_isle, mosycomms_array_data_nodes, mosycomms_array_data_node_template,"", "l:mosycomms_array_page_no:"+mosy_limit)                       
            
             if(mosycomms_array_payload_str==="req")
             {
                
                mosy_paginate_api(mosycomms_array_server_resp, "mosycomms_array_page_no", mosycomms_array_pagination_isle, "process_mosycomms_array_json_data", mosycomms_array__pagination_prefix_str)

             }
           
  }
    

function mosyrender_mosycomms_array_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_mosycomms_array", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:mosycomms_array_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _mosycomms_array_payload="mosyget_&tbl=mosycomms_array&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_mosycomms_array_payload+curl_url)
  
  var _mosycomms_array_pagination_json = '{"_payload":"'+_mosycomms_array_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _mosycomms_array_payload_input = document.createElement("input");
                _mosycomms_array_payload_input.setAttribute('type', 'hidden');
                _mosycomms_array_payload_input.setAttribute('name',_txt_payload);
                _mosycomms_array_payload_input.setAttribute('id', _txt_payload);

                // Add the _mosycomms_array_payload_input element to the DOM
                document.body.appendChild(_mosycomms_array_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _mosycomms_array_pagination_json)
  mosyajax_get(_mosycomms_array_payload, response_fun, req_url);
  
  return _mosycomms_array_payload;
  
}


function mginitialize_mosycomms_array(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _mosycomms_array_payload="mosyget_&tbl=mosycomms_array&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_mosycomms_array_payload, response_fun, req_url);


}

 

///mosycomms_settings data_nodes 
  var mosycomms_settings_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{company_name}}|{{company_email}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start mosycomms_settings search columns 
   
   var data_nodes_gft_mosycomms_settings_str="(primkey LIKE '%{{qmosycomms_settings}}%' OR  record_id LIKE '%{{qmosycomms_settings}}%' OR  company_name LIKE '%{{qmosycomms_settings}}%' OR  company_email LIKE '%{{qmosycomms_settings}}%' OR  hive_site_id LIKE '%{{qmosycomms_settings}}%' OR  hive_site_name LIKE '%{{qmosycomms_settings}}%')";
    
    function  data_nodes_gft_mosycomms_settings(qmosycomms_settings_str)
    {
        	var data_nodes_clean_mosycomms_settings_filter_str=data_nodes_gft_mosycomms_settings_str.replace(/{{qmosycomms_settings}}/g, magic_clean_str(qmosycomms_settings_str));
            
            return  data_nodes_clean_mosycomms_settings_filter_str;

    }
       ///end mosycomms_settings search columns 

  function mosy_mosycomms_settings_ui_node (mosycomms_settings_json_data, mosycomms_settings_load_to, mosycomms_settings_cols_, mosycomms_settings_template_ui)
  {
     ////alert(mosycomms_settings_template_ui);
     var mosycomms_settings_cols_fun_cols_str ="";
     
     if(typeof mosycomms_settings_cols_fun_cols !== "undefined")
      {
        mosycomms_settings_cols_fun_cols_str=mosycomms_settings_cols_fun_cols;
        
        ///alert(mosycomms_settings_cols_fun_cols)
      } 
      
     var mosycomms_settings_ui__ = mosy_list_render_(mosycomms_settings_json_data, mosycomms_settings_cols_fun_cols_str+mosycomms_settings_cols_, mosycomms_settings_template_ui) 

     ////push_html(mosycomms_settings_load_to, mosycomms_settings_ui__)  

     push_grid_result(mosycomms_settings_ui__, mosycomms_settings_load_to)
  }
  
 
 ///////
 
 var mosycomms_settings_auto_function= '{"cbfun":"process_mosycomms_settings_json_data","_data_isle":"mosycomms_settings_data_isle","_pagination_isle":"mosycomms_settings_pagination_isle","_data_template":"mosycomms_settings_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_mosycomms_settings"}';

 
 
 ///============ auto renders 
 
 
function mosy_mosycomms_settings_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", mosycomms_settings_pagination_prefix_="__pgnt_mosycomms_settings", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("mosycomms_settings", btoa(qstr))
  }else{
    mosy_delete_get_pram("mosycomms_settings")
  }
  
  if(mosy_get_param("mosycomms_settings")!==undefined)
  {
    qstr=atob(mosy_get_param("mosycomms_settings"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:mosycomms_settings_page_no:"+mosy_limit;
  }
  
  ///mosycomms_settings_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_mosycomms_settings_json_data","_data_isle":"mosycomms_settings_data_isle","_pagination_isle":"mosycomms_settings_pagination_isle","_data_template":"mosycomms_settings_data_template","_payload_str":"req","_pagination_prefix":"'+mosycomms_settings_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_mosycomms_settings_(response_fun," where "+gft_mosycomms_settings(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, mosycomms_settings_pagination_prefix_)
  
}


  
  function autoprocess_mosycomms_settings_json_data(mosycomms_settings_server_resp)
  {  
    mosy_mosycomms_settings_ui_node(mosycomms_settings_server_resp, "mosycomms_settings_data_isle", mosycomms_settings_data_nodes, mosycomms_settings_data_template,"", "l:mosycomms_settings_page_no:15")
    mosy_paginate_api(mosycomms_settings_server_resp, "mosycomms_settings_page_no", "mosycomms_settings_pagination_isle", "15")
  }
  
  function process_mosycomms_settings_json_data(mosycomms_settings_server_resp, mosycomms_settings_callback="")
  {  
      var mosycomms_settings_data_isle="mosycomms_settings_data_isle";
      var mosycomms_settings_data_node_template=mosycomms_settings_data_template;
      var mosycomms_settings_pagination_isle="mosycomms_settings_pagination_isle";
      var mosycomms_settings_payload_str="";
      var mosycomms_settings__pagination_prefix_str="__pgnt_mosycomms_settings";
      
       ///alert(mosycomms_settings_callback)
       ///alert(mosycomms_settings_server_resp)
       ///console.log(mosycomms_settings_server_resp)
              
      try {
        
           const mosycomms_settings_jsonObject = JSON.parse(mosycomms_settings_callback);
        
           mosycomms_settings_data_isle=mosycomms_settings_jsonObject._data_isle;
           mosycomms_settings_data_node_template=window[mosycomms_settings_jsonObject._data_template];
           mosycomms_settings_pagination_isle=mosycomms_settings_jsonObject._pagination_isle;
           mosycomms_settings_payload_str=mosycomms_settings_jsonObject._payload_str;
           mosycomms_settings__pagination_prefix_str=mosycomms_settings_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+mosycomms_settings_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+mosycomms_settings_callback);
        
         if(mosycomms_settings_callback.indexOf(",") >= 0)
         {
              mosycomms_settings_data_handler_ui =mosycomms_settings_callback.split(",");                                 

              if(mosycomms_settings_data_handler_ui[0]!=undefined){ mosycomms_settings_data_isle=mosycomms_settings_data_handler_ui[0];}

              if(mosycomms_settings_data_handler_ui[1]!=undefined){mosycomms_settings_data_node_template =window[mosycomms_settings_data_handler_ui[1]];}

              if(mosycomms_settings_data_handler_ui[2]!=undefined){ mosycomms_settings_pagination_isle=mosycomms_settings_data_handler_ui[2]};

              if(mosycomms_settings_data_handler_ui[3]!=undefined){ mosycomms_settings_payload_str=btoa(mosycomms_settings_data_handler_ui[3])};
              
              if(mosycomms_settings_data_handler_ui[4]!=undefined){ mosycomms_settings__pagination_prefix_str=btoa(mosycomms_settings_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+mosycomms_settings_data_isle)
       
            mosy_mosycomms_settings_ui_node(mosycomms_settings_server_resp, mosycomms_settings_data_isle, mosycomms_settings_data_nodes, mosycomms_settings_data_node_template,"", "l:mosycomms_settings_page_no:"+mosy_limit)                       
            
             if(mosycomms_settings_payload_str==="req")
             {
                
                mosy_paginate_api(mosycomms_settings_server_resp, "mosycomms_settings_page_no", mosycomms_settings_pagination_isle, "process_mosycomms_settings_json_data", mosycomms_settings__pagination_prefix_str)

             }
           
  }
    

function mosyrender_mosycomms_settings_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_mosycomms_settings", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:mosycomms_settings_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _mosycomms_settings_payload="mosyget_&tbl=mosycomms_settings&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_mosycomms_settings_payload+curl_url)
  
  var _mosycomms_settings_pagination_json = '{"_payload":"'+_mosycomms_settings_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _mosycomms_settings_payload_input = document.createElement("input");
                _mosycomms_settings_payload_input.setAttribute('type', 'hidden');
                _mosycomms_settings_payload_input.setAttribute('name',_txt_payload);
                _mosycomms_settings_payload_input.setAttribute('id', _txt_payload);

                // Add the _mosycomms_settings_payload_input element to the DOM
                document.body.appendChild(_mosycomms_settings_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _mosycomms_settings_pagination_json)
  mosyajax_get(_mosycomms_settings_payload, response_fun, req_url);
  
  return _mosycomms_settings_payload;
  
}


function mginitialize_mosycomms_settings(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _mosycomms_settings_payload="mosyget_&tbl=mosycomms_settings&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_mosycomms_settings_payload, response_fun, req_url);


}

 

///page_manifest_ data_nodes 
  var page_manifest__data_nodes ='{{row_count}}|{{primkey}}|{{manikey}}|{{page_group}}|{{site_id}}|{{page_url}}|{{hive_site_id}}|{{hive_site_name}}|{{project_id}}|{{project_name}}';


   
   ///start page_manifest_ search columns 
   
   var data_nodes_gft_page_manifest__str="(primkey LIKE '%{{qpage_manifest_}}%' OR  manikey LIKE '%{{qpage_manifest_}}%' OR  page_group LIKE '%{{qpage_manifest_}}%' OR  site_id LIKE '%{{qpage_manifest_}}%' OR  page_url LIKE '%{{qpage_manifest_}}%' OR  hive_site_id LIKE '%{{qpage_manifest_}}%' OR  hive_site_name LIKE '%{{qpage_manifest_}}%' OR  project_id LIKE '%{{qpage_manifest_}}%' OR  project_name LIKE '%{{qpage_manifest_}}%')";
    
    function  data_nodes_gft_page_manifest_(qpage_manifest__str)
    {
        	var data_nodes_clean_page_manifest__filter_str=data_nodes_gft_page_manifest__str.replace(/{{qpage_manifest_}}/g, magic_clean_str(qpage_manifest__str));
            
            return  data_nodes_clean_page_manifest__filter_str;

    }
       ///end page_manifest_ search columns 

  function mosy_page_manifest__ui_node (page_manifest__json_data, page_manifest__load_to, page_manifest__cols_, page_manifest__template_ui)
  {
     ////alert(page_manifest__template_ui);
     var page_manifest__cols_fun_cols_str ="";
     
     if(typeof page_manifest__cols_fun_cols !== "undefined")
      {
        page_manifest__cols_fun_cols_str=page_manifest__cols_fun_cols;
        
        ///alert(page_manifest__cols_fun_cols)
      } 
      
     var page_manifest__ui__ = mosy_list_render_(page_manifest__json_data, page_manifest__cols_fun_cols_str+page_manifest__cols_, page_manifest__template_ui) 

     ////push_html(page_manifest__load_to, page_manifest__ui__)  

     push_grid_result(page_manifest__ui__, page_manifest__load_to)
  }
  
 
 ///////
 
 var page_manifest__auto_function= '{"cbfun":"process_page_manifest__json_data","_data_isle":"page_manifest__data_isle","_pagination_isle":"page_manifest__pagination_isle","_data_template":"page_manifest__data_template","_payload_str":"req","_pagination_prefix":"__pgnt_page_manifest_"}';

 
 
 ///============ auto renders 
 
 
function mosy_page_manifest__json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", page_manifest__pagination_prefix_="__pgnt_page_manifest_", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("page_manifest_", btoa(qstr))
  }else{
    mosy_delete_get_pram("page_manifest_")
  }
  
  if(mosy_get_param("page_manifest_")!==undefined)
  {
    qstr=atob(mosy_get_param("page_manifest_"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:page_manifest__page_no:"+mosy_limit;
  }
  
  ///page_manifest__data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_page_manifest__json_data","_data_isle":"page_manifest__data_isle","_pagination_isle":"page_manifest__pagination_isle","_data_template":"page_manifest__data_template","_payload_str":"req","_pagination_prefix":"'+page_manifest__pagination_prefix_+'"}';
            
  }
  
  return mosyrender_page_manifest__(response_fun," where "+gft_page_manifest_(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, page_manifest__pagination_prefix_)
  
}


  
  function autoprocess_page_manifest__json_data(page_manifest__server_resp)
  {  
    mosy_page_manifest__ui_node(page_manifest__server_resp, "page_manifest__data_isle", page_manifest__data_nodes, page_manifest__data_template,"", "l:page_manifest__page_no:15")
    mosy_paginate_api(page_manifest__server_resp, "page_manifest__page_no", "page_manifest__pagination_isle", "15")
  }
  
  function process_page_manifest__json_data(page_manifest__server_resp, page_manifest__callback="")
  {  
      var page_manifest__data_isle="page_manifest__data_isle";
      var page_manifest__data_node_template=page_manifest__data_template;
      var page_manifest__pagination_isle="page_manifest__pagination_isle";
      var page_manifest__payload_str="";
      var page_manifest___pagination_prefix_str="__pgnt_page_manifest_";
      
       ///alert(page_manifest__callback)
       ///alert(page_manifest__server_resp)
       ///console.log(page_manifest__server_resp)
              
      try {
        
           const page_manifest__jsonObject = JSON.parse(page_manifest__callback);
        
           page_manifest__data_isle=page_manifest__jsonObject._data_isle;
           page_manifest__data_node_template=window[page_manifest__jsonObject._data_template];
           page_manifest__pagination_isle=page_manifest__jsonObject._pagination_isle;
           page_manifest__payload_str=page_manifest__jsonObject._payload_str;
           page_manifest___pagination_prefix_str=page_manifest__jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+page_manifest__callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+page_manifest__callback);
        
         if(page_manifest__callback.indexOf(",") >= 0)
         {
              page_manifest__data_handler_ui =page_manifest__callback.split(",");                                 

              if(page_manifest__data_handler_ui[0]!=undefined){ page_manifest__data_isle=page_manifest__data_handler_ui[0];}

              if(page_manifest__data_handler_ui[1]!=undefined){page_manifest__data_node_template =window[page_manifest__data_handler_ui[1]];}

              if(page_manifest__data_handler_ui[2]!=undefined){ page_manifest__pagination_isle=page_manifest__data_handler_ui[2]};

              if(page_manifest__data_handler_ui[3]!=undefined){ page_manifest__payload_str=btoa(page_manifest__data_handler_ui[3])};
              
              if(page_manifest__data_handler_ui[4]!=undefined){ page_manifest___pagination_prefix_str=btoa(page_manifest__data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+page_manifest__data_isle)
       
            mosy_page_manifest__ui_node(page_manifest__server_resp, page_manifest__data_isle, page_manifest__data_nodes, page_manifest__data_node_template,"", "l:page_manifest__page_no:"+mosy_limit)                       
            
             if(page_manifest__payload_str==="req")
             {
                
                mosy_paginate_api(page_manifest__server_resp, "page_manifest__page_no", page_manifest__pagination_isle, "process_page_manifest__json_data", page_manifest___pagination_prefix_str)

             }
           
  }
    

function mosyrender_page_manifest__(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_page_manifest_", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:page_manifest__page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _page_manifest__payload="mosyget_&tbl=page_manifest_&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_page_manifest__payload+curl_url)
  
  var _page_manifest__pagination_json = '{"_payload":"'+_page_manifest__payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _page_manifest__payload_input = document.createElement("input");
                _page_manifest__payload_input.setAttribute('type', 'hidden');
                _page_manifest__payload_input.setAttribute('name',_txt_payload);
                _page_manifest__payload_input.setAttribute('id', _txt_payload);

                // Add the _page_manifest__payload_input element to the DOM
                document.body.appendChild(_page_manifest__payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _page_manifest__pagination_json)
  mosyajax_get(_page_manifest__payload, response_fun, req_url);
  
  return _page_manifest__payload;
  
}


function mginitialize_page_manifest_(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _page_manifest__payload="mosyget_&tbl=page_manifest_&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_page_manifest__payload, response_fun, req_url);


}

 

///paybill_disbursments data_nodes 
  var paybill_disbursments_data_nodes ='{{row_count}}|{{primkey}}|{{trxkey}}|{{trx_id}}|{{trx_date}}|{{trx_month_year}}|{{trx_remark}}|{{amount}}|{{trx_type}}|{{business_id}}|{{client_id}}|{{admin_id}}|{{TransactionType}}|{{BusinessShortCode}}|{{BillRefNumber}}|{{InvoiceNumber}}|{{OrgAccountBalance}}|{{ThirdPartyTransID}}|{{MSISDN}}|{{FirstName}}|{{MiddleName}}|{{LastName}}|{{trx_msg}}|{{account_id}}|{{used_status}}|{{filter_date}}|{{flw_id}}|{{flag_state}}|{{reconciled}}|{{trx_timestamp}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start paybill_disbursments search columns 
   
   var data_nodes_gft_paybill_disbursments_str="(primkey LIKE '%{{qpaybill_disbursments}}%' OR  trxkey LIKE '%{{qpaybill_disbursments}}%' OR  trx_id LIKE '%{{qpaybill_disbursments}}%' OR  trx_date LIKE '%{{qpaybill_disbursments}}%' OR  trx_month_year LIKE '%{{qpaybill_disbursments}}%' OR  trx_remark LIKE '%{{qpaybill_disbursments}}%' OR  amount LIKE '%{{qpaybill_disbursments}}%' OR  trx_type LIKE '%{{qpaybill_disbursments}}%' OR  business_id LIKE '%{{qpaybill_disbursments}}%' OR  client_id LIKE '%{{qpaybill_disbursments}}%' OR  admin_id LIKE '%{{qpaybill_disbursments}}%' OR  TransactionType LIKE '%{{qpaybill_disbursments}}%' OR  BusinessShortCode LIKE '%{{qpaybill_disbursments}}%' OR  BillRefNumber LIKE '%{{qpaybill_disbursments}}%' OR  InvoiceNumber LIKE '%{{qpaybill_disbursments}}%' OR  OrgAccountBalance LIKE '%{{qpaybill_disbursments}}%' OR  ThirdPartyTransID LIKE '%{{qpaybill_disbursments}}%' OR  MSISDN LIKE '%{{qpaybill_disbursments}}%' OR  FirstName LIKE '%{{qpaybill_disbursments}}%' OR  MiddleName LIKE '%{{qpaybill_disbursments}}%' OR  LastName LIKE '%{{qpaybill_disbursments}}%' OR  trx_msg LIKE '%{{qpaybill_disbursments}}%' OR  account_id LIKE '%{{qpaybill_disbursments}}%' OR  used_status LIKE '%{{qpaybill_disbursments}}%' OR  filter_date LIKE '%{{qpaybill_disbursments}}%' OR  flw_id LIKE '%{{qpaybill_disbursments}}%' OR  flag_state LIKE '%{{qpaybill_disbursments}}%' OR  reconciled LIKE '%{{qpaybill_disbursments}}%' OR  trx_timestamp LIKE '%{{qpaybill_disbursments}}%' OR  hive_site_id LIKE '%{{qpaybill_disbursments}}%' OR  hive_site_name LIKE '%{{qpaybill_disbursments}}%')";
    
    function  data_nodes_gft_paybill_disbursments(qpaybill_disbursments_str)
    {
        	var data_nodes_clean_paybill_disbursments_filter_str=data_nodes_gft_paybill_disbursments_str.replace(/{{qpaybill_disbursments}}/g, magic_clean_str(qpaybill_disbursments_str));
            
            return  data_nodes_clean_paybill_disbursments_filter_str;

    }
       ///end paybill_disbursments search columns 

  function mosy_paybill_disbursments_ui_node (paybill_disbursments_json_data, paybill_disbursments_load_to, paybill_disbursments_cols_, paybill_disbursments_template_ui)
  {
     ////alert(paybill_disbursments_template_ui);
     var paybill_disbursments_cols_fun_cols_str ="";
     
     if(typeof paybill_disbursments_cols_fun_cols !== "undefined")
      {
        paybill_disbursments_cols_fun_cols_str=paybill_disbursments_cols_fun_cols;
        
        ///alert(paybill_disbursments_cols_fun_cols)
      } 
      
     var paybill_disbursments_ui__ = mosy_list_render_(paybill_disbursments_json_data, paybill_disbursments_cols_fun_cols_str+paybill_disbursments_cols_, paybill_disbursments_template_ui) 

     ////push_html(paybill_disbursments_load_to, paybill_disbursments_ui__)  

     push_grid_result(paybill_disbursments_ui__, paybill_disbursments_load_to)
  }
  
 
 ///////
 
 var paybill_disbursments_auto_function= '{"cbfun":"process_paybill_disbursments_json_data","_data_isle":"paybill_disbursments_data_isle","_pagination_isle":"paybill_disbursments_pagination_isle","_data_template":"paybill_disbursments_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_paybill_disbursments"}';

 
 
 ///============ auto renders 
 
 
function mosy_paybill_disbursments_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", paybill_disbursments_pagination_prefix_="__pgnt_paybill_disbursments", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("paybill_disbursments", btoa(qstr))
  }else{
    mosy_delete_get_pram("paybill_disbursments")
  }
  
  if(mosy_get_param("paybill_disbursments")!==undefined)
  {
    qstr=atob(mosy_get_param("paybill_disbursments"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:paybill_disbursments_page_no:"+mosy_limit;
  }
  
  ///paybill_disbursments_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_paybill_disbursments_json_data","_data_isle":"paybill_disbursments_data_isle","_pagination_isle":"paybill_disbursments_pagination_isle","_data_template":"paybill_disbursments_data_template","_payload_str":"req","_pagination_prefix":"'+paybill_disbursments_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_paybill_disbursments_(response_fun," where "+gft_paybill_disbursments(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, paybill_disbursments_pagination_prefix_)
  
}


  
  function autoprocess_paybill_disbursments_json_data(paybill_disbursments_server_resp)
  {  
    mosy_paybill_disbursments_ui_node(paybill_disbursments_server_resp, "paybill_disbursments_data_isle", paybill_disbursments_data_nodes, paybill_disbursments_data_template,"", "l:paybill_disbursments_page_no:15")
    mosy_paginate_api(paybill_disbursments_server_resp, "paybill_disbursments_page_no", "paybill_disbursments_pagination_isle", "15")
  }
  
  function process_paybill_disbursments_json_data(paybill_disbursments_server_resp, paybill_disbursments_callback="")
  {  
      var paybill_disbursments_data_isle="paybill_disbursments_data_isle";
      var paybill_disbursments_data_node_template=paybill_disbursments_data_template;
      var paybill_disbursments_pagination_isle="paybill_disbursments_pagination_isle";
      var paybill_disbursments_payload_str="";
      var paybill_disbursments__pagination_prefix_str="__pgnt_paybill_disbursments";
      
       ///alert(paybill_disbursments_callback)
       ///alert(paybill_disbursments_server_resp)
       ///console.log(paybill_disbursments_server_resp)
              
      try {
        
           const paybill_disbursments_jsonObject = JSON.parse(paybill_disbursments_callback);
        
           paybill_disbursments_data_isle=paybill_disbursments_jsonObject._data_isle;
           paybill_disbursments_data_node_template=window[paybill_disbursments_jsonObject._data_template];
           paybill_disbursments_pagination_isle=paybill_disbursments_jsonObject._pagination_isle;
           paybill_disbursments_payload_str=paybill_disbursments_jsonObject._payload_str;
           paybill_disbursments__pagination_prefix_str=paybill_disbursments_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+paybill_disbursments_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+paybill_disbursments_callback);
        
         if(paybill_disbursments_callback.indexOf(",") >= 0)
         {
              paybill_disbursments_data_handler_ui =paybill_disbursments_callback.split(",");                                 

              if(paybill_disbursments_data_handler_ui[0]!=undefined){ paybill_disbursments_data_isle=paybill_disbursments_data_handler_ui[0];}

              if(paybill_disbursments_data_handler_ui[1]!=undefined){paybill_disbursments_data_node_template =window[paybill_disbursments_data_handler_ui[1]];}

              if(paybill_disbursments_data_handler_ui[2]!=undefined){ paybill_disbursments_pagination_isle=paybill_disbursments_data_handler_ui[2]};

              if(paybill_disbursments_data_handler_ui[3]!=undefined){ paybill_disbursments_payload_str=btoa(paybill_disbursments_data_handler_ui[3])};
              
              if(paybill_disbursments_data_handler_ui[4]!=undefined){ paybill_disbursments__pagination_prefix_str=btoa(paybill_disbursments_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+paybill_disbursments_data_isle)
       
            mosy_paybill_disbursments_ui_node(paybill_disbursments_server_resp, paybill_disbursments_data_isle, paybill_disbursments_data_nodes, paybill_disbursments_data_node_template,"", "l:paybill_disbursments_page_no:"+mosy_limit)                       
            
             if(paybill_disbursments_payload_str==="req")
             {
                
                mosy_paginate_api(paybill_disbursments_server_resp, "paybill_disbursments_page_no", paybill_disbursments_pagination_isle, "process_paybill_disbursments_json_data", paybill_disbursments__pagination_prefix_str)

             }
           
  }
    

function mosyrender_paybill_disbursments_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_paybill_disbursments", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:paybill_disbursments_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _paybill_disbursments_payload="mosyget_&tbl=paybill_disbursments&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_paybill_disbursments_payload+curl_url)
  
  var _paybill_disbursments_pagination_json = '{"_payload":"'+_paybill_disbursments_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _paybill_disbursments_payload_input = document.createElement("input");
                _paybill_disbursments_payload_input.setAttribute('type', 'hidden');
                _paybill_disbursments_payload_input.setAttribute('name',_txt_payload);
                _paybill_disbursments_payload_input.setAttribute('id', _txt_payload);

                // Add the _paybill_disbursments_payload_input element to the DOM
                document.body.appendChild(_paybill_disbursments_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _paybill_disbursments_pagination_json)
  mosyajax_get(_paybill_disbursments_payload, response_fun, req_url);
  
  return _paybill_disbursments_payload;
  
}


function mginitialize_paybill_disbursments(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _paybill_disbursments_payload="mosyget_&tbl=paybill_disbursments&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_paybill_disbursments_payload, response_fun, req_url);


}

 

///payment_confirmations data_nodes 
  var payment_confirmations_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{result_type}}|{{result_code}}|{{result_desc}}|{{originator_conversation_id}}|{{conversation_id}}|{{transaction_id}}|{{transaction_amount}}|{{transaction_receipt}}|{{recipient_registered}}|{{charges_paid_funds}}|{{receiver_public_name}}|{{transaction_date_time}}|{{utility_funds}}|{{working_funds}}|{{queue_timeout_url}}|{{created_at}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start payment_confirmations search columns 
   
   var data_nodes_gft_payment_confirmations_str="(primkey LIKE '%{{qpayment_confirmations}}%' OR  record_id LIKE '%{{qpayment_confirmations}}%' OR  result_type LIKE '%{{qpayment_confirmations}}%' OR  result_code LIKE '%{{qpayment_confirmations}}%' OR  result_desc LIKE '%{{qpayment_confirmations}}%' OR  originator_conversation_id LIKE '%{{qpayment_confirmations}}%' OR  conversation_id LIKE '%{{qpayment_confirmations}}%' OR  transaction_id LIKE '%{{qpayment_confirmations}}%' OR  transaction_amount LIKE '%{{qpayment_confirmations}}%' OR  transaction_receipt LIKE '%{{qpayment_confirmations}}%' OR  recipient_registered LIKE '%{{qpayment_confirmations}}%' OR  charges_paid_funds LIKE '%{{qpayment_confirmations}}%' OR  receiver_public_name LIKE '%{{qpayment_confirmations}}%' OR  transaction_date_time LIKE '%{{qpayment_confirmations}}%' OR  utility_funds LIKE '%{{qpayment_confirmations}}%' OR  working_funds LIKE '%{{qpayment_confirmations}}%' OR  queue_timeout_url LIKE '%{{qpayment_confirmations}}%' OR  created_at LIKE '%{{qpayment_confirmations}}%' OR  hive_site_id LIKE '%{{qpayment_confirmations}}%' OR  hive_site_name LIKE '%{{qpayment_confirmations}}%')";
    
    function  data_nodes_gft_payment_confirmations(qpayment_confirmations_str)
    {
        	var data_nodes_clean_payment_confirmations_filter_str=data_nodes_gft_payment_confirmations_str.replace(/{{qpayment_confirmations}}/g, magic_clean_str(qpayment_confirmations_str));
            
            return  data_nodes_clean_payment_confirmations_filter_str;

    }
       ///end payment_confirmations search columns 

  function mosy_payment_confirmations_ui_node (payment_confirmations_json_data, payment_confirmations_load_to, payment_confirmations_cols_, payment_confirmations_template_ui)
  {
     ////alert(payment_confirmations_template_ui);
     var payment_confirmations_cols_fun_cols_str ="";
     
     if(typeof payment_confirmations_cols_fun_cols !== "undefined")
      {
        payment_confirmations_cols_fun_cols_str=payment_confirmations_cols_fun_cols;
        
        ///alert(payment_confirmations_cols_fun_cols)
      } 
      
     var payment_confirmations_ui__ = mosy_list_render_(payment_confirmations_json_data, payment_confirmations_cols_fun_cols_str+payment_confirmations_cols_, payment_confirmations_template_ui) 

     ////push_html(payment_confirmations_load_to, payment_confirmations_ui__)  

     push_grid_result(payment_confirmations_ui__, payment_confirmations_load_to)
  }
  
 
 ///////
 
 var payment_confirmations_auto_function= '{"cbfun":"process_payment_confirmations_json_data","_data_isle":"payment_confirmations_data_isle","_pagination_isle":"payment_confirmations_pagination_isle","_data_template":"payment_confirmations_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_payment_confirmations"}';

 
 
 ///============ auto renders 
 
 
function mosy_payment_confirmations_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", payment_confirmations_pagination_prefix_="__pgnt_payment_confirmations", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("payment_confirmations", btoa(qstr))
  }else{
    mosy_delete_get_pram("payment_confirmations")
  }
  
  if(mosy_get_param("payment_confirmations")!==undefined)
  {
    qstr=atob(mosy_get_param("payment_confirmations"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:payment_confirmations_page_no:"+mosy_limit;
  }
  
  ///payment_confirmations_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_payment_confirmations_json_data","_data_isle":"payment_confirmations_data_isle","_pagination_isle":"payment_confirmations_pagination_isle","_data_template":"payment_confirmations_data_template","_payload_str":"req","_pagination_prefix":"'+payment_confirmations_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_payment_confirmations_(response_fun," where "+gft_payment_confirmations(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, payment_confirmations_pagination_prefix_)
  
}


  
  function autoprocess_payment_confirmations_json_data(payment_confirmations_server_resp)
  {  
    mosy_payment_confirmations_ui_node(payment_confirmations_server_resp, "payment_confirmations_data_isle", payment_confirmations_data_nodes, payment_confirmations_data_template,"", "l:payment_confirmations_page_no:15")
    mosy_paginate_api(payment_confirmations_server_resp, "payment_confirmations_page_no", "payment_confirmations_pagination_isle", "15")
  }
  
  function process_payment_confirmations_json_data(payment_confirmations_server_resp, payment_confirmations_callback="")
  {  
      var payment_confirmations_data_isle="payment_confirmations_data_isle";
      var payment_confirmations_data_node_template=payment_confirmations_data_template;
      var payment_confirmations_pagination_isle="payment_confirmations_pagination_isle";
      var payment_confirmations_payload_str="";
      var payment_confirmations__pagination_prefix_str="__pgnt_payment_confirmations";
      
       ///alert(payment_confirmations_callback)
       ///alert(payment_confirmations_server_resp)
       ///console.log(payment_confirmations_server_resp)
              
      try {
        
           const payment_confirmations_jsonObject = JSON.parse(payment_confirmations_callback);
        
           payment_confirmations_data_isle=payment_confirmations_jsonObject._data_isle;
           payment_confirmations_data_node_template=window[payment_confirmations_jsonObject._data_template];
           payment_confirmations_pagination_isle=payment_confirmations_jsonObject._pagination_isle;
           payment_confirmations_payload_str=payment_confirmations_jsonObject._payload_str;
           payment_confirmations__pagination_prefix_str=payment_confirmations_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+payment_confirmations_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+payment_confirmations_callback);
        
         if(payment_confirmations_callback.indexOf(",") >= 0)
         {
              payment_confirmations_data_handler_ui =payment_confirmations_callback.split(",");                                 

              if(payment_confirmations_data_handler_ui[0]!=undefined){ payment_confirmations_data_isle=payment_confirmations_data_handler_ui[0];}

              if(payment_confirmations_data_handler_ui[1]!=undefined){payment_confirmations_data_node_template =window[payment_confirmations_data_handler_ui[1]];}

              if(payment_confirmations_data_handler_ui[2]!=undefined){ payment_confirmations_pagination_isle=payment_confirmations_data_handler_ui[2]};

              if(payment_confirmations_data_handler_ui[3]!=undefined){ payment_confirmations_payload_str=btoa(payment_confirmations_data_handler_ui[3])};
              
              if(payment_confirmations_data_handler_ui[4]!=undefined){ payment_confirmations__pagination_prefix_str=btoa(payment_confirmations_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+payment_confirmations_data_isle)
       
            mosy_payment_confirmations_ui_node(payment_confirmations_server_resp, payment_confirmations_data_isle, payment_confirmations_data_nodes, payment_confirmations_data_node_template,"", "l:payment_confirmations_page_no:"+mosy_limit)                       
            
             if(payment_confirmations_payload_str==="req")
             {
                
                mosy_paginate_api(payment_confirmations_server_resp, "payment_confirmations_page_no", payment_confirmations_pagination_isle, "process_payment_confirmations_json_data", payment_confirmations__pagination_prefix_str)

             }
           
  }
    

function mosyrender_payment_confirmations_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_payment_confirmations", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:payment_confirmations_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _payment_confirmations_payload="mosyget_&tbl=payment_confirmations&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_payment_confirmations_payload+curl_url)
  
  var _payment_confirmations_pagination_json = '{"_payload":"'+_payment_confirmations_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _payment_confirmations_payload_input = document.createElement("input");
                _payment_confirmations_payload_input.setAttribute('type', 'hidden');
                _payment_confirmations_payload_input.setAttribute('name',_txt_payload);
                _payment_confirmations_payload_input.setAttribute('id', _txt_payload);

                // Add the _payment_confirmations_payload_input element to the DOM
                document.body.appendChild(_payment_confirmations_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _payment_confirmations_pagination_json)
  mosyajax_get(_payment_confirmations_payload, response_fun, req_url);
  
  return _payment_confirmations_payload;
  
}


function mginitialize_payment_confirmations(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _payment_confirmations_payload="mosyget_&tbl=payment_confirmations&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_payment_confirmations_payload, response_fun, req_url);


}

 

///phonebook data_nodes 
  var phonebook_data_nodes ='{{row_count}}|{{primkey}}|{{contact_id}}|{{name}}|{{email}}|{{tel}}|{{profile_photo}}|{{username}}|{{site_id}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start phonebook search columns 
   
   var data_nodes_gft_phonebook_str="(primkey LIKE '%{{qphonebook}}%' OR  contact_id LIKE '%{{qphonebook}}%' OR  name LIKE '%{{qphonebook}}%' OR  email LIKE '%{{qphonebook}}%' OR  tel LIKE '%{{qphonebook}}%' OR  profile_photo LIKE '%{{qphonebook}}%' OR  username LIKE '%{{qphonebook}}%' OR  site_id LIKE '%{{qphonebook}}%' OR  hive_site_id LIKE '%{{qphonebook}}%' OR  hive_site_name LIKE '%{{qphonebook}}%')";
    
    function  data_nodes_gft_phonebook(qphonebook_str)
    {
        	var data_nodes_clean_phonebook_filter_str=data_nodes_gft_phonebook_str.replace(/{{qphonebook}}/g, magic_clean_str(qphonebook_str));
            
            return  data_nodes_clean_phonebook_filter_str;

    }
       ///end phonebook search columns 

  function mosy_phonebook_ui_node (phonebook_json_data, phonebook_load_to, phonebook_cols_, phonebook_template_ui)
  {
     ////alert(phonebook_template_ui);
     var phonebook_cols_fun_cols_str ="";
     
     if(typeof phonebook_cols_fun_cols !== "undefined")
      {
        phonebook_cols_fun_cols_str=phonebook_cols_fun_cols;
        
        ///alert(phonebook_cols_fun_cols)
      } 
      
     var phonebook_ui__ = mosy_list_render_(phonebook_json_data, phonebook_cols_fun_cols_str+phonebook_cols_, phonebook_template_ui) 

     ////push_html(phonebook_load_to, phonebook_ui__)  

     push_grid_result(phonebook_ui__, phonebook_load_to)
  }
  
 
 ///////
 
 var phonebook_auto_function= '{"cbfun":"process_phonebook_json_data","_data_isle":"phonebook_data_isle","_pagination_isle":"phonebook_pagination_isle","_data_template":"phonebook_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_phonebook"}';

 
 
 ///============ auto renders 
 
 
function mosy_phonebook_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", phonebook_pagination_prefix_="__pgnt_phonebook", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("phonebook", btoa(qstr))
  }else{
    mosy_delete_get_pram("phonebook")
  }
  
  if(mosy_get_param("phonebook")!==undefined)
  {
    qstr=atob(mosy_get_param("phonebook"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:phonebook_page_no:"+mosy_limit;
  }
  
  ///phonebook_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_phonebook_json_data","_data_isle":"phonebook_data_isle","_pagination_isle":"phonebook_pagination_isle","_data_template":"phonebook_data_template","_payload_str":"req","_pagination_prefix":"'+phonebook_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_phonebook_(response_fun," where "+gft_phonebook(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, phonebook_pagination_prefix_)
  
}


  
  function autoprocess_phonebook_json_data(phonebook_server_resp)
  {  
    mosy_phonebook_ui_node(phonebook_server_resp, "phonebook_data_isle", phonebook_data_nodes, phonebook_data_template,"", "l:phonebook_page_no:15")
    mosy_paginate_api(phonebook_server_resp, "phonebook_page_no", "phonebook_pagination_isle", "15")
  }
  
  function process_phonebook_json_data(phonebook_server_resp, phonebook_callback="")
  {  
      var phonebook_data_isle="phonebook_data_isle";
      var phonebook_data_node_template=phonebook_data_template;
      var phonebook_pagination_isle="phonebook_pagination_isle";
      var phonebook_payload_str="";
      var phonebook__pagination_prefix_str="__pgnt_phonebook";
      
       ///alert(phonebook_callback)
       ///alert(phonebook_server_resp)
       ///console.log(phonebook_server_resp)
              
      try {
        
           const phonebook_jsonObject = JSON.parse(phonebook_callback);
        
           phonebook_data_isle=phonebook_jsonObject._data_isle;
           phonebook_data_node_template=window[phonebook_jsonObject._data_template];
           phonebook_pagination_isle=phonebook_jsonObject._pagination_isle;
           phonebook_payload_str=phonebook_jsonObject._payload_str;
           phonebook__pagination_prefix_str=phonebook_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+phonebook_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+phonebook_callback);
        
         if(phonebook_callback.indexOf(",") >= 0)
         {
              phonebook_data_handler_ui =phonebook_callback.split(",");                                 

              if(phonebook_data_handler_ui[0]!=undefined){ phonebook_data_isle=phonebook_data_handler_ui[0];}

              if(phonebook_data_handler_ui[1]!=undefined){phonebook_data_node_template =window[phonebook_data_handler_ui[1]];}

              if(phonebook_data_handler_ui[2]!=undefined){ phonebook_pagination_isle=phonebook_data_handler_ui[2]};

              if(phonebook_data_handler_ui[3]!=undefined){ phonebook_payload_str=btoa(phonebook_data_handler_ui[3])};
              
              if(phonebook_data_handler_ui[4]!=undefined){ phonebook__pagination_prefix_str=btoa(phonebook_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+phonebook_data_isle)
       
            mosy_phonebook_ui_node(phonebook_server_resp, phonebook_data_isle, phonebook_data_nodes, phonebook_data_node_template,"", "l:phonebook_page_no:"+mosy_limit)                       
            
             if(phonebook_payload_str==="req")
             {
                
                mosy_paginate_api(phonebook_server_resp, "phonebook_page_no", phonebook_pagination_isle, "process_phonebook_json_data", phonebook__pagination_prefix_str)

             }
           
  }
    

function mosyrender_phonebook_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_phonebook", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:phonebook_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _phonebook_payload="mosyget_&tbl=phonebook&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_phonebook_payload+curl_url)
  
  var _phonebook_pagination_json = '{"_payload":"'+_phonebook_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _phonebook_payload_input = document.createElement("input");
                _phonebook_payload_input.setAttribute('type', 'hidden');
                _phonebook_payload_input.setAttribute('name',_txt_payload);
                _phonebook_payload_input.setAttribute('id', _txt_payload);

                // Add the _phonebook_payload_input element to the DOM
                document.body.appendChild(_phonebook_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _phonebook_pagination_json)
  mosyajax_get(_phonebook_payload, response_fun, req_url);
  
  return _phonebook_payload;
  
}


function mginitialize_phonebook(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _phonebook_payload="mosyget_&tbl=phonebook&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_phonebook_payload, response_fun, req_url);


}

 

///reconciliations data_nodes 
  var reconciliations_data_nodes ='{{row_count}}|{{primkey}}|{{trxkey}}|{{trx_id}}|{{trx_date}}|{{trx_month_year}}|{{trx_remark}}|{{amount}}|{{trx_type}}|{{business_id}}|{{client_id}}|{{admin_id}}|{{TransactionType}}|{{BusinessShortCode}}|{{BillRefNumber}}|{{InvoiceNumber}}|{{OrgAccountBalance}}|{{ThirdPartyTransID}}|{{MSISDN}}|{{FirstName}}|{{MiddleName}}|{{LastName}}|{{trx_msg}}|{{account_id}}|{{used_status}}|{{filter_date}}|{{flag_state}}|{{reconciled}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start reconciliations search columns 
   
   var data_nodes_gft_reconciliations_str="(primkey LIKE '%{{qreconciliations}}%' OR  trxkey LIKE '%{{qreconciliations}}%' OR  trx_id LIKE '%{{qreconciliations}}%' OR  trx_date LIKE '%{{qreconciliations}}%' OR  trx_month_year LIKE '%{{qreconciliations}}%' OR  trx_remark LIKE '%{{qreconciliations}}%' OR  amount LIKE '%{{qreconciliations}}%' OR  trx_type LIKE '%{{qreconciliations}}%' OR  business_id LIKE '%{{qreconciliations}}%' OR  client_id LIKE '%{{qreconciliations}}%' OR  admin_id LIKE '%{{qreconciliations}}%' OR  TransactionType LIKE '%{{qreconciliations}}%' OR  BusinessShortCode LIKE '%{{qreconciliations}}%' OR  BillRefNumber LIKE '%{{qreconciliations}}%' OR  InvoiceNumber LIKE '%{{qreconciliations}}%' OR  OrgAccountBalance LIKE '%{{qreconciliations}}%' OR  ThirdPartyTransID LIKE '%{{qreconciliations}}%' OR  MSISDN LIKE '%{{qreconciliations}}%' OR  FirstName LIKE '%{{qreconciliations}}%' OR  MiddleName LIKE '%{{qreconciliations}}%' OR  LastName LIKE '%{{qreconciliations}}%' OR  trx_msg LIKE '%{{qreconciliations}}%' OR  account_id LIKE '%{{qreconciliations}}%' OR  used_status LIKE '%{{qreconciliations}}%' OR  filter_date LIKE '%{{qreconciliations}}%' OR  flag_state LIKE '%{{qreconciliations}}%' OR  reconciled LIKE '%{{qreconciliations}}%' OR  hive_site_id LIKE '%{{qreconciliations}}%' OR  hive_site_name LIKE '%{{qreconciliations}}%')";
    
    function  data_nodes_gft_reconciliations(qreconciliations_str)
    {
        	var data_nodes_clean_reconciliations_filter_str=data_nodes_gft_reconciliations_str.replace(/{{qreconciliations}}/g, magic_clean_str(qreconciliations_str));
            
            return  data_nodes_clean_reconciliations_filter_str;

    }
       ///end reconciliations search columns 

  function mosy_reconciliations_ui_node (reconciliations_json_data, reconciliations_load_to, reconciliations_cols_, reconciliations_template_ui)
  {
     ////alert(reconciliations_template_ui);
     var reconciliations_cols_fun_cols_str ="";
     
     if(typeof reconciliations_cols_fun_cols !== "undefined")
      {
        reconciliations_cols_fun_cols_str=reconciliations_cols_fun_cols;
        
        ///alert(reconciliations_cols_fun_cols)
      } 
      
     var reconciliations_ui__ = mosy_list_render_(reconciliations_json_data, reconciliations_cols_fun_cols_str+reconciliations_cols_, reconciliations_template_ui) 

     ////push_html(reconciliations_load_to, reconciliations_ui__)  

     push_grid_result(reconciliations_ui__, reconciliations_load_to)
  }
  
 
 ///////
 
 var reconciliations_auto_function= '{"cbfun":"process_reconciliations_json_data","_data_isle":"reconciliations_data_isle","_pagination_isle":"reconciliations_pagination_isle","_data_template":"reconciliations_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_reconciliations"}';

 
 
 ///============ auto renders 
 
 
function mosy_reconciliations_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", reconciliations_pagination_prefix_="__pgnt_reconciliations", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("reconciliations", btoa(qstr))
  }else{
    mosy_delete_get_pram("reconciliations")
  }
  
  if(mosy_get_param("reconciliations")!==undefined)
  {
    qstr=atob(mosy_get_param("reconciliations"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:reconciliations_page_no:"+mosy_limit;
  }
  
  ///reconciliations_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_reconciliations_json_data","_data_isle":"reconciliations_data_isle","_pagination_isle":"reconciliations_pagination_isle","_data_template":"reconciliations_data_template","_payload_str":"req","_pagination_prefix":"'+reconciliations_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_reconciliations_(response_fun," where "+gft_reconciliations(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, reconciliations_pagination_prefix_)
  
}


  
  function autoprocess_reconciliations_json_data(reconciliations_server_resp)
  {  
    mosy_reconciliations_ui_node(reconciliations_server_resp, "reconciliations_data_isle", reconciliations_data_nodes, reconciliations_data_template,"", "l:reconciliations_page_no:15")
    mosy_paginate_api(reconciliations_server_resp, "reconciliations_page_no", "reconciliations_pagination_isle", "15")
  }
  
  function process_reconciliations_json_data(reconciliations_server_resp, reconciliations_callback="")
  {  
      var reconciliations_data_isle="reconciliations_data_isle";
      var reconciliations_data_node_template=reconciliations_data_template;
      var reconciliations_pagination_isle="reconciliations_pagination_isle";
      var reconciliations_payload_str="";
      var reconciliations__pagination_prefix_str="__pgnt_reconciliations";
      
       ///alert(reconciliations_callback)
       ///alert(reconciliations_server_resp)
       ///console.log(reconciliations_server_resp)
              
      try {
        
           const reconciliations_jsonObject = JSON.parse(reconciliations_callback);
        
           reconciliations_data_isle=reconciliations_jsonObject._data_isle;
           reconciliations_data_node_template=window[reconciliations_jsonObject._data_template];
           reconciliations_pagination_isle=reconciliations_jsonObject._pagination_isle;
           reconciliations_payload_str=reconciliations_jsonObject._payload_str;
           reconciliations__pagination_prefix_str=reconciliations_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+reconciliations_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+reconciliations_callback);
        
         if(reconciliations_callback.indexOf(",") >= 0)
         {
              reconciliations_data_handler_ui =reconciliations_callback.split(",");                                 

              if(reconciliations_data_handler_ui[0]!=undefined){ reconciliations_data_isle=reconciliations_data_handler_ui[0];}

              if(reconciliations_data_handler_ui[1]!=undefined){reconciliations_data_node_template =window[reconciliations_data_handler_ui[1]];}

              if(reconciliations_data_handler_ui[2]!=undefined){ reconciliations_pagination_isle=reconciliations_data_handler_ui[2]};

              if(reconciliations_data_handler_ui[3]!=undefined){ reconciliations_payload_str=btoa(reconciliations_data_handler_ui[3])};
              
              if(reconciliations_data_handler_ui[4]!=undefined){ reconciliations__pagination_prefix_str=btoa(reconciliations_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+reconciliations_data_isle)
       
            mosy_reconciliations_ui_node(reconciliations_server_resp, reconciliations_data_isle, reconciliations_data_nodes, reconciliations_data_node_template,"", "l:reconciliations_page_no:"+mosy_limit)                       
            
             if(reconciliations_payload_str==="req")
             {
                
                mosy_paginate_api(reconciliations_server_resp, "reconciliations_page_no", reconciliations_pagination_isle, "process_reconciliations_json_data", reconciliations__pagination_prefix_str)

             }
           
  }
    

function mosyrender_reconciliations_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_reconciliations", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:reconciliations_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _reconciliations_payload="mosyget_&tbl=reconciliations&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_reconciliations_payload+curl_url)
  
  var _reconciliations_pagination_json = '{"_payload":"'+_reconciliations_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _reconciliations_payload_input = document.createElement("input");
                _reconciliations_payload_input.setAttribute('type', 'hidden');
                _reconciliations_payload_input.setAttribute('name',_txt_payload);
                _reconciliations_payload_input.setAttribute('id', _txt_payload);

                // Add the _reconciliations_payload_input element to the DOM
                document.body.appendChild(_reconciliations_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _reconciliations_pagination_json)
  mosyajax_get(_reconciliations_payload, response_fun, req_url);
  
  return _reconciliations_payload;
  
}


function mginitialize_reconciliations(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _reconciliations_payload="mosyget_&tbl=reconciliations&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_reconciliations_payload, response_fun, req_url);


}

 

///send_list data_nodes 
  var send_list_data_nodes ='{{row_count}}|{{primkey}}|{{send_list_key}}|{{send_list_name}}|{{site_id}}|{{contact_id}}|{{contact_names}}|{{mobile}}|{{email}}|{{ref_no}}|{{group_name}}|{{date_created}}|{{description}}|{{active_state}}|{{service_id}}|{{service_name}}|{{hive_site_id}}|{{hive_site_name}}|{{entry_context}}';


   
   ///start send_list search columns 
   
   var data_nodes_gft_send_list_str="(primkey LIKE '%{{qsend_list}}%' OR  send_list_key LIKE '%{{qsend_list}}%' OR  send_list_name LIKE '%{{qsend_list}}%' OR  site_id LIKE '%{{qsend_list}}%' OR  contact_id LIKE '%{{qsend_list}}%' OR  contact_names LIKE '%{{qsend_list}}%' OR  mobile LIKE '%{{qsend_list}}%' OR  email LIKE '%{{qsend_list}}%' OR  ref_no LIKE '%{{qsend_list}}%' OR  group_name LIKE '%{{qsend_list}}%' OR  date_created LIKE '%{{qsend_list}}%' OR  description LIKE '%{{qsend_list}}%' OR  active_state LIKE '%{{qsend_list}}%' OR  service_id LIKE '%{{qsend_list}}%' OR  service_name LIKE '%{{qsend_list}}%' OR  hive_site_id LIKE '%{{qsend_list}}%' OR  hive_site_name LIKE '%{{qsend_list}}%' OR  entry_context LIKE '%{{qsend_list}}%')";
    
    function  data_nodes_gft_send_list(qsend_list_str)
    {
        	var data_nodes_clean_send_list_filter_str=data_nodes_gft_send_list_str.replace(/{{qsend_list}}/g, magic_clean_str(qsend_list_str));
            
            return  data_nodes_clean_send_list_filter_str;

    }
       ///end send_list search columns 

  function mosy_send_list_ui_node (send_list_json_data, send_list_load_to, send_list_cols_, send_list_template_ui)
  {
     ////alert(send_list_template_ui);
     var send_list_cols_fun_cols_str ="";
     
     if(typeof send_list_cols_fun_cols !== "undefined")
      {
        send_list_cols_fun_cols_str=send_list_cols_fun_cols;
        
        ///alert(send_list_cols_fun_cols)
      } 
      
     var send_list_ui__ = mosy_list_render_(send_list_json_data, send_list_cols_fun_cols_str+send_list_cols_, send_list_template_ui) 

     ////push_html(send_list_load_to, send_list_ui__)  

     push_grid_result(send_list_ui__, send_list_load_to)
  }
  
 
 ///////
 
 var send_list_auto_function= '{"cbfun":"process_send_list_json_data","_data_isle":"send_list_data_isle","_pagination_isle":"send_list_pagination_isle","_data_template":"send_list_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_send_list"}';

 
 
 ///============ auto renders 
 
 
function mosy_send_list_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", send_list_pagination_prefix_="__pgnt_send_list", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("send_list", btoa(qstr))
  }else{
    mosy_delete_get_pram("send_list")
  }
  
  if(mosy_get_param("send_list")!==undefined)
  {
    qstr=atob(mosy_get_param("send_list"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:send_list_page_no:"+mosy_limit;
  }
  
  ///send_list_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_send_list_json_data","_data_isle":"send_list_data_isle","_pagination_isle":"send_list_pagination_isle","_data_template":"send_list_data_template","_payload_str":"req","_pagination_prefix":"'+send_list_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_send_list_(response_fun," where "+gft_send_list(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, send_list_pagination_prefix_)
  
}


  
  function autoprocess_send_list_json_data(send_list_server_resp)
  {  
    mosy_send_list_ui_node(send_list_server_resp, "send_list_data_isle", send_list_data_nodes, send_list_data_template,"", "l:send_list_page_no:15")
    mosy_paginate_api(send_list_server_resp, "send_list_page_no", "send_list_pagination_isle", "15")
  }
  
  function process_send_list_json_data(send_list_server_resp, send_list_callback="")
  {  
      var send_list_data_isle="send_list_data_isle";
      var send_list_data_node_template=send_list_data_template;
      var send_list_pagination_isle="send_list_pagination_isle";
      var send_list_payload_str="";
      var send_list__pagination_prefix_str="__pgnt_send_list";
      
       ///alert(send_list_callback)
       ///alert(send_list_server_resp)
       ///console.log(send_list_server_resp)
              
      try {
        
           const send_list_jsonObject = JSON.parse(send_list_callback);
        
           send_list_data_isle=send_list_jsonObject._data_isle;
           send_list_data_node_template=window[send_list_jsonObject._data_template];
           send_list_pagination_isle=send_list_jsonObject._pagination_isle;
           send_list_payload_str=send_list_jsonObject._payload_str;
           send_list__pagination_prefix_str=send_list_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+send_list_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+send_list_callback);
        
         if(send_list_callback.indexOf(",") >= 0)
         {
              send_list_data_handler_ui =send_list_callback.split(",");                                 

              if(send_list_data_handler_ui[0]!=undefined){ send_list_data_isle=send_list_data_handler_ui[0];}

              if(send_list_data_handler_ui[1]!=undefined){send_list_data_node_template =window[send_list_data_handler_ui[1]];}

              if(send_list_data_handler_ui[2]!=undefined){ send_list_pagination_isle=send_list_data_handler_ui[2]};

              if(send_list_data_handler_ui[3]!=undefined){ send_list_payload_str=btoa(send_list_data_handler_ui[3])};
              
              if(send_list_data_handler_ui[4]!=undefined){ send_list__pagination_prefix_str=btoa(send_list_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+send_list_data_isle)
       
            mosy_send_list_ui_node(send_list_server_resp, send_list_data_isle, send_list_data_nodes, send_list_data_node_template,"", "l:send_list_page_no:"+mosy_limit)                       
            
             if(send_list_payload_str==="req")
             {
                
                mosy_paginate_api(send_list_server_resp, "send_list_page_no", send_list_pagination_isle, "process_send_list_json_data", send_list__pagination_prefix_str)

             }
           
  }
    

function mosyrender_send_list_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_send_list", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:send_list_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _send_list_payload="mosyget_&tbl=send_list&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_send_list_payload+curl_url)
  
  var _send_list_pagination_json = '{"_payload":"'+_send_list_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _send_list_payload_input = document.createElement("input");
                _send_list_payload_input.setAttribute('type', 'hidden');
                _send_list_payload_input.setAttribute('name',_txt_payload);
                _send_list_payload_input.setAttribute('id', _txt_payload);

                // Add the _send_list_payload_input element to the DOM
                document.body.appendChild(_send_list_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _send_list_pagination_json)
  mosyajax_get(_send_list_payload, response_fun, req_url);
  
  return _send_list_payload;
  
}


function mginitialize_send_list(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _send_list_payload="mosyget_&tbl=send_list&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_send_list_payload, response_fun, req_url);


}

 

///services data_nodes 
  var services_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{service_name}}|{{service_code}}|{{purchase_price}}|{{selling_price}}|{{service_type}}|{{remark}}|{{commission}}|{{profit}}|{{onboarding_commission}}';


   
   ///start services search columns 
   
   var data_nodes_gft_services_str="(primkey LIKE '%{{qservices}}%' OR  record_id LIKE '%{{qservices}}%' OR  service_name LIKE '%{{qservices}}%' OR  service_code LIKE '%{{qservices}}%' OR  purchase_price LIKE '%{{qservices}}%' OR  selling_price LIKE '%{{qservices}}%' OR  service_type LIKE '%{{qservices}}%' OR  remark LIKE '%{{qservices}}%' OR  commission LIKE '%{{qservices}}%' OR  profit LIKE '%{{qservices}}%' OR  onboarding_commission LIKE '%{{qservices}}%')";
    
    function  data_nodes_gft_services(qservices_str)
    {
        	var data_nodes_clean_services_filter_str=data_nodes_gft_services_str.replace(/{{qservices}}/g, magic_clean_str(qservices_str));
            
            return  data_nodes_clean_services_filter_str;

    }
       ///end services search columns 

  function mosy_services_ui_node (services_json_data, services_load_to, services_cols_, services_template_ui)
  {
     ////alert(services_template_ui);
     var services_cols_fun_cols_str ="";
     
     if(typeof services_cols_fun_cols !== "undefined")
      {
        services_cols_fun_cols_str=services_cols_fun_cols;
        
        ///alert(services_cols_fun_cols)
      } 
      
     var services_ui__ = mosy_list_render_(services_json_data, services_cols_fun_cols_str+services_cols_, services_template_ui) 

     ////push_html(services_load_to, services_ui__)  

     push_grid_result(services_ui__, services_load_to)
  }
  
 
 ///////
 
 var services_auto_function= '{"cbfun":"process_services_json_data","_data_isle":"services_data_isle","_pagination_isle":"services_pagination_isle","_data_template":"services_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_services"}';

 
 
 ///============ auto renders 
 
 
function mosy_services_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", services_pagination_prefix_="__pgnt_services", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("services", btoa(qstr))
  }else{
    mosy_delete_get_pram("services")
  }
  
  if(mosy_get_param("services")!==undefined)
  {
    qstr=atob(mosy_get_param("services"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:services_page_no:"+mosy_limit;
  }
  
  ///services_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_services_json_data","_data_isle":"services_data_isle","_pagination_isle":"services_pagination_isle","_data_template":"services_data_template","_payload_str":"req","_pagination_prefix":"'+services_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_services_(response_fun," where "+gft_services(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, services_pagination_prefix_)
  
}


  
  function autoprocess_services_json_data(services_server_resp)
  {  
    mosy_services_ui_node(services_server_resp, "services_data_isle", services_data_nodes, services_data_template,"", "l:services_page_no:15")
    mosy_paginate_api(services_server_resp, "services_page_no", "services_pagination_isle", "15")
  }
  
  function process_services_json_data(services_server_resp, services_callback="")
  {  
      var services_data_isle="services_data_isle";
      var services_data_node_template=services_data_template;
      var services_pagination_isle="services_pagination_isle";
      var services_payload_str="";
      var services__pagination_prefix_str="__pgnt_services";
      
       ///alert(services_callback)
       ///alert(services_server_resp)
       ///console.log(services_server_resp)
              
      try {
        
           const services_jsonObject = JSON.parse(services_callback);
        
           services_data_isle=services_jsonObject._data_isle;
           services_data_node_template=window[services_jsonObject._data_template];
           services_pagination_isle=services_jsonObject._pagination_isle;
           services_payload_str=services_jsonObject._payload_str;
           services__pagination_prefix_str=services_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+services_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+services_callback);
        
         if(services_callback.indexOf(",") >= 0)
         {
              services_data_handler_ui =services_callback.split(",");                                 

              if(services_data_handler_ui[0]!=undefined){ services_data_isle=services_data_handler_ui[0];}

              if(services_data_handler_ui[1]!=undefined){services_data_node_template =window[services_data_handler_ui[1]];}

              if(services_data_handler_ui[2]!=undefined){ services_pagination_isle=services_data_handler_ui[2]};

              if(services_data_handler_ui[3]!=undefined){ services_payload_str=btoa(services_data_handler_ui[3])};
              
              if(services_data_handler_ui[4]!=undefined){ services__pagination_prefix_str=btoa(services_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+services_data_isle)
       
            mosy_services_ui_node(services_server_resp, services_data_isle, services_data_nodes, services_data_node_template,"", "l:services_page_no:"+mosy_limit)                       
            
             if(services_payload_str==="req")
             {
                
                mosy_paginate_api(services_server_resp, "services_page_no", services_pagination_isle, "process_services_json_data", services__pagination_prefix_str)

             }
           
  }
    

function mosyrender_services_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_services", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:services_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _services_payload="mosyget_&tbl=services&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_services_payload+curl_url)
  
  var _services_pagination_json = '{"_payload":"'+_services_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _services_payload_input = document.createElement("input");
                _services_payload_input.setAttribute('type', 'hidden');
                _services_payload_input.setAttribute('name',_txt_payload);
                _services_payload_input.setAttribute('id', _txt_payload);

                // Add the _services_payload_input element to the DOM
                document.body.appendChild(_services_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _services_pagination_json)
  mosyajax_get(_services_payload, response_fun, req_url);
  
  return _services_payload;
  
}


function mginitialize_services(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _services_payload="mosyget_&tbl=services&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_services_payload, response_fun, req_url);


}

 

///system_role_bundles data_nodes 
  var system_role_bundles_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{bundle_id}}|{{bundle_name}}|{{remark}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start system_role_bundles search columns 
   
   var data_nodes_gft_system_role_bundles_str="(primkey LIKE '%{{qsystem_role_bundles}}%' OR  record_id LIKE '%{{qsystem_role_bundles}}%' OR  bundle_id LIKE '%{{qsystem_role_bundles}}%' OR  bundle_name LIKE '%{{qsystem_role_bundles}}%' OR  remark LIKE '%{{qsystem_role_bundles}}%' OR  hive_site_id LIKE '%{{qsystem_role_bundles}}%' OR  hive_site_name LIKE '%{{qsystem_role_bundles}}%')";
    
    function  data_nodes_gft_system_role_bundles(qsystem_role_bundles_str)
    {
        	var data_nodes_clean_system_role_bundles_filter_str=data_nodes_gft_system_role_bundles_str.replace(/{{qsystem_role_bundles}}/g, magic_clean_str(qsystem_role_bundles_str));
            
            return  data_nodes_clean_system_role_bundles_filter_str;

    }
       ///end system_role_bundles search columns 

  function mosy_system_role_bundles_ui_node (system_role_bundles_json_data, system_role_bundles_load_to, system_role_bundles_cols_, system_role_bundles_template_ui)
  {
     ////alert(system_role_bundles_template_ui);
     var system_role_bundles_cols_fun_cols_str ="";
     
     if(typeof system_role_bundles_cols_fun_cols !== "undefined")
      {
        system_role_bundles_cols_fun_cols_str=system_role_bundles_cols_fun_cols;
        
        ///alert(system_role_bundles_cols_fun_cols)
      } 
      
     var system_role_bundles_ui__ = mosy_list_render_(system_role_bundles_json_data, system_role_bundles_cols_fun_cols_str+system_role_bundles_cols_, system_role_bundles_template_ui) 

     ////push_html(system_role_bundles_load_to, system_role_bundles_ui__)  

     push_grid_result(system_role_bundles_ui__, system_role_bundles_load_to)
  }
  
 
 ///////
 
 var system_role_bundles_auto_function= '{"cbfun":"process_system_role_bundles_json_data","_data_isle":"system_role_bundles_data_isle","_pagination_isle":"system_role_bundles_pagination_isle","_data_template":"system_role_bundles_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_system_role_bundles"}';

 
 
 ///============ auto renders 
 
 
function mosy_system_role_bundles_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", system_role_bundles_pagination_prefix_="__pgnt_system_role_bundles", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("system_role_bundles", btoa(qstr))
  }else{
    mosy_delete_get_pram("system_role_bundles")
  }
  
  if(mosy_get_param("system_role_bundles")!==undefined)
  {
    qstr=atob(mosy_get_param("system_role_bundles"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:system_role_bundles_page_no:"+mosy_limit;
  }
  
  ///system_role_bundles_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_system_role_bundles_json_data","_data_isle":"system_role_bundles_data_isle","_pagination_isle":"system_role_bundles_pagination_isle","_data_template":"system_role_bundles_data_template","_payload_str":"req","_pagination_prefix":"'+system_role_bundles_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_system_role_bundles_(response_fun," where "+gft_system_role_bundles(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, system_role_bundles_pagination_prefix_)
  
}


  
  function autoprocess_system_role_bundles_json_data(system_role_bundles_server_resp)
  {  
    mosy_system_role_bundles_ui_node(system_role_bundles_server_resp, "system_role_bundles_data_isle", system_role_bundles_data_nodes, system_role_bundles_data_template,"", "l:system_role_bundles_page_no:15")
    mosy_paginate_api(system_role_bundles_server_resp, "system_role_bundles_page_no", "system_role_bundles_pagination_isle", "15")
  }
  
  function process_system_role_bundles_json_data(system_role_bundles_server_resp, system_role_bundles_callback="")
  {  
      var system_role_bundles_data_isle="system_role_bundles_data_isle";
      var system_role_bundles_data_node_template=system_role_bundles_data_template;
      var system_role_bundles_pagination_isle="system_role_bundles_pagination_isle";
      var system_role_bundles_payload_str="";
      var system_role_bundles__pagination_prefix_str="__pgnt_system_role_bundles";
      
       ///alert(system_role_bundles_callback)
       ///alert(system_role_bundles_server_resp)
       ///console.log(system_role_bundles_server_resp)
              
      try {
        
           const system_role_bundles_jsonObject = JSON.parse(system_role_bundles_callback);
        
           system_role_bundles_data_isle=system_role_bundles_jsonObject._data_isle;
           system_role_bundles_data_node_template=window[system_role_bundles_jsonObject._data_template];
           system_role_bundles_pagination_isle=system_role_bundles_jsonObject._pagination_isle;
           system_role_bundles_payload_str=system_role_bundles_jsonObject._payload_str;
           system_role_bundles__pagination_prefix_str=system_role_bundles_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+system_role_bundles_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+system_role_bundles_callback);
        
         if(system_role_bundles_callback.indexOf(",") >= 0)
         {
              system_role_bundles_data_handler_ui =system_role_bundles_callback.split(",");                                 

              if(system_role_bundles_data_handler_ui[0]!=undefined){ system_role_bundles_data_isle=system_role_bundles_data_handler_ui[0];}

              if(system_role_bundles_data_handler_ui[1]!=undefined){system_role_bundles_data_node_template =window[system_role_bundles_data_handler_ui[1]];}

              if(system_role_bundles_data_handler_ui[2]!=undefined){ system_role_bundles_pagination_isle=system_role_bundles_data_handler_ui[2]};

              if(system_role_bundles_data_handler_ui[3]!=undefined){ system_role_bundles_payload_str=btoa(system_role_bundles_data_handler_ui[3])};
              
              if(system_role_bundles_data_handler_ui[4]!=undefined){ system_role_bundles__pagination_prefix_str=btoa(system_role_bundles_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+system_role_bundles_data_isle)
       
            mosy_system_role_bundles_ui_node(system_role_bundles_server_resp, system_role_bundles_data_isle, system_role_bundles_data_nodes, system_role_bundles_data_node_template,"", "l:system_role_bundles_page_no:"+mosy_limit)                       
            
             if(system_role_bundles_payload_str==="req")
             {
                
                mosy_paginate_api(system_role_bundles_server_resp, "system_role_bundles_page_no", system_role_bundles_pagination_isle, "process_system_role_bundles_json_data", system_role_bundles__pagination_prefix_str)

             }
           
  }
    

function mosyrender_system_role_bundles_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_system_role_bundles", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:system_role_bundles_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _system_role_bundles_payload="mosyget_&tbl=system_role_bundles&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_system_role_bundles_payload+curl_url)
  
  var _system_role_bundles_pagination_json = '{"_payload":"'+_system_role_bundles_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _system_role_bundles_payload_input = document.createElement("input");
                _system_role_bundles_payload_input.setAttribute('type', 'hidden');
                _system_role_bundles_payload_input.setAttribute('name',_txt_payload);
                _system_role_bundles_payload_input.setAttribute('id', _txt_payload);

                // Add the _system_role_bundles_payload_input element to the DOM
                document.body.appendChild(_system_role_bundles_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _system_role_bundles_pagination_json)
  mosyajax_get(_system_role_bundles_payload, response_fun, req_url);
  
  return _system_role_bundles_payload;
  
}


function mginitialize_system_role_bundles(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _system_role_bundles_payload="mosyget_&tbl=system_role_bundles&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_system_role_bundles_payload, response_fun, req_url);


}

 

///system_users data_nodes 
  var system_users_data_nodes ='{{row_count}}|{{primkey}}|{{user_id}}|{{name}}|{{email}}|{{tel}}|{{login_password}}|{{ref_id}}|{{regdate}}|{{user_no}}|{{user_pic}}|{{user_gender}}|{{last_seen}}|{{about}}|{{hive_site_id}}|{{hive_site_name}}|{{auth_token}}|{{token_status}}|{{token_expiring_in}}|{{project_id}}|{{project_name}}';


   
   ///start system_users search columns 
   
   var data_nodes_gft_system_users_str="(primkey LIKE '%{{qsystem_users}}%' OR  user_id LIKE '%{{qsystem_users}}%' OR  name LIKE '%{{qsystem_users}}%' OR  email LIKE '%{{qsystem_users}}%' OR  tel LIKE '%{{qsystem_users}}%' OR  login_password LIKE '%{{qsystem_users}}%' OR  ref_id LIKE '%{{qsystem_users}}%' OR  regdate LIKE '%{{qsystem_users}}%' OR  user_no LIKE '%{{qsystem_users}}%' OR  user_pic LIKE '%{{qsystem_users}}%' OR  user_gender LIKE '%{{qsystem_users}}%' OR  last_seen LIKE '%{{qsystem_users}}%' OR  about LIKE '%{{qsystem_users}}%' OR  hive_site_id LIKE '%{{qsystem_users}}%' OR  hive_site_name LIKE '%{{qsystem_users}}%' OR  auth_token LIKE '%{{qsystem_users}}%' OR  token_status LIKE '%{{qsystem_users}}%' OR  token_expiring_in LIKE '%{{qsystem_users}}%' OR  project_id LIKE '%{{qsystem_users}}%' OR  project_name LIKE '%{{qsystem_users}}%')";
    
    function  data_nodes_gft_system_users(qsystem_users_str)
    {
        	var data_nodes_clean_system_users_filter_str=data_nodes_gft_system_users_str.replace(/{{qsystem_users}}/g, magic_clean_str(qsystem_users_str));
            
            return  data_nodes_clean_system_users_filter_str;

    }
       ///end system_users search columns 

  function mosy_system_users_ui_node (system_users_json_data, system_users_load_to, system_users_cols_, system_users_template_ui)
  {
     ////alert(system_users_template_ui);
     var system_users_cols_fun_cols_str ="";
     
     if(typeof system_users_cols_fun_cols !== "undefined")
      {
        system_users_cols_fun_cols_str=system_users_cols_fun_cols;
        
        ///alert(system_users_cols_fun_cols)
      } 
      
     var system_users_ui__ = mosy_list_render_(system_users_json_data, system_users_cols_fun_cols_str+system_users_cols_, system_users_template_ui) 

     ////push_html(system_users_load_to, system_users_ui__)  

     push_grid_result(system_users_ui__, system_users_load_to)
  }
  
 
 ///////
 
 var system_users_auto_function= '{"cbfun":"process_system_users_json_data","_data_isle":"system_users_data_isle","_pagination_isle":"system_users_pagination_isle","_data_template":"system_users_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_system_users"}';

 
 
 ///============ auto renders 
 
 
function mosy_system_users_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", system_users_pagination_prefix_="__pgnt_system_users", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("system_users", btoa(qstr))
  }else{
    mosy_delete_get_pram("system_users")
  }
  
  if(mosy_get_param("system_users")!==undefined)
  {
    qstr=atob(mosy_get_param("system_users"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:system_users_page_no:"+mosy_limit;
  }
  
  ///system_users_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_system_users_json_data","_data_isle":"system_users_data_isle","_pagination_isle":"system_users_pagination_isle","_data_template":"system_users_data_template","_payload_str":"req","_pagination_prefix":"'+system_users_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_system_users_(response_fun," where "+gft_system_users(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, system_users_pagination_prefix_)
  
}


  
  function autoprocess_system_users_json_data(system_users_server_resp)
  {  
    mosy_system_users_ui_node(system_users_server_resp, "system_users_data_isle", system_users_data_nodes, system_users_data_template,"", "l:system_users_page_no:15")
    mosy_paginate_api(system_users_server_resp, "system_users_page_no", "system_users_pagination_isle", "15")
  }
  
  function process_system_users_json_data(system_users_server_resp, system_users_callback="")
  {  
      var system_users_data_isle="system_users_data_isle";
      var system_users_data_node_template=system_users_data_template;
      var system_users_pagination_isle="system_users_pagination_isle";
      var system_users_payload_str="";
      var system_users__pagination_prefix_str="__pgnt_system_users";
      
       ///alert(system_users_callback)
       ///alert(system_users_server_resp)
       ///console.log(system_users_server_resp)
              
      try {
        
           const system_users_jsonObject = JSON.parse(system_users_callback);
        
           system_users_data_isle=system_users_jsonObject._data_isle;
           system_users_data_node_template=window[system_users_jsonObject._data_template];
           system_users_pagination_isle=system_users_jsonObject._pagination_isle;
           system_users_payload_str=system_users_jsonObject._payload_str;
           system_users__pagination_prefix_str=system_users_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+system_users_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+system_users_callback);
        
         if(system_users_callback.indexOf(",") >= 0)
         {
              system_users_data_handler_ui =system_users_callback.split(",");                                 

              if(system_users_data_handler_ui[0]!=undefined){ system_users_data_isle=system_users_data_handler_ui[0];}

              if(system_users_data_handler_ui[1]!=undefined){system_users_data_node_template =window[system_users_data_handler_ui[1]];}

              if(system_users_data_handler_ui[2]!=undefined){ system_users_pagination_isle=system_users_data_handler_ui[2]};

              if(system_users_data_handler_ui[3]!=undefined){ system_users_payload_str=btoa(system_users_data_handler_ui[3])};
              
              if(system_users_data_handler_ui[4]!=undefined){ system_users__pagination_prefix_str=btoa(system_users_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+system_users_data_isle)
       
            mosy_system_users_ui_node(system_users_server_resp, system_users_data_isle, system_users_data_nodes, system_users_data_node_template,"", "l:system_users_page_no:"+mosy_limit)                       
            
             if(system_users_payload_str==="req")
             {
                
                mosy_paginate_api(system_users_server_resp, "system_users_page_no", system_users_pagination_isle, "process_system_users_json_data", system_users__pagination_prefix_str)

             }
           
  }
    

function mosyrender_system_users_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_system_users", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:system_users_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _system_users_payload="mosyget_&tbl=system_users&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_system_users_payload+curl_url)
  
  var _system_users_pagination_json = '{"_payload":"'+_system_users_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _system_users_payload_input = document.createElement("input");
                _system_users_payload_input.setAttribute('type', 'hidden');
                _system_users_payload_input.setAttribute('name',_txt_payload);
                _system_users_payload_input.setAttribute('id', _txt_payload);

                // Add the _system_users_payload_input element to the DOM
                document.body.appendChild(_system_users_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _system_users_pagination_json)
  mosyajax_get(_system_users_payload, response_fun, req_url);
  
  return _system_users_payload;
  
}


function mginitialize_system_users(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _system_users_payload="mosyget_&tbl=system_users&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_system_users_payload, response_fun, req_url);


}

 

///transactions data_nodes 
  var transactions_data_nodes ='{{row_count}}|{{primkey}}|{{trxkey}}|{{trx_id}}|{{trx_date}}|{{trx_month_year}}|{{trx_remark}}|{{amount}}|{{trx_type}}|{{business_id}}|{{client_id}}|{{admin_id}}|{{TransactionType}}|{{BusinessShortCode}}|{{BillRefNumber}}|{{InvoiceNumber}}|{{OrgAccountBalance}}|{{ThirdPartyTransID}}|{{MSISDN}}|{{FirstName}}|{{MiddleName}}|{{LastName}}|{{trx_msg}}|{{account_id}}|{{used_status}}|{{filter_date}}|{{flw_id}}|{{flag_state}}|{{reconciled}}|{{trx_timestamp}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start transactions search columns 
   
   var data_nodes_gft_transactions_str="(primkey LIKE '%{{qtransactions}}%' OR  trxkey LIKE '%{{qtransactions}}%' OR  trx_id LIKE '%{{qtransactions}}%' OR  trx_date LIKE '%{{qtransactions}}%' OR  trx_month_year LIKE '%{{qtransactions}}%' OR  trx_remark LIKE '%{{qtransactions}}%' OR  amount LIKE '%{{qtransactions}}%' OR  trx_type LIKE '%{{qtransactions}}%' OR  business_id LIKE '%{{qtransactions}}%' OR  client_id LIKE '%{{qtransactions}}%' OR  admin_id LIKE '%{{qtransactions}}%' OR  TransactionType LIKE '%{{qtransactions}}%' OR  BusinessShortCode LIKE '%{{qtransactions}}%' OR  BillRefNumber LIKE '%{{qtransactions}}%' OR  InvoiceNumber LIKE '%{{qtransactions}}%' OR  OrgAccountBalance LIKE '%{{qtransactions}}%' OR  ThirdPartyTransID LIKE '%{{qtransactions}}%' OR  MSISDN LIKE '%{{qtransactions}}%' OR  FirstName LIKE '%{{qtransactions}}%' OR  MiddleName LIKE '%{{qtransactions}}%' OR  LastName LIKE '%{{qtransactions}}%' OR  trx_msg LIKE '%{{qtransactions}}%' OR  account_id LIKE '%{{qtransactions}}%' OR  used_status LIKE '%{{qtransactions}}%' OR  filter_date LIKE '%{{qtransactions}}%' OR  flw_id LIKE '%{{qtransactions}}%' OR  flag_state LIKE '%{{qtransactions}}%' OR  reconciled LIKE '%{{qtransactions}}%' OR  trx_timestamp LIKE '%{{qtransactions}}%' OR  hive_site_id LIKE '%{{qtransactions}}%' OR  hive_site_name LIKE '%{{qtransactions}}%')";
    
    function  data_nodes_gft_transactions(qtransactions_str)
    {
        	var data_nodes_clean_transactions_filter_str=data_nodes_gft_transactions_str.replace(/{{qtransactions}}/g, magic_clean_str(qtransactions_str));
            
            return  data_nodes_clean_transactions_filter_str;

    }
       ///end transactions search columns 

  function mosy_transactions_ui_node (transactions_json_data, transactions_load_to, transactions_cols_, transactions_template_ui)
  {
     ////alert(transactions_template_ui);
     var transactions_cols_fun_cols_str ="";
     
     if(typeof transactions_cols_fun_cols !== "undefined")
      {
        transactions_cols_fun_cols_str=transactions_cols_fun_cols;
        
        ///alert(transactions_cols_fun_cols)
      } 
      
     var transactions_ui__ = mosy_list_render_(transactions_json_data, transactions_cols_fun_cols_str+transactions_cols_, transactions_template_ui) 

     ////push_html(transactions_load_to, transactions_ui__)  

     push_grid_result(transactions_ui__, transactions_load_to)
  }
  
 
 ///////
 
 var transactions_auto_function= '{"cbfun":"process_transactions_json_data","_data_isle":"transactions_data_isle","_pagination_isle":"transactions_pagination_isle","_data_template":"transactions_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_transactions"}';

 
 
 ///============ auto renders 
 
 
function mosy_transactions_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", transactions_pagination_prefix_="__pgnt_transactions", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("transactions", btoa(qstr))
  }else{
    mosy_delete_get_pram("transactions")
  }
  
  if(mosy_get_param("transactions")!==undefined)
  {
    qstr=atob(mosy_get_param("transactions"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:transactions_page_no:"+mosy_limit;
  }
  
  ///transactions_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_transactions_json_data","_data_isle":"transactions_data_isle","_pagination_isle":"transactions_pagination_isle","_data_template":"transactions_data_template","_payload_str":"req","_pagination_prefix":"'+transactions_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_transactions_(response_fun," where "+gft_transactions(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, transactions_pagination_prefix_)
  
}


  
  function autoprocess_transactions_json_data(transactions_server_resp)
  {  
    mosy_transactions_ui_node(transactions_server_resp, "transactions_data_isle", transactions_data_nodes, transactions_data_template,"", "l:transactions_page_no:15")
    mosy_paginate_api(transactions_server_resp, "transactions_page_no", "transactions_pagination_isle", "15")
  }
  
  function process_transactions_json_data(transactions_server_resp, transactions_callback="")
  {  
      var transactions_data_isle="transactions_data_isle";
      var transactions_data_node_template=transactions_data_template;
      var transactions_pagination_isle="transactions_pagination_isle";
      var transactions_payload_str="";
      var transactions__pagination_prefix_str="__pgnt_transactions";
      
       ///alert(transactions_callback)
       ///alert(transactions_server_resp)
       ///console.log(transactions_server_resp)
              
      try {
        
           const transactions_jsonObject = JSON.parse(transactions_callback);
        
           transactions_data_isle=transactions_jsonObject._data_isle;
           transactions_data_node_template=window[transactions_jsonObject._data_template];
           transactions_pagination_isle=transactions_jsonObject._pagination_isle;
           transactions_payload_str=transactions_jsonObject._payload_str;
           transactions__pagination_prefix_str=transactions_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+transactions_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+transactions_callback);
        
         if(transactions_callback.indexOf(",") >= 0)
         {
              transactions_data_handler_ui =transactions_callback.split(",");                                 

              if(transactions_data_handler_ui[0]!=undefined){ transactions_data_isle=transactions_data_handler_ui[0];}

              if(transactions_data_handler_ui[1]!=undefined){transactions_data_node_template =window[transactions_data_handler_ui[1]];}

              if(transactions_data_handler_ui[2]!=undefined){ transactions_pagination_isle=transactions_data_handler_ui[2]};

              if(transactions_data_handler_ui[3]!=undefined){ transactions_payload_str=btoa(transactions_data_handler_ui[3])};
              
              if(transactions_data_handler_ui[4]!=undefined){ transactions__pagination_prefix_str=btoa(transactions_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+transactions_data_isle)
       
            mosy_transactions_ui_node(transactions_server_resp, transactions_data_isle, transactions_data_nodes, transactions_data_node_template,"", "l:transactions_page_no:"+mosy_limit)                       
            
             if(transactions_payload_str==="req")
             {
                
                mosy_paginate_api(transactions_server_resp, "transactions_page_no", transactions_pagination_isle, "process_transactions_json_data", transactions__pagination_prefix_str)

             }
           
  }
    

function mosyrender_transactions_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_transactions", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:transactions_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _transactions_payload="mosyget_&tbl=transactions&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_transactions_payload+curl_url)
  
  var _transactions_pagination_json = '{"_payload":"'+_transactions_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _transactions_payload_input = document.createElement("input");
                _transactions_payload_input.setAttribute('type', 'hidden');
                _transactions_payload_input.setAttribute('name',_txt_payload);
                _transactions_payload_input.setAttribute('id', _txt_payload);

                // Add the _transactions_payload_input element to the DOM
                document.body.appendChild(_transactions_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _transactions_pagination_json)
  mosyajax_get(_transactions_payload, response_fun, req_url);
  
  return _transactions_payload;
  
}


function mginitialize_transactions(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _transactions_payload="mosyget_&tbl=transactions&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_transactions_payload, response_fun, req_url);


}

 

///user_bundle_role_functions data_nodes 
  var user_bundle_role_functions_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{bundle_id}}|{{bundle_name}}|{{role_id}}|{{role_name}}|{{remark}}|{{hive_site_id}}|{{hive_site_name}}';


   
   ///start user_bundle_role_functions search columns 
   
   var data_nodes_gft_user_bundle_role_functions_str="(primkey LIKE '%{{quser_bundle_role_functions}}%' OR  record_id LIKE '%{{quser_bundle_role_functions}}%' OR  bundle_id LIKE '%{{quser_bundle_role_functions}}%' OR  bundle_name LIKE '%{{quser_bundle_role_functions}}%' OR  role_id LIKE '%{{quser_bundle_role_functions}}%' OR  role_name LIKE '%{{quser_bundle_role_functions}}%' OR  remark LIKE '%{{quser_bundle_role_functions}}%' OR  hive_site_id LIKE '%{{quser_bundle_role_functions}}%' OR  hive_site_name LIKE '%{{quser_bundle_role_functions}}%')";
    
    function  data_nodes_gft_user_bundle_role_functions(quser_bundle_role_functions_str)
    {
        	var data_nodes_clean_user_bundle_role_functions_filter_str=data_nodes_gft_user_bundle_role_functions_str.replace(/{{quser_bundle_role_functions}}/g, magic_clean_str(quser_bundle_role_functions_str));
            
            return  data_nodes_clean_user_bundle_role_functions_filter_str;

    }
       ///end user_bundle_role_functions search columns 

  function mosy_user_bundle_role_functions_ui_node (user_bundle_role_functions_json_data, user_bundle_role_functions_load_to, user_bundle_role_functions_cols_, user_bundle_role_functions_template_ui)
  {
     ////alert(user_bundle_role_functions_template_ui);
     var user_bundle_role_functions_cols_fun_cols_str ="";
     
     if(typeof user_bundle_role_functions_cols_fun_cols !== "undefined")
      {
        user_bundle_role_functions_cols_fun_cols_str=user_bundle_role_functions_cols_fun_cols;
        
        ///alert(user_bundle_role_functions_cols_fun_cols)
      } 
      
     var user_bundle_role_functions_ui__ = mosy_list_render_(user_bundle_role_functions_json_data, user_bundle_role_functions_cols_fun_cols_str+user_bundle_role_functions_cols_, user_bundle_role_functions_template_ui) 

     ////push_html(user_bundle_role_functions_load_to, user_bundle_role_functions_ui__)  

     push_grid_result(user_bundle_role_functions_ui__, user_bundle_role_functions_load_to)
  }
  
 
 ///////
 
 var user_bundle_role_functions_auto_function= '{"cbfun":"process_user_bundle_role_functions_json_data","_data_isle":"user_bundle_role_functions_data_isle","_pagination_isle":"user_bundle_role_functions_pagination_isle","_data_template":"user_bundle_role_functions_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_user_bundle_role_functions"}';

 
 
 ///============ auto renders 
 
 
function mosy_user_bundle_role_functions_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", user_bundle_role_functions_pagination_prefix_="__pgnt_user_bundle_role_functions", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("user_bundle_role_functions", btoa(qstr))
  }else{
    mosy_delete_get_pram("user_bundle_role_functions")
  }
  
  if(mosy_get_param("user_bundle_role_functions")!==undefined)
  {
    qstr=atob(mosy_get_param("user_bundle_role_functions"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:user_bundle_role_functions_page_no:"+mosy_limit;
  }
  
  ///user_bundle_role_functions_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_user_bundle_role_functions_json_data","_data_isle":"user_bundle_role_functions_data_isle","_pagination_isle":"user_bundle_role_functions_pagination_isle","_data_template":"user_bundle_role_functions_data_template","_payload_str":"req","_pagination_prefix":"'+user_bundle_role_functions_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_user_bundle_role_functions_(response_fun," where "+gft_user_bundle_role_functions(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, user_bundle_role_functions_pagination_prefix_)
  
}


  
  function autoprocess_user_bundle_role_functions_json_data(user_bundle_role_functions_server_resp)
  {  
    mosy_user_bundle_role_functions_ui_node(user_bundle_role_functions_server_resp, "user_bundle_role_functions_data_isle", user_bundle_role_functions_data_nodes, user_bundle_role_functions_data_template,"", "l:user_bundle_role_functions_page_no:15")
    mosy_paginate_api(user_bundle_role_functions_server_resp, "user_bundle_role_functions_page_no", "user_bundle_role_functions_pagination_isle", "15")
  }
  
  function process_user_bundle_role_functions_json_data(user_bundle_role_functions_server_resp, user_bundle_role_functions_callback="")
  {  
      var user_bundle_role_functions_data_isle="user_bundle_role_functions_data_isle";
      var user_bundle_role_functions_data_node_template=user_bundle_role_functions_data_template;
      var user_bundle_role_functions_pagination_isle="user_bundle_role_functions_pagination_isle";
      var user_bundle_role_functions_payload_str="";
      var user_bundle_role_functions__pagination_prefix_str="__pgnt_user_bundle_role_functions";
      
       ///alert(user_bundle_role_functions_callback)
       ///alert(user_bundle_role_functions_server_resp)
       ///console.log(user_bundle_role_functions_server_resp)
              
      try {
        
           const user_bundle_role_functions_jsonObject = JSON.parse(user_bundle_role_functions_callback);
        
           user_bundle_role_functions_data_isle=user_bundle_role_functions_jsonObject._data_isle;
           user_bundle_role_functions_data_node_template=window[user_bundle_role_functions_jsonObject._data_template];
           user_bundle_role_functions_pagination_isle=user_bundle_role_functions_jsonObject._pagination_isle;
           user_bundle_role_functions_payload_str=user_bundle_role_functions_jsonObject._payload_str;
           user_bundle_role_functions__pagination_prefix_str=user_bundle_role_functions_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+user_bundle_role_functions_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+user_bundle_role_functions_callback);
        
         if(user_bundle_role_functions_callback.indexOf(",") >= 0)
         {
              user_bundle_role_functions_data_handler_ui =user_bundle_role_functions_callback.split(",");                                 

              if(user_bundle_role_functions_data_handler_ui[0]!=undefined){ user_bundle_role_functions_data_isle=user_bundle_role_functions_data_handler_ui[0];}

              if(user_bundle_role_functions_data_handler_ui[1]!=undefined){user_bundle_role_functions_data_node_template =window[user_bundle_role_functions_data_handler_ui[1]];}

              if(user_bundle_role_functions_data_handler_ui[2]!=undefined){ user_bundle_role_functions_pagination_isle=user_bundle_role_functions_data_handler_ui[2]};

              if(user_bundle_role_functions_data_handler_ui[3]!=undefined){ user_bundle_role_functions_payload_str=btoa(user_bundle_role_functions_data_handler_ui[3])};
              
              if(user_bundle_role_functions_data_handler_ui[4]!=undefined){ user_bundle_role_functions__pagination_prefix_str=btoa(user_bundle_role_functions_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+user_bundle_role_functions_data_isle)
       
            mosy_user_bundle_role_functions_ui_node(user_bundle_role_functions_server_resp, user_bundle_role_functions_data_isle, user_bundle_role_functions_data_nodes, user_bundle_role_functions_data_node_template,"", "l:user_bundle_role_functions_page_no:"+mosy_limit)                       
            
             if(user_bundle_role_functions_payload_str==="req")
             {
                
                mosy_paginate_api(user_bundle_role_functions_server_resp, "user_bundle_role_functions_page_no", user_bundle_role_functions_pagination_isle, "process_user_bundle_role_functions_json_data", user_bundle_role_functions__pagination_prefix_str)

             }
           
  }
    

function mosyrender_user_bundle_role_functions_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_user_bundle_role_functions", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:user_bundle_role_functions_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _user_bundle_role_functions_payload="mosyget_&tbl=user_bundle_role_functions&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_user_bundle_role_functions_payload+curl_url)
  
  var _user_bundle_role_functions_pagination_json = '{"_payload":"'+_user_bundle_role_functions_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _user_bundle_role_functions_payload_input = document.createElement("input");
                _user_bundle_role_functions_payload_input.setAttribute('type', 'hidden');
                _user_bundle_role_functions_payload_input.setAttribute('name',_txt_payload);
                _user_bundle_role_functions_payload_input.setAttribute('id', _txt_payload);

                // Add the _user_bundle_role_functions_payload_input element to the DOM
                document.body.appendChild(_user_bundle_role_functions_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _user_bundle_role_functions_pagination_json)
  mosyajax_get(_user_bundle_role_functions_payload, response_fun, req_url);
  
  return _user_bundle_role_functions_payload;
  
}


function mginitialize_user_bundle_role_functions(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _user_bundle_role_functions_payload="mosyget_&tbl=user_bundle_role_functions&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_user_bundle_role_functions_payload, response_fun, req_url);


}

 

///user_manifest_ data_nodes 
  var user_manifest__data_nodes ='{{row_count}}|{{primkey}}|{{admin_mkey}}|{{user_id}}|{{user_name}}|{{role_id}}|{{site_id}}|{{role_name}}|{{hive_site_id}}|{{hive_site_name}}|{{project_id}}|{{project_name}}';


   
   ///start user_manifest_ search columns 
   
   var data_nodes_gft_user_manifest__str="(primkey LIKE '%{{quser_manifest_}}%' OR  admin_mkey LIKE '%{{quser_manifest_}}%' OR  user_id LIKE '%{{quser_manifest_}}%' OR  user_name LIKE '%{{quser_manifest_}}%' OR  role_id LIKE '%{{quser_manifest_}}%' OR  site_id LIKE '%{{quser_manifest_}}%' OR  role_name LIKE '%{{quser_manifest_}}%' OR  hive_site_id LIKE '%{{quser_manifest_}}%' OR  hive_site_name LIKE '%{{quser_manifest_}}%' OR  project_id LIKE '%{{quser_manifest_}}%' OR  project_name LIKE '%{{quser_manifest_}}%')";
    
    function  data_nodes_gft_user_manifest_(quser_manifest__str)
    {
        	var data_nodes_clean_user_manifest__filter_str=data_nodes_gft_user_manifest__str.replace(/{{quser_manifest_}}/g, magic_clean_str(quser_manifest__str));
            
            return  data_nodes_clean_user_manifest__filter_str;

    }
       ///end user_manifest_ search columns 

  function mosy_user_manifest__ui_node (user_manifest__json_data, user_manifest__load_to, user_manifest__cols_, user_manifest__template_ui)
  {
     ////alert(user_manifest__template_ui);
     var user_manifest__cols_fun_cols_str ="";
     
     if(typeof user_manifest__cols_fun_cols !== "undefined")
      {
        user_manifest__cols_fun_cols_str=user_manifest__cols_fun_cols;
        
        ///alert(user_manifest__cols_fun_cols)
      } 
      
     var user_manifest__ui__ = mosy_list_render_(user_manifest__json_data, user_manifest__cols_fun_cols_str+user_manifest__cols_, user_manifest__template_ui) 

     ////push_html(user_manifest__load_to, user_manifest__ui__)  

     push_grid_result(user_manifest__ui__, user_manifest__load_to)
  }
  
 
 ///////
 
 var user_manifest__auto_function= '{"cbfun":"process_user_manifest__json_data","_data_isle":"user_manifest__data_isle","_pagination_isle":"user_manifest__pagination_isle","_data_template":"user_manifest__data_template","_payload_str":"req","_pagination_prefix":"__pgnt_user_manifest_"}';

 
 
 ///============ auto renders 
 
 
function mosy_user_manifest__json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", user_manifest__pagination_prefix_="__pgnt_user_manifest_", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("user_manifest_", btoa(qstr))
  }else{
    mosy_delete_get_pram("user_manifest_")
  }
  
  if(mosy_get_param("user_manifest_")!==undefined)
  {
    qstr=atob(mosy_get_param("user_manifest_"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:user_manifest__page_no:"+mosy_limit;
  }
  
  ///user_manifest__data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_user_manifest__json_data","_data_isle":"user_manifest__data_isle","_pagination_isle":"user_manifest__pagination_isle","_data_template":"user_manifest__data_template","_payload_str":"req","_pagination_prefix":"'+user_manifest__pagination_prefix_+'"}';
            
  }
  
  return mosyrender_user_manifest__(response_fun," where "+gft_user_manifest_(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, user_manifest__pagination_prefix_)
  
}


  
  function autoprocess_user_manifest__json_data(user_manifest__server_resp)
  {  
    mosy_user_manifest__ui_node(user_manifest__server_resp, "user_manifest__data_isle", user_manifest__data_nodes, user_manifest__data_template,"", "l:user_manifest__page_no:15")
    mosy_paginate_api(user_manifest__server_resp, "user_manifest__page_no", "user_manifest__pagination_isle", "15")
  }
  
  function process_user_manifest__json_data(user_manifest__server_resp, user_manifest__callback="")
  {  
      var user_manifest__data_isle="user_manifest__data_isle";
      var user_manifest__data_node_template=user_manifest__data_template;
      var user_manifest__pagination_isle="user_manifest__pagination_isle";
      var user_manifest__payload_str="";
      var user_manifest___pagination_prefix_str="__pgnt_user_manifest_";
      
       ///alert(user_manifest__callback)
       ///alert(user_manifest__server_resp)
       ///console.log(user_manifest__server_resp)
              
      try {
        
           const user_manifest__jsonObject = JSON.parse(user_manifest__callback);
        
           user_manifest__data_isle=user_manifest__jsonObject._data_isle;
           user_manifest__data_node_template=window[user_manifest__jsonObject._data_template];
           user_manifest__pagination_isle=user_manifest__jsonObject._pagination_isle;
           user_manifest__payload_str=user_manifest__jsonObject._payload_str;
           user_manifest___pagination_prefix_str=user_manifest__jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+user_manifest__callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+user_manifest__callback);
        
         if(user_manifest__callback.indexOf(",") >= 0)
         {
              user_manifest__data_handler_ui =user_manifest__callback.split(",");                                 

              if(user_manifest__data_handler_ui[0]!=undefined){ user_manifest__data_isle=user_manifest__data_handler_ui[0];}

              if(user_manifest__data_handler_ui[1]!=undefined){user_manifest__data_node_template =window[user_manifest__data_handler_ui[1]];}

              if(user_manifest__data_handler_ui[2]!=undefined){ user_manifest__pagination_isle=user_manifest__data_handler_ui[2]};

              if(user_manifest__data_handler_ui[3]!=undefined){ user_manifest__payload_str=btoa(user_manifest__data_handler_ui[3])};
              
              if(user_manifest__data_handler_ui[4]!=undefined){ user_manifest___pagination_prefix_str=btoa(user_manifest__data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+user_manifest__data_isle)
       
            mosy_user_manifest__ui_node(user_manifest__server_resp, user_manifest__data_isle, user_manifest__data_nodes, user_manifest__data_node_template,"", "l:user_manifest__page_no:"+mosy_limit)                       
            
             if(user_manifest__payload_str==="req")
             {
                
                mosy_paginate_api(user_manifest__server_resp, "user_manifest__page_no", user_manifest__pagination_isle, "process_user_manifest__json_data", user_manifest___pagination_prefix_str)

             }
           
  }
    

function mosyrender_user_manifest__(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_user_manifest_", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:user_manifest__page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _user_manifest__payload="mosyget_&tbl=user_manifest_&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_user_manifest__payload+curl_url)
  
  var _user_manifest__pagination_json = '{"_payload":"'+_user_manifest__payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _user_manifest__payload_input = document.createElement("input");
                _user_manifest__payload_input.setAttribute('type', 'hidden');
                _user_manifest__payload_input.setAttribute('name',_txt_payload);
                _user_manifest__payload_input.setAttribute('id', _txt_payload);

                // Add the _user_manifest__payload_input element to the DOM
                document.body.appendChild(_user_manifest__payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _user_manifest__pagination_json)
  mosyajax_get(_user_manifest__payload, response_fun, req_url);
  
  return _user_manifest__payload;
  
}


function mginitialize_user_manifest_(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _user_manifest__payload="mosyget_&tbl=user_manifest_&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_user_manifest__payload, response_fun, req_url);


}

 

///withdrawal_requests data_nodes 
  var withdrawal_requests_data_nodes ='{{row_count}}|{{primkey}}|{{record_id}}|{{affiliate}}|{{amount}}|{{date_requested}}|{{approval_status}}|{{amount_sent}}|{{payment_ref}}|{{date_sent}}|{{remark}}';


   
   ///start withdrawal_requests search columns 
   
   var data_nodes_gft_withdrawal_requests_str="(primkey LIKE '%{{qwithdrawal_requests}}%' OR  record_id LIKE '%{{qwithdrawal_requests}}%' OR  affiliate LIKE '%{{qwithdrawal_requests}}%' OR  amount LIKE '%{{qwithdrawal_requests}}%' OR  date_requested LIKE '%{{qwithdrawal_requests}}%' OR  approval_status LIKE '%{{qwithdrawal_requests}}%' OR  amount_sent LIKE '%{{qwithdrawal_requests}}%' OR  payment_ref LIKE '%{{qwithdrawal_requests}}%' OR  date_sent LIKE '%{{qwithdrawal_requests}}%' OR  remark LIKE '%{{qwithdrawal_requests}}%')";
    
    function  data_nodes_gft_withdrawal_requests(qwithdrawal_requests_str)
    {
        	var data_nodes_clean_withdrawal_requests_filter_str=data_nodes_gft_withdrawal_requests_str.replace(/{{qwithdrawal_requests}}/g, magic_clean_str(qwithdrawal_requests_str));
            
            return  data_nodes_clean_withdrawal_requests_filter_str;

    }
       ///end withdrawal_requests search columns 

  function mosy_withdrawal_requests_ui_node (withdrawal_requests_json_data, withdrawal_requests_load_to, withdrawal_requests_cols_, withdrawal_requests_template_ui)
  {
     ////alert(withdrawal_requests_template_ui);
     var withdrawal_requests_cols_fun_cols_str ="";
     
     if(typeof withdrawal_requests_cols_fun_cols !== "undefined")
      {
        withdrawal_requests_cols_fun_cols_str=withdrawal_requests_cols_fun_cols;
        
        ///alert(withdrawal_requests_cols_fun_cols)
      } 
      
     var withdrawal_requests_ui__ = mosy_list_render_(withdrawal_requests_json_data, withdrawal_requests_cols_fun_cols_str+withdrawal_requests_cols_, withdrawal_requests_template_ui) 

     ////push_html(withdrawal_requests_load_to, withdrawal_requests_ui__)  

     push_grid_result(withdrawal_requests_ui__, withdrawal_requests_load_to)
  }
  
 
 ///////
 
 var withdrawal_requests_auto_function= '{"cbfun":"process_withdrawal_requests_json_data","_data_isle":"withdrawal_requests_data_isle","_pagination_isle":"withdrawal_requests_pagination_isle","_data_template":"withdrawal_requests_data_template","_payload_str":"req","_pagination_prefix":"__pgnt_withdrawal_requests"}';

 
 
 ///============ auto renders 
 
 
function mosy_withdrawal_requests_json_data_list(qstr="", response_fun="", and_query="", function_cols="", pagination="", withdrawal_requests_pagination_prefix_="__pgnt_withdrawal_requests", colstr="*")
{
  
  /*if(qstr!="")
  {
   mosy_update_get_param("withdrawal_requests", btoa(qstr))
  }else{
    mosy_delete_get_pram("withdrawal_requests")
  }
  
  if(mosy_get_param("withdrawal_requests")!==undefined)
  {
    qstr=atob(mosy_get_param("withdrawal_requests"))
  }
  */ 
  var and_query_str="";
  
  if(and_query!="")
  {
    and_query_str=" and "+and_query;   
  }
  
  if(pagination==="")
  {
    pagination="l:withdrawal_requests_page_no:"+mosy_limit;
  }
  
  ///withdrawal_requests_data_template

  
  if(response_fun=="")
  {
      		response_fun='{"cbfun":"process_withdrawal_requests_json_data","_data_isle":"withdrawal_requests_data_isle","_pagination_isle":"withdrawal_requests_pagination_isle","_data_template":"withdrawal_requests_data_template","_payload_str":"req","_pagination_prefix":"'+withdrawal_requests_pagination_prefix_+'"}';
            
  }
  
  return mosyrender_withdrawal_requests_(response_fun," where "+gft_withdrawal_requests(qstr)+" "+and_query_str+"  order by primkey desc ",function_cols,colstr,pagination, withdrawal_requests_pagination_prefix_)
  
}


  
  function autoprocess_withdrawal_requests_json_data(withdrawal_requests_server_resp)
  {  
    mosy_withdrawal_requests_ui_node(withdrawal_requests_server_resp, "withdrawal_requests_data_isle", withdrawal_requests_data_nodes, withdrawal_requests_data_template,"", "l:withdrawal_requests_page_no:15")
    mosy_paginate_api(withdrawal_requests_server_resp, "withdrawal_requests_page_no", "withdrawal_requests_pagination_isle", "15")
  }
  
  function process_withdrawal_requests_json_data(withdrawal_requests_server_resp, withdrawal_requests_callback="")
  {  
      var withdrawal_requests_data_isle="withdrawal_requests_data_isle";
      var withdrawal_requests_data_node_template=withdrawal_requests_data_template;
      var withdrawal_requests_pagination_isle="withdrawal_requests_pagination_isle";
      var withdrawal_requests_payload_str="";
      var withdrawal_requests__pagination_prefix_str="__pgnt_withdrawal_requests";
      
       ///alert(withdrawal_requests_callback)
       ///alert(withdrawal_requests_server_resp)
       ///console.log(withdrawal_requests_server_resp)
              
      try {
        
           const withdrawal_requests_jsonObject = JSON.parse(withdrawal_requests_callback);
        
           withdrawal_requests_data_isle=withdrawal_requests_jsonObject._data_isle;
           withdrawal_requests_data_node_template=window[withdrawal_requests_jsonObject._data_template];
           withdrawal_requests_pagination_isle=withdrawal_requests_jsonObject._pagination_isle;
           withdrawal_requests_payload_str=withdrawal_requests_jsonObject._payload_str;
           withdrawal_requests__pagination_prefix_str=withdrawal_requests_jsonObject._pagination_prefix;

           ///console.log("paginate == : valid JSON"+withdrawal_requests_callback);
        
      } catch (error) {
      
        ///console.error("Invalid JSON:", error);
        ///console.log("paginate == : invalid"+withdrawal_requests_callback);
        
         if(withdrawal_requests_callback.indexOf(",") >= 0)
         {
              withdrawal_requests_data_handler_ui =withdrawal_requests_callback.split(",");                                 

              if(withdrawal_requests_data_handler_ui[0]!=undefined){ withdrawal_requests_data_isle=withdrawal_requests_data_handler_ui[0];}

              if(withdrawal_requests_data_handler_ui[1]!=undefined){withdrawal_requests_data_node_template =window[withdrawal_requests_data_handler_ui[1]];}

              if(withdrawal_requests_data_handler_ui[2]!=undefined){ withdrawal_requests_pagination_isle=withdrawal_requests_data_handler_ui[2]};

              if(withdrawal_requests_data_handler_ui[3]!=undefined){ withdrawal_requests_payload_str=btoa(withdrawal_requests_data_handler_ui[3])};
              
              if(withdrawal_requests_data_handler_ui[4]!=undefined){ withdrawal_requests__pagination_prefix_str=btoa(withdrawal_requests_data_handler_ui[4])};
              
         }       
        
      }

       ///alert(" dtisle == "+withdrawal_requests_data_isle)
       
            mosy_withdrawal_requests_ui_node(withdrawal_requests_server_resp, withdrawal_requests_data_isle, withdrawal_requests_data_nodes, withdrawal_requests_data_node_template,"", "l:withdrawal_requests_page_no:"+mosy_limit)                       
            
             if(withdrawal_requests_payload_str==="req")
             {
                
                mosy_paginate_api(withdrawal_requests_server_resp, "withdrawal_requests_page_no", withdrawal_requests_pagination_isle, "process_withdrawal_requests_json_data", withdrawal_requests__pagination_prefix_str)

             }
           
  }
    

function mosyrender_withdrawal_requests_(response_fun="",where_str="",function_cols="", colstr="*", pagination="", _txt_payload="__pgnt_withdrawal_requests", req_url="")
{
   
  if(pagination==="")
  {
    pagination="l:withdrawal_requests_page_no:"+mosy_limit;
  }

  var pagination_label="pagination_label";
  
  if(pagination.indexOf(":") >= 0)
  {
   
   pagination_label=pagination.split(":")[1];
  
  }

  var requested_page_label="";
  
  if(mosy_get_param(pagination_label)!==undefined)
  {
   requested_page_label=mosy_get_param(pagination_label);
  }
      
  var _withdrawal_requests_payload="mosyget_&tbl=withdrawal_requests&colstr="+btoa(colstr)+"&where_str="+btoa(where_str)+"&pagination="+pagination+"&function_cols="+btoa(function_cols)+"&"+pagination_label+"="+requested_page_label;

  //console.log(_withdrawal_requests_payload+curl_url)
  
  var _withdrawal_requests_pagination_json = '{"_payload":"'+_withdrawal_requests_payload+'", "pagination_label":"'+pagination_label+'", "response_attr":'+response_fun+'}';
  
       if (document.getElementById(_txt_payload) ===null) 
       {
                  const _withdrawal_requests_payload_input = document.createElement("input");
                _withdrawal_requests_payload_input.setAttribute('type', 'hidden');
                _withdrawal_requests_payload_input.setAttribute('name',_txt_payload);
                _withdrawal_requests_payload_input.setAttribute('id', _txt_payload);

                // Add the _withdrawal_requests_payload_input element to the DOM
                document.body.appendChild(_withdrawal_requests_payload_input);
                
      }
      
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
  push_newval(_txt_payload, _withdrawal_requests_pagination_json)
  mosyajax_get(_withdrawal_requests_payload, response_fun, req_url);
  
  return _withdrawal_requests_payload;
  
}


function mginitialize_withdrawal_requests(reqkey, response_fun="",req_url="")
{
  
    
     if(response_fun=="")
     {
       response_fun="mosy_ui_data_nodes";
     }
     
     ////alert(response_fun)
     var _withdrawal_requests_payload="mosyget_&tbl=withdrawal_requests&colstr="+btoa("*")+"&where_str="+btoa(" where primkey ='"+reqkey+"' ")+"&pagination=l&function_cols=";
   
      if(req_url=="")
      {
      	req_url=curl_url
      }
      
     mosyajax_get(_withdrawal_requests_payload, response_fun, req_url);


}

 


 

function mosy_list_render_(json_data, cols_, template_ui)
{
  ///console.log(json_data)
  var parse_serv_json=JSON.parse(json_data);
   
  var str_node = "";
    
  var re = new RegExp(cols_, 'gi');

  for(datanode of parse_serv_json.data)
    {
      str_node+= template_ui.replace(re, function (node) {
     	return datanode[node.replace(/[{{}}]/g, "")];;
      }); 
    }
  
  return str_node;
}


function mosy_ui_data_nodes(json_server_response) 
{
    
    ///alert(json_server_response);
    
    var json_decoded_str=JSON.parse(json_server_response).data[0];
    
    ///console.log("  initialize response -- "+json_decoded_str);
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) 
      {
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
    
function  mosy_paginate_api(server_resp, pagination_label, push_to, response_fun, _txt_payload)
{    
  var paginate_count=JSON.parse(server_resp);
 
  mosy_paginate_ui(paginate_count.page_count, push_to, _txt_payload)
   
}


function mosy_paginate_ui(totalPages, push_to, payload_source, currentPage=1)
{
    ///alert("af -- "+currentPage+push_to)
    ///let currentPage = 1; // Current page number
    const maxPaginationButtons = 7; // Maximum number of pagination buttons to display
    const halfMaxPaginationButtons = Math.floor(maxPaginationButtons / 2); // Half of maximum number of pagination buttons
    
    // Calculate total number of pages
    ////const totalPages = Math.ceil(totalRecords / recordsPerPage);
  
      let linkHTML = `
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">        
        `;
      // Generate "Previous" link
      if (currentPage > 1) {
        linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${currentPage - 1},'${push_to}', '${totalPages}', '${payload_source}', '${payload_source}')"> << </a></li>`;
      } else {
        linkHTML += `<li class="page-item disabled"><a class="page-link cpointer "  > << </a></li>`;
      }

      // Generate "First" link
      if (currentPage > 1) {
        linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(1,'${push_to}', '${totalPages}', '${payload_source}')">First</a></li>`;
      } else {
        linkHTML += `<li class="page-item disabled"><a class="page-link cpointer "  >First</a></li>`;
      }      
      // Generate numbered links
      let startPage = 1;
      let endPage = totalPages;
      if (totalPages > maxPaginationButtons) {
        if (currentPage <= halfMaxPaginationButtons) {
          endPage = maxPaginationButtons;
        } else if (currentPage >= totalPages - halfMaxPaginationButtons) {
          startPage = totalPages - maxPaginationButtons + 1;
        } else {
          startPage = currentPage - halfMaxPaginationButtons;
          endPage = currentPage + halfMaxPaginationButtons;
        }
        if (startPage > 1) {
          linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${startPage - 1},'${push_to}', '${totalPages}', '${payload_source}')">...</a></li>`;
        }
        for (let i = startPage; i <= endPage; i++) {
          if (i === currentPage) {
            linkHTML += `<li class="page-item active"><a class="page-link cpointer "  >${i}</a></li>`;
          } else {
            linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${i},'${push_to}', '${totalPages}', '${payload_source}')">${i}</a></li>`;
          }
        }
        if (endPage < totalPages) {
          linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${endPage + 1},'${push_to}', '${totalPages}', '${payload_source}')">...</a></li>`;
        }
      } else {
        for (let i = startPage; i <= endPage; i++) {
          if (i === currentPage) {
            linkHTML += `<li class="page-item active"><a class="page-link cpointer "  >${i}</a></li>`;
          } else {
            linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${i},'${push_to}', '${totalPages}', '${payload_source}')">${i}</a></li>`;
          }
        }
      }

      // Generate "Last" link
      if (currentPage < totalPages) {
        linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${totalPages},'${push_to}', '${totalPages}', '${payload_source}')">Last</a></li>`;
      } else {
        linkHTML += `<li class="page-item disabled"><a class="page-link cpointer "  >Last</a></li>`;
      }


      // Generate "Next" link
      if (currentPage < totalPages) {
        linkHTML += `<li class="page-item"><a class="page-link cpointer "   onclick="mosy_navigate_pagination(${currentPage + 1},'${push_to}', '${totalPages}', '${payload_source}')"> >> </a></li>`;
      } else {
        linkHTML += `<li class="page-item disabled"><a class="page-link cpointer "  > >> </a></li>`;
      }
      linkHTML +=`</ul>
        </nav>`;

     push_html(push_to, linkHTML)

      return linkHTML;
    
}

function mosy_navigate_pagination(page, push_to, total_pages, payload_source, response_fun) 
{
   currentPage = page+1;
   
   ///alert(response_fun)
   
   var parse_serv_json=JSON.parse(get_newval(payload_source));

   var pagination_label = parse_serv_json.pagination_label;
      
   ////alert(payload_source+" -- "+parse_serv_json._payload)
   
   
   var paginate_payload = (parse_serv_json._payload).replace("l:"+pagination_label+":"+mosy_limit, "l:"+pagination_label+":"+mosy_limit+":"+page+"")


   var removed_regen_pagination =delete (parse_serv_json.response_attr)._payload_str;
   
   var response_function =(JSON.stringify(parse_serv_json.response_attr))
   
  ///alert(paginate_payload +" -- "+pagination_label)
  
  ////alert(response_function)
  
   ///push_newval(payload_source, paginate_payload)
   
   mosyajax_get(paginate_payload, response_function, curl_url);
  
  mosy_paginate_ui(total_pages, push_to, payload_source, page)
  
}


