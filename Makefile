.PHONY: all lint test test.only docs clean
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
	npm install
	touch node_modules/

clean:
	-rm -rf ./node_modules
	-rm package-lock.json
	-rm yarn.lock
	-rm yarn-error.log
