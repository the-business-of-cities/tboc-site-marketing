import * as mixins from "codogo-utility-functions";

import * as R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const gridColumns = logosPerRow => {
  return R.map(n => `repeat(${n}, 1fr)`)(logosPerRow);
};

const LogoGridWrapper = styled.div`
  display: grid;
  ${props =>
    mixins.bpEach(
      "grid-template-columns",
      gridColumns(props.logosPerRow)
    )} grid-gap: 2em;
  margin-bottom: 2em;
`;

const LogoWrapper = styled.a`
  display: block;
  width: 100%;
`;

const LogoInner = styled.div`
  width: 100%;
  padding-top: 88%;
  position: relative;
`;

const LogoImage = styled.div`
  ${mixins.contained()}
  background-image: url(${R.prop("src")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const LogoGrid = ({ logos, logosPerRow }) => {
  return (
    logos && (
      <LogoGridWrapper logosPerRow={logosPerRow}>
        {logos.map(({ image, link }, i) => {
          return (
            image && (
              <LogoWrapper key={i} href={link}>
                <LogoInner>
                  <LogoImage
                    src={`https://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${image &&
                      image.file.url}`}
                  />
                </LogoInner>
              </LogoWrapper>
            )
          );
        })}
      </LogoGridWrapper>
    )
  );
};

LogoGrid.defaultProps = {
  logosPerRow: {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 4
  }
};

LogoGrid.propTypes = {
  logos: PropTypes.array.isRequired,
  logosPerRow: PropTypes.object.isRequired
};

export default LogoGrid;
