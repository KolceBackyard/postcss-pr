const postcss = require('postcss');
const getRootSize = require('./lib/getRootSize');
const pxToRem = require('./lib/pxToRem');

const defaults = {
  rootSelector: ':root',
  unit: 'pxrem',
  fontSize: 16
};

module.exports = postcss.plugin('postcss-pxrem', (opts = defaults) => {
  return (css) => {
    const rootFontSize = getRootSize(css, opts) || opts.fontSize;
    const pxremReg = new RegExp('\\d*\\.?\\d+' + opts.unit, 'gi');

    css.replaceValues(pxremReg, {fast: opts.unit}, (val) => {
      return pxToRem(parseFloat(val), rootFontSize);
    });
  };
});
