/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io', // Sanity.io',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos', // Sanity.io',
                pathname: '**',
            }
        ]   
    },
};

export default nextConfig;
