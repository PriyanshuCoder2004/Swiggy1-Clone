// import { dineoutRestaurants } from "../Utils/DineData";
// import DineCard from "./DineCard";

// export default function DineOption(){
//     return(
//         <div className="w-[85%] mx-auto mt-20 mb-20"> 
//           <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
//           <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
//             {
//                 dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
//             }
//           </div>

//           {/* <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png'></img>*/}
//         </div> 

        
//     )
// }

import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";
import { Location } from "../Utils/Location";
import PlaceCard from "./PlaceCard";

export default function DineOption() {
  return (
    <>
      {/* Dineout Restaurants Section */}
      <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20">
        <p className="font-bold text-xl md:text-2xl mb-3 text-gray-800">
          Discover best restaurants on Dineout
        </p>
        <div className="flex overflow-x-auto mt-5 gap-3 md:gap-4.5 pb-6 mb-10 md:mb-20 hidden-scroll">
          {dineoutRestaurants.map((RestData) => (
            <DineCard key={RestData.info?.id} RestData={RestData} />
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full">
        <img
          className="w-full h-40 md:h-60.5 object-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="Download Swiggy App"
        />
      </div>

      {/* Cities Section */}
      <div className="w-full px-4 md:max-w-[90%] lg:max-w-[70%] mx-auto mt-10 md:mt-20">
        <p className="font-bold text-xl md:text-2xl mb-3 text-gray-800">
          Cities with food delivery
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {Location?.map((Data) => (
            <PlaceCard key={Data?.id} Data={Data} />
          ))}
        </div>
      </div>
    </>
  );
}