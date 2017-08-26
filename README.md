# nodejs

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickocoffeyo/nodejs.svg)](https://greenkeeper.io/)
[![CirlceCI Badge](https://circleci.com/gh/patrickocoffeyo/nodejs.svg?style=shield&circle-token=:circle-token)](https://circleci.com)

Repository containing the bare bones tools I use in every Node.js project (yarn, eslint, prettier, husky, etc)

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn

## Setup
 * Clone this repository.
 * In this repository's root folder, run `yarn`.

## Testing & Linting
 * All tests are located in the `test` directory.
 * To run tests, and coverage tools: `yarn test`.
 * To lint this codebase, run: `yarn lint`.
 * To format this codebase, run: `yarn prettier`.
 * To validate flow typing, run: `yarn flow`.
 * NOTE: lint and prettier will be run before a commit is made.

## Building
To build this project, simply run `yarn build`.
