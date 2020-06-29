import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardOption.scss'
import Text from 'components/atoms/common/Text'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import Spinner from 'components/molecules/spinners/Spinner'

class CardOption extends Component {
  render() {
    const {
      className,
      label,
      value,
      mode,
      onClose,
      href,
      isLoading,
    } = this.props

    const Root = href && !isLoading ? 'a' : 'div'
    return (
      <Root
        href={href}
        className={clsx(
          'card-option',
          { 'card-option--close': onClose },
          { [`card-option--${mode}`]: mode },
          className,
        )}
      >
        <Text>{label}</Text>
        {onClose && (
          <>
            {isLoading ? (
              <Spinner className="mx-10" size="tiny" />
            ) : (
              <ButtonIcon
                className="ml-5"
                isAutoFit
                isNoBg
                icon="close"
                iconSize={8}
                onClick={e => {
                  e.preventDefault()
                  e.stopPropagation()
                  onClose(value)
                }}
              />
            )}
          </>
        )}
      </Root>
    )
  }
}

CardOption.defaultProps = {
  className: '',
  label: null,
  value: null,
  mode: null,
  onClose: null,
  href: null,
  isLoading: false,
}

CardOption.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  mode: PropTypes.oneOf([null, 'close', 'grey']),
  onClose: PropTypes.func,
  href: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default CardOption
