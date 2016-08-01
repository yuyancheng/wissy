'use strict';

var Pagination = React.createClass({
    getInitialState: function () {
        console.log('pagination: ' + this.props.data);

        return this.props;
    },
    render: function () {
        var dts = [1,2,3,4,5,6,8];
        
        return (
            <div className="text-right">
                <ul className="pagination">
                {
                    dts.map(function (dt, i) {
                        return (
                            <li className="paginate_button">
                                <a href='#'>{dt}</a>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
});


