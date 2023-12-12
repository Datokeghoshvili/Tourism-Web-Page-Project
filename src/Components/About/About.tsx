import img from "../../assets/mountain.jpg";
import img1 from "../../assets/hiking.jpg";
import img2 from "../../assets/climbingg.jpg";
import video from "../../assets/x2mate.com-Lagodekhi Waterfall. Georgia. Kakheti. July 2023.mp4"
import "./about.css";


const About = () => {
  return ( 
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          why is hiking
        </h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img} alt="imgname" />
            <h3>100 mountaineer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi, quisquam
              quo ipsa eius ab deserunt fugia
            </p>
          </div>

          <div className="singleItem">
            <img src={img1} alt="imgname" />
            <h3>100+ mountaineer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi, quisquam
              quo ipsa eius ab deserunt fugia
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="imgname" />
            <h3>1000+ Hikings</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi, quisquam
              quo ipsa eius ab deserunt fugia
            </p>
          </div>
        </div>
        <div className="videoCard container">
            <div className="cardContent grid">

                <div className="cardText">
                    <h2> Wonderful house experience here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo sint nesciunt.</p>
                </div>
                <div className="cardVideo">
                    <video  src={video} autoPlay loop muted typeof="video/mp4">play</video>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}

export default About;
