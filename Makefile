.PHONY: all lint test docs
NPM_BIN=$(shell npm bin)

all: test

test: lint
	$(NPM_BIN)/mocha src/**/*.test.js

lint:
	$(NPM_BIN)/eslint src/

docs:
	${NPM_BIN}/jsdoc2md --files src/**/*.js > docs/README.md
