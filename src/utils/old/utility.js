// import R from "ramda";

export const objectMap = (object, something) =>
	Object.keys(object).reduce(
		(accumulator, key) => ({
			...accumulator,
			[key]: something(key, object[key]),
		}),
		{},
	);

export const printObj = obj => JSON.stringify(obj, null, "  ");

export const sentenceCase = str => str.slice(0, 1).toUpperCase() + str.slice(1);

export const bindMethods = (that, methods) => {
	methods.forEach(name => {
		that[name] = that[name].bind(that);
	});
};

// export const path = pathStr =>
// 	R.path(
// 		pathStr.split(".").map(key => {
// 			const num = parseInt(key, 10);
// 			return isNaN(num) ? key : num;
// 		}),
// 	);

export const removePx = npx => +npx.replace("px", "");
export const num = removePx;

export const addPx = n => n + "px";
export const px = addPx;

export const addEm = n => n + "em";
export const em = addEm;
