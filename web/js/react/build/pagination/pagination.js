'use strict';

var Pagination = React.createClass({displayName: "Pagination",
    getInitialState: function () {
        console.log('pagination: ' + this.props.data);

        return this.props;
    },
    render: function () {
        var dts = [1,2,3,4,5,6,8];
        
        return (
            React.createElement("div", {className: "text-right"}, 
                React.createElement("ul", {className: "pagination"}, 
                
                    dts.map(function (dt, i) {
                        return (
                            React.createElement("li", {className: "paginate_button"}, 
                                React.createElement("a", {href: "#"}, dt)
                            )
                        );
                    })
                
                )
            )
        );
    }
});


