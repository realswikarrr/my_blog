/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/posts/:slug*', // define the route for accessing blog posts
            destination: '/posts/:slug*', // define the destination route
          },
        ]
      },
      async redirects() {
        return [
          {
            source: '/posts/:slug*', // define the route for accessing blog posts
            destination: '/posts/:slug*', // define the destination route
          },
        ]
      },
};

export default nextConfig;
