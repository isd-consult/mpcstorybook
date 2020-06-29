import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, object } from '@storybook/addon-knobs'

import Text from 'components/atoms/common/Text'
import BasicChart from './BasicChart'

function render(item) {
  return (
    <div style={{
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'}}
    > 
      <div>
        <Text>{item.label}</Text>
        <Text
          size="xxxl"
          fw="bold"
          theme="men"
        >
          {`${item.value}%`}
        </Text>
      </div>
    </div>
  )
}

storiesOf('Molecules/Charts', module)
  .add('BasicChart', () => (
    <BasicChart
      className={text('Class', '')}
      height={number('Height', 250)}
      items={object('items', items)}
      attr="value"
      render={render}
    />
  ))

const items = [
  {label: 'Silver', value: 10},
  {label: 'Gold', value: 20},
  {label: 'Platinum', value: 25},
  {label: 'Diamond', value: 30}
]