import { SecondaryImage, Section, Container, Row, Column } from "../../Primitives";
import Head from "../../../components/Head";
import BlankPage from "../BlankPage";
import { marked } from "marked";
import PropTypes from "prop-types";
import React from "react";
import { withTheme } from "styled-components";

class GenericPage extends React.Component {
  render() {
    const {
      children,
      description,
      image,
      introduction,
      secondaryImage,
      slider,
      subtitle,
      title,
      theme,
    } = this.props;

    return (
      <BlankPage slider={slider} image={image}>
        <Head page={this.props} site={theme.site} />

        {title && (
          <Section image={image}>
            <Container narrow>
              <Row>
                <Column>
                  {title && <h1>{title}</h1>}

                  {subtitle && <p>{subtitle}</p>}
                </Column>
              </Row>
            </Container>
          </Section>
        )}

        {secondaryImage && (
          <Section>
            <Container>
              <Row>
                <Column>
                  <SecondaryImage
                    alt={secondaryImage.description}
                    src={secondaryImage.file.url}
                  />
                </Column>
              </Row>
            </Container>
          </Section>
        )}

        {description && (
          <Section>
            <Container narrow>
              <Row>
                <Column>
                  <em>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(description),
                      }}
                    />
                  </em>
                </Column>
              </Row>
            </Container>
          </Section>
        )}

        {introduction && (
          <Section>
            <Container narrow>
              <Row>
                <Column>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(introduction),
                    }}
                  />
                </Column>
              </Row>
            </Container>
          </Section>
        )}

        {children}
      </BlankPage>
    );
  }
}

GenericPage.propTypes = {
  children: PropTypes.any,
  description: PropTypes.any,
  image: PropTypes.string,
  introduction: PropTypes.any,
  secondaryImage: PropTypes.object,
  slider: PropTypes.element,
  subtitle: PropTypes.any,
  theme: PropTypes.any,
  title: PropTypes.any,
};

export default withTheme(GenericPage);
