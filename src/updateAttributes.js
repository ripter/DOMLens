// use [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
const bindEvent = require('@ripter/bindevent/src/bind.dom.js');

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
 * @this this._unbindEvents is set to a function that will unbind any events set.
 * @name updateAttributes
 */
function updateAttributes(attributes, node, index, nodeList) {
  Object.keys(attributes).forEach((attrName) => {
    const attrValue = attributes[attrName];
    const isCallback = typeof attrValue === 'function';
    const isEvent = attrName.match(/on(\w+)/);
    const hasEvents = typeof this._unbindEvents === 'function';

    // If the value is not a function, just set it and move on.
    if (!isCallback) {
      node[attrName] = attrValue;
      return;
    }

    // if it is an event with callback
    if (isEvent && isCallback) {
      if (hasEvents) {
        this._unbindEvents();
      }
      this._unbindEvents = bindEvent(node, isEvent[1].toLocaleLowerCase(), attrValue);
      return;
    }

    // set the value to the result of the attribute function
    node[attrName] = attrValue.call(this);
  });
}

module.exports = updateAttributes;
