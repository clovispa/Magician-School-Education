module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://hp-api.herokuapp.com/',
                changeOrigin: true
            }
        }
    }
}
