'use strict';

var Actable = React.createClass({
    getInitialState: function () {
        console.log(this.props.data);
        console.log(this.props.tHeadKey);

        return {source: this.props.data, head: this.props.tHeadKey};
    },
    render: function () {
        var hData = this.state.head,
            bData = this.state.source,
            hItem = [],
            bItem = [],
            n = 0,
            source = this.state.source;

        var that = this;

        //this.props.onDataChange();
        this.props.onDataChange.setSt = function (dt) {
            that.setState({source: dt});
            //alert(32432432)
        };

        for(var k in hData){
            bItem.push({
                ['bItemName' + n] : hData[k]
            });

            hItem.push(k);
            n ++;
        }
        
        return (
            <div>
                <table className = {that.props.className}>
                    {
                        (function () {
                            return (that.props.tHeadName);
                        })()
                    }
                    {
                        (function () {
                            return (
                                < Actbody data = {source} itemName = {bItem} />
                            );
                        })()
                    }
                </table>
                {
                    (function () {
                        if(that.props.pagination && Pagination && typeof Pagination === 'function'){
                            return (
                                < Pagination data = {source} options = {that.props.pagination} />
                            );
                        }
                    })()
                }
            </div>
        );
    }
});

var Acthead = React.createClass({
    getInitialState: function () {
        return {source: this.props};
    },
    render: function () {
        var data = this.state.source.data;

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

var Pagination = React.createClass({
    getInitialState: function () {
        console.log('pagination: ' + this.props.data);

        return this.props;
    },
    turnTo: function (idx) {
        alert(idx)
    },
    render: function () {
        var that = this;
        var dts = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        var pageSize = 5;
        var total = 66;
        var start = 0;
        var pageIndex = 0;
        var linkSize = that.props.options.linkSize;
        var linkTotal = 0;
        var links = [];
        var len = 0;

        //if(linkSize < pageSize){
            len = Math.ceil(total / pageSize);
            for(var i=1; i<=len; i++){
                links.push(i);
            }
        //}

        return (
            <div className="text-right">
                <ul className="pagination">
                    {
                        (function () {
                            return (
                                <li className="paginate_button" onClick={that.turnTo}>
                                    <a href='#'>{'<'}</a>
                                </li>
                            );
                        })()
                    }
                    {
                        links.map(function (dt, i) {
                            if (i + 1 === linkSize) {
                                return (
                                    <li className="paginate_button disabled">
                                        <a href='#'>{'...'}</a>
                                    </li>
                                );
                            }else if(i === linkSize){
                                return (
                                    <li className="paginate_button" param={len} onClick={that.turnTo}>
                                        <a href='#'>{len}</a>
                                    </li>
                                );
                            }else{
                                return (
                                    <li className="paginate_button" param={i + 1} onClick={that.turnTo}>
                                        <a href='#'>{i + 1}</a>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        (function () {
                            return (
                                <li className="paginate_button" onClick={that.turnTo}>
                                    <a href='#'>{'>'}</a>
                                </li>
                            );
                        })()
                    }
                </ul>
            </div>
        );
    }
});

