import LogoGrid from "../LogoGrid";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

// --------------------------------------------------

const CategoryWrapper = styled.div`
  margin-bottom: 1em;
  flex: 1;
  width: 100%;
`;

// --------------------------------------------------

const PartnerCategory = ({ category }) => {
  return (
    category && (
      <CategoryWrapper>
        <h2>{category.title}</h2>

        {category.partner && (
          <LogoGrid
            logos={category.partner.map((partner) => ({
              image: partner.image,
              link: `/partners/${slugify(partner.name, { lower: true })}`,
            }))}
          />
        )}
      </CategoryWrapper>
    )
  );
};

PartnerCategory.propTypes = {
  category: PropTypes.any.isRequired,
};

export default PartnerCategory;
