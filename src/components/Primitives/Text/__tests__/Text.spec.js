import { Line, LineCell, Paragraph} from "../index";
import React from "react";
import { shallow } from 'enzyme';

describe("Line", () => {
  it("renders correctly", () => {
    expect(shallow(<Line />)).toMatchSnapshot();
  });
});

describe("LineCell", () => {
  it("renders correctly", () => {
    expect(shallow(<LineCell />)).toMatchSnapshot();
  });
});

describe("Paragraph", () => {
  it("renders empty correctly", () => {
    expect(shallow(<Paragraph />)).toMatchSnapshot();
  });

  it("renders a sentance correctly", () => {
    expect(shallow(<Paragraph>Something something something</Paragraph>)).toMatchSnapshot();
  });

  it("renders paragraphs correctly", () => {
    expect(shallow(<Paragraph>
      Something something something.

      Something something something.

      Something something something.

      Something something something.
      </Paragraph>)).toMatchSnapshot();
  });
});
