"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('directus_session_token');
    deleteCookie('directus_session_token', { path: '/' });
    router.push('/login'); // Redirect after logout completes
  }, [router]);

  return (
    <div>
      <h1>Logging out... Please wait.</h1>
    </div>
  );
}