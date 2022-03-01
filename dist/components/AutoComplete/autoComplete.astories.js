var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { storiesOf } from '@storybook/react';
var SimpleComplete = function () {
    // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    // 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    // const lakersWithNumber = [
    //   {value: 'bradley', number: 11},
    //   {value: 'pope', number: 1},
    //   {value: 'caruso', number: 4},
    //   {value: 'cook', number: 2},
    //   {value: 'cousins', number: 15},
    //   {value: 'james', number: 23},
    //   {value: 'AD', number: 3},
    //   {value: 'green', number: 14},
    //   {value: 'howard', number: 39},
    //   {value: 'kuzma', number: 0},
    // ]
    // const handleFetch = (query: string) => {
    //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    // }
    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=" + query)
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            return items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    // const renderOption = (item: DataSourceType) => {
    //   const itemWithGithub = item as DataSourceType<GithubUserProps>
    //   return (
    //     <>
    //       <h2>Name: {itemWithGithub.value}</h2>
    //       <p>url: {itemWithGithub.url}</p>
    //     </>
    //   )
    // }
    return (React.createElement(React.Fragment, null)
    // <AutoComplete
    //   fetchSuggestions={handleFetch}
    //   onSelect={action('selected')}
    //   renderOption={renderOption}
    // />
    );
};
storiesOf('AutoComplete Component', module)
    .add('AutoComplete', SimpleComplete);
