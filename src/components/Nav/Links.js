import * as R from "ramda";
import * as mixins from "codogo-utility-functions";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../utils/styles";

const LinksWrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.link};
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;

  ${breakpoint("mobile", "only")} {
    background-color: ${({ theme }) => theme.colors.nav.background};
    top: ${({ theme }) => theme.dimensions.nav.height.xs};
    transform: translateY(${props => (props.open ? 0 : -110)}%);
    transition: 0.3s all ease-out;

    ${mixins.shadow(2)};
  }

  ${breakpoint("tablet", "min")} {
    display: flex;
    bottom: 0;
    height: ${({ theme }) => theme.dimensions.nav.linksHeight};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg.min}px;
  flex-direction: column;

  ${breakpoint("tablet", "min")} {
    flex-direction: row;
    padding: 0 ${({ theme }) => theme.dimensions.nav.margin.xs};
  }
`;

const LinkWrapper = styled.div`
  position: relative;

  ${breakpoint("mobile", "only")} {
    color: ${({ theme }) => theme.colors.background.white};
    border-top: 1px solid;
  }

  ${breakpoint("tablet", "min")} {
    color: ${({ theme }) => theme.colors.nav.alt};

    &:hover {
      > div {
        display: block;
      }
    }
  }
`;

const StyledLink = styled.div`
  a {
    ${breakpoint("mobile", "only")} {
      display: block;
      padding: 0.9em ${({ theme }) => theme.dimensions.nav.margin.xs};
      font-size: 0.9em;
      line-height: 1;

      &a {
        color: #eee;
      }

      &.active {
        font-weight: bold;
        background-color: ${props =>
          mixins.lightenColor(props.theme.colors.nav.background)};
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
          mixins.lightenColor(props.theme.colors.nav.background)};
      }

      &:not(.active):hover {
        background-color: ${props =>
          mixins.lightenColor(props.theme.colors.nav.background, 0.1)};
      }
    }
  }
`;

const DropdownArrow = styled.span`
  margin-left: 0.5em;
  font-size: 0.8em;

  ${breakpoint("mobile", "only")} {
    display: none;
  }
`;

const Links = props => {
  const { links, close, open, GatsbyLink } = props;

  return (
    <LinksWrapper open={open}>
      <LinksContainer>
        {links &&
          links.map(link => {
            return (
              <LinkWrapper key={link.to} onClick={close}>
                <StyledLink>
                  <GatsbyLink to={link.to} activeClassName="active">
                    {link.content}

                    {link.dropdown && <DropdownArrow>▼</DropdownArrow>}
                  </GatsbyLink>
                </StyledLink>

                {link.dropdown && (
                  <Dropdown GatsbyLink={GatsbyLink} links={link.dropdown} />
                )}
              </LinkWrapper>
            );
          })}
      </LinksContainer>
    </LinksWrapper>
  );
};

Links.propTypes = {
  close: PropTypes.func,
  gastbyLink: PropTypes.any,
  links: PropTypes.array,
  open: PropTypes.bool
};

export default Links;
