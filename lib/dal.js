import 'server-only';
import { cookies } from 'next/headers';
import { readMe } from '@directus/sdk';
import client from '@/lib/directus';
import { redirect } from 'next/navigation';

export async function getUserData() {
    let redirectPath;
    try {
        const token = (await cookies()).get("directus_session_token")?.value;
        if (!token) {
          redirectPath = '/login';
        }

        client.setToken(token);
        const user = await client.request(readMe());
        return { token:token, success: true, user };
    } catch (error) {
        console.log(error);
        redirectPath = '/login';
    }finally {
        if (redirectPath){
         redirect(redirectPath); 
        }
    }

}