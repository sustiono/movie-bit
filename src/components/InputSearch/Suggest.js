import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const Suggest = ({
  isEmpty,
  searchStatus,
  suggestions,
  showSuggest,
  topCls = "top-52",
}) => {
  return (
    <div
      className={`absolute ${topCls} z-20 bg-white ${
        showSuggest ? "flex" : "hidden"
      } flex-col w-10/12 max-w-md rounded-lg mt-2 border border-gray-200 text-gray-500 items-center sm:max-w-xl lg:max-w-2x`}
    >
      {searchStatus && (
        <div className='flex items-center justify-center w-full h-32'>
          <BeatLoader color='#10B981' />
        </div>
      )}
      {isEmpty && (
        <div className='flex flex-col w-full items-center justify-center h-32'>
          <p>Not Found</p>
        </div>
      )}

      {!searchStatus && (
        <ul className='w-full bg-white max-h-64 overflow-y-auto rounded-lg'>
          {suggestions?.Search?.map((suggest, index) => {
            const imgSrc = suggest.Poster.includes("http")
              ? suggest.Poster
              : "https://via.placeholder.com/23x30.png";
            const slug = suggest.Title.toLowerCase().replaceAll(" ", "-");
            return (
              <li
                key={index}
                className='px-2 hover:bg-gray-200 border-b cursor-pointer hover:text-green-500'
              >
                <Link
                  to={{
                    pathname: `/movie/${slug}`,
                    state: {
                      movie: suggest,
                    },
                  }}
                >
                  <div className='flex py-2'>
                    <div className='flex h-10 w-10 relative'>
                      <img src={imgSrc} alt={suggest.Title} />
                    </div>
                    <div className='flex flex-col leading-3 justify-center'>
                      <p className='text-sm'>{suggest.Title}</p>
                      <p className='text-sm'>{suggest.Year}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Suggest;
