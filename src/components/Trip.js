import TripData from "./TripData"
import "./TripsStyles.css"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image="https://i.pinimg.com/736x/02/21/ad/0221ad079845c3157be2a3e2bef978ce.jpg"
                heading="Trip in Bali"
                text="No island has enchanted travelers quite like Bali. Less than half the size of Hawaii’s big island, Bali manages to pack countless adventures into one small package. Dazzling beaches beckon the sun seekers and surfers along the island’s southwest coast, while ancient temples and a thriving wellness scene draw travelers inland to Ubud."
                />
                <TripData
                image="https://lh3.googleusercontent.com/p/AF1QipNyWggkXEOZPpwlmDZH3oWfDdfTZ7zjhr7zXIwe=s680-w680-h510"
                heading="Trip in Tashkent"
                text="Traditional architecture, Soviet-era landmarks, and modern museums are the major draws of Uzbekistan’s history-rich capital. The largest city in Central Asia, Tashkent also offers varied cuisine and plenty of accommodation options, as well as a lofty television tower that offers panoramic views."
                />
                <TripData
                image="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/IMG_3126-0-0-0-0-1592392591.jpg"
                heading="Trip in Khiva"
                text="Khiva is a beautiful oasis city with ancient walls, minarets and unique clay buildings. Within the framework of the XI session of the Organization of Islamic Cooperation (OIC) in Baku, Khiva was declared as the tourist capital of the Islamic world in 2024! Khiva is over 2500 years old. If you want to plunge into history and see the true beauty of the ancient East, then welcome to Khiva."
                />
            </div>
        </div>
    )
}
export default Trip