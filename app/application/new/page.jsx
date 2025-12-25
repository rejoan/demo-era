import { createApplication } from '@/app/actions';
import { getUserData } from '@/lib/dal';
import Link from 'next/link';

export default async function CreatePage() {
const response = await getUserData();

  return (
          <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 bg-blue-900 h-screen">
            <Link href="/application"><p className="text-white hover:bg-blue-600 p-5">My Application</p></Link>
            <Link  href="/application/new"><p className="text-white hover:bg-blue-500 p-5">Create</p></Link>
            <Link  href="/logout"><p className="text-white bg-red-400 hover:bg-red-500 p-5">Sign Out</p></Link>
          </div>
        <div className="col-span-10">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={createApplication} className="space-y-6 px-5 py-8 bg-white rounded-lg">
              <h2 className="text-center text-2xl/9 font-bold tracking-tight">Create a New Application</h2>
            <div>
              <div className="mt-2">
                <input type="text" name="parking_address" required autoComplete="title" className="block w-full rounded-md bg-blue-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Parking Address" />
              </div>
            </div>

            <div>
              <div className="mt-2">
              <input type="text" name="parking_coordinates" required autoComplete="title" className="block w-full rounded-md bg-blue-100 px-3 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Parking Coordinate" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
            </div>
          </form>
        </div>
      </div>
       </div>
    </div>
  );
};