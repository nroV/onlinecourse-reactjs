import * as ACTION_TYPE from '../action/action_type'


export function Coursereducer(state, action) {
    switch (action.type) {
      case  ACTION_TYPE.GET_COURSE:
        return;
  
      case  ACTION_TYPE.SEARCH_COURSE:
        return [...action.payload.searchResults];
  
      case  ACTION_TYPE.EDIT_COURSE:
        return [...action.payload];
  
      case  ACTION_TYPE.POST_COURSE:
        return [...state, action.payload];
  
      case  ACTION_TYPE.DELETE_COURSE:
        return action.payload;
  
      default:
        return state;
    }
  }