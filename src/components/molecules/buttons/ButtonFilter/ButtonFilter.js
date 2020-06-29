import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonFilter.scss'

import Text from 'components/atoms/common/Text'

class ButtonFilter extends Component {

  render() {
    const {
      className,
      text,
      textHighlighted,
      value,
      theme,
    } = this.props

    return (
      <a
        role="button"
        href={`/product_list?price=${value}`}
        className={clsx(
          'button-filter',
          {
            [`button-filter--${theme}`]: theme,
          },
          className,
        )}
      >
        <div>
          <Text tag="span" fw="light">
            {text}
          </Text>
          {textHighlighted && (
            <Text
              tag="span"
              fw="bold"
            >
              {` ${textHighlighted}`}
            </Text>
          )}
        </div>
      </a>
    )
  }
}

ButtonFilter.defaultProps = {
  className: '',
  text: '',
  textHighlighted: '',
  value: null,
  theme: null,
}

ButtonFilter.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  textHighlighted: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default ButtonFilter
