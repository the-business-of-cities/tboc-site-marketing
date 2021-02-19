import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Links";
import { breakpoint } from '../../../utils/styles';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  ${(props) => props.restrict && "max-width: 1000px"};

  ${(props) => props.narrow && "max-width: 750px"};

  ${breakpoint("mobile", "max")} {
    flex-basis: 100%;
  } ;
`;

export { Container };
