# nodejs

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickocoffeyo/nodejs.svg)](https://greenkeeper.io/)
[![CirlceCI Badge](https://circleci.com/gh/patrickocoffeyo/nodejs.svg?style=shield&circle-token=:circle-token)](https://circleci.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Repository containing the bare bones tools I use in every Node.js project (yarn, eslint, prettier, husky, etc)

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn
 * Greenkeeper.io configured to run on your repository.
 * CircleCI.com configured to run on your repository.

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

## Continuous Integration and Greenkeeper
This project contains CircleCI integration configuration. To get this working, do the following:
* Sign up for a CircleCI account.
* Add your project to Circle (Projects -> Add Project).
* Add `GH_TOKEN` and `NPM_TOKEN` environment variables to your CircleCI project. (See [this documentation](https://glebbahmutov.com/blog/how-to-setup-semantic-release-on-circle-ci/) for instructions on fetching those tokens).
* Tada!

To set up Greenkeeper, do the following:
* Make sure you have CircleCI set up.
* Sign up for a Greenkeeper account.
* Add your project repository to Greenkeeper.
* Merge the initial Greenkeeper pull request.

## TODO
- [ ] Add greenkeeper lock integration.
- [ ] Add snyk.io integration.
