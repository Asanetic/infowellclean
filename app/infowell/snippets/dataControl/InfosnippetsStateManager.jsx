
import {mosyStateManager} from '../../../MosyUtils/hiveUtils';

const defaultInfosnippetsStateDefaults = {

  //state management for list page
  infosnippetsListData : [],
  infosnippetsListPageCount : 1,
  infosnippetsLoading: true,  
  parentUseEffectKey : 'loadInfosnippetsList',
  localEventSignature: 'loadInfosnippetsList',
  infosnippetsQuerySearchStr: '',

  
  //for profile page
  infosnippetsNode : {},
  infosnippetsActionStatus : 'add_infosnippets',
  paraminfosnippetsUptoken  : '',
  snackMessage : '',
  snackOnDone : ()=>()=>{},
  infosnippetsUptoken:'',
  infosnippetsNode : {},
  
  //dataScript
  infosnippetsCustomProfileQuery : '',
  
  
  // ... other base defaults
};

export function useInfosnippetsState(overrides = {}) {
  const combinedDefaults = { ...defaultInfosnippetsStateDefaults, ...overrides };
  return mosyStateManager(combinedDefaults);
}

