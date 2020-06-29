import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, number } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import UploadPoP from './UploadPoP'

storiesOf('Templates/Checkout', module)
  .add('UploadPoP', () => (
    <UploadPoP
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      uploadPoPFile={action('uploadPoPFile')}
      orderNumber={text('OrderNumber', '20012100834851')}
      step={number('Step', 1)}
    />
  ))
  