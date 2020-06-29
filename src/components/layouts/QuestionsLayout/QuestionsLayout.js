import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import QuestionsExit from 'components/atoms/questions/QuestionsExit'
import './QuestionsLayout.scss'

class QuestionsLayout extends Component {
  render() {
    const { className, children, onExit } = this.props

    return (
      <div className={clsx('questions-layout', className)}>
        <QuestionsExit
          onClick={onExit}
          to={!onExit ? '/' : null}
          className="questions-layout__exit"
        />
        {children}
      </div>
    )
  }
}

QuestionsLayout.defaultProps = {
  className: '',
  children: null,
  onExit: null
}

QuestionsLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onExit: PropTypes.func,
}

export default QuestionsLayout
