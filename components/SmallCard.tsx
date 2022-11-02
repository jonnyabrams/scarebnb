import Image from "next/image";

import { IProperty } from "../typings";

interface IProps {
  property: IProperty;
  key: string;
}

const SmallCard = ({ property }: IProps) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left side */}
      <div className="relative w-16 h-16">
        <Image
          src={property.img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt={`Haunted house in ${property.location}`}
        />
      </div>

      {/* right side */}
      <div>
        <h2>{property.location}</h2>
        <h3 className="text-gray-500">{property.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
