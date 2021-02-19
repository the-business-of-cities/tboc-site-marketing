import { compose } from "recompose";

import Slides from "./Slides";
import { Section, Container, Row } from "../Primitives";
import PropTypes from "prop-types";
import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: undefined,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ mobile: window.innerWidth <= 788 });
  }

  render() {
    return (
      <Section>
        <Container>
          <Row noPadding>
            <Slides
              GatsbyLink={this.props.GatsbyLink}
              sliderContents={this.props.sliderContents}
              mobile={this.state.mobile}
            />
          </Row>
        </Container>
      </Section>
    );
  }
}

const enhance = compose();

Slider.propTypes = {
  GatsbyLink: PropTypes.any,
  sliderContents: PropTypes.any,
};

export default enhance(Slider);
