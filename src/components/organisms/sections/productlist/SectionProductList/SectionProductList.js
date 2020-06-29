/* eslint-disable func-names */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionProductList.scss'
import Text from 'components/atoms/common/Text'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Container from 'components/atoms/layout/Container'
import CardProduct from 'components/molecules/cards/CardProduct'
import Button from 'components/molecules/buttons/Button'
import StringUtils from 'utils/StringUtils'
import Spinner from 'components/molecules/spinners/Spinner'
import ArrayUtils from 'utils/ArrayUtils'
import Icon from 'components/atoms/common/Icon'
import { ApiUtils } from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import { debounce } from 'utils'
import { withMedia } from 'hocs/withMedia'

const apiDebounce = debounce(function(skus) {
  API.post('mpc', ApiUtils.addProductsToSeen(), {
    body: {
      skus,
    },
  })
}, 3000)
class SectionProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewedProduct: false,
      skus: [],
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getPosition(index) {
    const { mq } = this.props

    const rows = 12
    const placement = {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: 2,
    }

    if (!mq) return ''

    return Math.ceil(index / (rows / placement[mq]))
  }

  handleScroll() {
    const { skus } = this.state
    const { isAuthenticated } = this.props
    const productNodes = document.querySelectorAll('.card-product')
    const windowHeight = document.documentElement.clientHeight

    productNodes.forEach(product => {
      const coords = product.getBoundingClientRect()
      const topVisible = coords.top > 0 && coords.top < windowHeight
      const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0

      if (
        !product.classList.contains('card-product--viewed') &&
        (topVisible || bottomVisible)
      ) {
        this.setState({ viewedProduct: true })
        product.classList.add('card-product--viewed')

        if (isAuthenticated) {
          if (skus.indexOf(product.dataset.sku) === -1) {
            skus.push(product.dataset.sku)
          }

          apiDebounce(skus)
        }
      }
    })
  }

  renderNoResult () {
    const {
      theme,
      title
    } = this.props

    const isCategorySearch = StringUtils.getSearchType(title)
    return (
      <>
        {isCategorySearch ?
      (
        <div className="mt-20 mb-30 section-product-list__no-result">
          <Icon
            className="section-product-list__no-result-icon"
            name="shopping-bag"
            size={50}
            theme={theme}
          />
          <div className="section-product-list__no-result-desc">
            <Text size="l" fw="bold" align="center">
              We don&apos;t stock that category
            </Text>
            <Text className="mt-10" size="xs" color="grey" align="center">
              But don&apos;t worry - we&apos;re sure you&apos;ll find a special
              something in our sneaker collection
            </Text>
          </div>
        </div>
      ):
      (
        <>
          <Icon name="shopping-bag" size={50} theme={theme} />
          <Text className="mt-20" size="l" color="grey" align="center">
            We can&apos;t seem to find any products
          </Text>
          <div className="mb-30">
            <Text tag="span" size="l" color="grey" align="center">
              matching your search for&nbsp;
            </Text>
            <Text tag="span" size="l" fw="bold" color="red">{title}</Text>
          </div>
        </>
      )}
      </>
    )
  }

  render() {
    const {
      theme,
      className,
      totalCount,
      onMoreClick,
      isLoading,
      items,
      isAdmin,
      isAuthenticated,
    } = this.props
    const { skus } = this.state
    const isDisabledMoreButton = items && items.length === totalCount
    const viewedcount = items && items.length ? items.length : 0
    const { viewedProduct } = this.state

    return (
      <div
        className={clsx('section-product-list pl-15 pr-15', className)}
        data-viewed={viewedProduct}
      >
        <Container>
          {!isLoading && (
            <Text className="pt-20 pd-20" align="center">
              {totalCount
                ? `${StringUtils.numberWithCommas(totalCount)} items`
                : null}
            </Text>
          )}
          <Row>
            {items &&
              items.map((item, index) => {
                const maxQty = ArrayUtils.getMaxValue(
                  ArrayUtils.extractedArray(item.sizes, 'qty'),
                )

                const url = `/product_detail/${item.sku}`
                return (
                  <Col key={index.toString()} xs={6} sm={4} md={3} lg={2}>
                    <CardProduct
                      theme={theme}
                      href={url}
                      image={item.image}
                      badge={item.badge}
                      isInCart={item.isInCart}
                      isSoldOut={maxQty < 1}
                      title={item.brand}
                      sku={item.sku}
                      subTitle={item.title}
                      price={item.original_price}
                      discount={item.current_price}
                      trackingInfo={item.tracking_info}
                      credit={item.fbucks}
                      isAdmin={isAdmin}
                      scores={item.scores}
                      isUnseen={
                        !(item.is_seen || skus.indexOf(item.sku) > -1) &&
                        isAuthenticated
                      }
                      position={this.getPosition(index + 1)}
                    />
                  </Col>
                )
              })}
          </Row>
          {isLoading ? (
            <Spinner className="mt-20" isCentered isLogo theme={theme} />
          ) : (
            <Text className="pt-20 pd-20" align="center">
              {!totalCount && this.renderNoResult()}
              {totalCount
                ? `${StringUtils.numberWithCommas(viewedcount)} of ` +
                  `${StringUtils.numberWithCommas(totalCount)} products viewed`
                : ''}
            </Text>
          )}
          {totalCount && !isLoading ? (
            <Button
              className="section-product-list__morebtn mt-20 mb-20"
              theme={theme}
              onClick={onMoreClick}
              isCentered
              isSmall
              isDisabled={isDisabledMoreButton}
            >
              View more
            </Button>
          ) : null}
        </Container>
      </div>
    )
  }
}

SectionProductList.defaultProps = {
  className: '',
  isLoading: false,
  items: null,
  totalCount: 0,
  theme: null,
  onMoreClick: null,
  isAdmin: false,
  isAuthenticated: false,
  mq: '',
  title: null
}

SectionProductList.propTypes = {
  className: PropTypes.string,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
      }),
      badge: PropTypes.string,
      isInCart: PropTypes.bool,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      price: PropTypes.number,
      discount: PropTypes.number,
      tracking_info: PropTypes.shape({
        views: PropTypes.number,
        clicks: PropTypes.number,
      }),
    }),
  ),
  onMoreClick: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAdmin: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  mq: PropTypes.string,
  title: PropTypes.string
}

export default withMedia(SectionProductList)
