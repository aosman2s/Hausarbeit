const path = require('path')
const PORT = process.env.PORT

module.exports = {
    outputDir : path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy:{
            '/api':{
                target:`http://localhost:${PORT}`
            }
        }
    }
}