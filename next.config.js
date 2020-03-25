const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@edooking/ui']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextJsConfig = {
  target: 'serverless',
};

module.exports = withPlugins(
  [withTM, withOptimizedImages, withFonts],
  nextJsConfig,
);
const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}