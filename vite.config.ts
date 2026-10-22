import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
// Link-preview tags need absolute URLs: use SITE_URL if set, otherwise Vercel's production domain.
const siteUrl=(process.env.SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'')).replace(/\/$/,'');
export default defineConfig({base:'./', plugins:[{...mdx(),enforce:"pre"},react({include:/\.(jsx|tsx|mdx)$/}),{name:'site-url',transformIndexHtml:html=>html.replaceAll('__SITE_URL__',siteUrl)}],server:{host:'localhost',port:4173},preview:{host:'localhost',port:4173},build:{cssCodeSplit:false,modulePreload:false}});
