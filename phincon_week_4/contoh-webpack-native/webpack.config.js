const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./assets/javascripts/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "bundle.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, "assets/images"), to: "assets/images" },
                { from: path.resolve(__dirname, "assets/styles"), to: "assets/styles" },
            ],
        }),
    ],
    mode: "development",
};
