export default function GroceryCard({ foodData }) {
  return (
    <div className="flex flex-col items-center w-28 sm:w-32 md:w-36"> {/* Responsive width */}
      <a 
        className="block w-full h-36 sm:h-40 md:h-46 mb-1 sm:mb-2" 
        href={foodData?.action.link}
        aria-label={foodData?.action.text}
      >
        <img
          className="w-full h-full object-cover rounded-lg hover:shadow-md transition-shadow"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
          alt={foodData?.action.text}
          loading="lazy"
        />
      </a>
      <h2 className="font-bold text-sm sm:text-base lg:text-[18px] text-center line-clamp-2 px-1 text-gray-700">
        {foodData?.action.text}
      </h2>
    </div>
  );
}