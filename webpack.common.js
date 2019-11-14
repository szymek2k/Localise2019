const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".jsx", ".ts", ".tsx", ".js"]
  },
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    })
  ]
};

// When importing a module whose path matches one of the following, just
// assume a corresponding global variable exists and use that instead.
// This is important because it allows us to avoid bundling all of our
// dependencies, which allows browsers to cache those libraries between builds.
// externals: {
//   react: "React",
//   "react-dom": "ReactDOM"
// }
