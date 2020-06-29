import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SlideMenu.scss'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'

class SlideMenu extends Component {
  constructor(props) {
    super(props)
    this.$slideMenu = React.createRef()
    this.state = { isOpen: false, isHidden: true }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen !== state.isOpen) {
      return {
        isOpen: props.isOpen,
        isHidden: props.isOpen ? false : state.isHidden,
      }
    }
    return null
  }

  componentDidUpdate(prevProps) {
    const { isOpen: isOpenPrev } = prevProps
    const { isOpen: isOpenNext } = this.props

    if (isOpenPrev !== isOpenNext) {
      if (isOpenNext) {
        this.$slideMenu.current.scrollTop = 0
        document.body.style = 'overflow: hidden'
      } else {
        document.body.style = 'overflow: visible'
      }
    }
  }

  componentWillUnmount() {
    document.body.style = 'overflow: visible'
  }

  render() {
    const { className, children, direction, onClose, theme } = this.props
    const { isOpen, isHidden } = this.state
    return (
      <React.Fragment>
        <div
          ref={this.$slideMenu}
          className={clsx(
            'slide-menu',
            {
              'slide-menu--opened': isOpen,
              'slide-menu--hidden': isHidden,
              [`slide-menu--${direction}`]: direction,
            },
            className,
          )}
          onTransitionEnd={e => {
            if (e.target === this.$slideMenu.current) {
              if (!isOpen) {
                this.setState({ isHidden: true })
              }
            }
          }}
        >
          {onClose && (
            <ButtonIcon
              className="slide-menu__closebtn"
              icon="close"
              theme={theme}
              tag="div"
              onClick={onClose}
            />
          )}
          {children}
        </div>
        <div
          className={clsx('slide-menu-overlay', {
            'slide-menu-overlay--opened': isOpen,
          })}
          role="button"
          onClick={onClose}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (onClose) onClose(e)
            }
          }}
          tabIndex="0"
        />
      </React.Fragment>
    )
  }
}

SlideMenu.defaultProps = {
  className: '',
  direction: 'right',
  children: null,
  isOpen: false,
  onClose: null,
  theme: null,
}

SlideMenu.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SlideMenu
