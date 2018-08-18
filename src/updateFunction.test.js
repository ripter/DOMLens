const expect = require('expect.js');
const updateFunction = require('./updateFunction.js');

describe('updateFunction', () => {
  let node, nodeList;

  beforeEach(() => {
    nodeList = [
      {id: 'one'}, {id: 'two'},
    ];
    node = nodeList[0];
  });

  describe('callback parameters', () => {
    it('(node)', (done) => {
      updateFunction(function(elm) {
        expect(elm).to.eql(node);
        done();
      }, node, 1, [node]);
    });

    it('(_, index)', (done) => {
      updateFunction(function(elm, index) {
        expect(index).to.eql(3);
        done();
      }, node, 3);
    });

    it('(_, _, array)', (done) => {
      updateFunction(function(elm, index, elmList) {
        expect(elmList).to.eql(nodeList);
        done();
      }, node, 0, nodeList);
    });
  }); // callback parameters
});
