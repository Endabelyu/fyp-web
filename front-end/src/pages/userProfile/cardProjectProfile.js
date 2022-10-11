import React from 'react';
import { FiBook } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MdDelete, MdRefresh } from 'react-icons/md';
import axios from 'axios';

const CardProjectProfile = (props) => {
  const { id, url, title, name, image, visitLink, project } = props;

  const handleDelete = async() => {
    await axios.delete(`http://localhost:5000/project/${id}`);
    project();
  }

  const handleLink = async(visitLink) => {
    window.open(`${visitLink}`, "_blank");
  }

  return (
    <React.Fragment>
      <div className="mb-10 rounder-lg lg:mx-4 mx-0 w-[40%] lg:w-[25%]" >
        <div className='mb-4'>
          <img
            className=" rounded-lg mb-2 md:w-auto lg:min-h-[150px] md:max-h-[150px] lg:w-auto"
            src={image}
            alt={title}
          />
          <MdDelete onClick={handleDelete} className='ml-40 cursor-pointer'/>
        </div>
        
        <div className="userData px-6 ">
          <div className="flex gap-x-2 cursor-pointer mb-2 ">
            <FiBook />
            <p className="text-sm text-blue-500 ">{name}</p>
          </div>
          <div className="flex gap-x-2 cursor-pointer w-[20rem] ">
            <BsLink45Deg />
            <p onClick={()=>handleLink(visitLink)} className="lg:text-sm text-xs text-blue-700"> Visit Project </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardProjectProfile;
