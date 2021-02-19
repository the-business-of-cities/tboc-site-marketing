import GridTableList from "../GridTableList";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const Publications = ({ publications, sorting, GatsbyLink }) => (
  <GridTableList
    GatsbyLink={GatsbyLink}
    sorting={sorting}
    entries={publications}
    slug="publications"
  />
);

Publications.propTypes = {
  publications: PropTypes.array.isRequired
};

export default Publications;
