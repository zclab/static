const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { Compilation } = require("webpack");


const scriptPath = resolve(__dirname, "scripts");
/*******************************************************************************/

const copyPlugin = new CopyPlugin({
    patterns: [
        {
            context: "./node_modules",
            from: "mathjax",
            to: resolve(scriptPath, "mathjax"),
        },
        {
            context: "./node_modules",
            from: "tippy.js",
            to: resolve(scriptPath, "tippyjs"),
        },
        {
            context: "./node_modules",
            from: "@popperjs",
            to: resolve(scriptPath, "popperjs"),
        },
    ]
});


module.exports = {
    mode: "production",
    entry: {
        "static": resolve(scriptPath, "index.js"),
    },
    output: { filename: "[name].js", path: scriptPath },
    plugins: [copyPlugin]
};