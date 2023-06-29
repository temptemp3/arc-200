const path = require("path");
import webpack, { Configuration } from "webpack";

const config = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/assets/images/")
    },
    configure: (webpackConfig: Configuration): Configuration => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            path: false,
            // assert: require.resolve("assert"),
            // crypto: require.resolve("crypto-browserify"),
            // http: require.resolve("stream-http"),
            // https: require.resolve("https-browserify"),
            // os: require.resolve("os-browserify/browser"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer")
          }
        },
        module: {
          rules: [
            ...(webpackConfig.module?.rules ?? []),
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false
              }
            }
          ]
        }
      };
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"]
        }),
        new webpack.ProvidePlugin({
          process: "process/browser"
        })
      ]
    }
  }
};

export default config;

