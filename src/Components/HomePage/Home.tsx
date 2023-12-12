

import "./home.css";
import "aos/dist/aos.css"

const Home = () => {
    return (
        <section className="home">
        <div className="home">
            <div className="secContainer container">
                <div className="hometext">
                    <h1 className="title">
                        Plan Your Trip With Traveler dot
                    </h1>
                    {/* <p className="subTitle">
                        Pleasure With Travel

                    </p> */}
                  
                </div>
                <div className="homecard grid">

                    <div className="locationDiv">
                        <label htmlFor="location">location</label>
                        <input type="text" placeholder="Dream Destination" />
                    </div>
                    <div className="distDiv">
                        <label htmlFor="location">location</label>
                        <input type="text" placeholder="11/Meters" />
                    </div>
                    <div className="priceDiv">
                        <label htmlFor="location">location</label>
                        <input type="text" placeholder="Dream Destination" />
                    </div>

                    
                    
                    <button className="btn">
                        Search
                    </button>
                </div>

            </div>
        </div>
        </section>
    );
}

export default Home;
