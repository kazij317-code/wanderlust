// // -----------------------------Start: 52_5 ---------------------------------------
// // (6)st
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import React from 'react';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';

// // const DestinationDetailsPage = () => {
// // (8)st
// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     // (10)st API Calling for details display
//     const res = await fetch(`http://localhost:5000/destination/${id}`)
//     const destination = await res.json()
//     // (10)en
//     // console.log(id);
//     // (11)
//     // console.log(destination);

//     // (8)en then go to server site

//     // (12) commit (11)
//     // const { imageUrl, price, destinationName, duration, country } = destination;
//     // (16) commit (12)
//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (
//         // <div>
//         // (14)
//         <div className="max-w-7xl mx-auto">
//             {/* DestinationDetailPage */}
//             {/* (13) st*/}
//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />
//             {/* (13) en*/}
//             {/* (15)st copy from destination card */}
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
//                 {/* (17)st */}
//                 <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                 <p>{description}</p>
//                 {/* (17)en then then (start: 52_6) in this page   */}
//             </div>
//             {/* (15)en */}

//         </div>
//     );
// };

// export default DestinationDetailsPage;
// // (6)en then go to DestinationCard.jsx file
// // ---------------------End:52_5-(1) to () --------------------------------
// // -----------------------------Start: 52_6 ---------------------------------------

// import { EditModal } from '@/app/components/EditModal';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import React from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';


// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     //API Calling for details display
//     const res = await fetch(`http://localhost:5000/destination/${id}`)
//     const destination = await res.json()
//     //-----------------------------------

//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (

//         <div className="max-w-7xl mx-auto">
//           {/* (1)st */}
//           {/* <div className="flex justify-end">
//             <Button variant ="outline" className={"rounded-none mt-5 mb-3"}><BiEdit/>Edit</Button>
//           </div> */}
//           {/* (1)en  then create EditModal.jsx file in components folder*/}

//           {/* (9)commit (1) then install gravity ui and got EditModal.jsx file*/}
//           {/* <EditModal/> */}
//           {/* (13) then go to EditModal page*/}
//           <EditModal destination ={destination}/>
//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />

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

//                 <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                 <p>{description}</p>

//             </div>


//         </div>
//     );
// };

// export default DestinationDetailsPage;

// // ---------------------End:52_6-(1) to () --------------------------------
// // -----------------------------Start: 52_7 ---------------------------------------

// import { DeleteAlert } from '@/app/components/DeleteAlert';
// import { EditModal } from '@/app/components/EditModal';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import React from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';


// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     //API Calling for details display
//     const res = await fetch(`http://localhost:5000/destination/${id}`)
//     const destination = await res.json()
//     //-----------------------------------

//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (

//         <div className="max-w-7xl mx-auto">

//           {/* <EditModal destination ={destination}/> */}
//           {/* (3) then go to DeleteAlert file */}
//           {/* <DeleteAlert/> */}

//           {/* (6)st commit previous */}
//           {/* <div className="flex items-center gap-3 justify-end"> */}
//           {/* (9) then go go to DeleteAlert */}
//           <div className="flex items-center gap-3 justify-end mt-5 mb-3">
//           <EditModal destination ={destination}/>          
//           {/* <DeleteAlert/> */}
//           {/* (12) then go to DeleteAlert*/}
//           <DeleteAlert destination ={destination}/>
//           </div>
//           {/* (6)en then go to Delete then go to DeleteAlert file*/}
//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />

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

//                 <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                 <p>{description}</p>

//             </div>


//         </div>
//     );
// };

// export default DestinationDetailsPage;

// // ---------------------End:52_7-(1) to () --------------------------------
// // -----------------------------Start: 53_5 ---------------------------------------
// import BookingCard from '@/app/components/BookingCard';
// import { DeleteAlert } from '@/app/components/DeleteAlert';
// import { EditModal } from '@/app/components/EditModal';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import React from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';

// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     //API Calling for details display
//     const res = await fetch(`http://localhost:5000/destination/${id}`)
//     const destination = await res.json()
//     //-----------------------------------

//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (

//         <div className="max-w-7xl mx-auto">

//             <div className="flex items-center gap-3 justify-end mt-5 mb-3">
//                 <EditModal destination={destination} />

//                 <DeleteAlert destination={destination} />
//             </div>

//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />
//             {/* (2)st */}
//             {/* <div className='p-2'>
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
            
//                 <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                 <p>{description}</p>
                
//             </div> */}
//             {/* (2)en */}

//             {/* (3)st copy (2) inside it */}
//             <div className="flex justify-between">
//                 <div className='p-2'>
//                     <div className="flex items-center gap-1">
//                         <LuMapPin /><span>{country}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <div>
//                             <div>
//                                 <h2 className="text-xl font-bold">{destinationName}</h2>
//                             </div>
//                             <div className="flex gap-1 items-center"><FaRegCalendar />{duration}
//                             </div>
//                         </div>
//                         {/* <div>
//                             <h3 className="text-2xl font-bold">${price}</h3>
//                         </div> */}
//                     </div>

//                     <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                     <p>{description}</p>

//                 </div>
//                 {/* <BookingCard /> */}
//                 {/* (5) then go to BookingCard */}
//                 <BookingCard destination={destination} />
//             </div>
//             {/* (3)en then go to BookingCard */}

