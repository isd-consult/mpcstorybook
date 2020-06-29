import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Icon from 'components/atoms/common/Icon'
import Input from 'components/atoms/questions/QuestionsInput'
import './QuestionsUserField.scss'

class QuestionsUserField extends Component {
  render() {
    const { className, onAdd, onRemove, isRemove, ...other } = this.props

    return (
      <div className={clsx('questions-user-field d-flex ai-center', className)}>
        <Input {...other} />
        <div className="ml-5">
          <div
            className="questions-user-field__button d-flex ai-center"
            onClick={() => {
              if (onAdd) onAdd()
            }}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (onAdd) onAdd()
              }
            }}
          >
            <Icon
              size={15}
              className="questions-user-field__button-icon"
              name="round-plus-button"
            />
            <div className="questions-user-field__button-text ml-5">
              Add another
            </div>
          </div>
          {isRemove && (
            <div
              className="questions-user-field__button d-flex ai-center mt-5"
              onClick={() => {
                if (onRemove) onRemove()
              }}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (onRemove) onRemove()
                }
              }}
            >
              <Icon
                size={15}
                className="questions-user-field__button-icon"
                name="round-close-button"
              />
              <div className="questions-user-field__button-text ml-5">
                Remove
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

QuestionsUserField.defaultProps = {
  className: '',
  onAdd: null,
  onRemove: null,
  isRemove: false
}

QuestionsUserField.propTypes = {
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemove: PropTypes.bool,
}

export default QuestionsUserField
