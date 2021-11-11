import React from "react";
import { ShopItem } from "../../context/shop.context";
import * as GS from "../../global-styles";
import Typography from "../typography";

interface ShopItemProps {
  item: ShopItem;
}

const ShopListItem: React.FC<ShopItemProps> = ({
  item: { name, price, imported, type, quantity },
}) => {
  return (
    <GS.StyledGridRow>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Name" />
        <Typography type="h1" text={name} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="price" />
        <Typography type="h1" text={price.toString()} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Imported?" />
        <Typography type="h1" text={imported ? "Yes" : "No"} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Type" />
        <Typography type="h1" text={type} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Quantity" />
        <Typography type="h1" text={quantity.toString()} />
      </GS.StyledFlexContainer>
    </GS.StyledGridRow>
  );
};

export default ShopListItem;
