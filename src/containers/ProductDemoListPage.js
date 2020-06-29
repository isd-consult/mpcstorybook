import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApiUtils } from 'utils/ApiUtils'
import ProductList from 'components/templates/ProductList'
import { menuInfo } from 'constants/header'
import API from '@aws-amplify/api'
import Transition from 'containers/Transition'
import { AnalyticsProducts } from 'analytics'

const Analytics = new AnalyticsProducts({
  selector: '.card-product',
  datasetId: 'sku',
  datasets: {
    config_sku: 'sku',
    position_on_page: 'position',
    version: 'version',
    qs: 'qs',
    qw: 'qw',
    rs: 'rs',
    rw: 'rw',
    ts: 'ts',
    tw: 'tw',
  },
})

class ProductDemoListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCount: 0,
      curPage: 1,
      totalProductList: null,
      productList: null,
      isLoading: false,
    }
    this.moreProducts = this.moreProducts.bind(this)
  }

  componentDidMount() {
    const { match } = this.props
    const { secretkey, email } = match.params

    this.setState({ isLoading: true })
    API.get(
      'mpc',
      secretkey && email
        ? ApiUtils.productAdminDemoList(secretkey, email)
        : ApiUtils.productCustomerDemoList(),
    )
      .then(response => {
        this.setState({
          totalCount: response.length,
          totalProductList: response,
          isLoading: false,
        })
        this.moreProducts()
      })
      .catch(() => {
        this.setState({ isLoading: false })
      })

    Analytics.scrollMount()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevProducts = prevState.productList
    const { productList: nextProducts } = this.state

    if (prevProducts !== nextProducts) {
      const ids = nextProducts.map(({ sku }) => sku)
      Analytics.trackClicks(ids)
    }
  }

  componentWillUnmount() {
    Analytics.scrollUnmount()
    Analytics.clicksUnmount()
  }

  moreProducts() {
    const { curPage, totalProductList } = this.state
    this.setState({
      curPage: curPage + 1,
      productList: totalProductList.slice(0, 20 * curPage),
    })
  }

  render() {
    const { theme, isAdmin, ...others } = this.props
    const { totalCount, productList, isLoading } = this.state

    const title = 'Demo version Products'
    return (
      <Transition>
        <ProductList
          theme={theme}
          menuInfo={menuInfo}
          title={title}
          totalCount={totalCount}
          isLoading={isLoading}
          productList={productList}
          isAdmin={isAdmin}
          onMoreClick={this.moreProducts}
          {...others}
        />
      </Transition>
    )
  }
}
ProductDemoListPage.defaultProps = {
  theme: null,
  isAdmin: null,
  location: null,
  match: null,
}
ProductDemoListPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAdmin: PropTypes.bool,
  location: PropTypes.object,
  match: PropTypes.object,
}
export default ProductDemoListPage
