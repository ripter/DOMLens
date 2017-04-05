.PHONY: all lint test
NODE_BIN=$(shell npm bin)

all: test

test: lint
	$(NODE_BIN)/mocha src/**/*.test.js

lint:
	$(NODE_BIN)/eslint src/
