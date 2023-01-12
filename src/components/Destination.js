import DestinationData from "./DestinationData"
import './DestinationStyles.css'
import r from "../assets/registan_1.jpg"
import j from "../assets/registan_2.jpg"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData
            cName="first-des"
            imgc="image"
            heading="Registan, Samarkand"
            text='Registan Square in Samarkand is one of the outstanding examples of urban development art in Central Asia. The name of the square - “Registan” means "sandy place". A true version explaining the name of this square in Samarkand, the center of a fertile oasis, says that in the Middle Ages in all cities of Mavarannahr, the central squares were called Registan - administrative, trade and artisan centers of eastern cities. During the reign of Timur (1370-1405) Registan was the main trading area. And then only during the reign of Ulugbek it acquired an official character.'
            img1={r}
            img2={j}
            />

            <DestinationData
            cName="first-des-reverse"
            imgc="image-reverse"
            heading="Itchan Kala, Khiva"
            text='Would You like to visit the real past? See a real historical town, wander through the old streets? This is all real, just come to Khiva, and you will see a real Eastern fairy tale - the open-air fortress -city of Ichan-Kala, which is a treasure of Uzbekistan and contains numerous madrassahs, mosques, minarets, cells, craft workshops and Inns. In addition, strange as it may seem, people live and work in this unique historical city, who at any time of the year will meet every guest with a smile, show and tell about all the wonders of this place. The walls of the city were built in the V-VI centuries.'
            img1="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/khiva1-0-0-0-0-1582874946-0-0-0-0-1582875134.jpg"
            img2="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/fa/f8/7d/caption.jpg?w=1200&h=-1&s=1"
            />
        </div>
    )
}
export default Destination