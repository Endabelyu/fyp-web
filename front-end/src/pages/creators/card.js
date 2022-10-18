import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const { name, image, quote } = props;

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUser();
  },[]);

  const getUser = async() => {
    const response = await axios.get(`http://127.0.0.1:5000/users_page/4&1`);
    const data = response.data.users.rows;
    setUsers(data);
  }

  return (
    <React.Fragment>
      {users.map((user, index)=>(
      <div class="card flex flex-col w-80 md:w-3/4  lg:w-80 mx-auto rounded-lg bg-[#EAEAFA] px-6">
        
          <div class="profileCreator flex py-4 gap-x-8">
          <img
            src={user.image ? user.image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
            alt=""
            className=" w-20 h-20 lg:w-20 border-3 border-white rounded-full mt-6 lg:mt-0"
          />
          <div class="card-text mt-3 text-sm md:mt-6  md:text-2xl lg:text-sm lg:mt-3">
            <p class="card-name mb-3">{user.name}</p>

            <p class="card-quotes  italic">{user.bio}</p>
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
      ))}
    </React.Fragment>
  );
};

export default Card;
