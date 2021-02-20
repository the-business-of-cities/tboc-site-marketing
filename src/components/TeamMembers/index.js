import * as mixins from "../../utils/old";
import { Section, Column, Row, Container } from "../Primitives";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import TeamMember from "./Member";
import slugify from "slugify";

const TeamMembersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;

  ${mixins.bp.lg.only`grid-template-columns: 1fr 1fr 1fr;`} ${mixins.bp.xs
    .only`grid-template-columns: 1fr;`};
`;

const TeamMembers = ({ members }) => {
  return (
    members && (
      <Section>
        <Container>
          <Row>
            <Column>
              <TeamMembersWrapper>
                {members.map(member => (
                  <TeamMember
                    key={slugify(member.name || member.node.name, {
                      lower: true
                    })}
                    member={member.node || member}
                  />
                ))}
              </TeamMembersWrapper>
            </Column>
          </Row>
        </Container>
      </Section>
    )
  );
};

TeamMembers.propTypes = {
  members: PropTypes.array
};

export default TeamMembers;
