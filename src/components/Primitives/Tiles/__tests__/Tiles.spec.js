import { TilesWrapper } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("TilesWrapper", () => {
  it("renders correctly", () => {
    expect(shallow(<TilesWrapper />)).toMatchSnapshot();
  });
});
