export default function DineCard({ RestData }) {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 flex-none rounded-xl md:rounded-2xl border border-gray-200 md:border-2 overflow-hidden pb-2 md:pb-3 shadow-sm hover:shadow-md transition-shadow">
      <a target="_blank" href={RestData.cta.link} rel="noopener noreferrer">
        <div className="relative">
          <img
            className="w-full h-40 sm:h-44 md:h-48 object-cover"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}
            alt={RestData?.info?.name}
            loading="lazy"
          />
          
          {/* Restaurant name */}
          <p className="absolute bottom-2 left-2 text-base sm:text-lg md:text-xl text-white font-bold z-10 line-clamp-1">
            {RestData?.info?.name}
          </p>
          
          {/* Star rating */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 z-10 bg-black/30 rounded-full px-1.5 py-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <circle cx="50" cy="50" r="45" className="fill-green-500" />
              <polygon
                points="50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40"
                className="fill-white"
              />
            </svg>
            <p className="text-base sm:text-lg md:text-xl text-white font-bold">
              {RestData?.info?.rating?.value}
            </p>
          </div>

          {/* Gradient overlay */}
          <div className="absolute bg-gradient-to-t from-black/100 to-transparent h-12 sm:h-14 md:h-16 bottom-0 left-0 right-0"></div>
        </div>
      </a>

      {/* Card content */}
      <div className="mx-2 sm:mx-3 mt-2">
        {/* Cuisines */}
        <div className="text-sm sm:text-[15px] text-gray-700 font-semibold line-clamp-2">
          {RestData?.info?.cuisines?.join(", ")}
        </div>

        {/* Location and distance */}
        <div className="flex justify-between mt-1">
          <div className="flex items-center">
            <span className="text-xs sm:text-[13px] text-gray-700 font-semibold line-clamp-1">
              {RestData?.info?.locationInfo?.formattedAddress}
            </span>
          </div>
          <div className="text-xs sm:text-[13px] text-gray-700 font-semibold">
            {RestData?.info?.locationInfo?.distanceString}
          </div>
        </div>

        {/* Table booking */}
        <div className="flex items-center gap-1 bg-gray-200 rounded-lg sm:rounded-xl w-24 sm:w-28 justify-center py-0.5 mt-2">
          <img 
            className="w-3 h-3" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png" 
            alt="Table booking"
          />
          <span className="text-xs sm:text-[13px] text-gray-700 font-semibold">Table booking</span>
        </div>

        {/* Offer */}
        <div className="flex justify-between items-center bg-green-500 px-2 sm:px-3 py-1.5 sm:py-2 font-bold rounded-lg sm:rounded-xl mt-2 sm:mt-3">
          <div className="flex items-center">
            <img 
              className="w-5 sm:w-6 h-4 sm:h-5 mr-1" 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" 
              alt="Offer"
            />
            <span className="text-xs sm:text-sm md:text-[15px] text-white line-clamp-1">
              {RestData?.info?.offerInfoV3?.vendorOffer?.title} {RestData?.info?.offerInfoV3?.vendorOffer?.subtitle}
            </span>
          </div>
          <span className="text-xs sm:text-[13px] text-white">
            {RestData?.info?.offerInfoV3?.vendorOffer?.subtext}
          </span>
        </div>

        {/* Customer offer */}
        <div className="text-xs sm:text-sm md:text-[16px] bg-green-100 text-green-600 px-2 sm:px-3 rounded-lg sm:rounded-xl mt-2 sm:mt-3 py-1.5 sm:py-2 font-bold line-clamp-2">
          {RestData?.info?.customerOffer?.infos[0]?.description}
        </div>
      </div>
    </div>
  );
}