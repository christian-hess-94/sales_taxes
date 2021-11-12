import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ShopItem {
  name: string;
  price: number;
  type: "Book" | "Food" | "Medical Product" | "Other";
  imported: boolean;
  quantity: number;
}

interface ShopContextData {
  shopItems: ShopItem[];
  setShopItems: (i: ShopItem[]) => void;
  addItem: (i: ShopItem) => void;
}
const DEFAULT_SHOP_CONTEXT_DATA: ShopContextData = {
  shopItems: [],
  addItem: () => null,
  setShopItems: () => null,
};
const ShopContext = createContext<ShopContextData>(DEFAULT_SHOP_CONTEXT_DATA);

const { Provider } = ShopContext;

export const ShopProvider: React.FC = ({ children }) => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);

  const addItem = (i: ShopItem) => {
    const newItems = [...shopItems];
    newItems.push(i);
    setShopItems(newItems);
  };
  return (
    <Provider value={{ shopItems, addItem, setShopItems }}>{children}</Provider>
  );
};

const useShop = (): ShopContextData => {
  const context = useContext(ShopContext);

  if (!context) throw new Error("useGrid must be used within <ShopProvider>");
  return context;
};

export default useShop;
