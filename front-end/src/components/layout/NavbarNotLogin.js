import React, { useState } from 'react';
import Button from './Button';

const NavbarNotLogin = () => {
  const pathname = window.location.pathname.toString();
  const [toggle, setToggle] = useState(false);

  const hamburgerClicked = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div
        className={`${
          toggle ? 'translate-x-0' : 'translate-x-full'
        } absolute z-20 flex flex-col w-1/2 h-[100vh] bg-white right-0 top-[4.5rem] drop-shadow-md py-5 align-middle transition duration-500 md:translate-x-0  md:flex md:static md:flex-row md:right-0 md:top-0 md:h-auto md:justify-between md:w-[90%] md:bg-none md:py-0 md:drop-shadow-none`}
      >
        <ul className=" static flex flex-col px-3 w-[450px] text-[#01020F] text-xl  mt-2 justify-between align-baseline md:flex-row md:px-0 md:mx-8 lg:ml-[19.5rem] md:text-md ">
          <li className=" mb-4 md:mb-0">
            <a href="/">Home</a>
          </li>
          <li className=" mb-4 md:mb-0">
            <a href="/creators">Creators</a>
          </li>
          <li className=" mb-4 md:mb-0">
            <a href="/about">About</a>
          </li>
          <li className=" mb-4 md:mb-0">
            <a href="/participate">Participate</a>
          </li>
        </ul>
        <div className=" flex justify-around md:w-[200px] lg:mr-[20px]">
          <Button
            className={`${pathname === '/login' ? 'hidden' : ''} 
    p-2 border-2 rounded-xl w-[4.5rem] border-[#3371F2] text-[#3371F2]`}
            name="login"
            onClick={() => window.open('/login', '_self')}
          />

          <Button
            className={` ${
              pathname === '/register' ? 'hidden' : ''
            } p-2  rounded-xl w-20 bg-blue-500 text-white`}
            onClick={() => window.open('/register', '_self')}
            name="Register"
          />
        </div>
      </div>
      {/* hamburger menu */}
      <div
        onClick={hamburgerClicked}
        id="hamburger"
        className={
          ' flex flex-col justify-center h-[40px] w-[40px] mt-1.5 right-5 z-10 md:hidden '
        }
      >
        <span
          className={` ${
            toggle ? 'transform translate-y-[.83rem] rotate-[315deg]' : ''
          } line1 h-[7px] w-full mt-2  rounded-sm bg-[#3371F2] transition ease-in-out duration-[500ms]`}
        />
        <span
          className={` ${
            toggle ? 'transform translate-x-0 rotate-[225deg] scale-0;' : ''
          } line2  h-[7px]  mt-2  w-full rounded-sm bg-[#3371F2] ease-in-out transition duration-[500ms]`}
        />
        <span
          className={` ${
            toggle ? 'transform -translate-y-[.83rem] ' : ''
          } line3  h-[7px]  mt-2 w-full rounded-sm bg-[#3371F2] transition ease-in-out duration-[500ms]`}
        />
      </div>
    </React.Fragment>
  );
};

export default NavbarNotLogin;
