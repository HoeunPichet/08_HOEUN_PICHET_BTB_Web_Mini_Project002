/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["i.pinimg.com"],
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pinimg.com",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
