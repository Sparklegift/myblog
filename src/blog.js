import {useParams} from "react-router-dom";
import { useBlogContext } from "./Blogcontext";
import Nav from "./Nav";


const Blogpreview = () => {

const {id} = useParams();
const { blogArray } = useBlogContext();


const blog = blogArray.find((b) => b.id === parseInt(id));

    return ( 
        <div>
            <Nav />
            <div className="preview md:p-28 pt-20">
                <div className="grid justify-center items-center">
                    <div className="md:ml-40 ml-10">
                        <h1 className="md:text-3xl text-2xl font-bold">Blog Details {id}</h1>
                        <h1 className="md:text-xl md:pt-4 pt-3 underline">{blog.title}</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="md:w-8/12 p-10 text-justify text-sm md:text-base">{blog.content}</p>
                    </div>
                    <div className="relative">
                         <h2 className="text-red-600 absolute md:right-44 right-16 bottom-2 text-sm md:text-base">{blog.publisher}</h2>
                    </div>
                </div>
            </div>
        </div>     
     );
}
 
export default Blogpreview;