/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/setup-Clion",
        destination: "/",
        permanent: true,
      },
      {
        source: "/How-to-upload-your-project-to-Github",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
