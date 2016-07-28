'use strict';

var Actable = React.createClass({displayName: "Actable",
    getInitialState: function () {
        console.log(this.props.dataSrc);
        console.log(this.props.thead);
        return this.props;
    },
    render: function () {
        return (
            React.createElement("table", null, 
                React.createElement(Acthead, {dataSrc: this.props.thead})

            )
        );
    }
});

var Acthead = React.createClass({displayName: "Acthead",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            React.createElement("thead", null, 
                React.createElement(Actr, {dataSrc: this.props.dataSrc})
            )
        );
    }
});

var Actbody = React.createClass({displayName: "Actbody",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            React.createElement("tbody", null

            )
        );
    }
});

var Actr = React.createClass({displayName: "Actr",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var dts = this.props.dataSrc;
        return (
            React.createElement("tr", null, 
                
                    dts.each(function (dt) {
                        return (
                            React.createElement(Actd, {dataSrc: dt})
                        );
                    })
                
            )
        );
    }
});

var Actd = React.createClass({displayName: "Actd",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            React.createElement("td", null, this.props)
        );
    }
});

