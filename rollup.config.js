import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json';

export default [
	{
		input: 'index.js',
		output: {
			name: 'range',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [ uglify() ]
	},
	{
		input: 'index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
