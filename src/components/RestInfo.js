import { useDispatch, useSelector } from "react-redux";
import { IncrementItems, DecrementItems, addItems } from "../Stored/CartSlicer";

export default function RestInfo({ restData }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);
  const element = items.find((item) => item.id === restData.id);
  const count = element ? element.quantity : 0;

  const handleAdd = () => dispatch(addItems(restData));
  const handleInc = () => dispatch(IncrementItems(restData));
  const handleDec = () => dispatch(DecrementItems(restData));

  const VegIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect x="1" y="1" width="14" height="14" rx="3" ry="3" stroke="green" fill="none" strokeWidth="1" />
      <circle cx="8" cy="8" r="4" fill="green" />
    </svg>
  );

  const NonVegIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect x="1" y="1" width="14" height="14" rx="3" ry="3" stroke="red" fill="none" strokeWidth="1" />
      <circle cx="8" cy="8" r="4" fill="red" />
    </svg>
  );

  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%] pr-3">
          {restData.isVeg ? <VegIcon /> : <NonVegIcon />}
          <p className="text-gray-600 font-bold text-[18px] mb-1 mt-1">{restData.name}</p>
          <p className="text-[16px] font-semibold mb-1">
            ₹{((restData?.defaultPrice ?? restData?.price) / 100).toFixed(0)}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="green">
              <path d="M12 2L14.85 8.39L22 9.27L16.5 14.14L17.85 21.02L12 17.77L6.15 21.02L7.5 14.14L2 9.27L9.15 8.39L12 2Z" />
            </svg>
            <span className="text-green-700">
              {restData?.ratings?.aggregatedRating?.rating ?? "N/A"}
            </span>
            <span className="text-gray-600">
              ({restData?.ratings?.aggregatedRating?.ratingCountV2 ?? "N/A"})
            </span>
          </div>
          <p className="text-gray-600 max-w-[84%] mt-1">
            {restData?.description?.split(" ").length > 30
              ? restData.description.split(" ").slice(0, 30).join(" ") + "..."
              : restData?.description}
          </p>
        </div>

        <div className="w-[20%] relative flex justify-center">
          <img
            className="w-39 h-36 object-cover rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData?.imageId}`}
            alt={restData?.name}
          />
          {count === 0 ? (
            <button
              onClick={handleAdd}
              className="py-2 px-8 hover:bg-gray-200 transition-all duration-200 absolute top-28 rounded-xl font-bold text-xl text-green-600 shadow-md border border-gray-300 bg-white"
            >
              ADD
            </button>
          ) : (
            <div className="absolute top-28 flex justify-center font-bold items-center text-2xl text-green-600 shadow-md border border-gray-300 px-5 py-2 bg-white rounded-xl w-28">
              <button onClick={handleDec} className="hover:bg-gray-300 absolute top-0 left-0 w-9 h-12 rounded-l-lg">
                -
              </button>
              <span className="px-2">{count}</span>
              <button onClick={handleInc} className="hover:bg-gray-300 absolute top-0 right-0 w-10 h-12 rounded-r-lg">
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="mb-6 mt-4 text-gray-300" />
    </>
  );
}