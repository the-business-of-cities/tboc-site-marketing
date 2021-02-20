const defaultColor = [ 255, 255, 255, 1, ]; // white

export const hexToColor = hex => {
	let regex = new RegExp();

	if (hex.length === 7) {
		regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	} else if (hex.length === 4) {
		regex = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;
	} else {
		return "MIXIN_ERROR";
	}

	const result = regex.exec(hex);
	if (result) {
		return result
			.filter((s, i) => {
				return i > 0;
			})
			.map(hexnum => {
				return parseInt(hexnum, 16) * (hexnum.length < 2 ? 17 : 1);
			})
			.concat(1);
	} else {
		return defaultColor;
	}
};

// returns [ r, g, b, a, ]
export const getColor = color => {
	if (!color) {
		return defaultColor;
	} else if (color.constructor === Array) {
		return color.length === 4 ? color : color.concat(1);
	} else if (color.indexOf("#") > -1) {
		return hexToColor(color);
	} else if (color.indexOf("rgb") > -1 || color.indexOf("rgba") > -1) {
		return color
			.replace(/ /g, "")
			.replace("rgb(", "")
			.replace("rgba(", "")
			.replace(")", "")
			.split(",");
	} else {
		return defaultColor;
	}
};

export const rgba = (...args) => {
	let r = "";

	if (args.length === 1) {
		r = args[0].join(",");
	} else if (args.length === 2) {
		r = getColor(args[0])
			.slice(0, 3)
			.concat(args[1]);
	} else if (args.length === 3) {
		r = args.concat(1).join(",");
	} else if (args.length === 4) {
		r = args.join(",");
	} else {
		r = getColor().join(",");
	}

	return "rgba(" + r + ")";
};

export const mixColors = (c1, c2, num = 0.5) =>
	rgba(
		getColor(c1).map((h, i) =>
			Math.round(num * h + (1 - num) * getColor(c2)[i]),
		),
	);

export const darkenColor = (color, num = 0.1) => mixColors("#000", color, num);

export const lightenColor = (color, num = 0.1) => mixColors("#fff", color, num);

export const transparent = (num = 0.5, r = 0, g = 0, b = 0) =>
	`rgba(${ r },${ g },${ b },${ num })`;
