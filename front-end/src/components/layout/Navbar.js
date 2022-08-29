// import axios from 'axios';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const navigate = useNavigate();

  // const Logout = async() => {
  //     try {
  //         await axios.delete('http://localhost:5000/logout');
  //         navigate("/");
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <nav class="flex justify-between w-full bg-white h-25 p-4 top-0 left-0 drop-shadow-md">
      <h1 class="ml-10 text-[#3371F2] text-4xl font-bold">fyp</h1>
      <ul class="flex w-[450px] text-[#3371F2] text-xl ml-24 mt-2 justify-between align-baseline">
        <li class="">
          <a href="/">Home</a>
        </li>
        <li class="">
          <a href="/creators">Creators</a>
        </li>
        <li class="">
          <a href="/about">About</a>
        </li>
        <li class="">
          <a href="/participate">Participate</a>
        </li>
      </ul>
      <div class="flex justify-around w-[200px]">
        <button
          class="p-2 border-2 rounded-xl w-[4.5rem] border-[#3371F2] text-[#3371F2]"
          onclick="gotoLogin()"
        >
          Login
        </button>
        <button
          class="p-2 rounded-xl w-20 bg-blue-500 text-white"
          onclick="gotoSignup()"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
