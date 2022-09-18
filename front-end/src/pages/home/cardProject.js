import React from 'react';

const CardProject = (props) => {
  const { id, url, title, thumbnailUrl, name } = props;
  return (
    <React.Fragment>
      <div className=" mb-10 rounder-lg" key={id}>
        <img
          className=" rounded-lg w-full mb-5 md:w-[200px] lg:w-[155px]"
          src={url}
          alt={title}
        />
        <div className="userData flex justify-between">
          <img
            className="rounded-full w-10 h-10"
            src={thumbnailUrl}
            alt={name}
          />
          <p>{id}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardProject;
