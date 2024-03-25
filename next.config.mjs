/** @type {import('next').NextConfig} */
import path from 'path';
const __dirname = path.resolve();
const nextConfig = {
 reactStrictMode: true,
 images: {
   remotePatterns: [
     {
       protocol: 'http',
       hostname: '**',
       port: '',
       pathname: '**',
     },
   ],
   unoptimized: true
 },

 distDir: 'build',
 output: 'export',
 
 sassOptions: {
   includePaths: [path.join(__dirname, 'styles')],
 },


}

export default nextConfig;
