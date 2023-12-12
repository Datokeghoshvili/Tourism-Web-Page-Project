import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css"




const Footer = () => {

    return (  
        <div className="footer section">
            <div className="secContainer container grid">
                <div className="lodoDiv">
                    <div className="footerLogo">
                        <a href="" className="logo flex">
                            <h1 className="flex"><SiYourtraveldottv className ="icon"/>
                            Dor</h1>
                        </a>
                    </div>
                    <div className="socials flex">
                <ImFacebook className ="icon" />
                <BsTwitter className ="icon" />
                <AiFillInstagram className ="icon" />




                </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>


                    
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                   

                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Helpfull Links
                    </span>
                    <li> <a href="#">Destination</a>
                            </li>
                            <li>
                            <a href="#">Support</a>
                            </li>
                            <li>
                            <a href="#">Travel & Conditions</a>
                            </li>
                            <li>
                            <a href="#">Privacy</a>
                            </li> 



                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact us
                    </span>
                    <span className="phone">+995 599318337</span>
                    <span className="email">kegoshvili.d@gmail.com</span>
                    





                </div>

               
               

            </div>

            
        </div>
    );
}
 
export default Footer;


