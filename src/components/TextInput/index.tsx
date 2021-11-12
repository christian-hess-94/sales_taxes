import React from "react";
import * as S from "./styles";
interface TextInputProps {
  label?: string;
  value?: string;
  checked?: boolean;
  changeValue?: (s: string) => void;
  changeChecked?: (c: boolean) => void;
  type?: React.HTMLInputTypeAttribute;
}

const TextInput = ({
  label,
  value,
  changeValue,
  type,
  changeChecked,
  checked,
}: TextInputProps) => {
  return (
    <S.TextInputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.StyledInput
        type={type}
        value={value}
        checked={checked}
        onChange={(e) => {
          if (!!changeChecked) {
            if (type === "checkbox") {
              changeChecked(e.target.checked);
            }
          }
          if (!!changeValue) {
            if (type !== "checkbox") {
              changeValue(e.target.value);
            }
          }
        }}
      />
    </S.TextInputContainer>
  );
};

export default TextInput;
