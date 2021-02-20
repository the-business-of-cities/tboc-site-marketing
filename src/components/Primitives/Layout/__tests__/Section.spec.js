import { Section } from "../index";
import React from "react";
import { mount } from '../../../../utils/tests';

describe("Section", () => {
  it("renders correctly", () => {
    expect(mount(<Section />)).toMatchSnapshot();
  });
});
