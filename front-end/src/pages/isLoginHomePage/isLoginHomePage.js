import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const IsLoginHomePage = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getProject();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/login');
      }
    }
  };

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getProject = async () => {
    const response = await axiosJwt.get('http://localhost:5000/project');

    setProjects(response.data);
  };

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 w-full text-right px-5">
            <button className="text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-300 py-1 px-6 rounded-full ">
              Filter
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {projects.map((project, index) => (
              <div className="group relative mx-4">
                <div className="min-h-80 aspect-w-1 w-70 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-50">
                  <img
                    src={`${project.image}`}
                    alt="Front of men&#039;s Basic Tee in black"
                    className="h-full w-full object-center lg:h-[80%] lg:w-[80%] my-6 mx-6"
                  />
                </div>
                <div className="mt-4 flex justify-between w-70">
                  <span className="flex intems-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-12 w-12 flex-shrink-0 rounded-full"
                    />
                    <span className="my-auto ml-2">{project.user.name}</span>
                  </span>
                  <span>
                    <p className="text-[10px] text-white bg-blue-400 py-1 px-2 rounded-full">
                      {project.name}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IsLoginHomePage;
