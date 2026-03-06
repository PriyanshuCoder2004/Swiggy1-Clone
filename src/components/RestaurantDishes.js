export default function RestaurantDishes({ rest }) {
  return (
    <div className="inline-block w-40 h-40 rounded-lg overflow-hidden">
      <a href={rest.action.link}><img
        className="w-36 h-45 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${rest.imageId}`}
        //alt={rest.accessibility?.altText || "Dish"}
      /></a>
    </div>
  );
}