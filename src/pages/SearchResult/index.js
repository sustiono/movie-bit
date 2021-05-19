import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

import { onSearchMovies, onFetchNext } from "../../store/actions/search";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { results, onPaging } = useSelector((state) => state.search);

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [results]);

  useEffect(() => {
    if (keyword && !results) {
      dispatch(onSearchMovies(keyword));
    }
    return () => {
      return;
    };
  }, [results]);

  useEffect(() => {
    if (dimensions.height) {
      window.addEventListener("scroll", handleNavigation);
    }
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [dimensions, scrollY]);

  const handleNavigation = (e) => {
    if (window.scrollY > scrollY) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (scrollY + 500 >= dimensions.height && results && !onPaging) {
      const maxPage = Math.ceil(parseInt(results.totalResults) / 10);
      const currentPage = Math.ceil(results.Search.length / 10);
      if (currentPage < maxPage) {
        dispatch(onFetchNext(keyword, currentPage + 1));
      }
    }
    return () => {
      return;
    };
  }, [scrollY]);

  return (
    <>
      <div
        ref={targetRef}
        className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-5 min-h-full'
      >
        {results?.Search?.map((result, index) => {
          const imgSrc = result.Poster.includes("http")
            ? result.Poster
            : "https://via.placeholder.com/300x420.png";
          return (
            <div
              key={index}
              className='p-2 mb-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-150 text-center xl:text-left'
            >
              <img src={imgSrc} alt={result.Title} className='m-auto xl:m-0' />
              <h2 className='mt-1 text-2xl md:text-xl text-green-500 transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-green-500 leading-6'>
                {`${result.Title} (${result.Year})`}
              </h2>
            </div>
          );
        })}
      </div>
      {onPaging && (
        <div className='flex items-center justify-center w-full -mt-10 mb-5'>
          <BeatLoader color='#10B981' />
        </div>
      )}
    </>
  );
};

export default SearchResult;
