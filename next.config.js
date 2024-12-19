/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    output: "export",

    basePath: "/cryptify",

    images: {
        unoptomized: true,
    },
};

module.exports = nextConfig;
