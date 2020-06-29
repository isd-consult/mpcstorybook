import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CartList.scss'

import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'

import SectionCartList 
  from 'components/organisms/sections/cartlist/SectionCartList'
import SectionCartHeader 
  from 'components/organisms/sections/cartlist/SectionCartHeader'
import SectionCartPromotion 
  from 'components/organisms/sections/cartlist/SectionCartPromotion'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import SectionCheckOut
  from 'components/organisms/sections/cartlist/SectionCheckOut'
import SectionPopularItems
  from 'components/organisms/sections/cartlist/SectionPopularItems'
// import SectionStickyBottom 
//   from 'components/organisms/sections/cartlist/SectionStickyBottom'

class CartList extends Component {

  render () {
    const {
      className,
      menuInfo,
      cartList,
      popularItems,
      theme,
      totalCount,
      availableFbucks,
      totalFbucks,
      totalVat,
      nextTierInfo,
      originalSubTotal,
      currentSubTotal,
      saveSubTotal,
      removeProduct,
      setProductQty,
      handleCheckout,
      dtd,
      ...others
    } = this.props

    const prices = [
      {label: "Subtotal", value: currentSubTotal},
      {label: "Abailable Fbucks", value: availableFbucks},
    ]
    return (
      <BaseLayout
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <SectionCartHeader
          className="mb-5"
          totalCount={totalCount}
          originalSubTotal={originalSubTotal}
          isHidden={!totalCount}
        />
        <SectionCartPromotion
          theme={theme}
          availableFbucks={availableFbucks}
          totalFbucks={totalFbucks}
          nextTierInfo={nextTierInfo}
          saveSubTotal={saveSubTotal}
          isHidden={!totalCount}
        />
        <SectionCartList 
          theme={theme}
          items={cartList}
          removeProduct={removeProduct}
          setProductQty={setProductQty}
        />
        <SectionPopularItems
          theme={theme}
          isHidden={!!totalCount}
          items={popularItems}
        />
        <Container>
          <SectionPricesCard
            className="mt-15 mb-15"
            data={prices}
            total={currentSubTotal}
            vat={totalVat}
            isHidden={!totalCount}
          />
          <SectionCheckOut
            theme={theme}
            isDisabled={!(cartList && cartList.length)}
            dtd={dtd}
            handle={handleCheckout} 
            isHidden={!totalCount}
          />
        </Container>
        {/* <SectionStickyBottom
          className="cart-list__sticky-bottom"
          theme={theme}
          handleCheckout={handleCheckout}
          total={currentSubTotal}
        /> */}
      </BaseLayout>
    )
  }
}

CartList.defaultProps = {
  className: '',
  menuInfo: null,
  cartList: null,
  popularItems: null,
  theme: null,
  totalCount: 0,
  availableFbucks: 0,
  totalFbucks: 0,
  totalVat: 0,
  originalSubTotal: 0,
  currentSubTotal: 0,
  saveSubTotal: 0,
  nextTierInfo: null,
  removeProduct: null,
  setProductQty: null,
  handleCheckout: null,
  dtd: null
}

CartList.propTypes = {
  className: PropTypes.string,
  menuInfo: PropTypes.object,
  cartList: PropTypes.array,
  popularItems: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  totalCount: PropTypes.number,
  availableFbucks: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalVat: PropTypes.number,
  originalSubTotal: PropTypes.number,
  currentSubTotal: PropTypes.number,
  saveSubTotal: PropTypes.number,
  nextTierInfo: PropTypes.object,
  removeProduct: PropTypes.func,
  setProductQty: PropTypes.func,
  handleCheckout: PropTypes.func,
  dtd: PropTypes.object,
}

export default CartList
