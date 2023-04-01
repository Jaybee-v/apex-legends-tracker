/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.mozambiquehe.re",
                port: "",
                pathname: "/assets/**",
            },
        ],
    },
}

module.exports = nextConfig
