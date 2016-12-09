'use strict'

var esformatter = require('esformatter');

exports.name = 'esformatter';
exports.outputFormat = 'jsx';

exports.render = esformatter.format;
