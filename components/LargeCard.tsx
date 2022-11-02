import Image from "next/image";

interface IProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard = ({ img, title, description, buttonText }: IProps) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="Haunted house"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute p-2 text-white bg-black rounded-xl top-32 left-6">
        <h3 className="w-64 mb-3 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="px-4 py-2 mt-5 text-sm bg-blue-900 rounded-lg">{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;
