import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import * as R from "ramda";

const ArrowWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  color: ${R.path(["theme", "nav"])};
  font-size: 1.5em;
  margin: 0 0.5em;
  cursor: pointer;

  ${(props) => (props.next ? "right: 0;" : "left: 0;")};
`;

const Arrow = ({ next, onClick }) => (
  <ArrowWrapper next={next} onClick={onClick}>
    <span className="fa-stack">
      <i className="fa fa-circle fa-inverse fa-stack-2x" />

      <i
        className={`fa fa-chevron-circle-${
          next ? "right" : "left"
        } fa-stack-2x`}
      />
    </span>
  </ArrowWrapper>
);

Arrow.propTypes = {
  next: PropTypes.any,
  onClick: PropTypes.any,
};

export default Arrow;
