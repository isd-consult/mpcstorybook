/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import uuid from 'uuid'

import './QuestionsRadio.scss'

class QuestionsRadio extends Component {
  render() {
    const { className, name, value, onChange, checked, children } = this.props

    const id = uuid.v4()

    return (
      <div className={clsx('questions-radio', className)}>
        <input
          id={id}
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    )
  }
}

QuestionsRadio.defaultProps = {
  className: '',
  name: 'question-radio',
  value: '',
  onChange: null,
  checked: false,
  children: 'Question radio'
}

QuestionsRadio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.any,
}

export default QuestionsRadio
