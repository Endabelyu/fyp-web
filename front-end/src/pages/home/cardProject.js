import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const CardProject = (props) => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const link = `http://127.0.0.1:5000/project/project_page/4&1`;

  useEffect(()=>{
    getProject();
  },[]);

  const getProject = async() => {
    const response = await axios.get(link);
    const data = response.data.projects.rows;
    setProjects(data);
  }

  const handleClick = (url) => {
    window.open(url,'_blank')
  }

  return (
    <React.Fragment>
      {projects.map((project, index) => (
        <div className=" mb-10 rounder-lg" key={index}>
        <img
          className=" rounded-lg mb-5 w-full md:h-[155px] md:w-[200px] lg:h-[155px] lg:w-[200px] cursor-pointer"
          src={project.image}
          alt={project.name}
          onClick={()=>handleClick(project.url)}
        />
        <div className="userData flex justify-between">
          <img
            className="rounded-full w-10 h-10"
            src={project.user.image ? project.user.image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
            alt={project.user.name}
          />
          <p>{project.name}</p>
        </div>
      </div>
      ))}
      
    </React.Fragment>
  );
};

export default CardProject;
