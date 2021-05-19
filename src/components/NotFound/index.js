import { Link } from "react-router-dom";

import NotFoundImage from "../../assets/images/not-found.png";

const NotFound = () => {
  return (
    <div className='flex flex-col flex-grow items-center justify-center'>
      <img src={NotFoundImage} alt='Not Found' className='h-48' />
      <Link
        to='/'
        className='text-gray-500 hover:text-green-500 hover:underline'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
