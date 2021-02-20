export const truncate = () => `
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const bgImage = url => `
	background-size: cover;
	background-position: center center;
	background-image: url(${ url });
`;

export const clearfix = {
	general: `
		&:before,
		&:after {
			content: "";
			display: table;
		}

		&:after {
			clear: both;
		}
	`,
	link: `
		text-decoration: none;
		color: currentColor;
	`,
};
