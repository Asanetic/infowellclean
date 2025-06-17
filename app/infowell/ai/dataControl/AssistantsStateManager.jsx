
import {mosyStateManager} from '../../../MosyUtils/hiveUtils';

const defaultAssistantsStateDefaults = {

  //state management for list page
  assistantsListData : [],
  assistantsListPageCount : 1,
  assistantsLoading: true,  
  parentUseEffectKey : 'loadAssistantsList',
  localEventSignature: 'loadAssistantsList',
  assistantsQuerySearchStr: '',

  
  //for profile page
  assistantsNode : {},
  assistantsActionStatus : 'add_assistants',
  paramassistantsUptoken  : '',
  snackMessage : '',
  snackOnDone : ()=>()=>{},
  assistantsUptoken:'',
  assistantsNode : {},
  
  //dataScript
  assistantsCustomProfileQuery : '',
  
  
  // ... other base defaults
};

export function useAssistantsState(overrides = {}) {
  const combinedDefaults = { ...defaultAssistantsStateDefaults, ...overrides };
  return mosyStateManager(combinedDefaults);
}

