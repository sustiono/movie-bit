import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { InputSearch } from "../../components";
import {
  onSearchMovies,
  setSuggestions,
  onSetKeyword,
} from "../../store/actions/search";

const Home = () => {
  const dispatch = useDispatch();
  const { suggestions, keyword: kw } = useSelector((state) => state.search);
  const [keyword, setKeyword] = useState("");
  const delayedOnChange = useCallback(
    _.debounce((q) => dispatch(onSearchMovies(q)), 500),
    []
  );

  useEffect(() => {
    if (kw) {
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
      <InputSearch onChange={(e) => delayedOnChange(e.target.value)} />
    </>
  );
};

export default Home;
