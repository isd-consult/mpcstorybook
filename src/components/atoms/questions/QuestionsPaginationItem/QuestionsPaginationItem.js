import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import './QuestionsPaginationItem.scss'

class QuestionsPaginationItem extends Component {
  render() {
    const {
      className,
      isCurrent,
      isPrevious,
      to,
      label,
      isR,
      theme,
      onClick,
      isDisabled,
    } = this.props
    const Root = to ? Link : 'div'

    return (
      <Root
        onClick={
          onClick
            ? e => {
                e.preventDefault()
                if (!isDisabled) {
                  onClick(to)
                }
              }
            : null
        }
        to={to}
        className={clsx(
          'questions-pagination-item',
          {
            'questions-pagination-item--current': isCurrent,
            'questions-pagination-item--prev': isPrevious,
            'questions-pagination-item--disabled': isDisabled,
            'questions-pagination-item--r': isR,
            [`questions-pagination-item--${theme}`]: theme,
          },
          className,
        )}
      >
        {label}
      </Root>
    )
  }
}

QuestionsPaginationItem.defaultProps = {
  className: '',
  isCurrent: false,
  isPrevious: false,
  label: 'R100',
  to: null,
  onClick: null,
  isDisabled: false,
  isR: false,
  theme: 1,
}

QuestionsPaginationItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  to: PropTypes.string,
  onClick: PropTypes.func,
  isR: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isPrevious: PropTypes.bool,
  theme: PropTypes.number,
}

export default QuestionsPaginationItem
