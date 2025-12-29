'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ href }) => {
  const pathname = usePathname();
  return (
    <div className="col-span-2 bg-green-900 h-screen">
      <Link href="/"><p className="text-center text-white ps-5 pt-3"></p></Link>
      <Link href="/application"><p className={`text-white hover:bg-green-800 p-5 ${pathname === '/application' ? 'bg-green-600' : ''}`}>My Application</p></Link>
      <Link href="/application/new"><p className={`text-white hover:bg-green-800 p-5 ${pathname === '/application/new' ? 'bg-green-600' : ''}`}>Create</p></Link>
      <Link href="/notification"><p className={`text-white hover:bg-green-800 p-5 ${pathname === '/notification' ? 'bg-green-600' : ''}`}>Notifications</p></Link>
      <Link href="/logout"><p className="text-white hover:bg-red-500 p-5">Sign Out</p></Link>
    </div>
  );
};

export default Navbar;