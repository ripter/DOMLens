const expect = require('expect.js');
const domLens = require('./domLens.js');

describe('domLens', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="app"></div>
    `;
  });

  it('forEach context is set', (done) => {
    domLens(function() {
      // eslint-disable-next-line no-invalid-this
      expect(this).to.eql({state: 'data'});
      done();
    }, { 'div': 1 }, {state: 'data'});
  });

  it('forEach value is the rule value', (done) => {
    domLens(function(value) {
      expect(value).to.eql({test: 'mocha'});
      done();
    }, {'#app': {test: 'mocha'}});
  });

  it('forEach element argument', (done) => {
    domLens(function(value, element) {
      expect(element.outerHTML).to.eql('<div id="app"></div>');
      done();
    }, {'#app': {test: 'mocha'}});
  });

  it('forEach index argument', (done) => {
    domLens(function(value, element, index) {
      expect(index).to.eql(0);
      done();
    }, {'#app': {test: 'mocha'}});
  });
});
