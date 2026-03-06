import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){
    return(
        <div className="w-[80%] container mx-auto mt-10 overflow-x-auto pb-6 scrollbar-gap hidden-scroll transition-all smooth">
          <p className="font-bold text-xl md:text-2xl mb-3 text-gray-800">Order our best food options</p>
            <div className="grid grid-rows-2 grid-flow-col gap-8 w-max">
                {imageGridCards.map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    )
}