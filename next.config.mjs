/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/metro9-test1' : '',
    assetPrefix: isProd ? '/metro9-test1/' : '',
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // hago un rewrite para los <img> de metronic viejos. Si fueran <Image> lo corregi automáticamente
    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: isProd ? '/metro9-test1/media/:path*' : '/media/:path*',
            },
        ];
    },
};

export default nextConfig;


// Código original de next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//   };
  
//   export default nextConfig;