import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardCartItem.scss'

import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'
import Number from 'components/molecules/forms/Number'
import Price from 'components/molecules/texts/Price'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'
import Button from 'components/molecules/buttons/Button'
import StringUtils from 'utils/StringUtils'
import Loading from 'components/molecules/overlays/Loading'
import Image from 'components/atoms/common/Image'
import { Link } from 'react-router-dom'

class CardCartItem extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false }
    this.removeProduct = this.removeProduct.bind(this)
    this.changeProductQty = this.changeProductQty.bind(this)
  }

  async removeProduct() {
    const { simpleSku, removeProduct } = this.props
    this.setState({ isLoading: true })
    await removeProduct(simpleSku)
    this.setState({ isLoading: false })
  }

  async changeProductQty(qty) {
    const { setProductQty, simpleSku } = this.props
    this.setState({ isLoading: true })
    await setProductQty(simpleSku, qty)
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const {
      className,
      imageUrl,
      brandName,
      sku,
      name,
      sizeName,
      originalCost,
      discount,
      fromDelivery,
      toDelivery,
      theme,
      qtyAdded,
      qtyAvailable,
      fbucks,
    } = this.props

    return (
      <div
        className={clsx(
          'card-cart-item',
          { [`card-cart-item--${theme}`]: theme },
          className,
        )}
      >
        {isLoading && <Loading isSecondary isLogo />}
        <div className="card-cart-item__left">
          <Link to={`/product_detail/${sku}`}>
            <Image
              className="card-cart-item__image"
              src={imageUrl}
              alt={brandName}
              isThumb
            />
          </Link>
          {fbucks ? (
            <Text className="card-cart-item__fbucks" size="xxs" isUppercase>
              {`Earn R${fbucks} fbucks`}
            </Text>
          ) : null}
        </div>
        <div className="card-cart-item__right">
          <div className="pr-30">
            <div>
              {brandName && (
                <Text
                  className="mt-5 card-cart-item__brand"
                  isUppercase
                  size="xs"
                  lh="1-6"
                  theme={theme}
                >
                  {brandName}
                </Text>
              )}
              {name && (
                <Text size="normal" fw="medium">
                  {name}
                </Text>
              )}
            </div>
            <Button
              className="card-cart-item__close"
              onClick={this.removeProduct}
              backgroundColor="white"
            >
              <Icon name="close" size={10} theme={theme} />
            </Button>
            <Text className="mt-10" size="xs">
              {`Size: ${sizeName}`}
            </Text>
          </div>
          <div className='mt-10 mb-10'>
            <TextWithIcon
              className="mb-5"
              iconName="truck"
              iconSize={27}
              title="Delivery Expected"
              titleSize="xxs"
              titleWeight="light"
              description={
                `${StringUtils.formatData1(fromDelivery)} - ` +
                `${StringUtils.formatData2(toDelivery)}`
              }
              descriptionSize="xxs"
            />
          </div>
          <div className='d-flex ai-center jc-space-between'>
            <Price price={originalCost} discount={discount} />
            <div className="card-cart-item__count">
              <Number
                onChange={this.changeProductQty}
                value={qtyAdded}
                maxValue={qtyAvailable}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CardCartItem.defaultProps = {
  className: '',
  imageUrl: '',
  brandName: '',
  name: '',
  sizeName: null,
  originalCost: 0,
  discount: 111,
  theme: null,
  removeProduct: null,
  sku: '',
  simpleSku: '',
  setProductQty: null,
  qtyAdded: 0,
  qtyAvailable: 0,
  fromDelivery: null,
  toDelivery: null,
  fbucks: null,
}

CardCartItem.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  brandName: PropTypes.string,
  name: PropTypes.string,
  sizeName: PropTypes.string,
  originalCost: PropTypes.number,
  discount: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  removeProduct: PropTypes.func,
  sku: PropTypes.string,
  simpleSku: PropTypes.string,
  setProductQty: PropTypes.func,
  qtyAdded: PropTypes.number,
  qtyAvailable: PropTypes.number,
  fromDelivery: PropTypes.string,
  toDelivery: PropTypes.string,
  fbucks: PropTypes.number,
}

export default CardCartItem
