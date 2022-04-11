const path = require("path")

module.exports = {
    mode: "development",
    // For a single entry
    // entry: "./src/a.js",
    // For multiple entry files bundle into a single file, use an array
    // entry: ["./src/index.js", "./src/b.js"],
    // To create multiple bundle from separate entry files
    entry: {
        main: "./src/index.js",
        chunkA: "./src/a.js",
        chunkB: "./src/b.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        // filename: "chunk.js"
        filename: "[name].js"
    }
}