# DOMLens
Update the DOM with Javascript and CSS Selectors.


### `this` aka `context`
Functions (non-arrow functions) have access to a `this` value. Any context passed to `domLens` will be set as the the `this` value for the `forEach` callback and any functions it invokes.

This is important for things like event binding in the `updateAttributes` function. It needs a way to store the unbind function. We would add it in as yet another argument. But it is also easy to use `this._unbindEvents`.

### Why forEach?
You might be wondering why domLens uses `forEach` instead of a `map` or a `reduce`. The DOM is very fast, if you use it directly instead of using an abstraction or `innerHTML`. This means we want functions that can work on the native Node. Perfect job for `forEach`.

Also, we can take advantage of the native [NodeList.forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
