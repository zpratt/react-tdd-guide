'use strict';

var jsdom = require('jsdom');

/**
 * Borrowed from: https://github.com/tmpvar/jsdom/issues/135#issuecomment-68191941
 */
function applyJsdomWorkaround(window) {
    Object.defineProperties(window.HTMLElement.prototype, {
        offsetLeft: {
            get: function () {
                return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
            }
        },
        offsetTop: {
            get: function () {
                return parseFloat(window.getComputedStyle(this).marginTop) || 0;
            }
        },
        offsetHeight: {
            get: function () {
                return parseFloat(window.getComputedStyle(this).height) || 0;
            }
        },
        offsetWidth: {
            get: function () {
                return parseFloat(window.getComputedStyle(this).width) || 0;
            }
        }
    });
}

function setupDom() {
    var baseMarkup = '<!DOCTYPE html><html><head><title></title></head><body></body></html>',
        window = jsdom.jsdom(baseMarkup).defaultView;

    global.window = window;
    global.document = window.document;
    global.navigator = window.navigator;
    applyJsdomWorkaround(window);
}

setupDom();
