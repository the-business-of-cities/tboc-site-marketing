import * as mixins from "codogo-utility-functions";
import Burger from "./Burger";
import Links from "./Links";
import Logo from "./Logo";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from '../../utils/styles';
import { compose, withState, withHandlers } from "recompose";

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav.background};
  color: white;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  position: relative;
  ${(props) => mixins.bpEither("height", props.theme.dimensions.nav.height)}

  ${breakpoint("tiny", "min")} {
    ${mixins.shadow(0)}
  }
`;

const MobileStuff = styled.div`
  ${breakpoint("mobile", "min")} {
    display: none;
  }

  ${mixins.contained()};
`;

const Overlay = styled.div`
  ${mixins.contained()};
  ${({ open }) => (open || true ? mixins.shadow(1) : "")};
  transition: 0.3s all ease-out;
  background-color: ${({ theme }) => theme.colors.background.medium};
`;

const BurgerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const enhance = compose(
  withState("open", "setOpen", false),
  withHandlers({
    openMenu: ({ setOpen }) => () => setOpen(true),
    closeMenu: ({ setOpen }) => () => setOpen(false),
    toggleMenu: ({ setOpen, open }) => () => setOpen(!open),
  })
);

const Nav = (props) => {
  const { theme, links, logo, open, closeMenu, toggleMenu, GatsbyLink } = props;

  return (
    <NavWrapper>
      <Links
        GatsbyLink={GatsbyLink}
        close={closeMenu}
        open={open}
        links={links}
      />

      <MobileStuff>
        <Overlay open={open} />

        <BurgerWrapper onClick={toggleMenu}>
          <Burger
            open={open}
            padding={mixins.num(theme.dimensions.nav.margin.xs)}
            color={theme.colors.nav.background}
          />
        </BurgerWrapper>
      </MobileStuff>

      <Logo GatsbyLink={GatsbyLink} logo={logo} />
    </NavWrapper>
  );
};

Nav.propTypes = {
  closeMenu: PropTypes.func,
  links: PropTypes.array,
  logo: PropTypes.object,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default enhance(Nav);
