import webpack from 'webpack';
import path from 'path';
import { BuildMode, BuildEnv } from './config/build/types/config';
import { BuildPaths, buildWebpackConfig } from './config/build';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const port = env?.port || '3000';

    const mode = env?.mode || BuildMode.Development;
    const isDev = mode === BuildMode.Development;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
