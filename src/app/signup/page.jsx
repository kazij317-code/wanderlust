// // -----------------------------Start: 53_2---------------------------------------
// // (1)st
// "use client";
// import { FcGoogle } from "react-icons/fc";
// import { Card, Separator } from "@heroui/react";

// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";

// const SignUpPage = () => {
//     // (3)st
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());

//     // console.log(user)
//     // (3)en
// // (5)st from better-auth documents
//     const { data, error } = await authClient.signUp.email
//     ({
//       email: user.email,
//       password: user.password,
//       name: user.name,
//       // image: user.image,
//     });
//     console.log({data, error})

//     if (data) {
//       redirect("/");
//     }

//     if (error) {
//       // toast
//       alert("Error");
//     }
//   };
// //   (5)en then (start: 53_3) create app/login/page.jsx


//   return (
//     // (2)st
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center my-3">
//         <h1 className="text-2xl font-bold">Create Account</h1>
//         <p>Start your adventure with Wanderlust</p>
//       </div>
//       <Card className="border rounded-none">
//         {/* (4) */}
//         <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
//           <TextField isRequired name="name" type="text">
//             <Label>Name</Label>
//             <Input placeholder="Enter your name" />
//             <FieldError />
//           </TextField>

//           <TextField name="image" type="url">
//             <Label>Image URL</Label>
//             <Input placeholder="Image url" />
//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                 return "Please enter a valid email address";
//               }
//               return null;
//             }}
//           >
//             <Label>Email</Label>
//             <Input placeholder="john@example.com" />
//             <FieldError />
//           </TextField>
//           <TextField
//             isRequired
//             minLength={8}
//             name="password"
//             type="password"
//             validate={(value) => {
//               if (value.length < 8) {
//                 return "Password must be at least 8 characters";
//               }
//               if (!/[A-Z]/.test(value)) {
//                 return "Password must contain at least one uppercase letter";
//               }
//               if (!/[0-9]/.test(value)) {
//                 return "Password must contain at least one number";
//               }
//               return null;
//             }}
//           >
//             <Label>Password</Label>
//             <Input placeholder="Enter your password" />
//             <Description>
//               Must be at least 8 characters with 1 uppercase and 1 number
//             </Description>
//             <FieldError />
//           </TextField>
//           <div className="flex justify-center gap-2">
//             <Button className={"rounded-none w-full bg-cyan-500"} type="submit">
//               Create Account
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </div>
//     // (2)en
//   );
// };

// export default SignUpPage;

// // (1)en
// // ---------------------End:53_2-(1) to () --------------------------------
// -----------------------------Start: 53_4---------------------------------------

"use client";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
    
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    
    const { data, error } = await authClient.signUp.email
    ({
      email: user.email,
      password: user.password,
      name: user.name,
      // image: user.image,
    });
    console.log({data, error})

    if (data) {
      redirect("/");
    }

    if (error) {
      // toast
      alert("Error");
    }
  };


// (6)st
const handleGoogleSignin = async() => {
  await authClient.signIn.social({
    provider: "google"
  })
}
// (6)en


  return (
    
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-3">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p>Start your adventure with Wanderlust</p>
      </div>
      <Card className="border rounded-none">
        
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Image url" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"rounded-none w-full bg-cyan-500"} type="submit">
              Create Account
            </Button>
          </div>
        </Form>
          {/* (5)st */}
          <div className="flex justify-center items-center gap-3">
            <Separator/>
             <div className="whitespace-nowrap">
              Or sign up with
             </div>
            <Separator/>
          </div>
          <div>
            {/* <Button variant="outline" className={'w=full rounded-none'}> */}
            {/* (7) then check then in Navbar*/}
            <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-none'}>
             <FcGoogle/> Sign in with Google
            </Button>
          </div>
          {/* (5)en */}

      </Card>
    </div>
    
  );
};

export default SignUpPage;

// ---------------------End:53_2-(1) to () --------------------------------






// ------------------------------------------------------------
// sample-2
// "use client"
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// import { useRouter } from 'next/navigation';
// // import GoogleLogin from '@/components/GoogleLogin';

// const RegisterPage = () => {
//   const router = useRouter();

//   const [isShowPassword, setIsShowPassword] = useState(false)

//   const { register, handleSubmit, reset, formState: { errors } } = useForm()

//   const handleRegisterFunc = async (data) => {
//     const { email, name, photo, password } = data;

//     const { data: res, error } = await authClient.signUp.email({
//       name: name,
//       email: email,
//       password: password,
//       image: photo,
//       callbackURL: "/",
//     });

//     if (error) {
//       toast.error(error.message)
//     }
//     if (res) {
//       toast.success("Signup successfully");

//       reset({
//         email: "",
//         password: ""
//       });

//       await authClient.signOut();
//       router.push("/login");
//     }
//   }

//   return (
//     <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center mt-17">

//       <div className="p-4 rounded-xl bg-white">
//         <h2 className="font-bold text-3xl text-center mb-2">Register your account</h2>

//         <form className="space-y-1" onSubmit={handleSubmit(handleRegisterFunc)} autoComplete="off">

//           {/* NAME */}
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Your Name</legend>
//             <input
//               type="text"
//               className="input"
//               {...register("name", { required: "Name field is required" })}
//               placeholder="Enter your name"
//             />
//             {errors.name && <p className="text-red-600">{errors.name.message}</p>}
//           </fieldset>

