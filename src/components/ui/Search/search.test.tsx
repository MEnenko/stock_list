import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../Search";

Enzyme.configure({ adapter: new Adapter() });

const KEY_CODE_ENTER = 13;

it("should run without failure with empty params", () => {
  const search = Enzyme.shallow(
    <Search value="" onChange={value => {}} onSubmit={() => {}} />
  );
});

it("should put value inside of search field", () => {
  const value = "aapl";

  const search = Enzyme.shallow(
    <Search value={value} onChange={value => {}} onSubmit={() => {}} />
  );

  expect(search.find("FormControl").props().value).toBe(value);
});

it("should call onChange collback when input is changed", () => {
  const value = "a";
  const inputLeter = "a";
  const valueAfterInput = `${value}${inputLeter}`;
  const mockOnChange = jest.fn();
  const search = Enzyme.shallow(
    <Search value={value} onChange={mockOnChange} onSubmit={() => {}} />
  );

  const input = search.find("FormControl");
  input.simulate("change", { currentTarget: { value: valueAfterInput } });

  expect(mockOnChange.mock.calls[0][0]).toBe(valueAfterInput);
  expect(mockOnChange.mock.calls.length).toBe(1);
});

it("should call onSubmit collback on Enter key", () => {
  const value = "aa";
  const mockOnSubmit = jest.fn();
  const search = Enzyme.shallow(
    <Search value={value} onChange={jest.fn()} onSubmit={mockOnSubmit} />
  );

  const input = search.find("FormControl");
  input.simulate("keyDown", {
    keyCode: KEY_CODE_ENTER,
    preventDefault: jest.fn(),
    stopPropagation: jest.fn()
  });
  expect(mockOnSubmit.mock.calls.length).toBe(1);
});
