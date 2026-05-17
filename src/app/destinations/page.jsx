// -----------------------------Start: 52_4 ---------------------------------------
// (1)st
import React from 'react';
import DestinationCard from '../components/DestinationCard';



// const DestinationPage = () => {
    // (4)
const DestinationPage = async () => {
// (3)st API Calling for get/display
// const res = await fetch('http://localhost:5000/destination')
// 54_8(7)${process.env.NEXT_PUBLIC_SERVER_URL}
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
const destinations = await res.json()
console.log(destinations);
// (3)en ----------------------------

    return (
        // <div>
        // (14)then (start: 52_5) go to layout.js file 
        <div className="max-w-7xl mx-auto">
            {/* Destination Page */}
            {/* (5)st */}
            <h1>All destinations</h1>
            {/* <div> */}
            {/* (11) then in DestinationCard.jsx file*/}
            <div className="grid grid-cols-4 gap-5">
                {
                    // destinations.map(destination => <div key={destination._id}>
                    //     {destination.destinationName}
                    //     </div>)

                        // (9)st
                        destinations.map(destination => <DestinationCard key={destination._id} destination = {destination}/>)
                        // (9)en then in next.config.mjs file to configuration image and check in browser then in DestinationCard.jsx
                }
            </div>     
            {/* (5)en then create DestinationCard.jsx file in components folder */}
        </div>
    );
};

export default DestinationPage;
// (1)en then go to wandelust server
// ---------------------End:52_4-(1) to () --------------------------------
