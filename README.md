# Node.js Project Example

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickocoffeyo/nodejs-project-example.svg)](https://greenkeeper.io/)
[![CirlceCI Badge](https://circleci.com/gh/patrickocoffeyo/nodejs-project-example.svg?style=shield&circle-token=:circle-token)](https://circleci.com)
[![Dependency Status](https://david-dm.org/patrickocoffeyo/nodejs-project-example/master.svg)](https://david-dm.org/patrickocoffeyo/nodejs-project-example/master)
[![devDependency Status](https://david-dm.org/patrickocoffeyo/nodejs-project-example/master/dev-status.svg)](https://david-dm.org/patrickocoffeyo/nodejs-project-example/master#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/patrickocoffeyo/nodejs-project-example/badge.svg)](https://snyk.io/test/github/patrickocoffeyo/nodejs-project-example)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Repository containing the bare bones tools I use in every Node.js project (yarn, flow, eslint, prettier, husky, flow, babel, jest, snyk, greenkeeper, circleci, semantic-release)

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn
 * Greenkeeper.io configured to run on your repository.
 * CircleCI.com configured to run on your repository.

## Setup
 * Clone this repository.
 * In this repository's root folder, run `yarn`.

## Testing & Linting
This project uses [Jest](https://facebook.github.io/jest/), [ESlint](https://github.com/eslint/eslint) with the [AirBnb standard](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), and [Prettier](https://github.com/prettier/prettier) for testing, linting, and formatting.

 * All test files are suffixed with `.test.js`.
 * To run tests: `yarn test`.
 * To lint this codebase, run: `yarn lint`.
 * To format this codebase, run: `yarn prettier`.
 * To validate flow typing, run: `yarn flow`.
 * NOTE: lint and prettier will be run before a commit is made.

## Building
To build this project, simply run `yarn build`.

## Services and Integrations
This project contains CircleCI integration configuration. To get this working, do the following:
* Sign up for a CircleCI account.
* Add your project to Circle (Projects -> Add Project).
* Add `GH_TOKEN` and `NPM_TOKEN` environment variables to your CircleCI project. (See [this documentation](https://glebbahmutov.com/blog/how-to-setup-semantic-release-on-circle-ci/) for instructions on fetching those tokens).
* Update CircleCI shield in this README to point to the correct repository.

To set up Greenkeeper, do the following:
* Make sure you have CircleCI set up.
* Sign up for a Greenkeeper account.
* Add your project repository to Greenkeeper.
* Merge the initial Greenkeeper pull request.
* Update greenkeeper, dependencies, and devDependencies shields in this README to point to the correct repository.

To set up Snyk
* Sign up for a Snyk.io account.
* Enable Snyk for your repository.
* Update Snyk shield in this README to point to the correct repository.

## Automated Releases
To enable automated releases to NPM via semantic release, replace the `semantic-release` command in your package.json file with the following:

```javascript
...
  "semantic-release": "semantic-release pre ; npm publish ; semantic-release post",
...
```

This project isn't published to NPM, this step simply adds `npm publish` between semantic-release pre/post commands.
