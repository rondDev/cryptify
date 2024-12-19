/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    output: "export",

    basePath: process.env.NODE_ENV === "production" ? "/cryptify" : "",

    images: {
        unoptomized: true,
    },
};

module.exports = nextConfig;
