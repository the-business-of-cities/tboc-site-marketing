import PropTypes from "prop-types";
import React from "react";
import { Page } from "../../Primitives";
import { Slider, Banner } from "../../../components";

class BlankPage extends React.Component {
  render() {
    const { children, sliderContents, banner } = this.props;

    return (
      <Page>
        {banner && <Banner text={banner.text} />}

        {sliderContents && (
          <Slider  sliderContents={sliderContents} />
        )}

        {children}
      </Page>
    );
  }
}

BlankPage.propTypes = {
  banner: PropTypes.object,
  children: PropTypes.array,
  sliderContents: PropTypes.array,
};

export default BlankPage;
