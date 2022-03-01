import React, {useState} from 'react'
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from './input'
import {action} from "@storybook/addon-actions";
const ControlledInput = () => {
  const [value, setValue] = useState<string>()
  return <Input value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}
export default {
  title: 'MComponents/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
    <>
      <Input {...args} />
      <ControlledInput />
    </>
    )

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  style: {'width': '300px'},
  placeholder: 'placeholder',
  onChange: action('changed')
};

export const DisabledInput = Template.bind({})
DisabledInput.args = {
    style: { width: 300 },
    placeholder: 'disabled input',
    disabled: true
}

export const IconInput = Template.bind({})
IconInput.args = {
    style: { width: 300 },
    placeholder: 'input with icon',
    icon: 'search'
}

export const SizeInput = Template.bind({})
SizeInput.args = {
    style: { width: 300 },
    placeholder: 'large size',
    size: 'lg'
}

export const PandInput = Template.bind({})
PandInput.args = {
    style: { width: 300 },
    defaultValue: 'google',
    append: '.com'
}

