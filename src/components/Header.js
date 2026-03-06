
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-sans pb-5 md:pb-8">
      {/* Top Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 md:px-6 lg:max-w-[80%] py-4 md:py-8">
        <img 
          className="w-32 md:w-40 h-auto ml-0 md:ml-6 mb-4 md:mb-0" 
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
          alt="Swiggy Logo"
        />
        
        <div className="text-white text-sm md:text-base font-bold flex flex-wrap justify-center gap-3 md:gap-4 items-center mr-0 md:mr-6">
          <a target="_blank" rel="noopener noreferrer" href="https://www.swiggy.com/corporate/" className="hover:underline">
            Swiggy Corporate
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://partner.swiggy.com/login#/swiggy" className="hover:underline">
            Partner with Us
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.swiggy.com/corporate/" 
             className="border border-white py-2 px-3 md:py-3 md:px-4 rounded-2xl hover:bg-white hover:text-[#ff5200] transition-colors">
            Get the App
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.swiggy.com/corporate/" 
             className="border border-black bg-black py-2 px-6 md:py-3 md:px-8 rounded-2xl hover:bg-gray-800 transition-colors">
            Sign in
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 md:pt-16 pb-8 relative">
        <img 
          className="hidden md:block h-80 md:h-112 w-auto absolute top-0 left-0" 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" 
          alt="Vegetables"
        />
        <img 
          className="hidden md:block h-80 md:h-112 w-auto absolute top-0 right-0" 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" 
          alt="Sushi"
        />
        
        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[55%] text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-normal text-white font-bold container mx-auto text-center px-4">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-5 px-4">
        {/* Location Input */}
        <div className="relative w-full md:w-[40%] lg:w-[33%] ml-0 md:ml-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
          >
            <path
              d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
              fill="currentColor"
            />
          </svg>
          <input
            className="bg-white w-full text-base md:text-[18px] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold focus:outline-none"
            placeholder="Delhi, India"
            type="text"
          />
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[60%] lg:w-[50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
          >
            <path
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.6 5.6a7.5 7.5 0 0 0 11.05 11.05Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            className="bg-white w-full text-base md:text-[18px] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold focus:outline-none"
            placeholder="Search for restaurant and items"
            type="text"
          />
        </div>
      </div>

      {/* Service Tiles */}
      <div className="max-w-[90%] md:max-w-[80%] container mx-auto flex flex-col sm:flex-row justify-center mt-6 md:mt-10 gap-4 px-4">
        <Link to="/restaurant" className="flex-1">
          <img 
            className="w-full h-auto rounded-lg hover:shadow-lg transition-shadow" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
            alt="Food Ordering"
          />
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" className="flex-1">
          <img 
            className="w-full h-auto rounded-lg hover:shadow-lg transition-shadow" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" 
            alt="Instamart"
          />
        </a>
        <a href="https://www.swiggy.com/dineout" className="flex-1">
          <img 
            className="w-full h-auto rounded-lg hover:shadow-lg transition-shadow" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" 
            alt="Dine Out"
          />
        </a>
      </div>
    </header>
  );
}