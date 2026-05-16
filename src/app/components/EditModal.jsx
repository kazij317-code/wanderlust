// // -----------------------------Start: 52_6---------------------------------------
// // (2)st import form modal from heroui
// "use client";



// import { Envelope } from "@gravity-ui/icons";
// import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
// import { BiEdit } from "react-icons/bi";

// // export function WithForm() {
// // (7)
// // export function EditModal() {
// // (14)
// export function EditModal({ destination }) {

//     // (15)
//     // const { imageUrl, price, destinationName, duration, country, description } = destination;
//     // (19)
//     // const { imageUrl, price, destinationName, duration, country, description, category } = destination;
//     // (23)
//     // const { imageUrl, price, destinationName, duration, country, description, category, departureDate } = destination;
//     // (30) then check to edit and then (start: 52_7) create DeleteAlert file in components folder 
//     const { _id, imageUrl, price, destinationName, duration, country, description, category, departureDate } = destination;
//     // (6)st copy from add-destination page
//     const onSubmit = async (e) => {

//         e.preventDefault()
//         const formData = new FormData(e.currentTarget)
//         const destination = Object.fromEntries(formData.entries())
//         console.log(destination);

//         //  API Calling for Edit------------------------
//         // const res = await fetch('http://localhost:5000/destination', {
//         // (28)
//         const res = await fetch(`http://localhost:5000/destination/${_id}`, {
//             // method: 'POST',
//             // (29)
//             method: 'PATCH',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(destination)
//         })
//         const data = await res.json()
//         console.log(data)//you can show here as a toast
//         // ------------------------------------------------

//     }
//     // (6)en

//     return (
//         <Modal>
//             {/* <Button variant="secondary">Open Contact Form</Button> */}
//             {/* (8)st copy from [id] page*/}
//             <div className="flex justify-end">
//                 <Button variant="outline" className={"rounded-none mt-5 mb-3"}><BiEdit />Edit</Button>
//             </div>
//             {/* (8)en then go to [id]page */}
//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     {/* <Modal.Dialog className="sm:max-w-md"> */}
//                     {/* (11) */}
//                     <Modal.Dialog className="sm:max-w-xl">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                                 <Envelope className="size-5" />
//                             </Modal.Icon> */}
//                             {/* <Modal.Heading>Contact Us</Modal.Heading> */}
//                             {/* (12) then go to [id] page */}
//                             <Modal.Heading>Edit Destination</Modal.Heading>
//                             {/* (3)st commit */}
//                             {/* <p className="mt-1.5 text-sm leading-5 text-muted">
//                                 Fill out the form below and we'll get back to you. The modal adapts automatically
//                                 when the keyboard appears on mobile.
//                             </p> */}
//                             {/* (3)en */}
//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 {/* (4)st commit */}
//                                 {/* <form className="flex flex-col gap-4">
//                                     <TextField className="w-full" name="name" type="text">
//                                         <Label>Name</Label>
//                                         <Input placeholder="Enter your name" />
//                                     </TextField>
//                                     <TextField className="w-full" name="email" type="email">
//                                         <Label>Email</Label>
//                                         <Input placeholder="Enter your email" />
//                                     </TextField>
//                                     <TextField className="w-full" name="phone" type="tel">
//                                         <Label>Phone</Label>
//                                         <Input placeholder="Enter your phone number" />
//                                     </TextField>
//                                     <TextField className="w-full" name="company">
//                                         <Label>Company</Label>
//                                         <Input placeholder="Enter your company name" />
//                                     </TextField>
//                                     <TextField className="w-full" name="message">
//                                         <Label>Message</Label>
//                                         <Input placeholder="Enter your message" />
//                                     </TextField>
//                                 </form> */}
//                                 {/* (4)en */}

//                                 {/* (5)st import form from ad-destination page*/}
//                                 {/* <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl"> */}
//                                 {/* (10) */}
//                                 <form onSubmit={onSubmit} className="p-10 space-y-8">
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                         {/* Destination Name */}
//                                         <div className="md:col-span-2">
//                                             {/* <TextField name="destinationName" isRequired> */}
//                                             {/* (16) */}
//                                             <TextField defaultValue={destinationName} name="destinationName" isRequired>
//                                                 <Label>Destination Name</Label>

//                                                 <Input placeholder="Bali Paradise" className="rounded-2xl" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Country */}
//                                         {/* <TextField name="country" isRequired> */}
//                                         {/* (17) */}
//                                         <TextField defaultValue={country} name="country" isRequired>
//                                             <Label>Country</Label>
//                                             <Input placeholder="Indonesia" className="rounded-2xl" />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Category - Updated Select Component */}
//                                         <div>
//                                             <Select
//                                                 // (18)
//                                                 defaultValue={category}
//                                                 name="category"
//                                                 isRequired
//                                                 className="w-full"
//                                                 placeholder="Select category"
//                                             >
//                                                 <Label>Category</Label>
//                                                 <Select.Trigger className="rounded-2xl">
//                                                     <Select.Value />
//                                                     <Select.Indicator />
//                                                 </Select.Trigger>
//                                                 <Select.Popover>
//                                                     <ListBox>
//                                                         <ListBox.Item id="Beach" textValue="Beach">
//                                                             Beach
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Mountain" textValue="Mountain">
//                                                             Mountain
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="City" textValue="City">
//                                                             City
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Adventure" textValue="Adventure">
//                                                             Adventure
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Cultural" textValue="Cultural">
//                                                             Cultural
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                         <ListBox.Item id="Luxury" textValue="Luxury">
//                                                             Luxury
//                                                             <ListBox.ItemIndicator />
//                                                         </ListBox.Item>
//                                                     </ListBox>
//                                                 </Select.Popover>
//                                             </Select>
//                                         </div>

