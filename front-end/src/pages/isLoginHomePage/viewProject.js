import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MdEdit, MdRefresh } from 'react-icons/md';
import ModalUpload from './modalUpload';


const ViewProject = () => {
    const [project, setProject] = useState([]);
    const {id} = useParams();
    const [images, setImages] = useState([]);
    const [editPhoto, setEditPhoto] = useState(false);
    const [modal, setModal] = useState(false)
    
    const link = `http://127.0.0.1:5000/project/${id}`;

    useEffect(()=>{
        getProject();
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

    return (
        <div className='relative'>
            <div className={`${modal ? 'absolute cover bg-slate-900/[.6] z-[3] w-full h-full' : ''}`}>

            </div>
            <div className={`min-h-[45rem] pt-[10rem]`}>
                <div className=''>
                    <div className='absolute w-1/2 flex justify-center mt-10'>
                    <ModalUpload block={modal} onClick={clickModal} />
                    </div>
                    <div className='mx-[20rem]'>
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
                                    <button className='bg-blue-400 text-white px-3 py-1 rounded-xl' onClick={()=>viewCode(project.url)}>View Repository</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-6 border-t-2 border-slate-300'>
                            <div className='flex justify-between my-3 items-end'>
                                <div className='font-bold'>Image Project</div>
                                <div className='cursor-pointer' onClick={()=>setModal(!modal)}><MdEdit /></div>
                            </div>
                            <div className='flex justify-start flex-wrap mt-6 mb-6'>
                                {images.map((image, index)=>(
                                    <img
                                    src={`${image.path}`}
                                    alt="#"
                                    className="w-[23rem] mx-3 my-4"
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

export default ViewProject;
