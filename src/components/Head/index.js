import * as R from "ramda";

import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import { theme as defaultTheme } from "../../utils/styles";

import ReactGA from "react-ga";

import favicon from '../../images/icon.png';

const Head = props => {
  const { site, page } = props;

  let { theme } = props;
  if (theme == null) {
    theme = { ...defaultTheme };
  }

  const image =
    R.path(["image", "url"])(page) || R.path(["homeImage", "url"])(site);

  if(!site && !page) {
    return <Helmet>
      <meta charSet="utf-8" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>The Business of Cities</title>
    </Helmet>
  }

  return (
    <Helmet>
      <meta charSet="utf-8" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href={favicon} />

      {page?.slug ? (
        <link
          rel="canonical"
          href={`${site.url}/${page.slug ? page.slug : ""}`}
        />
      ) : null}

      <title>
        {page && page.title
          ? `${page.title} | ${site && site.siteTitle}`
          : `${site && site.siteTitle} | ${site && site.siteDescription}`}
      </title>

      <meta
        name="description"
        content={
          page?.description || site.siteDescription
        }
      />

      <meta
        property="og:url"
        content={`http://www.thebusinessofcities.com/${
          page?.slug || ""
        }`}
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={
          page?.title
            ? `${page.title} | ${site.siteTitle}`
            : `${site.siteTitle} | ${site.siteDescription}`
        }
      />

      <meta property="og:site_name" content={site.sitetitle} />

      <meta
        property="og:description"
        content={
          page?.description || site.siteDescription
        }
      />

      {/*Social */}
      {/*General image*/}
      <link rel="image_src" type="image/jpeg" href={image} />

      {/*180x110 Image for Linkedin */}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="110" />

      {/*600x315 Image for Facebook */}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />

      {/*Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={theme.meta.twitterUsername} />
      <meta name="twitter:creator" content={theme.meta.twitterCreator} />
      <meta name="twitter:title" content={page?.title || site.siteTitle}/>

      <meta
        name="twitter:url"
        content={`http://www.thebusinessofcities.com/${
          page && page.slug ? page.slug : ""
        }`}
      />

      <meta
        name="twitter:description"
        content={
          page && page.description ? page.description : site.siteDescription
        }
      />

      <meta name="twitter:image:src" content={image} />

      {/* Google */}
      {/* Search Console */}
      <meta name="google-site-verification" content={theme.meta.googleSearch} />

      {/* Google analytics*/}
      {theme.meta.googleAnalytics &&
        ReactGA.initialize(theme.meta.googleAnalytics)}
    </Helmet>
  );
};

Head.propTypes = {
  page: PropTypes.object,
  site: PropTypes.object
};

export default Head;
