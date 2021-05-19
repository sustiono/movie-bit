import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const Suggest = ({ searchStatus, suggestions }) => {
  return (
    <div className='absolute top-52 flex flex-col w-full max-w-md rounded-lg mt-2 border border-gray-200 text-gray-500 items-center sm:max-w-xl lg:max-w-2xl'>
      {searchStatus && (
        <div className='flex items-center justify-center w-full h-32'>
          <BeatLoader color='#10B981' />
        </div>
      )}
      {!searchStatus && !suggestions && (
        <div className='flex flex-col w-full items-center justify-center h-32'>
          <p>Not Found</p>
        </div>
      )}

      <ul className='w-full bg-white max-h-64 overflow-y-auto'>
        {suggestions?.Search?.map((suggest, index) => (
          <li
            key={index}
            className='px-2 hover:bg-gray-200 border-b cursor-pointer hover:text-green-500'
          >
            <Link
              to={`/movie/${suggest.Title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className='flex py-2'>
                <div className='flex h-10 w-10 relative'>
                  <img src={suggest.Poster} alt={suggest.Title} />
                </div>
                <div className='flex flex-col leading-3 justify-center'>
                  <p className='text-sm'>{suggest.Title}</p>
                  <p className='text-sm'>{suggest.Year}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggest;
