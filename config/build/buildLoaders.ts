import webpack from 'webpack';
import { buildBabelLoader, buildCssLoader } from './loaders';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const commonBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    const cssLoader = buildCssLoader(isDev);

    // const typescriptLoader = { using babel loader instead of ts loader
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        commonBabelLoader,
        tsxBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
