
/**
 * Creates a lens on the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
 * using CSS Selectors to focus on a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
 * to set propteries on Nodes, HTMLElements, WebComponents, etc.
 */
// export default DOMLens {
//   constructor(rules) {
//     this.rules = rules;
//     this.events = [];
//   }
//
//   /**
//    * Updates the DOM
//    * @param {Object} state - object is bound to `this` when rule functions are called.
//    */
//   update(state) {
//     const { rules } = this;
//
//     // unbind the old events
//     // This prevents duplicate events and events on detached elements.
//     this.events.forEach((unbind) => {
//       unbind();
//     });
//
//     // rule key is a css selector
//     // loop over all the rules
//     Object.keys(rules).forEach((cssSelector) => {
//       const elements = document.querySelectorAll(cssSelector);
//       const properties = rules[cssSelector];
//       // skip selectors that do not match
//       if (elements.length === 0) { return; }
//
//       // console.log('setting', elements, properties);
//       // for each element matched by the css selector
//       // update it using the properties object
//       elements.forEach(this.updateElement.bind(this, state, properties));
//     });
//   }
// }
