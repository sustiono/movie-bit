import { useSelector } from "react-redux";
import { SearchIcon } from "@heroicons/react/outline";
import MovieNight from "../../assets/images/movie-night.png";
import Suggest from "./Suggest";

const InputSearch = ({ onChange }) => {
  const { keyword, searchStatus, suggestions } = useSelector(
    (state) => state.search
  );

  return (
    <form className='flex flex-col items-center mt-10 md:mt-13 m-auto w-4/5 relative'>
      <img src={MovieNight} alt='movie' className='h-36' />
      <div className='flex w-full mt-5 max-w-md rounded-full border border-gray-200 hover:border-green-500 focus-within:border-green-500 text-gray-500 focus-within:text-green-500 hover:text-green-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl group'>
        <SearchIcon className='h-5 mr-3' />
        <input
          type='text'
          placeholder='Type title...'
          className='flex-grow focus:outline-none text-gray-500'
          onChange={onChange}
        />
      </div>
      {keyword && (
        <Suggest searchStatus={searchStatus} suggestions={suggestions} />
      )}
    </form>
  );
};

export default InputSearch;
