
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import {useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    
    const shownav=()=>{
        setActive("navBar activNavbar")

    }
    const removenav=()=>{
        setActive("navBar")

    }
    //code for add background color to the headder
    const[transparent, setTransparent]= useState('header')
    const addbg=()=>{
        if(window.scrollY>=10){
            setTransparent("header activHeader")
        }
        else{
            setTransparent("header")


        }
    }
    window.addEventListener("scroll", addbg)

    
    return (
        <section className="navBarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className="flex">
                            <SiYourtraveldottv className="icon" /> Dot
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navList flex ">
                        <li className="navItems">
                            <a href="#" className="navLink"> Home</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink"> Prodouct</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink"> Resources</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink"> Conatct</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink"> Blog</a>
                        </li>
                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login </a>
                            </button>
                            <button className='btn Sign Up'>
                                <a href="#">Sign Up</a>
                            </button>
            </div>
                    </ul>
                            <div onClick={removenav} className="closeNavbar">
                                <AiFillCloseCircle className="icon" />
                            </div>
                            </div>

                            <div onClick={shownav} className="ToggleNavbar">
                                <TbGridDots className="icon" />
                            </div>
                        </div>
                
        </section>
    );
}

export default Navbar;
