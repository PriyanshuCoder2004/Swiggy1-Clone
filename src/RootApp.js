import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurants } from "./Stored/restaurantSlice";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import store from "./Stored/stores";
import "./index.css";

export default function RootApp() {
  const dispatch = useDispatch();

  useEffect(() => {
  if (store.getState().restaurants.list.length === 0) {
    dispatch(fetchRestaurants());
  }
}, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Footer />}>
          <Route path="/" element={<Home />} />
          <Route element={<SecondaryHome />}>
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
          </Route>
        </Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}