import * as R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from '../../utils/styles';

const Burger = (props) => (
  <Wrapper {...props}>
    <Bottom {...props}>
      <Top {...props} />

      <Middle {...props} />
    </Bottom>
  </Wrapper>
);

Burger.defaultProps = {
  padding: 10,
  layerWidth: 30,
  layerHeight: 3,
  layerSpacing: 6,
  borderRadius: 4,
  transitionDuration: 0.4,
};

const Wrapper = styled.div`
  width: ${(props) => props.layerWidth + 2 * props.padding}px;
  height: ${(props) =>
    3 * props.layerHeight + 2 * props.layerSpacing + 2 * props.padding}px;
  position: relative;
  cursor: pointer;
`;

const Bar = styled.div`
  width: ${(props) => props.layerWidth}px;
  height: ${(props) => props.layerHeight}px;
  background-color: ${({ theme }) => theme.colors.nav.background};
  border-radius: ${(props) => props.borderRadius}px;
  position: absolute;
  transition-property: transform;
  transition-duration: ${(props) => 0.15 * 2 * props.transitionDuration}s;
  transition-timing-function: ease;
`;

const Bottom = styled(Bar)`
  margin-top: ${(props) => props.layerHeight / -2}px;
  bottom: ${(props) => props.padding}px;
  left: ${(props) => props.padding}px;
  ${(props) =>
    props.open
      ? `transform: translate3d(0, ${
          (props.layerSpacing + props.layerHeight) * -1
        }px, 0) rotate(-45deg);`
      : ""}
  transition-duration: ${(props) => 0.15 * 2 * props.transitionDuration}s;
  transition-delay: ${(props) =>
    props.open
      ? 0.32 * 2 * props.transitionDuration
      : 0.15 * 2 * props.transitionDuration}s;
  transition-timing-function: ${(props) =>
    props.open
      ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
      : "cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
`;

const Middle = styled(Bar)`
  top: ${(props) =>
    props.open ? 0 : (props.layerSpacing + props.layerHeight) * -1}px;
  ${(props) => (props.open ? "transform: rotate(-90deg);" : "")} ${(
    props
  ) => `transition:
		top
		${0.12 * 2 * props.transitionDuration}s
		${(props.open ? 0.18 : 0.3) * 2 * props.transitionDuration}s
		cubic-bezier(0.33333, 0.66667, 0.66667, 1),

		transform
		${0.15 * 2 * props.transitionDuration}s
		${props.open ? `${0.42 * 2 * props.transitionDuration}s` : ""}
		${
      props.open
        ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    };
	`};
`;

const Top = styled(Bar)`
  opacity: ${(props) => (props.open ? 0 : 1)};
  bottom: ${(props) => (props.layerSpacing + props.layerHeight) * -1}px;
  top: ${(props) =>
    props.open ? 0 : (2 * props.layerSpacing + 2 * props.layerHeight) * -1}px;
  ${(props) => `transition:
		top 
		${0.3 * 2 * props.transitionDuration}s
		${!props.open ? `${0.3 * 2 * props.transitionDuration}s` : ""}
		cubic-bezier(0.33333, 0.66667, 0.66667, 1),

		opacity
		${0.1 * 2 * props.transitionDuration}s
		${props.open ? `${0.27 * 2 * props.transitionDuration}s` : ""}
		linear;
	`};
`;

export default Burger;
