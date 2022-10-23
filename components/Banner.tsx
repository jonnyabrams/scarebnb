import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/banner.webp" layout="fill" objectFit="cover" alt="SpareBnb banner" />
    </div>
  )
}

export default Banner