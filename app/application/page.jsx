import { getUserData } from '@/lib/dal';
import Link from 'next/link';
import { format } from 'date-fns';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faUser } from '@fortawesome/free-solid-svg-icons';

export async function ApplicationTable() {
  const response = await getUserData();

  const applications = await client.request(readItems('applications',{
    filter: { user_created: { _eq: response?.user?.id } }
  }));
    
  return (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 bg-green-900 h-screen">
          <Link href="/"><p className="text-center text-white ps-5 pt-3"><FontAwesomeIcon className="size-10" icon={faCarSide} /></p></Link>
            <Link href="/application"><p className="text-white hover:bg-green-800 p-5">My Application</p></Link>
            <Link href="/application/new"><p className="text-white hover:bg-green-800 p-5">Create</p></Link>
            <Link href="/logout"><p className="text-white hover:bg-red-500 p-5">Sign Out</p></Link>
          </div>
          <div className="col-span-10">
              <div className="text-right bg-white p-5">
                <FontAwesomeIcon icon={faUser} />{response?.user?.first_name}
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
                      <td className="px-6 py-4 whitespace-nowrap">{item.current_step}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>      
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        ...
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