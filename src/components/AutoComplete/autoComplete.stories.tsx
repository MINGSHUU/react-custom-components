import React from 'react'
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {AutoComplete, DataSourceType} from './autoComplete'
import {action} from "@storybook/addon-actions";

interface LakerPlayerProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

export default {
  title: 'MComponents/AutoComplete',
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

// const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
//   'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const lakersWithNumber = [
  {value: 'bradley', number: 11},
  {value: 'pope', number: 1},
  {value: 'caruso', number: 4},
  {value: 'cook', number: 2},
  {value: 'cousins', number: 15},
  {value: 'james', number: 23},
  {value: 'AD', number: 3},
  {value: 'green', number: 14},
  {value: 'howard', number: 39},
  {value: 'kuzma', number: 0},
]

// const handleFetch = (query: string) => {
//   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
// }

// const handleFetch = (query:string) => {
//   return lakersWithNumber.filter(player => player.value.includes(query))
// }

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
}

// const renderOption = (item:DataSourceType) => {
//   const iItem = item as DataSourceType<LakerPlayerProps>;
//   return (
//       <>
//         <h2>Name: {iItem.value}</h2>
//         <p>Number: {iItem.number}</p>
//       </>
//   )
// }

const renderOption = (item:DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>;
  return (
      <>
        <h2>Name: {itemWithGithub.login}</h2>
        <p>url: {itemWithGithub.url}</p>
      </>
  )
}

const Template: ComponentStory<typeof AutoComplete> = (args) =>
    <AutoComplete
        fetchSuggestions={handleFetch}
        renderOption={renderOption}
        onSelect={action('selected')}
    />
// {...args}

export const Default = Template.bind({});
