import { BuildOptions } from "./types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(port: string): DevServerConfiguration {
    return {
        port,
        open: true,
    }
}