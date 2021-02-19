import { Section, Container, Row, Column } from "../Primitives";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const BannerText = styled.h2`
  &:after {
    display: none;
  }
`;

const Banner = ({ text }) => {
  return (
    <Section>
      <Container narrow>
        <Row>
          <Column center>
            <BannerText>{text}</BannerText>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
