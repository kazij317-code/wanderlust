// // -----------------------------Start: 53_5---------------------------------------
// // (1)st
// // (11)
// 'use client'
// import { Button, Card, DateField, Label } from '@heroui/react';
// import React from 'react';

// // const BookingCard = () => {
// // (6)
// const BookingCard = ({ destination }) => {
//     // (7)
//     const { price } = destination
//     return (
//         // <Card>
//         // (4) then to to [id] page
//         <Card className="rounded-none border mt-5">
//             {/* booking card */}
//             {/* (8)st */}
//             <p className='text-sm text-muted'>Starting from</p>
//             <h2 className="text-3xl font-bold text-cyan-500">$ {price}</h2>
//             <p className='text-sm text-muted'>per person</p>
//             {/* (8)en */}

//             {/* (9)st import datefield usage from heroui */}
//             <DateField className="w-[256px]" name="date">
//                 {/* <Label>Date</Label> */}
//                 {/* (10) */}
//                 <Label>Departure Date</Label>
//                 <DateField.Group>
//                     <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
//                 </DateField.Group>
//             </DateField>
//             {/* (12) then (start: 53_6)  */}
//             <Button className={'w-full rounded-none bg-cyan-500'}>Book Now</Button>
//             {/* (9)en */}
//         </Card>
//     );
// };

// export default BookingCard;
// // (1)en then go to [id] page of destinations folder
// // ---------------------End:53_5-(1) to () --------------------------------
// // -----------------------------Start: 53_6---------------------------------------

// 'use client'
// import { authClient } from '@/lib/auth-client';
// import { Button, Card, DateField, Label } from '@heroui/react';
// import React, { useState } from 'react';


// const BookingCard = ({ destination }) => {
//     // (5)st import from auth documentation
//     const { data: session } = authClient.useSession()
//     const user = session?.user
//     // console.log(user);
//     // (5)en
// // (1)
// const [departureDate, setDepartureDate] = useState(null);
// // (3)
// // console.log(departureDate)
// // (4)
// // console.log(new Date(departureDate))
// // (8)
// // const { price, _id } = destination
// // (11)
// console.log(destination)
// // (10)
// // const { price, _id, destinationName } = destination
// // (13)
// const { price, _id, destinationName, imageUrl, country } = destination
// // (6)st commit console.log (4),(5) 
// const handleBooking = async () => {
//     const bookingData = {
//         userId: user.id,
//         userImage: user.image,
//         userName: user.name,
//         // destinationId: destination._id,
//         // (9)st commit previous
//         destinationId: _id,
//         // (12)st
//         destinationName,
//         price,
//         imageUrl,
//         country,
//         departureDate: new Date(departureDate)
//         // (12)en
//     }
//     // (20)st api calling for booking
//     const res = await fetch('http://localhost:5000/booking', {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(bookingData)
//     })
//     const data = await res.json();
//     console.log(data)
//     // (20)en then (start: 53_7) install react hot toast 
//     // (15) then check putting date in BookingCard and then go to server
//     // console.log(bookingData)
// }
// // (6)en
// // (7)move to up
//     // const { price } = destination

    
//     return (

//         <Card className="rounded-none border mt-5">
            
//             <p className='text-sm text-muted'>Starting from</p>
//             <h2 className="text-3xl font-bold text-cyan-500">$ {price}</h2>
//             <p className='text-sm text-muted'>per person</p>
            
//             {/* <DateField className="w-[256px]" name="date"> */}
//             {/* (2) */}
//             <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                
//                 <Label>Departure Date</Label>
//                 <DateField.Group>
//                     <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
//                 </DateField.Group>
//             </DateField>
            
//             {/* <Button className={'w-full rounded-none bg-cyan-500'}> */}
//             {/* (14) */}
//             <Button onClick = {handleBooking} className={'w-full rounded-none bg-cyan-500'}>
//                 Book Now</Button>
            
//         </Card>
//     );
// };

// export default BookingCard;

// // ---------------------End:53_6-(1) to () --------------------------------
// // -----------------------------Start: 53_7---------------------------------------
// 'use client'
// import { authClient } from '@/lib/auth-client';
// import { Button, Card, DateField, Label } from '@heroui/react';
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { redirect } from "next/navigation";


// const BookingCard = ({ destination }) => {
//     //import from auth documentation
//     const { data: session } = authClient.useSession()
//     const user = session?.user
    
// const [departureDate, setDepartureDate] = useState(null);
// const { price, _id, destinationName, imageUrl, country } = destination
 
// const handleBooking = async () => {
//     const bookingData = {
//         userId: user?.id,
//         userImage: user?.image,
//         userName: user?.name,
//         destinationId: _id,        
//         destinationName,
//         price,
//         imageUrl,
//         country,
//         departureDate: new Date(departureDate)
        
//     }
//     //  api calling for booking
//     const res = await fetch('http://localhost:5000/booking', {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(bookingData)
//     })
//     const data = await res.json();
//     // (1) then create app/my-bookings/page.jsx
//     toast.success("You booked successfully!")
//     redirect("/my-bookings")
    
// }
//     return (

//         <Card className="rounded-none border mt-5">
            
//             <p className='text-sm text-muted'>Starting from</p>
//             <h2 className="text-3xl font-bold text-cyan-500">$ {price}</h2>
//             <p className='text-sm text-muted'>per person</p>
                        
//             <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                
//                 <Label>Departure Date</Label>
//                 <DateField.Group>
//                     <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
//                 </DateField.Group>
//             </DateField>                        
//             <Button onClick = {handleBooking} className={'w-full rounded-none bg-cyan-500'}>
//                 Book Now</Button>
            
//         </Card>
//     );
// };

// export default BookingCard;

// // ---------------------End:53_7-(1) to () --------------------------------
// -----------------------------Start: 54_6---------------------------------------
'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { redirect } from "next/navigation";


const BookingCard = ({ destination }) => {
    //import from auth documentation
    const { data: session } = authClient.useSession()
    const user = session?.user
    
const [departureDate, setDepartureDate] = useState(null);
const { price, _id, destinationName, imageUrl, country } = destination
 
const handleBooking = async () => {
    const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        destinationId: _id,        
        destinationName,
        price,
        imageUrl,
        country,
        departureDate: new Date(departureDate)
        
    }

    // (2)st
    const {data:tokenData} = await authClient.token()
    console.log(tokenData)
    // (2)en then check
    //  api calling for booking
    const res = await fetch('http://localhost:5000/booking', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            // (3) the go my-bookings page
            authorization: `Bearer ${tokenData?.token}` 
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    
    toast.success("You booked successfully!")
    redirect("/my-bookings")
    
}
    return (

        <Card className="rounded-none border mt-5">
            
            <p className='text-sm text-muted'>Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-500">$ {price}</h2>
            <p className='text-sm text-muted'>per person</p>
                        
            <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>                        
            <Button onClick = {handleBooking} className={'w-full rounded-none bg-cyan-500'}>
                Book Now</Button>
            
        </Card>
    );
};

export default BookingCard;

// ---------------------End:54_6-(1) to () --------------------------------
