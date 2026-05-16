// -----------------------------Start: 52_7---------------------------------------
// (1)st import delete alertDialog usage from Heroui 
"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
// import { redirect } from "next/navigation";

// -----------------
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// -----------------


// export function Default() {
// (2) then to [id] page
// export function DeleteAlert() {
// (11) then go to [id]page
export function DeleteAlert({ destination }) {
  // ------------------------
      const router = useRouter();
      // ------------------------
  
  // (13)
  // const {destinationName} = destination;
  // (18)
  const { _id, destinationName } = destination;

  // (17)st API Calling for Delete--------------
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json()
    // (20) then then (start: 53_1) install by command: npm install better-auth
    // redirect('/destinations')
     // ------------------------------------
            if (data.deletedCount > 0) {
                toast.success("Destination delete successfully!");
    
                setTimeout(() => {
                    router.push("/destinations");
                }, 1500);
            } else {
                toast.error("Delete failed!");
            }
            // --------------------------------------
    console.log(data)
    

  };
  // (17)en-----------------------------

  return (
    <AlertDialog>
      {/* <Button variant="danger">Delete Project</Button> */}
      {/* (4) then go to EditModal file */}
      {/* <Button className={'text-red-500'} variant="outline"><TrashBin/>Delete t</Button> */}
      {/* (7) then go to EditModal */}
      <Button className={'text-red-500 rounded-none'} variant="outline"><TrashBin />Delete t</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              {/* <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading> */}
              {/* (10) */}
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              {/* <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p> */}
              {/* (14)st commit previous */}
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
              {/* (14)en then go to server */}
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              {/* <Button slot="close" variant="danger"> */}
              {/* (19) */}
              <Button onClick={handleDelete} slot="close" variant="danger">
                {/* Delete Project */}
                {/* (16) */}
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
// (1)en

// ---------------------End:52_7-(1) to () --------------------------------