//                                         {/* Price */}
//                                         {/* <TextField name="price" type="number" isRequired> */}
//                                         {/* (20) */}
//                                         <TextField defaultValue={price} name="price" type="number" isRequired>
//                                             <Label>Price (USD)</Label>
//                                             <Input
//                                                 type="number"
//                                                 placeholder="1299"
//                                                 className="rounded-2xl"
//                                             />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Duration */}
//                                         {/* <TextField name="duration" isRequired> */}
//                                         {/* (21) */}
//                                         <TextField defaultValue={duration} name="duration" isRequired>
//                                             <Label>Duration</Label>
//                                             <Input
//                                                 placeholder="7 Days / 6 Nights"
//                                                 className="rounded-2xl"
//                                             />
//                                             <FieldError />
//                                         </TextField>

//                                         {/* Departure Date */}
//                                         <div className="md:col-span-2">
//                                             {/* <TextField name="departureDate" type="date" isRequired> */}
//                                             {/* (22) */}
//                                             <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
//                                                 <Label>Departure Date</Label>
//                                                 <Input type="date" className="rounded-2xl" />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Image URL - Removed preview */}
//                                         <div className="md:col-span-2">
//                                             {/* <TextField name="imageUrl" isRequired> */}
//                                             {/* (24) */}
//                                             <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
//                                                 <Label>Image URL</Label>
//                                                 <Input
//                                                     type="url"
//                                                     placeholder="https://example.com/bali-paradise.jpg"
//                                                     className="rounded-2xl"
//                                                 />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>

//                                         {/* Description */}
//                                         <div className="md:col-span-2">
//                                             {/* <TextField name="description" isRequired> */}
//                                             {/* (25) */}
//                                             <TextField defaultValue={description} name="description" isRequired>
//                                                 <Label>Description</Label>
//                                                 <TextArea
//                                                     placeholder="Describe the travel experience..."
//                                                     className="rounded-3xl"
//                                                 />
//                                                 <FieldError />
//                                             </TextField>
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}

//                                     {/* <Button
//                                         type="submit"
//                                         variant="outline"

//                                         className=" rounded-none w-full bg-cyan-500 text-white"
//                                     >

//                                         Add Destination
//                                     </Button> */}

//                                     {/* (26)st */}
//                                     <Modal.Footer>
//                                         {/* <Button slot="close" variant="secondary">
//                                             Cancel
//                                         </Button> */}
//                                         <Button type ="submit" slot="close">Save</Button>
//                                     </Modal.Footer>
//                                     {/* (26)en then go to server*/}

//                                 </form>

//                                 {/* (5)en */}
//                             </Surface>
//                         </Modal.Body>
//                         {/* <Modal.Footer>
//                             <Button slot="close" variant="secondary">
//                                 Cancel
//                             </Button>
//                             <Button slot="close">Send Message</Button>
//                         </Modal.Footer> */}
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }
// // (2)en
// // ---------------------End:52_6-(1) to () --------------------------------
// -----------------------------Start: 52_7---------------------------------------

"use client";

import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
// import { redirect } from "next/navigation";
// -----------------
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// -----------------


export function EditModal({ destination }) {
    // ------------------------
    const router = useRouter();
    // ------------------------


    const { _id, imageUrl, price, destinationName, duration, country, description, category, departureDate } = destination;

    const onSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())
        console.log(destination);

        //  API Calling for Edit------------------------

        const res = await fetch(`http://localhost:5000/destination/${_id}`, {

            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })
        const data = await res.json()
        // redirect('/destinations')
        // ------------------------------------
        if (data.modifiedCount > 0) {
            toast.success("Destination updated successfully!");

            setTimeout(() => {
                router.push("/destinations");
            }, 1500);
        } else {
            toast.error("Update failed!");
        }
        // --------------------------------------
        console.log(data)//you can show here as a toast


        // ------------------------------------------------

    }

    return (
        <Modal>
            {/* (5) then go to [id] page*/}
            {/* <div className="flex justify-end"> */}
            {/* <Button variant="outline" className={"rounded-none mt-5 mb-3"}><BiEdit />Edit</Button> */}
            {/* (8) then [id] page*/}
            <Button variant="outline" className={"rounded-none"}><BiEdit />Edit</Button>
            {/* </div> */}

            <Modal.Backdrop>
                <Modal.Container placement="auto">

                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Edit Destination</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={onSubmit} className="p-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">

                                            <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                <Label>Destination Name</Label>

                                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}

                                        <TextField defaultValue={country} name="country" isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <div>
                                            <Select

                                                defaultValue={category}
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

                                        <TextField defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}

                                        <TextField defaultValue={duration} name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">

                                            <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">

                                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
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

                                            <TextField defaultValue={description} name="description" isRequired>
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


                                    <Modal.Footer>

                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>


                                </form>


                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

// ---------------------End:52_7-(1) to () --------------------------------