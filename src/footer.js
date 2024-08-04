const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <div className="footer md:h-80 h-44 bg-zinc-950 text-white grid items-center ">
            <div className="flex justify-center items-center pt-3">
                <h1 className="md:text-6xl text-2xl text-center w-9/12 md:w-7/12">Let’s Read something amazing together</h1>
            </div>

            <div className="w-full border-t-0.5 border-gray-400 relative flex justify-center">
               <div id="section2"  className="grid justify-center items-center absolute md:top-2 top-1 md:left-10 left-3 ">
                    <div className="md:w-40 flex items-center w-20 ">
                        <div className="hover:scale-125">
                            <a href="https://x.com/De_Developer001" target="_blank" rel="noopener noreferrer">
                                <img src="/Image/5.png" />
                            </a>
                        </div>
                        <a href="https://www.linkedin.com/in/god-sgift-etuk-a6111b271/" target="_blank" rel="noopener noreferrer">
                            <img className="hover:scale-125" src="/Image/6.png" />
                        </a>
                        <a href="https://github.com/Sparklegift" target="_blank" rel="noopener noreferrer">
                            <img className="hover:scale-125" src="/Image/7.png" />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61554735996113" target="_blank" rel="noopener noreferrer">
                            <img className="hover:scale-125" src="/Image/8.png" />
                        </a>
                    </div>
               </div>

               <div className="grid justify-center items-center absolute md:top-3 top-2 md:text-base text-xs">
                    <h1>In Gist we Stand!</h1>     
               </div>

               <div className="absolute right-10 md:top-3 top-2 md:text-base text-xs"> ® {currentYear}</div>
            </div>
        </div>
     );
}
 
export default Footer;