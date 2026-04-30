import { betterAuth } from "better-auth";
import { mongoAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL || "");
const db = client.db("skillsphere");

export const auth = betterAuth({
    database: mongoAdapter(db),
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
