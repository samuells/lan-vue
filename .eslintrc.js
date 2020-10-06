module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"comma-dangle": ["error", "always-multiline"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/require-name-property": "error",
		"vue/match-component-file-name": [
			"error",
			{
				extensions: ["vue"],
				shouldMatchCase: false,
			},
		],
	},
};
