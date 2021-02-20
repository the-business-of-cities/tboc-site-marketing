import { Container } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Container", () => {
  it("renders correctly", () => {
    expect(shallow(<Container />)).toMatchSnapshot();
  });
});
