import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Select from 'components/molecules/forms/Select'
import Number from 'components/molecules/forms/Number'
import Button from 'components/molecules/buttons/Button'
import Icon from 'components/atoms/common/Icon'
import './WishItem.scss'
import Loading from 'components/molecules/overlays/Loading'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'

class WishItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      qty: 0,
      maxQty: 0,
      simpleSku: null,
    }
    this.removeProductFromWish = this.removeProductFromWish.bind(this)
    this.onQtyChange = this.onQtyChange.bind(this)
    this.onSizeChange = this.onSizeChange.bind(this)
    this.setSizeOptions = this.setSizeOptions.bind(this)
    this.addProductToCart = this.addProductToCart.bind(this)
  }
  
  onSizeChange(simpleSku) {
    const {item} = this.props
    let maxQty = 0
    this.setState({simpleSku})
    for (let i = 0; i < item.sizes.length; i++) {
      if (item.sizes[i].simple_sku === simpleSku) {
        maxQty = item.sizes[i].qty
        break
      }
    }
    this.setState({maxQty})
    this.setState({qty: 0})
  }

  onQtyChange(qty) {
    this.setState({qty})
  }
  
  setSizeOptions(item) {
    const sizeOptions = []
    if (item && item.sizes.length>0) {
      item.sizes.forEach((_item)=>{
        const newitem = {}
        newitem.value = _item.simple_sku
        if (_item.qty < 1) {
          newitem.label = `${_item.size} (Sold Out)`
        } else {
          newitem.label = _item.size
        }
        sizeOptions.push(newitem)
      })
    }
    return sizeOptions
  }

  async addProductToCart() {
    const {addProductToCart} = this.props
    const { simpleSku, qty } = this.state
    if (simpleSku && qty !== 0){
      this.setState({isLoading: true})
      await addProductToCart(simpleSku, qty)
      this.setState({isLoading: false})
    }
  }
  
  async removeProductFromWish() {
    const {removeProductFromWish, item} = this.props
    this.setState({isLoading: true})
    await removeProductFromWish(item.sku)
    this.setState({isLoading: false})
  }

  render() {
    const {
      item,
      theme,
      className
    } = this.props

    const {
      qty, 
      maxQty, 
      isLoading
    } = this.state
    const sizeOptions = this.setSizeOptions(item)
    return (
      <div
        className={clsx(
          'wish-item',
          className
        )}
      >
        {isLoading && <Loading />}
        <div className='wish-item__img-section'>
          <img 
            src={StringUtils.getThumbnail(item.image.src)}
            alt={item.image.src}
            onError={
            (e)=>{
              e.target.onerror = null 
              e.target.src = noimage
            }
          }
          />
        </div>
        <div className='wish-item__info-section'>
          <div className='wish-item__price'>
            <Text
              className="price__value"
              size='s'
              color='silver-chalice'
              isLineThrough
            >
              {StringUtils.formatPrice(item.original_price)}
            </Text>
            <Text
              className="ml-5 price__discount"
              color="bright-chico"
              size="s"
              fw="bold"
            >
              {StringUtils.formatPrice(item.current_price)}
            </Text>
          </div>
          <Text 
            className="mt-10"
            size='xxs'
            fw='bold'
            color='silver'
          >
            {item.title}
          </Text>
          <Text 
            className="mt-10"
          >
            {item.subtitle}
          </Text>
          <div className='wish-item__size-qty'>
            <Select
              className='wish-item__sizeoptions'
              theme={theme}
              options={sizeOptions}
              onChange={this.onSizeChange}
              placeholder="Select a size"
              isDisabled={!sizeOptions || sizeOptions.length === 0}
            />
            <Number 
              className='wish-item__qty'
              onChange={this.onQtyChange}
              value={qty}
              maxValue={maxQty}   
            /> 
          </div>
          <Button 
            className='wish-item__addtobag'
            onClick={this.addProductToCart} 
            theme={theme}
          >
            ADD TO CART
          </Button>
        </div>
        <div className="wish-item__close">
          <Button 
            onClick={this.removeProductFromWish} 
            backgroundColor="white"
            isSmall
          >
            <Icon
              name="close"
              size={13}
              theme={theme}
            />
          </Button>
        </div> 
      </div>
    )
  }
}

WishItem.defaultProps = {
  className: '',
  item: null,
  theme: null,
  addProductToCart: null,
  removeProductFromWish: null,
}

WishItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addProductToCart: PropTypes.func,
  removeProductFromWish: PropTypes.func,
}

export default WishItem
