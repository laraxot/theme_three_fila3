const dotenvExpand = require('dotenv-expand');
dotenvExpand(
	require('dotenv').config({ path: '../../.env' /*, debug: true*/ }),
);

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
	// build: {
	// 	// outDir: '../../../public_html/build/ewall',
	// 	outDir: './Resources/dist',
	// 	emptyOutDir: false,
	// 	manifest: true,
	// 	rollupOptions: {
	// 		output: {
	// 			entryFileNames: `assets/[name].js`,
	// 			chunkFileNames: `assets/[name].js`,
	// 			assetFileNames: `assets/[name].[ext]`
	// 		}
	// 	}
	// },
	plugins: [
		laravel({
			// publicDirectory: '../../../public_html/',
			buildDirectory: 'themes/Three',
			// buildDirectory: 'Three',
			input: [
				//__dirname + '/Resources/sass/app.scss',
				//__dirname + '/Resources/scss/app-mix.scss',
                __dirname + '/Resources/css/app.css',
				__dirname + '/Resources/js/app.js',
				//__dirname + '/Resources/css/filament/admin/theme.scss'
			],
			refresh: true,
		}),
	],
});
