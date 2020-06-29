import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Dialog.scss'
import Modal from 'components/molecules/modals/Modal'

class Dialog extends Component {
  render () {
    const {
      className,
      onClose,
      children,
      ...others
    } = this.props

    return (
      <Modal onClose={onClose} {...others}>
        <div
          className={clsx(
            'dialog',
            className
          )}
        >
          {children}
        </div>
      </Modal>
    )
  }
}

Dialog.defaultProps = {
  className: '',
  opened: true,
  children: null,
  onClose: null,
}

Dialog.propTypes = {
  className: PropTypes.string,
  opened: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func
}

export default Dialog
