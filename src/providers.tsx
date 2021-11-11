import React from "react";
import { ShopProvider } from "./context/shop.context";

const Providers: React.FC = ({ children }) => {
  return <ShopProvider>{children}</ShopProvider>;
};

export default Providers;
