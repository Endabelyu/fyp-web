import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


const IsLoginHomePage = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate();

  // -------------------------------------------
  const [projects, setProjects] = useState([]);
  const [countProject, setCountProject] = useState();
  const [limitProject, setLimitProject] = useState(8);
  const [pageProject, setPageProject] = useState(1);
  const [countPage, setCountPage] = useState();

  const link = `http://127.0.0.1:5000/project/project_page/${limitProject}&${pageProject}`;

  const rows = []
  for(var i = 1; i<=countPage; i++){
    rows.push(i);
  }

  useEffect(() => {
    refreshToken();
    getProject();
    const countPage = countProject / limitProject;
    // setCountPage(Math.round(countPage.toFixed(3)));
    setCountPage(Math.ceil(countPage.toFixed(5)));
  }, [countProject, limitProject, pageProject]);

  console.log(countPage, "count page");

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

  const handleClick = (page) => {
    setPageProject(page);
    getProject();
    console.log("handle");
  }

  const handlePreview = () => {
    const page = pageProject-1;
    if(page < 1){
      setPageProject(1);
    }
    else{
      setPageProject(page);
    }
    getProject();
  }

  const handleNext = () => {
    const page = pageProject+1;
    if(page > countPage){
      setPageProject(countPage);
    }
    else{
      setPageProject(page);
    }
    getProject();
  }

  const handleLink = async(url) => {
    window.open(`${url}`, "_blank");
  }

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

  const getProject = async() => {
    const response = await axios.get(`${link}`);

    console.log(pageProject, "pageProject");
    setCountProject(response.data.projects.count)
    setProjects(response.data.projects.rows);
    console.log("terpanggil");
  };


  return (
    <React.Fragment>
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 w-full text-right px-5">
            <button className="text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-300 py-1 px-6 rounded-full ">
              Filter
            </button>
          </div>
            <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 min-h-[40rem]">
              {projects.map((project, index) =>(
                <div className="group relative mx-4 ">
                  <div className="max-h-80 aspect-w-1 w-70 aspect-h-1 cursor-pointer overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
                    <img
                      onClick={()=>handleLink(project.url)}
                      src={`${project.image}`}
                      alt="Front of men&#039;s Basic Tee in black"
                      className="h-auto w-[80%] ml-3 lg:ml-5 object-center lg:h-auto lg:w-[80%] my-6 mx-6"
                    />
                    
                  </div>
                  <div className="mt-4 lg:flex justify-between w-40  lg:w-full">
                    <span className="flex intems-center">
                      <img
                        
                        src={!project.user.image ? 
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          : project.user.image
                        }
                        alt=""
                        className="h-12 w-12 flex-shrink-0 rounded-full"
                      />
                      <span className="my-auto ml-2 text-[10px] lg:text-[14px]">
                        {project.user.name}
                      </span>
                    </span>
                    <span>
                      <p  className="text-[10px] text-white bg-blue-400 py-1 px-2 w-[5rem] lg:w-full mt-4 lg:mt-0 rounded-full lg:rounded-full">
                        {project.name}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full flex justify-center'>
              <div className='flex justify-between w-[20rem] mt-10  px-6 py-1 text-white'>
                <button className='cursor-pointer bg-blue-400 hover:bg-blue-500 px-3 ' onClick={()=>handlePreview()}>Preview</button>
                {rows.map((row, index)=>(
                  <button key={index}  className={`cursor-pointer hover:bg-blue-500 ${row == pageProject ? 'bg-blue-600' : 'bg-blue-300'} px-3`} onClick={()=>handleClick(row)}>{row}</button >
                ))}
                <button className='cursor-pointer bg-blue-400 hover:bg-blue-500 px-3 min-w-[5rem]' onClick={()=>handleNext()}>Next</button >
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IsLoginHomePage;
