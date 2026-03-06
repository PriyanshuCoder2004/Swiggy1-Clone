import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import MenuCard from "./MenuCard";
import RestInfoShimmer from "./RestInfoShimmer"
import Discount from "./Discount";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuById } from "../Stored/menuSlice";

export default function RestaurantMenu(){
    let {id}=useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const menuEntry = useSelector((state) => state.menu.items[id]);
    const status = useSelector((state) => state.menu.status);
    const [Selected, setSelected]=useState(null);
    useEffect(() => {
    if (!menuEntry) {
      dispatch(fetchMenuById(id));
    }
    }, [id, dispatch, menuEntry]);
    
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const scrollRef = useRef(null); // new ref for scrolling

    const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    };

    const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    };

    // console.log(menuData);
    // In JavaScript, [] == [] returns false because you're comparing two different array references.
    // if(menuData==[])
    //     return <RestInfoShimmer></RestInfoShimmer>
    // if (RestData?.length === 0) {
    //     return <RestInfoShimmer />;
    //     }

    if (!menuEntry || status === "loading" || menuEntry.menuData?.length === 0)
    return <RestInfoShimmer />;

    const { headerData, offers, menuData } = menuEntry;

    return(
        <div>
            <div className="w-[65%] mx-auto mt-4 mb-2 relative">
                <div className="text-3xl font-bold mb-2 text-gray-900">{headerData?.name}
                </div>
                <div className="relative mt-10 mx-2 border border-gray-300 rounded-2xl px-6 pt-3 pb-8 bg-white p-4 [box-shadow:-16px_16px_16px_rgba(0,0,0,0.1),16px_16px_16px_rgba(0,0,0,0.1)]">
                    <img className="absolute right-4 bottom-4 rounded-xl h-30 w-30 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+headerData?.cloudinaryImageId}></img>
                    <div className="flex gap-1 items-center">
                    <span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-5 h-5 mt-0.5"
                    >
                    <circle cx="50" cy="50" r="45" className="fill-green-500" />
                    <polygon
                    points="50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40"
                    className="fill-white"
                    />
                    </svg></span>
                    <span className="text-gray-900 font-bold">{headerData?.avgRatingString+" ("+headerData?.totalRatingsString+")"}</span>
                    <div className="bg-gray-700 rounded-2xl h-1 w-1 mt-1 mx-2"></div>
                    <div className="text-gray-900 font-bold">{headerData?.costForTwoMessage}</div>
                    </div>
                    <div className="text-orange-500 font-bold text-sm underline mt-2">{headerData?.cuisines.join(",  ")}</div>
                    <div className="flex mt-2 items-center">
                        <div className="bg-gray-700 rounded-2xl h-1 w-1  mx-2"></div>
                        <div className="text-gray-900 text-sm font-bold">Outlet</div>
                        <span className="text-gray-500 text-sm ml-2 ">{headerData?.areaName} {headerData?.locality}</span>
                    </div>
                    <div className="text-gray-900 text-sm font-extrabold mt-2 flex items-center">
                        <div className="bg-gray-700 rounded-2xl h-1 w-1 mx-2"></div>
                        <div>{headerData.sla.slaString}</div>
                    </div>
                </div>
                <div className="flex justify-between w-[96%] mt-10 text-gray-900 items-center">
                    <div className="text-[20px] font-bold">Deals for you</div>
                    <div className="font-bold text-4xl items-center flex gap-2">
                        <button
            onClick={scrollLeft}
            className=" rounded-3xl pb-0.5 pr-0.5 bg-gray-200 hover:bg-gray-300"
          >
            ＜
          </button>
          <button
            onClick={scrollRight}
            className=" rounded-3xl pb-0.5 pl-0.5 bg-gray-200 hover:bg-gray-300"
          >
            ＞
          </button>
                    </div>
                </div>
            <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-1 mt-4"
            >
            {offers.map((item, index) => (
            <Discount key={index} data={item} />
            ))}
            </div>
            </div>
            <div className="flex w-[6%] mt-14 mx-auto text-gray-700 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 1 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.4 0Z"/>
            </svg>
            <p className="text-center">Menu</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.3 4.3a1 1 0 0 0 0 1.4L14.58 12l-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.4 0Z"/>
            </svg>
            </div>
            <Link to={`/city/delhi/${id}/search`}>
            <div className="w-[65%] mx-auto mt-4 mb-2 ">
                <p className="w-full text-center text-[16px] text-gray-800 font-semibold py-2 bg-gray-200 text-2xl rounded-xl">Search For Dishes</p>
            </div>
            </Link>
            <div className="w-[65%] mx-auto mt-6 mb-5">
            <button className={` font-bold text-[14px] py-1 px-5 mr-4 border rounded-xl ${Selected==="veg"? "bg-green-500 text-white border-green-600":'bg-gray-300'}`} onClick={()=>setSelected(Selected==='veg'?null:'veg')}>Veg</button>
            <button className={`font-bold text-[14px] py-1 px-2 border rounded-xl ${Selected==='non-veg'? "bg-red-600 text-white border-red-600":"bg-gray-300"}`} onClick={()=>setSelected(Selected==='non-veg'?null:'non-veg')}>Non-Veg</button>
            <hr className="mt-6 text-gray-300"></hr>
        </div>
        <div className="w-[65%] mx-auto">
            {
                menuData?.map((menuitems)=><MenuCard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card} foodselected={Selected}></MenuCard>)
            }
        </div>
        <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all"
        >
        ↑ Top
        </button>

        </div>
    )
}