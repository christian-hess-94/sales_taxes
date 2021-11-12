import React from "react";
import { ReceiptItem } from "../../context/receipt.context";
import * as GS from "../../global-styles";
import Typography from "../typography";

interface ReceiptItemProps {
  item: ReceiptItem;
}

const ReceiptListItem: React.FC<ReceiptItemProps> = ({
  item: { name, quantity, finalPrice, taxes, taxesPercentage },
}) => {
  return (
    <GS.StyledGridRow>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Quantity" />
        <Typography type="h1" text={quantity.toString()} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Name" />
        <Typography type="h1" text={name} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text={`Tax added (${taxesPercentage}%)`} />
        <Typography type="h1" text={taxes.toString()} />
      </GS.StyledFlexContainer>
      <GS.StyledFlexContainer>
        <Typography type="h6" text="Final price" />
        <Typography type="h1" text={finalPrice.toString()} />
      </GS.StyledFlexContainer>
    </GS.StyledGridRow>
  );
};

export default ReceiptListItem;
