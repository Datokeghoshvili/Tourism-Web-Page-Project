
import { MdBathtub } from "react-icons/md";
import { MdKingBed } from "react-icons/md";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


import {FaWifi} from "react-icons/fa"
import './offers.css'
import { BsArrowRightShort } from "react-icons/bs";
// import img from "../../assets/"
import DataOff from "../../Components/Offers/OffersData"

const Offers = () => {
    return ( 
        <section className="offer container section">
            <div className="secContainer ">

                <div className="secIntro ">
                    <h2 className="secTitle  ">
                        special offer
                    </h2>
                    <p>
                    From historical cities to natural specteculars, come see 
                    the best of the world
                    </p>
                </div>
                <div className="mainContent grid ">
                    {
                        DataOff.map (({id, imgsrc, desTtitle, location, price})=>{
                            return(
                                <div className="singleOffer "key={id}>
                                <div className="destImage">
                                    <img src={imgsrc} alt={desTtitle} />
                                    <span className="discount">
                                        30% offer
                                    </span>
        
                                </div>
                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>
                                        {price}$
                                        </h4>
                                        <span className="status">
                                             for rent
                                        </span>
                                    </div>
                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                        <MdKingBed  className="icon"/>
                                        <small> 2 Beds</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                        <MdBathtub className="icon"/>
                                        <small>1 Bath</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                        <FaWifi  className="icon"/>
                                        <small>Wi-fi</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                        <MdAirportShuttle  className="icon"/>
                                        <small> shuttle</small>
                                        </div>
                                    </div>
                                    <div className="location flex">
                                        <MdLocationOn className="icon"/>
                                        <small>450 vine # 310, {location} </small>
                                    </div>
                                    <button className="btn flex">
                                        View Details
                                        <BsArrowRightShort  className ="icon"/>
                                    </button>
                                </div> 
        
                            </div>
                            )
                        })
                    }
                </div>
            </div>



        </section>
     );
}
 
export default Offers;