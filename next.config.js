// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { nextRuntime }) => {
    // Undocumented property of next 12.
    if (nextRuntime !== "nodejs") return config;
    return {
      ...config,
      entry() {
        return config.entry().then((entry) => ({
          ...entry,
          cli: path.resolve(process.cwd(), "lib/cli.js"),
        }));
      },
    };
  },


};


// module.exports = {
// 	images: {
// 		domains: ['cdn.sanity.io'],
// 		// loader: 'custom'
// 	}
// };