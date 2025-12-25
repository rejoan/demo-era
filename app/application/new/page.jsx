import { createApplication } from '@/app/actions';
import { getUserData } from '@/lib/dal';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCarSide } from '@fortawesome/free-solid-svg-icons';

export default async function CreatePage() {
const response = await getUserData();

  return (   
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 bg-green-900 h-screen">
          <Link href="/"><p className="text-center text-white ps-5 pt-3"><FontAwesomeIcon className="size-10" icon={faCarSide} /></p></Link>
            <Link href="/application"><p className="text-white hover:bg-green-800 p-5">My Application</p></Link>
            <Link  href="/application/new"><p className="text-white hover:bg-green-800 p-5">Create</p></Link>
            <Link  href="/logout"><p className="text-white hover:bg-red-500 p-5">Sign Out</p></Link>
          </div>
        <div className="col-span-10">
          <div className="text-right bg-white p-5">
                <FontAwesomeIcon icon={faUser} />{response?.user?.first_name}
              </div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action={createApplication} className="space-y-6 px-5 py-8 bg-white rounded-lg">
                  <h2 className="text-center text-2xl/9 font-bold tracking-tight">Create a New Application</h2>
                <div>
                  <div className="mt-2">
                    <input type="text" name="parking_address" required autoComplete="title" className="block w-full rounded-md bg-gray-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" placeholder="Parking Address" />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                  <input type="text" name="parking_coordinates" required autoComplete="title" className="block w-full rounded-md bg-gray-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" placeholder="Parking Coordinate" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
                </div>
              </form>
            </div>
        </div>
      </div>
  </div>
  );
};