import { Section, Column, Row, Container, Image } from "../Primitives";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import marked from "marked";

const MemberImage = styled(Image)`
  max-width: 250px;
  max-height: 250px;
  flex-basis: 50%;
  display: flex;
  flex: 1;
  object-position: top left;
  align-self: flex-end;
`;

const CLOUDINARY_URL =
  "https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_600,h_800,c_fill,g_face,f_auto/https:";

const Testimonial = ({ image, quote, quotee }) => {
  return (
    <Section>
      <Container narrow>
        <Row>
          <Column>
            {quote && (
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(quote.quote)
                }}
              />
            )}

            {quotee}
          </Column>

          <Column>
            {image && (
              <MemberImage src={`${CLOUDINARY_URL}${image.file.url}`} />
            )}
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

Testimonial.propTypes = {
  image: PropTypes.object,
  quote: PropTypes.object,
  quotee: PropTypes.any
};

export default Testimonial;
