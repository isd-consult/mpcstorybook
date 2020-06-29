import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Text from 'components/atoms/common/Text'
import './QuestionsInput.scss'

class QuestionsInput extends Component {
  render() {
    const { className, error, ...props } = this.props

    return (
      <div
        className={clsx(
          'questions-input',
          { 'questions-input--error': error },
          className,
        )}
      >
        <input className="questions-input__input" {...props} />
        {error && (
          <Text color="white" size='xxs' className="questions-input__error">
            {error}
          </Text>
        )}
      </div>
    )
  }
}

QuestionsInput.defaultProps = {
  className: '',
  error: '',
}

QuestionsInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
}

export default QuestionsInput
