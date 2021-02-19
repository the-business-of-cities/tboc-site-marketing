import React from "react";
import renderer from "react-test-renderer";
import Banner from "../index";

describe("Banner", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Banner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
