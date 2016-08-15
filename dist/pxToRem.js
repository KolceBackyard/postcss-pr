'use strict';

module.exports = function (val, rootFontSize) {
  return parseFloat((val / rootFontSize).toFixed(5)) + 'rem';
};