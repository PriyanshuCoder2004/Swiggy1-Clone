export default function FoodCard({foodData}){
    return(
        
        <a className="block w-32 h-40" href={foodData?.action.link}>
            <img className="w-full h-full object-cover" 
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} 
                 alt={foodData?.action.text} />
        </a>
    )
}