'use strict';

var Pagination = React.createClass({displayName: "Pagination",
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
            React.createElement("table", {className: "table dataTable tbl"}, 
                
                    (function () {
                        return (
                            React.createElement(Acthead, {dataSrc: hItem})
                        );
                    })(), 
                
                
                    (function () {
                        return (
                            React.createElement(Actbody, {dataSrc: props.dataSrc, itemName: bItem})
                        );
                    })()
                
            )
        );
    }
});

var Acthead = React.createClass({displayName: "Acthead",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var data = this.props.dataSrc;

        return (
            React.createElement("thead", null, 
                React.createElement(Actr, {dataSrc: data})
            )
        );
    }
});

var Actbody = React.createClass({displayName: "Actbody",
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var dts = this.props.dataSrc,
            bItem = this.props.itemName;
        return (
            React.createElement("tbody", null, 
            
                dts.map(function (dt, i) {
                    var data = [], idx = 0;
                    for(var k in dt){
                        data.push(dt[bItem[idx]['bItemName' + idx ++]]);
                    }
                    return (
                        React.createElement(Actr, {dataSrc: data})
                    );
                })
            
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
                
                    dts.map(function (dt, i) {
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
            React.createElement("td", {key: this.props.dataSrc}, this.props.dataSrc)
        );
    }
});

