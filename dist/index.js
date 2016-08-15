'use strict';

var postcss = require('postcss');
var getRootSize = require('./getRootSize');
var pxToRem = require('./pxToRem');

var defaults = {
  rootSelector: ':root',
  unit: 'pr',
  fontSize: 16
};

module.exports = postcss.plugin('postcss-pr', function () {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? defaults : arguments[0];

  return function (css) {
    var rootFontSize = getRootSize(css, opts) || opts.fontSize;
    var prReg = new RegExp('\\d*\\.?\\d+' + opts.unit, 'gi');

    css.replaceValues(prReg, { fast: opts.unit }, function (val) {
      return pxToRem(parseFloat(val), rootFontSize);
    });
  };
});