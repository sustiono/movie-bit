import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex flex-col w-full items-center border-b border-gray-100'>
      <div className='flex w-full justify-between items-center h-16 px-5'>
        <h2 className='w-full font-bold font-serif text-2xl text-green-500'>
          <Link to='/' className='cursor-pointer tracking-wide'>
            MOVIEbit
          </Link>
        </h2>

        <div className='w-full flex justify-end items-center cursor-pointer group'>
          <img
            className='rounded-full h-10 w-10 group-hover:h-15 group-hover:border border-green-500 transition duration-150 transform group-hover:scale-110'
            src='https://avatars.githubusercontent.com/u/19564599?v=4'
            alt='avatar'
          />
          <h4 className='hidden md:block ml-2 text-gray-500 group-hover:text-green-500'>
            Sustiono
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
