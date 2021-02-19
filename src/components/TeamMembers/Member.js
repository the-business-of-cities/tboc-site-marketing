import PropTypes from "prop-types";
import React from "react";
import marked from "marked";
import styled from "styled-components";
import { Icon, Image } from "../Primitives";
import { breakpoint } from '../../utils/styles';

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint("tiny", "only")} {
    flex-direction: column;
  } ;
`;

const Name = styled.h3`
  display: block;
  margin-top: 0;

  &::after {
    width: 100%;
  }
`;

const Role = styled.p`
  font-weight: bold;
`;

const Links = styled.div`
  font-size: 1.2em;

  a {
    margin-right: 0.25em;
  }
`;

const Description = styled.div`
  font-size: 0.8em;
`;

const ExtendedDescription = styled.div``;

const PrimaryDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 0.5em;
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  > div {
    flex-basis: 50%;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

const MemberImage = styled(Image)`
  max-width: 250px;
  max-height: 250px;
  flex-basis: 50%;
  display: flex;
  flex: 1;
  object-position: top left;
`;

const Toggle = styled.div`
  font-weight: bold;
  margin: 0.5em 0;
  cursor: pointer;
`;

class TeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    this.setState({ showDescription: !this.state.showDescription });
  }

  render() {
    const {
      description,
      extendedDescription,
      email,
      image,
      linkedIn,
      name,
      role,
      twitter,
      website,
    } = this.props.member;

    return (
      this.props.member && (
        <TeamMemberWrapper>
          <PrimaryDetails>
            {image && (
              <MemberImage
                src={`https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_600,h_800,c_fill,g_face,f_auto/https:${image.file.url}`}
              />
            )}

            <div>
              {name && <Name>{name}</Name>}

              {role && <Role>{role}</Role>}

              {(email || linkedIn || website || twitter) && (
                <Links>
                  {email && (
                    <a href={`mailto:${email}`}>
                      <Icon icon="envelope" />
                    </a>
                  )}

                  {linkedIn && (
                    <a href={`${linkedIn}`}>
                      <Icon icon="linkedin" />
                    </a>
                  )}

                  {website && (
                    <a href={website}>
                      <Icon icon="link" />
                    </a>
                  )}

                  {twitter && (
                    <a href={`https://www.twitter.com/${twitter}`}>
                      <Icon icon="twitter" />
                    </a>
                  )}
                </Links>
              )}

              {description && (
                <Description>{description.description}</Description>
              )}

              {extendedDescription && (
                <Toggle onClick={this.toggleDescription}>
                  {this.state.showDescription ? "Read less..." : "Read more..."}
                </Toggle>
              )}
            </div>
          </PrimaryDetails>

          {extendedDescription && this.state.showDescription && (
            <ExtendedDescription
              dangerouslySetInnerHTML={{
                __html: marked(extendedDescription.extendedDescription),
              }}
            />
          )}
        </TeamMemberWrapper>
      )
    );
  }
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    description: PropTypes.string,
    email: PropTypes.any,
    extendedDescription: PropTypes.string,
    image: PropTypes.any,
    linkedIn: PropTypes.any,
    name: PropTypes.any,
    role: PropTypes.any,
    twitter: PropTypes.any,
    website: PropTypes.any,
  }).isRequired,
};

export default TeamMember;
