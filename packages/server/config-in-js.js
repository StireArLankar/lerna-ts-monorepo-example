const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV = 'production' } = process.env;
console.log('NODE_ENV', NODE_ENV);
console.log(process.env.LOCAL, process.env.REACT_APP_VERSION, process.env.PORT);

const pathBuild = path.resolve(__dirname, '..', '..', 'build');

console.log(pathBuild, __dirname);

/** @type {import('webpack').Configuration} */
const config = {
  entry: { server: './src/index.ts' },
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: pathBuild,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      common: path.resolve(__dirname, '..', '..', 'common'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'babel-loader!ts-loader' },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
            },
          },
        ],
      },
    ],
  },
};

export default config;
