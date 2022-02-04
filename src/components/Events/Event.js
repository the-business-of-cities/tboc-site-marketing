import { Section, Container, Column, Row, MaybeLink } from "../Primitives";

import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

const Event = ({ condensed, ...event }) => {
  const Cell = ({ children }) => (
    <td>
      <MaybeLink
        href={event.link}
        to={!event.link ? `/events/${slugify(event.title, { lower: true })}` : undefined}
      >
        {children}
      </MaybeLink>
    </td>
  );

  return (
    <tr>
      <Cell>{event.title}</Cell>

      <Cell>{event.role || ""}</Cell>

      <Cell>{event.location}</Cell>

      <Cell>{Moment(event.date).format("Do MMMM YYYY")}</Cell>
    </tr>
  );
};

Event.propTypes = {
  event: PropTypes.object
};

export default Event;
