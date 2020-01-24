install:
	npm install

build:
	npm build

link:
	npm link

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .