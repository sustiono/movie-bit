import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import ImageViewer from "react-simple-image-viewer";

import { onSearchMovies, onFetchNext } from "../../store/actions/search";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { results, onPaging, isEmpty } = useSelector((state) => state.search);

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
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

  if (!results)
    return (
      <div className='flex flex-col flex-grow items-center mt-10'>
        <p className='text-gray-500'>Movie Not Found</p>
      </div>
    );

  return (
    <>
      <div
        ref={targetRef}
        className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-5 min-h-full'
      >
        {results?.Search?.map((result, index) => {
          const slug = result.Title.toLowerCase().replace(/\s/g, "-");
          const imgSrc = result.Poster.includes("http")
            ? result.Poster
            : "https://via.placeholder.com/300x420.png";
          return (
            <div
              key={index}
              className='p-2 mb-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-10 text-center xl:text-left'
            >
              <img
                src={imgSrc}
                alt={result.Title}
                className='m-auto xl:m-0'
                onClick={() => openImageViewer(index)}
              />
              <h2 className='mt-1 text-2xl md:text-xl text-green-500 transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-green-500 hover:underline'>
                <Link
                  to={{
                    pathname: `/movie/${slug}`,
                    state: {
                      movie: result,
                    },
                  }}
                >{`${result.Title} (${result.Year})`}</Link>
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

      {isViewerOpen && results && (
        <ImageViewer
          src={results.Search.map((r) =>
            r.Poster.includes("http")
              ? r.Poster
              : "https://via.placeholder.com/300x420.png"
          )}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default SearchResult;
