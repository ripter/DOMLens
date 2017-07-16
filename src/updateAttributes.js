// use [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
const bindEvent = require('@ripter/bindevent/src/bind.dom.js');
const UNBIND = Symbol('unbind');

/**
 * Updates node's attributes with the values from attribtues.
 * @example:
 domLens({
   '.cell': {
     // keys are Node attributes (including events), values are anything (including functions).
     className: () => '.cell .is-updated',
   }, updateAttributes, state);
 });
 * @param {Object} attributes - and object of attributes and values to set on the node.
 * @param {Node} node - the node matched by the rule.
 * @param {Number} index - the node's index in the nodeList.
 * @param {NodeList} nodeList - the nodeList returned from the rule.
 * @name updateAttributes
 */
function updateAttributes(attributes, node, index, nodeList) {
  //TODO: Only unbind listeners that are dead/replaced. Don't unbind if the listener hasn't changed.
  // unbind any existing event listeners before we bind the new ones.
  if (typeof node[UNBIND] === 'function') {
    node[UNBIND]();
  }

  Object.keys(attributes).forEach((attrName) => {
    const attrValue = attributes[attrName];
    const isCallback = typeof attrValue === 'function';
    const isEvent = attrName.match(/on(\w+)/);
    let callback;

    // If the value is not a function, just set it and move on.
    if (!isCallback) {
      node[attrName] = attrValue;
      return;
    }

    // bind the function context.
    // eslint-disable-next-line no-invalid-this
    callback = attrValue.bind(this);

    // if it is an event with callback
    if (isEvent && isCallback) {
      //TODO: Don't re-bind on every update. Only bind the first time.
      // bind the event handler. save the unbind method on the node.
      node[UNBIND] = bindEvent(node, isEvent[1].toLocaleLowerCase(), (evt) => {
        callback(evt, node, index, nodeList);
      });
      return;
    }
    // Not an event
    // set the value to the result of the attribute function
    node[attrName] = callback(node, index, nodeList);
  });
}

module.exports = updateAttributes;
