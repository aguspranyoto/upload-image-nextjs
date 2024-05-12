/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "te4qimwuvfjxpqxt.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
