<a name="module_domLens"></a>

## domLens
Acts as a lens that matches a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) with a context.


| Param | Type | Description |
| --- | --- | --- |
| rules | <code>Object</code> | Key is CSS Selector, Value is passed into the forEach with context. |
| forEach | <code>function</code> | A forEach callback function. It will be invoked for every Node matched in every rule. |
| context | <code>Object</code> | set as the `this` context in the forEach callback. |

