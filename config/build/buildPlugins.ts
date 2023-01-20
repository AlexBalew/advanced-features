import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types";

export function buildPlugins({ html }: BuildPaths): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: html,
        }),
        new webpack.ProgressPlugin(),
    ]
}
