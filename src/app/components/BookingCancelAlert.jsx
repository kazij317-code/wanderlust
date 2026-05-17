// // -----------------------------Start: 53_8---------------------------------------
// // (5)st import alertdialog from heroui
// "use client";

// import { TrashBin } from "@gravity-ui/icons";
// import { AlertDialog, Button } from "@heroui/react";
// import toast from "react-hot-toast";

// // export function Default() {
// // (6) then go to my-bookings page
// // export function BookingCancelAlert() {
// // (13)
// export function BookingCancelAlert({ bookingId }) {
//   // (16)
//   // console.log('pad mare', bookingId)
//   // (14)st create API for delete booking
//   const handleCancelBooking = async () => {
//     const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//     const data = await res.json();

//     // console.log('mithu', data);
//     window.location.reload();
//     // --------------------------------------
//     if (data.deletedCount > 0) {
//       toast.success("Booking delete successfully!");

//     //   setTimeout(() => {
//     //     router.push("/destinations");
//     //   }, 1500);
//     // } else {
//     //   toast.error("Delete failed!");
//     }
//     // ---------------------
//   }
//   // (14)en then (start: 54_1) create src/proxy.js---------------------------------------
//   return (
//     <AlertDialog>
//       {/* <Button variant="danger">Delete Project</Button> */}
//       {/* (9) import from my-booking page*/}
//       <Button className={'rounded-none border-red-500 text-red-500'} variant="outline"><TrashBin />Cancel</Button>

//       <AlertDialog.Backdrop>
//         <AlertDialog.Container>
//           <AlertDialog.Dialog className="sm:max-w-[400px]">
//             <AlertDialog.CloseTrigger />
//             <AlertDialog.Header>
//               <AlertDialog.Icon status="danger" />
//               {/* <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading> */}
//               {/* (11) then go to my-booking page*/}
//               <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
//             </AlertDialog.Header>
//             <AlertDialog.Body>
//               {/* <p>
//                 This will permanently delete <strong>My Awesome Project</strong> and all of its
//                 data. This action cannot be undone.
//               </p> */}
//             </AlertDialog.Body>
//             <AlertDialog.Footer>
//               <Button slot="close" variant="tertiary">
//                 Cancel
//               </Button>
//               {/* <Button slot="close" variant="danger"> */}
//               {/* (15) then check console */}
//               <Button onClick={handleCancelBooking} slot="close" variant="danger">
//                 {/* Delete Project */}
//                 {/* (10) */}
//                 Delete
//               </Button>
//             </AlertDialog.Footer>
//           </AlertDialog.Dialog>
//         </AlertDialog.Container>
//       </AlertDialog.Backdrop>
//     </AlertDialog>
//   );
// }
// // (5)en
// // ---------------------End:53_8-(1) to () --------------------------------
// -----------------------------Start: 54_6---------------------------------------

"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function BookingCancelAlert({ bookingId }) {
  
  const handleCancelBooking = async () => {
    // (6)
    const {data: tokenData} = await authClient.token()

    
    // const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
    // 54_8(4)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        // (7) then (start: 54_7) then go to server 
        authorization: `Bearer ${tokenData?.token}`
      }
    })
    const data = await res.json();

    window.location.reload();
    // --------------------------------------
    if (data.deletedCount > 0) {
      toast.success("Booking delete successfully!");

    }
    // ---------------------
  }
   return (
    <AlertDialog>
      
      <Button className={'rounded-none border-red-500 text-red-500'} variant="outline"><TrashBin />Cancel</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              
              <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

// ---------------------End:53_8-(1) to () --------------------------------
