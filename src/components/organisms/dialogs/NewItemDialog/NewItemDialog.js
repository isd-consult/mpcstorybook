import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './NewItemDialog.scss'
import Dialog from 'components/molecules/modals/Dialog'
import Logo from 'components/atoms/common/Logo'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'

class NewItemDialog extends Component {
  render () {
    const {
      className,
      opened,
      onClose,
      theme
    } = this.props

    return (
      <Dialog
        className={clsx(
          'new-item-dialog',
          className
        )}
        opened={opened}
        onClose={onClose}
      >
        <Logo align="center" size="small" />
        <Text
          size="xl"
          className="mt-20" 
          align="center"
        >
          Hi 
          {' '}
          <Text theme={theme} tag="span">Suz</Text>
          , we have 
          a 
          {' '}
          <Text theme={theme} tag="span">NEW</Text>
          {' '}
          item for you:
        </Text>
        <Text
          className={clsx(
          "mt-10 pt-10 pb-10",
          "new-item-dialog__dialog-product-name",
          {[`new-item-dialog__dialog-product-name--${theme}`]: theme}
        )}
          color="white"
          size="xl" 
          isUppercase 
          align="center"
        >
          Superga Pale Pink Sneaker
        </Text>
        <Text
          className="mt-10 mb-10"
          size="xxxl"
          isUppercase
          align="center"
        >
          EARN 
          {' '}
          <Text tag="span" theme={theme} fw="bold">R150</Text>
          {' '}
          FBUCKS
        </Text>
        <Button theme={theme} onClick={onClose}>
          Unlock the shoe steal
        </Button>
        <Text
          className="mt-15"
          theme={theme}
          isUnderline
          align="center"
          onClick={onClose}
        >
          No thanks, I do not want to save on shoes
        </Text>
      </Dialog>
    )
  }
}

NewItemDialog.defaultProps = {
  className: '',
  opened: false,
  onClose: null,
  theme: null
}

NewItemDialog.propTypes = {
  className: PropTypes.string,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default NewItemDialog
