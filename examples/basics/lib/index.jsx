(function () {
    'use strict';

    var RootComponent = require('../../../basics/lib/root-component.jsx'),
        React = require('react');

    function start() {
        var users = [
            {name: 'Brian Urlacher'},
            {name: 'Mike Singletary'},
            {name: 'Dick Butkus'}
        ];

        React.render(<RootComponent users={users}/>, document.body.querySelector('.example'));
    }

    start();
}());
