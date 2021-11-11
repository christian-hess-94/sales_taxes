import React from "react";
import * as GS from "./global-styles";
import Providers from "./providers";
import AddItemsSection from "./sections/additems.section";
function App() {
  return (
    <GS.App>
      <Providers>
        <AddItemsSection />
        <GS.StyledFlexContainer></GS.StyledFlexContainer>
      </Providers>
    </GS.App>
  );
}

export default App;
