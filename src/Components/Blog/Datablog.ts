import img1 from "../../assets/tba.jpg";
import img2 from "../../assets/Old-Town batumi.jpg"
import img3 from "../../assets/Ushguli-Svaneti.jpg"
import img4 from "../../assets/tba.jpg"







type Datablog ={
    id:number;
    postImg:string;
    title:string;
    desc:string;
}
const Posts:Datablog[]=[{
    id:1,
    postImg: img1,
    title:"black mountaing lake",
    desc:" Black Rocks Lake is located 3000 meters above sea level. The hiking trail to this location is so special because of its views and different kinds of zones. There are so many rare animal and plant species in Lagodekhi National Park which will make your trip even more interesting. Most of them are included in the Red List.  "



},
{
    id:2,
    postImg: img2,
    title:" all the best things to do in Batumi",
    desc:"Beyond the beach, Batumi offers bizarre architecture, beautiful nature, an excellent cafe culture, vibrant markets, street art, and much more."

},

{
    id:3,
    postImg: img3,
    title:"Ushguli",
    desc:"Some of the villages, like Ushguli  which is, by the way, one of the highest and most remote villages of Europe (2200m above sea level), were completely closed off from the rest of the world during the long and harsh winters"
},
{
    id:4,
    postImg:img4,
    title: "Visiting Uplistsikhe Cave Town, Georgia&nbsp;",
    desc:"Uplistsikhe is Georgia’s oldest cave towns among many, located in the Shida Kartli region very near to the city of Gori. In this guide, you’ll learn how to visit Uplistsikhe independently from Gori and Tbilisi as well as see organized day trip options from "

}

];
export default Posts;