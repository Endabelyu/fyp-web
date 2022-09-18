import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-100/90">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={Register}
          className="max-w-[800px] w-full mx-auto bg-white p-8"
        >
          <h2 className="font-bold py-8">Sign up for a free account</h2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
          </div>
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
          <div className="flex flex-col mb-4">
            <input
              className="border-2 relative bg-white-100 p-2"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              type="password"
              placeholder="confirmation password"
            />
          </div>
          <button className="max-w-[200px] w-full py-2 mt-4 mb-4 bg-blue-500 relative text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
