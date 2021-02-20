import { Column } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Column", () => {
  it("renders correctly", () => {
    expect(shallow(<Column />)).toMatchSnapshot();
  });
});
