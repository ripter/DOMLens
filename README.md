# DOMLens
Update the DOM with Javascript and CSS Selectors.


### Why forEach?
You might be wondering why domLens uses `forEach` instead of a `map` or a `reduce`. The DOM is very fast, if you use it directly instead of using an abstraction or `innerHTML`. This means we want functions that can work on the native Node. Perfect job for `forEach`.

Also, we can take advantage of the native [NodeList.forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
