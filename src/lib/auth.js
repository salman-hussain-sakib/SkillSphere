import { betterAuth } from "better-auth";

export const auth = betterAuth({
    database: {
        provider: "mongodb",
        url: process.env.MONGODB_URL
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
