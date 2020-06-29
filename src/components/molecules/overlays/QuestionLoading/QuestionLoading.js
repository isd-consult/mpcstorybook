import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './QuestionLoading.scss'

import Spinner from 'components/molecules/spinners/Spinner'

class QuestionLoading extends Component {
  render() {
    const { className } = this.props

    return (
      <div className={clsx('question-loading', className)}>
        <Spinner isLogo size='large' />
      </div>
    )
  }
}

QuestionLoading.defaultProps = {
  className: '',
}

QuestionLoading.propTypes = {
  className: PropTypes.string,
}

export default QuestionLoading
