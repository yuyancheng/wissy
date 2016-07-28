'use strict';

var Actable = React.createClass({
    getInitialState: function () {
        console.log(this.props.dataSrc);
        console.log(this.props.thead);
        return this.props;
    },
    render: function () {
        return (
            <table>
                < Acthead dataSrc = {this.props.thead}/>

            </table>
        );
    }
});

var Acthead = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            <thead>
                <Actr dataSrc = {this.props.dataSrc} />
            </thead>
        );
    }
});

var Actbody = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            <tbody>

            </tbody>
        );
    }
});

var Actr = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var dts = this.props.dataSrc;
        return (
            <tr>
                {
                    dts.each(function (dt) {
                        return (
                            <Actd dataSrc = {dt}/>
                        );
                    })
                }
            </tr>
        );
    }
});

var Actd = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        return (
            <td>{this.props}</td>
        );
    }
});

