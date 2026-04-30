import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGODB_URL || "mongodb://placeholder";
const client = new MongoClient(mongoUrl);
const db = client.db("skillsphere");

export const auth = betterAuth({
    database: mongodbAdapter(async () => {
        const client = await clientPromise;
        return client.db("skillsphere");
    }),
    // This allows login from any device and prevents CSRF blocks on Vercel
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || "",
        "https://*.vercel.app" 
    ],
    advanced: {
        crossOrigin: true
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
        }
    },
    user: {
        additionalFields: {
            image: {
                type: "string",
                required: false,
            },
        }
    }
});
