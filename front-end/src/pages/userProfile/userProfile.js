import React, { useEffect, useState } from 'react';
import Image from '../../assets/srcImg/srcImg';
import CardProjectProfile from './cardProjectProfile';
import HeadContainer from './headContainer';
// import SkillsCategory from './skillsCategory';

import ModalEditProfile from './modalEditProfile';
import ModalEditProject from './modalEditProject';
import ModalEditContact from './modalEditContact';
import ModalUploadPhoto from './modalUploadPhoto';
import BackgroundModal from './backgroundModal';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { MdEdit, MdRefresh } from 'react-icons/md';
import UserContact from './userContact';

const UserProfile = () => {
  const [editProfile, seteditProfile] = useState(false);
  const [editProject, seteditProject] = useState(false);
  const [editContact, seteditContact] = useState(false);
  const [editPhoto, setEditPhoto] = useState(false);

  // -------------------------------------------------------

  const [userId, setUserId] = useState('0');
  const [name, setName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const navigate = useNavigate();

  // -------------------------------------------
  const [projects, setProjects] = useState([]);
  const [countProject, setCountProject] = useState();
  const [limitProject, setLimitProject] = useState(6);
  const [pageProject, setPageProject] = useState(1);
  const [countPage, setCountPage] = useState();

  const link = `http://127.0.0.1:5000/project/project_main/${limitProject}&${pageProject}&${userId}`;

  const rows = [];
  for (var i = 1; i <= countPage; i++) {
    rows.push(i);
  }

  useEffect(() => {
    refreshToken();
    getProject();
    getContact();
    const countPage = countProject / limitProject;
    setCountPage(Math.ceil(countPage));
  }, [userId, countProject, limitProject, pageProject]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
      setName(decoded.name);
      setCreatedAt(decoded.createdAt);
      setEmail(decoded.email);
      setImage(decoded.image);
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
      if (expire * 100 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        console.log(decoded, 'decoded');
        setUserId(decoded.userId);
        setName(decoded.name);
        setCreatedAt(decoded.createdAt);
        setImage(decoded.image);
        setEmail(decoded.email);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleClick = (page) => {
    setPageProject(page);
    getProject();
    console.log('handle');
  };

  const handlePreview = () => {
    const page = pageProject - 1;
    if (page < 1) {
      setPageProject(1);
    } else {
      setPageProject(page);
    }
    getProject();
  };

  const handleNext = () => {
    const page = pageProject + 1;
    if (page > countPage) {
      setPageProject(countPage);
    } else {
      setPageProject(page);
    }
    getProject();
  };

  const getProject = async () => {
    const response = await axios.get(`${link}`);

    console.log(pageProject, 'pageProject');
    setCountProject(response.data.projects.count);
    setProjects(response.data.projects.rows);
    console.log('terpanggil');
  };

  const getContact = async () => {
    const response = await axios.get(`http://localhost:5000/contact/${userId}`);

    setGithub(response.data.github);
    setTwitter(response.data.twitter);
    setLinkedin(response.data.linkedin);
  };

  const editProfileClicked = () => {
    seteditProfile(!editProfile);
  };
  const editPhotoClicked = () => {
    setEditPhoto(!editPhoto);
  };
  const editProjectClicked = () => {
    seteditProject(!editProject);
  };
  const editContactClicked = () => {
    seteditContact(!editContact);
  };

  return (
    <React.Fragment>
      <main className="mt-20 relative pb-20  ">
        {editProfile ? (
          <div>
            <ModalEditProfile
              onClick={editProfileClicked}
              refresh={refreshToken}
              userId={userId}
            />
            <BackgroundModal onClick={editProfileClicked} state={editProfile} />
          </div>
        ) : (
          ''
        )}

        {editProject ? (
          <div>
            <ModalEditProject
              onClick={editProjectClicked}
              Project={getProject}
              userId={userId}
            />
            <BackgroundModal onClick={editProjectClicked} state={editProject} />
          </div>
        ) : (
          ''
        )}

        {editContact ? (
          <div>
            <ModalEditContact onClick={editContactClicked} userId={userId} />
            <BackgroundModal onClick={editContactClicked} state={editContact} />
          </div>
        ) : (
          ''
        )}

        {editPhoto ? (
          <div>
            <ModalUploadPhoto
              onClick={editPhotoClicked}
              refresh={refreshToken}
              userId={userId}
            />
            <BackgroundModal onClick={editPhotoClicked} state={editPhoto} />
          </div>
        ) : (
          ''
        )}
        <BackgroundModal />
        <section className="profile w-full h-auto mx-auto px-6 pt-10 pb-6 lg:w-[720px] ">
          <div className="flex w-full justify-between p-4 ">
            <div className="w-40 flex justify-end">
              <img
                className="min-h-[9rem] w-36 rounded-full border-4 border-slate-400"
                src={!image ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                : image}
                alt={name}
              />
              <MdEdit
                className="cursor-pointer relative mt-[8rem]"
                onClick={editPhotoClicked}
              />
            </div>

            <button
              onClick={editProfileClicked}
              className=" w-32 h-10 border-2 border-slate-400 rounded-[25px] mt-10 "
            >
              Edit Profile
            </button>
          </div>
          <div className="ml-4">
            <h1 className="font-bold text-xl uppercase">{name}</h1>
            <div className="flex flex-row justify-between mt-4 mb-0">
              <div>{email}</div>
              <div>Joined : {new Date(createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        </section>

        <section className="userProject w-full  h-auto mx-auto px-6 py-10 border-t-2 border-slate-300 lg:w-[720px]">
          <HeadContainer
            onClick={editProjectClicked}
            title="My Creative Project"
            project={getProject}
          />

          <div className="flex flex-wrap gap-x-9 justify-start mt-16 min-h-[30rem]">
            {projects.map((project, index) => (
              <CardProjectProfile
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
          {!countProject ? '' : 
            <div className="w-full flex justify-center">
              <div className="flex justify-between w-[20rem] mt-10  px-6 py-1 text-white">
                <button
                  className="cursor-pointer bg-blue-400 hover:bg-blue-500 px-3 "
                  onClick={() => handlePreview()}
                >
                  Preview
                </button>
                {rows.map((row, index) => (
                  <button
                    key={index}
                    className={`cursor-pointer hover:bg-blue-500 ${
                      row == pageProject ? 'bg-blue-600' : 'bg-blue-300'
                    } px-3`}
                    onClick={() => handleClick(row)}
                  >
                    {row}
                  </button>
                ))}
                
                <button
                  className="cursor-pointer bg-blue-400 hover:bg-blue-500 px-3 min-w-[5rem]"
                  onClick={() => handleNext()}
                >
                  Next
                </button>
              </div>
            </div>
          }
        </section>

        <UserContact editContactClicked={editContactClicked} userId={userId} />
      </main>
    </React.Fragment>
  );
};

export default UserProfile;
