import React from 'react';
import { FiBook } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CardProjectProfile = (props) => {
  const { id, url, title, name, image, visitLink, key } = props;
  return (
    <React.Fragment>
      <div className=" mb-10 rounder-lg mx-4" key={key}>
        <div className='mb-4'>
          <img
            className=" rounded-lg w-full mb-2 md:w-auto lg:max-h-[150px] md:max-h-[150px] lg:w-auto"
            src={image}
            alt={title}
          />
        </div>
        
        <div className="userData px-6 ">
          <div className="flex gap-x-2 cursor-pointer mb-2 ">
            <FiBook />
            <p className="text-sm text-blue-500 ">{name}</p>
          </div>
          <div className="flex gap-x-2 cursor-pointer ">
            <BsLink45Deg />
            <p className="text-sm  text-blue-700"><a href={visitLink}> Visit Project </a></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardProjectProfile;
