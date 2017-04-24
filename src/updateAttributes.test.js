const expect = require('expect.js');
const updateAttributes = require('./updateAttributes.js');

describe('updateAttributes', () => {
  let node, nodeList;

  beforeEach(() => {
    nodeList = [
      {id: 'one'}, {id: 'two'},
    ];
    node = nodeList[0];
  });

  it('sets node[key] = value', () => {
    updateAttributes({goodDog: 'Rose'}, node);
    expect(node.goodDog).to.eql('Rose');
  });

  describe('attribute value as a function', () => {
    it('calls function to set value', () => {
      updateAttributes({
        goodDog: () => 'Rose is a Good Dog',
      }, node);
      expect(node.goodDog).to.eql('Rose is a Good Dog');
    });

    it('passes "this" to function', () => {
      const context = {name: 'Rose' };
      updateAttributes.call(context, {
        // Can't use arrow syntax if we want to set this/context
        goodDog: function() {
          return `a pup named ${this.name}`;
        },
      }, node);
      expect(node.goodDog).to.eql('a pup named Rose');
    });

    describe('callback parameters', () => {
      it('(node)', (done) => {
        updateAttributes({
          goodDog: function(element) {
            expect(element).to.eql(node);
            done();
          },
        }, node);
      });

      it('(_, index)', (done) => {
        updateAttributes({
          goodDog: function(element, index) {
            expect(index).to.eql(0);
            done();
          },
        }, node, 0);
      });

      it('(_, _, array)', (done) => {
        updateAttributes({
          goodDog: function(element, index, array) {
            expect(array).to.eql(nodeList);
            done();
          },
        }, node, 0, nodeList);
      });
    });

  }); // attribute value as a function

  // test EventTarget API
  describe('onEvent attributes', () => {
    let context;
    beforeEach(() => {
      context = {
        isTesting: true,
      };
      node.addEventListener = function(eventName, callback) {
        // mock the api
        node[eventName] = callback.bind(node, {
          type: 'mockEvent',
        });
      };
    });

    it('binds the event', (done) => {
      // test that it called the dom API
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      node.addEventListener = (type) => {
        // success if called
        expect(type).to.eql('click');
        done();
      };
      // call it with context like domLens would.
      updateAttributes.call(context, {
        onclick: () => true,
      }, node);
    });

    it('sets this value on callback', (done) => {
      node.addEventListener = (type, callback) => {
        callback();
      };
      // call it with context like domLens would.
      updateAttributes.call(context, {
        onclick: function() {
          // test if the callback is bound to context
          expect(this.isTesting).to.eql(true);
          done();
        },
      }, node);
    });

    it('unbinds event', (done) => {
      // test that it calls the dom API
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
      node.removeEventListener = function() {
        done();
      };

      // call it once to set the event
      updateAttributes({
        onclick: () => {
          expect().to.fail('The old event should be removed');
          done();
        },
      }, node);

      // call it again to remove the event
      updateAttributes({}, node);
    });

    describe('callback parameters', () => {
      it('(event)', (done) => {
        updateAttributes({
          onclick: function(event) {
            expect(event).to.eql({
              type: 'mockEvent',
            });
            done();
          },
        }, node);
        // trigger the event
        node.click();
      });

      it('(_, node)', (done) => {
        updateAttributes({
          onclick: function(event, element) {
            expect(element).to.eql(node);
            done();
          },
        }, node);
        // trigger the event
        node.click();
      });

      it('(_, _, index)', (done) => {
        updateAttributes({
          onclick: function(event, element, index) {
            expect(index).to.eql(0);
            done();
          },
        }, node, 0);
        // trigger the event
        node.click();
      });

      it('(_, _, _, array)', (done) => {
        updateAttributes({
          onclick: function(event, element, index, array) {
            expect(array).to.eql(nodeList);
            done();
          },
        }, node, 0, nodeList);
        // trigger the event
        node.click();
      });
    });

  }); // onEvent attributes
});
