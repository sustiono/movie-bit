import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { InputSearch } from "../../components";
import {
  onSearchMovies,
  setResults,
  onSetKeyword,
} from "../../store/actions/search";

const Home = () => {
  const dispatch = useDispatch();
  const { results, keyword, searchStatus } = useSelector(
    (state) => state.search
  );
  const delayedOnChange = useCallback(
    _.debounce((q) => {
      if (!q.length || q.length >= 3) dispatch(onSearchMovies(q));
    }, 500),
    []
  );

  useEffect(() => {
    if (keyword) {
      dispatch(onSetKeyword(""));
    }
    if (results) {
      dispatch(setResults(null));
    }
    return () => {
      return;
    };
  }, []);

  return (
    <>
      <InputSearch
        keyword={keyword}
        results={results}
        searchStatus={searchStatus}
        onChange={(e) => delayedOnChange(e.target.value)}
      />
    </>
  );
};

export default Home;
