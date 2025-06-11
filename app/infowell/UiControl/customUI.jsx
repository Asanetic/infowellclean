import { LiveSearchDropdown } from "./componentControl"
import { closeMosyCard, MosyCard } from "../../components/MosyCard";

import { magicRandomStr } from "../../MosyUtils/hiveUtils";
import { customEventHandler } from "../../../../octaneorbit/app/octaneorbit/DataControl/customDataFunction";

//dynamic live search / organic live search 
export function MosyLiveSearch({
    api = "",
    tableName = "",
    displayField = "",
    valueField = "",
    actionName = "",
    actionData = {},
    title = "Search",
    onSelectFull = () => {},
  }) {
    let finalValeField = valueField || displayField;
  
    function handleOnSelect(dataRes) {
      // Call full payload regardless

      console.log(`Live search `, actionData , dataRes , actionName)
      onSelectFull(dataRes);
  
      // Perform mosyfilter logic
      if (actionName === "mosyfilter") {
        const router = actionData?.router;
        const qstrTemplate = actionData?.qstr || "";
        const stateSetters = actionData?.stateSetters
  
        // 💡 Replace placeholders like {{record_id}} with values from dataRes
        const newQstr = qstrTemplate.replace(/{{(.*?)}}/g, (match, fieldName) => {
          return (dataRes?.[fieldName] || "");
        });
        //console.log(`Live search `, newQstr , )

        // 🌐 Redirect with updated query string
        if (router && newQstr) {
            //router.push(`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`);
            window.location=`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`;
            stateSetters.setLocalEventSignature(magicRandomStr())
          closeMosyCard()
        }

        //customEventHandler(actionData)
      }

      if (actionName === "load_profile") {
        const router = actionData?.router;
        const qstrTemplate = actionData?.token || "";
        const stateSetters = actionData?.stateSetters
  
        // 💡 Replace placeholders like {{record_id}} with values from dataRes
        const newQstr = qstrTemplate.replace(/{{(.*?)}}/g, (match, fieldName) => {
          return (dataRes?.[fieldName] || "");
        });
  
        // 🌐 Redirect with updated query string
        if (router && newQstr) {
            //router.push(`${actionData?.path}?${tableName}_mosyfilter=${btoa(newQstr)}`);
            window.location=`${actionData?.path}?${tableName}_uptoken=${btoa(newQstr)}`;
            stateSetters.setLocalEventSignature(magicRandomStr())
          closeMosyCard()
        }

        //customEventHandler(actionData)
      }      
    }
  
    // Render your card and LiveSearchDropdown
    MosyCard(
      "",
      <>
        <div className="col-md-12 text-left h4 m-0 pt-2 pl-0 pr-0 pb-2">
          <span className="m-0 p-0 label_text">{title}</span>
        </div>
  
        <LiveSearchDropdown
          apiEndpoint={api}
          tblName={tableName}
          inputName="qdata"
          hiddenInputName="qdataInput"
          valueField={finalValeField}
          displayField={displayField}
          label=""
          onSelect={(id) => console.log("Just the ID:", id)}
          onSelectFull={handleOnSelect}
          defaultColSize="col-md-12 hive_data_cell text-left m-0 p-0"
          context={{ hostParent: "hostParent" }}
          labelClassName="d-none"
        />
      </>
    );
  }
  