import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAddToCart.scss'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import Select from 'components/molecules/forms/Select'
import ThemeUtils from 'utils/ThemeUtils'
import Price from 'components/molecules/texts/Price'
import Icon from 'components/atoms/common/Icon'

function getMaxQty(product, simpleSku) {
  let result = 0
  if (product && product.sizes) {
    product.sizes.forEach((item)=>{
      const { qty } = item
      if (item.rs_simple_sku === simpleSku) {
        result = qty
      }
    })
  }
  return result
}

function generateQtyArray(maxQty) {
  const qtyArray = []
  for (let i = 1; i < maxQty + 1; i++) {
    qtyArray.push({
      label: i.toString(),
      value: i.toString()
    })
  }
  return qtyArray
}

function setSizeOptions(product) {
  const sizeOptions = []
  let isAllSoldOut = true
  if (product && product.sizes.length>0) {
    product.sizes.forEach((item)=>{
      const newitem = {}
      newitem.value = item.rs_simple_sku
      if (item.qty < 1) {
        newitem.label = `${item.size} (Sold Out)`
      } else {
        newitem.label = item.size
        isAllSoldOut = false
      }
      sizeOptions.push(newitem)
    })
  }
  return {sizeOptions, isAllSoldOut}
}

class SectionAddToCart extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      sizeOptions: null,
      qtyOptions: null,
      isAllSoldOut: false,
      // isWishLoading: false,
      simpleSku: null,
      qty: null,
      validateMsg: null
    }
    this.validate = this.validate.bind(this)
    this.onAddCartClick = this.onAddCartClick.bind(this)
    // this.onAddToWishClick = this.onAddToWishClick.bind(this)
    this.onSizeChange = this.onSizeChange.bind(this)
    this.onQtyChange = this.onQtyChange.bind(this)
  }

  componentDidMount() {
    const { product } = this.props
    let { simpleSku, qty } = this.state
    const { sizeOptions, isAllSoldOut } = setSizeOptions(product)
    
    if (sizeOptions && sizeOptions.length === 1 && !simpleSku) {
      simpleSku = sizeOptions[0].value
    }

    const maxQty = getMaxQty(product, simpleSku)
    const qtyOptions = generateQtyArray(maxQty)
    qty = qtyOptions && qtyOptions.length ? 1 : null
    
    this.setState({
      sizeOptions, 
      qtyOptions, 
      simpleSku,
      qty,
      isAllSoldOut
    })
  }

  onSizeChange(simpleSku) {
    const { product, getProductDtd } = this.props
    getProductDtd(simpleSku, 1)
    const maxQty = getMaxQty(product, simpleSku)
    const qtyOptions = generateQtyArray(maxQty)
    this.setState({
      simpleSku, 
      qtyOptions,
      validateMsg: null, 
      qty: qtyOptions && qtyOptions.length ? 1 : null})
  }
  
  onQtyChange(qty) {
    const {getProductDtd} = this.props
    const {simpleSku} = this.state
    getProductDtd(simpleSku, qty)
    this.setState({qty, validateMsg: null})
  }

  async onAddCartClick() {
    const {simpleSku, qty} = this.state
    const validateMsg = this.validate()
    this.setState({validateMsg})
    if (!validateMsg) {
      const {onAddCartClick} = this.props
      this.setState({isLoading: true})
      await onAddCartClick(simpleSku, qty)
      this.setState({isLoading:false})
    }
  }

  // async onAddToWishClick() {
  //   const { onAddToWishClick, product } = this.props
  //   this.setState({isWishLoading: true})
  //   await onAddToWishClick(product.rs_sku)
  //   this.setState({isWishLoading: false})
  // }

  validate() {
    let validateMsg = null
    const {simpleSku, qty} = this.state
    if (!simpleSku && !qty) 
      validateMsg = "Please select a Size and Qty"
    else if (!qty)
      validateMsg = "Please select a Qty"
    return validateMsg
  }

  render () {
    const {
      className,
      product,
      fitMeLink,
      theme,
      // addedToWish,
      // isAuthenticated,
    } = this.props

    const {
      isLoading,
      sizeOptions,
      qtyOptions,
      isAllSoldOut,
      // isWishLoading,
      simpleSku,
      qty,
      validateMsg,
    } = this.state
    const selectedSizeOption = sizeOptions && sizeOptions.find(option=>{
      return option.value===simpleSku
    })

    return (
      <div
        className={clsx(
          'section-add-to-cart pt-20 pb-10',
          className
        )}
      >
        <Container>
          <Text
            color={ThemeUtils.themeToColor(theme)}
            align="center" 
            isUppercase
          >
            {product && product.manufacturer}
          </Text>
          <Text 
            className="pt-10 pb-10"
            size="xl"
            align="center"
          >
            {product && product.product_name}
          </Text>
          <Price 
            price={null}
            discount={product && product.current_price}
            credit={product && product.fbucks}
            isCenter 
          />
          <Col xs={6} sm={4} lg={3}>
            <Select
              theme={theme}
              options={sizeOptions}
              category="shadow"
              onChange={this.onSizeChange}
              selected={selectedSizeOption}
              placeholder="Select a size"
              isDisabled={!sizeOptions}
              isError={!simpleSku && !!validateMsg}
            />
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Select
              theme={theme}
              options={qtyOptions}
              category="shadow"
              onChange={this.onQtyChange}
              selected={
                qty
                  ? { label: qty, value: qty }
                  : null
              }
              placeholder="Qty"
              isDisabled={!(qtyOptions && qtyOptions.length>0)}
              isError={!qty && !!validateMsg}
            />
          </Col>
          {
            validateMsg && (
            <div className="section-add-to-cart__validation">
              <Icon name="warning" style={{fill:"white"}} size={12} />
              <Text className="ml-5">{validateMsg}</Text>
            </div>
)
          }
          <Row className="pt-10 pb-10">
            <Col xs={8} xsOffset={2} lg={4} lgOffset={4}>
              <Button
                onClick={this.onAddCartClick}
                theme={theme}
                isLoading={isLoading}
                isDisabled={!qty || isAllSoldOut}
              >
                {isAllSoldOut ? 'SOLD OUT' : 'ADD TO CART' }
              </Button>
            </Col>
          </Row>
          {/* { isAuthenticated && (
            <Row className="pb-10">
              <Col xs={8} xsOffset={2} lg={4} lgOffset={4}>
                { addedToWish === false && (
                <Button
                  onClick={this.onAddToWishClick}
                  isLoading={isWishLoading}
                  theme={theme}
                >
                    ADD TO WISH
                </Button>
                )}
                { addedToWish === true && (
                <Button
                  onClick={()=>window.location.href = '/accounts/wishlist'}
                  theme={theme}
                >
                    ITEM IS IN YOUR WISHLIST
                </Button>
                )}
              </Col>
            </Row>
          )} */}
          <Row>
            <Col
              className="section-add-to-cart__fitlink" 
              xs={8}
              xsOffset={2}
              lg={4}
              lgOffset={4}
            >
              {fitMeLink && <a href={fitMeLink}>Will this fit me?</a>}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

SectionAddToCart.defaultProps = {
  className: '',
  product: null,
  fitMeLink: null,
  onAddCartClick: null,
  // onAddToWishClick: null,
  theme: null,
  // addedToWish: false,
  // isAuthenticated: false,
  getProductDtd: null
}

SectionAddToCart.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  fitMeLink: PropTypes.string,
  onAddCartClick: PropTypes.func,
  // onAddToWishClick: PropTypes.func,
  theme: PropTypes.string,
  // addedToWish: PropTypes.bool,
  // isAuthenticated: PropTypes.bool,
  getProductDtd: PropTypes.func
}

export default SectionAddToCart
