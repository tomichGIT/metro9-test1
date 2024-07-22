/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/metro9-test1' : '',
    assetPrefix: isProd ? '/metro9-test1/' : ''
};

export default nextConfig;
