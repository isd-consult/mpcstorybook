import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Modal.scss'
import Portal from 'components/atoms/layout/Portal'

class Modal extends Component {

  componentDidUpdate() {
    const {opened} = this.props
    if (opened) {
      document.body.style = 'overflow: hidden'
    } else {
      document.body.style = 'overflow: visible'
    }
  }

  componentWillUnmount() {
    document.body.style = 'overflow: visible'
  }

  render () {
    const {
      children: childrenProp,
      opened,
      onClose,
      disabledPortal
    } = this.props

    const children = React.Children.map(childrenProp, child => {
      return React.cloneElement(child, {
        onClick: (e) => e.stopPropagation()
      })
    })

    return (
      <Portal disabledPortal={disabledPortal}>
        <div
          className={clsx(
          'modal',
          {
            'modal--opened': opened,
            'modal--relative': disabledPortal
          }
        )}
          role='button'
          tabIndex={0}
          onClick={(e) => onClose(e)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onClose(e)
            }
          }}
        >
          <div className='modal__wrapper'>
            <div className='modal__content'>{children}</div>
          </div>
        </div>
      </Portal>
    )
  }
}

Modal.defaultProps = {
  children: null,
  opened: false,
  onClose: null,
  disabledPortal: false
}

Modal.propTypes = {
  children: PropTypes.any,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  disabledPortal: PropTypes.bool
}

export default Modal
