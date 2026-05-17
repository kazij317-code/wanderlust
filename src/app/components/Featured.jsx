// -----------------------------Start: 54_9---------------------------------------
// (1)st
import { Button } from '@heroui/react';
import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

// const Featured = () => {
// (2)
const Featured = async () => {
    // (3)st
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinations = await res.json()
    console.log(destinations)
    // (3)en then go to page.js file
    return (
        // (5)st
        <div className="mt-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Featured Destinations</h1>
                    <p className="text-muted">Handpicked travel experiences for the adventure seekers</p>
                </div>
                {/* <Button variant ="outline" className={'rounded-none border-cyan-500 border-2 text-cyan-500'}>All Destinations</Button> */}
                {/* (6)st */}
                <Link href={'/destinations'}>
                    <Button variant="outline" className={'rounded-none border-cyan-500 border-2 text-cyan-500'}>All Destinations</Button>
                </Link>
                {/* (6)en then go to Navbar*/}
            </div>
            <div className="grid grid-cols-4 gap-5 mt-10">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
        // (5)en 
    );
};

export default Featured;
// (1)en
// ---------------------End:54_9-(1) to () --------------------------------
