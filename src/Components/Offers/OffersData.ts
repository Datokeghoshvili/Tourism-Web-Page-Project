import offsvaneti from "../../assets/offsvaneti.jpg";
import offuplistsikhe from "../../assets/uplistsikhe.jpg";
import offbatumi from "../../assets/offbatumi.jpg";
import offlagodekhi from "../../assets/waldhotel.jpg";

type OffersData = {
    id: number;
    imgsrc: string;
    desTtitle: string;
    location: string;
    price: number; // Change the type according to your use case
}

const DataOff: OffersData[] = [
    {
        
            id: 4,
            imgsrc: offlagodekhi,
            desTtitle: "Lagodekhi Offer",
            location: "Lagodekhi, Georgia",
            price: 800,
        },
        {
        id: 1,
        imgsrc: offsvaneti,
        desTtitle: "Svaneti Offer",
        location: "Svaneti, Georgia",
        price: 500,
    },

    {
        id: 2,
        imgsrc: offuplistsikhe,
        desTtitle: "Uplistsikhe Offer",
        location: "Uplistsikhe, Georgia",
        price: 600,
    },

    {
        id: 3,
        imgsrc: offbatumi,
        desTtitle: "Batumi Offer",
        location: "Batumi, Georgia",
        price: 700,
    }
];
export default DataOff;