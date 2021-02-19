import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../utils/styles";

const LogoWrapper = styled.div`
  background: white;
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: center;

  ${breakpoint("mobile", "min")} {
    bottom: ${({ theme }) => theme.dimensions.nav.linksHeight};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg.min}px;
  padding: 0 ${({ theme }) => theme.dimensions.nav.margin.xs};
`;

const IndexLink = props => <div to="/" {...props} />;

const LogoLink = styled(IndexLink)`
  &,
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }
  a {
    height: 100%;
  }
`;

const LogoText = styled.div`
  font-size: 2em;
  font-family: ${({ theme }) => theme.font.title.family};
  text-transform: uppercase;
`;

const LogoImage = styled.img`
  height: 80%;
  width: auto;
  object-fit: contain;
  object-position: left;
`;

const Logo = ({ logo, GatsbyLink }) => (
  <LogoWrapper>
    <LogoContainer>
      <LogoLink>
        <GatsbyLink to="/">
          {logo.url ? (
            <LogoImage src={logo.url} />
          ) : (
            <LogoText>{logo.text}</LogoText>
          )}
        </GatsbyLink>
      </LogoLink>
    </LogoContainer>
  </LogoWrapper>
);

Logo.propTypes = {
  logo: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string
  })
};

export default Logo;
