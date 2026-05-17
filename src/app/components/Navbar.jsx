// // -----------------------------Start: 52_1 ---------------------------------------
// // (2)st
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         // <div>
//         //     Navbar
//         // </div>
//         // (4)st commit previous
//         <nav className='flex justify-between bg-white p-5'>
//             <ul className="flex gap-3">
//                 <li>
//                     <Link href={"/"}>Home</Link>
//                 </li>
//                 <li>
//                     <Link href={"/destinations"}>Destinations</Link>
//                 </li>
//                 <li>
//                     <Link href={"/my-bookings"}>My Bookings</Link>
//                 </li>
//             </ul>
//             <div>

//                 <Image
//                     src={'/assets/Wanderlast.png'}
//                     height={150}
//                     width={150}
//                     alt="logo"
//                 />
//             </div>
//             <ul className="flex gap-3">

//                 <li>
//                     <Link href={"/profile"}>Profile</Link>
//                 </li>
//                 <li>
//                     <Link href={"/login"}>Login</Link>
//                 </li>
//                 <li>
//                     <Link href={"/signup"}>Sign Up</Link>
//                 </li>
//             </ul>
//         </nav>
//         // (4)en then create Banner.jsx file in components folder
//     );
// };

// export default Navbar;
// // (2)en then in layout.js file
// // ---------------------End:52_1-(1) to () --------------------------------
// // -----------------------------Start: 52_3 ---------------------------------------
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (

//         <nav className='flex justify-between bg-white p-5'>
//             <ul className="flex gap-3">
//                 <li>
//                     <Link href={"/"}>Home</Link>
//                 </li>
//                 <li>
//                     <Link href={"/destinations"}>Destinations</Link>
//                 </li>
//                 <li>
//                     <Link href={"/my-bookings"}>My Bookings</Link>
//                 </li>
//                 {/* (2)st */}
//                 <li>
//                     <Link href={"/add-destination"}>Add Destination</Link>
//                 </li>
//                 {/* (2)en then page.jsx in add-destination folder*/}
//             </ul>
//             <div>

//                 <Image
//                     src={'/assets/Wanderlast.png'}
//                     height={150}
//                     width={150}
//                     alt="logo"
//                 />
//             </div>
//             <ul className="flex gap-3">

//                 <li>
//                     <Link href={"/profile"}>Profile</Link>
//                 </li>
//                 <li>
//                     <Link href={"/login"}>Login</Link>
//                 </li>
//                 <li>
//                     <Link href={"/signup"}>Sign Up</Link>
//                 </li>
//             </ul>
//         </nav>

//     );
// };

// export default Navbar;

// // ---------------------End:52_3-(1) to () --------------------------------
// -----------------------------Start: 53_3 ---------------------------------------
// // (6)
// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from '@heroui/react';

// const Navbar = () => {
//     // (7)st from better-auth documents
//     const { data: session } = authClient.useSession()
//     console.log(session)
//     const user = session?.user
//     console.log(user)
//     // (7)en

//     return (

//         // <nav className='flex justify-between bg-white p-5'>
//         // (10)then (start: 53_3) in Navbar
//         <nav className='flex items-center justify-between bg-white p-5'>
//             <ul className="flex gap-3">
//                 <li>
//                     <Link href={"/"}>Home</Link>
//                 </li>
//                 <li>
//                     <Link href={"/destinations"}>Destinations</Link>
//                 </li>
//                 <li>
//                     <Link href={"/my-bookings"}>My Bookings</Link>
//                 </li>

//                 <li>
//                     <Link href={"/add-destination"}>Add Destination</Link>
//                 </li>

//             </ul>
//             <div>

//                 <Image
//                     src={'/assets/Wanderlast.png'}
//                     height={150}
//                     width={150}
//                     alt="logo"
//                 />
//             </div>
//             {/* <ul className="flex gap-3"> */}
//             {/* (9) */}
//             <ul className="flex items-center gap-3">

//                 <li>
//                     <Link href={"/profile"}>Profile</Link>
//                 </li>

//                 {/* <li>
//                     <Link href={"/login"}>Login</Link>
//                 </li>
//                 <li>
//                     <Link href={"/signup"}>Sign Up</Link>
//                 </li> */}
//                 {/* (8)st commit previous */}
//                 {user ?
//                     <>
//                         <li>
//                             <Avatar>
//                                 <Avatar.Image alt="" src={user?.image} />

//                                 <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
//                             </Avatar>
//                         </li>

//                         <li>
//                             <Button variant="danger" className={'rounded-none'}>Logout</Button>

//                         </li>
//                     </>

//                     : <>
//                         <li>
//                             <Link href={"/login"}>Login</Link>
//                         </li>
//                         <li>
//                             <Link href={"/signup"}>Sign Up</Link>
//                         </li>
//                     </>}
//                 {/* (8)en  */}
//             </ul>
//         </nav>

//     );
// };

// export default Navbar;

// ---------------------End:53_3-(1) to () --------------------------------
// // -----------------------------Start: 53_4 ---------------------------------------

// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from '@heroui/react';

// const Navbar = () => {
//     // from better-auth documents
//     const { data: session } = authClient.useSession();
//     // console.log(session)
//     const user = session?.user
//     // console.log(user)

//     // (1)st
//     const handleSignOut = async () => {
//         await authClient.signOut();
//     }
//     // (1)en
//     return (


//         <nav className='flex items-center justify-between bg-white p-5'>
//             <ul className="flex gap-3">
//                 <li>
//                     <Link href={"/"}>Home</Link>
//                 </li>
//                 <li>
//                     <Link href={"/destinations"}>Destinations</Link>
//                 </li>
//                 <li>
//                     <Link href={"/my-bookings"}>My Bookings</Link>
//                 </li>

//                 <li>
//                     <Link href={"/add-destination"}>Add Destination</Link>
//                 </li>

//             </ul>
//             <div>

//                 <Image
//                     src={'/assets/Wanderlast.png'}
//                     height={150}
//                     width={150}
//                     alt="logo"
//                 />
//             </div>

//             <ul className="flex items-center gap-3">

//                 <li>
//                     <Link href={"/profile"}>Profile</Link>
//                 </li>

//                 {user ?
//                     <>
//                         <li>
//                             <Avatar>
//                                 {/* <Avatar.Image alt="" src={user?.image} /> */}
//                                 {/* (8) then in login page */}
//                                 <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
//                                 <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
//                             </Avatar>
//                         </li>

//                         <li>
//                             {/* <Button variant="danger" className={'rounded-none'}>Logout</Button> */}
//                             {/* (2) then check and create google client id and secret and go to .env file */}
//                             <Button onClick= {handleSignOut} variant="danger" className={'rounded-none'}>Logout</Button>
//                         </li>
//                     </>

//                     : <>
//                         <li>
//                             <Link href={"/login"}>Login</Link>
//                         </li>
//                         <li>
//                             <Link href={"/signup"}>Sign Up</Link>
//                         </li>
//                     </>}

//             </ul>
//         </nav>

//     );
// };

// export default Navbar;

// // ---------------------End:53_4-(1) to () --------------------------------
// -----------------------------Start: 54_9 ---------------------------------------
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
    // from better-auth documents
    const { data: session } = authClient.useSession();

    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (

        // (1)st
        <div className="bg-white py-3">
            <nav className='flex items-center justify-between max-w-7xl max-auto'>
                <ul className="flex gap-3">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/destinations"}>Destinations</Link>
                    </li>
                    <li>
                        <Link href={"/my-bookings"}>My Bookings</Link>
                    </li>

                    <li>
                        <Link href={"/add-destination"}>Add Destination</Link>
                    </li>

                </ul>
                <div>

                    <Image
                        src={'/assets/Wanderlast.png'}
                        height={150}
                        width={150}
                        alt="logo"
                    />
                </div>

                <ul className="flex items-center gap-3">

                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>

                    {user ?
                        <>
                            <li>
                                <Avatar>

                                    <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </li>

                            <li>

                                <Button size="sm" onClick={handleSignOut} variant="danger" className={'rounded-none'}>Logout</Button>
                            </li>
                        </>

                        : <>
                            <li>
                                <Link href={"/login"}>Login</Link>
                            </li>
                            <li>
                                <Link href={"/signup"}>Sign Up</Link>
                            </li>
                        </>}

                </ul>
            </nav>
        </div>
        // (1)en then go to [id] apge

    );
};

export default Navbar;

// ---------------------End:54_9-(1) to () --------------------------------
