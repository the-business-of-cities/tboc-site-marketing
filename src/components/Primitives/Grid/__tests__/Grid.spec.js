import { Grid } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Grid", () => {
  it("renders correctly", () => {
    expect(shallow(<Grid />)).toMatchSnapshot();
  });
});
