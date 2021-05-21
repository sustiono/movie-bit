import { useState, useEffect, useRef } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import MovieNight from "../../assets/images/movie-night.png";
import Suggest from "./Suggest";
import { history } from "../../utils";
import { onSearchMovies, onSearcSuggestions } from "../../store/actions/search";

const InputSearch = ({
  keyword,
  isEmpty,
  onChange,
  suggestions,
  searchStatus,
  showImage = true,
  formClass = "mt-16 px-5",
}) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(keyword);
  const [showSuggest, setShowSuggest] = useState(false);

  const location = useLocation();
  const targetRef = useRef();

  useEffect(() => {
    setKey(keyword);
    return () => {
      return;
    };
  }, [keyword]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (key.length >= 3) {
      if (location.pathname !== `/search/${key}`) {
        dispatch(onSearchMovies(key));
        setShowSuggest(false);
        targetRef.current.blur();
      }
      history.push(`/search/${key}`);
    }
  };

  return (
    <form
      className={`flex flex-col items-center ${formClass} md:mt-13 m-auto w-10/12 relative h-full`}
      onSubmit={onSubmit}
    >
      {showImage && <img src={MovieNight} alt='movie' className='h-36 mb-5' />}
      <div className='flex w-full h-full max-w-md rounded-full border border-gray-200 hover:border-green-500 focus-within:border-green-500 text-gray-500 focus-within:text-green-500 hover:text-green-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl group'>
        <SearchIcon className='h-5 mr-3' />
        <input
          type='text'
          value={key}
          ref={targetRef}
          placeholder='Type title...'
          className='flex-grow focus:outline-none text-gray-500'
          onFocus={(e) => {
            if (key.length >= 3 && !suggestions)
              dispatch(onSearcSuggestions(key));
            setTimeout(() => {
              setShowSuggest(true);
            }, 100);
          }}
          onBlur={(e) => {
            setTimeout(() => {
              setShowSuggest(false);
            }, 100);
          }}
          onChange={(e) => {
            setKey(e.target.value);
            onChange(e);
          }}
        />
      </div>
      {key.length >= 3 && (
        <Suggest
          isEmpty={isEmpty}
          showSuggest={showSuggest}
          suggestions={suggestions}
          searchStatus={searchStatus}
          topCls={showImage ? "top-52" : "top-10"}
        />
      )}
    </form>
  );
};

export default InputSearch;
