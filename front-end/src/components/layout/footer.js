import React from 'react';
import { BsGithub } from 'react-icons/bs';

const footer = () => {
  const pathname = window.location.pathname.toString();

  return (
    <div
      className={` ${
        pathname === '/login' || pathname === '/register' ? 'hidden' : 'flex'
      } justify-between bg-[#EAEAFA] text-md p-10  `}
    >
      <p className="w-[250px] md:w-auto">
        &copy; Copyright 2022 |
        <span className="text-[#3371F2] font-bold ml-1">fyp</span> Creators. All
        rights reserved.
      </p>

      <div className="socmed">
        <BsGithub
          onClick={() =>
            window.open('https://github.com/Endabelyu/fyp-web', '_blank')
          }
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default footer;
