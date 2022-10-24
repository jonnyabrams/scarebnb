import Image from "next/image";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
        {/* left side */}
        <div className="relative flex items-center h-10 my-auto cursor-pointer">
          <Image
            src="/scarebnb-logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="SpareBnb logo"
          />
        </div>

        {/* middle - search */}
        <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
          <input className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" type="text" placeholder="Start your search" />
          <MagnifyingGlassIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
        </div>

        {/* right side */}
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden cursor-pointer md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
            <Bars3Icon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
