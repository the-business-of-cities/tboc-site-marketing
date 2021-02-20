import {Button, IconButton} from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Button", () => {
  it("renders correctly", () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });
});

describe("IconButton", () => {
  it("renders correctly", () => {
    expect(shallow(<IconButton />)).toMatchSnapshot();
  });
});
