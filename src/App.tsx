import React from "react";
import * as GS from "./global-styles";
import Providers from "./providers";
import AddItemsSection from "./sections/additems.section";
import ListItemsSection from "./sections/listItems.section";
import ReceiptItemsSection from "./sections/receiptItems.section";
function App() {
  return (
    <GS.App>
      <Providers>
        <GS.StyledFlexContainer>
          <AddItemsSection />
          <ListItemsSection />
        </GS.StyledFlexContainer>
        <GS.StyledFlexContainer>
          <ReceiptItemsSection />
        </GS.StyledFlexContainer>
      </Providers>
    </GS.App>
  );
}

export default App;
