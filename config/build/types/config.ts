export const enum BuildMode {
    Production = 'production',
    Development = 'development',
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: string;
    apiUrl: string;
    project: 'strybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    mode: BuildMode,
    port: string,
    apiUrl: string;
}
