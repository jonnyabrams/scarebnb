import Image from "next/image";

interface IProps {
  img: string;
  title: string;
}

const MediumCard = ({ img, title }: IProps) => {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
      {/* relative in parent and layout-fill in child sizes image relative to its container */}
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" alt="Property" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
