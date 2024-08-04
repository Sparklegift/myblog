import { Link } from "react-router-dom";
import { useBlogContext } from "./Blogcontext";


const HOME = () => {

    const { blogArray } = useBlogContext();

    return ( 
        <div className="custom text-center pt-20 relative md:grid ">
            <h1 className="md:text-6xl text-xl font-bold">News You Can Use</h1>
            <div className="flex justify-center">
                <h2 className="pt-6 text-sm md:text-base w-10/12">Stay ahead of the curve with our daily digest of actionable insights.</h2>
            </div>
            <div className="h-75 flex justify-center">
                <div className="absolute md:left-44 w-9/12 grid justify-center items-center gap-10 md:pt-16 pt-10">
                    {blogArray.map((blog) => (
                        <div key={blog.id} data={blog} className="shadow-md hover:scale-105 md:flex grid justify-center gap-5 md:gap-10  bg-stone-300 p-2 md:p-6 rounded-md">
                            <Link to={`/blog/${blog.id}`} >
                                <img className="md:w-80 rounded-md min-w-32 min-h-32 " src={blog.image} alt="blogimage"/>
                            </Link>
                            <div className="text-left md:pl-8 ">
                                <h1 className="md:text-xl text-lg font-semibold">Title:</h1>
                                <Link to={`/blog/${blog.id}`}>
                                    <h1 className="md:text-base text-xs font-semibold pt-1 min-w-40 hover:text-red-500">{blog.title}</h1>
                                </Link>
                                <h2 className="md:pt-20 pt-5 text-red-600 text-xs md:text-base">{blog.publisher}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="section1" className="md:flex justify-center md:pb-40 pb-20">
                <div className="flex justify-center w-screen">
                    <div className="md:h-24 h-20 w-9/12 bg-red-700 md:rounded-full rounded-md flex items-center justify-center">
                        <div className="grid gap-2 md:flex md:gap-32">
                            <h1 className="text-white md:text-4xl text-sm font-bold ">Subscribe to our blog</h1>
                            <div className="md:h-14 h-7 md:w-96 w-52  bg-white md:rounded-full rounded-md relative flex justify-center items-center">
                                <input type="text" className="md:text-sm text-xs placeholder-gray-400 border-none outline-none absolute md:left-14" placeholder="Enter email address" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="md:size-10 size-5 absolute right-4 md:right-7 hover:translate-x-1">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div> 
        </div>
     );

}
 
export default HOME;