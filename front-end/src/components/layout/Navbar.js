// import axios from 'axios';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMatch } from 'react-router-dom';
const Navbar = (props) => {
  // const navigate = useNavigate();
  // const { hidden } = props;
  const pathname = window.location.pathname.toString();

  console.log(pathname);

  // const Logout = async() => {
  //     try {
  //         await axios.delete('http://localhost:5000/logout');
  //         navigate("/");
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <nav
      className="
       flex justify-between w-full bg-white h-25 p-4 top-0 left-0 drop-shadow-md"
    >
      <h1 className="ml-20 text-[#3371F2] text-4xl font-bold">fyp</h1>
      <ul className="flex w-[450px] text-[#01020F] text-xl ml-40 mt-2 justify-between align-baseline">
        <li className="">
          <a href="/">Home</a>
        </li>
        <li className="">
          <a href="/creators">Creators</a>
        </li>
        <li className="">
          <a href="/about">About</a>
        </li>
        <li className="">
          <a href="/participate">Participate</a>
        </li>
      </ul>
      <div className="flex justify-around w-[200px] mr-[50px]">
        <button
          className={`${pathname === '/login' ? 'hidden' : ''} 
          p-2 border-2 rounded-xl w-[4.5rem] border-[#3371F2] text-[#3371F2]`}
          onClick={() => window.open('/login', '_self')}
        >
          Login
        </button>
        <button
          className={` ${
            pathname === '/register' ? 'hidden' : ''
          } p-2  rounded-xl w-20 bg-blue-500 text-white`}
          onClick={() => window.open('/register', '_self')}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
