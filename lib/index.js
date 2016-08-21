const postcss = require('postcss');
const getRootSize = require('./getRootSize');
const pxToRem = require('./pxToRem');

const defaults = {
  rootSelector: ':root',
  unit: 'pr',
  fontSize: 16
};

module.exports = postcss.plugin('postcss-pr', (opts = defaults) => {
  return (css) => {
    const rootFontSize = getRootSize(css, opts) || opts.fontSize;
    const prReg = new RegExp('\\(?\\d*\\.?\\d+(px)?\\)?' + opts.unit, 'gi');

    css.replaceValues(prReg, {fast: opts.unit}, (val) => {
      return pxToRem(parseFloat(val.replace(/[()px]/gi,'')), rootFontSize);
    });
  };
});
