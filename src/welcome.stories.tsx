import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 vikingship 组件库 cc</h1>
        <h3>安装试试</h3>
        <code>
          npm install vikingship --save
        </code>
      </>
    )
  }, { info : { disable: true }})
