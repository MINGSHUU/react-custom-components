import React from 'react';

// import {Meta, Story} from "@storybook/react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Button from './button';

export default {
    title: 'MComponents/Button',
    component: Button,
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
    /* decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ],*/
    //👇 Creates specific argTypes
    argTypes: {
        size: {
            options: ['lg','sm'],
            control: { type: 'radio' }
        },
        btnType: {
            options: ['primary', 'default', 'danger', 'link'],
            control: { type: 'radio' }
        }
    },
    args: {
        disabled: false,
    },
} as ComponentMeta<typeof Button>;

/* export const Default: React.VFC<{}> = () => <Button>default</Button>;

export const Primary: Story = () => <Button btnType='primary' size='lg'>primary</Button>;
Primary.storyName = 'The primary';

export const Danger: React.VFC<{}> = () => <Button btnType='danger'>danger</Button>;

export const Link: React.VFC<{}> = () => <Button btnType='link'>link</Button>; */

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    btnType: 'default',
    children: 'DefaultButton',
    size: 'sm'
};

export const Primary = Template.bind({});
Primary.args = {
    btnType: 'primary',
    children: 'PrimaryButton'
};
/*
Primary.loaders = [
    async () => {
        return fetch(`https://api.github.com/search/users?q=zhangmings`)
            .then(res => res.json())
            .then(({ items }) => {
                console.log(items)
                return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
            })
    }
];
*/

export const Danger = Template.bind({});
Danger.args = {
    btnType: 'danger',
    children: 'DangerButton',
    size: 'lg'
};

export const Link = Template.bind({});
Link.args = {
    btnType: 'link',
    children: 'LinkButton',
    size: 'lg',
    href: 'https://google.com'
};

