'use strict'

const config = require('config')
const logger = require('ilog')
const app = require('./lib/app')

app.listen(config.PORT, () => logger.info(`node-swagger-tookit system listen on ${config.PORT}`))
