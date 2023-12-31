import "./popular.css"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import { useEffect } from "react";
import Axios from "axios"
import Data from "../../DataObjects/Data"

import { BsDot } from "react-icons/bs";



const Popular = () => {
    useEffect(() => {
      const Getresponse = async ():Promise<void> => {
        try {
          const response = await Axios.get(
            'https://travel-info-api.p.rapidapi.com/find-embassy',
            {
                params: {
                    source: 'turkey',
                    destination: 'usa'
                  },
                  headers: {
                    'X-RapidAPI-Key': '055c96aa8dmshd87960b6c35c5d0p16b342jsn47ba8ebe6c46',
                    'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
                  }
          });
  
          console.log(response);
    } catch (error) {
          console.error("error", error);
        }
      };
  
      Getresponse();
    }, []);


    return ( 
        <>
        {/* <button onClick={GetresponseR}></button> */}
        <section className="popular section container">
             <div className="secContainer">
                
                <div className="secheader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular destination
                        </h2>
                        <p>From historical cities to natural specteculars,
                    come see the best of the world</p>
                    </div>
                    <div className="iconsDiv flex">
                        <FaArrowLeft className="icon lefticon"/>
                        <FaArrowRight className="icon lefticon"/>

                         
                    </div>
                </div>
                <div className="mainContent grid">
                    
                    {
                        Data.map(({id, imgsrc, desTtitle, location, grade})=>{
                            return(
                                <div className="singleDestination" key={id}>
                        <div className="desimag">

                            <img  className="img" src={imgsrc} alt="Image titile" />
                            {/* <img  className="" src={charch} alt="img title" /> */}
                            <div className="overalyInfo">
                                <h3>{desTtitle}</h3>
                                <p>{location}</p>

                            <BsArrowRightShort className="icon"/>
                            </div>

                        </div>
                        <div className="desFooter">
                            <div className="number">
                                0{id}
                            </div>
                            <div className="destText flex">
                                <h6>{location}</h6>
                                <span className="flex">
                                    <span className="dot">
                                    <BsDot  className="icon"/>


                                    </span>
                                    {grade}
                                </span>

                            </div>
                        </div>
                    </div>
                            )
                        })
                    }

                </div>
            
             </div>

        </section>
</>
     );
}
export default Popular;