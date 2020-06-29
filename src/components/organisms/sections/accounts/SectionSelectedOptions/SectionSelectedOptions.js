import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionSelectedOptions.scss'
import CardOption from 'components/molecules/cards/CardOption'
import Text from 'components/atoms/common/Text'

class SectionSelectedOptions extends Component {
  render () {
    const {
      className,
      title,
      items,
      onClose
    } = this.props

    return (
      <div
        className={clsx(
          'section-selected-options',
          className
        )}
      >
        <Text size="xs" fw="bold">
          {title}
        </Text>
        {
          items && items.length>0
            ? items.map((item, index)=>(
              <CardOption
                key={index.toString()}
                className="mt-5 mr-5"
                label={item}
                value={item}
                onClose={onClose}
              />
              ))
            : (
              <Text className="mt-20">
                Select brands below
              </Text>
)
        }
      </div>
    )
  }
}

SectionSelectedOptions.defaultProps = {
  className: '',
  title: null,
  items: null,
  onClose: null,
}

SectionSelectedOptions.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  onClose: PropTypes.func
}

export default SectionSelectedOptions
