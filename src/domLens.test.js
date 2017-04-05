const expect = require('expect.js');
const domLens = require('./domLens.js');

describe('domLens', () => {
  beforeEach(() => {
    // Mock the DOM API we use
    global.document = {
      querySelectorAll: () => ['one'],
    };
  });
  afterEach(() => {
    // clean up our mock
    delete global.document;
  });

  it('forEach context is set', (done) => {
    domLens({ 'div': 1 }, function() {
      // eslint-disable-next-line no-invalid-this
      expect(this).to.eql({state: 'data'});
      done();
    }, {state: 'data'});
  });

  it('forEach value is the rule value', (done) => {
    domLens({'#app': {test: 'mocha'}}, function(value) {
      expect(value).to.eql({test: 'mocha'});
      done();
    });
  });

  it('forEach element argument', (done) => {
    domLens({'#app': {test: 'mocha'}}, function(value, element) {
      expect(element).to.eql('one');
      done();
    });
  });

  it('forEach index argument', (done) => {
    domLens({'#app': {test: 'mocha'}}, function(value, element, index) {
      expect(index).to.eql(0);
      done();
    });
  });
});
