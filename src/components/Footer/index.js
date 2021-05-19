import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div className='flex flex-col w-full px-5 justify-center md:flex-row md:justify-between mx-5 items-center h-20 border-t border-gray-100'>
      <div className='flex justify-center'>
        <p className='font-semibold text-xl text-green-500 font-serif'>
          MOVIEbit
        </p>
      </div>
      <div className='flex justify-center'>
        <p className='text-gray-500'>Copyright © 2021 . All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
