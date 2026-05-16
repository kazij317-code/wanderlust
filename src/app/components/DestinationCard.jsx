// // -----------------------------Start: 52_4 ---------------------------------------
// // (6)st
// import Image from 'next/image';
// import React from 'react';
// import { FaRegCalendar } from 'react-icons/fa';
// import { LuMapPin } from 'react-icons/lu';

// // const DestinationCard = () => {
// // (7)
// const DestinationCard = ({ destination }) => {
//     // (8)
//     const { imageUrl, price, destinationName, duration, country } = destination;
//     return (
//         // <div>
//         // (12)
//         <div className="border">
//             {/* (8)st */}
//             <Image
//                 alt={destinationName}
//                 src={imageUrl}
//                 height={400}
//                 width={400}
//                 className="w-full h-64 object-cover"
//             />
//             {/* (8)en then in destinations page*/}
//             {/* (10)st install react icon*/}
//             {/* <div> */}
//             {/* (13) then go to destinations page*/}
//             <div className='p-2'>
//                 <div className="flex items-center gap-1">
//                     <LuMapPin /><span>{country}</span>
//                 </div>
//                 <div className="flex justify-between">
//                     <div>
//                         <div>
//                             <h2 className="text-xl font-bold">{destinationName}</h2>
//                         </div>
//                         <div className="flex gap-1 items-center"><FaRegCalendar />{duration}
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-bold">${price}</h3>
//                     </div>
//                 </div>



//             </div>
//             {/* (10)en then go to destinations page */}
//         </div>
//     );
// };

// export default DestinationCard;
// // (6)en
// // ---------------------End:52_4-(1) to () --------------------------------
// -----------------------------Start: 52_5 ---------------------------------------
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';


const DestinationCard = ({ destination }) => {

    // const { imageUrl, price, destinationName, duration, country } = destination;
    // (7-2)then go to [id] page
    const { _id, imageUrl, price, destinationName, duration, country } = destination;
    return (

        <div className="border">

            <Image
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
                className="w-full h-64 object-cover"
            />

            <div className='p-2'>
                <div className="flex items-center gap-1">
                    <LuMapPin /><span>{country}</span>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">{destinationName}</h2>
                        </div>
                        <div className="flex gap-1 items-center"><FaRegCalendar />{duration}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">${price}</h3>
                    </div>
                </div>
                {/* (5) then create page.jsx file creating [id] folder in destinations folder*/}
                {/* <Button variant="host" className="mt-1 text-cyan-500"><FiExternalLink /> Book Now</Button> */}
                {/* (7-1) */}
                <Link href={`/destinations/${_id}`}><Button variant="host" className="mt-1 text-cyan-500"><FiExternalLink /> Book Now</Button></Link>
                
            </div>

        </div>
    );
};

export default DestinationCard;

// ---------------------End:52_5-(1) to () --------------------------------