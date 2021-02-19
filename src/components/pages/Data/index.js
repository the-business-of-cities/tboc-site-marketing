import React from "react";
import styled from "styled-components";
import { Container } from "../../Primitives";

const Wrapper = styled(Container)`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 11px;
  font-family: monospace;
`;

export default (data) => () => <Wrapper>{console.log(data)}</Wrapper>;
