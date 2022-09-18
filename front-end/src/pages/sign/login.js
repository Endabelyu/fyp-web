import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      navigate('/home_login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-100/90">
      {/* <img /> */}
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={Auth}
          className="max-w-[700px] w-full mx-auto bg-white p-8"
        >
          <h2 className="font-bold py-8">Sign in to fyp</h2>
          <p
            className={
              'bg-red-200 text-center mb-3 py-2' + (msg ? 'show' : 'hidden')
            }
          >
            {msg}
          </p>
          <div className="flex flex-col mb-4">
            <input
              className="border-2 relative bg-white-100 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email address"
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              className="border-2 relative bg-white-100 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </div>
          <button className="max-w-[200px] w-full py-2 mt-3 bg-blue-500 relative text-white">
            Login
          </button>
          <p className="flex items-center mt-4">
            <input className="mr-2" type="checkbox" /> Remember me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
