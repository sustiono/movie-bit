import { actionTypes } from "../../constanta";

const initialState = {
  keyword: "",
  searchStatus: false,
  isEmpty: false,
  suggestions: null,
};
let newState;
const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH.SET_KEYWORD:
      newState = { ...state, keyword: action.keyword };
      return newState;
    case actionTypes.SEARCH.SET_SEARCH_STATUS:
      newState = { ...state, searchStatus: action.searchStatus };
      return newState;
    case actionTypes.SEARCH.SET_SUGGESTION:
      newState = { ...state, suggestions: action.suggestions };
      return newState;
    default:
      return state;
  }
};

export default search;
