//import dotenv from 'dotenv';
//import dotenvExpand from 'dotenv-expand';
//dotenvExpand.expand(
//	dotenv.config({ path: '../../.env' /*, debug: true*/ }),
//);

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
//import path from 'path'

export default defineConfig({
	build: {
	// 	// outDir: '../../../public_html/build/ewall',
	// 	outDir: './Resources/dist',
	 	emptyOutDir: false,
	 	manifest: true,
	 	rollupOptions: {
	 		output: {
	 			entryFileNames: `assets/[name].js`,
	 			chunkFileNames: `assets/[name].js`,
	 			assetFileNames: `assets/[name].[ext]`
	 		}
	 	}
	},
	plugins: [
		laravel({
			// publicDirectory: '../../../public_html/',
			buildDirectory: 'zibibbo',
			// buildDirectory: 'Three',
			input: [
				//__dirname + '/Resources/sass/app.scss',
				//__dirname + '/Resources/scss/app-mix.scss',
                //__dirname + '/Resources/css/app.css',
				__dirname + '/Resources/js/app.js',
				//__dirname + '/Resources/css/filament/admin/theme.scss'
			],
			refresh: true,
		}),
	],
});
