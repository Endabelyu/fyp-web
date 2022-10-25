import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const CardProject = (props) => {
  const [projects, setProjects] = useState([]);
  const [countPage, setCountPage] = useState('');
  const [countProject, setCountProject] = useState();
  const [limitProject, setLimitProject] = useState(8);
  const [pageProject, setPageProject] = useState(1);
  const navigate = useNavigate();

  const link = `http://127.0.0.1:5000/project/project_page/${limitProject}&${pageProject}`;

  

  useEffect(()=>{
    getProject();
    counting(); 
  },[countProject, pageProject]); 

  const counting = async() => {
    const countPages = countProject / limitProject;
    setCountPage(Math.ceil(countPages));
    console.log(Math.ceil(countPages));
  }

  const rows = [];
  for(var i=1; i<=countPage; i++){
    rows.push(i);
  }

  const getProject = async() => {
    const response = await axios.get(link);
    const data = response.data.projects.rows;
    const count = response.data.projects.count;
    setProjects(data);
    setCountProject(count);
  }

  const handleClick = (id) => {
    navigate("view_project_out/"+id);
  }

  const handleClickRow = (row) => {
    setPageProject(row);
  } 

  const handleNext = () => {
    const page = pageProject + 1;
    if (page > countPage) {
      setPageProject(countPage);
    } else {
      setPageProject(page);
    }
    getProject();
  }

  const handlePreview = () => {
    const page = pageProject - 1;
    if (page < 1) {
      setPageProject(1);
    } else {
      setPageProject(page);
    }
    getProject();
  };

  return (
    <React.Fragment>
      <div className='flex justify-start flex-wrap md:gap-x-4 lg:gap-x-16 w-3/4 mx-auto'>
        {projects.map((project, index) => (
          <div className="mb-10 rounder-lg lg:w-[200px]" key={index}>
            <div className='flex items-center cursor-pointer rounded-xl bg-gray-200 lg:min-h-[200px] mb-5'>
              <img
                className=""
                src={project.image}
                alt={project.name}
                onClick={()=>handleClick(project.id)}
              />
            </div>
            
            <div className="flex justify-between">
              <img
                className="rounded-full w-10 h-10"
                src={project.user.image ? project.user.image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                alt={project.user.name}
              />
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex justify-center'>
        <buttom className="mx-2 bg-blue-400 hover:bg-blue-600 px-4 text-white cursor-pointer" onClick={()=>handlePreview()}>Preview</buttom>
        {rows.map((row,index)=>(
          <buttom className={`mx-2 ${row == pageProject ? 'bg-blue-600' : 'bg-blue-400'} hover:bg-blue-600 px-4 text-white cursor-pointer`} onClick={()=>handleClickRow(row)}>{row}</buttom>
        ))}
        <buttom className="mx-2 bg-blue-400 hover:bg-blue-600 px-4 text-white cursor-pointer" onClick={()=>handleNext()}>Next</buttom>
      </div>
    </React.Fragment>
  );
};

export default CardProject;
