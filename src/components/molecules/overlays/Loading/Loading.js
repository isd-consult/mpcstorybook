import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Loading.scss'
import Spinner from 'components/molecules/spinners/Spinner'

class Loading extends Component {
  render() {
    const {
      className,
      isSecondary,
      isNoBackground,
      ...spinnerProps
    } = this.props

    return (
      <div
        className={clsx(
          'loading',
          {
            'loading--secondary': isSecondary,
            'loading--no-bg': isNoBackground,
          },
          className,
        )}
      >
        <Spinner {...spinnerProps} />
      </div>
    )
  }
}

Loading.defaultProps = {
  className: '',
  isSecondary: false,
  isNoBackground: false,
}

Loading.propTypes = {
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  isNoBackground: PropTypes.bool,
}

export default Loading
