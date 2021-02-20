import { Row } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Row", () => {
  it("renders correctly", () => {
    expect(shallow(<Row />)).toMatchSnapshot();
  });
});
