import path from 'path';
import * as webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV = 'production' } = process.env;
console.log('NODE_ENV', NODE_ENV);
console.log(process.env.LOCAL, process.env.REACT_APP_VERSION, process.env.PORT);

const pathBuild = path.resolve(__dirname, '..', '..', 'build');

console.log(pathBuild, __dirname);

const config: webpack.Configuration = {
  entry: { server: './src/index.ts' },
  mode: NODE_ENV as webpack.Configuration['mode'],
  target: 'node',
  output: {
    path: pathBuild,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'babel-loader!ts-loader' },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
};

export default config;
