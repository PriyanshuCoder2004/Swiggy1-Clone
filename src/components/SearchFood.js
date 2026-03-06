// import { useState, useEffect } from "react";
// import { useParams } from "react-router"

 
//  export default function SearchFood(){

//     const {id} = useParams();
//     const [Food , setFood] = useState('');
//      const [RestData, setRestData] = useState([]);

//     useEffect(()=>{
//         async function fetchData() {
            
//             const proxyServer = "https://cors-anywhere.herokuapp.com/"
//             const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4631&lng=80.3479&restaurantId=${id}`;
//             const response = await fetch(proxyServer+swiggyAPI);
//             const data = await response.json();
//             const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//             const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//             setRestData(filterData);
//          }
    
//          fetchData();
//         },[])

//    return(
//     <div className="w-[80%] mt-20 mx-auto">
//         <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border" placeholder="Search Here" onClick={(e)=>setFood(e.target.value)}></input>
//     </div>
//    )
// }

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "./RestInfo";
import RestHeader from "./RestHeader";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setfood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");


  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setRestaurantName(data?.data?.cards?.[0]?.card?.card?.text ?? "this restaurant"); 
      const groupedCard = data?.data?.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    );

    const cardArray = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (items) =>
    "itemCards" in items?.card?.card || "categories" in items?.card?.card
    );

      // const cardArray = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items)=>"itemCards" in items?.card?.card|| "categories" in items?.card?.card );
      const FilterData = cardArray?.flatMap((items) => {
      const content = items?.card?.card;

      if (content?.itemCards) {
      return content.itemCards;
      }

      if (content?.categories) {
      return content?.categories?.flatMap((cat) => cat.itemCards);
      }

      return [];
      });
      const FinalData = FilterData
  ?.filter((item) => item?.card?.info?.name) // ensures it's a real dish
  .map((item) => item.card.info);


      const uniqueItems = Array.from(
        new Map(FinalData.map((item) => [item.id, item])).values()
      );

      setRestData(uniqueItems);
    }

    fetchData();
  }, [id]);

  const filteredItems = RestData.filter((item) =>
  item.name?.toLowerCase().includes(food.toLowerCase())
);

  if(food.length<=1)
    return(
    <>
    <RestHeader></RestHeader>
    <div className="w-[50%] mx-auto mt-20">
      <input
        type="text"
        className="w-full pl-10 py-2 text-[20px] bg-gray-100 shadow-md rounded-2xl border border-gray-200"
        placeholder={`Search in ${restaurantName}`}
        value={food}
        onChange={(e) => setfood(e.target.value)}
      /><p className="text-center text-gray-500 mt-10 text-xl font-semibold">
          No matching dishes found 🍽️
        </p></div>
        </>)
  return (
    <>
    <RestHeader></RestHeader>
    <div className="w-[50%] mx-auto mt-20">
      <input
        type="text"
        className="w-full pl-10 py-4 mb-8 text-[20px] shadow-md text-2xl bg-gray-200 rounded-2xl border"
        placeholder="Search here"
        value={food}
        onChange={(e) => setfood(e.target.value)}
      />
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <RestInfo key={item.id} restData={item} />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10 text-xl font-semibold">
          No matching dishes found 🍽️
        </p>
      )}
    </div>
    </>
  );
}