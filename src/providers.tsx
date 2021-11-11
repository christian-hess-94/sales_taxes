import React from "react";
import { ReceiptProvider } from "./context/receipt.context";
import { ShopProvider } from "./context/shop.context";

const Providers: React.FC = ({ children }) => {
  return (
    <ShopProvider>
      <ReceiptProvider>{children}</ReceiptProvider>
    </ShopProvider>
  );
};

export default Providers;
