import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import WishList from 'components/templates/WishList'
import { menuInfo } from 'constants/header'
import Transition from 'containers/Transition'
import { getWishInfo, removeFromWish } from 'redux/modules/wish/actions'
import { addToCart } from 'redux/modules/cart/actions'

class WishListPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentPage: 1
    }
    this.onMoreClick = this.onMoreClick.bind(this)
  }

  componentDidMount(){
    const { getWishList } = this.props
    getWishList()
  }
  
  onMoreClick() {
    let { currentPage } = this.state
    currentPage+=1
    this.setState({currentPage})
  }

  render() {
    const { 
      removeProductFromWish, 
      addProductToCart, 
      theme, 
      totalCount, 
      isLoading,
      wishItems,
      ...others 
    } = this.props
    const { currentPage } = this.state
    const currentList = wishItems.slice(0, currentPage * 20) 
    return (
      <Transition>
        <WishList
          theme={theme}
          isLoading={isLoading}
          menuInfo={menuInfo}
          wishList={currentList}
          totalCount={totalCount}
          removeProductFromWish={removeProductFromWish}
          onMoreClick={this.onMoreClick}
          addProductToCart={addProductToCart}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.wish.isLoading,
    wishItems: state.wish.items,
    totalCount: state.wish.totalCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWishList: () => dispatch(getWishInfo()),
    removeProductFromWish: (sku) => dispatch(removeFromWish(sku)),
    addProductToCart: (sku, qty) => dispatch(addToCart(sku, qty))
  }
}

WishListPage.defaultProps = {
  theme: null,
  removeProductFromWish: null,
  addProductToCart: null,
  getWishList: null,
  isLoading: false,
  wishItems: null,
  totalCount: 0,
}

WishListPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  removeProductFromWish: PropTypes.func,
  addProductToCart: PropTypes.func,
  getWishList: PropTypes.func,
  isLoading: PropTypes.bool,
  wishItems: PropTypes.array,
  totalCount: PropTypes.number,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishListPage)
