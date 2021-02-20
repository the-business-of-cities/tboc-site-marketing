import * as mixins from "../../utils/old";

import EntryWrapper from "../GenericGrid/EntryWrapper";
import marked from "marked";
import PropTypes from "prop-types";
import * as R from "ramda";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import Table from "../Table";

const padding = 1;
const titleFontSize = 1.1;
const titleLineHeight = 1.3;
const textFontSize = 0.9;
const textLineHeight = 1.4;
const boxHeight =
  2.5 *
  (padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);

const gridItemWidths = {
  xs: 100,
  sm: 50,
  md: 33.33333,
  lg: 33.33333
};
const gridColumns = R.map(n => `${n}%`)(gridItemWidths);

const EntryContainer = styled.div`
  display: block;
  margin-bottom: 2em;
  transition: 1s;

  a {
    height: 100%;
    transition: 1s;
  }

  &.table {
    .entry {
      height: 100px;
      width: 100%;
    }
    .image {
      height: 100%;
      width: 104px;
      padding: 0;
    }
    .inner {
      position: static;
      height: 100%;
      width: 100%;
      background: ${({ theme }) => theme.colors.background.white};
      color: #333;
      padding: 0.4em 1em;

      p {
        color: rgba(0, 0, 0, 0.7);
        &:last-child:after {
          content: "Read more \u25B6";
          background: linear-gradient(
            to right,
            transparent,
            ${({ theme }) => theme.colors.background.white} 50%
          );
        }
      }
    }
    .text {
      padding: 0;
    }
  }
`;

const Entry = styled.div`
  box-sizing: border-box;
  float: left;
  width: 100%;
  height: 300px;
  padding: 0 1em;
  transition: 1s;
  margin-bottom: 2em;

  ${mixins.bpEach("width", gridColumns)};
`;

const EntryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-bottom: ${2 * titleLineHeight}em;
  transition: 1s;
`;

const EntryInner = styled.div`
  background-color: ${({ theme }) => theme.colors.background.dark};
  bottom: 0;
  color: ${({ theme }) => theme.colors.background.white};
  display: block;
  height: 5em;
  left: 0;
  right: 0;
  padding: ${padding}em;
  position: absolute;
  transition: height 0.5s;

  &:hover {
    color: #eee;
    height: ${boxHeight}em;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.background.white} !important;
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

const GridTableEntries = ({ entries, slug, table, GatsbyLink }) => {
  return (
    <EntryContainer className={table && "table"}>
      {entries.map(entry => (
        <Entry
          className="entry"
          key={entry.slug}
          key={`entry-${slugify(entry.title.toLowerCase())}`}
        >
          <EntryWrapper
            GatsbyLink={GatsbyLink}
            className="wrapper"
            internalUrl={`/${slug}/${slugify(entry.title, { lower: true })}`}
            externalUrl={entry.externalUrl}
          >
            {entry.image && (
              <EntryImage
                className="image"
                src={`https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:${
                  entry.image.file.url
                }`}
                alt={entry.image.description}
              />
            )}

            <EntryInner className="inner">
              {entry.title && <EntryTitle>{entry.title}</EntryTitle>}

              {entry.description && (
                <EntryText
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: marked(entry.description)
                  }}
                />
              )}
            </EntryInner>
          </EntryWrapper>
        </Entry>
      ))}
    </EntryContainer>
  );
};

export default GridTableEntries;
