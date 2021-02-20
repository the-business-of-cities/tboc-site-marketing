import Banner from "../index";
import React from "react";
import { shallow } from '../../../utils/tests';

describe("Banner", () => {
  it("renders correctly", () => {
    expect(shallow(<Banner />)).toMatchSnapshot();
  });
});
