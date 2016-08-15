'use strict';

/**
 * Convert unit to unitless px value.
 * @param  {Number} value
 * @param  {String} unit
 * @return {Number}
 */
var toPx = function toPx(value, unit) {
  if (unit === 'em' || unit === 'rem') {
    return value * 16;
  } else if (unit === '%') {
    return value / 100 * 16;
  }

  return value;
};

module.exports = function (css, opts) {
  // All the line heights will be stored in this array
  var fontSize = [];

  css.walkDecls(function (decl) {
    // Check if the declaration is not inside the an @ rule,
    // if is in the root selector and it's a font or font-size property
    if (decl.parent.parent.type !== 'atrule' && decl.parent.selector === opts.rootSelector && (decl.prop === 'font' || decl.prop === 'font-size')) {

      if (decl.prop === 'font') {
        // Matches {$1:font size}{$2:unit}.
        var fontProps = decl.value.match(/(\d+|\d+?\.\d+)(r?em|px|%)(?=\s*\/\s*)/);

        // Do nothing if there is a font property but no font-size defined
        if (!fontProps) {
          return;
        }

        // Return the font-size
        fontSize.push(toPx(fontProps[1], fontProps[2]));
      } else {
        // If the property is 'font-size'

        // Matches {$1:font size}{$2:unit}.
        var _fontProps = decl.value.match(/(\d+|\d+?\.\d+)(r?em|px|%)/);

        // Return the font-size
        fontSize.push(toPx(_fontProps[1], _fontProps[2]));
      }
    }
  });

  // Return only the last result
  return fontSize.pop();
};