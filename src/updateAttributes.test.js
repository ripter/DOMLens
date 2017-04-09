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

  it('sets node[key] = value', () => {
    updateAttributes({goodDog: 'Rose'}, node);
    expect(node.goodDog).to.eql('Rose');
  });

  it('attributes value can be a function', () => {
    updateAttributes({
      goodDog: () => 'Rose is a Good Dog'
    }, node);
    expect(node.goodDog).to.eql('Rose is a Good Dog');
  });

  it('passes "this" to attribute function', () => {
    const context = {name: 'Rose' };
    updateAttributes.call(context, {
      // Can't use arrow syntax if we want to set this/context
      goodDog: function() {
        return `a pup named ${this.name}`;
      }
    }, node);
    expect(node.goodDog).to.eql('a pup named Rose');
  });

  describe('onEvent attributes', () => {
    it('binds the event', (done) => {
      node.addEventListener = (type) => {
        // success if called
        expect(type).to.eql('click');
        done();
      }
      // call it
      updateAttributes({
        onclick: () => true,
      }, node);
    });
  });
});
