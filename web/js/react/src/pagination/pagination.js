'use strict';

var Pagination = React.createClass({
    getInitialState: function () {
        console.log(this.props.dataSrc);

        return this.props;
    },
    render: function () {
        var hData = this.props.thead,
            bData = this.props.dataSrc,
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
                        return (
                            < Acthead dataSrc={hItem} />
                        );
                    })()
                }
                {
                    (function () {
                        return (
                            < Actbody dataSrc = {props.dataSrc} itemName = {bItem} />
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
        var data = this.props.dataSrc;

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
        var dts = this.props.dataSrc,
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
                        <Actr dataSrc = {data} />
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
        var dts = this.props.dataSrc;

        return (
            <tr>
                {
                    dts.map(function (dt, i) {
                        return (
                            <Actd dataSrc = {dt} />
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
            <td key = {this.props.dataSrc}>{this.props.dataSrc}</td>
        );
    }
});

