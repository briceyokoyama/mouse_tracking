const path = require('path');
const nodeExternals = require('webpack-node-externals');

const backConfig = {
  target: 'node',
  entry: {
    app: ['./src/server/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-back.js',
  },
  externals: [nodeExternals()],
};

const frontConfig = {
  target: 'web',
  entry: {
    app: ['./src/client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-front.js',
  },
  devtool: 'inline-source-map',
};

module.exports = [frontConfig, backConfig];
