import GenericGrid from "../GenericGrid";
import PropTypes from "prop-types";
import React from "react";

const News = ({ news, sorting, GatsbyLink }) => (
  <GenericGrid
    sorting={sorting}
    entries={news}
    slug="news"
  />
);

News.propTypes = {
  news: PropTypes.array.isRequired
};

export default News;
