/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/blog/:slug*', // define the route for accessing blog posts
            destination: '/api/blog/:slug*', // define the destination route
          },
        ]
      },
      async redirects() {
        return [
          {
            source: '/blog/:slug*', // define the route for accessing blog posts
            destination: '/api/blog/:slug*', // define the destination route
          },
        ]
      },
};

export default nextConfig;
