const domLens = require('./domLens.js');
const updateAttributes = require('./updateAttributes.js');
const updateFunction = require('./updateAttributes.js');

module.exports = {
  domLens,
  updateAttributes,
  updateFunction,
  lensAttribute: domLens.bind(null, updateAttributes),
  lensElement: domLens.bind(null, updateFunction),
};
