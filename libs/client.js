import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'mcmstutorial',
    apiKey: process.env.API_KEY,
});