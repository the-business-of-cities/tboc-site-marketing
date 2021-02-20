import React from "react";
import styled from "styled-components";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
  linkedin: faLinkedin,
  facebook: faFacebook,
  twitter: faTwitter,
  youtube: faYoutube,
  link: faLink,
  envelope: faEnvelope,
};

const AwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0.5em;
`;

const Icon = ({icon}) => {
  return iconMap[icon] && <AwesomeIcon icon={iconMap[icon]} />;
};

export { Icon };
