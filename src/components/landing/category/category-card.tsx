import { BiCategory } from "react-icons/bi";

const CategoryCard = () => {
  return (
    <div className="p-4 flex items-center gap-2 bg-[#f8f8f8] rounded-md">
      {/* icon */}
        <div>
            <BiCategory size={30} className="text-[#A31621]"/>
        </div>
        {/* title & subtitle */}
        <div>
          <p className="text-lg text-grey-900 font-bold">Electronic</p>
          <p className="text[14px] line-clamp-2 text-grey-600">Surveillance camera for security and monitoring</p>
        </div>
    </div>
  )
}

export default CategoryCard