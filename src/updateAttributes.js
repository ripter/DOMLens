const bindEvent = require('@ripter/bindevent/src/bind.dom.js');

/**
 * Updates node's attributes with the values from attribtues.
 * @param {Object} attributes - and object of attributes and values to set on the node.
 * @param {Node} node - the node matched by the rule.
 * @param {Number} index - the node's index in the nodeList.
 * @param {NodeList} nodeList - the nodeList returned from the rule.
 * @module domLens
 */
function updateAttributes(attributes, node, index, nodeList) {
  Object.keys(attributes).forEach((attrName) => {
    const attrValue = attributes[attrName];
    const isCallback = typeof attrValue === 'function';
    const isEvent = attrName.match(/on(\w+)/);

    // If the value is not a function, just set it and move on.
    if (!isCallback) {
      node[attrName] = attrValue;
      return;
    }

    // if it is an event with callback
    if (isEvent && isCallback) {
      bindEvent(node, isEvent[1], attrValue);
      return;
    }

    // set the value to the result of the attribute function
    node[attrName] = attrValue.call(this);
  });
}

module.exports = updateAttributes;
