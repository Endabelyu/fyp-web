import React, { useEffect, useState } from 'react';
import Image from '../../assets/srcImg/srcImg';
import CardProjectProfile from './cardProjectProfile';
import HeadContainer from './headContainer';
// import SkillsCategory from './skillsCategory';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import ModalEditProfile from './modalEditProfile';
import ModalEditProject from './modalEditProject';
import ModalEditContact from './modalEditContact';
import BackgroundModal from './backgroundModal';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [editProfile, seteditProfile] = useState(false);
  const [editProject, seteditProject] = useState(false);
  const [editContact, seteditContact] = useState(false);

  // -------------------------------------------------------

  const [userId, setUserId] = useState();
  const [name, setName] = useState();
  const [userName, setUserName] = useState('');
  const [Bio, setUserBio] = useState('');
  const [Location, setUserLocation] = useState('');
  const [Url, setUserUrl] = useState('');
  const [Joined, setUserJoined] = useState('');
  const [token, setToken] = useState();
  const [expire, setExpire] = useState();
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const parseDate = new Date(Joined);
  const getYears = parseDate.getFullYear();
  const getMonth = parseDate.toLocaleString('default', { month: 'long' });
  console.log(getYears);
  console.log(getMonth);

  useEffect(() => {
    refreshToken();
    Project();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserJoined(decoded.joined);
      setUserBio(decoded.bio);
      setUserLocation(decoded.location);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/login');
      }
    }
  };

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setUserJoined(decoded.joined);
        setUserBio(decoded.bio);
        setUserLocation(decoded.location);
        setUserId(decoded.id);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const Project = async () => {
    const response = await axios.get(`http://localhost:5000/project/have/6`);

    setProjects(response.data);
  };

  const editProfileClicked = () => {
    seteditProfile(!editProfile);
  };
  const editProjectClicked = () => {
    seteditProject(!editProject);
  };
  const editContactClicked = () => {
    seteditContact(!editContact);
  };
  // still under maintenance
  return (
    <React.Fragment>
      <main className="mt-20 relative pb-20  ">
        {editProfile ? (
          <div>
            <ModalEditProfile onClick={editProfileClicked} />
            <BackgroundModal onClick={editProfileClicked} state={editProfile} />
          </div>
        ) : (
          ''
        )}

        {editProject ? (
          <div>
            <ModalEditProject onClick={editProjectClicked} />
            <BackgroundModal onClick={editProjectClicked} state={editProject} />
          </div>
        ) : (
          ''
        )}

        {editContact ? (
          <div>
            <ModalEditContact onClick={editContactClicked} />
            <BackgroundModal onClick={editContactClicked} state={editContact} />
          </div>
        ) : (
          ''
        )}
        <BackgroundModal />
        <section className="profile w-full h-auto mx-auto px-6 pt-10 pb-6 lg:w-[720px] ">
          <div className="flex w-full justify-between p-4 ">
            <img
              className="w-36 rounded-full border-4 border-slate-400"
              src={Image.People}
              alt="andy"
            />
            <button
              onClick={editProfileClicked}
              className=" w-32 h-10 border-2 border-slate-400 rounded-[25px] mt-10 "
            >
              Edit Profile
            </button>
          </div>
          <div className="">
            <h1 className="font-bold text-xl uppercase">{name}</h1>
            <p className="mb-3 text-slate-500">
              {userName === '' ? name : userName}
            </p>
            <p className="bio mb-3 ">{Bio}</p>
            <ul className="flex flex-wrap gap-x-4">
              <li className="text-slate-500">{Location}</li>
              <li>
                <a className="text-blue-400" href={Url}>
                  {Url}
                </a>
              </li>
              <li className="text-slate-500">{`Joined ${getMonth} ${getYears}`}</li>
            </ul>
          </div>
        </section>

        <section className="userProject w-full  h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
          <HeadContainer
            onClick={editProjectClicked}
            title="My Creative Project"
          />

          <div className="flex flex-wrap gap-x-4 justify-between mt-16">
            {projects.map((project, index) => (
              <CardProjectProfile
                name={project.name}
                image={project.image}
                visitLink={project.url}
              />
            ))}
          </div>
        </section>
        {/* <section className="userSkill w-full h-auto mx-auto px-6 py-10 border-t-2 border-slate-300  lg:w-[720px] ">
          <HeadContainer onClick={editProfileClicked} title="Tech Stack" />
          <div className="flex flex-col  lg:flex-row justify-start mt-16">
            <div className=" w-2/4">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
            <div className=" w-2/4 lg:border-l-2 lg:border-slate-400 lg:px-8">
              <SkillsCategory category="Javascript Library" />
              <SkillsCategory category="Javascript Library" />
            </div>
          </div>
        </section> */}

        <section className="userContact w-full h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
          <HeadContainer onClick={editContactClicked} title="Connect With Me" />
          <div className="flex justify-around gap-x-6 mt-12">
            <a href="/">
              <BsGithub className="text-[50px]" />
            </a>
            <a href="/">
              <BsTwitter className="text-[50px]" />
            </a>
            <a href="/">
              <BsLinkedin className="text-[50px]" />
            </a>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
