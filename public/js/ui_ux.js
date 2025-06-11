    //<!--next_ajax_str-->
var calc_ui=`
<div class="row justify-content-center m-0 p-0 col-md-12">
 <input typ="text" class="col-md-12 bg-light p-3 border mb-3 h1 text-right" title="Click To Clear Screen" id="screen"/>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+1)">1</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+2)">2</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+3)">3</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+4)">4</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+5)">5</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+6)">6</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+7)">7</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+8)">8</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+9)">9</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+0)">0</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'*')">*</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'+')">+</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'-')">-</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'/')">/</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'='+eval(get_newval('screen')));push_newval('notes', get_newval('notes')+'|'+get_newval('screen'))">=</div>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  <input class="border-0" style="" id="notes" placeholder="notes"></input> </div>
  </div>
</div>  
  
  
`;