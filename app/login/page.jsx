'use client';
import { FormEvent,useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next';
 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const url = process.env.NEXT_PUBLIC_DIRECTUS_API;
    const authURL = url+'/auth/login'
 
    await fetch(authURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
      setCookie('directus_session_token',  data.data.access_token, { maxAge: 60 * 60 * 24 });
      router.push('/application')
    })
    .catch(error => {
      setInfoMessage(error.message);
    });
  }
 const [infoMessage, setInfoMessage] = useState('');
  return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {infoMessage && <p style={{ color: 'red' }}>Error: {infoMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">Email address</label>
              <div className="mt-2">
                <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">Password</label>
                
              </div>
              <div className="mt-2">
                <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
            </div>
          </form>
        </div>
      </div>
  )
}