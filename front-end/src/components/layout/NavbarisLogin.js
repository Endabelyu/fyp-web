import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
// import { BsSearch } from 'react-icons/bs';

const NavbarisLogin = () => {
  return (
    <React.Fragment>
      <div className="w-full ml-40">
        <div className="flex  justify-start gap-x-10">
          <Button
            className="p-2  rounded-xl w-20 bg-blue-500 text-white"
            name="Join Us"
            onClick={() => window.open('/register', '_self')}
          />
          <div className="flex p-2 gap-x-2 border-x-2 border-slate-300 w-3/4 ">
            <BiSearch className="mt-1 text-xl" />
            <input
              className=" w-full p-1"
              name="search"
              placeholder="Search users or projects"
              autoFocus
            />
          </div>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default NavbarisLogin;
