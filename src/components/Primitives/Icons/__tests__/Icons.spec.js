import { Icon } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Icon", () => {
  it("renders correctly", () => {
    expect(shallow(<Icon icon='envelope'/>)).toMatchSnapshot();
  });
});
