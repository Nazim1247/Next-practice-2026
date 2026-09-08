/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.themealdb.com",
                pathname: "/images/media/**",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                pathname: "/api/portraits/**",
            },
        ],
    },
     redirects() {
    return [
      {
        source: '/food-details/:id',
        destination: '/foods/:id',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;