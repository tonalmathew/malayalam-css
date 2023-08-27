const dict = require('./dict')

// eslint-disable-next-line no-unused-vars
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'malayalam-css',
    Declaration (decl) {
      const translatedProp = Object.keys(dict).find(key => dict[key] === decl.prop);
      const translatedValue = Object.keys(dict).find(key => dict[key] === decl.value);
      
      if (translatedProp) {
        decl.prop = translatedProp;
      }
      if (translatedValue) {
        decl.value = translatedValue;
      }
    }
  }
}

module.exports.postcss = true
