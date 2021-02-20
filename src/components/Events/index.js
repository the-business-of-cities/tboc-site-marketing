import { Section, Container, Column, Row } from "../Primitives";

import Event from "./Event";
import Table from "../Table";
import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

const Events = ({ events }) => {
  events.sort((a, b) => {
    return Moment(a.node.date).diff(Moment(b.node.date)) < 0 ? 1 : -1;
  });

  const pastEvents = events
    .filter(event => Moment(event.node.date).diff(Moment()) < 0)
    .map(event => (
      <Event
        {...event.node}
        key={`${slugify(event.node.title, { lower: true })}-${event.node.date}`}
        condensed
      />
    ));

  const upcomingEvents = events
    .filter(event => Moment(event.node.date).diff(Moment()) >= 0)
    .reverse()
    .map(event => (
      <Event
        {...event.node}
        key={`${slugify(event.node.title, { lower: true })}-${event.node.date}`}
      />
    ));

  return (
    <Section>
      <Container narrow>
        {upcomingEvents && (
          <Row>
            <Column>
              <h2>Upcoming events</h2>

              <Table>
                <tbody>
                  <tr>
                    <th>Event</th>

                    <th>Role</th>

                    <th>Where</th>

                    <th>When</th>
                  </tr>

                  {upcomingEvents}
                </tbody>
              </Table>
            </Column>
          </Row>
        )}

        {pastEvents && (
          <Row>
            <Column>
              <h2>Past events</h2>

              <Table>
                <tbody>
                  <tr>
                    <th>Event</th>

                    <th>Role</th>

                    <th>Where</th>

                    <th>When</th>
                  </tr>

                  {pastEvents}
                </tbody>
              </Table>
            </Column>
          </Row>
        )}
      </Container>
    </Section>
  );
};

Events.propTypes = {
  events: PropTypes.array
};

export default Events;
