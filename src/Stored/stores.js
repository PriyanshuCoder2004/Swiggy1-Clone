import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer"
import RestaurantReducer from "./restaurantSlice"
import MenuReducer from "./menuSlice"

export const store = configureStore({
    reducer:{
        restaurants:RestaurantReducer,
        cartslice:CartReducer,
        menu:MenuReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;