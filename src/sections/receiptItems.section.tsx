import React from "react";
import ReceiptListItem from "../components/receiptItem";
import Typography from "../components/typography";
import useReceipt from "../context/receipt.context";

import * as GS from "../global-styles";
interface ReceiptItemsSectionProps {}

const ReceiptItemsSection: React.FC<ReceiptItemsSectionProps> = (props) => {
  const { receiptItems } = useReceipt();

  return (
    <GS.StyledFlexContainerNoBorder>
      {receiptItems.map((receiptItem, index) => (
        <ReceiptListItem key={index} item={receiptItem} />
      ))}
      {!!receiptItems.length && (
        <>
          <Typography
            type="h4"
            text={
              "Total tax: " +
              receiptItems.reduce((acc, item) => acc + item.taxes, 0).toFixed(2)
            }
          />
          <Typography
            type="h4"
            text={
              "Total price: " +
              receiptItems
                .reduce((acc, item) => acc + item.finalPrice, 0)
                .toString()
            }
          />
        </>
      )}
    </GS.StyledFlexContainerNoBorder>
  );
};

export default ReceiptItemsSection;
