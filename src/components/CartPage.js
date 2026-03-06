import { Link } from "react-router";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage({ data }) {
  const dispatch = useDispatch();

  if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
    return (
      <div className="flex h-screen flex-col justify-center items-center">
        <img
          className="h-90 mb-5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="Empty Cart"
        />
        <p className="text-[22px] font-bold text-gray-900">Your cart is empty</p>
        <p className="text-gray-700 font-semibold">You can go to home page to view more restaurants</p>
        <Link to="/">
          <button className="mt-8 bg-amber-600 px-6 text-white font-bold py-2 transition-transform duration-200 hover:scale-105">
            See restaurants near you
          </button>
        </Link>
      </div>
    );
  }

  const total = data.reduce((acc, item) => {
    const price = (item.defaultPrice ?? item.price) / 100;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = data.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <div className="bg-white w-full py-3 px-10 items-center flex justify-between">
        <div className="flex">
        <Link to={"/restaurant"}><img className="w-15 h-15 object-cover rounded-xl hover:scale-105 transition-all duration-200" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"></img></Link>
        <p className="ml-10 text-center mt-3 text-[20px] font-semibold text-gray-800">Checkout</p>
        </div>
        <div className="flex gap-10 mr-10"><a href="https://www.swiggy.com/offers-near-me" target="_blank">
                <p className="hover:text-orange-600 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M20.59 13.41l-7.99 8a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l8-8a2 2 0 0 1 2.83 0l7.16 7.17a2 2 0 0 1 0 2.83z" 
                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="#000"/>
                </svg>
                Offers</p></a>
                <a href="https://www.swiggy.com/support" target="_blank">
                <p className="hover:text-orange-600 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 1 1 4.91 2.36c-.49.37-.82.63-.97.79a1.99 1.99 0 0 0-.63 1.39v.12M12 17h.01" 
                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Help</p></a></div>
      </div>
    <div className="flex flex-col lg:flex-row w-full min-h-[87vh] bg-gray-100 gap-6 px-6 py-6">
      {/* Cart Items */}
      <div className="lg:w-[60%] w-full max-h-[80vh] overflow-y-auto bg-white px-6 py-4 rounded-lg shadow-lg space-y-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2 relative"
          >
            <div className="w-2/3">
              <p className="font-bold text-lg md:text-xl">{item.name}</p>
              <p className="text-sm text-gray-700 font-semibold">
                Price for One ₹{((item.defaultPrice ?? item.price) / 100).toFixed(0)}
              </p>
              <p className="text-sm text-gray-500 mb-1 font-semibold">Qty: {item.quantity}</p>

              <div className="flex items-center gap-4 mt-2 border border-gray-400 font-bold w-28 text-xl justify-center rounded-lg shadow-md py-1">
                <button
                  onClick={() => dispatch(DecrementItems(item))}
                  // disabled={item.quantity === 1}
                  className={`text-red-600 hover:scale-130 transition-all duration-200 `}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => dispatch(IncrementItems(item))}
                  className="text-green-500 hover:scale-130 transition-all duration-200"
                >
                  +
                </button>
              </div>

              <p className="text-lg text-gray-800 font-semibold mt-2">
                Item Total ₹{(item.quantity * ((item.defaultPrice ?? item.price) / 100)).toFixed(0)}
              </p>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-lg flex justify-between items-stretch gap-4"
            />
          </div>
        ))}
      </div>

      {/* Billing Summary */}
      <div className="lg:w-[35%] w-full sticky top-10 bg-white rounded-lg shadow-md p-6 text-gray-800 h-fit">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Bill Details</h2>

        <div className="flex justify-between py-2 text-sm">
          <span>Items ({totalItems})</span>
          <span className="font-semibold">₹{total.toFixed(0)}</span>
        </div>

        <div className="flex justify-between py-2 text-sm">
          <span>Delivery Fee</span>
          <span className="font-semibold">₹{(total / 15 + 20).toFixed(0)}</span>
        </div>

        <div className="flex justify-between py-2 text-sm">
          <span>GST & Other Charges</span>
          <span className="font-semibold">₹{(total / 24).toFixed(0)}</span>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="flex justify-between items-center text-lg font-bold">
          <span className="text-green-700">To Pay</span>
          <span className="text-green-700">
            ₹{(total + total / 10 + 20 + total / 15).toFixed(0)}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}