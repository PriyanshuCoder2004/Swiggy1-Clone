import { useSelector } from "react-redux";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import RestaurantDishes from "./RestaurantDishes";
import { useRef, useState } from "react";



export default function Restaurant() {
  const [Condition,setCondition]=useState("All");
  const scrollRef = useRef(null); // new ref for scrolling

  const scrollLeft = () => {
  scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
  };

  const scrollRight = () => {
  scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
  };
  const { list, status,list2 } = useSelector((state) => state.restaurants);
  if (status === "loading") return <Shimmer />;
  if (status === "failed") return <p>Error loading restaurants.</p>;
  let Filtered=[];
  if(Condition=="All"){
    Filtered=list;
  }
  if(Condition=="Rating 4+"){
    Filtered=list.filter((item)=>item?.info?.avgRating>=4.5)
  }
  if(Condition=="Near me"){
    Filtered = [...list].sort((a, b) => a?.info?.sla?.lastMileTravel - b?.info?.sla?.lastMileTravel);
  }
  if(Condition=="is Open"){
    Filtered=list?.filter((item)=>item?.info?.isOpen===true)
  }
  if (Condition === "Fast Delivery") {
  // Filtered = list.filter(item => item?.info?.sla?.deliveryTime <= 25);
  Filtered = [...list].sort((a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);
}

  return (
    <>
  <div>
    <div className="flex justify-between w-[75%] mx-auto mt-5">
      <p className="text-2xl font-bold text-gray-900">What's on your mind?</p>
      <div className="text-[28px] flex gap-2">
        <button className="bg-gray-200 px-2 rounded-[50%]" onClick={scrollLeft}>🠔</button>
        <button className="bg-gray-200 px-2 rounded-[50%]" onClick={scrollRight}>🠖</button>
      </div>
    </div>
  <div>
  <div ref={scrollRef} className="w-[75%] mx-auto overflow-x-auto whitespace-nowrap px-4 py-1 mb-8 hidden-scroll">
  <div className="inline-flex gap-2">
    {list2?.map((rest) => (
      <RestaurantDishes key={rest.id} rest={rest} />
    ))}
  </div>
</div>
</div>
<hr className="w-[75%] mx-auto font-bold text-gray-200"></hr>
</div><div className="mt-5">
    <p className="w-[75%] mx-auto text-2xl font-bold text-gray-900">Restaurants with online food delivery in Delhi</p>
    <div className="w-[75%] mx-auto flex gap-4 mt-4">
      <button className={`px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "All"? "bg-gray-800 text-white": "border-gray-300 text-gray-700"}`} onClick={()=>setCondition("All")}>All</button>
      <button className={`px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Rating 4+"? "bg-gray-800 text-white": "border-gray-300 text-gray-700"}`} onClick={()=>setCondition("Rating 4+")}>Rating 4.5+</button>
      <button className={`px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Near me"? "bg-gray-800 text-white": "border-gray-300 text-gray-700"}`} onClick={()=>setCondition("Near me")}>Near me</button>
      <button className={`px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "is Open"? "bg-gray-800 text-white": "border-gray-300 text-gray-700"}`} onClick={()=>setCondition("is Open")}>is Open</button>
      <button className={`px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Fast Delivery"? "bg-gray-800 text-white": "border-gray-300 text-gray-700"}`} onClick={() => setCondition("Fast Delivery")}>Fast Delivery</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[75%] mt-10 mx-auto gap-8">
  {Filtered?.map((rest) => (
    <RestCard key={rest?.info.id} restInfo={rest} />
  ))}
</div>
    </div>
    </>
  );
}