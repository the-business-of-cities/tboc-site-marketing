import { Page } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Page", () => {
  it("renders correctly", () => {
    expect(shallow(<Page />)).toMatchSnapshot();
  });
});
