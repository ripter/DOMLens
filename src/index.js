const domLens = require('./domLens.js');
const updateAttributes = require('./updateAttributes.js');

// Default to the updateAttributes rules
module.exports = domLens.bind(null, updateAttributes);
