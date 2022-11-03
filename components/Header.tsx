import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }: { placeholder: string }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  // configuration for date range picker - es6 short syntax for startDate: startDate & endDate: endDate
  const selectionRange = {
    startDate,
    endDate,
    key: "selection", // used below in ranges.selection.startDate
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <div>
      <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
        {/* left side */}
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 my-auto cursor-pointer"
        >
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
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
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

        {/* calendar, triggered by search input */}
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center mb-4 border-b">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(Number(e.target.value))}
                min={1} // so user can't go beneath 1
                type="number"
                className="w-12 pl-2 text-lg text-red-400 outline-none"
              />
            </div>

            <div className="flex">
              <button
                onClick={() => setSearchInput("")}
                className="flex-grow text-gray-500"
              >
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
