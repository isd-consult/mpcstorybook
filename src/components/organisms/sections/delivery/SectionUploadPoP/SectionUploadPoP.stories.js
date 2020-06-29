import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Container from 'components/atoms/layout/Container'
import SectionUploadPoP from './SectionUploadPoP'

storiesOf('Organisms/Sections/Delivery', module)
  .add('SectionUploadPoP', () => (
    <Container>
      <SectionUploadPoP
        theme={select('Theme', [null, 'men', 'women'])}
        className={text('Class', '')}
        uploadPoPFile={action('uploadPoPFile')}
        orderNumber={text('OrderNumber', '20012100834851')}
        step={number('Step', 1)}
      />
    </Container>
  ))
