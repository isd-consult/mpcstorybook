import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Container from 'components/atoms/layout/Container'
import Title from 'components/atoms/common/Title'
import Select from './Select'

storiesOf('Molecules/Forms', module)
  .addDecorator(withInfo)
  .add(
    'Select', 
    () => (
      <Container>
        <Title>Select</Title>
        <Select
          theme={select('Theme', [null, 'men', 'women'])}
          category={select('Category', [null, 'shadow'])}
          isDisabled={boolean('isDisabled', false)}
          isError={boolean('isError', false)}
          className={text('Class', '')}
          placeholder={text('Placeholder', 'Select Option')}
          options={object('options', options)}
          onChange={action('Change')}
        />
      </Container>
    ),
    {
      info: {
        propTables: [Select]
      }
    }
  )

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  }
]