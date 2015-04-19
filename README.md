# react-tdd-guide
A series of examples on how to TDD React

## Getting started

1. install [nvm](https://github.com/creationix/nvm)
2. install io.js: `nvm install io.js`
   * Why? jsdom works nicely with io.js, which in turn allows us to test without a brower and a test runner.
3. Grab an editor or IDE. I recommend Webstorm, Atom, and VIM, in that order.
4. If using Webstorm, when configuring the mocha run configuration, add the following under "Extra Mocha options": `-r ./lib/jsdom.js  --compilers jsx:jsx-require-extension`

## Philosphy

* Avoid the need for runners and browsers
  * Acheived by using mocha, jsdom, and [my jsdom helper](https://github.com/zpratt/react-tdd-guide/blob/master/lib/jsdom.js)
* Use a mostly mockist approach
  * Achieved using proxyquire and sinon

## Layout

* [Basics](https://github.com/zpratt/react-tdd-guide/commits/master/basics) - Steps for TDD'ing the simplest of React components: An unordered list with no items. Start here if you're not familiar with TDD'ing React and want to see a simple introduction.

## Caveats

I am not a windows user, therefore this has only been tested on OSX. I am using jsdom to avoid depending on a browser and a runner, consequently, you'll need to install io.js. This should make things easier on windows users than this would have been pre-jsdom 4.x.
