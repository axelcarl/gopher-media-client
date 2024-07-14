/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/gopher_media_profile_pictures/**",
      },
    ],
  },
};

export default nextConfig;
