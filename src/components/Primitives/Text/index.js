import * as mixins from "codogo-utility-functions";

import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import * as R from "ramda";

export const Line = styled.div`
  height: 1.5px;
  width: 100%;
  background-color: ${R.path(["theme", "text"])};
`;

const LineCellWrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
`;

export const LineCell = () => (
  <LineCellWrapper>
    <Line />
  </LineCellWrapper>
);

export const Paragraph = (props) => (
  <div>
    {props.children.split("\n").map((p, i) => (
      <p key={`${p.slice(0, 5)}/${i}`}>{p}</p>
    ))}
  </div>
);

const textBoxMargins = mixins.objectMap(16, (key, val) => `-${val} auto`);

export const TextBox = styled.div`
  ${mixins.bpEach("margin", textBoxMargins)}
  ${(p) => (p.bold ? "font-weight: bold;" : "")} 
	${(p) => (p.align ? `text-align: ${p.align};` : "")};
`;

const GridCell = styled.div`
  font-weight: bold;
`;

export const TextCell = (props) => (
  <GridCell {...props}>
    <TextBox {...R.pick(["bold", "align"])(props)}>{props.children}</TextBox>
  </GridCell>
);
