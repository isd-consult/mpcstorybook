import React, { Component } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Portal from 'components/atoms/layout/Portal'

import validHex from 'utils/validHex'

import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'

import './Snackbar.scss'

class Snackbar extends Component {
  constructor(props) {
    super(props)
    this.snackRef = React.createRef()
    this.state = {
      visible: props.open || props.disabledPortal,
    }

    this.handlePause = this.handlePause.bind(this)
    this.handleResume = this.handleResume.bind(this)
  }

  componentDidMount() {
    const { open, disabledPortal } = this.props

    if (open && !disabledPortal) {
      this.setAutoHideTimer()
    }

    if (disabledPortal) {
      this.setState({ visible: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { open: prevOpen, children: prevChildren } = this.props
    const { open: nextOpen, disabledPortal, children: nextChildren } = nextProps

    if (prevOpen !== nextOpen && !disabledPortal) {
      this.setState({ visible: nextOpen })
    }

    if (disabledPortal && prevChildren !== nextChildren) {
      this.setState({ visible: true })
    }
  }

  componentDidUpdate(prevProps) {
    const { open, disabledPortal } = this.props

    if (!disabledPortal) {
      if (prevProps.open !== open) {
        if (open) {
          this.setAutoHideTimer()
        } else {
          clearTimeout(this.timerAutoHide)
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHide)
  }

  setAutoHideTimer(autoHideDuration) {
    const { autoHideDuration: autoHideDurationProp, onClose } = this.props

    const autoHideDurationBefore =
      autoHideDuration !== undefined ? autoHideDuration : autoHideDurationProp

    if (autoHideDurationBefore === null) {
      return
    }

    clearTimeout(this.timerAutoHide)

    this.setState({ visible: true })
    this.timerAutoHide = setTimeout(() => {
      const autoHideDurationAfter =
        autoHideDuration != null ? autoHideDuration : autoHideDurationProp
      if (autoHideDurationAfter == null) {
        return
      }

      if (onClose) onClose()
    }, autoHideDurationBefore)
  }

  // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.
  handlePause() {
    clearTimeout(this.timerAutoHide)
  }

  // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.
  handleResume() {
    const { autoHideDuration, disabledPortal } = this.props

    if (disabledPortal) return
    if (autoHideDuration != null) {
      this.setAutoHideTimer(autoHideDuration)
    }
  }

  render() {
    const {
      category,
      children,
      isControlled,
      color,
      onClose,
      position,
      href,
      icon,
      disabledPortal,
      open,
      autoHideDuration,
      className,
      ...other
    } = this.props

    const { visible } = this.state

    const backgroundColor = validHex(color) ? color : null
    const Root = href ? 'a' : 'div'

    return (
      <Portal disabledPortal={disabledPortal}>
        <Root
          ref={this.snackRef}
          style={{ backgroundColor }}
          href={href}
          className={clsx(
            'snackbar-new',
            {
              'snackbar-new--opened': visible,
              'snackbar-new--bottom': position === 'bottom',
              [`snackbar-new--${category}`]: category,
              'snackbar-new--relative': disabledPortal,
              'snackbar-new--with-control': isControlled,
            },
            className,
          )}
          onMouseEnter={this.handlePause}
          onMouseLeave={this.handleResume}
          {...other}
        >
          {icon && icon !== 'none' && (
            <Icon className="snackbar-new__icon" name={icon} size={20} />
          )}
          <span>
            <Text
              tag="span"
              size="s"
              category="white"
              className="snackbar-new__content"
            >
              {children}
            </Text>
          </span>

          {isControlled && (
            <div
              className="snackbar-new__close"
              role="button"
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                if (disabledPortal) {
                  this.setState({ visible: false })
                }
                if (onClose) onClose()
              }}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (onClose) onClose()
                }
              }}
            >
              <Icon className="snackbar-new__close-icon" name="close" />
            </div>
          )}
        </Root>
      </Portal>
    )
  }
}

Snackbar.propTypes = {
  autoHideDuration: PropTypes.number,
  category: PropTypes.oneOf([
    null,
    'success',
    'notification',
    'warning',
    'danger',
    'info',
  ]),
  children: PropTypes.any,
  isControlled: PropTypes.bool,
  onClose: PropTypes.func,
  icon: PropTypes.string,
  href: PropTypes.string,
  open: PropTypes.bool,
  color: PropTypes.string,
  disabledPortal: PropTypes.bool,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
}

Snackbar.defaultProps = {
  className: '',
  autoHideDuration: null,
  isControlled: false,
  open: false,
  position: 'bottom',
  href: null,
  category: null,
  children: null,
  onClose: null,
  icon: '',
  color: '',
  disabledPortal: false,
}

export default Snackbar
