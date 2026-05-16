// // -----------------------------Start: 53_1---------------------------------------
// // (2)st import it as betterauth documentation
// // import { betterAuth } from "better-auth";

// // export const auth = betterAuth({
// //   //...
// // });

// // (2)en then install mongodb using command: npm install mongodb and then install: npm install @better-auth/mongo-adapter

// // (3)st commit (2) import it as betterauth documentation
// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// // const client = new MongoClient("mongodb+srv://wanderlast:GVTmEdbvoFg0nWlR@cluster0.wenolut.mongodb.net/?appName=Cluster0");
// // (5)
// const client = new MongoClient(process.env.MONGODB_URI);
// console.log("MONGO:", process.env.MONGODB_URI);

// // const db = client.db();
// // (6)
// await client.connect()//optional add
// const db = client.db("wanderlust");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// //   (7)st
//     emailAndPassword: {
//         enabled: true,
//     },
// //   (7)en then create /app/api/auth/[...all]/route.js

// });
// // (3)en then go to .env file
// // ---------------------End:53_1-(1) to () --------------------------------
// -----------------------------Start: 53_4---------------------------------------

//import it as betterauth documentation
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
console.log("MONGO:", process.env.MONGODB_URI);

await client.connect()//optional add
const db = client.db("wanderlust");

export const auth = betterAuth({
  database: mongodbAdapter(db, {

    client
  }),

    emailAndPassword: {
        enabled: true,
    },

    // (4)st import it as betterauth documentation
    socialProviders: {        
      google: {             
        clientId: process.env.GOOGLE_CLIENT_ID,             clientSecret: process.env.GOOGLE_SECRET         
      },     
    },
    // (4)en then go to signup page.
});
// ---------------------End:53_4-(1) to () --------------------------------