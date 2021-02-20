import { Boxes } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Boxes", () => {
  it("renders correctly", () => {
    expect(shallow(<Boxes />)).toMatchSnapshot();
  });
});
