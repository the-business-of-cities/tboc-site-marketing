import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { MaybeLink } from "../Links";
import { Icon } from "../Icons";
import { breakpoint } from '../../../utils/styles';

export const ButtonWrapper = styled.div`
  margin-top: 0.5em;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  line-height: 1;
  padding: 1em;
  transition: 0.1s linear background;

  ${(props) => props.margin && "margin: 0.3em;"};

  &:hover,
  &:visited,
  &:active {
    color: ${(props) => props.color};
  }

  ${({ outline, color, hoverColor }) =>
    outline
      ? css`
          color: ${color};
          border: 1.5px solid ${color};
          background: transparent;

          ${breakpoint("mobile", "only")} {
            border-width: 1px;
          }

          &:hover,
          &:visited,
          &:active {
            color: ${color};
          }

          &:hover {
            opacity: 0.7;
          }
        `
      : `
				color: white;
				background: ${color};

				&:hover,
				&:visited,
				&:active {
					color: white;
				}

				&:hover {
					background: ${hoverColor};
				}
			`};
`;

const Button = ({ children, href, target, text, to, ...props }) => (
  <MaybeLink
    to={to}
    href={href}
    target={target}
    {...props}
  >
    <ButtonWrapper {...props}>{text || children}</ButtonWrapper>
  </MaybeLink>
);

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.any,
  icon: PropTypes.any,
  target: PropTypes.any,
  text: PropTypes.any,
  to: PropTypes.any,
};

const IconButton = ({
  children,
  href,
  icon,
  target,
  text,
  to,
  ...props
}) => (
  <MaybeLink
    
    to={to}
    href={href}
    target={target}
    {...props}
  >
    <ButtonWrapper {...props}>
      {icon ? <Icon type={icon} size="1.2em" marginRight="0.4em" /> : null}

      <span>{text || children}</span>
    </ButtonWrapper>
  </MaybeLink>
);

IconButton.propTypes = {
  GatsbyLink: PropTypes.any,
  children: PropTypes.any,
  href: PropTypes.any,
  icon: PropTypes.any,
  target: PropTypes.any,
  text: PropTypes.any,
  to: PropTypes.any,
};

export { Button, IconButton };
