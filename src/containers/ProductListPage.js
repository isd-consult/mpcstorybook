import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProductList from 'components/templates/ProductList'
import { sortList } from 'constants/productlist'
import { menuInfo } from 'constants/header'

import {
  clearStateAction,
  onSortAction,
  onFilterAction,
  onMoreAction,
  initAction
} from 'redux/modules/product/actions'

import { AnalyticsProducts } from 'analytics'
import Transition from './Transition'

const Analytics = new AnalyticsProducts({
  selector: '.card-product',
  datasetId: 'sku',
  initial: true,
  datasets: {
    config_sku: 'sku',
    label: 'label',
    position_on_page: 'position',
    version: 'version',
    qs: 'qs',
    qw: 'qw',
    rs: 'rs',
    rw: 'rw',
    ts: 'ts',
    tw: 'tw',
    percentage_score: 'percentage_score'
  },
})

class ProductListPage extends Component {
  async componentDidMount() {
    const { onInit } = this.props

    await onInit()

    Analytics.scrollMount()
  }

  componentDidUpdate(prevProps) {
    const prevProducts = prevProps.products
    const { products: nextProducts } = this.props

    if (prevProducts !== nextProducts) {
      const ids = nextProducts.map(({ sku }) => sku)

      Analytics.trackClicks(ids)
    }
  }

  componentWillUnmount() {
    const { clearState } = this.props

    clearState()

    Analytics.scrollUnmount()
    Analytics.clicksUnmount()
  }

  render() {
    const {
      theme,
      user,
      filters,
      sortOption,
      products,
      totalCount,
      isLoading,
      onMore,
      onSort,
      onFilter,
      title,
      subtitle,
      recommendItems,
      recommendURL,
      ...others
    } = this.props
    const isAdmin = user && user.groups && user.groups.includes('admin')

    return (
      <Transition>
        <ProductList
          theme={theme}
          menuInfo={menuInfo}
          title={title}
          subtitle={subtitle}
          sortOptions={sortList}
          selectedSortOption={sortOption}
          onSortChange={onSort}
          totalCount={totalCount}
          filterOptions={filters}
          onApplyFilter={onFilter}
          isLoading={isLoading}
          productList={products}
          onMoreClick={onMore}
          isAdmin={isAdmin}
          recommendItems={recommendItems}
          recommendURL={recommendURL}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    products: state.product.products,
    recommendItems: state.product.recommendItems,
    recommendURL: state.product.recommendURL,
    totalCount: state.product.totalCount,
    filters: state.product.filters,
    sortOption: state.product.sortOption,
    title: state.product.title,
    subtitle: state.product.subtitle,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInit: () => dispatch(initAction()),
    onMore: () => dispatch(onMoreAction()),
    onSort: options => dispatch(onSortAction(options)),
    onFilter: options => dispatch(onFilterAction(options)),
    clearState: () => dispatch(clearStateAction()),
  }
}

ProductListPage.defaultProps = {
  theme: null,
  user: null,
  isLoading: false,
  products: null,
  totalCount: null,
  filters: null,
  sortOption: null,
  title: '',
  subtitle: '',
  recommendItems: null,
  recommendURL: null,
  onInit: null,
  onMore: null,
  onFilter: null,
  onSort: null,
  clearState: null,
}

ProductListPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  user: PropTypes.object,
  isLoading: PropTypes.bool,
  products: PropTypes.array,
  totalCount: PropTypes.number,
  filters: PropTypes.object,
  sortOption: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  recommendItems: PropTypes.array,
  recommendURL: PropTypes.string,
  onInit: PropTypes.func,
  onMore: PropTypes.func,
  onFilter: PropTypes.func,
  onSort: PropTypes.func,
  clearState: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListPage)

