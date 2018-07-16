const sm = 768;
const md = 992;
const lg = md;

const breakpoints = {
	xs: { min: 0, max: sm - 1, },
	sm: { min: sm, max: md - 1, },
	md: { min: md, max: lg - 1, },
	lg: { min: lg, max: 100000, },
};

const palette = {
	primary: "#003158",
	secondary: "#005291",
	tertiary: "#0071CC",
};

const colors = {
	...palette,
	text: "#444",
	link: "#405378",
	linkHover: "#4D6491",
	nav: {
		background: palette.primary,
		alt: "#fff",
	},
	footer: palette.primary,
	bg: {
		white: "#fff",
		light: "#eee",
		medium: "#aaa",
		dark: palette.primary,
	},
	grey: "rgba(0,0,0,0.2)",
	lines: "rgba(0,0,0,0.2)",
	borders: "rgba(0,0,0,0.2)",
};

const theme = {
	breakpoints: breakpoints,
	colors: colors,
	font: {
		size: {
			xs: "12px",
			sm: "14px",
			md: "16px",
			lg: "17px",
		},
		title: {
			family: "Montserrat, sans-serif",
		},
		family: "Montserrat, sans-serif",
		paragraph: "\"Lora\", sans-serif",
		heading: "\"Montserrat\", sans-serif",
	},
	gutter: {
		xs: 15,
		sm: 20,
		md: 30,
		lg: 30,
	},
	scrollbar: {
		width: "10px",
		color: {
			track: "#ddd",
			thumb: colors.text,
		},
	},
	dimensions: {
		nav: {
			height: {
				xs: "50px",
				other: "110px",
			},
			margin: {
				xs: "14px",
				other: "45px",
			},
			logoHeight: {
				xs: "40px",
				other: "60px",
			},
			linksHeight: "42px",
		},
		footer: {
			height: {
				xs: "130px",
				other: "60px",
			},
		},
		maxTextWidth: 800,
	},
	meta: {
		twitterUsername: "mcclowes",
		twitterCreator: "codogoio",
		googleAnalytics: "UA-89374864-3",
		googleSearch: "YQs24--DxVBln2zZc8hPo1kZFoxzc2amoF6-QWkDe7k",
	},
};

// theme.dimensions.gutter = {
// 	...theme.dimensions.gutter,
// 	full: objectMap(theme.dimensions.gutter, (k, v) => v + "px"),
// 	half: objectMap(theme.dimensions.gutter, (k, v) => 0.5 * v + "px"),
// 	quarter: objectMap(theme.dimensions.gutter, (k, v) => 0.25 * v + "px"),
// 	minusQuarter: objectMap(theme.dimensions.gutter, (k, v) => -0.25 * v + "px"),
// 	tripleHalf: objectMap(theme.dimensions.gutter, (k, v) => 1.5 * v + "px"),
// 	fullNum: theme.dimensions.gutter,
// 	halfNum: objectMap(theme.dimensions.gutter, (k, v) => 0.5 * v),
// 	quarterNum: objectMap(theme.dimensions.gutter, (k, v) => 0.25 * v),
// 	tripleHalfNum: objectMap(theme.dimensions.gutter, (k, v) => 1.5 * v),
// 	negativeHalf: objectMap(theme.dimensions.gutter, (k, v) => -0.5 * v + "px"),
// };

// theme.dimensions.gutter.container = {
// 	...theme.dimensions.gutter.full,
// 	xs: theme.dimensions.gutter.full.xs,
// };

export default theme;
