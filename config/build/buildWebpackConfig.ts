import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types';

export function buildWebpackConfig({
    mode, paths, port, isDev,
}: BuildOptions): webpack.Configuration {
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins({ paths, isDev } as BuildOptions),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };
}
