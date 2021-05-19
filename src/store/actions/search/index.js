import axios from "axios";
import { batch } from "react-redux";
import { actionTypes } from "../../constanta";
import { getMovies } from "../../../api";

const onSetSearchStatus = (searchStatus) => {
  return {
    searchStatus,
    type: actionTypes.SEARCH.SET_SEARCH_STATUS,
  };
};

const onSetKeyword = (keyword) => {
  return {
    keyword,
    type: actionTypes.SEARCH.SET_KEYWORD,
  };
};

const setSuggestions = (suggestions) => {
  return {
    suggestions,
    type: actionTypes.SEARCH.SET_SUGGESTION,
  };
};

const onSearchMovies = (keyword) => {
  return async (dispatch, getState) => {
    try {
      batch(() => {
        dispatch(onSetKeyword(keyword));
        dispatch(onSetSearchStatus(true));
      });

      getMovies(keyword)
        .then(function (response) {
          const { data } = response;
          const suggestions = data.Error ? null : data;
          batch(() => {
            dispatch(setSuggestions(suggestions));
            dispatch(onSetSearchStatus(false));
          });
        })
        .catch(function (error) {
          dispatch(onSetSearchStatus(false));
          console.log("Error search movie:", error);
        });
    } catch (error) {
      console.log("Error search movie:", error);
    }
  };
};

export { onSearchMovies, onSetKeyword, setSuggestions };
