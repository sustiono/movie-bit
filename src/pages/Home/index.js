import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { InputSearch } from "../../components";
import {
  onSearcSuggestions,
  setSuggestions,
  onSetKeyword,
} from "../../store/actions/search";

const Home = () => {
  const dispatch = useDispatch();
  const { suggestions, keyword, searchStatus } = useSelector(
    (state) => state.search
  );
  const delayedOnChange = useCallback(
    _.debounce((q) => {
      if (!q.length || q.length >= 3) dispatch(onSearcSuggestions(q));
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
    return () => {
      return;
    };
  }, []);

  return (
    <>
      <InputSearch
        keyword={keyword}
        suggestions={suggestions}
        searchStatus={searchStatus}
        onChange={(e) => delayedOnChange(e.target.value)}
      />
    </>
  );
};

export default Home;
