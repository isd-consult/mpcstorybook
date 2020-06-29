import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { select, number, boolean } from '@storybook/addon-knobs'

import Container from 'components/atoms/layout/Container'
import Title from 'components/atoms/common/Title'
import Text from 'components/atoms/common/Text'
import Icon from './Icon'
import icons from './icons.json'


const IconExample = props => {
  const {name} = props
  return (
    <div
      className="mt-30 ml-30"
      style={{
        width: 200,
        padding: 20,
        display:'inline-block',
        border: '1px solid grey',
        borderRadius: 15,
        textAlign: 'center'
      }}
    >
      <Icon {...props} />
      <Text
        className="mt-20"
        size='xxl'
      >
        {name}
      </Text>
    </div>
  )
}

IconExample.defaultProps = {
  name: null
}

IconExample.propTypes = {
  name: PropTypes.string
}

storiesOf('Atoms/Common', module)
  .add(
    'Icons', 
    () => (
      <Container>
        <Title>Icons</Title>
        {Object.keys(icons).map(icon=>(
          <IconExample
            theme={select('Theme', [null, 'men', 'women'])}
            name={icon}
            flipH={boolean('Flip horizontal', false)}
            flipV={boolean('Flip vertical', false)}
            left={boolean('Rotated left', false)}
            right={boolean('Rotated right', false)}
            size={number('Size', 100)}
            height={number('Height', 0)}
            width={number('Width', 0)}
          />
        ))}
      </Container>
    )
  )
