import waterFall from "../../src/assets/ninoskhevi.jpg";
import batumi from "../../src/assets/batumi.jpg";
import svaneti from "../../src/assets/svaneti.jpg";
import uplistsikhe from "../../src/assets/uplistsikhe.jpg"


type Destination ={
   id: number;
   imgsrc:string;
   desTtitle:string;
   location:string;
   grade:string
  };
  const Data: Destination[] = [
   {
     id: 1,
     imgsrc: waterFall,
     desTtitle: "Ninos river's Waterfall",
     location:
       "Waterfall is located in Kakheti, 8 km from the village of Gurgeniani, on the river Ninoskhevi",
     grade: "10/10",
   },
   {
     id: 2,
     imgsrc: svaneti,
     desTtitle: "Svaneti Mountain View",
     location:"Waterfall is located in Kakheti, 8 km from the village of Gurgeniani, on the river Ninoskhevi",

     grade: "10/10",
   },
   {
     id: 3,
     imgsrc: uplistsikhe,
     desTtitle: "Uplistsikhe Ancient Rock Town",
     location:
       "Explore the ancient rock-hewn town of Uplistsikhe, located in eastern Georgia Most popular",
     grade: "10/10",
   },
   {
     id: 4,
     imgsrc: batumi,
     desTtitle: "Batumi Beach Paradise",
     location:
       "Relax on the beautiful beaches of Geogia Batumi sea, enjoying the Black Sea breeze mposs sss",
     grade: "10/10",
   },
 ];
 
export default Data;