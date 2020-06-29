import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAccountAddressBook.scss'
import Button from 'components/molecules/buttons/Button'
import CardAddress from 'components/molecules/cards/CardAddress'
import Text from 'components/atoms/common/Text'
import { Link } from 'react-router-dom'
import Block from 'components/molecules/wrapers/Block'

class SectionAccountAddressBook extends Component {
  render() {
    const { theme, addresses, deleteAddress } = this.props
    const defaultBillingAddress =
      addresses &&
      addresses.find(address => {
        return address.is_default_billing
      })
    const defaultShippingAddress =
      addresses &&
      addresses.find(address => {
        return address.is_default_shipping
      })
    const otherAddresses =
      addresses &&
      addresses.filter(address => {
        return !address.is_default_shipping && !address.is_default_billing
      })

    return (
      <div className={clsx('section-account-address-book', 'mt-20')}>
        <Block className="pl-20 pt-20 pr-20 pb-20">
          <Text size="xxxl" fw="bold">
            Addresses Book
          </Text>
          <CardAddress
            className="mt-10"
            iconName="invoice"
            title="Default billing Address"
            descriptionSize="small"
            description={
              defaultBillingAddress
                ? defaultBillingAddress.recipient_name
                : 'You have not a set billing address yet'
            }
            href={
              defaultBillingAddress
                ? `/accounts/info/addaddress/` +
                  `${defaultBillingAddress.address_hash}`
                : `/accounts/info/addaddress`
            }
            linkText="Change Billing Address"
            theme={theme}
          />
          <CardAddress
            className="mt-10"
            iconName="delivery"
            title="Default Shipping Address"
            description={
              defaultShippingAddress
                ? defaultShippingAddress.recipient_name
                : 'You have not a set shipping address yet'
            }
            href={
              defaultShippingAddress
                ? `/accounts/info/addaddress/` +
                  `${defaultShippingAddress.address_hash}`
                : `/accounts/info/addaddress`
            }
            linkText="Change Shipping Address"
            theme={theme}
          />
          <Text className="mt-15" size="xxl">
            Additional Address Entries
          </Text>
          {otherAddresses &&
            otherAddresses.map((address, index) => {
              return (
                <CardAddress
                  key={index.toString()}
                  className="mt-10"
                  iconName="invoice"
                  title={address.address_nickname}
                  description={address.recipient_name}
                  href={`/accounts/info/addaddress/${address.address_hash}`}
                  linkText="Edit Address"
                  deleteAddress={() => deleteAddress(address.address_hash)}
                  theme={theme}
                />
              )
            })}
          <Link to="/accounts/info/addaddress">
            <Button
              className="mt-20 section-account-address-book__add-new-address"
              theme={theme}
              isCentered
              isSmall
            >
              Add New Address
            </Button>
          </Link>
        </Block>
      </div>
    )
  }
}

SectionAccountAddressBook.defaultProps = {
  theme: null,
  addresses: null,
  deleteAddress: null,
}

SectionAccountAddressBook.propTypes = {
  addresses: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  deleteAddress: PropTypes.func,
}

export default SectionAccountAddressBook
