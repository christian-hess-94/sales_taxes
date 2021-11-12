import React from "react";
import Button from "../components/button";
import ShopListItem from "../components/shopListItem";
import useReceipt from "../context/receipt.context";
import useShop from "../context/shop.context";
import * as GS from "../global-styles";
interface Props {}

const ListItemsSection: React.FC<Props> = (props) => {
  const { shopItems } = useShop();
  const { calculateReceipt, setReceiptItems } = useReceipt();
  return (
    <GS.StyledFlexContainer>
      <Button
        label="Calculate receipt"
        disabled={!shopItems.length}
        onClick={() => {
          setReceiptItems([]);
          calculateReceipt();
        }}
      />
      {shopItems.map((item, index) => (
        <ShopListItem key={index} item={item} />
      ))}
    </GS.StyledFlexContainer>
  );
};

export default ListItemsSection;
