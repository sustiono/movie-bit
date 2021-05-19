import { SearchIcon } from "@heroicons/react/outline";
import MovieNight from "../../assets/images/movie-night.png";
import Suggest from "./Suggest";

import { history } from "../../utils";

const InputSearch = ({
  onChange,
  keyword,
  searchStatus,
  results,
  showImage = true,
  formClass = "mt-16 px-5",
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword.length >= 3) history.push(`/search/${keyword}`);
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
          placeholder='Type title...'
          className='flex-grow focus:outline-none text-gray-500'
          onChange={onChange}
        />
      </div>
      {keyword && <Suggest searchStatus={searchStatus} results={results} />}
    </form>
  );
};

export default InputSearch;
