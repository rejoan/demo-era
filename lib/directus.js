import { authentication, createDirectus, rest } from '@directus/sdk';

const url = process.env.NEXT_PUBLIC_DIRECTUS_API;
const client = createDirectus(url).with(rest()).with(authentication("cookie", { credentials: "include" }));

export default client;