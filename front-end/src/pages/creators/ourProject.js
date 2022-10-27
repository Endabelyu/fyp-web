import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProject from './cardProject';
import Contact from './contact';

const OurProject = () => {
  const {id} = useParams();
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(()=>{
    getProject();
    getUser();
  },[])

  const getProject = async() => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/project/main/${id}`);
        setProjects(response.data);
    } catch (error) {
        console.log(error);
    }
  }

  const getUser = async() => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/user/${id}`);
        setUser(response.data);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='relative h-full'>
            {/* <div className={`${modal ? 'absolute cover bg-slate-900/[.6] z-[3] w-full min-h-[54.5rem] h-full' : ''}`}>
            </div> */}
            <div className={`min-h-[45rem] pt-[10rem]`}>
                <div className=''>
                    <div className='absolute w-1/2 flex justify-center mt-10'>
                    </div>
                    <div className='mx-[1rem] lg:mx-[20rem]'>
                        <div className='relative mb-0'>
                            <div className='flex justify-between'>
                                <div className="flex items-end ">
                                    <div>
                                        <img
                                            src={user.image ? user.image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                                            alt="Front of men&#039;s Basic Tee in black"
                                            className="w-20 h-20 rounded-full"
                                        />
                                    </div>
                                    <div className='mx-4 uppercase'>{user.name}</div>
                                </div>
                                <div className='flex items-end w-[7rem]'>
                                        <Contact userId={id}/>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-6 border-t-2 border-slate-300'>
                            <div className='flex justify-between my-3 items-end'>
                                <div className='font-bold'>Display Project</div>
                            </div>
                            <div className="flex flex-wrap gap-x-9 justify-start mt-16 min-h-[30rem]">
                            {projects.map((project, index) => (
                            <CardProject
                                id={project.id}
                                url={Image.websiteCartoon}
                                title="project"
                                name={project.name}
                                image={project.image}
                                visitLink={project.url}
                                key={index}
                                project={getProject}
                            />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OurProject;
