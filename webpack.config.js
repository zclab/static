const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { Compilation } = require("webpack");


const scriptPath = resolve(__dirname, "scripts");
const mathPath = { mathJax: resolve(scriptPath, "mathjax") };
/*******************************************************************************/

const copyPlugin = new CopyPlugin({
    patterns: [
        {
            context: "./node_modules/mathjax",
            from: "LICENSE",
            to: resolve(mathPath.mathJax, "LICENSE.txt"),
        },
        {
            context: "./node_modules/mathjax",
            from: "README.md",
            to: resolve(mathPath.mathJax, "README.md"),
        },
        {
            context: "./node_modules/mathjax",
            from: "es5",
            to: resolve(mathPath.mathJax, "es5"),
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