import { SearchIcon } from "@heroicons/react/outline";
import MovieNight from "../../assets/images/movie-night.png";

const InputSearch = () => {
  return (
    <form className='flex flex-col items-center justify-center m-auto flex-grow w-4/5'>
      <img src={MovieNight} alt='movie' className='h-36' />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 hover:border-green-500 focus-within:border-green-500 text-gray-500 focus-within:text-green-500 hover:text-green-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl group'>
        <SearchIcon className='h-5 mr-3' />
        <input
          type='text'
          placeholder='Type title...'
          className='flex-grow focus:outline-none text-gray-500'
        />
      </div>
    </form>
  );
};

export default InputSearch;
