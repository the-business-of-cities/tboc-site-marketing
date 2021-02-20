export var shadow = function shadow(height) {
	var over =
		arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	var h = height - over;

	return {
		"0": "",
		"1":
			"box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
		"2":
			"box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);",
		"3":
			"box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
		"4":
			"box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
		"5":
			"box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
		"-1":
			"box-shadow: inset 0 -1px 3px rgba(0,0,0,0.12), inset 0 -1px 2px rgba(0,0,0,0.24);",
	}[h];
};

export var shadowProxy = new Proxy(
	{},
	{
		get: function get(target, height) {
			return {
				"0": "",
				"1": "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);",
				"2": "box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);",
				"3": "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);",
				"4": "box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);",
				"5": "box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);",
				"-1":
					"box-shadow: inset 0 -1px 2px rgba(0,0,0,0.08), inset 0 -1px 2px rgba(0,0,0,0.18);",
			}[height];
		},
	},
);
