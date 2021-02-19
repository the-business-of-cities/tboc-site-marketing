import {
  Page,
  Section,
  Container,
  Row,
  Column,
  SecondaryImage,
} from "../../Primitives";
import React from "react";

const ErrorPage = () => {
  return (
    <Page>
      <Section>
        <Container>
          <Row>
            <Column>
              <h1>404</h1>

              <p>Whoops, this page doesn't exist.</p>
            </Column>
          </Row>
        </Container>
      </Section>
    </Page>
  );
};

export default ErrorPage;
