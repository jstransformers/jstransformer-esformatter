'use strict'

const esformatter = require('esformatter')

exports.name = 'esformatter'
exports.outputFormat = 'jsx'

exports.render = esformatter.format
