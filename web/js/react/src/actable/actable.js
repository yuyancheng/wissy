'use strict';

var Actable = React.createClass({
    getInitialState: function () {
        console.log(this.props.dataSrc);
        return {};
    },
    render: function () {
        return (
            <table>

            </table>
        );
    }
});

var Actbody = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <tbody>

            </tbody>
        );
    }
});

