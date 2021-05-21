import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { InputSearch } from "../../components";
import {
  onSearcSuggestions,
  setSuggestions,
  onSetKeyword,
  onSearchMovies,
} from "../../store/actions/search";

const Home = () => {
  const dispatch = useDispatch();
  const { suggestions, results, keyword, searchStatus, isEmpty } = useSelector(
    (state) => state.search
  );
  const delayedOnChange = useCallback(
    _.debounce((q) => {
      if (q.length >= 3) dispatch(onSearcSuggestions(q));
    }, 500),
    []
  );

  useEffect(() => {
    if (keyword) {
      dispatch(onSetKeyword(""));
    }
    if (suggestions) {
      dispatch(setSuggestions(null));
    }
    if (results) {
      dispatch(onSearchMovies(null));
    }
    return () => {
      return;
    };
  }, []);

  return (
    <>
      <InputSearch
        isEmpty={isEmpty}
        keyword={keyword}
        suggestions={suggestions}
        searchStatus={searchStatus}
        onChange={(e) => delayedOnChange(e.target.value)}
      />
    </>
  );
};

export default Home;
