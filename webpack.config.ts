import { BuildMode, BuildEnv } from './config/build/types/config';
import webpack from 'webpack'
import path from "path";
import { BuildPaths, buildWebpackConfig } from './config/build';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const port = env.port || '3000';

    const mode = env.mode || BuildMode.Development;
    const isDev = mode === BuildMode.Development;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    return config
};