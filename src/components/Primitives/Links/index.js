import * as mixins from "codogo-utility-functions";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'Gatsby';

export const MaybeLink = ({
  children,
  className,
  href,
  target,
  theme,
  to,
}) => {
  if (to) {
    return <Link to={to} children={children} className={className} />
  }
  
  return <a href={href} children={children} target={target} className={className} />
};

MaybeLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.any,
  theme: PropTypes.object,
  to: PropTypes.string,
};
