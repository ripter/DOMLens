# DOMLens
Update the DOM with Javascript and CSS Selectors.

## Install

* yarn
  * `yarn add @ripter/domlens`
* npm
  * `npm install --save @ripter/domlens`

## Usage
```
import domLens from '@ripter/domlens';

export default function render(state) {

  // Updates the matching elements on the dom.
  domLens({
    '.gameboard  grid-2d': {
      // Set the .grid property on the matching elements
      grid: function() {
        return state.gameboard;
      },
    },
    '.inventory grid-2d': {
      // Set the .grid property on the matching elements
      grid: function(elm, index) {
        // Use element index to distinguish the specific inventory item.
        return state.inventory[index];
      },
      // Bind events; They will automatically unbind when the element is removed.
      onclick: function(evt, elm, index) {
        state.action('click', index);  
      }
    },
  }, state);

  return state;
};
```

## Concept

Instead of abstracting away the DOM, we want to make it easier to work with Elements and Web Components. A **len** is just like a magnifying glass. It allows you to focus on a small part of a much bigger system. `domLens` allows you to focus on elements using CSS selectors. _(It's `querySelectorAll` under the hood.)_

By using a lens to select specific elements, you can set properties and events matching your state system.

*domLens* allows you to map your application state to elements on the page. This might seem backwards if you are used to React and Angular systems.




### `this` aka `context`
Functions (non-arrow functions) have access to a `this` value. Any context passed to `domLens` will be set as the the `this` value for the `forEach` callback and any functions it invokes.


### Why forEach?
You might be wondering why domLens uses `forEach` instead of a `map` or a `reduce`. The DOM is very fast, if you use it directly instead of using an abstraction or `innerHTML`. This means we want functions that can work on the native Node. Perfect job for `forEach`.

Also, we can take advantage of the native [NodeList.forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
