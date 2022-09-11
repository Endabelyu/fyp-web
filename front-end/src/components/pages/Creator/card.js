import React from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const { name, image, quote } = props;
  return (
    <React.Fragment>
      <div class="card flex flex-col w-80 mx-auto rounded-lg bg-[#EAEAFA] px-6">
        <div class="profileCreator flex py-4 gap-x-4">
          <img
            src={image}
            alt={name}
            className=" w-20 border-3 border-white rounded-full"
          />
          <div class="card-text mx-auto">
            <p class="card-name mb-3">{name}</p>

            <p class="card-quotes  text-sm italic">{quote}</p>
          </div>
        </div>
        <ul className="socmed flex justify-between p-4">
          <NavLink to="">
            <BsTwitter />
          </NavLink>
          <NavLink to="">
            <BsInstagram />
          </NavLink>
          <NavLink to="">
            <BsGithub />
          </NavLink>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Card;
