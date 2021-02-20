import GenericGrid from "../GenericGrid";
import PropTypes from "prop-types";
import React from "react";

const Jobs = ({ jobs }) => (
  <GenericGrid  entries={jobs} slug="jobs" />
);

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default Jobs;
