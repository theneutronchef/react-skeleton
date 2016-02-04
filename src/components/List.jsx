var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "name":"ham"}, {"id":2, "name":"cheese"}, {"id":3, "name":"potatoes"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.name} />
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
