// // -----------------------------Start: 53_7---------------------------------------

// // (2)st
// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';
// import React from 'react';

// // const MyBookingPage = () => {
//     // (5)
// const MyBookingPage = async () => {
//     // (7)st from auth documentation
//     const session = await auth.api.getSession({
//         headers: await headers()//you need to pass the headers object
//     })
//     // console.log(session)
//     const user = session?.user
//     // console.log(user)
//     // (7)en
//     // (6)
// // const res = await fetch(`http://localhost:5000/booking/6a071dd312cba9d4fe0c4f85`)
// // (8)
// const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
// // (9)st
// const data = await res.json()
// console.log(data)
// // (9)en then (start: 53_8)  in this page


//     return (
//         <div className="max-w-7xl mx-auto">
//             <h1 className='text-3xl font-bold'>My Bookings</h1>
//         </div>
//     );
// };

// export default MyBookingPage;
// // (2)en then go to server
// // ---------------------End:53_7-(1) to () --------------------------------
// // -----------------------------Start: 53_8---------------------------------------

// import { auth } from '@/lib/auth';
// import { TrashBin } from '@gravity-ui/icons';
// import { Button } from '@heroui/react';
// import { headers } from 'next/headers';
// import Image from 'next/image';
// import React from 'react';
// import { BookingCancelAlert } from '../components/BookingCancelAlert';


// const MyBookingPage = async () => {

//     const session = await auth.api.getSession({
//         headers: await headers()//you need to pass the headers object
//     })

//     const user = session?.user

// const res = await fetch(`http://localhost:5000/booking/${user?.id}`)

// // (1)st
// // const data = await res.json()
// // console.log(data)
// // (1)en

// // (2)st commit (1)
// const bookings = await res.json()
// // console.log(bookings)
// // (2)en

//     return (
//         <div className="max-w-7xl mx-auto">
//             <h1 className='text-3xl font-bold'>My Bookings</h1>
//             {/* (3)st */}
//             <div className="space-y-5">
//                 {
//                     bookings.map(booking => 
//                     <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
//                         <Image
//                             src={booking.imageUrl}
//                             alt ={booking.destinationName}
//                             height={200}
//                             width={200}
//                         />
//                         <div>
//                             <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
//                             <p>
//                                 {new Date(booking.departureDate).
//                                 toLocaleDateString("en-us",{
//                                     year: "numeric",
//                                     month: "long",
//                                     day: "numeric",
//                                 })}
//                             </p>
//                             <p>Booking Id: {booking._id}</p>
//                             <p className="text-3xl font-bold tex-cyan-500">${booking.price}</p>
//                             {/* (7) */}
//                             {/* <BookingCancelAlert/> */}
//                             {/* (12) then go to BookingCancelAlert page*/}
//                             <BookingCancelAlert bookingId={booking._id}/>
//                             {/* (8)cut it to BookingCancelAlert page */}
//                             {/* <Button className={'rounded-none border-red-500 text-red-500'} variant="outline"><TrashBin/>Cancel</Button> */}
//                         </div>

//                     </div>)
//                 }
//             </div>
//             {/* (3)en then go to server */}
//         </div>
//     );
// };

// export default MyBookingPage;

// // ---------------------End:53_8-(1) to () --------------------------------
// -----------------------------Start: 54_6---------------------------------------
import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BookingCancelAlert } from '../components/BookingCancelAlert';


const MyBookingPage = async () => {



    const session = await auth.api.getSession({
        headers: await headers()//you need to pass the headers object
    });
    // (4)st
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })
    // (4)en

    const user = session?.user
    // const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    // (5)st
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    // (5)en then to to server then go to BookingCancelAlert page
    const bookings = await res.json()


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='text-3xl font-bold'>My Bookings</h1>

            <div className="space-y-5">
                {
                    bookings.map(booking =>
                        <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                height={200}
                                width={200}
                            />
                            <div>
                                <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
                                <p>
                                    {new Date(booking.departureDate).
                                        toLocaleDateString("en-us", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                </p>
                                <p>Booking Id: {booking._id}</p>
                                <p className="text-3xl font-bold tex-cyan-500">${booking.price}</p>

                                <BookingCancelAlert bookingId={booking._id} />

                            </div>

                        </div>)
                }
            </div>

        </div>
    );
};

export default MyBookingPage;

// ---------------------End:54_6-(1) to () --------------------------------