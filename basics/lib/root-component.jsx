'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <ul>
                {this.props.users.map(function () {
                    return (
                        <li />
                    );
                })}
            </ul>
        );
    }
});
