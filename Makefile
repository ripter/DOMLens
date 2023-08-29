.PHONY: all lint test test.only docs clean
NPM_BIN=$(shell npm bin)

all: test docs

test: lint node_modules/
	npx mocha src/**/*.test.js

test.only: node_modules/
	npx mocha -R nyan src/**/*.test.js

lint: node_modules/
	npx eslint src/

docs: node_modules/
	npx jsdoc2md --files src/**/*.js > docs/README.md

plop: node_modules/
	npx plop

node_modules/: package.json
	npm install
	touch node_modules/

clean:
	-rm -rf ./node_modules
	-rm package-lock.json
