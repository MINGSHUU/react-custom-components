import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete } from './autoComplete';
var SimpleComplete = function () {
    var lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
    var lakersWithNumber = [
        { value: 'bradley', number: 11 },
        { value: 'pope', number: 1 },
        { value: 'caruso', number: 4 },
        { value: 'cook', number: 2 },
        { value: 'cousins', number: 15 },
        { value: 'james', number: 23 },
        { value: 'AD', number: 3 },
        { value: 'green', number: 14 },
        { value: 'howard', number: 39 },
        { value: 'kuzma', number: 0 },
    ];
    var handleFetch = function (query) {
        return lakers.filter(function (name) { return name.includes(query); }).map(function (name) { return ({ value: name }); });
    };
    // const handleFetch = (query:string) => {
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    var renderOption = function (item) {
        var iItem = item;
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null,
                "Name: ",
                iItem.value),
            React.createElement("p", null,
                "Number: ",
                iItem.number)));
    };
    return (React.createElement(AutoComplete, { fetchSuggestions: handleFetch, onSelect: action('selected'), renderOption: renderOption }));
};
storiesOf('AutoComplete Component', module)
    .add('AutoComplete', SimpleComplete);
