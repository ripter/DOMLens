
/**
 *
 */
function domLens(rules, forEach, context) {
  // rule key is a css selector
  // loop over all the rules
  Object.keys(rules).forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    const value = rules[selector];
    // skip selectors that do not match
    if (elements.length === 0) { return; }

    elements.forEach(forEach.bind(context, value));
  });
}

module.exports = domLens;
