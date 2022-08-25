import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();


    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav class="flex justify-between w-full bg-white h-25 p-4 top-0 left-0 shadow-lg">
            <h1 class="ml-10 text-[#3371F2] text-4xl font-bold">fyp</h1>
            <ul class="flex w-[450px] text-[#3371F2] text-xl ml-24 mt-2 justify-between align-baseline" >
            <li class="">Home</li>
            <li class="">Creators</li>
            <li class="">About</li>
            <li class="">Participate</li>
            </ul>
            <div class="flex justify-around w-[200px]">
            <button class="p-2 border-2 rounded-xl w-[4.5rem] border-[#3371F2] text-[#3371F2]" onClick={Logout}>
                Logout
            </button>
            </div>
        </nav>
        // <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        //     <div className="container">
        //         <div className="navbar-brand">
        //             <a className="navbar-item" href="https://bulma.io">
        //             {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo' /> */}
        //             </a>
        //             <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //             </a>
        //         </div>
            
        //         <div id="navbarBasicExample" className="navbar-menu">
        //             <div className="navbar-start">
        //             <a href='/' className="navbar-item">
        //                 Home
        //             </a>
                
                    
        //             </div>
                
        //             <div className="navbar-end">
        //             <div className="navbar-item">
        //                 <div className="buttons">
        //                 <button onClick={Logout} className="button is-light">
        //                     Log Out
        //                 </button>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        
        // </nav>
    )
}

export default Navbar
