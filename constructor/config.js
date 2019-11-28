import path from "path";

import strip from "@rollup/plugin-strip";

import common from "../common";

const {
    name
} = common.manifest;

const plugins = [
    strip()
]

const output = [{
        name,
        exports: "named",
        format: "cjs",
        file: path.resolve(common.path.DIST, "index.js")
    },
    {
        name,
        exports: "named",
        format: "esm",
        file: path.resolve(common.path.DIST, "index.es.js")
    }
]

export default {
    input: {
        input: path.resolve(common.path.SOURCE, "index.js"),
        output,
        plugins
    },
    output
}