import * as mixins from "../../../utils/old";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

export const TilesWrapper = styled.div`
  ${mixins.clearfix};
`;

export const TileWrapper = styled.div`
  width: ${(props) => (props.small ? "50%" : "100%")};
  width: 50%;
  float: left;

  ${breakpoint("mobile", "only")} {
    width: 100%;
  }
`;

export const TileInner = styled.div`
  position: relative;
  margin-bottom: 1em;

  ${breakpoint("tablet", "min")} {
    padding: 0;
  }
`;

export const TileContent = styled.div`
  background: ${({ theme }) => theme.colors.background.medium};
  margin-top: -2em;
  left: 0;
  margin-right: 1.5em;
  margin-bottom: 1em;
  padding: 0.5em 1em;

  p {
    font-size: 0.95em;
  }
`;

export const TileImage = styled.div`
  margin-left: 1.5em;
`;

export const TileTitle = styled.h3`
  margin-bottom: 0;

  :hover,
  :active {
    opacity: 0.7;
  }

  :after {
    content: "";
    display: block;
    width: 5em;
    border-bottom: 0.4em solid rgba(0, 0, 0, 0.15);
  }
`;
