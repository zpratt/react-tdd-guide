# react-tdd-guide
A series of examples on how to TDD React

## Getting started

1. install [nvm](https://github.com/creationix/nvm)
- Grab an editor or IDE. I recommend Webstorm, Atom, and VIM, in that order.
- `git clone` ...
- `nvm install 4` OR if v4 of node.js is installed, `nvm use`
- `npm i`

## How to use this guide

Each section is broken out into its own folder, starting with [basics](https://github.com/zpratt/react-tdd-guide/tree/master/basics). What you'll find there is the finished example. I am experimenting with using the [commit history](https://github.com/zpratt/react-tdd-guide/commits/master/basics) and comments to drive the guide itself. Feedback on whether this works or not would be appreciated.

Each commit that is suffixed with **"- red"** can be checked out separately to examine the failing test. Each commit that is suffixed with **"- green"** shows how I finally passed the failing assertion.

Looking at the history for each section will show you only the steps needed to drive that part of the application.

## Philosophy

* Avoid the need for runners and browsers
  * Achieved by using mocha, jsdom, and [my jsdom helper](https://github.com/zpratt/react-tdd-guide/blob/master/lib/jsdom.js)
* Use a mostly mockist approach
  * Achieved using proxyquire and sinon

## Table of Contents

* [Basics](https://github.com/zpratt/react-tdd-guide/commits/master/basics) - Steps for TDD'ing the simplest of React components: An unordered list of items. Start here if you're not familiar with TDD'ing React and want to see a simple introduction.
  * [Running version](http://zpratt.github.io/react-tdd-guide/examples/basics/)
* [Simple event handling](https://github.com/zpratt/react-tdd-guide/commits/master/event-handling) (WIP)
* Centralized state management techniques (not done)
* Server interactions with Ampersand collections and models (not done)
* React router (not done)

## Running the tests for a section

* `npm run <section name>`

## Running all tests

* `npm test`

## Contributing

Please feel free to open an issue for:

* A question on how to do something
* A request for further clarification

Use a pull request for

* Suggestions on changing how something is tested
* To add an example you think would be valuable

## Caveats

I am not a windows user, therefore this has only been tested on OSX.
