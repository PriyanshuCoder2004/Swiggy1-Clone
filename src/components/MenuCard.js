
import { useState } from "react"
import RestInfo from "./RestInfo"

export default function MenuCard({menuitems,foodselected}){

    const [isOpen, setisOpen]=useState(true);


    if("categories" in menuitems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuitems?.title}</p>
            <div>
                {
                    menuitems?.categories?.map((items)=><MenuCard key={items?.title} menuitems={items} foodselected={foodselected}></MenuCard>)
                }
            </div>
            </div>
        )
    }

    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4 text-gray-800">{menuitems?.title}</p>
            <button className="text-[30px] font-semibold mr-4 text-gray-800 text-center" onClick={()=>setisOpen(!isOpen)}>{isOpen?"^":"˅"}</button>
            </div>
            <div className="h-full py-2.5 bg-gray-200 mb-3 rounded-xl"></div>
        </div>
        )
    }

    if(foodselected==='veg'){
        return(
            <div className="w-full">
             <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4 text-gray-600">{menuitems?.title}</p>
            <button className="text-[30px] font-semibold  mr-4 text-gray-600 text-center" onClick={()=>setisOpen(!isOpen)}>{isOpen?"^":"˅"}</button>
            </div>
            <div>
                {   
                    menuitems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
        )
    }

    if(foodselected==='non-veg'){
        return(
            <div className="w-full">
             <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4 text-gray-600">{menuitems?.title}</p>
            <button className="text-[30px] font-semibold  mr-4 text-gray-600 text-center" onClick={()=>setisOpen(!isOpen)}>{isOpen?"^":"˅"}</button>
            </div>
            <div>
                {   
                    menuitems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
        )
    }


    return(   
        <div className="w-full">
             <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4 text-gray-600">{menuitems?.title}</p>
            <button className="text-[30px] font-semibold  mr-4 text-gray-600 text-center" onClick={()=>setisOpen(!isOpen)}>{isOpen?"^":"˅"}</button>
            </div>
            <div>
                {   
                    menuitems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
    )
}