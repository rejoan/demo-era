import { getUserData } from '@/lib/dal';
import Link from 'next/link';
import styles from "../page.module.css";
import { format } from 'date-fns';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';

export async function ApplicationTable() {
  const response = await getUserData();

  const applications = await client.request(readItems('applications'));
    
  return (
          
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Welcome  {response?.user?.first_name}</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Parking Address
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Parking Coordinates
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Submitted
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{item.parking_address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.parking_coordinates}</td>
              <td className="px-6 py-4 whitespace-nowrap">{format(new Date(item.date_created), 'MMMM dd, yyyy')}</td>
              
              <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>      
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                ...
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className={styles.secondary} href="/logout">Sign Out</Link>
      <Link className={styles.secondary} href="/application/new"> Create</Link>
    </div>
  );
};

export default ApplicationTable;