import { GroceryGridCards } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <div className="mt-10 md:mt-16 lg:mt-20 w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] container mx-auto">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-[25px] text-gray-900 mb-4 sm:mb-5 lg:mb-7">
        Shop groceries on Instamart
      </h1>
      <div className="w-full overflow-x-auto pb-4 hidden-scroll">
        <div className="grid grid-rows-1 grid-flow-col gap-4 sm:gap-6 lg:gap-8 w-max">
          {GroceryGridCards.map((foodData) => (
            <GroceryCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </div>
  );
}