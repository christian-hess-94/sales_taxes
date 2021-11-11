import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useShop from "../context/shop.context";

const AddItemsSection = () => {
  const { items, addItem } = useShop();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const [type, setType] = useState("Other");
  const [imported, setImported] = useState(false);
  return (
    <GS.StyledContainer>
      <GS.StyledGridRow>
        <TextInput label="Name" value={name} changeValue={setName} />
        <TextInput
          type="number"
          label="Price"
          value={price}
          changeValue={setPrice}
        />
      </GS.StyledGridRow>
      <GS.StyledGridRow>
        <TextInput
          type="checkbox"
          label="Price"
          value={price}
          changeChecked={setImported}
        />
        <select
          style={{ minHeight: "3em", margin: "auto" }}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Other">Other</option>
          <option value="Book">Book</option>
          <option value="Food">Food</option>
          <option value="Medical Products">Medical Products</option>
        </select>
      </GS.StyledGridRow>
      <Button
        onClick={() =>
          addItem({ name, price: parseFloat(price), imported, type })
        }
        label="Confirm Item"
      />
    </GS.StyledContainer>
  );
};

export default AddItemsSection;
