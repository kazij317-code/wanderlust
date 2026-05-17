// // -----------------------------Start: 52_3 ---------------------------------------
// // (6)
// "use client"
// // (1)st
// import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button } from '@heroui/react';
// import React from 'react';

// // -------------
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';
// // -------------

// const AddDestinationPage = () => {
//     // ------------------
//     const router = useRouter();
//     // ------------------
//     // (12)st
//     // const onSubmit = (e) => {
//         // (17) then check to add data. and go to wanderlust-server
//     const onSubmit = async(e) => {
//         e.preventDefault()
//         const formData= new FormData(e.currentTarget)
//         const destination = Object.fromEntries(formData.entries())
//         console.log(destination);
//          // (16)st API Calling for Post/add
//     const res = await fetch('http://localhost:5000/destination',{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(destination)
//     })
//     const data = await res.json()
//     console.log(data)//you can show here as a toast
//     // (16)en
// // ------------------
// if (data.insertedId) {
//         // alert("Destination added successfully");
//         toast.success("Destination added successfully");
//         router.push('/destinations');   // your destination page route
//     }
// // -----------------


//     }
//     // (12)en then check to add data.

   
//     return (
//         // <div>
//         // (8)
//         // <div className="p-5">
//         // (10)
//         <div className="p-5 max-w-7xl mx-auto">
//             {/* AddDestinationPage */}
//             {/* (7) */}
//             <h1 className="text-2xl font-bold">AddDestinationPage</h1>



//             {/* (9)st commit (3) and import it into (9) */}
//             {/* (3)st import from teacher github */}
//             {/* <form
//                 className="p-10 space-y-8"
//             > */}
//             {/* (11) */}
//             {/* <form className="p-10 space-y-8 w-3xl"> */}
//             {/* (13) then go to wanderlust-server*/}
//             <form onSubmit = {onSubmit} className="p-10 space-y-8 w-3xl">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Destination Name */}
//                     <div className="md:col-span-2">
//                         <TextField name="destinationName" isRequired>
//                             <Label>Destination Name</Label>
//                             <Input placeholder="Bali Paradise" className="rounded-2xl" />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                     {/* Country */}
//                     <TextField name="country" isRequired>
//                         <Label>Country</Label>
//                         <Input placeholder="Indonesia" className="rounded-2xl" />
//                         <FieldError />
//                     </TextField>

//                     {/* Category - Updated Select Component */}
//                     <div>
//                         <Select
//                             name="category"
//                             isRequired
//                             className="w-full"
//                             placeholder="Select category"
//                         >
//                             <Label>Category</Label>
//                             <Select.Trigger className="rounded-2xl">
//                                 <Select.Value />
//                                 <Select.Indicator />
//                             </Select.Trigger>
//                             <Select.Popover>
//                                 <ListBox>
//                                     <ListBox.Item id="Beach" textValue="Beach">
//                                         Beach
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                     <ListBox.Item id="Mountain" textValue="Mountain">
//                                         Mountain
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                     <ListBox.Item id="City" textValue="City">
//                                         City
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                     <ListBox.Item id="Adventure" textValue="Adventure">
//                                         Adventure
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                     <ListBox.Item id="Cultural" textValue="Cultural">
//                                         Cultural
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                     <ListBox.Item id="Luxury" textValue="Luxury">
//                                         Luxury
//                                         <ListBox.ItemIndicator />
//                                     </ListBox.Item>
//                                 </ListBox>
//                             </Select.Popover>
//                         </Select>
//                     </div>

//                     {/* Price */}
//                     <TextField name="price" type="number" isRequired>
//                         <Label>Price (USD)</Label>
//                         <Input
//                             type="number"
//                             placeholder="1299"
//                             className="rounded-2xl"
//                         />
//                         <FieldError />
//                     </TextField>

//                     {/* Duration */}
//                     <TextField name="duration" isRequired>
//                         <Label>Duration</Label>
//                         <Input
//                             placeholder="7 Days / 6 Nights"
//                             className="rounded-2xl"
//                         />
//                         <FieldError />
//                     </TextField>

//                     {/* Departure Date */}
//                     <div className="md:col-span-2">
//                         <TextField name="departureDate" type="date" isRequired>
//                             <Label>Departure Date</Label>
//                             <Input type="date" className="rounded-2xl" />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                     {/* Image URL - Removed preview */}
//                     <div className="md:col-span-2">
//                         <TextField name="imageUrl" isRequired>
//                             <Label>Image URL</Label>
//                             <Input
//                                 type="url"
//                                 placeholder="https://example.com/bali-paradise.jpg"
//                                 className="rounded-2xl"
//                             />
//                             <FieldError />
//                         </TextField>
//                     </div>

//                     {/* Description */}
//                     <div className="md:col-span-2">
//                         <TextField name="description" isRequired>
//                             <Label>Description</Label>
//                             <TextArea
//                                 placeholder="Describe the travel experience..."
//                                 className="rounded-3xl"
//                             />
//                             <FieldError />
//                         </TextField>
//                     </div>
//                 </div>

//                 {/* Buttons */}

//                 <Button
//                     type="submit"
//                     variant="outline"
//                     // (4)commit this
//                     // isLoading={isPending}
//                     className=" rounded-none w-full bg-cyan-500 text-white"
//                 >
//                     {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
//                     {/* (5)commit previous */}
//                     Add Destination
//                 </Button>

//             </form>
//             {/* (3)en */}
//             {/* (9)en */}
//         </div>
//     );
// };

// export default AddDestinationPage;
// // (1)en then in Navbar.jsx file
// // ---------------------End:52_3-(1) to () --------------------------------
// -----------------------------Start: 54_8 ---------------------------------------

"use client"

import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button } from '@heroui/react';
import React from 'react';

// -------------
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
// -------------

const AddDestinationPage = () => {
    // ------------------
    const router = useRouter();
    // ------------------
    
    const onSubmit = async(e) => {
        e.preventDefault()
        const formData= new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())
        console.log(destination);
         // API Calling for Post/add
        //  (2)
    const res = await fetch('${process.env.NEXT_PUBLIC_SERVER_URL}/destination',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json()
    console.log(data)//you can show here as a toast
    
// ------------------
if (data.insertedId) {
        // alert("Destination added successfully");
        toast.success("Destination added successfully");
        router.push('/destinations');   // your destination page route
    }
// -----------------


    }
    

   
    return (
        
        <div className="p-5 max-w-7xl mx-auto">
            
            <h1 className="text-2xl font-bold">AddDestinationPage</h1>

            <form onSubmit = {onSubmit} className="p-10 space-y-8 w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                        <TextField name="destinationName" isRequired>
                            <Label>Destination Name</Label>
                            <Input placeholder="Bali Paradise" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" isRequired>
                        <Label>Country</Label>
                        <Input placeholder="Indonesia" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label>Category</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input
                            placeholder="7 Days / 6 Nights"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                        <TextField name="departureDate" type="date" isRequired>
                            <Label>Departure Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    
                    className=" rounded-none w-full bg-cyan-500 text-white"
                >
                    
                    Add Destination
                </Button>

            </form>
            
        </div>
    );
};

export default AddDestinationPage;

// ---------------------End:54_8-(1) to () --------------------------------
