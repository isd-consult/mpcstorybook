/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './QuestionsPagination.scss'

import QuestionsPaginationItem from 'components/atoms/questions/QuestionsPaginationItem'
import QuestionsPaginationArrow from 'components/atoms/questions/QuestionsPaginationArrow'

class QuestionsPagination extends Component {
  render() {
    const { className, data, theme, onPaging, isDisabled } = this.props
    const currentItem = data.find(item => item.isCurrent)
    const current = currentItem ? parseInt(currentItem.label, 10) : 0
    const isAllAnswered =
      data.every(item => item.isAnswered) || data.length === 0
    const paggingPrev = data.find((item, index) => {
      return index === data.indexOf(currentItem) - 1
    })
    const paggingNext = data.find((item, index) => {
      return index === data.indexOf(currentItem) + 1
    })

    return (
      <div className={clsx('questions-pagination', className)}>
        <QuestionsPaginationArrow
          isPrevious
          theme={theme}
          isDisabled={
            isDisabled || current <= 1 || data.length === 1
          }
          onClick={() => {
            if (onPaging) {
              onPaging(paggingPrev)
            }
          }}
          className="questions-pagination__prev"
        />
        <div className="questions-pagination__items">
          {data.map((item, index) => (
            <QuestionsPaginationItem
              key={index.toString()}
              isDisabled={isDisabled}
              isPrevious={item.isAnswered}
              isCurrent={item.isCurrent}
              label={item.isR ? 'R100' : item.label}
              isR={item.isR}
              theme={theme}
              onClick={() => {
                if (onPaging) {
                  onPaging(item)
                }
              }}
            />
          ))}
        </div>

        <QuestionsPaginationArrow
          isDisabled={
            isDisabled ||
            current >= data.length ||
            data.length === 1 ||
            isAllAnswered
          }
          theme={theme}
          onClick={() => {
            if (onPaging) {
              onPaging(paggingNext)
            }
          }}
          className="questions-pagination__next"
        />
      </div>
    )
  }
}

QuestionsPagination.defaultProps = {
  className: '',
  data: [],
  theme: 0,
  isDisabled: false,
  onPaging: null,
}

QuestionsPagination.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPaging: PropTypes.func,
  data: PropTypes.array,
  theme: PropTypes.number,
}

export default QuestionsPagination
