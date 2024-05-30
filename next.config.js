const { PHASE_EXPORT } = require('next/constants');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const defaultOptions = withBundleAnalyzer({
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      'localhost',
      'images.unsplash.com',
      'static.gotsby.org',
      'static.ghost.org',
      'gatsby.ghost.io',
      'ghost.org',
      'repository-images.githubusercontent.com',
      'www.gravatar.com',
      'github.githubassets.com',
      ...(process.env.IMAGE_DOMAINS || '').split(','),
    ],
    loader: 'custom',
    path: '',
  },
  reactStrictMode: true,
});

module.exports = (phase, { defaultConfig }) => {
  return defaultOptions;
};
