import { Image, SmartImage, SecondaryImage, Background } from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Image", () => {
  it("renders correctly", () => {
    expect(shallow(<Image />)).toMatchSnapshot();
  });
});

describe("SmartImage", () => {
  it("renders correctly", () => {
    expect(shallow(<SmartImage />)).toMatchSnapshot();
  });
});

describe("SecondaryImage", () => {
  it("renders correctly", () => {
    expect(shallow(<SecondaryImage />)).toMatchSnapshot();
  });
});

describe("Background", () => {
  it("renders correctly", () => {
    expect(shallow(<Background />)).toMatchSnapshot();
  });
});
