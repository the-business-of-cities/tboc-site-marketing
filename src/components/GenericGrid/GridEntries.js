import * as R from "ramda";
import * as mixins from "../../utils/old";
import EntryWrapper from "./EntryWrapper";
import PropTypes from "prop-types";
import React from "react";
import Table from "../Table";
import marked from "marked";
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

const entryColumns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3
};

const gridColumns = R.map(n => `repeat(${n}, 1fr)`)(entryColumns);

const EntryContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  margin-bottom: 2em;
  width: 100%;

  ${mixins.bpEach("grid-template-columns", gridColumns)};
`;

const EntryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-bottom: ${2 * titleLineHeight}em;
`;

const EntryInner = styled.div`
  background-color: ${({ theme }) => theme.colors.background.dark};
  bottom: 0;
  color: #fff;
  display: block;
  height: 5em;
  left: 0;
  padding: ${padding}em;
  position: absolute;
  right: 0;
  transition-duration: 0.5s;

  &:hover {
    color: #eee;
    height: ${boxHeight}em;
  }

  &:visited {
    color: #fff !important;
  }
`;

const EntryTitle = styled.div`
  font-weight: bold;
  font-size: ${titleFontSize}em;
  font-family: ${({ theme }) => theme.font.heading};
  display: block;
  line-height: ${titleLineHeight};
  height: ${2 * titleLineHeight}em;
  overflow: hidden;
`;

const EntryText = styled.div`
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
          ${({ theme }) => theme.colors.background.dark} 50%
        );
      }
    }
  }
`;

const GridEntries = ({ entries, slug, GatsbyLink }) => {
  return (
    <EntryContainer>
      {entries.map(entry => (
        <EntryWrapper
          GatsbyLink={GatsbyLink}
          key={`entry-${slugify(entry.title.toLowerCase())}`}
          internalUrl={`/${slug}/${slugify(entry.title, { lower: true })}`}
          externalUrl={entry.externalUrl}
        >
          {entry.image && (
            <EntryImage
              src={`https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:${
                entry.image.file.url
              }`}
              alt={entry.image.description}
            />
          )}

          <EntryInner>
            {entry.title && <EntryTitle>{entry.title}</EntryTitle>}

            {entry.description && (
              <EntryText
                dangerouslySetInnerHTML={{
                  __html: marked(entry.description)
                }}
              />
            )}
          </EntryInner>
        </EntryWrapper>
      ))}
    </EntryContainer>
  );
};

export default GridEntries;
