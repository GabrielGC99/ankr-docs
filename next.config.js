const isProd = process.env.NODE_ENV === 'production'

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
});

module.exports = withNextra({
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://bs-1-stage.dccn.ankr.com/docs/' : undefined,
});

/* example of how to set up redirects
module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 301,
      },
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 302,
      },
    ];
  },
});
*/
