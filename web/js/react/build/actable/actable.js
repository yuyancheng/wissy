'use strict';

var Actable = React.createClass({displayName: "Actable",
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
            React.createElement("table", {className: "table dataTable tbl"}, 
                
                    (function () {
                        return (props.tHeadName);
                    })(), 
                
                
                    (function () {
                        return (
                            React.createElement(Actbody, {data: props.data, itemName: bItem})
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
        var data = this.props.data;

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
        var dts = this.props.data,
            bItem = this.props.itemName;
        return (
            React.createElement("tbody", null, 
            
                dts.map(function (dt, i) {
                    var data = [], idx = 0;
                    for(var k in dt){
                        data.push(dt[bItem[idx]['bItemName' + idx ++]]);
                    }
                    return (
                        React.createElement(Actr, {data: data})
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
        var dts = this.props.data;

        return (
            React.createElement("tr", null, 
                
                    dts.map(function (dt, i) {
                        return (
                            React.createElement(Actd, {data: dt})
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
            React.createElement("td", {key: this.props.data}, this.props.data)
        );
    }
});

