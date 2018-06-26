import { ThemeProvider, injectGlobal, } from "styled-components";
import { globalStyles, Nav, Head, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";

// ----------------------------------------------------


const Links = [
	{
		to: "/new-members/",
		content: "New Members",
		as: "gatsby-link",
	},
];

// ----------------------------------------------------


injectGlobal`
	${ globalStyles }
`;

const TemplateWrapper = props => (
	<ThemeProvider theme = { theme }>
		<div>
			<Head />

			<Nav
				homepage = { props.location.pathname === "/" }
				links = { Links }
				logo = { { url: "https://images.ctfassets.net/7k0m7hkot1dm/28C0yQCX5aSKqwyYgSIIIA/08b95dc10f29054e15da2178dbbc3c35/Asset_4_2x.png", text: "tboc", } }
			/>

			{ props.children(...props) }
		</div>
	</ThemeProvider>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
	location: PropTypes.object,
};

export default TemplateWrapper;
