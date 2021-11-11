import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ReceiptItem {}

interface ReceiptContextData {
  receiptItems: ReceiptItem[];
  setReceiptItems: (i: ReceiptItem[]) => void;
  calculateReceipt: () => void;
}
const DEFAULT_RECEIPT_CONTEXT_DATA: ReceiptContextData = {
  receiptItems: [],
  setReceiptItems: () => null,
  calculateReceipt: () => null,
};
const ReceiptContext = createContext<ReceiptContextData>(
  DEFAULT_RECEIPT_CONTEXT_DATA
);

const { Provider } = ReceiptContext;

export const ReceiptProvider: React.FC = ({ children }) => {
  const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>([]);

  const calculateReceipt = () => {
    alert("calculate");
  };
  return (
    <Provider
      value={{
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