//           {/* PHOTO */}
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Photo URL</legend>
//             <input
//               type="text"
//               className="input"
//               {...register("photo", { required: "Photo field is required" })}
//               placeholder="Attach your photo"
//             />
//             {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
//           </fieldset>

//           {/* EMAIL */}
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Email address</legend>
//             <input
//               type="email"
//               autoComplete="off"
//               className="input"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}/,
//                   // value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
//                   // value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
//                   // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,

//                   message: "Please enter a valid email address (example@gmail.com)",
//                 },
//               })}
//               placeholder="Enter your email address"
//             />
//             {errors.email && (
//               <span className="text-red-600">
//                 {errors.email.message}
//               </span>
//             )}
//           </fieldset>

//           {/* PASSWORD */}
//           <fieldset className="fieldset relative">
//             <legend className="fieldset-legend">Password</legend>
//             <input
//               type={isShowPassword ? "text" : "password"}
//               autoComplete="new-password"
//               className="input"
//               {...register("password", { 
//               required: "Password field is required",
//               validate: (value) => {
//                 if (value.length < 8) {
//                   return "Password must be at least 8 characters";
//                 }
//                 if (!/[A-Z]/.test(value)) {
//                   return "Password must contain at least one uppercase letter";
//                 }
//                 if (!/[0-9]/.test(value)) {
//                   return "Password must contain at least one number";
//                 }
//                 return true;
//               },
//                })}
//               placeholder="Enter your password"
//             />

//             <span
//               className="absolute right-8 top-4 cursor-pointer"
//               onClick={() => setIsShowPassword(!isShowPassword)}
//             >
//               {isShowPassword ? <FaEye /> : <FaEyeSlash />}
//             </span>

//             {errors.password && <p className="text-red-600">{errors.password.message}</p>}
//           </fieldset>

//           <button className="btn w-full bg-slate-800 text-white">
//             Register
//           </button>

//         </form>

//         <p className="mt-4 text-center">
//           If have An Account, Please <Link href={"/login"} className="text-red-600">Login</Link>
//         </p>

//         <div className="divider">OR</div>

//         {/* <GoogleLogin /> */}
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// -----------------------------------------
// sample-3
// "use client";
// import { authClient } from "@/lib/auth-client";
// import Link from "next/link";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// import {
//   Button,
//   Card,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
//   Description,
// } from "@heroui/react";

// const RegisterPage = () => {
//   const router = useRouter();
//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const handleRegisterFunc = async (e) => {
//     e.preventDefault();

//     const formData = Object.fromEntries(e.currentTarget);
//     const { name, image, email, password } = formData;

//     const { data: res, error } = await authClient.signUp.email({
//       name,
//       email,
//       password,
//       image,
//       callbackURL: "/",
//     });

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     if (res) {
//       toast.success("Signup successfully");
//       e.target.reset();

//       await authClient.signOut();
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center mt-17">
//       <div className="text-center my-3">
//         <h1 className="text-3xl font-bold">Register your account</h1>
//       </div>

//       <Card className="p-6 rounded-xl bg-white shadow-lg border">

//         <Form
//           onSubmit={handleRegisterFunc}
//           className="space-y-4 w-96"
//         >
//           {/* Name */}
//           <TextField isRequired name="name" type="text">
//             <Label>Your Name</Label>
//             <Input placeholder="Enter your name" />
//             <FieldError />
//           </TextField>

//           {/* Photo */}
//           <TextField isRequired name="image" type="url">
//             <Label>Photo URL</Label>
//             <Input placeholder="Attach your photo" />
//             <FieldError />
//           </TextField>

//           {/* Email */}
//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (!/[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}/.test(value)) {
//                 return "Please enter a valid email address";
//               }
//               return null;
//             }}
//           >
//             <Label>Email Address</Label>
//             <Input placeholder="Enter your email address" />
//             <FieldError />
//           </TextField>

//           {/* Password */}
//           <TextField
//             isRequired
//             minLength={8}
//             name="password"
//             type={isShowPassword ? "text" : "password"}
//             validate={(value) => {
//               if (value.length < 8) {
//                 return "Password must be at least 8 characters";
//               }
//               if (!/[A-Z]/.test(value)) {
//                 return "Password must contain at least one uppercase letter";
//               }
//               if (!/[0-9]/.test(value)) {
//                 return "Password must contain at least one number";
//               }
//               return null;
//             }}
//           >
//             <Label>Password</Label>

//             <div className="relative">
//               <Input placeholder="Enter your password" />
//               <span
//                 onClick={() => setIsShowPassword(!isShowPassword)}
//                 className="absolute right-3 top-3 cursor-pointer z-10"
//               >
//                 {isShowPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             <Description>
//               Must be at least 8 characters with 1 uppercase and 1 number
//             </Description>

//             <FieldError />
//           </TextField>

//           <Button
//             className="w-full bg-slate-800 text-white"
//             type="submit"
//           >
//             Register
//           </Button>
//         </Form>

//         <p className="mt-4 text-center">
//           If have an account, please{" "}
//           <Link href="/login" className="text-red-600">
//             Login
//           </Link>
//         </p>

//         <div className="divider">OR</div>

//         {/* <GoogleLogin /> */}
//       </Card>
//     </div>
//   );
// };

// export default RegisterPage;