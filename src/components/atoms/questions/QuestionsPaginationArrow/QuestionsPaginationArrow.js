import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Link } from 'react-router-dom'
import Icon from '../../common/Icon'
import './QuestionsPaginationArrow.scss'

class QuestionsPaginationArrow extends Component {
  render() {
    const { className, isPrevious, theme, to, onClick, isDisabled } = this.props
    const Root = to && !onClick ? Link : 'div'

    return (
      <Root
        onClick={
          onClick && !isDisabled
            ? e => {
                e.preventDefault()
                onClick(to, 'arrow')
              }
            : null
        }
        className={clsx(
          'questions-pagination-arrow',
          {
            [`questions-pagination-arrow--${theme}`]: theme,
            'questions-pagination-arrow--prev': isPrevious,
            'questions-pagination-arrow--disabled': isDisabled,
          },
          className,
        )}
      >
        <Icon
          className="questions-pagination-arrow__icon"
          size={isPrevious ? 20 : 25}
          name={isPrevious ? 'arrow-left' : 'arrow'}
        />
      </Root>
    )
  }
}

QuestionsPaginationArrow.defaultProps = {
  className: '',
  isPrevious: false,
  isDisabled: false,
  theme: 1,
  to: '',
  onClick: null,
}

QuestionsPaginationArrow.propTypes = {
  className: PropTypes.string,
  isPrevious: PropTypes.bool,
  isDisabled: PropTypes.bool,
  theme: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  to: PropTypes.string,
  onClick: PropTypes.func,
}

export default QuestionsPaginationArrow
