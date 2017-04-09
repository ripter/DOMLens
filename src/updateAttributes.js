/**
 * [Description]
 * @param {Object} ruleValue - and object of attributes and values to set on the node.
 * @param {Node} node - the node matched by the rule.
 * @param {Number} index - the node's index in the nodeList.
 * @param {NodeList} nodeList - the nodeList returned from the rule.
 * @module domLens
 */
function updateAttributes(ruleValue, node, index, nodeList) {
  Object.keys(ruleValue).forEach((attrName) => {
    const attrValue = ruleValue[attrName];
    node[attrName] = attrValue;
  });
}

module.exports = updateAttributes;
