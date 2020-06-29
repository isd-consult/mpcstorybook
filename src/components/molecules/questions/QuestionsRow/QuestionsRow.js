import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Text from 'components/atoms/common/Text'

import './QuestionsRow.scss'

class QuestionsRow extends Component {
  render() {
    const { className, title, children, isSecondary } = this.props

    return (
      <div
        className={clsx(
          'questions-row',
          { 'questions-row--secondary': isSecondary },
          className,
        )}
      >
        {title && (
          <Text size="xl" fw="bold" className="mb-5 pl-15 pr-15">
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Text>
        )}
        <div className="questions-row__scroller">
          <div className="questions-row__items ml-30">
            {React.Children.map(children, child => (
              <div className="questions-row__item-wrapper p-5">
                {React.cloneElement(child)}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

QuestionsRow.defaultProps = {
  className: '',
  title: '',
  children: null,
  isSecondary: false,
}

QuestionsRow.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  isSecondary: PropTypes.bool,
}

export default QuestionsRow
