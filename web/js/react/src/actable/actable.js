'use strict';

var Actable = React.createClass({
    getInitialState: function () {
        console.log(this.props.data);
        console.log(this.props.tHeadKey);

        this.data = [];
        this.pageSize = 10;
        this.total = this.props.data.length;

        if(this.props.options.lengthMenu && this.props.options.lengthMenu.length > 0){
            this.menu = this.props.options.lengthMenu;
            this.pageSize = this.menu[0];
        }

        this.updateDataSource(0, this.pageSize);

        return {
            source: this.props.data,
            head: this.props.tHeadKey,
            pageSize: 10,
            linkSize: 5
        };
    },
    updateDataSource: function (index, pageSize) {
        console.log(index + ', ' + pageSize);
        this.data = [];
        if(pageSize) {
            this.pageSize = pageSize;
        }
        for (var i = index * this.pageSize; i < (index + 1) * this.pageSize; i++) {
            this.data.push(this.props.data[i]);
        }
        this.setState({source: this.data});
    },
    render: function () {
        var hData = this.state.head,
            hItem = [],
            bItem = [],
            n = 0,
            source = this.state.source;

        var that = this;

        this.props.onDataChange.setSt = function (dt) {
            that.updateDataSource(0, {source: dt});
        };

        for (var k in hData) {
            bItem.push({
                ['bItemName' + n]: hData[k]
            });

            hItem.push(k);
            n++;
        }

        return (
            <div>
                {
                    (function () {
                        if (that.menu && that.menu.length > 0) {
                            return (
                                <div className="col-md-1">
                                    <LengthMenu options={that.menu} host={that}/>
                                </div>
                            );
                        }
                    })()
                }
                <table className={that.props.className}>
                    {
                        (function () {
                            return (that.props.tHeadName);
                        })()
                    }
                    {
                        (function () {
                            return (
                                <Actbody data={that.data} itemName={bItem}/>
                            );
                        })()
                    }
                </table>
                {
                    (function () {
                        if (that.props.pagination && Pagination && typeof Pagination === 'function') {
                            if(that.pageSize){
                                that.props.pagination.pageSize = that.pageSize
                            }
                            return (
                                <Pagination total={that.total} options={that.props.pagination} host={that}/>
                            );
                        }
                    })()
                }
            </div>
        );
    }
});

var LengthMenu = React.createClass({
    getInitialState: function () {
        return this.props;
    },
    change: function (e, d) {
        var evt = e || window.event,
            target = evt.target || evt.srcElement;
        this.props.host.updateDataSource(0, this.props.options[target.selectedIndex]);
    },
    render: function () {
        var that = this,
            data = this.props.options;

        function getVal(val) {
            that.value = val;
        }

        return (
            <select className="form-control" onChange={that.change}>
                {
                    data.map(function (dt, i) {
                        return (
                            <option value={dt} key={i}>{dt}</option>
                        );
                    })
                }
            </select>
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
                <Actr dataSrc={data}/>
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
                    for (var k in dt) {
                        data.push(dt[bItem[idx]['bItemName' + idx++]]);
                    }
                    return (
                        <Actr data={data}/>
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
                            <Actd data={dt}/>
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
            <td key={this.props.data}>{this.props.data}</td>
        );
    }
});

var Pagination = React.createClass({
    getInitialState: function () {
        //console.log('pagination: ' + this.props.total);
        this.index = 0;
        this.size = 0;
        return this.props;
    },
    turnTo: function (idx) {
        this.index = idx;
        this.props.host.updateDataSource(idx);
    },
    prev: function () {
        if(this.index > 0){
            this.index --;
        }
        this.turnTo(this.index);
    },
    next: function () {
        if(this.index < this.size - 1){
            this.index ++;
        }
        this.turnTo(this.index);
    },
    render: function () {
        var that = this;
        var dts = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        var pageSize = that.props.options.pageSize;
        var total = 66;
        var start = 0;
        var pageIndex = 0;
        var linkSize = 10;
        var links = [];

        if (that.props.options.linkSize) {
            linkSize = that.props.options.linkSize;
        }

        total = this.props.total;

        that.size = Math.ceil(total / pageSize);
        for (var i = 1; i <= that.size; i++) {
            links.push(i);
        }

        return (
            <div className="text-right">
                <ul className="pagination">
                    {
                        (function () {
                            return (
                                <li className="paginate_button" onClick={that.prev}>
                                    <a href='#'>{'<'}</a>
                                </li>
                            );
                        })()
                    }
                    {
                        links.map(function (dt, i) {

                            if (i > linkSize) {
                                // linkSize后面的页码不显示
                                return;
                            }

                            if (links.length > linkSize && i + 1 === linkSize) {
                                return (
                                    <li className="paginate_button disabled">
                                        <a href='#'>{'...'}</a>
                                    </li>
                                );
                            } else if (i === linkSize) {
                                return (
                                    <li className="paginate_button" param={that.size} onClick={that.turnTo.bind(that,that.size-1)}>
                                        <a href='#'>{that.size}</a>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="paginate_button" param={i + 1} onClick={that.turnTo.bind(that,i)}>
                                        <a href='#'>{i + 1}</a>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        (function () {
                            return (
                                <li className="paginate_button" onClick={that.next}>
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

