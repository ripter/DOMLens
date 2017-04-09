const expect = require('expect.js');
const updateAttributes = require('./updateAttributes.js');

describe('updateAttributes', () => {
  let rules, node, index, nodeList;

  beforeEach(() => {
    rules = {
      '#app': {state: 'testing'},
    };
    nodeList = [
      {id: 'one'}, {id: 'two'},
    ];
    index = 0;
    node = nodeList[index];
  });

  it('sets rule value key:value on node', () => {
    updateAttributes({state: 'testing'}, node);
    expect(node.state).to.eql('testing');
  });
});
