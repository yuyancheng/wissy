'use strict';

var Actable = React.createClass({displayName: "Actable",
    getInitialState: function () {
        console.log(this.props.dataSrc);
        return {};
    },
    render: function () {
        return (
            React.createElement("table", null

            )
        );
    }
});

var Actbody = React.createClass({displayName: "Actbody",
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            React.createElement("tbody", null

            )
        );
    }
});

