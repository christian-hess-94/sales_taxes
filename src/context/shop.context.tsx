import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ShopItem {
  name: string;
  price: number;
  type: "Book" | "Food" | "Medical Product" | string;
  imported: boolean;
}

interface ShopContextData {
  items: ShopItem[];
  addItem: (i: ShopItem) => void;
}
const DEFAULT_GRID_CONTEXT_DATA: ShopContextData = {
  items: [],
  addItem: () => null,
};
const ShopContext = createContext<ShopContextData>(DEFAULT_GRID_CONTEXT_DATA);

const { Provider } = ShopContext;

export const ShopProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<ShopItem[]>([]);

  const addItem = (i: ShopItem) => {
    const newItems = items;
    newItems.push(i);
    setItems(newItems);
  };
  return <Provider value={{ items, addItem }}>{children}</Provider>;
};

const useShop = (): ShopContextData => {
  const context = useContext(ShopContext);

  if (!context) throw new Error("useGrid must be used within <ShopProvider>");
  return context;
};

export default useShop;
