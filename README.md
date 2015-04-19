# react-tdd-guide
A series of examples on how to TDD React

## Getting started

1. install [nvm](https://github.com/creationix/nvm)
2. install io.js: `nvm install io.js`
   * Why? jsdom works nicely with io.js, which in turn allows us to test without a brower and a test runner.
3. Grab an editor or IDE. I recommend Webstorm, Atom, and VIM, in that order.
4. If using Webstorm, when configuring the mocha run configuration, add the following under "Extra Mocha options": `-r ./lib/jsdom.js  --compilers jsx:jsx-require-extension`

## Caveats

I am not a windows user, therefore this has only been tested on OSX.
