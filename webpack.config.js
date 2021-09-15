require('dotenv').config();
module.exports = process.env.MODE === 'development'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod');