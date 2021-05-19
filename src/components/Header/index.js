import { Link, useLocation } from "react-router-dom";
import InputSearch from "../InputSearch";

const Header = () => {
  const location = useLocation();
  const inputSearchCls = location.pathname === "/" ? "hidden" : "flex";

  return (
    <div className='flex flex-col w-full items-center border-b border-gray-100'>
      <div className='flex w-full justify-between items-center h-16 px-5'>
        <h2 className='w-auto font-bold font-serif text-2xl text-green-500'>
          <Link to='/' className='cursor-pointer tracking-wide'>
            <span className='hidden md:block'>MOVIEbit</span>
            <span className='md:hidden'>Mbit</span>
          </Link>
        </h2>

        <div className={`${inputSearchCls} flex w-full h-10`}>
          <InputSearch
            keyword={""}
            showImage={false}
            formClass='mt-0'
            results={null}
            searchStatus={false}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className='w-auto flex justify-end items-center cursor-pointer group'>
          <img
            className='rounded-full w-10 group-hover:h-15 group-hover:border border-green-500 transition duration-150 transform group-hover:scale-110'
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
