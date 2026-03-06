import { Link } from "react-router";

export default function RestCard({ restInfo }) {
  if (!restInfo?.info) return null;

  const {
    id,
    name,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName
  } = restInfo.info;

  return (
    <Link to={`/city/delhi/${id}`} className="block">
      <div className="w-full sm:w-56 md:w-60 mb-1 transform transition duration-200 hover:scale-95">

        {/* Image with Discount Banner */}
        <div className="relative">
          <img
            className="w-full h-36 sm:h-40 md:h-37.75 object-cover rounded-xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
            alt={name}
          />
         <div className="absolute w-full bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent rounded-xl flex items-end">
         <div className="ml-3 mb-2 text-sm sm:text-[18px] font-extrabold text-white tracking-tight">
          {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
        </div>
        </div>
        </div>

        {/* Restaurant Details */}
        <div className="w-[95%] mx-auto mt-2">
          <div className="font-bold text-base sm:text-[18px] truncate">{name}</div>

          {/* Rating and Delivery Time */}
          <div className="flex items-center gap-1 sm:gap-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-4 h-4 sm:w-5 sm:h-5">
              <circle cx="50" cy="50" r="45" className="fill-green-500" />
              <polygon points="50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40" className="fill-white" />
            </svg>
            <span className="text-sm sm:text-[18px] font-semibold">{avgRating}</span>
            <span className="text-sm sm:text-[18px] font-semibold">{sla?.slaString}</span>
          </div>

          {/* Cuisines */}
          <div className="text-gray-700 text-sm sm:text-[16px] mt-1 h-[1.8rem] overflow-hidden line-clamp-2">
            {cuisines?.join(", ")}
          </div>

          {/* Location */}
          <div className="text-gray-700 text-xs sm:text-[12px] font-bold truncate">
            {locality}, {areaName}
          </div>
        </div>
      </div>
    </Link>
  );
}