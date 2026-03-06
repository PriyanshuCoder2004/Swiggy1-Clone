import { useSelector } from "react-redux";
import CartPage from "./CartPage";

export default function Checkout() {

  const items = useSelector((state) => state.cartslice?.items ?? []);

  return <CartPage data={items} />;
}