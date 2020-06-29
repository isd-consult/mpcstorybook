import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCartList.scss'
import CardCartItem from 'components/molecules/cards/CardCartItem'
import Divider from 'components/atoms/common/Divider'
import Container from 'components/atoms/layout/Container'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'

class SectionCartList extends Component {

  render () {
    const {
      className,
      items,
      theme,
      removeProduct,
      setProductQty,
    } = this.props

    return (
      <div
        className={clsx(
          'section-cart-list mt-10',
          className
        )}
      >
        {
      items && items.length 
      ? (
        <Container>
          {
          items && items.map((item, index)=>(
            <div key={index.toString()}>
              <CardCartItem
                theme={theme}
                imageUrl={item.image_url}
                brandName={item.brand_name}
                name={item.name}
                originalCost={item.product_original_price}
                discount={item.product_current_price}
                sizeName={item.size_name}
                fromDelivery={item.dtd.date_from}
                toDelivery={item.dtd.date_to}
                sku={item.sku}
                simpleSku={item.simple_sku}
                removeProduct={removeProduct}
                setProductQty={setProductQty}
                qtyAdded={item.qty_added}
                qtyAvailable={item.qty_available}
                fbucks={item.fbucks}
              />
              {(index < items.length-1) && <Divider className="mt-10 mb-15" />}
            </div>
          ))
        }
        </Container>
)
      : (
        <div className="section-cart-list__empty">
          <Icon name="cart" theme={theme} />
          <Text className="ml-15" size="xxl">Your bag is empty</Text>
        </div>
)
      }
      </div>
    )
  }
}

SectionCartList.defaultProps = {
  className: '',
  items: null,
  theme: null,
  removeProduct: null,
  setProductQty: null,
}

SectionCartList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  removeProduct: PropTypes.func,
  setProductQty: PropTypes.func,
}

export default SectionCartList
