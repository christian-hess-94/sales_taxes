import * as GS from "../global-styles";
import React, { useState } from "react";
import Button from "../components/button";
import TextInput from "../components/TextInput";
import useShop from "../context/shop.context";

const AddItemsSection = () => {
  const { shopItems: items, addItem } = useShop();
  const [name, setName] = useState("Book");
  const [price, setPrice] = useState("12.49");
  const [type, setType] = useState("Book");
  const [imported, setImported] = useState(false);
  const [quantity, setQuantity] = useState("1");
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
        <TextInput
          type="number"
          label="Quantity"
          value={quantity}
          changeValue={setQuantity}
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
          <option disabled>Choose Type</option>
          <option value="Other">Other</option>
          <option value="Book" selected>
            Book
          </option>
          <option value="Food">Food</option>
          <option value="Medical Products">Medical Products</option>
        </select>
      </GS.StyledGridRow>
      <Button
        onClick={() =>
          addItem({
            name,
            price: parseFloat(price),
            imported,
            type,
            quantity: parseInt(quantity),
          })
        }
        label="Confirm Item"
      />
    </GS.StyledContainer>
  );
};

export default AddItemsSection;
