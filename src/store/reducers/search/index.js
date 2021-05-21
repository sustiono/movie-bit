import { actionTypes } from "../../constanta";

const initialState = {
  keyword: "",
  searchStatus: false,
  suggestions: null,
  results: null,
  onPaging: false,
  isEmpty: false,
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
    case actionTypes.SEARCH.SET_RESULTS:
      newState = { ...state, results: action.results };
      return newState;
    case actionTypes.SEARCH.SET_SUGGESTIONS:
      newState = { ...state, suggestions: action.suggestions };
      return newState;
    case actionTypes.SEARCH.SET_ON_PAGING:
      newState = { ...state, onPaging: action.onPaging };
      return newState;
    case actionTypes.SEARCH.SET_IS_EMPTY:
      newState = { ...state, isEmpty: action.isEmpty };
      return newState;
    default:
      return state;
  }
};

export default search;
