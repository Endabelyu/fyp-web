import React from 'react';
import { FiBook } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
const CardProjectProfile = (props) => {
  const { id, url, title } = props;
  return (
    <React.Fragment>
      <div className=" mb-10 rounder-lg" key={id}>
        <img
          className=" rounded-lg w-full mb-2 md:w-[300px] lg:w-[200px]"
          src={url}
          alt={title}
        />
        <div className="userData px-6 ">
          <div className="flex gap-x-2 cursor-pointer mb-2 ">
            <FiBook />
            <p className="text-sm text-blue-500 ">Study Case</p>
          </div>
          <div className="flex gap-x-2 cursor-pointer ">
            <BsLink45Deg />
            <p className="text-sm  text-blue-700">Visit Project</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardProjectProfile;
