import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import BrandCheckBox from './BrandCheckBox'

storiesOf('Molecules/Forms/Checkboxs', module)
  .add('BrandCheckBox', () => (
    <div style={{width: 100}}>
      <BrandCheckBox
        className={text('Class', '')}
        name={text('name', 'puma')}
        value={text('value', 'value')}
        image={text('Brand Image', 
'https://nuvali.ph/wp-content/uploads/sites/8/2018/04/Puma-Logo.png')}
        checked={boolean('checked', false)}
        onChange={action('onChange')}
      />
    </div>
  ))
