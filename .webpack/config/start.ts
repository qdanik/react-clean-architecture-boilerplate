import { Configuration } from 'webpack'
import { entry, module, output, plugins, resolve, devServer } from '../common'
import { WebpackConfig } from '../types'

export default (config: WebpackConfig): Configuration =>
  ({
    devServer: devServer(config),
    devtool: 'inline-source-map',
    entry: entry(),
    externals: [{ External: ['window'] }],
    mode: 'development',
    module: module(),
    output: output(),
    performance: { hints: false },
    plugins: plugins(config),
    resolve: resolve(),
  } as Configuration)
