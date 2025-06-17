
import {mosyStateManager} from '../../../MosyUtils/hiveUtils';

const defaultReadlistStateDefaults = {

  //state management for list page
  readlistListData : [],
  readlistListPageCount : 1,
  readlistLoading: true,  
  parentUseEffectKey : 'loadReadlistList',
  localEventSignature: 'loadReadlistList',
  readlistQuerySearchStr: '',

  
  //for profile page
  infosnippetsNode : {},
  readlistActionStatus : 'add_infosnippets',
  paramreadlistUptoken  : '',
  snackMessage : '',
  snackOnDone : ()=>()=>{},
  readlistUptoken:'',
  readlistNode : {},
  
  //dataScript
  readlistCustomProfileQuery : '',
  
  
  // ... other base defaults
};

export function useReadlistState(overrides = {}) {
  const combinedDefaults = { ...defaultReadlistStateDefaults, ...overrides };
  return mosyStateManager(combinedDefaults);
}