//         </div>
//     );
// };

// export default DestinationDetailsPage;

// // ---------------------End:53_5-(1) to () --------------------------------
// // -----------------------------Start: 54_2 ---------------------------------------
// import BookingCard from '@/app/components/BookingCard';
// import { DeleteAlert } from '@/app/components/DeleteAlert';
// import { EditModal } from '@/app/components/EditModal';
// import { Button } from '@heroui/react';
// import Image from 'next/image';
// import React from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';

// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     //API Calling for details display
//     // const res = await fetch(`http://localhost:5000/destination/${id}`)
//     // (1)st
//     const res = await fetch(`http://localhost:5000/destination/${id}`, {
//         headers: {
//             authorization: "logged in"
//         }
//     });
//     // (1)en then go to server
//     const destination = await res.json()
//     //-----------------------------------

//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (

//         <div className="max-w-7xl mx-auto">

//             <div className="flex items-center gap-3 justify-end mt-5 mb-3">
//                 <EditModal destination={destination} />

//                 <DeleteAlert destination={destination} />
//             </div>

//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />
            
//             <div className="flex justify-between">
//                 <div className='p-2'>
//                     <div className="flex items-center gap-1">
//                         <LuMapPin /><span>{country}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <div>
//                             <div>
//                                 <h2 className="text-xl font-bold">{destinationName}</h2>
//                             </div>
//                             <div className="flex gap-1 items-center"><FaRegCalendar />{duration}
//                             </div>
//                         </div>
                        
//                     </div>

//                     <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                     <p>{description}</p>

//                 </div>
                
//                 <BookingCard destination={destination} />
//             </div>
            

//         </div>
//     );
// };

// export default DestinationDetailsPage;

// // ---------------------End:54_2-(1) to () --------------------------------
// // -----------------------------Start: 54_4 ---------------------------------------
// import BookingCard from '@/app/components/BookingCard';
// import { DeleteAlert } from '@/app/components/DeleteAlert';
// import { EditModal } from '@/app/components/EditModal';
// import { auth } from '@/lib/auth';
// import { Button } from '@heroui/react';
// import { headers } from 'next/headers';
// import Image from 'next/image';
// import React from 'react';
// import { BiEdit } from 'react-icons/bi';
// import { FaRegCalendar } from 'react-icons/fa';
// import { FiExternalLink } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';

// const DestinationDetailsPage = async ({ params }) => {
//     const { id } = await params
//     // (4)st
//     // const token = await auth.api.getToken({
//     // (5)
//     const {token} = await auth.api.getToken({
//         headers: await headers()
//     })
//     // console.log(token)
//     // (4)en
//     //API Calling for details display 
//     // 54_8(8)${process.env.NEXT_PUBLIC_SERVER_URL}   
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
//         headers: {
//             // authorization: "logged in"
//             // (6) then go to server     
//             authorization: `Bearer ${token}`      
//         }
//     });
    
//     const destination = await res.json()
//     //-----------------------------------

//     const { imageUrl, price, destinationName, duration, country, description } = destination;

//     return (

//         <div className="max-w-7xl mx-auto">

//             <div className="flex items-center gap-3 justify-end mt-5 mb-3">
//                 <EditModal destination={destination} />

//                 <DeleteAlert destination={destination} />
//             </div>

//             <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />
            
//             <div className="flex justify-between">
//                 <div className='p-2'>
//                     <div className="flex items-center gap-1">
//                         <LuMapPin /><span>{country}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <div>
//                             <div>
//                                 <h2 className="text-xl font-bold">{destinationName}</h2>
//                             </div>
//                             <div className="flex gap-1 items-center"><FaRegCalendar />{duration}
//                             </div>
//                         </div>
                        
//                     </div>

//                     <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
//                     <p>{description}</p>

//                 </div>
                
//                 <BookingCard destination={destination} />
//             </div>
            

//         </div>
//     );
// };

// export default DestinationDetailsPage;

// // ---------------------End:54_4-(1) to () --------------------------------
// -----------------------------Start: 54_10 ---------------------------------------
import BookingCard from '@/app/components/BookingCard';
import { DeleteAlert } from '@/app/components/DeleteAlert';
import { EditModal } from '@/app/components/EditModal';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegCalendar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params
    
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
       
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
             
            authorization: `Bearer ${token}`      
        }
    });
    
    const destination = await res.json()
    //-----------------------------------

    const { imageUrl, price, destinationName, duration, country, description } = destination;

    return (

        <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-3 justify-end mt-5 mb-3">
                <EditModal destination={destination} />

                <DeleteAlert destination={destination} />
            </div>

            <Image className="" alt={destinationName} src={imageUrl} height={600} width={600} />
            
            {/* <div className="flex justify-between"> */}
            {/* (2) then create app/not-found.js  */} 
            <div className="flex justify-between gap-10">
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
                        
                    </div>

                    <h1 className="mt-10, text-2xl, font-bold">Overview</h1>
                    {/* <p>{description}</p> */}
                    {/* (1) */}
                    <p className="max-6xl">{description}</p>

                </div>
                
                <BookingCard destination={destination} />
            </div>
            

        </div>
    );
};

export default DestinationDetailsPage;

// ---------------------End:54_10-(1) to () --------------------------------