import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAddSizes.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'

class SectionAddSizes extends Component {
  render () {
    const {
      className,
      description,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'section-add-sizes',
          {[`section-add-sizes--${theme}`]: theme},
          className
        )}
      >
        <Text align="center">
          {description}
        </Text>
        <Button
          className="section-add-sizes__addbtn"
          isCentered
        >
          ADD SIZES
        </Button>
      </div>
    )
  }
}

SectionAddSizes.defaultProps = {
  className: '',
  theme: null,
  description: ''
}

SectionAddSizes.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  description: PropTypes.string
}

export default SectionAddSizes
