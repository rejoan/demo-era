import { createApplication } from '@/app/actions';
import { getUserData } from '@/lib/dal';

export default async function CreatePage() {
const response = await getUserData();
  return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Create a New Application</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={createApplication} className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">Parking Address</label>
              <div className="mt-2">
                <input type="text" name="parking_address" required autoComplete="title" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">Parking Coordinates</label>
                
              </div>
              <div className="mt-2">
              <input type="text" name="parking_coordinates" required autoComplete="title" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create</button>
            </div>
          </form>
        </div>
      </div>
  );
};