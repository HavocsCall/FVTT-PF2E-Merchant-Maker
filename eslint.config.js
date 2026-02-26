import globals from "globals";

export default [
	{
		ignores: ["packs/**", "src/packs/**", "node_modules/**"],
	},
	{
		files: ["src/**/*.js", "build/**/*.mjs"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				Hooks: "readonly",
				game: "readonly",
				foundry: "readonly",
				Actor: "readonly",
				ui: "readonly",
			},
		},
		rules: {
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			"no-undef": "error",
		},
	},
];
