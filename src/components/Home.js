import Header from "./Header"
import FoodOptions from "./FoodOptions"
import DineOption from "./Dineoption"
import GroceryOption from "./GroceryOption"


export default function Home(){
    return(
        <>
         <Header></Header>
         <FoodOptions></FoodOptions>
         <GroceryOption></GroceryOption>
         <DineOption></DineOption>
        </>
    )
}