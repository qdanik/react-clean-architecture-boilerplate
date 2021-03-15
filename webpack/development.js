import merge from 'webpack-merge';
import assets from './utils/assets';
import defines from './utils/defines';
import html from './utils/devHtml';
import devServer from './utils/devServer';
import resolve from './utils/resolve';

export default merge({
  devtool: 'source-map',
  externals: [
    {External: ['window']},
  ],
  mode: 'development',
  performance: {hints: false},
}, assets, resolve, html, devServer, defines(true));
