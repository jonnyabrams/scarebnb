import { useRouter } from "next/router";
import moment from "moment";

import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = moment(startDate).format("DD/MM/YYYY");
  const formattedEndDate = moment(endDate).format("DD/MM/YYYY");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {data.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={index}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden lg:inline-flex lg:min-w-[600px]">
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
