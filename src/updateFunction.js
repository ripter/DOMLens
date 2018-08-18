/**
 * Run a function for every matched element.
 * @type forEach
 * @param  {Function} callback - function to invoke with the element.
 * @param {Node} node - the node matched by the rule.
 * @param {Number} index - the node's index in the nodeList.
 * @param {NodeList} nodeList - the nodeList returned from the rule.
 */
function updateFunction(callback, node, index, nodeList) {
  callback(node, index, nodeList);
}
module.exports = updateFunction;
