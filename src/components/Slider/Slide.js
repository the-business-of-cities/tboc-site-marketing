import { MaybeLink } from "../Primitives";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

const padding = 1;
const titleFontSize = 1.1;
const titleLineHeight = 1.3;
const textFontSize = 0.9;
const textLineHeight = 1.4;
const boxHeight =
  2.5 *
  (padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);
const slideInnerHeight = 2 * (padding + titleLineHeight) + 0.4;

const SlideWrapper = styled.div`
  width: 100%;
  height: 40vh;
`;

const SlideInner = styled(MaybeLink)`
  background-color: ${({ theme }) => theme.colors.background.dark};
  bottom: 0;
  color: #fff;
  display: block;
  height: ${slideInnerHeight}em;
  left: 0;
  padding: ${padding}em;
  position: absolute;
  right: 0;
  transition-duration: 0.5s;
  background-color: ${(props) =>
    props.colorCount % 3 === 0
      ? props.theme.colors.tertiary
      : (props.colorCount + 1) % 3 === 0
      ? props.theme.colors.secondary
      : props.theme.colors.primary};

  &:hover {
    color: #eee;
    height: ${boxHeight}em;
  }

  &:visited {
    color: #fff !important;
  }
`;

const SlideTitle = styled.div`
  font-weight: bold;
  font-size: ${titleFontSize}em;
  font-family: ${({ theme }) => theme.font.heading};
  display: block;
  line-height: ${titleLineHeight};
  height: ${2 * titleLineHeight}em;
  overflow: hidden;

  ${SlideInner}:hover {
    text-decoration: underline;
  }
`;

const SlideText = styled.div`
  font-size: ${textFontSize}em;
  font-family: ${({ theme }) => theme.font.paragraph};
  padding-top: 2em;

  & p {
    margin: 0;

    &:last-child {
      line-height: ${textLineHeight};
      height: ${2 * textLineHeight}em;
      position: relative;
      overflow: hidden;

      &:after {
        content: "\u25B6";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: ${textLineHeight}em;
        text-align: right;
        background: linear-gradient(
          to right,
          transparent,
          ${(props) =>
              props.colorCount % 3 === 0
                ? props.theme.colors.tertiary
                : (props.colorCount + 1) % 3 === 0
                ? props.theme.colors.secondary
                : props.theme.colors.primary}
            50%
        );
      }
    }
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  padding-bottom: ${slideInnerHeight};
`;

// --------------------------------------------------

const Slide = ({ colorCount, slide, GatsbyLink }) => {
  const { title, image, description, externalUrl, __typename } = slide;

  let slug = __typename.toLowerCase().split("contentful")[1];
  slug = slug.endsWith("s") ? slug : `${slug}s`;

  const internalUrl = `/${slug}/${slugify(slide.title, { lower: true })}`;

  return (
    <SlideWrapper>
      {image && (
        <MaybeLink GatsbyLink={GatsbyLink} href={externalUrl} to={internalUrl}>
          <SlideImage
            src={`https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:${image.file.url}`}
            alt={image.description}
          />
        </MaybeLink>
      )}

      <SlideInner
        GatsbyLink={GatsbyLink}
        href={externalUrl}
        to={internalUrl}
        colorCount={colorCount}
      >
        <SlideTitle>{title}</SlideTitle>

        {description && (
          <SlideText
            colorCount={colorCount}
            dangerouslySetInnerHTML={{
              __html: marked(description),
            }}
          />
        )}
      </SlideInner>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  GatsbyLink: PropTypes.any,
  colorCount: PropTypes.any,
  slide: PropTypes.object,
};

export default Slide;
