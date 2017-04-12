﻿var React = require('react/addons');
console.log('hello from jsx');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: "Ice Cream"
}, {
    name: "Waffles"
}, {
    name: "Candy",
    purchased:true
}, {
    name: "Snarks"
}];

React.render(<GroceryItemList items={initial}/>, app);