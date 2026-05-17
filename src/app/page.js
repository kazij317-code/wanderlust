// // -----------------------------Start: 52_1 ---------------------------------------
// // (1)st
// import Image from "next/image";
// import Banner from "./components/Banner";

// export default function Home() {
//   return (
//     <div>
//       {/* (6) then (start: 52_2) create wanderlust-server */}
//       <Banner/>
//     </div>
//   );
// }
// // (1)en then create Navbar.jsx file creating components folder in app folder
// // ---------------------End:52_1-(1) to () --------------------------------
// -----------------------------Start: 54_9 ---------------------------------------
import Image from "next/image";
import Banner from "./components/Banner";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div>
     
      <Banner/>
      {/* (4) then go to Featured page */}
      <Featured/>
    </div>
  );
}
// (1)en then create Navbar.jsx file creating components folder in app folder
// ---------------------End:52_1-(1) to () --------------------------------
