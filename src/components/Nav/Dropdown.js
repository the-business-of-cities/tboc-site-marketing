import * as R from "ramda";
import * as mixins from "../../utils/old";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../utils/styles";

const LinkWrapper = styled.div`
  position: relative;

  ${breakpoint("mobile", "only")} {
    border-top: 1px solid;

    &,
    a {
      color: ${mixins.darkenColor("#fff", 0.2)};
    }
  }

  ${breakpoint("tablet", "min")} {
    &:hover {
      > div {
        display: block;
      }
    }
  }
`;

const StyledLink = styled.div`
  a {
    color: ${({ theme }) => theme.colors.link};

    ${breakpoint("mobile", "only")} {
      display: block;
      padding: 0.9em ${({ theme }) => theme.dimensions.nav.margin.xs};
      font-size: 0.9em;
      line-height: 1;

      &.active {
        font-weight: bold;
        background-color: ${props =>
          mixins.lightenColor(props.theme.colors.nav.background, 0.8)};
      }
    }

    ${breakpoint("tablet", "min")} {
      display: inline-block;
      height: ${({ theme }) => theme.dimensions.nav.linksHeight};
      line-height: ${({ theme }) => theme.dimensions.nav.linksHeight};
      padding: 0 0.75em;
      font-size: 0.8em;
      text-transform: uppercase;

      &.active {
        background-color: ${props =>
          mixins.lightenColor(props.theme.colors.nav.background, 0.8)};
      }

      &:not(.active):hover {
        background-color: ${props =>
          mixins.lightenColor(props.theme.colors.nav.background, 0.8)};
      }
    }
  }
`;

const StyledDropdownLink = styled(StyledLink)`
  a {
    ${breakpoint("tablet", "min")} {
      background: ${({ theme }) => theme.colors.background.light};

      &,
      a {
        color: ${({ theme }) => theme.colors.link} !important;

        &:hover {
          color: ${({ theme }) => theme.colors.linkHover} !important;
          color: black !important;
        }
      }
    }

    ${breakpoint("mobile", "only")} {
      padding-left: 2em;
    }
  }
`;

const DropdownLinks = styled.div`
  ${breakpoint("mobile", "only")} {
    font-size: 0.9em;
    opacity: 0.67;
  }

  ${breakpoint("tablet", "min")} {
    display: none;
    background: ${props =>
      mixins.lightenColor(props.theme.colors.nav.background)};
    position: absolute;
    top: ${({ theme }) => theme.dimensions.nav.linksHeight};
    left: 0;
    width: 22em;

    a {
      display: block;
      border: 0;
    }
  }
`;

const Dropdown = ({ links, GatsbyLink }) => (
  <DropdownLinks>
    {links.map(({ content, to }) => (
      <LinkWrapper key={to}>
        <StyledDropdownLink>
          <GatsbyLink to={to} activeClassName="active">
            {content}
          </GatsbyLink>
        </StyledDropdownLink>
      </LinkWrapper>
    ))}
  </DropdownLinks>
);

Dropdown.propTypes = {
  links: PropTypes.array
};

export default Dropdown;
