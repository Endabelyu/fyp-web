import React, { useState } from 'react';
import { BiLeftArrow, BiSearch } from 'react-icons/bi';
import Button from './Button';
import Image from '../../assets/srcImg/srcImg';
import { NavLink } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
const NavbarisLogin = () => {
  const [toggle, setToggle] = useState(false);
  const profileClicked = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className="w-full md:ml-[4rem] lg:ml-[5rem]">
        <div className="flex justify-end md:justify-start md:gap-x-5 lg:gap-x-10">
          <Button
            className=" hidden p-2  rounded-xl w-20 bg-blue-500 text-white md:block"
            name="Join Us"
            onClick={() => window.open('/register', '_self')}
          />
          <div className="hidden md:flex p-2 gap-x-2 border-x-2 border-slate-300 w-2/4  lg:w-[65%] ">
            <BiSearch className="mt-1 text-xl" />
            <input
              className=" w-full p-1"
              name="search"
              placeholder="Search users or projects"
            />
          </div>
          <div onClick={profileClicked}>
            <div className="flex gap-x-4 cursor-pointer ">
              <img
                className="w-10 rounded-full"
                src={Image.People}
                alt="user"
              />
              <p className="mt-3 text-base lg:text-sm">userName</p>
              <span
                className={` ${
                  toggle ? 'transform  rotate-[180deg]' : ''
                } hidden md:block transition ease-in-out duration-[500ms] h-4 mt-4 `}
              >
                <BiLeftArrow />
              </span>
            </div>
          </div>
          <div
            className={`${
              toggle ? 'translate-x-0' : 'translate-x-full'
            } absolute right-0 top-[4.3rem] md:top-[5rem] w-40  px-4  py-4 shadow-xl transition duration-500 bg-white md:w-[220px] lg:w-[290px] md:px-6 lg:px-8 `}
          >
            <ul className="flex flex-col gap-y-4 mb-4 cursor-pointer">
              <NavLink className="flex gap-x-2" to="#">
                <IoHomeSharp className="text-lg mt-[0.1rem]" />
                <p className="font-light">Home</p>
              </NavLink>
              <NavLink className="flex gap-x-2" to="/userProfile">
                <CgProfile className="text-lg mt-[0.1rem]" />
                <p className="font-light"> Profile</p>
              </NavLink>
            </ul>
            <Button
              className="p-2 rounded-xl w-20 bg-blue-500 text-white"
              name="Logout"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarisLogin;
