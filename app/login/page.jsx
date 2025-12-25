'use client';
import { FormEvent,useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
 
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
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6 px-5 py-8 bg-white rounded-lg">
                    {infoMessage && <p className="mb-0" style={{ color: 'red' }}>Error: {infoMessage}</p>}
              <h2 className="text-center text-2xl/9 font-bold tracking-tight">Login</h2>
              <div>
                <div className="mt-2">
                  <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-gray-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6 border-solid" placeholder="Email"/>
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-gray-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" placeholder="Password" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"><FontAwesomeIcon className="me-2" icon={faRightToBracket} style={{ 'height': 'auto' }}/> Sign in</button>
              </div>
            </form>
          </div>
      </div>
  )
}