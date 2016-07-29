'use strict';

var Actable = React.createClass({
    getInitialState: function () {
        console.log(this.props.data);
        console.log(this.props.tHeadKey);

        return this.props;
    },
    render: function () {
        var hData = this.props.tHeadKey,
            bData = this.props.data,
            hItem = [],
            bItem = [],
            n = 0,
            props = this.props;

        this.props.onDataChange = function () {
            //this.setState();
            alert(32432432)
        };

        for(var k in hData){
            bItem.push({
                ['bItemName' + n] : hData[k]
            });

            hItem.push(k);
            n ++;
        }
        
        return (
            <table className="table dataTable tbl">
                {
                    (function () {
                        return (props.tHeadName);
                    })()
                }
                {
                    (function () {
                        return (
                            < Actbody data = {props.data} itemName = {bItem} />
                        );
                    })()
                }
            </table>
        );
    }
});

var Acthead = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var data = this.props.data;

        return (
            <thead>
                <Actr dataSrc = {data} />
            </thead>
        );
    }
});

var Actbody = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var dts = this.props.data,
            bItem = this.props.itemName;
        return (
            <tbody>
            {
                dts.map(function (dt, i) {
                    var data = [], idx = 0;
                    for(var k in dt){
                        data.push(dt[bItem[idx]['bItemName' + idx ++]]);
                    }
                    return (
                        <Actr data = {data} />
                    );
                })
            }
            </tbody>
        );
    }
});

var Actr = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var dts = this.props.data;

        return (
            <tr>
                {
                    dts.map(function (dt, i) {
                        return (
                            <Actd data = {dt} />
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
            <td key = {this.props.data}>{this.props.data}</td>
        );
    }
});

