import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavbarisLogin from './navbarIsLogin';
import NavbarNotLogin from './navbarNotLogin';
import jwt_decode from 'jwt-decode';
// import { navDes } from '../pages/style';
// import { useNavigate } from 'react-router-dom';
// import { useMatch } from 'react-router-dom';
const Navbar = (props) => {
  const [users, setUsers] = useState();

  const [userId, setUserId] = useState('0');
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');

    setUsers(response.data);
  };

  useEffect(()=>{
    refreshToken();
  },[name]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <nav className="fixed top-0 z-10 left-0 flex justify-between w-full bg-white h-25 py-3 px-8 md:px-6 drop-shadow-md  lg:p-4">
      <h1 className=" text-[#3371F2] text-4xl font-bold md:ml-2 lg:ml-14">
        fyp
      </h1>
      {!name ? <NavbarNotLogin />  : <NavbarisLogin name={name} /> }
    </nav>
  );
};

export default Navbar;
