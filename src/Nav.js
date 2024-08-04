import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (targetId) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            setIsOpen();
        }, 100);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }; 

    return ( 
        <div className="nav fixed top-0 left-0 grid justify-center items-center bg-white z-10 w-screen h-20">
            <div className="hidden md:flex">
                <div className="flex justify-center items-center gap-44 h-20">
                    <img className="w-24 " src="/Image/logo.png" />
                    <ul className="flex gap-28 text-xl font-bold">
                        <Link to={`/`}>
                            <li className="hover:-translate-y-1">HOME</li>
                        </Link>
                        <Link to={`/about`}>
                            <li className="hover:-translate-y-1">ABOUT</li>
                        </Link>
                        <li onClick={() => handleNavigation('section2')} className="hover:-translate-y-1 cursor-pointer">CONTACT</li>
                    </ul>
                    <div  onClick={() => handleNavigation('section1')} className="w-52 h-10 bg-red-600 flex items-center justify-center rounded-md text-white hover:bg-red-500 cursor-pointer">Subscribe to our blog</div>
                </div>
            </div>
            
            <div className="md:flex lg:hidden w-screen relative grid justify-center">   
                <div onClick={toggleMenu} className="absolute right-6 top-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <img className="w-28 -mt-3 " src="/Image/logo.png" />
            
                <div className={`transition-all duration-1000 ease-in-out absolute top-0 right-0 w-60 h-screen z-30 bg-black/5 backdrop-blur-xl ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div onClick={toggleMenu} className="absolute top-5 right-12 ">
                        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="10" x2="90" y2="90" stroke="red" stroke-width="10"/>
                            <line x1="90" y1="10" x2="10" y2="90" stroke="red" stroke-width="10"/>
                        </svg>
                    </div>

                    <div className="grid justify-center items-center pt-28">
                        <ul className="grid justify-center items-center gap-5">
                            <Link to={`/`}>
                                <li>HOME</li>
                            </Link>
                            <Link to={`/about`}>
                                <li >ABOUT</li>
                            </Link>
                            <li onClick={() => handleNavigation('section2')} className="hover:-translate-y-1 cursor-pointer">CONTACT</li>
                            <li onClick={() => handleNavigation('section1')} className="text-red-500">SUBSCRIBE TO OUR BLOG</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Nav;