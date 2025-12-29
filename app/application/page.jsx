import { getUserData, fetchNotifications } from '@/lib/dal';
import Link from 'next/link';
import { format } from 'date-fns';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';
import Navbar from '../components/Navbar';

export async function ApplicationTable() {
  const response = await getUserData();
  const notifications = await fetchNotifications(response?.user?.id);
  const applications = await client.request(readItems('applications',{
    filter: { user_created: { _eq: response?.user?.id } }
  }));
    
  return (
        <div className="grid grid-cols-12 gap-4">
          <Navbar />
          <div className="col-span-10">
              <div className="text-right bg-white p-5">
                <div className="text-right bg-white p-5">
                 <Link href="/notification"><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform -translate-y-1/2 bg-red-600 rounded-full">{notifications.length}</span></Link>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-purple-700/10">{response?.user?.first_name}</span>
              </div>
              </div>
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
                      Current Step
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Comment
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{item.parking_address}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.parking_coordinates}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{format(new Date(item.date_created), 'MMMM dd, yyyy')}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.current_step}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>      
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {item.rejection_comment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
        );
};

export default ApplicationTable;