import {
  Point,
  Section,
  Container,
  Row,
  Column,
  PartnerCategory,
} from "../../../components";

import GenericPage from "../GenericPage";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

class ContentPage extends React.Component {
  render() {
    const {
      children,
      content,
      description,
      image,
      introduction,
      partners,
      secondaryImage,
      slider,
      subtitle,
      title,
    } = this.props;

    return (
      <GenericPage
        description={description}
        image={image}
        introduction={introduction}
        secondaryImage={secondaryImage}
        slider={slider}
        subtitle={subtitle}
        title={title}
      >
        {content &&
          content.map((section, i) => {
            const link =
              (section.ctaUrl && section.ctaUrl) ||
              (section.ctaTarget && section.ctaTarget.title);
            const cta = {
              link: `/${link && slugify(link, { lower: true })}`,
              text: section.ctaText,
            };

            return (
              <Point
                bgImage={
                  section.backgroundImage &&
                  (section.backgroundImage.file.url || section.backgroundImage)
                }
                cta={cta}
                image={section.image}
                key={i}
                reverse={i % 2 === 0}
                text={section.content && section.content.content}
                title={section.title}
                videoUrl={section.videoUrl}
              />
            );
          })}

        {children}

        {partners && (
          <Section>
            <Container>
              <Row restrict>
                <Column>
                  {partners.map(
                    (category) =>
                      category && (
                        <PartnerCategory
                          category={category}
                          key={category.title}
                        />
                      )
                  )}
                </Column>
              </Row>
            </Container>
          </Section>
        )}
      </GenericPage>
    );
  }
}

ContentPage.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  description: PropTypes.any,
  image: PropTypes.string,
  introduction: PropTypes.any,
  partners: PropTypes.array,
  secondaryImage: PropTypes.any,
  slider: PropTypes.element,
  subtitle: PropTypes.any,
  title: PropTypes.string,
};

export default ContentPage;
