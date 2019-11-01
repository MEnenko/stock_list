import React from "react";
import { InputGroup, FormControl, FormControlProps } from "react-bootstrap";

export const DEFAULT_PLACEHOLDER = "Search for stock..";
export const KEY_CODE_ENTER = 13;
export interface IProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value: string;
  placeholder?: string;
}

const Search: React.FC<IProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder
}) => {
  const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === KEY_CODE_ENTER) {
      event.preventDefault();
      event.stopPropagation();

      onSubmit();
    }
  };
  const handleChange = (
    event: React.FormEvent<FormControl & FormControlProps>
  ) => onChange(event.currentTarget.value as string);

  const searchPlaceholder = placeholder || DEFAULT_PLACEHOLDER;

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder={searchPlaceholder}
        onKeyDown={handleKeyPressed}
        onChange={handleChange}
        value={value}
      />
      <InputGroup.Append>
        <InputGroup.Text onClick={onSubmit}>⚲</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
