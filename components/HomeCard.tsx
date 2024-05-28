import Image from "next/image"

interface HomeCardProps {
  bgColor: string,
  ImgUrl: string,
  title: string,
  description: string,
  handleClick: () => void
}

const HomeCard = ({ bgColor, ImgUrl, title, description, handleClick }: HomeCardProps) => {
  return (
    <div className={`${bgColor} px-4 py-6 flex flex-col justify-between
      w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer
      transition-transform transform hover:scale-105 hover:shadow-lg `}
      onClick={handleClick}>
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={ImgUrl} alt="homecard-meeting"
          width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  )
}
export default HomeCard