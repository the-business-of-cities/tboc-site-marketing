import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { MaybeLink } from "../Primitives";

const EntryWrapperLink = styled(MaybeLink)`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const EntryWrapper = ({ children, externalUrl, internalUrl, GatsbyLink }) => {
  if (externalUrl) {
    return <EntryWrapperLink href={externalUrl}>{children}</EntryWrapperLink>;
  }

  return (
    <EntryWrapperLink GatsbyLink={GatsbyLink} to={internalUrl}>
      {children}
    </EntryWrapperLink>
  );
};

EntryWrapper.propTypes = {
  GatsbyLink: PropTypes.any,
  children: PropTypes.array,
  externalUrl: PropTypes.string,
  internalUrl: PropTypes.string
};

export default EntryWrapper;
