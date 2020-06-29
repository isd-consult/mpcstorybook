import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './TogglePannel.scss'
import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'

class TogglePannel extends Component {
  constructor(props) {
    super(props)
    this.isControlled = props.onClick && props.active

    this.state = {
      opened: props.active || false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    const { index, onClick } = this.props

    if (this.isControlled) {
      if (onClick) {
        onClick(index)
      }
    } else {
      this.setState(prevState => {
        return {
          opened: !prevState.opened,
        }
      })
    }
  }

  render() {
    const {
      className,
      mode,
      title,
      subtitle,
      active,
      icon,
      children,
      theme,
    } = this.props

    const { opened } = this.state
    const isOpened = this.isControlled ? active : opened

    return (
      <div
        className={clsx(
          'toggle-pannel',
          { [`toggle-pannel--${mode}`]: mode },
          {
            'toggle-pannel--show': isOpened,
          },
          className,
        )}
      >
        <div
          className="toggle-pannel__header d-flex jc-space-between ai-center"
          onClick={this.handleOnClick}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              this.handleOnClick()
            }
          }}
          role="button"
          tabIndex="0"
        >
          <div className="d-flex">
            <Text className="toggle-pannel__title">{title}</Text>
            <Text className="toggle-pannel__subtitle">{subtitle}</Text>
          </div>
          {icon && (
            <Icon
              className="toggle-pannel__icon"
              flipV={isOpened}
              name={icon}
              size={7}
              theme={theme}
            />
          )}
        </div>
        <div className="toggle-pannel__content pb-15">{children}</div>
      </div>
    )
  }
}

TogglePannel.defaultProps = {
  className: '',
  index: null,
  mode: null,
  title: '',
  subtitle: '',
  onClick: null,
  active: false,
  children: null,
  icon: null,
  theme: null,
}

TogglePannel.propTypes = {
  className: PropTypes.string,
  index: PropTypes.string,
  mode: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default TogglePannel
