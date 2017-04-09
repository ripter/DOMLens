## Modules

<dl>
<dt><a href="#module_domLens">domLens</a></dt>
<dd><p>Acts as a lens that matches a <a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList">NodeList</a> with a context.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#updateAttributes">updateAttributes</a></dt>
<dd><p>Updates node&#39;s attributes with the values from attribtues.</p>
</dd>
</dl>

<a name="module_domLens"></a>

## domLens
Acts as a lens that matches a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) with a context.


| Param | Type | Description |
| --- | --- | --- |
| rules | <code>Object</code> | Key is CSS Selector, Value is passed into the forEach with context. |
| forEach | <code>function</code> | A forEach callback function. It will be invoked for every Node matched in every rule. |
| context | <code>Object</code> | set as the `this` context in the forEach callback. |

<a name="updateAttributes"></a>

## updateAttributes
Updates node's attributes with the values from attribtues.

**Kind**: global variable  
**this**: <code>this._unbindEvents</code>  
**Example:**: domLens({
   '.cell': {
     // keys are Node attributes (including events), values are anything (including functions).
     className: () => '.cell .is-updated',
   }, updateAttributes, state);
 });  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Object</code> | and object of attributes and values to set on the node. |
| node | <code>Node</code> | the node matched by the rule. |
| index | <code>Number</code> | the node's index in the nodeList. |
| nodeList | <code>NodeList</code> | the nodeList returned from the rule. |

