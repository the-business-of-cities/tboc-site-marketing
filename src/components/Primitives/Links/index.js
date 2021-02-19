import * as mixins from "codogo-utility-functions";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const MaybeLink = ({
  children,
  className,
  href,
  target,
  theme,
  to,
  GatsbyLink,
}) => {
  return to && GatsbyLink ? (
    <GatsbyLink to={to} children={children} className={className} />
  ) : (
    <a href={href} children={children} target={target} className={className} />
  );
};

MaybeLink.propTypes = {
  GatsbyLink: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.any,
  href: PropTypes.any,
  target: PropTypes.any,
  theme: PropTypes.object,
  to: PropTypes.any,
};

export { MaybeLink };
