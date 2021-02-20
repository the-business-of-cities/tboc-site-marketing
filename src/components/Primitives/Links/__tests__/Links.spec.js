import { MaybeLink } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("MaybeLink", () => {
  it("renders default correctly", () => {
    expect(shallow(<MaybeLink />)).toMatchSnapshot();
  });

  it("renders gatsby link correctly", () => {
    expect(shallow(<MaybeLink to="some-url"/>)).toMatchSnapshot();
  });

  it("renders href correctly", () => {
    expect(shallow(<MaybeLink href="some-other-url"/>)).toMatchSnapshot();
  });
});
