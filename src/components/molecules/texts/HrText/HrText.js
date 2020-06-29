import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './HrText.scss'

class HrText extends Component {
  render () {
    const {
      className,
      title
    } = this.props

    return (
      <hr
        className={clsx(
          'hr-text',
          className
        )}
        data-content={title}
      />
    )
  }
}

HrText.defaultProps = {
  className: '',
  title: ''
}

HrText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

export default HrText
