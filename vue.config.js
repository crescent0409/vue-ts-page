module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {

            "/api": {
                target: "http://localhost:5000/"
            }
        }
    }
}
