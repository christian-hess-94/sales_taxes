import React, { useContext, useState } from "react";
import { createContext } from "react";
import useShop, { ShopItem } from "./shop.context";

export interface ReceiptItem {
  name: string;
  price: number;
  type: "Book" | "Food" | "Medical Product" | string;
  imported: boolean;
  quantity: number;
  finalPrice: number;
  taxes: number;
  taxesPercentage: number;
}

interface ReceiptContextData {
  totalTax: number;
  receiptItems: ReceiptItem[];
  setReceiptItems: (i: ReceiptItem[]) => void;
  calculateReceipt: () => void;
}
const DEFAULT_RECEIPT_CONTEXT_DATA: ReceiptContextData = {
  totalTax: 0,
  receiptItems: [],
  setReceiptItems: () => null,
  calculateReceipt: () => null,
};
const ReceiptContext = createContext<ReceiptContextData>(
  DEFAULT_RECEIPT_CONTEXT_DATA
);

const { Provider } = ReceiptContext;

export const ReceiptProvider: React.FC = ({ children }) => {
  const { shopItems } = useShop();
  const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>([]);
  const [totalTax] = useState(0);

  const calculateTaxPercentage = (shopItem: ShopItem) => {
    let tax = 0;
    if (shopItem.type === "Other") {
      tax += 5;
    }
    if (shopItem.imported) tax += 10;

    return tax;
  };

  const calculateValueToAdd = (taxValue: number) => {
    const fixedTaxValue = taxValue.toFixed(2);
    const separateTax = fixedTaxValue.split(".");
    const cents = parseInt(separateTax[1]);
    if (cents > 95) {
      const taxDollar = parseInt(separateTax[0]) + 1;
      const newTaxValue = parseFloat(taxDollar + ".00");
      return newTaxValue;
    }
    const rest = cents % 5;
    const centsToAdd = 5 - rest;
    const newCentValue = cents + centsToAdd;
    const newTaxValue = parseFloat(separateTax[0] + "." + newCentValue);
    return newTaxValue;
  };

  const calculateReceipt = () => {
    const receiptItemsToAdd: ReceiptItem[] = [];
    shopItems.forEach((shopItem) => {
      const { price, quantity, name, type, imported } = shopItem;
      const taxesPercentage = calculateTaxPercentage(shopItem);
      const retailFullPrice = price * quantity;
      let finalPrice = retailFullPrice;
      let taxes = 0;
      if (taxesPercentage) {
        const taxValue1 = (retailFullPrice * taxesPercentage) / 100;
        const newTaxValue = calculateValueToAdd(taxValue1);
        finalPrice = parseFloat((retailFullPrice + newTaxValue).toFixed(2));
        taxes = newTaxValue * quantity;
      }
      const receiptItemToAdd = {
        finalPrice,
        imported,
        name,
        price,
        quantity,
        taxes,
        taxesPercentage,
        type,
      };
      receiptItemsToAdd.push(receiptItemToAdd);
    });
    setReceiptItems([...receiptItemsToAdd]);
  };
  return (
    <Provider
      value={{
        totalTax,
        receiptItems,
        setReceiptItems,
        calculateReceipt,
      }}
    >
      {children}
    </Provider>
  );
};

const useReceipt = (): ReceiptContextData => {
  const context = useContext(ReceiptContext);

  if (!context)
    throw new Error("useGrid must be used within <ReceiptProvider>");
  return context;
};

export default useReceipt;
