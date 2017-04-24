
/**
 * Acts as a lens that matches a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) with a context.
 * Loops over rules document.querySelectorAll the key.
 * @param {Function} forEach - A forEach callback function. It will be invoked for every Node matched in every rule.
 * @param {Object} rules - Key is CSS Selector, Value is passed into the forEach with context.
 * @param {Object} context - set as the `this` context in the forEach callback.
 * @module domLens
 */
function domLens(forEach, rules, context) {
  // rule key is a css selector
  // loop over all the rules
  Object.keys(rules).forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    const rule = rules[selector];

    // skip selectors that do not match
    if (elements.length === 0) { return; }
    // call the forEach function bound to context and rule value.
    elements.forEach(forEach.bind(context, rule));
  });
}

module.exports = domLens;
