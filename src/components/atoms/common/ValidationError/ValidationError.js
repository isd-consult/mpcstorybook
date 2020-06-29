import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ValidationError.scss'
import Text from 'components/atoms/common/Text'

class ValidationError extends Component {
  render () {
    const {
      className,
      error,
    } = this.props

    return (
      <ul
        className={clsx(
          'validation-error',
          className
        )}
      >
        {Object.keys(error).map((key, index)=>(
          <li key={index.toString()}>
            <Text size="xs">{`${key}: ${error[key]}`}</Text>
          </li>
        ))}
      </ul>
    )
  }
}

ValidationError.defaultProps = {
  className: '',
  error: {},
}

ValidationError.propTypes = {
  className: PropTypes.string,
  error: PropTypes.object,
}

export default ValidationError
