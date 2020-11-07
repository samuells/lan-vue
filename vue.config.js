// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PREVIEW_TOKEN = 'Kn712WLwyvnBISetVn8aoQtt';
const PUBLIC_TOKEN = 'HxS1R4YYNKaJrj41xOR1JQtt';

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE
	? PREVIEW_TOKEN
	: PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {
	configureWebpack: {
		plugins: [
			new StyleLintPlugin({
				files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
			}),
		],
	},
};
