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

const setResults = (results) => {
  return {
    results,
    type: actionTypes.SEARCH.SET_RESULTS,
  };
};

const setSuggestions = (suggestions) => {
  return {
    suggestions,
    type: actionTypes.SEARCH.SET_SUGGESTIONS,
  };
};

const onSearcSuggestions = (keyword) => {
  return async (dispatch, getState) => {
    try {
      batch(() => {
        dispatch(onSetKeyword(keyword));
        dispatch(onSetSearchStatus(true));
      });

      getMovies(keyword)
        .then(function (response) {
          const { data } = response;
          const results = data.Error ? null : data;
          batch(() => {
            dispatch(setSuggestions(results));
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

const onSearchMovies = (keyword) => {
  return async (dispatch, getState) => {
    try {
      getMovies(keyword)
        .then(function (response) {
          const { data } = response;
          const results = data.Error ? null : data;
          dispatch(setResults(results));
        })
        .catch(function (error) {
          console.log("Error search movie:", error);
        });
    } catch (error) {
      console.log("Error search movie:", error);
    }
  };
};

const setOnPaging = (onPaging) => {
  return {
    onPaging,
    type: actionTypes.SEARCH.SET_ON_PAGING,
  };
};

const onFetchNext = (keyword, page) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setOnPaging(true));
      getMovies(keyword, page)
        .then(function (response) {
          const { data } = response;
          const currentResults = getState().search.results;
          let results;
          if (data.Search) {
            results = {
              ...currentResults,
              Search: [...currentResults.Search].concat(data.Search),
            };
          }
          batch(() => {
            dispatch(setResults(results));
            dispatch(setOnPaging(false));
          });
        })
        .catch(function (error) {
          dispatch(setOnPaging(false));
          console.log("Error fetch movie:", error);
        });
    } catch (error) {
      console.log("Error fetch movie:", error);
    }
  };
};

export {
  onSearchMovies,
  onSetKeyword,
  setResults,
  onFetchNext,
  onSearcSuggestions,
  setSuggestions,
};
