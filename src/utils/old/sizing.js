export const wh = size => `
	width: ${ size };
	height: ${ size };
`;

export const contained = (offset = 0) => `
	position: absolute;
	top: ${ offset };
	right: ${ offset };
	bottom: ${ offset };
	left: ${ offset };
`;
