import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import ModalUpload from './modalUpload';



const ViewProject = () => {
    const [project, setProject] = useState([]);
    const {id} = useParams();
    const [images, setImages] = useState([]);
    const [editPhoto, setEditPhoto] = useState(false);
    const [modal, setModal] = useState(false);
    const [token, setToken] = useState('');
    
    const link = `http://127.0.0.1:5000/project/${id}`;
    console.log(token, "token");

    useEffect(()=>{
        getProject();
        refreshToken();
    },[]);

    const getProject = async() => {
        const response = await axios.get(link);
        // console.log(response.data);
        setProject(response.data);
        const id_image = response.data.id;
        const response_image = await axios.get(`http://127.0.0.1:5000/project/image/${id_image}`);
        setImages(response_image.data);
    }

    const viewCode = (url) => {
        window.open(url);
    }

    const clickModal = () => {
        setModal(!modal)
    }

    const deleteImage = async(id_image) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/project/image/${id_image}`);
            getProject();
        } catch (error) {
            console.log(error)
        }
    }

    const refreshToken = async () => {
        try {
          const response = await axios.get('http://localhost:5000/token');
          setToken(response.data.accessToken);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className='relative h-full'>
            <div className={`${modal ? 'absolute cover bg-slate-900/[.6] z-[3] w-full min-h-[54.5rem] h-full' : ''}`}>
            </div>
            <div className={`min-h-[45rem] pt-[10rem]`}>
                <div className=''>
                    <div className='absolute w-1/2 flex justify-center mt-10'>
                    <ModalUpload block={modal} onClick={clickModal} id={id} refresh={getProject} />
                    </div>
                    <div className='mx-[1rem] lg:mx-[20rem]'>
                        <div className='relative mb-0'>
                            <div className='flex justify-between'>
                                <div className="flex items-end">
                                    <div>
                                        <img
                                            src={`${project.image}`}
                                            alt="Front of men&#039;s Basic Tee in black"
                                            className="w-20"
                                        />
                                    </div>
                                    <div className='mx-4'>{project.name}</div>
                                </div>
                                <div className='flex items-end'>
                                    <button className='bg-blue-400 text-white px-3 py-1 rounded-xl text-xs lg:text-sm' onClick={()=>viewCode(project.url)}>View Repository</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-6 border-t-2 border-slate-300'>
                            <div className='flex justify-between my-3 items-end'>
                                <div className='font-bold'>Image Project</div>
                                <div className={`cursor-pointer ${!token ? 'hidden' : ''}`} onClick={()=>setModal(!modal)}><MdEdit /></div>
                            </div>
                            <div className='flex justify-start flex-wrap mt-6 pb-10'>
                                {images.map((image, index)=>(
                                    <div className='relative mx-1 my-4'>
                                        <div className='bg-gray-200 hover:bg-gray-100 h-full  flex items-center cursor-pointer'>
                                            <img src={`${image.path}`}
                                            alt="#"
                                            className="lg:w-[23rem] flex lg:mx-3 mx-auto my-6 w-[95%]"
                                            />
                                        </div>
                                        <MdDelete className={`absolute right-0 bottom-0 cursor-pointer hover:text-red-500 ${!token ? 'hidden' : ''} `} onClick={()=>deleteImage(image.id)}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ViewProject;
