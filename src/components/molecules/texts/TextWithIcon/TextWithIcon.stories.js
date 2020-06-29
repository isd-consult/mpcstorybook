import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import TextWithIcon from './TextWithIcon'

storiesOf('Molecules/Texts', module)
  .add('TextWithIcon', () => (
    <TextWithIcon
      isSecondary={boolean('Secondary', false)}
      theme={select('Theme', [null, 'men', 'women'])}
      iconName={text('Icon Name', 'truck')}
      iconSize={text('Icon Size', '40')}
      title={text('title', '1-3 Working Days')}
      titleSize={text('titleSize', '')}
      titleWeight={select('Font Weight', [
        null, 'light', 'normal', 'medium', 'bold'
      ])}
      description={text('description', 'From payment received')}
      descriptionSize={text('descriptionSize', '')}
      className={text('Class', '')}
      href={text('Href', '/')}
      linkText={text('Link Text', 'This is link')}
      isCentered={boolean('centered', false)}
      isHorizontal={boolean('Text Direction', false)}
    />
  ))
