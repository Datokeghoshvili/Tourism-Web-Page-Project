import { BsArrowRightShort } from "react-icons/bs";
import "./blog.css"
import Datablog from "../Blog/Datablog";
const Blog = () => {
    return ( <section className="blog container section">
        <div className="secContainer ">
            <div className="secIntro">
                <h2 className="secTitle ">
                    Best our blog?
                </h2>
                <p>Beauteful pleaces Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mainContainer grid">
                {
                    Datablog.map(({id, postImg,title,desc})=>{
                        return(<div className="singlePost grid" key={id}>
                          <div className="imgDiv">
                            <img src={postImg} alt="image " />
    
                        </div>

                        <div className="postDetails">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                        <a href="#" className="flex">
                            Read More
                            <BsArrowRightShort className="icon"/>
                        </a>
                        
                    </div>)
                    })
                }
                

            </div>
        </div>

    </section> );
}
 
export default Blog;