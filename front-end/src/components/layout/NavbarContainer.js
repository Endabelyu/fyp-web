// import axios from 'axios';
import React from 'react';
import NavbarisLogin from './navbarisLogin';
import NavbarNotLogin from './navbarNotLogin';
// import { navDes } from '../pages/style';
// import { useNavigate } from 'react-router-dom';
// import { useMatch } from 'react-router-dom';
const Navbar = (props) => {
  // const navigate = useNavigate();
  // const { hidden } = props;

  // const Logout = async() => {
  //     try {
  //         await axios.delete('http://localhost:5000/logout');
  //         navigate("/");
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  const pathname = window.location.pathname.toString();

  let navbar;

  if (pathname !== '/userProfile') {
    navbar = <NavbarNotLogin />;
  } else {
    navbar = <NavbarisLogin />;
  }

  return (
    <nav className="fixed top-0 z-10 left-0 flex justify-between w-full bg-white h-25 py-3 px-8 md:px-6 drop-shadow-md  lg:p-4">
      <h1 className=" text-[#3371F2] text-4xl font-bold md:ml-2 lg:ml-14">
        fyp
      </h1>
      {navbar}
    </nav>
  );
};

export default Navbar;
