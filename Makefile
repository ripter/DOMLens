.PHONY: all lint test test.only docs
NPM_BIN=$(shell npm bin)

all: test docs

test: lint node_modules/
	$(NPM_BIN)/mocha --opts mocha.opts src/**/*.test.js

test.only: node_modules/
	$(NPM_BIN)/mocha --opts mocha.opts -R nyan src/**/*.test.js

lint: node_modules/
	$(NPM_BIN)/eslint src/

docs: node_modules/
	$(NPM_BIN)/jsdoc2md --files src/**/*.js > docs/README.md

plop: node_modules/
	$(NPM_BIN)/plop

node_modules/: package.json
	yarn install
	touch node_modules/
