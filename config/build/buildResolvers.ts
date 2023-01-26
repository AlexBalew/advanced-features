import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export function buildResolvers({ src }: BuildPaths): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            src, 'node_modules',
        ],
        mainFiles: ['index'],
        alias: {},
    };
}
