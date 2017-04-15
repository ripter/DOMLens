const expect = require('expect.js');
const domLens = require('./index.js');

describe('updateAttributes', () => {
  let rules, state;

  beforeEach(() => {
    document.body.innerHTML = `
    <div id="one" class="cell"></div>
    <div id="two" class="cell"></div>
    `;

    rules = {
      '.cell': {
        className: 'cell --did-render',
      },
    };
    state = {};
  });

  it('example', () => {
    // update the dom
    domLens(rules, state);
    // test that it was updated
    const nodeList = document.querySelectorAll('.cell');
    expect(nodeList.length).to.eql(2);
    expect(nodeList[0].outerHTML).to.eql('<div id="one" class="cell --did-render"></div>');
  });
});
