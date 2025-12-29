import { getUserData, fetchNotifications } from '@/lib/dal';
import Link from 'next/link';
import client from '@/lib/directus';
import Navbar from '../components/Navbar';


export async function NoticationPage() {
  const response = await getUserData();
  const notifications = await fetchNotifications(response?.user?.id);
    
  return (
          <div className="grid grid-cols-12 gap-4">
            <Navbar />
            <div className="col-span-10">
              <div className="text-right bg-white p-5">
                 <Link href="/notification"><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform -translate-y-1/2 bg-red-600 rounded-full">{notifications.length}</span></Link>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-purple-700/10">{response?.user?.first_name}</span>
              </div>
              {notifications.map((notification) => (
                <div key={notification.id} className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-3" role="alert">
                <Link href="application"><p className="font-bold">{notification.subject}<svg className="fill-current inline opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg></p></Link>
                <p>{notification.message}</p>
              </div>
              ))}
            </div>
          </div>
          );
};

export default NoticationPage;