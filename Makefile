.PHONY: all lint test test.only docs
NPM_BIN=$(shell npm bin)

all: test docs

test: lint
	$(NPM_BIN)/mocha --opts mocha.opts src/**/*.test.js

test.only:
	$(NPM_BIN)/mocha --opts mocha.opts -R nyan src/**/*.test.js

lint:
	$(NPM_BIN)/eslint src/

docs:
	$(NPM_BIN)/jsdoc2md --files src/**/*.js > docs/README.md

plop:
	$(NPM_BIN)/plop
